# Fully Populated Functional Wireframe Atlas

> Figma Node: `61:1376`

Implementation-ready allocation from page and control through capability, technology, policy, evidence, state and next step.

## L0–L6 Functional Layers

| Layer | Status | Job | Technology | Fallback |
|-------|--------|-----|------------|----------|
| L0 | Local | Ingest & source preservation | Upload → immutable OPFS snapshot + checksum. Docling for PDF structure. DECIMER for chemical figures. | Partial parse; manual queue |
| L1 | Available | Identifier anchor freeze | Aho–Corasick locks NCT, PMID, PDB, HGVS anchors | Conflicts retain both spans |
| L2 | Candidate | Entity & schema resolution | SNOMED CT, ICD-10, RxNorm, UMLS mapping | Mapping confidence + dissent |
| L3 | Requires setup | Governed resource routing | 189-capability mesh, AlphaSense setup-gated | No API; local/degraded path |
| L4 | Preview | Local / native solvers | C++/WASM OpenMM, Monod ODE, rNPV, ISO 14971 | Module SHA verified |
| L5 | Gated | Model & agent routing | MedGemma, Gemini, Claude, Vertex Co-Scientist | Outputs remain Draft |
| L6 | Available | Journey shadow & audit | SHA-256/Merkle audit root, 21 CFR Part 11 controls | Append-only history |

## State Family

Default → Expanded → Empty → Loading → Partial/Degraded → Setup/Permission → Blocked/Error → Success/Ready → Stale/Retry → Close/Cancel → Restore/Replay → Human review/promotion
