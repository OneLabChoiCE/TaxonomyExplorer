# Canonical parameter schema v1 — `SEC:OCU` (Open C, unlipped)

*Part of [Canonicalization Rules v1](../CANONICALIZATION_RULES_V1.md). Governs CGID derivation for `SEC:OCU` sections only.*

- **Shape code:** `SEC:OCU` — Open C, unlipped (folded plain C, uniform thickness, no lips). Dictionary record: [registry/dictionary/SEC-OCU.md](../../../../registry/dictionary/SEC-OCU.md); definition source [GSID Standard §3.2](../../../GSID_2D_Standard.md) (Ruling R2).
- **Model:** intrinsic parameter vector; idealized sharp-corner folded outline (bend radii excluded).

## Required parameters (fixed order)

| # | Parameter | Meaning | Unit | Precision class (§4) |
|---|---|---|---|---|
| 1 | `web_depth` | overall depth across the web (outside-to-outside) | mm | E (0.1) |
| 2 | `flange_width` | overall flange width (outside-to-outside) | mm | E (0.1) |
| 3 | `thickness` | uniform folded material thickness | mm | T (0.05) |

Parameter order is normative and never varies. This schema serves **both** OCU cohort records; they differ only in parameter values (D-2), not in schema.

## Allowed numeric domain

All parameters **positive** (`> 0` mm). No further constraint justified for v1. (`OCU` has no lip parameter — a lipped section is `SEC:OCL`; a web-indented section is `SEC:SGM`. Lip presence is a classification decision made before canonicalization, GSID Standard Annex A node S4.)

## Excluded fields

Lip geometry (→ `SEC:OCL`), web indents (→ `SEC:SGM`), bend radius, corner geometry, along-length features (→ `CFG:`), material/grade/coating, and every non-geometry field (product, component, manufacturer, SKU, capacity, test, certification).

## Serialization contribution (§7)

`CANON-V1|SEC:OCU|<web_depth>;<flange_width>;<thickness>`

Cohort instances:
- deck-support channel 32 × 25 × 1.5 → `CANON-V1|SEC:OCU|32.0;25.0;1.50`
- frame brace 40 × 40 × 1.5 → `CANON-V1|SEC:OCU|40.0;40.0;1.50`

The two produce different normalized records → different CGIDs, from one schema.
