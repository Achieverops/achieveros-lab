# 05 · Business & Mediation Interaction Contract

> Figma Node: `60:2268`

## Clickable Control Inventory

| ID | Control |
|----|--------|
| BUS-01 | Dossier outline / SCQA / MECE editor |
| BUS-02 | Evidence, assumptions and interviews |
| BUS-03 | Financial models / scenarios / sensitivity |
| BUS-04 | Risk / recommendation / dissent |
| BUS-05 | Roadmap / immutable log / gate progression |
| BUS-06 | Review: approve / conditional / pause / stop |
| BUS-07 | Partner / CRO / CDMO launcher and qualification |
| BUS-08 | COI / confidentiality / data-room controls |
| BUS-09 | SOW / change order / completeness / missing information |
| BUS-10 | Version compare / audit signature / export package / assistant |

## Click → Behavior → Outcome Examples

- **BUS-03**: choose sourced assumptions → scenario result with disclosure and sensitivity
- **BUS-06**: authority + artifact checks → Approved, Conditional, Paused or Stopped
- **BUS-07**: inspect lifecycle evidence → Candidate, Contacted, Qualified or Contracted
- **BUS-09**: scope variance → impact analysis, change order and new baseline
- **BUS-10**: compare signed versions → audit signature and export package

## Implementation Contract

- **Preserve**: canonical ID, selection, filters, viewport, draft, thread, partial artifacts
- **Inputs/Permissions**: role, source, policy, consent, locality, qualification, authority
- **Data Written**: versioned object, event, rationale, reviewer, timestamp; Cancel writes none
- **Evidence/Provenance**: source hash, exact passage, confidence, assumption, version, audit
- **Acceptance/QA**: each ID opens named outcome; keyboard close; retry; permission denial; stale restore; deep-link replay
