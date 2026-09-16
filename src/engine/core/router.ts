/**
 * AchieverOS Lab — Practice Slug Router
 * Routes users to specialization-specific panel configurations
 * across the 5-page shell architecture.
 */

export type PracticeSlug =
  | 'clinical'
  | 'discovery'
  | 'genomic'
  | 'performance'
  | 'operations'
  | 'biotechnology'
  | 'medtech'
  | 'regulatory';

export type PageId =
  | 'command'
  | 'ideation'
  | 'visualization'
  | 'literature'
  | 'business';

export interface PanelConfig {
  leftVault: VaultConfig;
  rightPanels: PanelSlot[];
  centerTools: string[];
  bottomTelemetry: TelemetryConfig;
}

export interface VaultConfig {
  title: string;
  sections: VaultSection[];
  width: number; // default 280
  collapsible: boolean;
}

export interface VaultSection {
  id: string;
  label: string;
  icon: string;
  component: string; // React component name
  requiresData?: string[]; // data dependencies
}

export interface PanelSlot {
  id: string;
  level: 'L2' | 'L3' | 'L4';
  position: 'right' | 'bottom' | 'center' | 'modal' | 'fullspace';
  component: string;
  trigger: 'auto' | 'manual' | 'selection' | 'context';
}

export interface TelemetryConfig {
  wasmCost: boolean;
  merkleVerification: boolean;
  shadowAccounting: boolean;
  signalCount: boolean;
}

/**
 * Master routing table: maps each practice × page to its panel configuration.
 * The left vault content changes per specialization; right panels are contextual.
 */
