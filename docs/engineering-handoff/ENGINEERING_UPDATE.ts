/**
 * ============================================================================
 *  AchieverOS Lab — Engineering & Website-Designer Handoff Manifest
 * ============================================================================
 *
 *  Generated: 2026-09-17
 *  Source of truth: Authoritative PDF catalog (640 items) + Figma wireframes
 *
 *  IMPORTANT — This is a research-grade laboratory platform.
 *  It is NOT a SaaS product. Do not describe, market, or architect it as one.
 *  AchieverOS Lab is a self-hosted, zero-PHI research operating system.
 *
 *  Zero-PHI Rule: No patient identity data, no MedLM.
 *  Badge: "Zero-PHI · No patient identity · No MedLM"
 * ============================================================================
 */

// ─── Platform Identity ──────────────────────────────────────────────────────

export const PLATFORM = {
  name: 'AchieverOS Lab',
  type: 'Research Laboratory Platform',  // NOT SaaS
  tagline: 'Zero-PHI · No patient identity · No MedLM',
  deployment: 'Self-hosted on GCP me-central2',
  compliance: {
    zeroPHI: true,
    noMedLM: true,
    noPatientIdentity: true,
    oauthEnclave: 'OAuth2 Enclave',
    billing: 'Wafeq ZATCA CSID',
    region: 'GCP me-central2',
  },
} as const;

// ─── Theme & Design Tokens ──────────────────────────────────────────────────

export const THEME = {
  name: 'Light Snow',
  font: { family: 'Inter', weights: ['Regular', 'Medium', 'Semi Bold', 'Bold'] },
  colors: {
    background:  '#F2FAFA',
    panel:       '#EDF4F5',
    navBar:      '#122060',
    border:      '#DAEBED',
    titleText:   '#0D1B38',
    bodyText:    '#42536D',
    mutedText:   '#607A86',
    teal:        '#0D9488',
    blue:        '#1D4ED8',
  },
  catalogSectionColors: {
    methodologies: '#0D9488',  // teal
    software:      '#1D4ED8',  // blue
    databases:     '#122060',  // dark blue
    hardware:      '#92400E',  // brown/orange
  },
} as const;

// ─── 3-Layer Specialization Architecture ────────────────────────────────────

export const SPECIALIZATION_LAYERS = {
  layerA: '8 fixed specializations (slugs below)',
  layerB: '14 subspecialization investigation categories',
  layerC: 'Personalized per-user (onboarding at /lab/personalize)',
} as const;

export interface Specialization {
  slug: string;
  label: string;
  studioName: string;
  executeFlow: string;
  workspaceMode: 'Board' | 'Wizard';
  categories: number[];
  methodologies: string[];
  software: string[];
  databases: string[];
  hardware: string[];
}

