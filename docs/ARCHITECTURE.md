# AchieverOS Lab — System Architecture

## Overview
AchieverOS Lab is a comprehensive medical/scientific research operating system with 8 specializations,
93+ wireframes, and a 5-level panel architecture designed for precision medicine, clinical trials,
genomic intelligence, and regulatory compliance.

## 5 Main Pages (Level 0 Shell)
| Page | Route | Purpose |
|------|-------|---------|
| 01 Command Center | `/lab/command` | Resume work, exceptions, readiness, guided journey |
| 02 Ideation & Research | `/lab/{practice}/ideate` | Hypothesize, co-scientist reasoning, causal fields |
| 03 Visualization Studio | `/lab/{practice}/visualize` | Full-fidelity viewers, omics analysis, datasets |
| 04 Literature Review | `/lab/{practice}/literature` | Stage-owned evidence workflow (7 stages) |
| 05 Business & Mediation | `/lab/{practice}/business` | Governed dossier, risk, partners, export |

## 8 Specializations (practice.slug routing)
| Specialization | Slug | Focus |
|---------------|------|-------|
| Clinical Intelligence | `clinical` | Trials, tumor boards, RWE, survival analysis |
| Discovery | `discovery` | HTS, CRISPR, SAR, ADMET, virtual screening |
| Genomic Intelligence | `genomic` | WGS/WES, variant calling, MSI/TMB, PGx |
| Human Performance | `performance` | Wearables, CGM, HRV, DTx endpoints |
| Healthcare Operations | `operations` | Federated learning, NLP, OMOP/FHIR, capacity |
| Biotechnology | `biotechnology` | CAR-T manufacturing, gene therapy, ADC, bioprocess |
| MedTech | `medtech` | Digital pathology, SaMD, radiomics, DICOM |
| Regulatory Intelligence | `regulatory` | eCTD, pharmacovigilance, MedDRA, Pinnacle 21 |

## Panel Architecture (Level 0–4)
- **L0**: Five-page shell + top nav + specialization selector + guided journey
- **L1**: Left vault (practice-specific tools, retractable, 280px)
- **L2**: Right/bottom contextual panels (tool panels, drawers, 320px)
- **L3**: Full-space viewers (molecular 3D, WSI, genomic tracks, DICOM)
- **L4**: INNOVATION envelope (10-step workflow overlay, WASM compute)

### Canvas-First Principle
The dotted spatial canvas is NEVER replaced. All panels overlay the canvas.
Panels can be collapsed/dismissed to return to full canvas interaction.

## Technology Stack
- **Frontend**: React 18+ / Next.js 14, TypeScript, TailwindCSS
- **State**: Zustand (client) + React Query (server)
- **Viewers**: 3Dmol.js, OpenSeadragon, IGV.js, Cornerstone.js, D3.js
- **WASM Compute**: Rust→WASM (statistics), DuckDB WASM (SQL queries)
- **AI/ML**: ONNX Runtime Web, TensorFlow.js, WebGPU inference
- **Data**: FHIR R4, OMOP CDM, HL7v2, DICOM, eCTD XML
- **Security**: HIPAA, SOC 2, GxP, 21 CFR Part 11