export const PRACTICE_PANEL_REGISTRY: Record<PracticeSlug, Record<PageId, PanelConfig>> = {
  clinical: {
    command: {
      leftVault: {
        title: 'Clinical Programs',
        width: 280,
        collapsible: true,
        sections: [
          { id: 'active-trials', label: 'Active Trials', icon: 'flask', component: 'ClinicalTrialList' },
          { id: 'tumor-board', label: 'Tumor Board Queue', icon: 'users', component: 'TumorBoardQueue' },
          { id: 'patient-cohorts', label: 'Patient Cohorts', icon: 'people', component: 'CohortSelector' },
        ],
      },
      rightPanels: [
        { id: 'trial-portfolio', level: 'L2', position: 'right', component: 'TrialPortfolioTracker', trigger: 'manual' },
        { id: 'safety-alerts', level: 'L2', position: 'right', component: 'PatientSafetyAlertFeed', trigger: 'auto' },
      ],
      centerTools: ['ProjectNavigator', 'ExceptionQueue', 'ReadinessDashboard'],
      bottomTelemetry: { wasmCost: true, merkleVerification: true, shadowAccounting: true, signalCount: true },
    },
    ideation: {
      leftVault: {
        title: 'Structured Inquiry',
        width: 280,
        collapsible: true,
        sections: [
          { id: 'inquiry-brief', label: 'Inquiry Brief', icon: 'file-text', component: 'InquiryBrief' },
          { id: 'tumor-board-panel', label: 'Molecular Tumor Board', icon: 'dna', component: 'MolecularTumorBoard' },
          { id: 'trial-designer', label: 'Master Protocol Designer', icon: 'git-branch', component: 'MasterProtocolDesigner' },
        ],
      },
      rightPanels: [
        { id: 'analysis-tools', level: 'L2', position: 'right', component: 'AnalysisToolsPanel', trigger: 'manual' },
        { id: 'rwe-hub', level: 'L2', position: 'center', component: 'RealWorldEvidenceHub', trigger: 'manual' },
      ],
      centerTools: ['CausalFieldGraph', 'CoScientistPanel', 'ResearchMethodologyTemplates'],
      bottomTelemetry: { wasmCost: true, merkleVerification: true, shadowAccounting: true, signalCount: true },
    },
    visualization: {
      leftVault: {
        title: 'Clinical Datasets',
        width: 280,
        collapsible: true,
        sections: [
          { id: 'dataset-rail', label: 'Dataset Rail', icon: 'database', component: 'DatasetRail' },
          { id: 'survival-data', label: 'Survival Data', icon: 'activity', component: 'SurvivalDataBrowser' },
        ],
      },
      rightPanels: [
        { id: 'km-estimator', level: 'L3', position: 'fullspace', component: 'KaplanMeierEstimator', trigger: 'manual' },
        { id: 'rwe-cohort', level: 'L2', position: 'center', component: 'RWECohortBuilder', trigger: 'manual' },
      ],
      centerTools: ['DuckDBOmicsSQL', 'ForestPlotGenerator'],
      bottomTelemetry: { wasmCost: true, merkleVerification: true, shadowAccounting: true, signalCount: true },
    },
    literature: {
      leftVault: {
        title: 'Evidence Hub',
        width: 280,
        collapsible: true,
        sections: [
          { id: 'query-builder', label: 'Query Builder', icon: 'search', component: 'QueryBuilder' },
          { id: 'pico-fields', label: 'PICO Fields', icon: 'filter', component: 'PICOFields' },
        ],
      },
      rightPanels: [
        { id: 'extraction-trust', level: 'L2', position: 'right', component: 'ExtractionTrustMatrix', trigger: 'selection' },
        { id: 'ai-screening', level: 'L2', position: 'center', component: 'AIAssistedScreening', trigger: 'manual' },
      ],
      centerTools: ['FullTextReader', 'PRISMAFlowGenerator', 'LibraryImportParser'],
      bottomTelemetry: { wasmCost: true, merkleVerification: true, shadowAccounting: true, signalCount: true },
    },
    business: {
      leftVault: {
        title: 'Dossier',
        width: 280,
        collapsible: true,
        sections: [
          { id: 'dossier-outline', label: 'Dossier Outline', icon: 'book', component: 'DossierOutline' },
          { id: 'artifacts', label: 'Artifacts', icon: 'package', component: 'ArtifactTracker' },
        ],
      },
      rightPanels: [
        { id: 'pv-dashboard', level: 'L2', position: 'center', component: 'PharmacovigilanceDashboard', trigger: 'manual' },
        { id: 'partner-sow', level: 'L2', position: 'right', component: 'PartnerSOWManager', trigger: 'manual' },
      ],
      centerTools: ['EvidenceAssumptions', 'FinancialsNPV', 'RiskRegister', 'GateLifecycle'],
      bottomTelemetry: { wasmCost: true, merkleVerification: true, shadowAccounting: true, signalCount: true },
    },
  },
  // Other specializations follow same pattern with practice-specific vault sections
  discovery: { command: {} as any, ideation: {} as any, visualization: {} as any, literature: {} as any, business: {} as any },
  genomic: { command: {} as any, ideation: {} as any, visualization: {} as any, literature: {} as any, business: {} as any },
  performance: { command: {} as any, ideation: {} as any, visualization: {} as any, literature: {} as any, business: {} as any },
  operations: { command: {} as any, ideation: {} as any, visualization: {} as any, literature: {} as any, business: {} as any },
  biotechnology: { command: {} as any, ideation: {} as any, visualization: {} as any, literature: {} as any, business: {} as any },
  medtech: { command: {} as any, ideation: {} as any, visualization: {} as any, literature: {} as any, business: {} as any },
  regulatory: { command: {} as any, ideation: {} as any, visualization: {} as any, literature: {} as any, business: {} as any },
};

/**
 * Resolves the panel configuration for a given practice + page combination.
 */
export function resolvePanelConfig(practice: PracticeSlug, page: PageId): PanelConfig {
  return PRACTICE_PANEL_REGISTRY[practice][page];
}

/**
 * Returns all available tools for a given practice across all pages.
 */
export function getAllToolsForPractice(practice: PracticeSlug): string[] {
  const config = PRACTICE_PANEL_REGISTRY[practice];
  const tools = new Set<string>();
  for (const page of Object.values(config)) {
    if (page.leftVault?.sections) {
      page.leftVault.sections.forEach(s => tools.add(s.component));
    }
    if (page.rightPanels) {
      page.rightPanels.forEach(p => tools.add(p.component));
    }
    if (page.centerTools) {
      page.centerTools.forEach(t => tools.add(t));
    }
  }
  return Array.from(tools);
}
