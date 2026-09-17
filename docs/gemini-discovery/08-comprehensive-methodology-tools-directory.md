# 08 — Comprehensive Methodology, Tools, Software & Library Directory

> **Purpose:** Complete inventory of every research methodology, software tool, AI solver, database, ontology, and hardware/GMP enabler across all 8 specializations — mapped to UI panels, L0 pages, and technology layer.
> **Source of Truth:** User-provided PDF (2026-09-17) — 640 items consolidated across 8 Specializations and 14 Subspecialization scopes.
> **Figma file:** `MVptXzeMVzGBDPRfdae3Jf`
> **Rule:** Every item here must have a place in wireframing — either as a vault practice tile, a tool panel, an integration chip, a methodology template, or a hardware enabler card.

---

## Directory Structure Per Specialty (6 Columns)

Each specialty section contains:
1. **Methodologies & Frameworks** — scientific/statistical methods and standards
2. **Software, AI & Solvers** — products and WASM L4 solvers surfaced as panels
3. **Databases & Ontologies** — data sources and classification systems
4. **Hardware & GMP Enablers** — physical instruments, lab equipment, and compliance hardware
5. **UI Mapping** — which L0 page, panel, vault slot each item surfaces in

---

## 1. Clinical Intelligence (`clinical-intelligence`)

**Categories:** 01 Biomedical Literature · 02 Clinical Trial Registries · 07 Disease & Phenotype
**Studio:** Research Command Center · Evidence Studio
**Flow:** Hypothesis → Endpoint → Cohort → Regulatory

### 1.1 Methodologies & Frameworks

Master Protocols (Basket, Umbrella, Platform) · Adaptive Bayesian Trials (RAR, SSR) · PSM · IPTW · TMLE · PRISMA 2020 · Cochrane RoB 2 · GRADE · STROBE/CONSORT · Grounded Theory · Phenomenology

### 1.2 Software, AI & Solvers

FACTS · OHDSI Atlas · Covidence · Rayyan · RevMan · REDCap · Medidata Rave · Veeva EDC · NVivo · ATLAS.ti · SAS · R/Bioconductor · Hazard/Odds Ratio Solvers

### 1.3 Databases & Ontologies

PubMed · ClinicalTrials.gov · WHO ICTRP · Cochrane Library · Semantic Scholar · Elicit · Scite · Mayo Platform · openFDA

### 1.4 Hardware & GMP Enablers

Remote Patient Monitoring (RPM) Wearable Hubs · Digital Biomarkers · OBO NCIt Mapping

---

## 2. Discovery Sciences (`discovery-sciences`)

**Categories:** 03 Molecular Libraries · 04 Protein Databases
**Studio:** Molecular Research Lab · Molecular Studio
**Flow:** Disease → Gene → Protein → Compound → ADMET

### 2.1 Methodologies & Frameworks

Lipinski/Veber Rule-of-5 Filtering · SBDD · LBDD · FBDD · PROTAC Ternary Modeling · Molecular Glues · LYTACs · DEL Analytics · Quantum VQE/DFT Orbital Calculations

### 2.2 Software, AI & Solvers

AlphaFold3 · RoseTTAFold · ESM3 · RFdiffusion · ProteinMPNN · NVIDIA BioNeMo · Qiskit Nature · Psi4 · GROMACS · AutoDock Vina · Schrödinger Suite · MOE · RDKit · Ketcher · Mol*

### 2.3 Databases & Ontologies

RCSB PDB · ChEMBL · PubChem · ZINC20 · UniProt · BRENDA · BindingDB · OBO CHEBI Mapping

### 2.4 Hardware & GMP Enablers

Surface Plasmon Resonance (SPR — Biacore) · Cryo-EM · X-ray Crystallography · HTS Robotics

---

## 3. Genomic Medicine (`genomic-medicine`)

**Categories:** 05 Variant Databases · 06 Cancer Genomics · 08 Pharmacogenomics
**Studio:** Variant Interpretation · Variant Studio
**Flow:** Gene → Variant → Significance → Panel → Therapy

### 3.1 Methodologies & Frameworks

ACMG/AMP 28-Criteria Rules · CPIC Guidelines · Polygenic Risk Scoring (PRS) · CRISPR Off-Target Profiling (GUIDE-seq, PEM-seq, CAST-Seq) · scRNA-seq · CITE-seq · Spatial Transcriptomics · RNA Velocity · Markov State Fate Modeling

### 3.2 Software, AI & Solvers