export const SPECIALIZATIONS: Specialization[] = [
  // ── 1. Clinical Intelligence ──────────────────────────────────────────
  {
    slug: 'clinical-intelligence',
    label: 'Clinical Intelligence',
    studioName: 'Research Command Center · Evidence Studio',
    executeFlow: 'Hypothesis → Endpoint → Cohort → Regulatory',
    workspaceMode: 'Board',
    categories: [1, 2, 7],
    methodologies: [
      'Master Protocols (Basket, Umbrella, Platform)',
      'Adaptive Bayesian Trials (RAR, SSR)',
      'PSM', 'IPTW', 'TMLE',
      'PRISMA 2020', 'Cochrane RoB 2', 'GRADE',
      'STROBE/CONSORT',
      'Grounded Theory', 'Phenomenology',
    ],
    software: [
      'FACTS', 'OHDSI Atlas', 'Covidence', 'Rayyan',
      'RevMan', 'REDCap', 'Medidata Rave', 'Veeva EDC',
      'NVivo', 'ATLAS.ti', 'SAS', 'R/Bioconductor',
      'Hazard/Odds Ratio Solvers',
    ],
    databases: [
      'PubMed', 'ClinicalTrials.gov', 'WHO ICTRP',
      'Cochrane Library', 'Semantic Scholar', 'Elicit',
      'Scite', 'Mayo Platform', 'openFDA',
    ],
    hardware: [
      'Remote Patient Monitoring (RPM) Wearable Hubs',
      'Digital Biomarkers', 'OBO NCIt Mapping',
    ],
  },

  // ── 2. Discovery Sciences ─────────────────────────────────────────────
  {
    slug: 'discovery-sciences',
    label: 'Discovery Sciences',
    studioName: 'Molecular Research Lab · Molecular Studio',
    executeFlow: 'Disease → Gene → Protein → Compound → ADMET',
    workspaceMode: 'Board',
    categories: [3, 4],
    methodologies: [
      'Lipinski/Veber Rule-of-5 Filtering',
      'SBDD', 'LBDD', 'FBDD',
      'PROTAC Ternary Modeling',
      'Molecular Glues', 'LYTACs',
      'DEL Analytics',
      'Quantum VQE/DFT Orbital Calculations',
    ],
    software: [
      'AlphaFold3', 'RoseTTAFold', 'ESM3', 'RFdiffusion',
      'ProteinMPNN', 'NVIDIA BioNeMo',
      'Qiskit Nature', 'Psi4', 'GROMACS',
      'AutoDock Vina', 'Schrödinger Suite', 'MOE',
      'RDKit', 'Ketcher', 'Mol*',
    ],
    databases: [
      'RCSB PDB', 'ChEMBL', 'PubChem', 'ZINC20',
      'UniProt', 'BRENDA', 'BindingDB',
      'OBO CHEBI Mapping',
    ],
    hardware: [
      'Surface Plasmon Resonance (SPR – Biacore)',
      'Cryo-EM', 'X-ray Crystallography',
      'HTS Robotics',
    ],
  },

  // ── 3. Genomic Medicine ───────────────────────────────────────────────
  {
    slug: 'genomic-medicine',
    label: 'Genomic Medicine',
    studioName: 'Variant Interpretation · Variant Studio',
    executeFlow: 'Gene → Variant → Significance → Panel → Therapy',
    workspaceMode: 'Board',
    categories: [5, 6, 8],
    methodologies: [
      'ACMG/AMP 28-Criteria Rules',
      'CPI/C Guidelines',
      'Polygenic Risk Scoring (PRS)',
      'CRISPR Off-Target Profiling (GUIDE-seq, PEM-seq, CAST-Seq)',
      'scRNA-seq', 'CITE-seq',
      'Spatial Transcriptomics',
      'RNA Velocity', 'Markov State Fate Modeling',
    ],
    software: [
      'GATK', 'DeepVariant',
      'CellRanger', 'Seurat v5', 'Scanpy', 'CellRank',
      'Monocle', 'CellPhoneDB', 'MiXCR',
      'PharmCAT', 'Ensembl VEP',
      'IGV.js', 'Cytoscape',
    ],
    databases: [
      'ClinVar', 'gnomAD', 'COSMIC', 'Ensembl',
      'PharmGKB',
      'Human Pangenome Reference Consortium (HPRC)',
      'ICGC', 'TCGA',
    ],
    hardware: [
      'Illumina NovaSeq X',
      'PacBio Revio', 'Oxford Nanopore PromethION',
      '10x Genomics Chromium & Xenium Controllers',
    ],
  },

  // ── 4. Human Performance ──────────────────────────────────────────────
  {
    slug: 'human-performance',
    label: 'Human Performance',
    studioName: 'Biometric Optimization · Protocol Studio',
    executeFlow: 'Goal → Biomarker → Measurement → Protocol',
    workspaceMode: 'Board',
    categories: [12],
    methodologies: [
      '3D Kinematics', 'Inverse Dynamics', 'GRF Vectors',
      'HD-sEMG Signal Processing ($20–450 Hz)',
      'SVO₂max Ramp Protocols', 'LT_1/LT_2',
      'HRV Spectral Analysis (SDNN, RMSSD, LF/HF, Poincaré)',
      'fNIRS Neuroimaging',
    ],
    software: [
      'OpenSim', 'OpenCap',
      'BioPac AcqKnowledge', 'Vicon Nexus',
      'ActiGraph', 'ActiLife',
      'Garmin Firstbeat Analytics',
      'WASM L4 Solvers (Karvonen HR, Harris-Benedict, 1RM)',
    ],
    databases: [
      'ACSM Guidelines', 'WHO Standards',
      'NSCA Parameters', 'USDA FoodData Central',
    ],
    hardware: [
      'Vicon/Qualisys Optical Motion Capture',
      'Kistler/AMTI Force Plates',
      'Delsys Trigno Wireless EMG',
      'COSMED K5',
      'Artinis Portable fNIRS',
      'WHOOP', 'Oura Ring',
    ],
  },

  // ── 5. Healthcare Operations ──────────────────────────────────────────
  {
    slug: 'healthcare',
    label: 'Healthcare Operations',
    studioName: 'Health System Ops · Operations Studio',
    executeFlow: 'Friction → Population → Intervention → Reimbursement',
    workspaceMode: 'Board',
    categories: [10, 14],
    methodologies: [
      'Little\'s Law', 'Queueing Theory',
      'Discrete Event Simulation (DES)',
      'Markov Chain Transitions',
      'Readmission Risk Prediction',
      'HCC Risk Adjustment', 'ICER/HEOR',
      'Six Sigma (DMAIC)', 'PDCA/PDSA',
      'LEAN VSM', 'A3', 'Ishikawa',
    ],
    software: [
      'AnyLogic', 'Arena Simulation', 'Simio',
      'Minitab', 'JMP Analytics',
      'SMART on FHIR Sandboxes',
      'Epic App Orchard', 'Cerner Ignite APIs',
      'WASM L4 Solvers (Queueing Theory, DEA)',
    ],
    databases: [
      'ICD-10/ICD-11', 'CPT/HCPCS',
      'SNOMED-CT', 'LOINC', 'RxNorm',
      'CMS Data', 'CMS HRRP', 'AHRQ', 'HCUP',
    ],
    hardware: [
      'Hospital IoT Real-Time Location Systems (RTLS)',
      'Smart Bed Sensors',
      'Automated Dispensing Cabinets (Pyxis/Omnicell)',
    ],
  },

  // ── 6. Biotechnology & Bioprocessing ──────────────────────────────────
  {
    slug: 'biotechnology',
    label: 'Biotechnology & Bioprocessing',
    studioName: 'Molecular Engineering · Engineering Studio',
    executeFlow: 'Target → Modality → Process → Scale-Up',
    workspaceMode: 'Board',
    categories: [11, 13],
    methodologies: [
      'G-CSF/Plerixafor Apheresis',
      'ISHAGE CD34+ Flow Enumeration',
      'MACS Cell Sorting',
      'Lentiviral/AAV Transduction',
      'CRISPR RNP Electroporation',
      'LNP Microfluidics',
      'µL → L Scale: k_L·a, P/V, tip-speed',
      'Kinetics: MFA, CFPS',
      'DoE (CCD/Box-Behnken)', 'QbD', 'PAT Raman',
    ],
    software: [
      'Benchling', 'SnapGene', 'TeselaGen',
      'Geneious Prime', 'SuperPro Designer',
      'BioSolve', 'COBRApy',
      'OpenFOAM CFD', 'STEMSOFT', 'FlowJo',
      'FCS Express', 'Cytobank',
      'WASM L4 Kinetics',
    ],
    databases: [
      'BRENDA', 'NCBI Gene', 'Addgene',
      'KEGG', 'STRING DB', 'CIBMTR Registry',
    ],
    hardware: [
      'Miltenyi CliniMACS Prodigy®',
      'Lonza Cocoon®',
      'Terumo BCT Quantum®',
      'Cytiva Xuri™',
      'Fresenius LOVO/CUE',
      'MaxCyte ExPERT™',
      'NanoAssemblr®',
      'Hamilton STAR',
      'Opentrons OT-2/Flex',
      'Sartorius Ambr®',
    ],
  },

  // ── 7. MedTech Architecture ───────────────────────────────────────────
  {
    slug: 'medtech-architecture',
    label: 'MedTech Architecture',
    studioName: 'Device Engineering · Device Studio',
    executeFlow: 'Concept → Classification → Standards → Build',
    workspaceMode: 'Wizard',  // WIZARD mode
    categories: [9],
    methodologies: [
      'V-Model (V&V)',
      'IEC 62304 Software Lifecycle',
      'IEC 62366 Usability',
      'FDA PCCP',
      'AI/ML Plans', 'ISO 14971 Risk File',
      'FMEA/FMECA', 'FTA', 'HAZOP',
      'STRIDE Threat Modeling',
      'ISO 10993 Biocompatibility',
    ],
    software: [
      'Jama Connect', 'Greenlight Guru',
      'Polarion ALM', 'IBM DOORS', 'Ansys',
      'FEA/CFD', 'SolidWorks', 'AutoCAD',
      'ThreatModeler',
      'WASM L4 Solvers (Weibull, MTBF, RPN)',
    ],
    databases: [
      'FDA MAUDE', 'FDA GUDID',
      'MDR EUDAMED',
      'ISO/IEC Standards Registries',
    ],
    hardware: [
      'Hardware-in-the-Loop (HIL) Test Rigs',
      'Biocompatibility Assay Systems',
      'Anechoic Testing Chambers (IEC 60601)',
    ],
  },

  // ── 8. Regulatory Intelligence ────────────────────────────────────────
  {
    slug: 'regulatory-intelligence',
    label: 'Regulatory Intelligence',
    studioName: 'Submission Command · Submission Studio',
    executeFlow: 'Product → Jurisdiction → Pathway → Timeline',
    workspaceMode: 'Wizard',  // WIZARD mode
    categories: [9],
    methodologies: [
      'eCTD v4.0 Dossier Assembly (Modules 1–5)',
      '510(k) Predicate Matcher',
      'De Novo Pathways',
      'BLA/NDA Precedents',
      'IDMP Standards',
      'Signal Detection (PRR, ROR, EBGM)',
      'CAPA (8-Step)', 'Ford 8D',
    ],
    software: [
      'Veeva Vault RIM', 'LORENZ docuBridge',
      'IQVIA Regulatory Suite',
      'Cortellis', 'PatSnap FTO',
      'EudraVigilance', 'WHO VigiBase',
      'WASM L4 Solvers (Timeline, Fee Calculator)',
    ],
    databases: [
      'FDA Orange/Purple Books',
      'EMA EPAR', 'openFDA',
      'ICH Guidelines (M4, Q9)',
      'PMDA', 'NMPA', 'SFDA',
    ],
    hardware: [
      'Secure Enclave Hardware Security Modules (HSM)',
      'e-signatures',
      'tamper-evident audit logs',
    ],
  },
];

