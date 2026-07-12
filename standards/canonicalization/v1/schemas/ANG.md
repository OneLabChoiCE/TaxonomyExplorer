# Canonical parameter schema v1 — `SEC:ANG` (Angle)

*Part of [Canonicalization Rules v1](../CANONICALIZATION_RULES_V1.md). Governs CGID derivation for `SEC:ANG` sections only.*

- **Shape code:** `SEC:ANG` — Angle (two-leg L, equal or unequal). Dictionary record: [registry/dictionary/SEC-ANG.md](../../../../registry/dictionary/SEC-ANG.md); definition source [GSID Standard §3.2](../../../GSID_2D_Standard.md).
- **Model:** intrinsic parameter vector; idealized sharp-corner L outline (root/toe radii excluded).

## Required parameters (fixed order)

| # | Parameter | Meaning | Unit | Precision class (§4) |
|---|---|---|---|---|
| 1 | `leg_1` | longer leg length (outside) | mm | E (0.1) |
| 2 | `leg_2` | shorter leg length (outside) | mm | E (0.1) |
| 3 | `thickness` | uniform leg thickness | mm | T (0.05) |

**Canonical leg order (§3.2):** legs are serialized **descending** — `leg_1 ≥ leg_2`. This collapses the leg-swap / mirror degree of freedom deterministically (an unequal angle measured either way, and its mirror image, yield one record). For an **equal-leg** angle `leg_1 = leg_2` and the rule is satisfied trivially.

## Allowed numeric domain

All **positive** (`> 0` mm); `leg_1 ≥ leg_2` by the ordering rule. No further constraint justified for v1.

## Excluded fields

Root/toe fillet radii, leg taper, along-length features (→ `CFG:`), material/grade/coating, and every non-geometry field (product, component, manufacturer, SKU, capacity, test, certification).

## Serialization contribution (§7)

`CANON-V1|SEC:ANG|<leg_1>;<leg_2>;<thickness>`  (with `leg_1 ≥ leg_2`)

Cohort instance — shelving post 38 × 38 × 2.7 (equal-leg) → `CANON-V1|SEC:ANG|38.0;38.0;2.70`
