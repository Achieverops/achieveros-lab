# 07 — Specialization System Brief [CORRECTED]

> **Status:** APPROVAL REQUIRED BEFORE BUILD
> **Figma Container:** 🧩 SPECIALIZATION SYSTEM (204:6) — 11 wireframes [CORRECTED]
> **Engineering SoT:** `src/lib/practices.ts` · `specialty-ultimate.ts` · `specialty-hud.ts` · `practice-selection.ts` · `investigation-map.ts`
> **Sync docs:** `FIGMA-VISUAL-INVENTORY-AND-PAGE-POPULATION.md` · `FIGMA-ULTIMATE-FUNCTIONALITY-BRIEF.md`

---

## 1. Three Layers of Specialization (do not confuse)

| Layer | Count | What it is | Where in UI |
|-------|-------|-----------|-------------|
| **A. Eight specializations** | 8 | Primary Lab practice slugs — full workbench presets | Top bar switcher · launchpad · URL /lab/[slug] |
| **B. Fourteen subspecializations** | 14 | Investigation category IDs (fabric / resource scope) | Right vault filters · Search union · KSA preset |
| **C. Personalized specialty** | per user | Researcher focus + persona + workspace mode (Zero-PHI) | /lab/personalize · top bar chip · session persist SoftStub |

Plus per-specialty inquiry modules (3 each) = functional subspecialty toggles inside left vault.

**Core Rule:** Same 5 snow pages for all users. Specialization changes presets (vault chips, flow graph, modules, resource filters, HUD, viz order) — not a separate page tree per specialty.

---

## 2. Layer A — 8 Specializations (exact engineering table)

**Use these exact slugs in Figma labels and Code Connect — never invent alternate names.**

| # | Slug | Title | Ultimate Tool / Studio | Default Flow (Execute graph) | Category IDs | Workspace Default |
|---|------|-------|----------------------|----------------------------|-------------|-------------------|
| 1 | `clinical-intelligence` | Clinical Intelligence | Research Command Center · Evidence Studio | Hypothesis → Endpoint → Cohort → Regulatory | 01, 02, 07 | Spatial (Board) |
| 2 | `discovery-sciences` | Discovery Sciences | Molecular Research Lab · Molecular Studio | Disease → Gene → Protein → Compound → ADMET | 03, 04 | Spatial (Board) |
| 3 | `genomic-medicine` | Genomic Medicine | Variant Interpretation · Variant Studio | Gene → Variant → Significance → Panel → Therapy | 05, 06, 08 | Spatial (Board) |
| 4 | `human-performance` | Human Performance | Biometric Optimization · Protocol Studio | Goal → Biomarker → Measurement → Protocol | 12 | Spatial (Board) |
| 5 | `healthcare` | Healthcare | Health System Ops · Operations Studio | Friction → Population → Intervention → Reimbursement | 10, 14 | Spatial (Board) |
| 6 | `biotechnology` | Biotechnology | Molecular Engineering · Engineering Studio | Target → Modality → Process → Scale-Up | 11, 13 | Spatial (Board) |
| 7 | `medtech-architecture` | MedTech Architecture | Device Engineering · Device Studio | Concept → Classification → Standards → Build | 09 | Wizard |
| 8 | `regulatory-intelligence` | Regulatory Intelligence | Submission Command · Submission Studio | Product → Jurisdiction → Pathway → Timeline | 09 | Wizard |

**Shared across all 8 (never hide when switching specialty):**
- 189 fabric · 86 resources · 103 intel rows · 30 partner vault entries
- OAuth2 enclave · GCP me-central2 · Wafeq ZATCA CSID
- Agentic OS 6 lanes · Overlay A–E · journey_shadow · LayerRail
- INNOVATION 10-step dock · filing drawer · envelope dialogue
- Guided Journey button → /lab/[slug]/guided (dark route only)

---

## 3. Layer B — 14 Subspecializations (investigation categories)

Each category is a resource filter scope inside the right vault. When user picks a specialty, only its mapped categories appear as default ON in the resource matrix (others still reachable via ALL filter but not pre-selected).