// ─── 14 Investigation Categories ────────────────────────────────────────────

export const INVESTIGATION_CATEGORIES = [
  { id: 1,  name: 'Biomedical Literature',      specialties: ['clinical-intelligence'] },
  { id: 2,  name: 'Clinical Trial Registries',   specialties: ['clinical-intelligence'] },
  { id: 3,  name: 'Molecular Libraries',          specialties: ['discovery-sciences'] },
  { id: 4,  name: 'Protein Databases',            specialties: ['discovery-sciences'] },
  { id: 5,  name: 'Variant Databases',            specialties: ['genomic-medicine'] },
  { id: 6,  name: 'Cancer Genomics',              specialties: ['genomic-medicine'] },
  { id: 7,  name: 'Disease & Phenotype',          specialties: ['clinical-intelligence'] },
  { id: 8,  name: 'Pharmacogenomics',             specialties: ['genomic-medicine'] },
  { id: 9,  name: 'Regulatory Records',           specialties: ['medtech-architecture', 'regulatory-intelligence'] },
  { id: 10, name: 'Classification Systems',       specialties: ['healthcare'] },
  { id: 11, name: 'Interaction Networks',         specialties: ['biotechnology'] },
  { id: 12, name: 'Nutritional Intelligence',     specialties: ['human-performance'] },
  { id: 13, name: 'Biotech & Life Sciences',      specialties: ['biotechnology'] },
  { id: 14, name: 'Hospital & Health Systems',    specialties: ['healthcare'] },
] as const;

