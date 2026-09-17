# Research Methodology Frameworks & Trial Design

> **Source:** Figma frames `158:2` (Research methodology templates lens) and `159:675` (Advanced trial design simulator) in section `02 · IDEATION & RESEARCH`

---

## Research Methodology Templates Lens

**Figma:** `158:2` | **Route:** Ideation Canvas Lens

Insert structured research frameworks as interactive canvas subgraphs. Select a methodology to drop onto the spatial canvas as nodes.

### Categories

| Category | Frameworks |
|----------|------------|
| Study Design | PICO/PICOT, GRADE, Cochrane RoB 2, Newcastle-Ottawa, + more |
| Risk & Safety | (frameworks per specialization) |
| Quality | (frameworks per specialization) |
| Decision | (frameworks per specialization) |
| Causal/Systems | (frameworks per specialization) |
| Regulatory | (frameworks per specialization) |
| Trial Design | (frameworks per specialization) |

### Filter by Specialization

All 8 specializations can be filtered: Clinical, Discovery, Genomic, HumanPerf, Ops, Biotech, MedTech, Reg

### Wireframed Templates (partial list)

| Template | Type | Specialization |
|----------|------|----------------|
| PICO/PICOT | Study Design | Clinical |
| GRADE Framework | Study Design | Clinical |
| Cochrane RoB 2 | Study Design | Clinical |
| Newcastle-Ottawa | Study Design | Clinical |
| + 20 more frameworks | Various | All 8 |

**Status bar:** 42 Shadow signals · Template engine: 24 frameworks loaded · Specialization: All 8 active · Canvas: Ready for insertion

---

## Advanced Trial Design Simulator

**Figma:** `159:675` | **Route:** Ideation → Advanced Trial Design

### Trial Types Available

| Type | Description |
|------|-------------|
| Adaptive | Response-adaptive randomization with interim analyses |
| Bayesian | Prior-informed with posterior decision thresholds |
| Platform | Multi-arm, multi-stage with dropping rules |
| Basket | Same biomarker across tumor types |
| Umbrella | Multiple biomarker-driven arms within one disease |
| N-of-1 | Individual patient crossover trials |
| SMART | Sequential multiple assignment randomized |
| Stepped-Wedge | Cluster rollout over time |
| Pragmatic | Real-world evidence embedded |
| Master Protocol | Central screening with sub-studies |

### Adaptive Trial Configuration (wireframed in detail)

**Trial Structure:**
- Arms: 3 (Ctrl + 2 Exp)
- Max Sample Size: 450
- Interim Analyses: 3 (at 33%, 50%, 75%)
- Endpoint: Overall Survival
- Follow-up: 24 months

**Adaptation Rules:**
- Response-Adaptive randomization
- Futility Boundary: O'Brien-Fleming
- Efficacy Boundary: Lan-DeMets
- SSR: Promising Zone
- Arm Dropping: Futility at interim

**Bayesian Parameters:**
- Prior: Weakly informative
- Decision Threshold: P(sup) > 0.975
- Borrowing: configurable

**Technology:** L4 WASM Simulation Engine
- 10,000 trials simulated in ~4.1 seconds
- Fully client-side, no server required
- FDA/EMA regulatory alignment
- Shadow: 61 signals
- Type I error: CONTROLLED

---

## Per-Specialization Methodology Templates (from Vault Inventory)

| Specialization | Templates |
|----------------|----------|
| Clinical | PRISMA-P, CONSORT, STROBE + 2 more |
| Discovery | HTS Cascade, Fragment-Based, SBDD + 2 more |
| Genomic | ACMG Classification, WGS Pipeline, RNA-Seq DE + 2 more |
| Human Performance | RCT Crossover, N-of-1 Trial, Time-Series + 2 more |
| Healthcare Ops | PDCA, DMAIC, Lean Six Sigma + 2 more |
| Biotechnology | QbD, PAT, ICH Q8-Q12 + 2 more |
| MedTech | Design Controls, V-Model, FMEA + 2 more |
| Regulatory | CAPA, Root Cause Analysis, ICH Q9 Risk + 2 more |
