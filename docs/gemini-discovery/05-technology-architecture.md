# Technology Architecture — Compute Layers, WASM, Agents & Security

> **Source:** Figma sections `📋 PLANNING PACK` (frames 10, 11, 13), `🏛 ARCHITECTURE DECISIONS` (frames A, G, I), and cross-cutting technology references

---

## L0–L6 Compute Layer Architecture

| Layer | Name | Technology | Role |
|-------|------|-----------|------|
| L0 | Ingest | Browser APIs, OPFS | File upload, validation, local storage |
| L1 | Index | DuckDB WASM | In-browser SQL, dataset cataloging |
| L2 | Transform | WebWorkers | Data cleaning, normalization, feature extraction |
| L3 | Resource Routing | MedGemma, AlphaFold, BioNeMo | Gated AI model dispatch (candidate/preview/available) |
| L4 | Local/WASM Solvers | Rust → WASM, DuckDB WASM | Deterministic statistics, no LLM math |
| L5 | Agent Orchestration | Agentic swarm | Shadow, Proactive, Extraction, Quality, Ethics, Security |
| L6 | Audit | Merkle hash chain | Immutable event log, 21 CFR Part 11, HIPAA |

---

## WASM L4 Solvers — Complete Inventory

### By Specialization

| Specialization | Solvers |
|----------------|--------|
| Clinical | Hazard Ratio, Odds Ratio, Risk Difference + 2 |
| Discovery | Lipinski RO5, Veber Filter, LogP/LogD + 2 |
| Genomic | Hardy-Weinberg, LD Decay, Fst Calculator + 2 |
| Human Performance | Karvonen HR, Harris-Benedict, 1RM Predictor + 2 |
| Healthcare Ops | Queueing Theory, DEA Efficiency, Markov Chain + 2 |
| Biotechnology | Monod/Haldane, Michaelis-Menten, Mass Balance + 2 |
| MedTech | Weibull Reliability, MTBF Calculator, Risk Priority Number + 2 |
| Regulatory | Submission Timeline, Regulatory Pathway Selector, Fee Calculator + 2 |

### Cross-Specialization WASM Tools

| Tool | Technology | Wireframed? |
|------|-----------|-------------|
| Sample Size Calculator | Rust → WASM | ✅ Yes (`159:216`) |
| DuckDB Omics SQL | DuckDB WASM | ✅ Yes (`158:591`) |
| Trial Simulator (10k trials/4.1s) | Rust → WASM | ✅ Yes (`159:675`) |
| Bioprocess Scale-Up Calculator | Rust → WASM | ✅ Yes (`159:216`) |

---

## Client-Side Viewer Technologies

| Viewer | Library/Technology | Status | Wireframed? |
|--------|-------------------|--------|-------------|
| Molecular 3D | 3Dmol.js / WebGPU | Preview | ✅ |
| Network/Causal | D3.js / force-directed | Local | ✅ |
| Genomic Tracks | GA4GH/WDL | Requires setup | ✅ |
| DICOM | Cornerstone.js | Requires setup | ✅ |
| WSI | OpenSeadragon | Partial | ✅ |
| Notebook | Pyodide / JupyterLite | Draft | ✅ |
| Chart/Table | Built-in | Available | ✅ |

---

## AI/ML Models (Gated)

| Model | Use Case | Gate Status |
|-------|----------|------------|
| MedGemma 1.5 | Medical image analysis | SoftStub — substitute viewer |
| AlphaFold | Protein structure prediction | Candidate |
| BioNeMo | Molecular generation | Candidate |
| Paige AI | Prostate pathology | Wireframed |
| PathAI | Tumor detection | Wireframed |
| QuPath | Cell segmentation | Wireframed |
| OncoKB v4.3 | Variant interpretation | Wireframed |
| NVIDIA FLARE v2.4 | Federated learning | Wireframed |

---

## Agentic Swarm Architecture

| Agent | Role | Always Active? |
|-------|------|---------------|
| Shadow Agent | Monitors all interactions, generates signals (40-60+ per session) | Yes |
| Proactive Agent | Suggests next steps based on context and shadow signals | Yes |
| Extraction Agent | Pulls structured data from sources, corrects with dual review | On demand |
| Quality Agent | Validates evidence, flags conflicts, ensures source integrity | On demand |
| Ethics Agent | Enforces consent, COI, regulatory gates, PHI protections | Always |
| Security Agent | Merkle-hashed audit trail, 21 CFR Part 11, HIPAA, GxP | Always |

---

## Specialization Preset System

> From Planning Pack frame 10 (`40:1606`)

Presets tune schemas, routing, and guidance while preserving the same five-page information architecture and object contracts.

**What changes per preset:**
- Left vault contents (tools, sources, solvers, templates)
- Schema validation rules
- AI model routing preferences
- Assistant behavior and prompts
- Methodology template availability

**What stays constant:**
- Five-page shell (L0)
- Journey ribbon
- DE layers
- INNOVATION envelope (L4)
- Audit trail (L6)
- Security/compliance gates

---

## Security & Compliance

| Standard | Implementation |
|----------|---------------|
| 21 CFR Part 11 | Electronic signatures with Merkle-hashed audit trail |
| HIPAA | PHI gates on DICOM/WSI viewers, no diagnostic claims |
| GxP | Governed decision gates, dual-review workflows |
| Data Integrity | Immutable event log, source lineage preservation |
| Federated Privacy | Differential Privacy ε=1.0, Secure Aggregation |

---

## Approved Architecture Decisions (from ADRs A–I)

| ADR | Decision |
|-----|----------|
| A | Professional services remain separate from software |
| B | Enter at stage/object; return with source passage intact |
| C | Surface & interaction rules — viewer behavior standardized |
| D | Five-page final wireframe directives |
| E | Software ≠ Professional Services — five subscriptions |
| F | Partner verification evidence model (CRO, CDMO, TTO, etc.) |
| G | L0–L6 model routing and agents appear when task runs, not as permanent dashboard chrome |
| H | Business mediation + documentation blueprint |
| I | Final approval gate — all signed → authorize wireframe editing |
