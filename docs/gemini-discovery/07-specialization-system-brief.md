# 07 — Specialization System Brief

> **Status:** APPROVAL REQUIRED BEFORE BUILD
> **Figma Section:** 🧩 SPECIALIZATION SYSTEM (203:2) — 11 wireframes
> **Engineering SoT:** `specialty-ultimate.ts`, `specialty-hud.ts`, `practice-selection.ts`, `investigation-map.ts`

---

## 1. Three-Layer Architecture

| Layer | Name | Scope | Source |
|-------|------|-------|--------|
| **A** | Specialization | 8 slugs — org/team level | `specialty-ultimate.ts` |
| **B** | Subspecialization | 14 investigation category IDs — resource filter scope | `investigation-map.ts` |
| **C** | Personalized Specialty | Per-user customization — rename, pin, reorder | `practice-selection.ts` |

**Core Rule:** Same 5 L0 pages for every user. Specialization changes presets — not a separate page tree. Zero-PHI: personalization adjusts researcher tool, not patient identity.

---

## 2. Layer A — 8 Specializations (Authoritative Slugs)

| # | Slug | Title | Ultimate Tool/Studio | Default Flow | Category IDs | Workspace Mode |
|---|------|-------|---------------------|-------------|-------------|----------------|
| 1 | `clinical-intelligence` | Clinical Intelligence | Trial Design Studio | Execute | 01, 02 | Wizard |
| 2 | `discovery-sciences` | Discovery Sciences | Compound Discovery Engine | Visualize | 03, 04 | Board |
| 3 | `genomic-medicine` | Genomic Medicine | Variant Interpretation Suite | Visualize | 05, 06 | Board |
| 4 | `human-performance` | Human Performance | Performance Analytics Lab | Execute | 07 | Board |
| 5 | `healthcare` | Healthcare | Population Health Console | Business | 08, 09 | Wizard |
| 6 | `biotechnology` | Biotechnology | BioEngineering Workbench | Execute | 10, 11 | Board |
| 7 | `medtech-architecture` | MedTech Architecture | Device Compliance Toolkit | Execute | 12 | Wizard |
| 8 | `regulatory-intelligence` | Regulatory Intelligence | Regulatory Strategy Center | Business | 13, 14 | Wizard |

---

## 3. Layer B — 14 Investigation Categories

| Cat ID | Category Name | Primary Specialty |
|--------|--------------|-------------------|
| 01 | Clinical Trial Design | clinical-intelligence |
| 02 | Systematic Review & Meta-analysis | clinical-intelligence |
| 03 | Drug Discovery & SAR | discovery-sciences |
| 04 | Molecular & Structural Biology | discovery-sciences |
| 05 | Genomic Variant Interpretation | genomic-medicine |
| 06 | Multi-omics Integration | genomic-medicine |
| 07 | Biomarker & Performance Science | human-performance |
| 08 | Population Health & Epidemiology | healthcare |
| 09 | Health Informatics & Interop | healthcare |
| 10 | Synthetic Biology & Gene Editing | biotechnology |
| 11 | Bioprocess & Manufacturing | biotechnology |
| 12 | Medical Device Engineering | medtech-architecture |
| 13 | Regulatory Submission | regulatory-intelligence |
| 14 | Real-World Evidence & Safety | regulatory-intelligence |

---

## 4. Per-Specialty Inquiry Modules (3 each, 24 total)

| Specialty | Module 1 | Module 2 | Module 3 |
|-----------|----------|----------|----------|
| clinical-intelligence | Trial Feasibility Assessor | Endpoint Concordance Matcher | Evidence Quality Grader |
| discovery-sciences | Virtual Compound Screener | ADMET Predictor | Target Validation Engine |
| genomic-medicine | Pathogenicity Classifier | Pharmacogenomic Evaluator | Rare Disease Matcher |
| human-performance | Biomarker Range Evaluator | Longevity Protocol Designer | Telemetry Ingestion Simulator |
| healthcare | Population Health Modeler | Readmission Risk Predictor | Interoperability Validator |
| biotechnology | Guide Design Tool | Enzymatic Pathway Simulator | Cell Line Yield Predictor |
| medtech-architecture | Predicate Matcher | Safety Signal Inspector | Compliance Checklist Engine |
| regulatory-intelligence | Submission Pathway Analyzer | Precedent Approval Search | Global Safety Tool |

---

## 5. Per-Specialty Integration Chips

