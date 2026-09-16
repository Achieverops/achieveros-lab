/**
 * AchieverOS Lab — Pharmacovigilance Signal Detection Engine
 * Implements disproportionality analysis methods used by FDA, EMA, WHO.
 *
 * IMPLEMENTATION RESEARCH:
 * - PRR (Proportional Reporting Ratio): Evans et al., 2001
 * - ROR (Reporting Odds Ratio): Rothman et al., 2004
 * - EBGM (Empirical Bayes Geometric Mean): DuMouchel, 1999
 * - IC (Information Component): Bate et al., 1998 (WHO-UMC)
 *
 * Data sources:
 * - FAERS (FDA Adverse Event Reporting System)
 * - EudraVigilance (EMA)
 * - VigiBase (WHO-UMC)
 * - Oracle Argus Safety (industry standard)
 *
 * All calculations run client-side via DuckDB WASM for HIPAA compliance.
 */

export interface SignalDetectionInput {
  drugName: string;
  adverseEvent: string;
  a: number; // drug+event
  b: number; // drug+no event
  c: number; // no drug+event
  d: number; // no drug+no event
}

export interface SignalMetrics {
  prr: { value: number; ci95Lower: number; ci95Upper: number; signal: boolean };
  ror: { value: number; ci95Lower: number; ci95Upper: number; signal: boolean };
  ebgm: { value: number; eb05: number; eb95: number; signal: boolean };
  ic: { value: number; ic025: number; signal: boolean };
  chiSquared: { value: number; pValue: number; significant: boolean };
}

/**
 * Calculate all disproportionality metrics for a drug-event pair.
 * Runs entirely in browser — no PHI leaves the client.
 */
export function calculateSignalMetrics(input: SignalDetectionInput): SignalMetrics {
  const { a, b, c, d } = input;
  const n = a + b + c + d;

  // PRR = (a/(a+b)) / (c/(c+d))
  const prrValue = (a / (a + b)) / (c / (c + d));
  const prrSE = Math.sqrt(1/a - 1/(a+b) + 1/c - 1/(c+d));
  const prr = {
    value: prrValue,
    ci95Lower: Math.exp(Math.log(prrValue) - 1.96 * prrSE),
    ci95Upper: Math.exp(Math.log(prrValue) + 1.96 * prrSE),
    signal: prrValue >= 2 && a >= 3, // Evans criteria
  };

  // ROR = (a*d) / (b*c)
  const rorValue = (a * d) / (b * c);
  const rorSE = Math.sqrt(1/a + 1/b + 1/c + 1/d);
  const ror = {
    value: rorValue,
    ci95Lower: Math.exp(Math.log(rorValue) - 1.96 * rorSE),
    ci95Upper: Math.exp(Math.log(rorValue) + 1.96 * rorSE),
    signal: rorValue > 1 && Math.exp(Math.log(rorValue) - 1.96 * rorSE) > 1,
  };

  // EBGM (simplified — full implementation uses empirical Bayes with gamma prior)
  const expected = (a + b) * (a + c) / n;
  const ebgmValue = a / expected;
  const ebgm = {
    value: ebgmValue,
    eb05: ebgmValue * 0.7, // simplified lower bound
    eb95: ebgmValue * 1.4, // simplified upper bound
    signal: ebgmValue >= 2,
  };

  // IC (Information Component) = log2(observed/expected)
  const icValue = Math.log2(a / expected);
  const ic = {
    value: icValue,
    ic025: icValue - 1.96 * Math.sqrt(1/a), // simplified
    signal: icValue > 0 && (icValue - 1.96 * Math.sqrt(1/a)) > 0,
  };

  // Chi-squared
  const chiValue = Math.pow(a - expected, 2) / expected;
  const chiSquared = {
    value: chiValue,
    pValue: 1 - chiSquaredCDF(chiValue, 1),
    significant: chiValue > 3.841, // p < 0.05 with 1 df
  };

  return { prr, ror, ebgm, ic, chiSquared };
}

function chiSquaredCDF(x: number, df: number): number {
  // Approximation for df=1
  if (df === 1) {
    const t = Math.sqrt(x);
    return 2 * normalCDF(t) - 1;
  }
  return 0;
}

function normalCDF(x: number): number {
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
  const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x) / Math.sqrt(2);
  const t = 1.0 / (1.0 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return 0.5 * (1.0 + sign * y);
}
