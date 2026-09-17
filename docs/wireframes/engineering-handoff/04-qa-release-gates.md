# 04 · QA + Release Gates

> Figma Node: `32:3981` · Engineering Handoff 04/06

## Visual QA Viewports

| Viewport | Type |
|----------|------|
| 1440 × 900 | Primary |
| 1920 × 1080 | Wide |
| 1280 × 800 | Retract Vaults |

## Variant QA

- **Ship A**: vaults expanded
- **Compact B**: omnibar merged into toolbar
- **Focus C**: vaults hidden
- Dock collapsed/expanded · drawer open/closed · verify one center scrollport and no overlap boundaries

## Test Suite (Required Evidence)

- Unit + Integration
- Route + State persistence
- Data contract + Schema
- RAG retrieval + Evaluation
- BigQuery / Lake permissions
- Accessibility, Keyboard + Touch
- Responsive overlap
- Loading / Empty / Error
- Security + PHI
- Audit chain
- Performance + Telemetry
- Billing + Gates
- Deployment smoke

## Severity, Ownership and Pass Criteria

| Severity | Owner | Rule |
|----------|-------|------|
| P0 | Release owner | Block: safety, data loss, auth bypass, broken primary route |
| P1 | Feature owner + QA | Block unless accepted with dated mitigation |
| P2 | Product owner | Pass with logged follow-up and non-regression evidence |

## Release Checklist (Go / No-Go)

- ❌ Deploy SHA matches reviewed commit; stale deploy forbidden
- ❌ No false Live or Connected labels
- ❌ Only supported exports are enabled
- ✅ Every claim links to verified evidence
- ✅ PHI, permissions and audit chain reviewed
- ✅ Smoke tests pass on production route
- ✅ Owner, rollback and observe window assigned
