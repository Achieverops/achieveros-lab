# 08 — Comprehensive Methodology, Tools, Software & Library Directory

> **Purpose:** Complete inventory of every research methodology, software tool, library, API, and database across all 8 specializations — mapped to UI panels, L0 pages, and technology layer.
> **Figma file:** `MVptXzeMVzGBDPRfdae3Jf`
> **Rule:** Every item here must have a place in wireframing — either as a vault practice tile, a tool panel, an integration chip, or a methodology template on the Ideation canvas.

---

## Directory Structure Per Specialty

Each specialty section contains:
1. **Research Methodologies** — scientific/statistical methods researchers use
2. **Software & Commercial Tools** — products (live or SoftStub) surfaced as integration chips or panel launchers
3. **Open-Source Libraries & WASM Solvers** — client-side compute available via L4
4. **Databases & APIs** — data sources powering the right vault resource matrix
5. **UI Mapping** — which L0 page, which panel, which vault slot each item surfaces in

---

## 1. Clinical Intelligence (`clinical-intelligence`)

**Categories:** 01 Biomedical Literature · 02 Clinical Trial Registries · 07 Disease & Phenotype
**Studio:** Research Command Center · Evidence Studio
**Flow:** Hypothesis → Endpoint → Cohort → Regulatory

### 1.1 Research Methodologies (32)

