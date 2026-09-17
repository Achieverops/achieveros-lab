# CAR-T Cell Therapy Manufacturing Tracker

> Figma Node: `166:2` · Specialization: Biotechnology

## Vein-to-Vein Timeline

Patient PT-2026-0847 · Product: Tisagenlecleucel (Kymriah) · Elapsed: 22 days / 28 target

| Step | Day | Status |
|------|-----|--------|
| Apheresis | Day 0 | ✓ Complete |
| Ship | Day 1 | ✓ Complete |
| T-Cell Isolation | Day 3 | ✓ Complete |
| Activation | Day 5–8 | ✓ Complete |
| Expansion | Day 8–14 | ✓ Complete |
| Harvest | Day 15–18 | ✓ Complete |
| QC Testing | Day 19–24 | ● In Progress |
| Release | Day 25–26 | ○ Pending |
| Lymphodepletion | Day 26–28 | ○ Pending |
| Infusion | Day 28 | ○ Pending |

## QC Testing (Batch KYM-2026-0847-001)

| Test | Result | Spec | Status |
|------|--------|------|--------|
| Sterility (14-day) | In progress | Day 7/14 | Pending |
| Mycoplasma PCR | Negative | Pass | ✓ |
| Endotoxin | 0.15 EU/mL | < 3.5 EU/mL | ✓ |
| Cell viability | 94.2% | ≥ 80% | ✓ |
| CAR+ % | 31.4% | ≥ 20% | ✓ |
| CD3+ % | 97.8% | ≥ 95% | ✓ |
| Transduction | 28.6% | ≥ 15% | ✓ |
| Vector CN | 2.4 | ≤ 5 | ✓ |
| Potency | 62% kill | ≥ 40% | ✓ |
| Identity | Confirmed | Positive | ✓ |

## Chain of Custody (Blockchain-Verified)

| Timestamp | Event | Handler | Location | Hash |
|-----------|-------|---------|----------|------|
| 2026-09-01 08:00 | Apheresis collection | Dr. Sarah Chen | Johns Hopkins | 0x7a2f…e4b1 |
| 2026-09-02 06:00 | Cryopreserved shipment | BioLife Solutions | World Courier | 0x3d8c…f291 |
| 2026-09-03 14:00 | Receipt at manufacturing | Novartis Morris Plains | Temp: -150°C | 0x9e1a…b847 |
| 2026-09-20 10:00 | QC testing initiated | QC Lab Operator #7 | 14-day sterility | 0x2b7d…c562 |

## Deviation

⚠ DEV-2026-047 — CO₂ temp excursion (37.8°C vs 37.0±0.5°C) Day 11. Impact: MINOR. Viability unaffected. CAPA: CAL-2026-091 (sensor calibration drift).