// ─── 5 L0 Pages (Main Navigation) ──────────────────────────────────────────

export const L0_PAGES = [
  {
    id: 'command-center',
    label: 'Command Center',
    route: '/lab/[slug]/command',
    description: 'Specialty HUD, KPI tiles, recent activity, quick-launch toolbar',
    toolCount: 12,
  },
  {
    id: 'ideation-research',
    label: 'Ideation & Research',
    route: '/lab/[slug]/ideation',
    description: 'Hypothesis builder, literature search, AI-assisted discovery, methodology selector',
    toolCount: 14,
  },
  {
    id: 'visualization-studio',
    label: 'Visualization Studio',
    route: '/lab/[slug]/visualization',
    description: 'Scientific viewers (pathology, molecular, genomic, DICOM), charts, graph canvas',
    toolCount: 10,
  },
  {
    id: 'literature-review',
    label: 'Literature Review',
    route: '/lab/[slug]/literature',
    description: 'Systematic review workspace, PRISMA flow, citation manager, evidence grading',
    toolCount: 8,
  },
  {
    id: 'business-mediation',
    label: 'Business & Mediation',
    route: '/lab/[slug]/business',
    description: 'Feasibility analysis, IP landscape, regulatory pathway, budget modeling',
    toolCount: 14,
  },
] as const;

