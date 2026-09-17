# AchieverOS Lab — Website Designer Brief

> **Updated 2026-09-17** · Authoritative PDF catalog (640 items)
>
> ⚠️ **This is NOT a SaaS product.** AchieverOS Lab is a self-hosted, zero-PHI research laboratory platform. Never describe it as SaaS in any marketing, UI copy, or documentation.

---

## Platform Identity

| Field | Value |
|---|---|
| Name | **AchieverOS Lab** |
| Type | Research Laboratory Platform |
| Badge | `Zero-PHI · No patient identity · No MedLM` |
| Deployment | Self-hosted on GCP me-central2 |
| Billing | Wafeq ZATCA CSID |

---

## Design Tokens (Light Snow Theme)

| Token | Hex | Usage |
|---|---|---|
| `background` | `#F2FAFA` | Page background |
| `panel` | `#EDF4F5` | Card/panel fill |
| `navBar` | `#122060` | Top navigation |
| `border` | `#DAEBED` | Dividers, card borders |
| `titleText` | `#0D1B38` | Headings |
| `bodyText` | `#42536D` | Primary body copy |
| `mutedText` | `#607A86` | Secondary / muted text |
| `teal` | `#0D9488` | Methodologies accent |
| `blue` | `#1D4ED8` | Software accent |

**Font:** Inter — Regular, Medium, Semi Bold, Bold

---

## Catalog Section Color Coding

When displaying the methodology/tools directory:

| Section | Color | Hex |
|---|---|---|
| Methodologies & Frameworks | Teal | `#0D9488` |
| Software, AI & Solvers | Blue | `#1D4ED8` |
| Databases & Ontologies | Dark Blue | `#122060` |
| Hardware & GMP Enablers | Brown/Orange | `#92400E` |

---

## 8 Specializations — For Navigation & Landing Pages

| # | Slug | Display Label | Studio Name |
|---|---|---|---|
| 1 | `clinical-intelligence` | Clinical Intelligence | Research Command Center · Evidence Studio |
| 2 | `discovery-sciences` | Discovery Sciences | Molecular Research Lab · Molecular Studio |
| 3 | `genomic-medicine` | Genomic Medicine | Variant Interpretation · Variant Studio |
| 4 | `human-performance` | Human Performance | Biometric Optimization · Protocol Studio |
| 5 | `healthcare` | Healthcare Operations | Health System Ops · Operations Studio |
| 6 | `biotechnology` | Biotechnology & Bioprocessing | Molecular Engineering · Engineering Studio |
| 7 | `medtech-architecture` | MedTech Architecture | Device Engineering · Device Studio |
| 8 | `regulatory-intelligence` | Regulatory Intelligence | Submission Command · Submission Studio |

---

## Execute Flows — Per Specialty Pipeline

These are the step-by-step research pipelines shown in the Execute view:

| Specialty | Flow |
|---|---|
| Clinical Intelligence | Hypothesis → Endpoint → Cohort → Regulatory |
| Discovery Sciences | Disease → Gene → Protein → Compound → ADMET |
| Genomic Medicine | Gene → Variant → Significance → Panel → Therapy |
| Human Performance | Goal → Biomarker → Measurement → Protocol |
| Healthcare Operations | Friction → Population → Intervention → Reimbursement |
| Biotechnology | Target → Modality → Process → Scale-Up |
| MedTech Architecture | Concept → Classification → Standards → Build |
| Regulatory Intelligence | Product → Jurisdiction → Pathway → Timeline |

---

## 5 Main Pages

| Page | Route | Description |
|---|---|---|
| Command Center | `/lab/[slug]/command` | Specialty HUD, KPI tiles, recent activity, quick-launch toolbar |
| Ideation & Research | `/lab/[slug]/ideation` | Hypothesis builder, literature search, AI discovery, methodology selector |
| Visualization Studio | `/lab/[slug]/visualization` | Scientific viewers (pathology, molecular, genomic, DICOM), charts |
| Literature Review | `/lab/[slug]/literature` | Systematic review, PRISMA flow, citation manager, evidence grading |
| Business & Mediation | `/lab/[slug]/business` | Feasibility analysis, IP landscape, regulatory pathway, budget modeling |

---

## Key Numbers for Marketing / Feature Pages

| Metric | Value |
|---|---|
| Total catalog items | **640** |
| Specializations | **8** |
| Subspecializations | **14** |
| Catalog columns | **4** (Methodologies, Software, Databases, Hardware) |
| Main pages | **5** |
| Panel tools | **58** |
| WASM compute modules | **5** |
| Scientific viewers | **4** (WebGL-powered molecular & DICOM) |
| AI agent types | **3** |
| Agent lanes | **6** |
| Shared fabric rows | **189** |
| Partner vault entries | **30** |

---

## Workspace Modes

| Mode | Specialties | Description |
|---|---|---|
| **Board** (Spatial) | clinical, discovery, genomic, human-perf, healthcare, biotech | Free-form canvas workspace |
| **Wizard** (Sequential) | medtech-architecture, regulatory-intelligence | Step-by-step guided workflow |

---

## Panel Opening Pattern (UX Flow)

```
L0 page → click vault/toolbar tool → L2 panel drawer → methodology loads
→ white-dotted live function → results to center stage
```

---

## Shared Components (Always Visible, All Specialties)

- 189 fabric rows · 86 resource rows · 103 intel rows
- 30 partner vault entries
- OAuth2 Enclave
- Wafeq ZATCA CSID billing
- Agentic OS 6 lanes
- Overlay layers A–E
- journey_shadow telemetry
- LayerRail navigation
- INNOVATION 10-step dock
- Filing drawer + envelope dialogue
- Guided Journey button → `/lab/[slug]/guided` (dark route only)

---

## Scientific Viewers (for Feature Showcases)

| Viewer | Engine | WebGL? | Data Format |
|---|---|---|---|
| Pathology | OpenSeadragon | No (Canvas 2D) | WSI |
| Molecular | 3Dmol.js | **Yes** | PDB, SDF, MOL2 |
| Genomic | IGV.js | No (Canvas/SVG) | BAM, VCF, BED |
| DICOM | Cornerstone.js | **Yes** | DICOM P10 |

---

## Security & Compliance (for Trust Page)

- Zero-PHI: No patient identity data, no MedLM
- Merkle-hashed tamper-evident audit trails
- Secure Enclave HSM for e-signatures
- AES-256 at rest, TLS 1.3 in transit
- Research ethics compliance engine
- Automated PHI detection & de-identification

---

## Data Integrations

- FHIR R4 client (SMART on FHIR Sandboxes)
- OMOP CDM v5.4 mapper
- DuckDB WASM (in-browser analytics)
- Epic App Orchard · Cerner Ignite APIs

---

## File References

| Asset | Location |
|---|---|
| Full TypeScript manifest | `docs/engineering-handoff/ENGINEERING_UPDATE.ts` |
| Figma wireframes | File key `MVptXzeMVzGBDPRfdae3Jf` |
| Methodology directory (MD) | `docs/gemini-discovery/08-comprehensive-methodology-tools-directory.md` |
| Engine source | `src/engine/` |
| Planning docs | `docs/gemini-discovery/00-08` |