| # | Methodology | Category | Panel / Template |
|---|------------|----------|-----------------|
| 1 | Systematic Review (PRISMA 2020) | Evidence Synthesis | Ideation template + Literature PRISMA flow |
| 2 | Meta-Analysis — Fixed-Effect (Mantel-Haenszel) | Evidence Synthesis | Execute: Forest Plot panel |
| 3 | Meta-Analysis — Random-Effects (DerSimonian-Laird) | Evidence Synthesis | Execute: Forest Plot panel |
| 4 | Network Meta-Analysis (NMA/MTC) | Evidence Synthesis | Execute: NMA network diagram |
| 5 | Individual Patient Data (IPD) Meta-Analysis | Evidence Synthesis | Execute: IPD analysis panel |
| 6 | Parallel-Group RCT | Trial Design | Ideation: Trial Design Simulator |
| 7 | Crossover RCT | Trial Design | Ideation: Trial Design Simulator |
| 8 | Factorial Design RCT | Trial Design | Ideation: Trial Design Simulator |
| 9 | Cluster-Randomized Trial | Trial Design | Ideation: Trial Design Simulator |
| 10 | Adaptive Trial Design (Response-Adaptive) | Trial Design | Ideation: Adaptive Trial Simulator |
| 11 | Bayesian Adaptive Design | Trial Design | Ideation: Bayesian config panel |
| 12 | Platform Trial (MAMS) | Trial Design | Ideation: Platform protocol builder |
| 13 | Basket Trial | Trial Design | Ideation: Biomarker-driven design |
| 14 | Umbrella Trial | Trial Design | Ideation: Biomarker-driven design |
| 15 | Master Protocol | Trial Design | Ideation: Central screening protocol |
| 16 | N-of-1 Trial | Trial Design | Ideation: Single-patient crossover |
| 17 | Pragmatic Trial (PRECIS-2) | Trial Design | Ideation: Real-world design |
| 18 | Stepped-Wedge Design | Trial Design | Ideation: Cluster rollout |
| 19 | SMART (Sequential Multiple Assignment) | Trial Design | Ideation: Adaptive assignment |
| 20 | GRADE Evidence Grading | Quality Assessment | Execute: Evidence Quality Grader |
| 21 | Cochrane Risk of Bias 2 (RoB 2) | Quality Assessment | Execute: Bias assessment matrix |
| 22 | ROBINS-I (non-randomized) | Quality Assessment | Execute: Observational study bias |
| 23 | Newcastle-Ottawa Scale | Quality Assessment | Execute: Cohort/case-control quality |
| 24 | Sample Size Calculation (continuous/binary/survival) | Statistical Design | Visualize: Sample Size Calculator |
| 25 | Interim Analysis (O'Brien-Fleming, Lan-DeMets) | Monitoring | Execute: DSMB monitoring panel |
| 26 | Kaplan-Meier Survival Analysis | Analysis | Visualize: KM Curve panel |
| 27 | Cox Proportional Hazards | Analysis | Execute: Hazard ratio solver |
| 28 | Propensity Score Matching | Causal Inference | Execute: Cohort matching panel |
| 29 | Instrumental Variable Analysis | Causal Inference | Execute: Causal graph panel |
| 30 | Directed Acyclic Graphs (DAGs) | Causal Inference | Ideation: DAG builder |
| 31 | Bayesian Prior Elicitation (SHELF) | Bayesian Methods | Execute: Prior specification panel |
| 32 | Reporting Guidelines (CONSORT/STROBE/SPIRIT/PRISMA-P) | Reporting | Results: Report template selector |

### 1.2 Software & Commercial Tools (18)

| Tool | Type | Status | Panel |
|------|------|--------|-------|
| REDCap | EDC / Data Capture | SoftStub | Execute: Data management |
| Medidata Rave | EDC | SoftStub | Execute: Trial management |
| Covidence | Systematic Review | SoftStub | Literature: Screening |
| RevMan (Cochrane) | Meta-Analysis | SoftStub | Execute: Forest plot |
| GRADEpro | Evidence Grading | SoftStub | Execute: GRADE table |
| Rayyan | Screening / Abstract | SoftStub | Literature: AI screening |
| DistillerSR | Systematic Review | SoftStub | Literature: Data extraction |
| PASS | Sample Size | SoftStub | Visualize: Calculator |
| nQuery | Sample Size | SoftStub | Visualize: Calculator |
| East (Cytel) | Adaptive Design | SoftStub | Ideation: Adaptive sim |
| FACTS (Berry) | Bayesian Adaptive | SoftStub | Ideation: Bayesian sim |
| ADDPLAN | Adaptive Design | SoftStub | Ideation: Adaptive sim |
| CMA (Comprehensive Meta-Analysis) | Meta-Analysis | SoftStub | Execute: MA engine |
| Elicit | AI Evidence Search | SoftStub | Literature: AI search |
| Scite | Citation Context | SoftStub | Literature: Citation analysis |
| Semantic Scholar | AI Literature | 🟢 Live | Literature: Search API |
| PubMed / MEDLINE | Literature Database | 🟢 Live | Literature: Primary search |
| ClinicalTrials.gov | Trial Registry | 🟢 Live | Literature: Registry search |

### 1.3 Open-Source Libraries & WASM Solvers (14)

| Library | Language | L4 WASM | Purpose |
|---------|----------|---------|---------|
| metafor (R) | R | via webR | Meta-analysis engine |
| meta (R) | R | via webR | Forest plots, heterogeneity |
| netmeta (R) | R | via webR | Network meta-analysis |
| bayesmeta (R) | R | via webR | Bayesian meta-analysis |
| survival (R) | R | via webR | Kaplan-Meier, Cox PH |
| rpact (R) | R | via webR | Adaptive trial design |
| gsDesign (R) | R | via webR | Group-sequential design |
| jStat | JS | Native | Statistical distributions |
| simple-statistics | JS | Native | Basic stats, NNT, RR, OR |
| Plotly.js | JS | Native | Forest plots, KM curves |
| Cytoscape.js | JS | Native | PRISMA flow, network diagrams |
| D3.js | JS | Native | Custom statistical visualizations |
| dagitty | JS | Native | DAG/causal graph builder |
| mathjs | JS | Native | Matrix operations, linear algebra |

### 1.4 Databases & APIs (12)

| Database | Type | Integration |
|----------|------|-------------|
| PubMed / MEDLINE (NCBI E-utilities) | Literature | 🟢 Live API |
| ClinicalTrials.gov API | Registry | 🟢 Live API |
| Cochrane Central Register (CENTRAL) | Reviews | 🟢 Live API |
| Semantic Scholar API | AI Literature | 🟢 Live API |
| Embase (Elsevier) | Literature | SoftStub |
| Web of Science (Clarivate) | Citation | SoftStub |
| Scopus (Elsevier) | Citation | SoftStub |
| CINAHL (EBSCO) | Nursing/Allied | SoftStub |
| OpenAlex | Open Literature | 🟢 Live API |
| Europe PMC | Literature | 🟢 Live API |
| WHO ICTRP | Trial Registry | 🟢 Live API |
| OMIM | Disease/Gene | 🟢 Live API |

---

## 2. Discovery Sciences (`discovery-sciences`)

**Categories:** 03 Molecular Libraries · 04 Protein Databases
**Studio:** Molecular Research Lab · Molecular Studio
**Flow:** Disease → Gene → Protein → Compound → ADMET

### 2.1 Research Methodologies (28)

| # | Methodology | Category | Panel |
|---|------------|----------|-------|
| 1 | High-Throughput Screening (HTS) | Drug Discovery | Execute: HTS pipeline |
| 2 | Fragment-Based Drug Design (FBDD) | Drug Discovery | Execute: Fragment library |
| 3 | Structure-Based Drug Design (SBDD) | Drug Discovery | Visualize: Mol* docking |
| 4 | Ligand-Based Drug Design (LBDD) | Drug Discovery | Execute: Pharmacophore |
| 5 | Virtual Screening (docking-based) | Computational | Execute: Virtual screen batch |
| 6 | Pharmacophore Modeling | Computational | Execute: Feature mapping |
| 7 | QSAR / QSPR Modeling | Computational | Execute: QSAR builder |
| 8 | Molecular Dynamics Simulation | Computational | Visualize: MD trajectory viewer |
| 9 | Homology Modeling | Structural Biology | Visualize: Structure prediction |
| 10 | Protein-Ligand Docking | Structural Biology | Visualize: Docking grid panel |
| 11 | ADMET Prediction (Lipinski, Veber, PAINS) | Drug Properties | Execute: ADMET dashboard |
| 12 | Lead Optimization (SAR) | Med Chemistry | Execute: SAR table builder |
| 13 | Free Energy Perturbation (FEP) | Advanced Comp | Visualize: FEP+ equivalent |
| 14 | Molecular Fingerprinting (ECFP, MACCS) | Cheminformatics | Execute: Similarity search |
| 15 | Chemical Space Analysis (t-SNE, UMAP) | Cheminformatics | Visualize: Chemical space plot |
| 16 | Scaffold Hopping | Med Chemistry | Execute: Scaffold analysis |
| 17 | De Novo Drug Design (AI) | Generative | Execute: Generative chemistry |
| 18 | Retrosynthesis Analysis | Synthesis | Execute: Retro planner |
| 19 | Target Validation (genetic/chemical) | Target Biology | Execute: Target Validation Engine |
| 20 | Selectivity Profiling | Pharmacology | Execute: Selectivity matrix |
| 21 | Dose-Response Modeling (Hill equation) | Pharmacology | Visualize: Dose-response curves |
| 22 | PK/PD Modeling | Pharmacology | Execute: PK compartmental model |
| 23 | Allosteric Modulator Design | Advanced | Execute: Allosteric site finder |
| 24 | PROTAC / Molecular Glue Design | Emerging | Execute: Ternary complex modeler |
| 25 | Cryo-EM Structure Determination | Structural | Visualize: Density map viewer |
| 26 | X-Ray Crystallography | Structural | Visualize: Electron density map |
| 27 | NMR Spectroscopy (protein) | Structural | Visualize: Spectrum viewer |
| 28 | Mass Spectrometry (compound ID) | Analytical | Execute: MS data analysis |

### 2.2 Software & Commercial Tools (20)

| Tool | Type | Status | Panel |
|------|------|--------|-------|
| Schrödinger Suite (Maestro, Glide, FEP+) | Comp Chem | SoftStub | Visualize: Docking/FEP |
| MOE (Chemical Computing Group) | Molecular Modeling | SoftStub | Visualize: Modeling |
| Dotmatics (Vortex, Browser) | Data Management | SoftStub | Execute: Compound DB |
| CDD Vault | Collaborative Drug Discovery | SoftStub | Execute: SAR management |
| KNIME Analytics | Cheminformatics Workflow | SoftStub | Execute: Pipeline builder |
| Pipeline Pilot (Biovia) | Scientific Workflow | SoftStub | Execute: Data pipeline |
| Benchling (Molecular Bio) | ELN / Sequence | SoftStub | Execute: Sequence tools |
| ChemDraw (PerkinElmer) | Chemical Drawing | SoftStub | Execute: Structure editor |
| Ketcher (EPAM) | Open Chemical Editor | 🟢 Live | Visualize: 2D editor |
| Mol* (RCSB) | 3D Molecular Viewer | 🟢 Live | Visualize: 3D viewer |
| 3Dmol.js | WebGL Molecular | 🟢 Live | Visualize: Lightweight 3D |
| AutoDock Vina | Docking Engine | 🟢 WASM | Execute: Docking runs |
| Open Babel | Format Conversion | 🟢 WASM | Execute: File converter |
| RDKit | Cheminformatics | 🟢 WASM | Execute: Descriptor calc |
| PyMOL (Open-Source) | Visualization | SoftStub | Visualize: Publication viz |
| Avogadro | Molecular Editor | SoftStub | Visualize: 3D editing |
| GROMACS | MD Simulation | SoftStub | Visualize: MD engine |
| OpenMM | MD Framework | SoftStub | Visualize: GPU MD |
| AlphaFold (DeepMind) | Structure Prediction | SoftStub | Visualize: AI structure |
| ColabFold | Accessible AF2 | SoftStub | Visualize: Quick fold |

### 2.3 Databases & APIs (14)

| Database | Type | Integration |
|----------|------|-------------|
| ChEMBL (EMBL-EBI) | Bioactivity | 🟢 Live API |
| PubChem (NCBI) | Chemical | 🟢 Live API |
| RCSB PDB | Protein Structure | 🟢 Live API |
| UniProt | Protein Sequence | 🟢 Live API |
| ZINC | Virtual Screening | 🟢 Live API |
| DrugBank | Drug/Target | SoftStub |
| ChemSpider (RSC) | Chemical Search | SoftStub |
| BindingDB | Binding Data | 🟢 Live API |
| KEGG | Pathway | 🟢 Live API |
| Reactome | Pathway | 🟢 Live API |
| STRING | Protein Interaction | 🟢 Live API |
| PDBe (EBI) | Structure (EU) | 🟢 Live API |
| SureChEMBL | Patent Chemistry | SoftStub |
| Enamine REAL | Commercial Library | SoftStub |

---

## 3. Genomic Medicine (`genomic-medicine`)

**Categories:** 05 Variant Databases · 06 Cancer Genomics · 08 Pharmacogenomics
**Studio:** Variant Interpretation · Variant Studio
**Flow:** Gene → Variant → Significance → Panel → Therapy

### 3.1 Research Methodologies (26)

| # | Methodology | Panel |
|---|------------|-------|
| 1 | ACMG/AMP Variant Classification (5-tier) | Execute: Pathogenicity Classifier |
| 2 | Whole Genome Sequencing (WGS) Pipeline | Execute: Pipeline runner |
| 3 | Whole Exome Sequencing (WES) Analysis | Execute: Exome pipeline |
| 4 | RNA-Seq Differential Expression (DESeq2, edgeR) | Execute: DE analysis |
| 5 | Germline Variant Calling (GATK HaplotypeCaller) | Execute: Variant caller |
| 6 | Somatic Variant Calling (Mutect2, Strelka2) | Execute: Tumor analysis |
| 7 | Copy Number Variation (CNV) Analysis | Visualize: CNV plot |
| 8 | Structural Variant Detection (Manta, DELLY) | Execute: SV caller |
| 9 | GWAS (Genome-Wide Association Study) | Execute: GWAS pipeline |
| 10 | Polygenic Risk Score (PRS) Calculation | Execute: PRS calculator |
| 11 | Linkage Analysis | Execute: Family studies |
| 12 | Pharmacogenomic Genotyping (CYP2D6, CYP2C19) | Execute: PGx panel |
| 13 | Tumor Mutational Burden (TMB) | Execute: TMB calculator |
| 14 | Microsatellite Instability (MSI) Analysis | Execute: MSI scoring |
| 15 | HLA Typing | Execute: Immunogenomics |
| 16 | Methylation Array Analysis (450K, EPIC) | Execute: Epigenomics |
| 17 | ATAC-seq / ChIP-seq Peak Calling | Execute: Epigenomic peaks |
| 18 | Single-Cell RNA-seq (10x Genomics) | Visualize: scRNA viewer |
| 19 | Spatial Transcriptomics (Visium, MERFISH) | Visualize: Spatial omics |
| 20 | Multi-Omics Integration (MOFA+, DIABLO) | Visualize: Multi-omics workbench |
| 21 | Pathway Enrichment (GSEA, ORA) | Visualize: Pathway overlay |
| 22 | Gene Panel Design | Execute: Panel builder |
| 23 | Sanger Sequencing Confirmation | Execute: Trace viewer |
| 24 | Long-Read Sequencing (PacBio, ONT) | Execute: Long-read pipeline |
| 25 | Trio Analysis (de novo variant detection) | Execute: Family trio |
| 26 | Cancer Genome Interpretation (OncoKB, CIViC) | Execute: Clinical interpretation |

### 3.2 Software & Tools (18)

| Tool | Status | Panel |
|------|--------|-------|
| IGV.js (Broad) | 🟢 Live | Visualize: Genome browser |
| GATK (Broad) | SoftStub | Execute: Variant calling |
| BWA-MEM2 | SoftStub | Execute: Alignment |
| SAMtools/BCFtools | SoftStub | Execute: BAM/VCF processing |
| VEP (Ensembl) | 🟢 Live API | Execute: Annotation |
| InterVar | SoftStub | Execute: ACMG classification |
| Franklin (Genoox) | SoftStub | Execute: Clinical interpretation |
| BaseSpace (Illumina) | SoftStub | Execute: Sequencer integration |
| Alamut (SOPHiA) | SoftStub | Execute: Variant curation |
| DRAGEN (Illumina) | SoftStub | Execute: Accelerated pipeline |
| Seurat (R) | via webR | Visualize: Single-cell analysis |
| Scanpy (Python) | SoftStub | Visualize: scRNA processing |
| DESeq2 (R) | via webR | Execute: DE analysis |
| edgeR (R) | via webR | Execute: DE analysis |
| PLINK2 | SoftStub | Execute: GWAS analysis |
| Hail (Broad) | SoftStub | Execute: Population genomics |
| Cytoscape (desktop) | SoftStub | Visualize: Network analysis |
| GenomeBrowse (Golden Helix) | SoftStub | Visualize: Clinical browser |

### 3.3 Databases & APIs (16)

| Database | Integration |
|----------|-------------|
| ClinVar (NCBI) | 🟢 Live API |
| gnomAD (Broad) | 🟢 Live API |
| COSMIC (Sanger) | SoftStub |
| Ensembl (EBI) | 🟢 Live API |
| PharmGKB (Stanford) | 🟢 Live API |
| OMIM (Johns Hopkins) | 🟢 Live API |
| ClinGen | 🟢 Live API |
| OncoKB (MSK) | SoftStub |
| CIViC | 🟢 Live API |
| dbSNP (NCBI) | 🟢 Live API |
| HGMD (Qiagen) | SoftStub |
| DECIPHER (Sanger) | 🟢 Live API |
| Orphanet | 🟢 Live API |
| GTEx (Broad) | 🟢 Live API |
| TCGA (NCI) | 🟢 Live API |
| ICGC/ARGO | 🟢 Live API |

---

## 4. Human Performance (`human-performance`)

**Categories:** 12 Nutritional Intelligence
**Studio:** Biometric Optimization · Protocol Studio
**Flow:** Goal → Biomarker → Measurement → Protocol

### 4.1 Research Methodologies (20)

| # | Methodology | Panel |
|---|------------|-------|
| 1 | N-of-1 Trial Design | Ideation: Single-subject protocol |
| 2 | Crossover RCT (exercise/nutrition) | Ideation: Crossover builder |
| 3 | Time-Series Analysis (longitudinal biomarkers) | Visualize: Time-series plotter |
| 4 | Heart Rate Variability (HRV) Analysis — RMSSD, SDNN | Execute: HRV dashboard |
| 5 | VO2max Testing Protocol (ramp/incremental) | Execute: Cardiorespiratory panel |
| 6 | Lactate Threshold Determination | Execute: Lactate curve |
| 7 | Body Composition Analysis (DEXA, BIA) | Execute: Body comp panel |
| 8 | Sleep Architecture Analysis (PSG, actigraphy) | Execute: Sleep panel |
| 9 | Nutrition Periodization | Execute: Nutrition planner |
| 10 | Training Load Monitoring (TRIMP, sRPE) | Execute: Load tracking |
| 11 | Biological Age Estimation (Horvath clock, PhenoAge) | Execute: Bioage calculator |
| 12 | Microbiome Analysis (16S, shotgun) | Execute: Microbiome panel |
| 13 | Metabolomics Profiling | Visualize: Metabolite panel |
| 14 | Wearable Data Fusion (multi-sensor) | Execute: Wearable sync |
| 15 | Dose-Response for Exercise Prescription | Execute: Protocol designer |
| 16 | Ergogenic Aid Assessment | Execute: Supplement evaluator |
| 17 | Recovery Protocol Design (periodization) | Execute: Recovery tracker |
| 18 | Cognitive Performance Testing | Execute: Cognitive battery |
| 19 | Thermal Physiology (heat/cold adaptation) | Execute: Thermal protocol |
| 20 | Blood Biomarker Panel Interpretation | Execute: Lab results viewer |

### 4.2 Software & Tools (12)

| Tool | Status | Panel |
|------|--------|-------|
| Kubios HRV | SoftStub | Execute: HRV analysis |
| TrainingPeaks | SoftStub | Execute: Training log |
| Oura Ring API | SoftStub | Execute: Sleep/recovery |
| Whoop API | SoftStub | Execute: Strain/recovery |
| Garmin Health API | SoftStub | Execute: Wearable data |
| Apple HealthKit | SoftStub | Execute: Health data |
| Cronometer | SoftStub | Execute: Nutrition tracking |
| MyFitnessPal API | SoftStub | Execute: Calorie tracking |
| Plotly.js | 🟢 Live | Visualize: Time-series charts |
| Chart.js | 🟢 Live | Visualize: Dashboard charts |
| ACSM Risk Calculator | 🟢 WASM | Execute: Risk stratification |
| Karvonen Formula Engine | 🟢 WASM | Execute: HR zone calculator |

### 4.3 Databases & APIs (8)

| Database | Integration |
|----------|-------------|
| PubMed (exercise/nutrition) | 🟢 Live API |
| ACSM Guidelines Database | 🟢 Reference |
| NSCA Resources | 🟢 Reference |
| WHO Physical Activity Guidelines | 🟢 Reference |
| USDA FoodData Central | 🟢 Live API |
| Human Metabolome Database (HMDB) | 🟢 Live API |
| Open Humans | SoftStub |
| UK Biobank (via approved access) | SoftStub |

---

## 5. Healthcare (`healthcare`)

**Categories:** 10 Classification Systems · 14 Hospital & Health Systems
**Studio:** Health System Ops · Operations Studio
**Flow:** Friction → Population → Intervention → Reimbursement

### 5.1 Research Methodologies (22)

| # | Methodology | Panel |
|---|------------|-------|
| 1 | Little's Law (patient flow) | Execute: Flow calculator |
| 2 | Queueing Theory (M/M/c, M/G/1) | Execute: Queue simulator |
| 3 | Lean Healthcare / Value Stream Mapping | Ideation: VSM canvas |
| 4 | Six Sigma DMAIC | Ideation: DMAIC template |
| 5 | PDCA / PDSA Cycles | Ideation: QI cycle builder |
| 6 | Statistical Process Control (SPC) | Visualize: Control charts |
| 7 | Pareto Analysis (80/20) | Visualize: Pareto chart |
| 8 | Root Cause Analysis (fishbone/5-why) | Ideation: RCA template |
| 9 | Failure Mode Effects Analysis (FMEA) | Execute: FMEA matrix |
| 10 | Discrete Event Simulation (DES) | Execute: DES simulator |
| 11 | Markov Chain Modeling (disease progression) | Execute: Markov model |
| 12 | Cost-Effectiveness Analysis (CEA, ICER) | Execute: CEA calculator |
| 13 | Budget Impact Analysis (BIA) | Execute: BIA model |
| 14 | Data Envelopment Analysis (DEA) | Execute: Efficiency scoring |
| 15 | Cohort Study (retrospective/prospective) | Execute: Cohort builder |
| 16 | Interrupted Time Series (ITS) | Execute: ITS analysis |
| 17 | Difference-in-Differences (DiD) | Execute: DiD panel |
| 18 | Risk Adjustment (CMS-HCC, APR-DRG) | Execute: Risk adjuster |
| 19 | Readmission Risk Modeling (LACE, HOSPITAL) | Execute: Readmission predictor |
| 20 | Geographic Health Mapping (GIS) | Visualize: Health map |
| 21 | Social Network Analysis (infection spread) | Visualize: Network graph |
| 22 | Patient Safety Indicator Scoring (AHRQ PSI) | Execute: PSI calculator |

### 5.2 Software & Tools (14)

| Tool | Status | Panel |
|------|--------|-------|
| Epic (EHR) | SoftStub | Execute: EHR integration |
| Cerner (Oracle Health) | SoftStub | Execute: EHR integration |
| FHIR Sandbox (SMART on FHIR) | SoftStub | Execute: Interop testing |
| Tableau (Healthcare) | SoftStub | Visualize: Dashboards |
| Power BI (Healthcare) | SoftStub | Visualize: Dashboards |
| Arena Simulation | SoftStub | Execute: DES engine |
| TreeAge Pro | SoftStub | Execute: Decision analysis |
| Simul8 | SoftStub | Execute: Process simulation |
| Minitab | SoftStub | Execute: Six Sigma stats |
| R Shiny | 🟢 WASM | Visualize: Interactive apps |
| DuckDB WASM | 🟢 Live | Execute: In-browser SQL |
| Plotly.js | 🟢 Live | Visualize: SPC charts |
| Cytoscape.js | 🟢 Live | Visualize: Network/flow |
| Leaflet.js | 🟢 Live | Visualize: Geographic maps |

### 5.3 Databases & APIs (12)

| Database | Integration |
|----------|-------------|
| ICD-11 (WHO) | 🟢 Live API |
| ICD-10-CM (CMS) | 🟢 Live API |
| CPT (AMA) | SoftStub |
| AHRQ Quality Indicators | 🟢 Live API |
| CMS HRRP (Hospital Readmissions) | 🟢 Live API |
| HCUP (AHRQ) | SoftStub |
| SNOMED CT | 🟢 Live API |
| LOINC | 🟢 Live API |
| RxNorm (NLM) | 🟢 Live API |
| NPI Registry | 🟢 Live API |
| CMS Compare (Hospital/Nursing) | 🟢 Live API |
| HL7 FHIR R4 | 🟢 Standard |

---

## 6. Biotechnology (`biotechnology`)

**Categories:** 11 Interaction Networks · 13 Biotech & Life Sciences
**Studio:** Molecular Engineering · Engineering Studio
**Flow:** Target → Modality → Process → Scale-Up

### 6.1 Research Methodologies (24)

| # | Methodology | Panel |
|---|------------|-------|
| 1 | CRISPR-Cas9 Guide RNA Design | Execute: Guide Design Tool |
| 2 | CRISPR-Cas12/13 Design | Execute: Guide Design Tool |
| 3 | Base Editing (ABE, CBE) | Execute: Base editor panel |
| 4 | Prime Editing | Execute: Prime editor panel |
| 5 | Metabolic Flux Analysis (13C-MFA) | Execute: Flux balance |
| 6 | Flux Balance Analysis (FBA) | Execute: FBA solver |
| 7 | Design of Experiments (DoE / RSM) | Execute: DoE Builder |
| 8 | Monod Growth Kinetics | Execute: Kinetics panel |
| 9 | Michaelis-Menten Enzyme Kinetics | Execute: Enzyme kinetics |
| 10 | Fermentation Optimization | Execute: Bioreactor simulator |
| 11 | Techno-Economic Analysis (TEA) | Execute: TEA Calculator |
| 12 | Life Cycle Assessment (LCA) | Execute: LCA panel |
| 13 | Downstream Processing (DSP) | Execute: DSP optimizer |
| 14 | Quality by Design (QbD) | Execute: QbD workflow |
| 15 | Process Analytical Technology (PAT) | Execute: PAT monitoring |
| 16 | Cell Line Development (CHO, E. coli) | Execute: Cell line panel |
| 17 | Codon Optimization | Execute: Sequence optimizer |
| 18 | Protein Engineering (directed evolution) | Execute: Mutation library |
| 19 | Antibody Engineering (CDR grafting) | Execute: Ab designer |
| 20 | mRNA Design & Optimization | Execute: mRNA panel |
| 21 | Gene Synthesis Planning | Execute: Synthesis planner |
| 22 | Plasmid Design & Cloning | Execute: Cloning wizard |
| 23 | Flow Cytometry Analysis (FACS) | Visualize: FACS plot viewer |
| 24 | Western Blot Quantification | Visualize: Blot analyzer |

### 6.2 Software & Tools (16)

| Tool | Status | Panel |
|------|--------|-------|
| Benchling | SoftStub | Execute: ELN + sequence |
| SnapGene | SoftStub | Execute: Plasmid design |
| Geneious | SoftStub | Execute: Sequence analysis |
| Opentrons OT-2 | SoftStub | Execute: Lab automation |
| FlowJo | SoftStub | Visualize: FACS analysis |
| COBRA Toolbox | SoftStub | Execute: FBA/MFA |
| BioRender | SoftStub | Results: Figure creation |
| CRISPRscan | 🟢 Live | Execute: Guide scoring |
| Cas-OFFinder | 🟢 Live | Execute: Off-target search |
| CHOPCHOP | 🟢 Live | Execute: Guide design |
| Addgene | 🟢 Live API | Literature: Plasmid repository |
| RDKit | 🟢 WASM | Execute: Chemical tools |
| Biopython | SoftStub | Execute: Sequence analysis |
| SuperPro Designer | SoftStub | Execute: Bioprocess sim |
| Aspen Plus | SoftStub | Execute: Process modeling |
| JMP (SAS) | SoftStub | Execute: DoE analysis |

### 6.3 Databases & APIs (12)

| Database | Integration |
|----------|-------------|
| UniProt / UniRef | 🟢 Live API |
| GenBank (NCBI) | 🟢 Live API |
| NCBI Gene | 🟢 Live API |
| PDB (RCSB) | 🟢 Live API |
| KEGG Pathway | 🟢 Live API |
| BRENDA (enzyme) | 🟢 Live API |
| Addgene | 🟢 Live API |
| iGEM Registry | 🟢 Reference |
| BioCyc / MetaCyc | SoftStub |
| SABIO-RK (kinetics) | 🟢 Live API |
| ExPASy (SIB) | 🟢 Live API |
| InterPro (EBI) | 🟢 Live API |

---

## 7. MedTech Architecture (`medtech-architecture`)

**Categories:** 09 Regulatory Records (shared with regulatory)
**Studio:** Device Engineering · Device Studio
**Flow:** Concept → Classification → Standards → Build

### 7.1 Research Methodologies (20)

| # | Methodology | Panel |
|---|------------|-------|
| 1 | Design Controls (FDA 21 CFR 820) | Execute: Design control tracker |
| 2 | V-Model (Verification & Validation) | Execute: V&V matrix |
| 3 | FMEA (Failure Mode & Effects Analysis) | Execute: FMEA worksheet |
| 4 | FTA (Fault Tree Analysis) | Execute: Fault tree builder |
| 5 | Risk Management (ISO 14971) | Execute: Risk management file |
| 6 | Usability Engineering (IEC 62366) | Execute: Usability plan |
| 7 | Biocompatibility Assessment (ISO 10993) | Execute: Biocompat matrix |
| 8 | Software Lifecycle (IEC 62304) | Execute: Software classification |
| 9 | Cybersecurity (FDA premarket guidance) | Execute: Cybersec assessment |
| 10 | EMC Testing (IEC 60601) | Execute: EMC checklist |
| 11 | Sterilization Validation (ISO 11135/11137) | Execute: Sterilization plan |
| 12 | Predicate Device Analysis (510(k)) | Execute: Predicate Matcher |
| 13 | De Novo Classification | Execute: De novo pathway |
| 14 | Clinical Evaluation (MEDDEV 2.7/1 rev 4) | Execute: CER builder |
| 15 | Post-Market Surveillance (MDR Art. 83-86) | Execute: PMS plan |
| 16 | CAPA (Corrective & Preventive Action) | Execute: CAPA tracker |
| 17 | Design Transfer | Execute: Transfer checklist |
| 18 | DHF (Design History File) Assembly | Results: DHF generator |
| 19 | Finite Element Analysis (FEA) | Visualize: FEA results viewer |
| 20 | Accelerated Life Testing (ALT) | Execute: Reliability panel |

### 7.2 Software & Tools (14)

| Tool | Status | Panel |
|------|--------|-------|
| Greenlight Guru (QMS) | SoftStub | Execute: QMS integration |
| MasterControl | SoftStub | Execute: QMS integration |
| Arena Solutions (PTC) | SoftStub | Execute: PLM integration |
| SOLIDWORKS (CAD) | SoftStub | Visualize: CAD viewer |
| ANSYS (FEA/CFD) | SoftStub | Visualize: Simulation |
| COMSOL Multiphysics | SoftStub | Visualize: Multiphysics |
| Jama Connect | SoftStub | Execute: Requirements mgmt |
| DOORS (IBM) | SoftStub | Execute: Requirements |
| Polarion (Siemens) | SoftStub | Execute: ALM |
| TestRail | SoftStub | Execute: Test management |
| Minitab | SoftStub | Execute: Statistical analysis |
| R (survival, reliability) | 🟢 WASM | Execute: Reliability stats |
| Cytoscape.js | 🟢 Live | Visualize: Architecture diagram |
| Plotly.js | 🟢 Live | Visualize: Test results |

### 7.3 Databases & APIs (10)

| Database | Integration |
|----------|-------------|
| FDA 510(k) Database | 🟢 Live API |
| FDA MAUDE (adverse events) | 🟢 Live API |
| FDA GUDID (device ID) | 🟢 Live API |
| FDA De Novo Database | 🟢 Live API |
| EUDAMED (EU MDR) | SoftStub |
| ISO Standards (via subscription) | SoftStub |
| IEC 62304 Reference | 🟢 Reference |
| FDA CFR Title 21 | 🟢 Reference |
| IMDRF Guidance | 🟢 Reference |
| UDI Database (AccessGUDID) | 🟢 Live API |

---

## 8. Regulatory Intelligence (`regulatory-intelligence`)

**Categories:** 09 Regulatory Records (shared with medtech)
**Studio:** Submission Command · Submission Studio
**Flow:** Product → Jurisdiction → Pathway → Timeline

### 8.1 Research Methodologies (18)

| # | Methodology | Panel |
|---|------------|-------|
| 1 | eCTD Module Assembly (ICH M4) | Execute: eCTD builder |
| 2 | FDA Pre-Submission Meeting Strategy | Execute: Meeting planner |
| 3 | Regulatory Pathway Selection | Execute: Pathway Analyzer |
| 4 | Global Submission Sequencing | Execute: Timeline builder |
| 5 | Benefit-Risk Assessment (FDA framework) | Execute: B-R matrix |
| 6 | Labeling Comparison / Gap Analysis | Execute: Label comparator |
| 7 | IND/IMPD Preparation | Execute: IND builder |
| 8 | NDA/BLA Assembly | Execute: NDA module builder |
| 9 | 505(b)(2) Strategy | Execute: 505b2 pathway |
| 10 | Biosimilar Development (351(k)) | Execute: Biosimilar pathway |
| 11 | Pediatric Study Plan (PSP) | Execute: Pediatric strategy |
| 12 | Orphan Drug Designation | Execute: ODD application |
| 13 | Breakthrough/Fast Track/Priority Review | Execute: Expedited pathway |
| 14 | REMS (Risk Evaluation & Mitigation) | Execute: REMS builder |
| 15 | Post-Marketing Commitment Tracking | Execute: PMC tracker |
| 16 | Variation/Supplement Management | Execute: Variation planner |
| 17 | Multi-Jurisdiction Filing (FDA/EMA/PMDA/NMPA) | Execute: Global matrix |
| 18 | Advisory Committee Preparation | Execute: AdComm prep |

### 8.2 Software & Tools (12)

| Tool | Status | Panel |
|------|--------|-------|
| Veeva Vault (RIM) | SoftStub | Execute: Submission mgmt |
| IQVIA (Cortellis) | SoftStub | Literature: Regulatory intel |
| Lorenz docuBridge | SoftStub | Execute: eCTD publishing |
| GlobalSubmit (EXTEDO) | SoftStub | Execute: eCTD publishing |
| MasterControl (regulatory) | SoftStub | Execute: Document control |
| Clarivate Cortellis | SoftStub | Literature: Drug intel |
| Citeline (Informa) | SoftStub | Literature: Trial intel |
| DrugPatentWatch | SoftStub | Literature: Patent tracking |
| Plotly.js | 🟢 Live | Visualize: Timeline Gantt |
| Cytoscape.js | 🟢 Live | Visualize: Submission map |
| DuckDB WASM | 🟢 Live | Execute: Fee calculations |
| mathjs | 🟢 Live | Execute: Timeline modeling |

### 8.3 Databases & APIs (12)

| Database | Integration |
|----------|-------------|
| openFDA (Drugs, Devices, AEs) | 🟢 Live API |
| FDA Guidance Documents | 🟢 Live API |
| FDA Orange Book | 🟢 Live API |
| FDA Purple Book (biologics) | 🟢 Live API |
| EMA EPAR Database | 🟢 Live API |
| ICH Guidelines | 🟢 Reference |
| FDA CDER / CBER Approval History | 🟢 Live API |
| FDA User Fee Schedules (PDUFA/MDUFA) | 🟢 Reference |
| WHO Prequalification | 🟢 Live API |
| Health Canada Drug Database | 🟢 Live API |
| PMDA (Japan) Approvals | SoftStub |
| NMPA (China) Approvals | SoftStub |

---

## Cross-Specialization Totals

| Category | Count |
|----------|-------|
| Research Methodologies | **190** |
| Software & Commercial Tools | **124** |
| Open-Source Libraries & WASM Solvers | **14+ per specialty** |
| Databases & APIs | **96** |
| **Grand Total** | **~500+ items** |

---

## UI Surface Mapping

Every item above maps to one or more UI surfaces:

| UI Surface | What appears | L0 Page |
|-----------|-------------|---------|
| **Left Vault — Practice Tiles** | Tools, Sources, Solvers grouped by specialty | All pages |
| **Left Vault — Inquiry Modules** | 3 specialty-specific module cards with ON/OFF | All pages |
| **Right Vault — Integration Chips** | Software integrations with live/SoftStub badges | All pages |
| **Right Vault — Category Filters** | 14 investigation category pills | All pages |
| **Ideation Canvas — Templates** | Methodology templates dropped as canvas nodes | Ideation |
| **Execute — Tool Panels** | Interactive panels for each methodology | Execute |
| **Visualize — Viewers** | Visualization tools (Mol*, IGV.js, Plotly, etc.) | Visualize |
| **Literature — Search Sources** | Database APIs powering search | Literature |
| **Results — Report Templates** | Export/report formats per methodology | Results |
| **Footer HUD — Status Chips** | Compact specialty-specific indicators | All pages |
| **INNOVATION Envelope** | Teaching packs referencing methodologies | All pages |

### Panel Opening Pattern
From any L0 page → click tool in vault or toolbar → panel drawer opens (L2) → methodology/tool loads → white-dotted live function executes behind panel → results flow to center stage.

---

*Comprehensive research completed 2026-09-17 · All 8 specializations · ~500 items catalogued*
*Next: Wireframe directory boards per specialty → Panel catalog → Routing matrix*