| Cat ID | Label | Primary Specialty | Secondary (mix) |
|--------|-------|-------------------|-----------------|
| 01 | Biomedical Literature | clinical-intelligence | — |
| 02 | Clinical Trial Registries | clinical-intelligence | — |
| 07 | Disease & Phenotype | clinical-intelligence | — |
| 03 | Molecular Libraries | discovery-sciences | — |
| 04 | Protein Databases | discovery-sciences | — |
| 05 | Variant Databases | genomic-medicine | — |
| 06 | Cancer Genomics | genomic-medicine | — |
| 08 | Pharmacogenomics | genomic-medicine | — |
| 12 | Nutritional Intelligence | human-performance | — |
| 10 | Classification Systems | healthcare | — |
| 14 | Hospital & Health Systems | healthcare | — |
| 11 | Interaction Networks | biotechnology | — |
| 13 | Biotech & Life Sciences | biotechnology | — |
| 09 | Regulatory Records | regulatory-intelligence | also medtech-architecture |

**Figma pattern:**
- Right vault: filter pills ALL (n) · LAYER-1 (n) · per-category chips when specialty active
- Show 8/189 selected (or similar) with category union updating when specialty changes
- Do not add a 15th column or second resource panel — wrap chips in top strip or vault header

**Multi-specialty union (SoftStub):** user picks primary + up to 2 secondary specialties → Search unions all category IDs from the set (max 3 slugs). Show as chip row: e.g. Clinical + Regulatory under top bar.

---

## 4. Per-Specialty Inquiry Modules (3 subspecialty toggles each)

Left vault bottom — Inquiry modules section. Three cards per specialty with ON/OFF toggle + subtitle.

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

Figma: show 3 module cards in left vault; switching specialty swaps card titles — same layout slot.

---

## 5. Per-Specialty Integration Chips (right vault preset)

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

## 6. Per-Specialty HUD Chips (footer / Details+)

Compact specialty HUD row — changes with slug (specialty-hud.ts).

| Specialty | HUD Chips |
|-----------|-----------|
| clinical-intelligence | NCT · rNPV · Cochrane · PRISMA · EDC SoftStub · FHIR sandbox |
| discovery-sciences | PDB · SMILES · Lipinski · PubChem · Ketcher · Mol* |
| genomic-medicine | HGVS · ACMG · IGV · Panel · PGx · ClinVar SoftStub |
| regulatory-intelligence | Fee locked · De Novo · ICH M4 · EMA EPAR · eCTD SoftStub · BLA/510(k) |

Figma: one HUD chip row in footer or filing-drawer footer — swap labels per specialty variant frame.

---

## 7. Per-Specialty Visualization Order

Visualize page viewer tab order (first = default):

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

Deep studio link chips (center header): /cadd · /igv · /kinetics · /ehr — show subset per specialty on Visualize frame variants.

---

## 8. Personalized Specialties & Researcher Personas

Route: /lab/personalize · link from Command Center hub + Practice Index ("Personalize specialties").

**Zero-PHI rule (mandatory in Figma copy):** personalization adjusts the researcher tool — not patient identity. No PHI upload. Badge: Zero-PHI · No patient identity · no MedLM.

### 8.1 Hybrid Workspace Personas (2)

| Persona | Default Workspace | Best for | Figma control |
|---------|------------------|----------|---------------|
| Scientist / Engineer | Infinite Board (spatial) | Discovery · Biotech · Clinical graph work | Pill in Personalize + optional top-bar chip |
| Legal / Business | Structured Wizard | Regulatory · MedTech · feasibility / dossier | Pill in Personalize + optional top-bar chip |

### 8.2 Workspace Modes (2)

| Mode | UI behavior | Auto-default by specialty |
|------|------------|--------------------------|
| Infinite Board (spatial) | React Flow / tldraw canvas dominant | discovery-sciences · biotechnology |
| Structured Wizard | Step matrix / checklist dominant | medtech-architecture · regulatory-intelligence |

Legal/Business persona forces Wizard until user overrides.

### 8.3 "Personalized Medicine" Product Lane

Not the same as researcher personalization.

