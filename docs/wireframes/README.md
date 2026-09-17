# AchieverOS Lab — Complete Wireframe Documentation

Full text content extracted from all 93+ Figma wireframes for engineering implementation.

**Figma File**: `MVptXzeMVzGBDPRfdae3Jf` · **Page**: `0:1`

## Directory Structure

```
wireframes/
├── planning-pack/           # 15 planning documents (01–15) — controlling design authority
├── engineering-handoff/     # 6 Cursor–Figma bridge documents
├── architecture-decisions/  # Architecture decision records (A–I)
├── main-pages/             # 5 main wireframe pages (fully populated)
├── interaction-contracts/  # UX behavior specs + click-through maps
├── populated-outcomes/     # Functional outcome atlas per page
├── breakout/               # 20+ branch wireframes per interaction family
├── research/               # Research methodology templates + practice variants
├── gap-closing/            # 10 new wireframes closing platform gaps
├── activation-plans/       # Spatial continuity + activation component contracts
└── master-plans/           # Engineering Update #3 + Tool Panel Master Plan
```

## Key Reference Documents

| Document | Path | Purpose |
|----------|------|--------|
| Executive Product Plan | `planning-pack/01-executive-product-plan.md` | North star, design principles, priorities |
| Five-Page Blueprint | `planning-pack/03-five-page-capability-blueprint.md` | Page jobs and boundaries |
| Page Implementation Matrix | `engineering-handoff/02-page-implementation-matrix.md` | Routes, status, shell contract |
| Engineering Update #3 | `master-plans/engineering-update-3.md` | 8 specializations, 47 methodologies, 12 gaps |
| Tool Panel Master Plan | `master-plans/tool-panel-wireframing-master-plan.md` | 58 tools mapped to pages + levels |
| Activation Components | `activation-plans/activation-components-state-contracts.md` | 10 component contracts for Cursor |

## Architecture Quick Reference

### 5 Main Pages
1. **Command Center** (`5:7437`) — Resume work + exceptions
2. **Ideation & Research** (`5:7677`) — Hypotheses and evidence
3. **Visualization Studio** (`5:7913`) — Full-space analysis
4. **Literature Review** (`5:8122`) — Stage-based evidence workflow
5. **Business & Mediation** (`5:8359`) — Governed decision dossier

### 8 Specializations
`clinical` · `discovery` · `genomic` · `performance` · `operations` · `biotechnology` · `medtech` · `regulatory`

### Panel Architecture
- **L0**: Five-page shell (persistent nav)
- **L1**: Left vault (practice-specific, 280px)
- **L2**: Tool panels / contextual drawers (320px, max 2)
- **L3**: Full-space viewers / modals
- **L4**: INNOVATION envelope / workflow overlay

### Technology Stack
- React / Next.js + Zustand + TanStack Query
- 3Dmol.js, OpenSeadragon, IGV.js, Cornerstone.js
- DuckDB WASM + Rust→WASM compute
- LlamaIndex + Vertex AI + MedGemma
- SHA-256/Merkle audit trail

### Theme (Light / Snow)
- Background: `#F2FAFA`
- Panel: `#EDF4F5`
- Nav bar: `#122060`
- Border: `#DAEBED`
- Title: `#0D1B38`
- Body: `#42536D`
- Teal accent: `#0D9488`
- Blue accent: `#1D4ED8`
- Font: Inter (Regular, Medium, Semi Bold, Bold)

## Sprint Priorities

| Priority | Components |
|----------|------------|
| P0 | Molecular Tumor Board, RWE Hub, Digital Pathology, PV Dashboard, Sample Size Calc, KM Estimator, Core L0–L2 |
| P1 | Multi-Omics, CAR-T, Master Protocol, eCTD, Forest Plot, DoE, Trial Sim |
| P2 | Federated Learning, CDx, Bayesian Interim, Propensity, Disproportionality, OMOP |
| P3 | DICOM, CRISPR Guide RNA, Long-read Seq, DCT, CGM/Wearable |
