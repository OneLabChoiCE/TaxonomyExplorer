# Canonical parameter schema v1 — `SEC:PLT` (Plate / flat)

*Part of [Canonicalization Rules v1](../CANONICALIZATION_RULES_V1.md). Governs CGID derivation for `SEC:PLT` sections only.*

- **Shape code:** `SEC:PLT` — Plate / flat (rectangular solid, plate or sheet stock). Dictionary record: [registry/dictionary/SEC-PLT.md](../../../../registry/dictionary/SEC-PLT.md); definition source [GSID Standard §3.2](../../../GSID_2D_Standard.md).
- **Model:** intrinsic parameter vector; rectangular solid cross-section (edge radius negligible/excluded).

## Required parameters (fixed order)

| # | Parameter | Meaning | Unit | Precision class (§4) |
|---|---|---|---|---|
| 1 | `width` | overall rectangular width | mm | E (0.1) |
| 2 | `thickness` | overall rectangular thickness | mm | T (0.05) |

Parameter order is normative. `width` is the larger cross-section dimension; `thickness` the smaller.

## Allowed numeric domain

Both **positive** (`> 0` mm). No further constraint justified for v1.

> **`PLT` vs `SEC:FBR` (flat bar):** both are width×thickness rectangular solids with the *same* two-parameter schema shape. They are **distinct topology classes by dictionary decision** (plate/sheet stock vs narrow flat bar), and the distinction is preserved in the CGID **because the shape code is a hashed field** (§7): `CANON-V1|SEC:PLT|...` and `CANON-V1|SEC:FBR|...` never collide. Which code applies is a classification decision made before canonicalization (GSID Standard Annex A node S20), not a canonicalization rule.

## Excluded fields

Edge/corner radius, length-direction features (→ `CFG:`), material/grade/coating, and every non-geometry field (product, component, manufacturer, SKU, capacity, test, certification).

## Serialization contribution (§7)

`CANON-V1|SEC:PLT|<width>;<thickness>`

Cohort instance — base plate 152 × 6.4 → `CANON-V1|SEC:PLT|152.0;6.40`
