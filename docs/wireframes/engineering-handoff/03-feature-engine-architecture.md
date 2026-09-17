# 03 · Feature + Engine Architecture

> Figma Node: `32:3839` · Engineering Handoff 03/06

## System Layers (Logical Connections · Not Live Claims)

| Layer | Components |
|-------|------------|
| Experience | 5 page UIs, React Flow canvas, Scientific viewers, Jobs + results, Retractable filing drawer |
| Context / Agent | OS Assistant, Co-scientist, Selection context, Task context, journey_shadow |
| Orchestration | Swarm jobs, Workflow runner, Notebook execution, Event + provenance |
| Retrieval / Data | LlamaIndex, Documentation, BigQuery, Data lake / lakehouse, Literature corpus |
| Compute | GCP compute, Vertex AI, NVIDIA / partner services, WebGPU Guided probe |
| Trust / Governance | Auth + gates, PHI boundaries, Audit chain, Schema contracts, Evidence grading |
| Export / Delivery | eCTD, SCQA brief, rNPV model, Wafeq, Reports + deployment |

## Contextual Activation Rules

- Assistant → only when an object or task is selected
- Swarms → jobs and results surfaces only
- journey_shadow → background telemetry + provenance
- Filing library → retractable drawer
- Compute + auth → vault or job panel

## Connectivity Truth

| Provider | Status |
|----------|--------|
| Vertex AI | Requires Setup |
| BigQuery | Gated |
| NVIDIA | Preview |
| WebGPU | Guided SoftStub |

## Contract Flow

UI selection emits scoped context → orchestration creates a traceable job → retrieval and compute return evidence → governance verifies source, permissions and audit chain → delivery enables only supported exports.
