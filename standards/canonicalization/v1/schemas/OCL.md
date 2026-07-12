# Canonical parameter schema v1 — `SEC:OCL` (Open C, lipped)

*Part of [Canonicalization Rules v1](../CANONICALIZATION_RULES_V1.md). Governs CGID derivation for `SEC:OCL` sections only.*

- **Shape code:** `SEC:OCL` — Open C, lipped (folded C with one stiffening lip fold per flange). Dictionary record: [registry/dictionary/SEC-OCL.md](../../../../registry/dictionary/SEC-OCL.md); definition source [GSID Standard §3.2](../../../GSID_2D_Standard.md) (Ruling R1).
- **Model:** intrinsic parameter vector; idealized sharp-corner folded outline (bend radii excluded — see Excluded fields).

## Required parameters (fixed order)

| # | Parameter | Meaning | Unit | Precision class (§4) |
|---|---|---|---|---|
| 1 | `web_depth` | overall depth across the web (outside-to-outside) | mm | E (0.1) |
| 2 | `flange_width` | overall flange width (outside-to-outside) | mm | E (0.1) |
| 3 | `lip_length` | overall stiffening-lip length | mm | E (0.1) |
| 4 | `thickness` | uniform folded material thickness | mm | T (0.05) |

Parameter order is normative and never varies. All four are required; none is optional in v1.

## Allowed numeric domain

All parameters are **positive** (`> 0` mm) after normalization. No further domain constraint is justified for v1 (no max/min envelope, no ratio rule — that would overfit).

## Excluded fields

Internal/external **bend radius**, corner geometry, web ribs/indents (a ribbed web is `SEC:SGM`, a different code), along-length features (holes/slots → `CFG:`), material/grade/coating, and every non-geometry field (product, component, manufacturer, SKU, capacity, test, certification). A section differing from another only in bend radius shares this schema's CGID in v1 (rules §10).

## Serialization contribution (§7)

`CANON-V1|SEC:OCL|<web_depth>;<flange_width>;<lip_length>;<thickness>`

Cohort instance — rack upright 76.2 × 41.3 × 12.7 × 1.9 →
`CANON-V1|SEC:OCL|76.2;41.3;12.7;1.90`