- Product: Genomic Medicine specialty (genomic-medicine) branded as Personalized Medicine on /lab/personalize
- Flow: Gene → Variant → Significance → Panel → Therapy
- CTA: "Open Personalized Medicine →" links to /lab/genomic-medicine
- Figma: one hero card on Personalize page + optional chip when genomic slug active

### 8.4 Deep Personalization (SoftStub — wireframe anyway)

Schema-only until wired — Figma should reserve UI slots:

- Saved researcher profile (non-PHI preferences)
- Cohort templates per specialty
- Per-specialty default resource selections
- Primary specialty persistence across sessions (localStorage key: `achieveros.activePractices.v1`)

Figma: "Save as my default specialty" toggle on Personalize — disabled/SoftStub badge OK.

---

## 9. Researcher User Types → Preset Bundles (personality matrix)

Map collaboration / GTM personas to specialty + persona + resource preset for Figma example states (not separate products):

| User Type | Primary Specialty | Secondary (optional) | Persona | Default Page | Example Teaching Pack |
|-----------|------------------|---------------------|---------|-------------|----------------------|
| PI / clinical researcher | clinical-intelligence | regulatory-intelligence | Scientist | Execute | NCT Comirnaty evidence path |
| Discovery chemist | discovery-sciences | biotechnology | Scientist | Ideate → Execute | Kinase SAR / Lipinski |
| Variant scientist | genomic-medicine | clinical-intelligence | Scientist | Visualize (IGV) | ACMG checklist demo |
| Sports / longevity coach | human-performance | healthcare | Scientist | Execute (wizard-friendly) | RMSSD microcycle pack |
| Hospital ops / VBC lead | healthcare | regulatory-intelligence | Legal/Business | Execute (Little's Law) | Readmission workflow |
| Bioprocess engineer | biotechnology | discovery-sciences | Scientist | Visualize (TEA plot) | Monod scale-up sketch |
| Device RA / QA | medtech-architecture | regulatory-intelligence | Legal/Business | Execute (Wizard) | 510(k) predicate matrix |
| Regulatory affairs | regulatory-intelligence | medtech-architecture | Legal/Business | Results (dossier) | Multi-jurisdiction pathway |
| TTO / institutional lead | clinical-intelligence | discovery-sciences | Legal/Business | Results (feasibility) | Global launch waterfall |

Figma deliverable: one "Persona preset" board with 9 mini frames showing how vault chips + center graph change — reuse same 5-page shell.

---

## 10. What Changes vs Stays Fixed When Switching Specialty

| UI Zone | Changes with specialty | Stays fixed |
|---------|----------------------|-------------|
| Top bar | Active specialty chip · multi-specialty secondary chips | Logo · tier · Guided · Focus · Deploy |
| Subnav | — | Ideate · Execute · Visualize · Literature · Results |
| Left vault | Partner emphasis · 3 inquiry modules | Partner list structure (30) · scroll |
| Center Execute | Flow graph nodes/labels · omnibar hints | Dot grid · envelope behavior |
| Center Visualize | Viewer order · plot title | Viewer chrome |
| Center Literature | PICO placeholder hint text | 4 tabs (snow reskin) |
| Center Results | Column headers · feasibility bias | Multi-LLM grid · Journey Ledger |
| Right vault | Category filters ON · integration chips · Compute tab bias | OAuth header · matrix structure |
| Footer HUD | Specialty chips | LayerRail · Overlay C · shadow |
| INNOVATION envelope | Proactive tips · example pack | 10 steps I→N |

---

## 11. Figma Frame Checklist (Container 204:6)

| # | Frame | ID | Status |
|---|-------|-----|--------|
| 1 | Specialization taxonomy — 3 layers × 8 slugs × 14 categories [CORRECTED] | 207:191 | ✅ Done |
| 2 | Per-specialty modules, integrations, HUD & viz order | 202:180 | ✅ Done |
| 3 | What changes vs stays fixed — brief §10 [CORRECTED] | 207:623 | ✅ Done |
| 4 | 9 researcher user-type presets — brief §9 [CORRECTED] | 207:493 | ✅ Done |
| 5 | /lab/personalize — onboarding & specialty selection [CORRECTED] | 207:678 | ✅ Done |
| 6 | Workspace modes — Board vs Wizard (brief §8.2) [CORRECTED] | 207:572 | ✅ Done |
| 7 | HUD chips (brief §6) & 14-category pills legend (brief §3) [CORRECTED] | 207:378 | ✅ Done |
| 8 | Execute page — 8 specialty variants (brief §12) [CORRECTED] | 207:773 | ✅ Done |
| 9 | Literature page — 8 specialty variants (brief §12) [CORRECTED] | 207:854 | ✅ Done |
| 10 | Results page — 8 specialty variants (brief §12) [CORRECTED] | 207:919 | ✅ Done |
| 11 | Multi-specialty merging & persona overlay (brief §8 & §3) [CORRECTED] | 207:984 | ✅ Done |

Overlap QA: at 1440×900 and 1280×720, switching specialty must not add columns — only swap content inside L/R vaults and center.

---

## 12. Per-Page User Journey (specialization-aware, brief §12)

### Execute
1. Land with specialty preset loaded (from URL slug or personalize default)
2. See specialty flow graph + 3 inquiry modules ON suggestion
3. Resource matrix pre-filtered to specialty category IDs
4. Search unions active categories (+ secondaries if multi-specialty)
5. INNOVATION step opens envelope with specialty teaching pack
6. Summarize → Results columns match resultColumns for slug

### Ideate
- Discovery / Biotech: spatial board default
- Regulatory / MedTech: wizard-friendly step cards if persona = Legal/Business

### Visualize
- First viewer tab = visualizeOrder[0] for slug
- Attach snapshot to graph node → returns to Execute

### Literature
- Same 4 tabs all specialties
- Omnibar placeholder rotates: PICO (clinical) · target gene (discovery) · HGVS (genomic) · etc.

### Results / Business & Mediation
- clinical / regulatory: rNPV · trial risk · precedent tables prominent
- discovery / biotech: Lipinski · TEA · SAR columns
- genomic: variant significance · therapy match columns
- healthcare: CPT/DRG · cost reduction columns
- Tier 1–3 documentation tiers unchanged — content bias follows specialty

---

## 13. Engineering Files (Cursor — do not re-invent)

| Concern | File |
|---------|------|
| 8 defs + modules + graphs | `src/lib/practices.ts` |
| Studio · integrations · plots | `src/lib/specialty-ultimate.ts` |
| HUD chips | `src/lib/specialty-hud.ts` |
| Multi-specialty + category union | `src/lib/practice-selection.ts` |
| 14 categories map | `src/lib/investigation-map.ts` |
| Persona + workspace mode | `src/lib/store.ts` · `PersonaWorkspaceControls.tsx` |
| Personalize page | `src/app/lab/personalize/page.tsx` |
| Launchpad grid | `src/components/os/SpecializationLaunchpad.tsx` |

---

## 14. Sync Protocol

- Figma uses this doc + `FIGMA-VISUAL-INVENTORY-AND-PAGE-POPULATION.md` + `FIGMA-ULTIMATE-FUNCTIONALITY-BRIEF.md`
- Figma ships 8+ variant frames (§11) — not 8×5 duplicate page trees
- Cursor maps variants to `getPractice(slug)` + `getSpecialtyUltimate(slug)` — no hardcoded duplicate presets in UI
- QA: Playwright `all-practices-completion` · category union Search · personalize link health

---

## Naming Reconciliation

| Context | Slug Example | Status |
|---------|-------------|--------|
| **This brief (authoritative)** | `clinical-intelligence` | ✅ Engineering SoT |
| Vault wireframe (159:2) | `Clinical Intelligence` | Needs alignment |
| Planning Pack frame 10 (40:1606) | Old names from earlier session | Needs update to match brief |

**Rule:** The slugs in this document are the engineering source of truth. All Figma wireframes and code must use these exact slugs.

---

*Corrected from user's exact §1–§14 brief · All 11 Figma wireframes updated to match*
*Last updated: 2026-09-17*
