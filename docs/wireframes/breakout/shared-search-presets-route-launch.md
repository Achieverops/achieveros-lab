# Shared Search, Presets & Route Launch

> Figma Node: `75:3603` · Command overlay

## Purpose

Global search shows results, no-results and recoverable error. Eight Lab presets support single and multi-select, conflict warning and applied state. Guided Journey confirms launch to `/lab/[slug]/guided` only.

## Layout

- **Left vault**: Recent items (HF endpoint, SNOW Phase 2, no-result queries)
- **Center**: Search results (8 canonical objects with owner, type, cited source) + Specialization multi-select with conflict detection
- **Context**: Guided Journey route with program/selection preservation

## Required Tests

Search result/no-result/error; preset conflict; route and back-state restore.