// ─── Panel Architecture ─────────────────────────────────────────────────────

export const PANEL_ARCHITECTURE = {
  openingPattern: 'L0 page → click vault/toolbar tool → L2 panel drawer → methodology loads → white-dotted live function → results to center stage',
  levels: {
    L0: 'Main page (Command Center, Ideation, Visualization, Literature, Business)',
    L1: 'Toolbar / vault row — icon triggers',
    L2: 'Panel drawer — slides in from right, contains tool UI',
    L3: 'Expanded panel — full-width methodology workspace',
    L4: 'Modal overlay — confirmations, settings, exports',
  },
  totalTools: 58,
  existingWireframed: 42,
  newToolsNeeded: 16,
  criticalPanels: 9,
  criticalPanelList: [
    'Security & Compliance Monitor',
    'Ethics Review Board',
    'Quality Assurance Dashboard',
    'Audit Trail Viewer',
    'PHI Detection Scanner',
    'Accountability Logger',
    'Research Protocol Validator',
    'Data Governance Panel',
    'Regulatory Submission Tracker',
  ],
} as const;

// ─── Agentic OS — 3 Agent Types × 6 Lanes ──────────────────────────────────

export const AGENTIC_OS = {
  agentTypes: [
    { type: 'Orchestrator', role: 'Routes tasks across lanes, manages state, coordinates multi-agent flows' },
    { type: 'Shadow Agent', role: 'Background telemetry, proactive suggestions, journey_shadow signal layer' },
    { type: 'Extraction Agent', role: 'Data extraction, transformation, structured output from unstructured inputs' },
  ],
  lanes: [
    'Discovery Lane — literature search, hypothesis generation',
    'Analysis Lane — compute, statistical modeling, visualization',
    'Validation Lane — cross-referencing, evidence grading, bias detection',
    'Synthesis Lane — report assembly, citation weaving, executive summaries',
    'Regulatory Lane — compliance checks, submission readiness, eCTD assembly',
    'Integration Lane — FHIR/OMOP mapping, external API orchestration',
  ],
} as const;

// ─── Shared Resources (Never Hidden — Present Across All 8 Specialties) ────

export const SHARED_RESOURCES = {
  fabricRows: 189,
  resourceRows: 86,
  intelRows: 103,
  partnerVaultEntries: 30,
  oauthEnclave: true,
  gcpRegion: 'me-central2',
  wafeqZATCA: true,
  agenticOS6Lanes: true,
  overlays: ['A', 'B', 'C', 'D', 'E'],
  journeyShadow: true,
  layerRail: true,
  innovation10StepDock: true,
  filingDrawer: true,
  envelopeDialogue: true,
  guidedJourney: {
    button: 'Guided Journey',
    route: '/lab/[slug]/guided',
    note: 'dark route only',
  },
} as const;

// ─── Scientific Viewers (WebGL / Canvas-Dependent) ──────────────────────────

export const VIEWERS = {
  pathology: {
    engine: 'OpenSeadragon',
    format: 'WSI (Whole Slide Imaging)',
    webgl: false, // Canvas 2D
  },
  molecular: {
    engine: '3Dmol.js',
    format: 'PDB, SDF, MOL2',
    webgl: true,  // WebGL required
  },
  genomic: {
    engine: 'IGV.js',
    format: 'BAM, VCF, BED',
    webgl: false, // Canvas 2D / SVG
  },
  dicom: {
    engine: 'Cornerstone.js',
    format: 'DICOM P10',
    webgl: true,  // WebGL for volume rendering
  },
} as const;

// ─── WASM Compute Modules ───────────────────────────────────────────────────

