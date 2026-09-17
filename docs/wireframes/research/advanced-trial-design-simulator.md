# Advanced Trial Design Simulator

> Figma Node: `159:675`

## Trial Types Supported

Adaptive · Bayesian · Platform · Basket · Umbrella · N-of-1 · SMART · Stepped-Wedge · Pragmatic · Master Protocol

## Adaptive Trial Configuration

| Parameter | Value |
|-----------|-------|
| Arms | 3 (Ctrl + 2 Exp) |
| Max Sample Size | 450 |
| Interim Analyses | 3 (33%, 50%, 75%) |
| Endpoint | Overall Survival |
| Follow-up | 24 months |

### Adaptation Rules
- Response-Adaptive: ON
- Futility Boundary: O'Brien-Fleming
- Efficacy Boundary: Lan-DeMets
- SSR: Promising Zone
- Arm Dropping: Futility at interim

### Bayesian Parameters
- Prior: Weakly informative
- Decision Threshold: P(sup) > 0.975
- Borrowing: Power prior (a₀=0.3)
- Predictive Prob: ≥0.90

## Simulation Results (10,000 Trials · 4.1s · L4 WASM)

| Metric | Value |
|--------|-------|
| Power | 84.2% |
| Type I Error | 2.3% |
| E[N] H₁ | 378 |
| E[N] H₀ | 285 |
| P(early stop) | 42% |
| P(futility) | 68% |

### Arm-Level Results
| Arm | Assigned N | P(Winner) | P(Dropped) | Final RAR |
|-----|-----------|-----------|------------|----------|
| Control | 150 (33%) | — | — | 33%→33% |
| Experimental A | 128 (28%) | 52.3% | 18.4% | 33%→38% |
| Experimental B | 100 (22%) | 31.9% | 45.2% | 33%→22% |

### Regulatory Compliance
- ✓ Type I error controlled (≤2.5% one-sided)
- ✓ Multiplicity adjustment (Bonferroni-Holm)
- ⚠ Pre-specified adaptation rules in SAP: DRAFT
- ⚠ IDMC charter: NEEDED
- ✓ FDA Adaptive Design Guidance (2019) aligned
- ✓ EMA Reflection Paper compliant

## Design Library
- Phase II/III Seamless, Response-Adaptive (RAR), Group Sequential (GSD), Sample Size Re-estimation, Biomarker-Adaptive, Multi-Arm Multi-Stage, Platform Trial, Basket Trial, Umbrella Trial, N-of-1 Trial

## Reference Guidelines
- FDA: Adaptive Designs (2019), Master Protocols (2022)
- EMA: Reflection Paper on Adaptive
- ICH E9(R1): Estimands, ICH E20: Adaptive Clinical Trials
- Bayesian Clinical Trials (Berry)
