# Engineering Update #3 — Expanded Research Methodology & Gap Analysis

> Figma Node: `175:101` · 16 Sep 2026 · v3.0

## Summary Metrics

- 8 Specializations · 47 Methodologies · 12 Closed Platform Gaps · 10 New Wireframes · 93+ Total Frames · P0–P3 Sprint Priority

## 1. Top Hospital Platform Research

| Hospital | Platforms | Focus | Status |
|----------|-----------|-------|--------|
| MD Anderson | FoundationOne CDx, Tempus xT, Caris, MiOncoTreat | Precision oncology, CLIA-validated NGS | INTEGRATED |
| MSK | MSK-IMPACT 505-gene, OncoKB, cBioPortal | Tumor profiling, clinical actionability | INTEGRATED |
| Mayo Clinic | GeneGuide, Clinical Genome Analytics | Pharmacogenomics, carrier screening | PARTIAL |
| Dana-Farber | Profile OncoPanel, MatchMaker, DFCI Connector | Variant interpretation, trial matching | INTEGRATED |
| Johns Hopkins | CancerSCAN, PGDx elio | Liquid biopsy, cfDNA, MRD | PARTIAL |
| Cleveland Clinic | myConsult, EPIC Genomics, DrFirst AI | EHR-integrated genomics, AI pathology | NEW |

## 2. Manufacturer Platforms

| Company | Products | Focus |
|---------|----------|-------|
| Illumina | TruSight 500, DRAGEN, Connected Analytics | WGS/WES, variant calling |
| 10x Genomics | Chromium, Visium, Xenium | Single-cell RNA-seq, spatial transcriptomics |
| Roche / FMI | FoundationOne CDx/Liquid, AVENIO | Comprehensive genomic profiling, ctDNA |
| Novartis | Kymriah CAR-T, NVS Biome Analytics | CAR-T manufacturing QC, cell therapy |
| Foundation Medicine | FoundationOne Heme, FoundationACT | Hematologic profiling, ctDNA |
| Tempus | xT, xF, xR, xG, Tempus ONE | AI-driven genomic profiling, RWE |
| Guardant Health | Guardant360 CDx, GuardantINFORM, Shield | Liquid biopsy, MRD, multi-cancer detection |
| NanoString | nCounter, GeoMx DSP, CosMx SMI | Gene expression, spatial multi-omics |

## 3. 12 Platform Gaps (All Closed)

| Gap | Frame | Priority |
|-----|-------|----------|
| Molecular Tumor Board | 163:213 | P0 |
| Real-World Evidence | 163:380 | P0 |
| Digital Pathology + AI | 164:2 | P0 |
| Pharmacovigilance | 164:103 | P0 |
| Multi-Omics Integration | 164:302 | P1 |
| CAR-T Manufacturing | 166:2 | P1 |
| Master Protocol Designer | 166:204 | P1 |
| eCTD Submission Assembly | 166:356 | P1 |
| Federated Learning | 166:488 | P2 |
| Companion Diagnostics | 166:630 | P2 |
| OMOP CDM Transformation | Planned | P2 |
| DICOM Cornerstone Viewer | Planned | P3 |

## 4. Advanced Trial Methodologies

Adaptive (Bayesian) · Basket · Umbrella · Platform · Synthetic Control · Decentralized (DCT)

## 5. L4 WASM Compute Modules

| Module | Engine | Priority |
|--------|--------|----------|
| Sample Size Calculator | DuckDB WASM | P0 |
| Kaplan-Meier Estimator | Rust→WASM | P0 |
| Forest Plot Generator | Rust→WASM | P1 |
| Design of Experiments | Rust→WASM | P1 |
| Trial Simulation Engine | Rust→WASM | P1 |
| Bayesian Interim Analyzer | Rust→WASM | P2 |
| Propensity Score Matcher | DuckDB WASM | P2 |
| Disproportionality Calculator | DuckDB WASM | P2 |

## 6. Panel Architecture (L0–L4)

| Level | Purpose |
|-------|--------|
| L0 | Five-Page Shell (persistent nav) |
| L1 | Left Vault (practice-specific, 280px) |
| L2 | Tool Panels / Contextual Drawers (320px, max 2) |
| L3 | Full-Space Viewers / Modals |
| L4 | INNOVATION Envelope / Workflow Overlay |

## 7. Sprint Priorities

- **P0**: Molecular Tumor Board, RWE Hub, Digital Pathology, PV Dashboard, Sample Size Calc, KM Estimator, Core L0–L2
- **P1**: Multi-Omics, CAR-T, Master Protocol, eCTD, Forest Plot, DoE, Trial Sim
- **P2**: Federated Learning, CDx, Bayesian Interim, Propensity, Disproportionality, OMOP
- **P3**: DICOM, CRISPR Guide RNA, Long-read Seq, DCT, CGM/Wearable

## 8. Component Registry (17 New)

MolecularTumorBoard · RealWorldEvidenceHub · DigitalPathologyViewer · PharmacovigilanceDashboard · MultiOmicsWorkbench · CARTManufacturingTracker · MasterProtocolDesigner · ECTDSubmissionAssembly · FederatedLearningHub · CompanionDiagnosticsPanel · SampleSizeCalculator · KaplanMeierEstimator · ForestPlotGenerator · TrialSimulationEngine · PropensityScoreMatcher · BayesianInterimAnalyzer · DisproportionalityCalc
