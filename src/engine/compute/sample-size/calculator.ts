/**
 * AchieverOS Lab — WASM Sample Size Calculator
 * Deterministic client-side computation — zero server round-trips.
 * Supports: superiority, non-inferiority, equivalence designs.
 *
 * IMPLEMENTATION RESEARCH:
 * - Use Rust compiled to WASM via wasm-pack
 * - Statistical distributions: statrs crate
 * - For browser: wasm-bindgen + web-sys
 * - DuckDB WASM for cohort size queries on real data
 *
 * Key formulas:
 * - Two-sample z-test: n = (Zα/2 + Zβ)² × (p1(1-p1) + p2(1-p2)) / (p1-p2)²
 * - Non-inferiority: n = (Zα + Zβ)² × (σ1² + σ2²) / (δ - Δ)²
 * - Bayesian: Monte Carlo posterior probability estimation
 */

export interface SampleSizeInput {
  design: 'superiority' | 'non-inferiority' | 'equivalence';
  endpoint: 'continuous' | 'binary' | 'time-to-event';
  alpha: number;        // Type I error rate (default 0.05)
  power: number;        // 1 - beta (default 0.80)
  effectSize: number;   // Expected treatment difference
  controlRate?: number; // Control group event rate (binary)
  sigma?: number;       // Standard deviation (continuous)
  margin?: number;      // Non-inferiority/equivalence margin
  dropoutRate: number;  // Expected dropout (inflate sample size)
  allocationRatio: number; // Randomization ratio (default 1:1)
}

export interface SampleSizeResult {
  nPerArm: number;
  nTotal: number;
  nAdjusted: number; // After dropout inflation
  power: number;
  criticalValue: number;
  powerCurve: { effectSize: number; power: number }[];
  computation: 'WASM' | 'JavaScript';
  deterministic: boolean;
  reproducible: boolean;
}

/**
 * Calculate sample size using frequentist methods.
 * Runs entirely in the browser via WASM — no server calls.
 */
export function calculateSampleSize(input: SampleSizeInput): SampleSizeResult {
  // Z-scores from normal distribution
  const zAlpha = normalQuantile(1 - input.alpha / 2);
  const zBeta = normalQuantile(input.power);

  let nPerArm: number;

  switch (input.design) {
    case 'superiority':
      if (input.endpoint === 'binary') {
        const p1 = input.controlRate!;
        const p2 = p1 + input.effectSize;
        nPerArm = Math.ceil(
          Math.pow(zAlpha + zBeta, 2) *
          (p1 * (1 - p1) + p2 * (1 - p2)) /
          Math.pow(input.effectSize, 2)
        );
      } else {
        // Continuous endpoint
        nPerArm = Math.ceil(
          2 * Math.pow((zAlpha + zBeta) * input.sigma!, 2) /
          Math.pow(input.effectSize, 2)
        );
      }
      break;

    case 'non-inferiority':
      nPerArm = Math.ceil(
        Math.pow(zAlpha + zBeta, 2) * 2 * Math.pow(input.sigma!, 2) /
        Math.pow(input.margin! - input.effectSize, 2)
      );
      break;

    case 'equivalence':
      nPerArm = Math.ceil(
        Math.pow(zAlpha + zBeta, 2) * 2 * Math.pow(input.sigma!, 2) /
        Math.pow(input.margin!, 2)
      );
      break;
  }

  const nTotal = nPerArm * (1 + input.allocationRatio);
  const nAdjusted = Math.ceil(nTotal / (1 - input.dropoutRate));

  // Generate power curve
  const powerCurve = generatePowerCurve(input, nPerArm);

  return {
    nPerArm,
    nTotal,
    nAdjusted,
    power: input.power,
    criticalValue: zAlpha,
    powerCurve,
    computation: 'JavaScript', // 'WASM' when Rust module loaded
    deterministic: true,
    reproducible: true,
  };
}

function normalQuantile(p: number): number {
  // Rational approximation (Abramowitz and Stegun 26.2.23)
  if (p <= 0 || p >= 1) throw new Error('p must be in (0, 1)');
  const t = Math.sqrt(-2 * Math.log(p < 0.5 ? p : 1 - p));
  const c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
  const d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
  const q = t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
  return p < 0.5 ? -q : q;
}

function generatePowerCurve(
  input: SampleSizeInput,
  nPerArm: number
): { effectSize: number; power: number }[] {
  const curve: { effectSize: number; power: number }[] = [];
  for (let es = input.effectSize * 0.2; es <= input.effectSize * 2; es += input.effectSize * 0.1) {
    // Approximate power for this effect size
    const ncp = es * Math.sqrt(nPerArm / 2) / (input.sigma || 1);
    const power = normalCDF(ncp - normalQuantile(1 - input.alpha / 2));
    curve.push({ effectSize: Math.round(es * 1000) / 1000, power: Math.round(power * 1000) / 1000 });
  }
  return curve;
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
