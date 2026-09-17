# Gap-Closing Panels — Advanced Wireframes

> **Source:** Figma section `🧬 GAP-CLOSING` (4 frames) + Ideation section
>
> These panels close specific capability gaps identified in the planning pack.

---

## 1. Molecular Tumor Board Panel

**Figma:** `163:213` | **Route:** Ideation → Molecular Tumor Board · Clinical Intelligence

**Patient Genomics wireframed:**
- Search by patient/study ID
- Recent patients: PT-2026-0847 (NSCLC Stage IIIB, EGFR L858R + T790M), PT-2026-0831 (Breast Triple-Neg, BRCA1), PT-2026-0819 (Melanoma Stage IV, BRAF V600E), PT-2026-0802 (CRC Metastatic, MSI-H / KRAS G12C), PT-2026-0794 (AML, FLT3-ITD + NPM1)

**Gene Panels:** MSK-IMPACT, FoundationOne, Tempus xT, Guardant360

**Variant Interpretation detail:**
- 505-gene panel · FoundationOne CDx · Tumor: 62% · TMB: 14.2 mut/Mb
- Columns: Gene, Variant, VAF + therapy matching
- Technology: OncoKB v4.3, ClinVar 2026-09, 14 matched therapies
- Shadow: 63 signals

---

## 2. Master Protocol Designer

**Figma:** `166:204` | **Route:** Ideation → Master Protocol · Clinical Intelligence / Regulatory

**Protocol Library wireframed:**
| Protocol | Disease | Type | Status |
|----------|---------|------|--------|
| I-SPY 2 | Breast | Bayesian adaptive | Active |
| LUNG-MAP | NSCLC | Umbrella | Active |
| NCI-MATCH | Pan-tumor | Basket | Active |
| GBM AGILE | Glioblastoma | Platform | Active |
| STAMPEDE | Prostate | Multi-arm | Complete |
| RECOVERY | COVID | Adaptive | Complete |

**Design Templates:**
- 📋 Basket Trial
- 📋 Umbrella Trial
- 📋 Platform Trial
- 📋 Adaptive Enrichment
- 📋 Seamless Phase II/III

**Design detail:** AOS-BASKET-2026 · Pan-Tumor · Biomarker-Driven · 6 Arms with Central Molecular Screening → Biomarker Assignment

---

## 3. Federated Learning Multi-Site Hub

**Figma:** `166:488` | **Route:** Visualization Studio → Federated Learning · Healthcare Operations

**Federation Network wireframed:**
| Site | Location | Patients | Status |
|------|----------|----------|--------|
| MD Anderson | Houston, TX | 342 | 🟢 Online |
| MSK | New York, NY | 287 | 🟢 Online |
| Mayo Clinic | Rochester, MN | 198 | 🟢 Online |
| Dana-Farber | Boston, MA | 223 | 🟢 Online |
| Johns Hopkins | Baltimore, MD | 176 | ⚠ Syncing |
| Cleveland Clinic | Cleveland, OH | 154 | 🟢 Online |
| UCSF | San Francisco | — | ⚪ Offline |

**Privacy:** Differential Privacy ε=1.0, Secure Aggregation

**Study:** NSCLC-OS-PREDICT · 6 Sites · 1,380 Patients · No Data Leaves Site
**Technology:** FedAvg · NVIDIA FLARE v2.4 · Global Model Convergence Round 47/100

---

## 4. Companion Diagnostics Co-Development Panel

**Figma:** `166:630` | **Route:** Business & Mediation → CDx · MedTech / Regulatory

**CDx Programs wireframed:**
| Program | CDx Platform | Therapeutic | Biomarker |
|---------|-------------|-------------|----------|
| CDx-001 | FoundationOne CDx | Osimertinib | EGFR |
| CDx-002 | Ventana PD-L1 | Durvalumab | PD-L1 |
| CDx-003 | Guardant360 CDx | Sotorasib | KRAS |
| CDx-004 | Dako 22C3 PD-L1 | Pembrolizumab | PD-L1 |
| CDx-005 | Therascreen EGFR | Gefitinib | EGFR |

**Co-Development Timeline:** Therapeutic × Diagnostic parallel tracks
- Drug Track: Discovery → Phase I → Phase II → Phase III → NDA → Approval
- CDx Track: Assay Dev → Analytical Val → Clinical Val → PMA → Approval