export const WASM_COMPUTE = [
  { module: 'sample-size',   description: 'Power analysis & sample size calculator' },
  { module: 'kaplan-meier',  description: 'Survival analysis curves' },
  { module: 'forest-plot',   description: 'Meta-analysis forest plots' },
  { module: 'trial-sim',     description: 'Monte Carlo trial simulation' },
  { module: 'l4-solvers',    description: 'Specialty-specific L4 solvers (Karvonen, Harris-Benedict, Weibull, DEA, Queueing, Timeline, Fee Calculator, 1RM, MTBF, RPN, Kinetics)' },
] as const;

// ─── WebGL Compatibility Notes ──────────────────────────────────────────────

export const WEBGL_COMPATIBILITY = {
  status: 'COMPATIBLE',
  notes: [
    'All 640-item catalog additions are data-layer only — no WebGL shader changes',
    '3Dmol.js molecular viewer: WebGL 1.0+ context, unaffected by catalog expansion',
    'Cornerstone.js DICOM viewer: WebGL 2.0 for volume rendering, unaffected',
    'WASM compute modules: ArrayBuffer-based, no GPU dependency',
    'New Hardware & GMP Enablers column is metadata-only — no rendering pipeline changes',
    'OpenSeadragon and IGV.js use Canvas 2D / SVG — no WebGL involvement',
    'Catalog expansion does NOT introduce new WebGL contexts or shader programs',
    'Recommendation: run WebGL context-loss test after integrating new viewers',
  ],
  riskAreas: [
    'If adding Mol* (alternative to 3Dmol.js) — uses WebGL 2.0, test context sharing',
    'Cryo-EM volume rendering (future) — may need separate WebGL context',
    'IGV.js large-track rendering — monitor Canvas memory on low-RAM devices',
  ],
} as const;

// ─── Data Layer ─────────────────────────────────────────────────────────────

export const DATA_LAYER = {
  fhir: { version: 'R4', client: 'SMART on FHIR Sandboxes' },
  omop: { version: 'CDM v5.4', mapper: 'OMOP CDM mapper' },
  duckdb: { runtime: 'WASM', description: 'In-browser analytical queries' },
  ehrIntegrations: ['Epic App Orchard', 'Cerner Ignite APIs'],
} as const;

// ─── Security & Compliance Stack ────────────────────────────────────────────

export const SECURITY = {
  phiDetection: 'Automated PHI scanning & de-identification',
  auditTrail: 'Merkle-hashed tamper-evident audit logs',
  ethics: 'Research ethics compliance engine',
  accountability: 'User action logging with attribution',
  hsmEnclave: 'Secure Enclave HSM for e-signatures',
  encryption: 'AES-256 at rest, TLS 1.3 in transit',
} as const;

// ─── Regulatory Engine ──────────────────────────────────────────────────────

export const REGULATORY_ENGINE = {
  ectd: 'eCTD v4.0 Modules 1–5 assembly',
  pharmacovigilance: 'Signal detection (PRR, ROR, EBGM)',
  pinnacle21: 'Dataset validation for CDISC/SDTM',
  submissionTracking: ['FDA', 'EMA', 'PMDA', 'NMPA', 'SFDA'],
  databases: ['EudraVigilance', 'WHO VigiBase', 'FDA MAUDE', 'FDA Orange/Purple Books'],
} as const;

// ─── Route Map ──────────────────────────────────────────────────────────────

export const ROUTES = {
  onboarding:    '/lab/personalize',
  commandCenter: '/lab/[slug]/command',
  ideation:      '/lab/[slug]/ideation',
  visualization: '/lab/[slug]/visualization',
  literature:    '/lab/[slug]/literature',
  business:      '/lab/[slug]/business',
  guidedJourney: '/lab/[slug]/guided',  // dark route only
  slugs: [
    'clinical-intelligence',
    'discovery-sciences',
    'genomic-medicine',
    'human-performance',
    'healthcare',
    'biotechnology',
    'medtech-architecture',
    'regulatory-intelligence',
  ],
} as const;

// ─── Catalog Statistics ─────────────────────────────────────────────────────

export const CATALOG_STATS = {
  totalItems: 640,
  specializations: 8,
  subspecializations: 14,
  columns: [
    'Methodologies & Frameworks',
    'Software, AI & Solvers',
    'Databases & Ontologies',
    'Hardware & GMP Enablers',
  ],
  l0Pages: 5,
  totalPanelTools: 58,
  wasmModules: 5,
  scientificViewers: 4,
  agentTypes: 3,
  agentLanes: 6,
} as const;
