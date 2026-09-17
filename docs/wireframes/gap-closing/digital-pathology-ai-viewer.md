# Digital Pathology & AI Annotation Viewer

> Figma Node: `164:2` · Specialization: Genomic / MedTech

## Slide Library
- WSI-2026-001: H&E Stain, Lung adenocarcinoma (40x, 2.1GB)
- WSI-2026-002: PD-L1 IHC 22C3, TPS scoring (20x, 1.4GB)
- WSI-2026-003: ALK IHC D5F3, Fusion detection (20x, 1.2GB)
- WSI-2026-004: Ki-67 IHC, Proliferation index (20x, 0.9GB)
- WSI-2026-005: TTF-1 IHC, Lineage confirmation (20x, 1.1GB)

## AI Models
- Paige AI — Prostate detection
- PathAI — Tumor detection
- QuPath — Cell segmentation

## Viewer (WSI-2026-001 · H&E · 40x)
- AI Overlay: ON · Confidence threshold: 0.75
- Selected region: 2.4mm × 1.8mm

## Multi-Stain Comparison
- H&E: Positive
- PD-L1 22C3: TPS 65%
- ALK D5F3: Positive
- Ki-67: Index 42%
- TTF-1: Positive

## AI Analysis Results
- Tumor Probability: 92.3% (Paige AI v4.2)
- PD-L1 TPS: 65% (≥50% = High expression)
- Cell Segmentation: 12,847 tumor + 3,421 immune + 8,293 stromal + 1,204 necrotic = 25,765 total

> Engine: OpenSeadragon · AI: Paige v4.2 + QuPath
