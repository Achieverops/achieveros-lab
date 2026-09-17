# Visualization Tool Panels — Wireframed Viewers & Calculators

> **Source:** Figma section `03 · VISUALIZATION STUDIO` (15 frames) + related frames in other sections
>
> These panels are ALREADY WIREFRAMED with full UI detail. Each has a Figma node ID for reference.

---

## 1. Calculators & Statistical Viewers Suite

**Figma:** `159:216` | **Route:** Visualization Studio → Statistical Tools

**Calculator tabs available:**
- 📊 Sample Size Calculator (WASM L4 — No LLM math)
- Forest Plot
- KM Curves
- DoE Builder
- Scale-Up (Bioprocess)
- Funnel Plot
- Network Meta-Analysis
- Dose-Response

**Sample Size Calculator detail (wireframed):**
- Study Design: Two-arm parallel RCT
- Primary Endpoint: Continuous (mean difference)
- Significance Level (α): 0.05
- Power (1 – β): 0.80
- Effect Size (Cohen's d): 0.50
- Allocation Ratio: 1:1
- Dropout Rate: configurable
- Interim Analyses: O'Brien-Fleming
- Result: n = 128 per arm (256 total), adjusted for 15% dropout: 302 total
- **Specializations:** Biotechnology / MedTech / Discovery

---

## 2. DuckDB In-Browser Omics SQL Table

**Figma:** `158:591` | **Route:** Visualization Studio → Omics SQL

**Technology:** DuckDB WASM — in-browser, no server required (L4 compute)

**Tabs:** Omics Table | SQL Editor | Quick Stats | Join Datasets | Export

**Wireframed capabilities:**
- Dataset: `gene_expression_rnaseq_2026` — 12,847 rows × 24 cols
- Live SQL editor with syntax highlighting
- Query example: SELECT gene_symbol, log2_fold_change, pvalue, padj with significance filtering
- Performance: 629 rows returned in 0.12s
- Columns: gene_symbol, log2_fold_change, pvalue, padj, status, chromosome, start_pos
- Sample data: TP53 (-2.847, 4.56e-10), BRCA1 (1.932, 8.90e-07)

---

## 3. DICOM & WSI Medical Imaging Dock

**Figma:** `158:490` | **Route:** Visualization Studio → Medical Imaging

**Viewer tabs:** Molecular | Network | Genomic | DICOM | WSI | Notebook

**Patient Studies wireframed:**
- DCM-2026-001: CT Chest (3 series)
- DCM-2026-002: MRI Brain (5 series)
- WSI-2026-001: H&E Slide (1 series)
- WSI-2026-002: IHC Ki-67 (1 series)
- DCM-2026-003: PET-CT (8 series)

**Features:**
- Annotations: ROI-1 (Lesion 12×8mm), ROI-2 (Normal tissue ref), Measurements
- Window Presets: W: 1500, L: -500
- ⚠ SoftStub: MedGemma 1.5 substitute viewer. DICOM RT-Struct import requires partner V&V

---

## 4. Computational Notebook Viewer

**Figma:** `158:279` | **Route:** Visualization Studio → Notebook Mode

**Kernel:** Python 3.11 (AchieverOS) — 🟢 Connected, RAM: 4.2GB

**Notebook outline wireframed:**
1. Study Overview
2. Data Import
3. Preprocessing
4. Statistical Analysis
5. Volcano Plot (viz)
6. Pathway Enrichment (viz)
7. Heatmap (viz)
8. Discussion
9. Export Results

**Variables panel:** df_expression (DataFrame 12847×6), pvalues, foldchange, enrichment_results, fig_volcano

**Actions:** Run All | Export | Restart Kernel

---

## 5. Digital Pathology & AI Annotation Viewer

**Figma:** `164:2` | **Route:** Visualization Studio → Digital Pathology · Genomic Intelligence

**Slide Library wireframed:**
- WSI-2026-001: H&E Stain, Lung adenocarcinoma, 40x, 2.1 GB
- WSI-2026-002: PD-L1 IHC 22C3, TPS scoring, 20x, 1.4 GB
- WSI-2026-003: ALK IHC D5F3, Fusion detection, 20x, 1.2 GB
- WSI-2026-004: Ki-67 IHC, Proliferation index, 20x, 0.9 GB
- WSI-2026-005: TTF-1 IHC, Lineage confirmation, 20x, 1.1 GB

**AI Models:**
- 🤖 Paige AI — Prostate
- 🤖 PathAI — Tumor Detect
- 🤖 QuPath — Cell Segment

**Viewer:** WSI-2026-001 · H&E · Lung Adenocarcinoma · 40x Max · Region: 12,400 × 9,200 px
AI Overlay: ON · Confidence threshold: 0.75

---

## 6. Multi-Omics Integration Workbench

**Figma:** `164:302` | **Route:** Visualization Studio → Multi-Omics · Genomic Intelligence / Discovery

**Omics Layers loaded:**
| Layer | Technology | Size | Status |
|-------|-----------|------|--------|
| Genomics | WGS | 22,847 variants | ✓ Loaded |
| Transcriptomics | RNA-seq | 18,432 genes | ✓ Loaded |
| Proteomics | SomaScan | 7,289 proteins | ✓ Loaded |
| Metabolomics | LC-MS | 1,247 metabolites | ✓ Loaded |
| Epigenomics | ATAC-seq | 84,291 peaks | ⏳ Processing |
| Spatial | Visium 10x | 4,992 spots | ✓ Loaded |

**Integration Methods:**
- MOFA+ (Factor Analysis)
- mixOmics DIABLO
- iCluster+
- WGCNA Cross-Omics

**Analysis:** MOFA+ Multi-Omics Factor Analysis — 6 Omics Layers × 342 Samples × 3 Groups

---

## 7. Real-World Evidence Hub

**Figma:** `163:380` | **Route:** Visualization Studio → Real-World Evidence · Clinical Intelligence

**Data Source:** Flatiron EHR · 3.2M patients

**Cohort Builder wireframed:**
- Inclusion: NSCLC (C34.x), Stage IIIB–IV, Age ≥ 18, EGFR+ (L858R or ex19del), First-line 2022–2026
- Exclusion: Prior IO therapy, CNS metastases, ECOG PS ≥ 3
- Matched: 4,847 patients

**Analysis:** NSCLC EGFR+ Cohort — Real-World Overall Survival
- Kaplan-Meier curves: Osimertinib (n=2,103) vs Erlotinib/Gefitinib (n=2,744)
- Median follow-up: 18.2 months

---

## 8. Full-Space Scientific Viewers

**Figma:** `75:4153` | **Route:** Visualization Studio branches

**Viewer modes (with technology labels):**
| Viewer | Technology | Status |
|--------|-----------|--------|
| Chart/table | Built-in | Available |
| Molecular 3D | 3Dmol.js / WebGPU Candidate | Preview |
| Network/causal | 42 nodes / 68 edges with citation lineage | Local |
| Genomic tracks | GA4GH/WDL | Requires setup |
| DICOM | PHI gate; no diagnostic claim | Requires setup |
| WSI | PHI gate; no diagnostic claim | Partial |
| Notebook | OpenMM/WASM Preview; Qiskit Candidate; AlphaFold/BioNeMo Candidate | Draft |

---

## 9. Dataset Browser & Upload Lifecycle

**Figma:** `75:4103` | **Route:** Visualization Studio

Dataset and saved-view browser → dropzone → validation → processing → partial/failure → success

---

## 10. Additional Tool Panels

| Panel | Figma | Section |
|-------|-------|---------|
| Configure Job & Compare Provenance | `75:4203` | Visualization Studio |
| Tool Overlay, Selection, Export & Restore | `75:4253` | Visualization Studio |
| Pharmacovigilance Signal Detection Dashboard | `164:103` | Business & Mediation |
| eCTD Submission Assembly Workspace | `166:356` | Business & Mediation |
| CAR-T Cell Therapy Manufacturing Tracker | `166:2` | Business & Mediation |
