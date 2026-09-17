# 01 · Cursor–Figma Handoff Command Board

> Figma Node: `32:3591` · Engineering Handoff 01/06

## Mission

Move approved Normal Mode work from design intent to tested production without reinvention.

- 5 Normal Mode wireframes
- Guided = separate route
- Live audit open

## Workflow Truth

This Figma session cannot talk directly to Cursor’s desktop filesystem. GitHub commits and exact Figma file/node references are the handoff bus.

## Lifecycle

Discover → Specify → Design → Approve → Implement → Test → Deploy → Observe

## Ownership Lanes (RACI)

| Lane | Role |
|------|------|
| Product / Architect | Intent + Accept |
| Figma | Design Source |
| Cursor | Code Owner |
| CI / QA | Evidence |
| Data / Platform | Contracts |
| Release owner | Go / No-Go |

## Required Handoff Payload (Every Iteration)

- Request ID
- Git branch + commit
- Code paths
- Figma file + node IDs
- State matrix
- API / data contracts
- Screenshots
- Test evidence
- Unresolved risks
- Next owner

**Acceptance rule**: the receiving owner can reproduce the state, verify the claim, and identify the next decision without private context.

## Authoritative References

- Repository: `github.com/AchieverOps-cpu/AchieverOps` · Lab: `00-Platform/06-commercial/achieveros-lab`
- Shell: `src/components/layout/UniversalLabPageShell.tsx`
- Tokens: `00-Platform/06-commercial/website/_framer/tokens-unified.json`
- Spec: `01-docs/figma-bridge/FIGMA-IMPL-SPEC-MVptXzeMVzGBDPRfdae3Jf.md`
- Registry: `LAB-FIGMA-FILE.json`
