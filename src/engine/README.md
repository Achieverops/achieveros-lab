# AchieverOS Lab — Core Engine

This directory contains the research implementation code for the AchieverOS Lab platform engine.

## Directory Structure
```
src/engine/
├── core/              # Core platform engine
│   ├── router.ts      # Practice.slug routing engine
│   ├── panel.ts       # L0-L4 panel state management
│   └── shadow.ts      # Shadow signal telemetry
├── compute/           # WASM deterministic compute modules
│   ├── sample-size/   # Sample size calculator
│   ├── kaplan-meier/  # Survival analysis
│   ├── forest-plot/   # Meta-analysis
│   └── trial-sim/     # Monte Carlo simulation
├── agents/            # Agentic swarm architecture
│   ├── orchestrator.ts
│   ├── shadow-agent.ts
│   ├── extraction-agent.ts
│   └── proactive-agent.ts
├── viewers/           # Scientific viewers
│   ├── pathology/     # OpenSeadragon WSI
│   ├── molecular/     # 3Dmol.js protein
│   ├── genomic/       # IGV.js tracks
│   └── dicom/         # Cornerstone.js
├── data/              # Data layer
│   ├── fhir/          # FHIR R4 client
│   ├── omop/          # OMOP CDM mapper
│   └── duckdb/        # DuckDB WASM queries
├── security/          # Security & compliance
│   ├── hipaa.ts       # PHI detection & de-identification
│   ├── audit.ts       # Merkle-hashed audit trail
│   ├── ethics.ts      # Research ethics compliance
│   └── accountability.ts # User action logging
└── regulatory/        # Regulatory intelligence
    ├── ectd/          # eCTD Module 1-5 assembly
    ├── pharmacovigilance/ # Signal detection
    └── pinnacle21/    # Dataset validation
```
