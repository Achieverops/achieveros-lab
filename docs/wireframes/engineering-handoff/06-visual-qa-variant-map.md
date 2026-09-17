# 06 · Visual QA / Variant Map

> Figma Node: `32:4233` · Engineering Handoff 06/06

## Normal Mode Variants (Fixed Bands · One Center Scrollport)

| Variant | State |
|---------|-------|
| A · Ship | Expanded |
| B · Compact | Collapsed, omnibar merged |
| C · Focus | Collapsed |

### Shell Dimensions
- Header 56px
- Subnav 40px
- Left vault 256px
- Right vault 288px
- Grid 32px · 26%
- Drawer open / closed

## Deployment Comparison (Do Not Accept Stale Dark)

| Version | Status |
|---------|--------|
| Live Cloud Run · stale dark | **STALE** |
| Corrected target · snow | **TARGET** |

**BLOCK STALE DEPLOY** — Production SHA must match the reviewed commit.

### Theme Rules
- Normal Mode uses `#F2FAFA` / `#EDF4F5` / `#DAEBED` surfaces with `#0D1B38` and `#122060` hierarchy
- Guided Journey is the separate dark, cinematic route; do not use it as Normal Mode shell chrome

## Overlap Boundaries (Check at 1920 · 1440 · 1280)

- Fixed bands never enter the center scrollport
- At 1280 × 800, retract vaults before compressing work
- Dock and drawer must not cover primary controls
