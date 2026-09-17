# 8 Practice-Specific Left Vault Variants

> Figma Node: `159:2`

Each `practice.slug` swaps the entire left vault: tools, sources, solvers, and methodology templates.

## Clinical Intelligence (`clinical`)
- **Tools**: PICO Query Builder, Forest Plot Viewer, NNT Calculator, KM Curve Estimator, Meta-Analysis Toolkit +5
- **Sources**: PubMed, ClinicalTrials.gov, Cochrane +2
- **WASM Solvers**: Hazard Ratio, Odds Ratio, Risk Difference +2
- **Templates**: PRISMA-P, CONSORT, STROBE +2

## Discovery (`discovery`)
- **Tools**: Dose-Response Modeler, ADMET Predictor, Lead Optimization, Lipinski Filter, QSAR Builder +5
- **Sources**: ChEMBL, PubChem, UniProt +2
- **WASM Solvers**: Lipinski RO5, Veber Filter, LogP/LogD +2
- **Templates**: HTS Cascade, Fragment-Based, SBDD +2

## Genomic Intelligence (`genomic`)
- **Tools**: Variant Annotator, Pathway Enrichment, IGV Browser, GWAS Plotter, CNV Caller +5
- **Sources**: gnomAD, ClinVar, COSMIC +2
- **WASM Solvers**: Hardy-Weinberg, LD Decay, Fst Calculator +2
- **Templates**: ACMG Classification, WGS Pipeline, RNA-Seq DE +2

## Human Performance (`performance`)
- **Tools**: VO2max Estimator, Biomechanics Analyzer, Sleep Architecture, HRV Dashboard, Lactate Threshold +5
- **Sources**: ACSM Guidelines, WHO Standards, NSCA +2
- **WASM Solvers**: Karvonen HR, Harris-Benedict, 1RM Predictor +2
- **Templates**: RCT Crossover, N-of-1 Trial, Time-Series +2

## Healthcare Operations (`operations`)
- **Tools**: Patient Flow Simulator, Bed Capacity Planner, Staffing Optimizer, Cost-Effectiveness Analyzer, LEAN Value Stream +5
- **Sources**: CMS Data, AHRQ, HCUP +2
- **WASM Solvers**: Queueing Theory, DEA Efficiency, Markov Chain +2
- **Templates**: PDCA, DMAIC, Lean Six Sigma +2

## Biotechnology (`biotechnology`)
- **Tools**: Monod Kinetics, Bioreactor Simulator, DoE Builder, Scale-Up Calculator, Fermentation Tracker +5
- **Sources**: UniProt, BRENDA, KEGG +2
- **WASM Solvers**: Monod/Haldane, Michaelis-Menten, Mass Balance +2
- **Templates**: QbD, PAT, ICH Q8-Q12 +2

## MedTech (`medtech`)
- **Tools**: Device Risk Matrix, Usability Tester, Biocompat Checker, V&V Tracker, CAD Viewer +5
- **Sources**: FDA MAUDE, GUDID, MDR EUDAMED +2
- **WASM Solvers**: Weibull Reliability, MTBF Calculator, Risk Priority Number +2
- **Templates**: Design Controls, V-Model, FMEA +2

## Regulatory Intelligence (`regulatory`)
- **Tools**: eCTD Builder, Submission Tracker, Regulatory Calendar, Label Comparator, CAPA Manager +5
- **Sources**: FDA Orange Book, EMA EPAR, ICH Guidelines +3
- **WASM Solvers**: Submission Timeline, Regulatory Pathway Selector, Fee Calculator +2
- **Templates**: CAPA, Root Cause Analysis, ICH Q9 Risk +2

> Left vault swaps atomically on practice.slug change. Shared affordances (journey ribbon, DE layers, INNOVATION envelope) remain constant.