GATK · DeepVariant · CellRanger · Seurat v5 · Scanpy · CellRank · Monocle · CellPhoneDB · MiXCR · PLINK · PharmCAT · Ensembl VEP · IGV.js · Cytoscape

### 3.3 Databases & Ontologies

ClinVar · gnomAD · COSMIC · Ensembl · PharmGKB · Human Pangenome Reference Consortium (HPRC) · ICGC · TCGA

### 3.4 Hardware & GMP Enablers

Illumina NovaSeq X · PacBio Revio · Oxford Nanopore PromethION · 10x Genomics Chromium & Xenium Controllers

---

## 4. Human Performance (`human-performance`)

**Categories:** 12 Nutritional Intelligence
**Studio:** Biometric Optimization · Protocol Studio
**Flow:** Goal → Biomarker → Measurement → Protocol

### 4.1 Methodologies & Frameworks

3D Kinematics · Inverse Dynamics · GRF Vectors · HD-sEMG Signal Processing (20–450 Hz) · VO₂max Ramp Protocols · LT₁/LT₂ · HRV Spectral Analysis (SDNN, RMSSD, LF/HF, Poincaré) · fNIRS Neuroimaging

### 4.2 Software, AI & Solvers

OpenSim · OpenCap · BioPac AcqKnowledge · Vicon Nexus · ActiGraph ActiLife · Garmin Firstbeat Analytics · WASM L4 Solvers (Karvonen HR, Harris-Benedict, 1RM)

### 4.3 Databases & Ontologies

ACSM Guidelines · WHO Standards · NSCA Parameters · USDA FoodData Central

### 4.4 Hardware & GMP Enablers

Vicon/Qualisys Optical Motion Capture · Kistler/AMTI Force Plates · Delsys Trigno Wireless EMG · COSMED K5 · Artinis Portable fNIRS · WHOOP · Oura Ring

---

## 5. Healthcare Operations (`healthcare`)

**Categories:** 10 Classification Systems · 14 Hospital & Health Systems
**Studio:** Health System Ops · Operations Studio
**Flow:** Friction → Population → Intervention → Reimbursement

### 5.1 Methodologies & Frameworks

Little's Law · Queueing Theory · Discrete Event Simulation (DES) · Markov Chain Transitions · Readmission Risk Prediction · HCC Risk Adjustment · ICER/HEOR · Six Sigma (DMAIC) · PDCA/PDSA · LEAN VSM · A3 · Ishikawa

### 5.2 Software, AI & Solvers

AnyLogic · Arena Simulation · Simio · Minitab · JMP Analytics · SMART on FHIR Sandboxes · Epic App Orchard · Cerner Ignite APIs · WASM L4 Solvers (Queueing Theory, DEA)

### 5.3 Databases & Ontologies

ICD-10/ICD-11 · CPT/HCPCS · SNOMED-CT · LOINC · RxNorm · CMS Data · CMS HRRP · AHRQ · HCUP

### 5.4 Hardware & GMP Enablers

Hospital IoT Real-Time Location Systems (RTLS) · Smart Bed Sensors · Automated Dispensing Cabinets (Pyxis/Omnicell)

---

## 6. Biotechnology & Bioprocessing (`biotechnology`)

**Categories:** 11 Interaction Networks · 13 Biotech & Life Sciences
**Studio:** Molecular Engineering · Engineering Studio
**Flow:** Target → Modality → Process → Scale-Up

### 6.1 Methodologies & Frameworks

G-CSF/Plerixafor Apheresis · ISHAGE CD34+ Flow Enumeration · MACS Cell Sorting · Lentiviral/AAV Transduction · CRISPR RNP Electroporation · LNP Microfluidics · kₗa / PV/S / v_tip Kinetics · MFA · CFPS · DoE (CCD/Box-Behnken) · QbD · PAT Raman

### 6.2 Software, AI & Solvers

Benchling · SnapGene · TeselaGen · Geneious Prime · SuperPro Designer · BioSolve · COBRApy · OpenFOAM CFD · STEMSOFT · FlowJo · FCS Express · Cytobank · WASM L4 Kinetics

### 6.3 Databases & Ontologies

BRENDA · NCBI Gene · Addgene · KEGG · STRING DB · CIBMTR Registry

### 6.4 Hardware & GMP Enablers

Miltenyi CliniMACS Prodigy® · Lonza Cocoon® · Terumo BCT Quantum® · Cytiva Xuri™ · Fresenius LOVO/CUE · MaxCyte ExPERT™ · NanoAssemblr® · Hamilton STAR · Opentrons OT-2/Flex · Sartorius Ambr®

