# 02 · Shared Continuum + Object Model

> Figma Node: `40:1276` · Planning Pack · 14 Sep 2026

## Purpose

The continuum is a linked record—not a wizard. Users can enter at any page and return to the exact object, version and view.

## End-to-End Continuum

1. Inquire → source → Question
2. Evidence → claim → Hypothesis
3. Experiment / Analysis → finding
4. Literature synthesis → EvidenceItem
5. Decision → approval → follow-up
6. Mediation → issue → option → resolution

## Shared Scientific Chain

1. Program → Question → Evidence → Hypothesis → Experiment / Analysis → Decision
2. Clinical is separate: hypothesis → endpoint → cohort → regulatory
3. Cross-page links carry canonical ID + version + selection
4. Back links restore origin and filters

## Canonical Objects

- Project, Dataset, Document, Notebook
- Experiment, Workflow, Run, Agent, Model
- Artifact, EvidenceItem, Citation, Decision, Export
- Every object: owner, policy, lineage, status, timestamps
- React Flow nodes reference IDs; never duplicate durable state

## State Boundary

| Category | Examples |
|----------|----------|
| **PERSIST** | objects, permissions, runs, lineage, audit, approvals |
| **CONTEXTUAL** | selected object, assistant thread, open source, compare set |
| **TRANSIENT** | pan/zoom, hover, drawer width, draft filter |

- Server authoritative; Zustand only canvas/UI
- Deep link fails safely with permission-aware explanation
