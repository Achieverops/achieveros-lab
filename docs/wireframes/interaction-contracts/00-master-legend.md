# Design-to-Development Interaction Contract — Master Legend

> Figma Node: `60:1619`

A comprehensive UX behavior specification and click-through state-transition map beside the five approved desktop families.

## Interaction ID Format

`CMD / IDE / VIS / LIT / BUS` + unique number. Same ID appears in inventory, trace, outcome and QA acceptance.

## Surface Grammar

Button · dropdown · popover · drawer · tray · overlay · full-screen viewer · deep link · job. One modal-depth surface maximum.

## Honest Status Labels

Candidate · Contacted · Qualified · Contracted · Configured · Ready · Degraded · Expired · Requires setup · Preview · SoftStub · Gated

## Shared State Family

Default → Open → Empty → Loading → Partial/Degraded → Permission/Setup → Blocked/Error → Success/Ready → Stale/Retry → Close/Cancel → Restore/Replay

## Preservation Contract

Preserve canonical object ID, selection, filters, zoom/camera, scroll, draft inputs and assistant thread. Esc/back closes one layer; Cancel writes nothing; Save versions changes; restore/replay uses immutable snapshot.
