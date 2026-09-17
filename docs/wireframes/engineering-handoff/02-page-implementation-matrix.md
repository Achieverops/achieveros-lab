# 02 · Page Implementation Matrix

> Figma Node: `32:3725` · Engineering Handoff 02/06

## Status Legend

| Status | Meaning |
|--------|--------|
| IMPLEMENTED | Live in production |
| DESIGN TARGET | Approved wireframe, not yet built |
| SOFTSTUB | Mounted but unverified |
| REQUIRES SETUP | Needs configuration |
| FUTURE | Not yet specified |

## Page Matrix (Primary Viewport 1440 × 900)

| Page / Route | Figma | Primary Outcome | Center / Vaults / Assistant | Data + Runtime | Truth |
|-------------|-------|-----------------|----------------------------|----------------|-------|
| Main Command Center `/lab/clinical-intelligence` | 5:7437 | Orient, launch and monitor | React Flow command graph · Left: Projects + sources · Right: Assistant + jobs | React Flow · Zustand · IndexedDB · journey_shadow | DESIGN TARGET |
| Ideation & Research `/lab/clinical-intelligence/ideation` | 5:7677 | Shape testable hypotheses | 10-step INNOVATION workflow · Left: Evidence + prompts · Right: Co-scientist context | LlamaIndex · literature RAG · notebooks | REQUIRES SETUP |
| Visualization Studio `/lab/clinical-intelligence/visualization` | 5:7913 | Inspect scientific evidence | Scientific viewers + plots · Left: Datasets + layers · Right: Selected-object assistant | BigQuery · lakehouse · GCP compute | SOFTSTUB |
| Literature Review `/lab/clinical-intelligence/literature` | 5:8122 | Synthesize cited evidence | Search, screening, synthesis · Left: Collections + filters · Right: RAG evidence assistant | LlamaIndex · document index · Vertex AI | REQUIRES SETUP |
| Business & Mediation `/lab/clinical-intelligence/business` | 5:8359 | Turn evidence into decisions | SCQA · eCTD · rNPV workbench · Left: Models + filings · Right: Task-scoped assistant | BigQuery · Wafeq · exports | FUTURE |

## Shared Shell Contract

- Header 56px · subnav 40px · left vault 256px · right vault 288px · one center scrollport
- CSS radial grid 32px at 26%
- Normal spatial engine: React Flow. WebGPU is Guided-only SoftStub/probe
- Persistence: Zustand + IndexedDB where implemented

## State and Safety Contract

- Every page specifies empty, loading and error states; privacy, PHI handling, audit chain, persistence, export capability and owner
- Allowed labels: Local · Available · Preview · Requires setup · SoftStub · Gated
- **Never Connected from visible keys alone**

## Workflow Separation (DO NOT MERGE)

- INNOVATION: Inquire → Navigate → Normalize → Optimize → Validate → Align → Test → Integrate → Oversee → Next-Gen
- Clinical pipeline remains separate: hypothesis → endpoint → cohort → regulatory
