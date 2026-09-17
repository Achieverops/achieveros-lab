# AchieverOS Lab — Gemini Discovery Guide

> **Purpose:** Feed this document (and the companion files in this directory) to Gemini to discover ALL research methodologies, tools, software, technologies, and planned panels across the entire AchieverOS Lab platform.
>
> **Source of truth:** Figma file `MVptXzeMVzGBDPRfdae3Jf`, Page 1 — 93+ wireframes organized into 11 locked sections.
>
> **Date:** 17 Sep 2026

---

## Table of Contents

| # | File | What Gemini Learns |
|---|------|--------------------|
| 00 | This file | Overview, architecture, section map |
| 01 | `01-practice-vault-inventory.md` | ALL 8 specialization vaults — every tool, source, solver, methodology template |
| 02 | `02-visualization-tool-panels.md` | Every wireframed viewer, calculator, and tool panel |
| 03 | `03-gap-closing-panels.md` | Molecular tumor board, master protocol, federated learning, companion diagnostics |
| 04 | `04-research-methodology-frameworks.md` | 24+ methodology templates, trial design simulator |
| 05 | `05-technology-architecture.md` | L0–L6 compute layers, WASM, agents, security |

---

## Platform Architecture Quick Reference

### 8 Specializations (`practice.slug`)

| Slug | Name | Domain |
|------|------|--------|
| `clinical` | Clinical Intelligence | Evidence-based medicine, systematic reviews, meta-analysis |
| `discovery` | Discovery | Drug discovery, ADMET, lead optimization, QSAR |
| `genomic` | Genomic Intelligence | Variants, pathways, WGS/WES, RNA-Seq, population genetics |
| `performance` | Human Performance | Exercise physiology, biomechanics, sleep, HRV |
| `operations` | Healthcare Operations | Patient flow, capacity, staffing, cost-effectiveness |
| `biotechnology` | Biotechnology | Bioprocess, fermentation, scale-up, enzyme kinetics |
| `medtech` | MedTech | Medical devices, risk matrix, V&V, biocompatibility |
| `regulatory` | Regulatory Intelligence | eCTD, submissions, CAPA, regulatory pathways |

### 5-Page Information Architecture

| Page | Route | Purpose |
|------|-------|---------|
| 01 · Command Center | `/lab/[slug]/command` | Queue, search, presets, program management |
| 02 · Ideation & Research | `/lab/[slug]/ideation` | Inquiry, spatial canvas, methodology, INNOVATION |
| 03 · Visualization Studio | `/lab/[slug]/visualize` | Full-space viewers, calculators, datasets, tools |
| 04 · Literature Review | `/lab/[slug]/literature` | 7 stages, PRISMA, evidence packs |
| 05 · Business & Mediation | `/lab/[slug]/results` | Governance, dossier, financial model, compliance |

### Panel Architecture (L0–L4)

| Layer | Name | What It Is |
|-------|------|------------|
| L0 | Five-page shell | Top nav, page routing, Snow theme |
| L1 | Left vault | Practice-specific tools, sources, solvers, templates |
| L2 | Tool panels/drawers | Overlay tools, configuration, partner setup |
| L3 | Full-space viewers | Molecular, network, genomic, DICOM, WSI, notebook |
| L4 | INNOVATION envelope | 10-step governed research workflow |

### Compute Stack

| Layer | Technology | Role |
|-------|-----------|------|
| L4 WASM | Rust → WebAssembly | Deterministic statistics (sample size, hazard ratio, etc.) |
| L4 WASM | DuckDB WASM | In-browser SQL over omics datasets |
| L3 Resource | MedGemma, AlphaFold, BioNeMo | Gated AI models (candidate/preview/available) |
| Client | 3Dmol.js, OpenLayers, Cornerstone | Scientific viewers |
| Client | NVIDIA FLARE | Federated learning coordination |

### Agentic Swarm

| Agent | Role |
|-------|------|
| Shadow Agent | Monitors all interactions, generates signals |
| Proactive Agent | Suggests next steps based on context |
| Extraction Agent | Pulls structured data from sources |
| Quality Agent | Validates evidence, flags conflicts |
| Ethics Agent | Enforces consent, COI, regulatory gates |
| Security Agent | Merkle-hashed audit trail, 21 CFR Part 11 |

---

## Figma Section Map

### Core Sections (feed to Gemini in this order)

```
🔗 CROSS-CUTTING                  → 01-practice-vault-inventory.md
03 · VISUALIZATION STUDIO          → 02-visualization-tool-panels.md
🧬 GAP-CLOSING                    → 03-gap-closing-panels.md
02 · IDEATION & RESEARCH           → 04-research-methodology-frameworks.md
📋 PLANNING PACK + 🏛 ARCH DECISIONS → 05-technology-architecture.md
```

### All 11 Sections

| Section | Frames | Content |
|---------|--------|---------|
| ⬡ HUB — 5 Main Wireframes | 6 | Five populated main page wireframes |
| 01 · COMMAND CENTER | 9 | Search, presets, resume, exceptions, gates |
| 02 · IDEATION & RESEARCH | 10 | Spatial canvas, methodology, INNOVATION, trial simulator |
| 03 · VISUALIZATION STUDIO | 15 | Viewers, calculators, DuckDB, DICOM, notebooks, omics |
| 04 · LITERATURE REVIEW | 8 | 7 stages, PRISMA, reader, evidence pack |
| 05 · BUSINESS & MEDIATION | 13 | Governance, PV, eCTD, CAR-T, dossier, compliance |
| 📋 PLANNING PACK | 12 | 15 strategy/roadmap planning documents |
| 🏛 ARCHITECTURE DECISIONS | 10 | 9 architecture decision records (A through I) |
| 🔧 ENGINEERING HANDOFF | 14 | Specs, QA, activation contracts, handoff docs |
| 🔗 CROSS-CUTTING | 2 | Shared search + 8 practice vault variants |
| 🧬 GAP-CLOSING | 4 | Molecular tumor board, master protocol, federated, CDx |

---

## How to Use with Gemini

1. **Start with `01-practice-vault-inventory.md`** — this is the Rosetta Stone. It lists every tool, source, solver, and methodology template across all 8 specializations.
2. **Then `02-visualization-tool-panels.md`** — shows what's already wireframed as tool panels.
3. **Then `03-gap-closing-panels.md`** — shows panels designed to close specific capability gaps.
4. **Then `04-research-methodology-frameworks.md`** — the 24+ methodology templates and trial simulator.
5. **Finally `05-technology-architecture.md`** — the L0–L6 compute architecture and approved technology decisions.

Ask Gemini to:
- Enumerate ALL unique tools, solvers, and methodologies across all 8 specializations
- Identify which tools have wireframes vs. which are listed but not yet wireframed
- Map each technology to its compute layer (WASM L4, client-side, gated AI, etc.)
- Discover gaps: tools mentioned in vaults but missing from tool panel wireframes
- Generate a complete implementation priority matrix
