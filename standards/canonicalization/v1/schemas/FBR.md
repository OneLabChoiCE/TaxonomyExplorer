# Canonical parameter schema v1 — `SEC:FBR` (Flat bar)

*Part of [Canonicalization Rules v1](../CANONICALIZATION_RULES_V1.md). Governs CGID derivation for `SEC:FBR` sections only.*

- **Shape code:** `SEC:FBR` — Flat bar (solid narrow rectangular bar; includes grating bearing bar). Dictionary record: [registry/dictionary/SEC-FBR.md](../../../../registry/dictionary/SEC-FBR.md); definition source [GSID Standard §3.2](../../../GSID_2D_Standard.md).
- **Model:** intrinsic parameter vector; rectangular solid cross-section (edge radius negligible/excluded).

## Required parameters (fixed order)

| # | Parameter | Meaning | Unit | Precision class (§4) |
|---|---|---|---|---|
| 1 | `width` | overall rectangular width (the wider face) | mm | E (0.1) |
| 2 | `thickness` | overall rectangular thickness | mm | T (0.05) |

Parameter order is normative. `width` is the larger cross-section dimension; `thickness` the smaller.

## Allowed numeric domain

Both **positive** (`> 0` mm). No further constraint justified for v1. (v1 defines **no** width/thickness ratio boundary separating `FBR` from `SEC:PLT`; the two are separated by dictionary classification, not by a canonicalization threshold — see below.)

> **`FBR` vs `SEC:PLT` (plate/flat):** identical two-parameter schema shape; **distinct topology classes by dictionary decision**. The distinction is preserved in the CGID because the shape code is a hashed field (§7) — `CANON-V1|SEC:FBR|...` ≠ `CANON-V1|SEC:PLT|...` for the same width/thickness. Which code applies is decided at classification (GSID Standard Annex A node S20), never here.

## Excluded fields

Edge/corner radius, length-direction features (→ `CFG:`), material/grade/coating, and every non-geometry field (product, component, manufacturer, SKU, capacity, test, certification).

## Serialization contribution (§7)

`CANON-V1|SEC:FBR|<width>;<thickness>`

Cohort instance — sway strap 25 × 3 → `CANON-V1|SEC:FBR|25.0;3.00`
