# 11 · Data, Engine + Agent Architecture

> Figma Node: `40:1640` · Planning Pack · 14 Sep 2026

Experience layers reference governed services. Every run exposes input snapshot, policy, cost, model/tool identity and evidence lineage.

## L0–L6 Evidence Spine

| Layer | Job |
|-------|-----|
| L0 acquire | source identity + consent |
| L1 parse | LlamaParse structure + checksums |
| L2 normalize | schemas, entities, units |
| L3 index | LlamaIndex chunks + retrieval policy |
| L4 enrich | citations, claims, contradictions |
| L5 analyze | notebook/WASM/compute runs |
| L6 publish | evidence artifact + decision linkage |

## Knowledge + Compute

1. BigQuery/lake/lakehouse expose logical assets, never credentials
2. Notebooks run immutable input snapshots
3. WASM records module hash/runtime
4. GCP/Vertex/NVIDIA routed by policy, health, locality, cost
5. Co-scientist suggestions remain reviewable drafts
6. Capability registry routes 189 resources by typed I/O

## Agent Governance

1. Swarm roles, budgets, tool allowlists, stop conditions
2. Checkpoints and explicit human approvals
3. Assistant scoped to selected object/task
4. Activity appears in jobs/results—not a page
5. journey_shadow is background telemetry; opens on demand
6. No autonomous promotion into evidence or decisions

## Trust + Verification

- States: Not configured → Authorizing → Metadata available → Partially indexed → Ready
- Also Degraded, Blocked, Failed, Stale, Local, Preview, Requires setup, SoftStub, Gated
- Observe latency, retrieval quality, cost, policy denial and lineage
- Test contracts, replay, auth, isolation, failure recovery
- **USER-SUPPLIED CODE STATUS: VERIFICATION REQUIRED**
