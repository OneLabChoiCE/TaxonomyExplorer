# Canonical parameter schema v1 — `SEC:SHS` (Square hollow)

*Part of [Canonicalization Rules v1](../CANONICALIZATION_RULES_V1.md). Governs CGID derivation for `SEC:SHS` sections only.*

- **Shape code:** `SEC:SHS` — Square hollow (closed square single-cell hollow). Dictionary record: [registry/dictionary/SEC-SHS.md](../../../../registry/dictionary/SEC-SHS.md); definition source [GSID Standard §3.2](../../../GSID_2D_Standard.md).
- **Model:** intrinsic parameter vector; idealized sharp-corner closed square outline (corner radii excluded).

## Required parameters (fixed order)

| # | Parameter | Meaning | Unit | Precision class (§4) |
|---|---|---|---|---|
| 1 | `outer_size` | overall outside dimension of the square (one side, outside-to-outside) | mm | E (0.1) |
| 2 | `thickness` | wall thickness | mm | T (0.05) |

**Square constraint:** `SEC:SHS` is the *square* single-cell hollow, so the two outer sides are equal and a **single** `outer_size` parameter fully describes the envelope. A section whose two outer sides differ is **not** `SHS` — it is `SEC:RHS` (rectangular hollow), which is **out of v1 scope** (rules §10). This constraint is enforced at classification (GSID Standard Annex A node S11), before canonicalization.

## Allowed numeric domain

Both **positive** (`> 0` mm); by definition `outer_size` describes an equal-sided square. No further constraint justified for v1.

## Excluded fields

Outer/inner **corner radius**, along-length features (→ `CFG:`), material/grade/coating, and every non-geometry field (product, component, manufacturer, SKU, capacity, test, certification). Two square hollows differing only in corner radius share this schema's CGID in v1 (rules §10).

## Serialization contribution (§7)

`CANON-V1|SEC:SHS|<outer_size>;<thickness>`

Cohort instance — platform column 76 × 76 × 3.2 (square, `outer_size = 76`) → `CANON-V1|SEC:SHS|76.0;3.20`