Wire badges: 🟢 live · 🟠 SoftStub · never show CONNECTED for Mayo/Epic/Benchling from keys alone.

| Specialty | Integration Chips |
|-----------|------------------|
| clinical-intelligence | PubMed · ClinicalTrials · Cochrane · Semantic Scholar · Elicit (SoftStub) · Scite (SoftStub) · Mayo Platform (SoftStub) · PatSnap FTO (SoftStub) · Covidence-class (SoftStub) |
| discovery-sciences | RCSB PDB · ChEMBL · UniProt · Ketcher · PubChem · ZINC · CDD-class (SoftStub) · Dotmatics-class (SoftStub) |
| genomic-medicine | ClinVar · IGV.js · gnomAD · COSMIC (SoftStub) · Ensembl · PharmGKB · Clinical interpreter (SoftStub) |
| human-performance | Wearable CSV · Charts · ACSM guidelines · PubMed · Wearable brands (SoftStub) · Ring/band apps (SoftStub) |
| healthcare | Little's Law · ICD-11 · AHRQ · CMS HRRP · FHIR sandbox (SoftStub) · Epic (SoftStub) · Cerner-class (SoftStub) |
| biotechnology | PDB · UniProt/GenBank · TEA $/g · NCBI Gene · Addgene · Opentrons (SoftStub) · Benchling-class (SoftStub) · SnapGene-class (SoftStub) |
| medtech-architecture | 510(k) · MAUDE · ISO checklist · FDA GUDID · IEC 62304 · FEA (SoftStub) · QMS suite (SoftStub) · CAD-class (SoftStub) |
| regulatory-intelligence | User fee pin · openFDA · FDA guidance · EMA EPAR · ICH M4 · eCTD (SoftStub) · Cortellis-class (SoftStub) · Veeva-class (SoftStub) |

---

## 6. Per-Specialty HUD Chips

| Specialty | Chip 1 | Chip 2 | Chip 3 | Chip 4 | Chip 5 |
|-----------|--------|--------|--------|--------|--------|
| clinical-intelligence | Enrolled: 0/240 | Phase: II | Endpoint: OS | Sites: 12 active | Evidence: Grade A |
| discovery-sciences | Hit Rate: 2.3% | LogP: 2.1 | MW: 342 | ADMET: Pass | Targets: 3 validated |
| genomic-medicine | Variants: 47 | Pathogenic: 3 | VUS: 12 | Coverage: 99.2% | Panel: WES 400x |
| human-performance | VO2max: 52 | HRV: 68ms | Sleep: 7.2h | Steps: 12,400 | Bioage: −3.2y |
| healthcare | Readmit: 8.2% | LOS: 4.1d | AHRQ PSI: 0.3 | Population: 24K | Beds: 82% occ |
| biotechnology | Yield: 340mg/L | Edit %: 94.2 | Off-target: 0.01% | Growth: log | TEA: $2.1K/g |
| medtech-architecture | 510(k): Draft | MAUDE hits: 7 | ISO gaps: 2 | V&V: 60% | Risk: Class II |
| regulatory-intelligence | eCTD: M2.5 done | Timeline: 42w | Fee: $3.1M | Meetings: 2 sched | Global: 3 filed |

---

## 7. Per-Specialty Visualization Order

First tab = default viewer per specialty.

| Specialty | Viz Engine Order |
|-----------|-----------------|
| clinical-intelligence | cyto → plotly → igv → mol |
| discovery-sciences | ketcher → molstar → mol → cyto → plotly |
| genomic-medicine | igv → cyto → mol → plotly |
| human-performance | plotly → cyto → igv |
| healthcare | cyto → plotly → igv |
| biotechnology | mol → cyto → ketcher → plotly → molstar |
| medtech-architecture | cyto → plotly → mol |
| regulatory-intelligence | cyto → plotly → igv |

---

## 8. /lab/personalize Onboarding Flow

### Step 1 — Primary Specialty
8-card grid selection. Each card shows: title, slug, description, key tools.

### Step 2 — Research Persona
- 🔬 **Scientist / Engineer** → Board mode, full controls, technical vocabulary
- ⚖️ **Legal / Business** → Wizard mode, simplified controls, business vocabulary

### Step 3 — Secondary Specialties (optional, max 2)
Checkboxes for remaining 7 specialties. Merges vault tiles + integrations. Primary controls defaults.