---

## 7. MedTech Architecture (`medtech-architecture`)

**Categories:** 09 Regulatory Records (shared with regulatory)
**Studio:** Device Engineering · Device Studio
**Flow:** Concept → Classification → Standards → Build

### 7.1 Methodologies & Frameworks

V-Model (V&V) · IEC 62304 Software Lifecycle · IEC 62366 Usability · FDA PCCP · AI/ML Plans · ISO 14971 Risk File · FMEA/FMECA · FTA · HAZOP · STRIDE Threat Modeling · ISO 10993 Biocompatibility

### 7.2 Software, AI & Solvers

Jama Connect · Greenlight Guru · Polarion ALM · IBM DOORS · Ansys (FEA/CFD) · SolidWorks · AutoCAD · ThreatModeler · WASM L4 Solvers (Weibull, MTBF, RPN)

### 7.3 Databases & Ontologies

FDA MAUDE · FDA GUDID · MDR EUDAMED · ISO/IEC Standards Registries

### 7.4 Hardware & GMP Enablers

Hardware-in-the-Loop (HIL) Test Rigs · Biocompatibility Assay Systems · Anechoic Testing Chambers (IEC 60601)

---

## 8. Regulatory Intelligence (`regulatory-intelligence`)

**Categories:** 09 Regulatory Records (shared with medtech)
**Studio:** Submission Command · Submission Studio
**Flow:** Product → Jurisdiction → Pathway → Timeline

### 8.1 Methodologies & Frameworks

eCTD v4.0 Dossier Assembly (Modules 1–5) · 510(k) Predicate Matcher · De Novo Pathways · BLA/NDA Precedents · IDMP Standards · Signal Detection (PRR, ROR, EBGM) · CAPA (8-Step) · Ford 8D

### 8.2 Software, AI & Solvers

Veeva Vault RIM · LORENZ docuBridge · IQVIA Regulatory Suite · Cortellis · PatSnap FTO · EudraVigilance · WHO VigiBase · WASM L4 Solvers (Timeline, Fee Calculator)

### 8.3 Databases & Ontologies

FDA Orange/Purple Books · EMA EPAR · openFDA · ICH Guidelines (M4, Q9) · PMDA · NMPA · SFDA

### 8.4 Hardware & GMP Enablers

Secure Enclave Hardware Security Modules (HSM) for e-signatures and tamper-evident audit logs

---

## Cross-Specialization Totals

The master directory catalog consolidates all **640 items** across the 8 Specializations and 14 Subspecialization scopes:

| Column | Description |
|--------|-------------|
| **Methodologies & Frameworks** | Scientific methods, statistical standards, regulatory frameworks |
| **Software, AI & Solvers** | Commercial tools, AI models, WASM L4 client-side solvers |
| **Databases & Ontologies** | Data sources, registries, classification systems, ontology mappings |
| **Hardware & GMP Enablers** | Physical instruments, lab automation, compliance hardware |

---

## UI Surface Mapping

Every item above maps to one or more UI surfaces:

| UI Surface | What appears | L0 Page |
|-----------|-------------|---------|
| **Left Vault — Practice Tiles** | Tools, Sources, Solvers grouped by specialty | All pages |
| **Left Vault — Inquiry Modules** | 3 specialty-specific module cards with ON/OFF | All pages |
| **Right Vault — Integration Chips** | Software integrations with live/SoftStub badges | All pages |
| **Right Vault — Category Filters** | 14 investigation category pills | All pages |
| **Right Vault — Hardware Enablers** | Physical instrument cards with connection status | All pages |
| **Ideation Canvas — Templates** | Methodology templates dropped as canvas nodes | Ideation |
| **Execute — Tool Panels** | Interactive panels for each methodology/solver | Execute |
| **Visualize — Viewers** | Visualization tools (Mol*, IGV.js, Plotly, etc.) | Visualize |
| **Literature — Search Sources** | Database/ontology APIs powering search | Literature |
| **Results — Report Templates** | Export/report formats per methodology | Results |
| **Footer HUD — Status Chips** | Compact specialty-specific indicators | All pages |
| **INNOVATION Envelope** | Teaching packs referencing methodologies | All pages |

### Panel Opening Pattern
From any L0 page → click tool in vault or toolbar → panel drawer opens (L2) → methodology/tool loads → white-dotted live function executes behind panel → results flow to center stage.

---

*Updated 2026-09-17 from authoritative PDF · 640 items · 8 Specializations · 14 Subspecialization scopes · 6 columns (added Hardware & GMP Enablers)*