### Step 4 — Layer C: Personal Customization
- Rename specialty label (e.g. "Neuro-Oncology Trials")
- Pin/hide practices from vault
- Reorder viz tabs
- Save as personal preset (JSON export/import)

### CTA: Apply & Enter Lab
Writes preset key → all downstream components rebuild.

---

## 9. Nine Researcher User-Type Presets

| # | User Type | Primary Specialty | Persona | Mode | Default Flow |
|---|-----------|------------------|---------|------|-------------|
| 1 | Principal Investigator (PI) | clinical-intelligence | Scientist | Wizard | Execute |
| 2 | Discovery Chemist | discovery-sciences | Scientist | Board | Visualize |
| 3 | Variant / Genome Scientist | genomic-medicine | Scientist | Board | Visualize |
| 4 | Performance / Longevity | human-performance | Scientist | Board | Execute |
| 5 | Healthcare Ops Analyst | healthcare | Legal | Wizard | Business |
| 6 | Biotech / Synbio Engineer | biotechnology | Scientist | Board | Execute |
| 7 | MedTech / Device Engineer | medtech-architecture | Scientist | Wizard | Execute |
| 8 | Regulatory Strategist | regulatory-intelligence | Legal | Wizard | Business |
| 9 | Translational Researcher | clinical-intelligence | Scientist | Board | Ideation |

---

## 10. What Changes vs. What Stays Fixed

### 🔒 Stays Fixed (all specializations)
- L0 Shell (5 pages): Command Center · Ideation · Visualize · Literature · Business
- Navigation bar: Same navBar (#122060), same 5 page icons
- Left vault structure: Practice tile grid + search + filter skeleton
- Tool-panel chrome: Drawer headers, close/dock/pop-out controls
- Auth / RBAC shell: Login, role check, team picker, org switcher
- Theme / snow tokens: #F2FAFA bg, #EDF4F5 panel, #DAEBED border, Inter font
- Audit layer (L6): Merkle-trail, provenance, reproducibility stamps

### 🔄 Changes Per Specialty (preset-driven)
- Practice vault tiles — different 24–36 objects per slug
- Inquiry modules (×3) — specialty-specific toggles
- Integration chips — right-vault preset list with live/softstub badges
- HUD chips — footer row specialty-specific indicators
- Default flow — which L0 page opens after vault selection
- Viz engine tab order — first tab = default viewer
- Execute page content — methodology templates, parameter panels
- Literature filters — pre-applied source filters per category
- Results page layout — visualization defaults, export formats
- Workspace mode — Board vs Wizard per persona × specialty
- Persona overlay — language, defaults, visible controls

---

## 11. Wireframe Checklist (Figma Section 203:2)

| # | Frame | ID | Status |
|---|-------|-----|--------|
| 1 | Specialization taxonomy — 3 layers × 8 slugs × 14 categories | 202:5 | ✅ Done |
| 2 | Per-specialty modules, integrations, HUD & viz order | 202:180 | ✅ Done |
| 3 | What changes vs stays fixed — specialization scope | 203:3 | ✅ Done |
| 4 | 9 researcher user-type presets — specialty × persona × flow | 203:77 | ✅ Done |
| 5 | /lab/personalize — onboarding & specialty selection | 203:177 | ✅ Done |
| 6 | Workspace modes — Infinite Board vs Structured Wizard | 203:269 | ✅ Done |
| 7 | HUD chips & 14-category investigation pills legend | 203:313 | ✅ Done |
| 8 | Execute page — 8 specialty variant configurations | 203:463 | ✅ Done |
| 9 | Literature page — 8 specialty variant configurations | 203:536 | ✅ Done |
| 10 | Results page — 8 specialty variant configurations | 203:609 | ✅ Done |
| 11 | Multi-specialty merging & persona overlay comparison | 203:674 | ✅ Done |

---

## 12. Naming Reconciliation

| Context | Slug Example | Status |
|---------|-------------|--------|
| **This brief (authoritative)** | `clinical-intelligence` | ✅ Engineering SoT |
| Vault wireframe (159:2) | `Clinical Intelligence` | Needs alignment |
| Planning Pack frame 10 (40:1606) | `Drug discovery & translational medicine` | Needs update to match brief |

**Rule:** The slugs in this document are the engineering source of truth. All Figma wireframes and code must use these exact slugs.

---

*Generated from user brief · Wireframed in Figma section 🧩 SPECIALIZATION SYSTEM (203:2)*
*Last updated: 2026-09-17*
