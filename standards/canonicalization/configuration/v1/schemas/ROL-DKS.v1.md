# Configuration canonicalization schema — `ROL-DKS.v1`

Canonicalization contribution for [`templates/ROL-DKS.v1.md`](../../../../../templates/ROL-DKS.v1.md) (the field-schema authority; this file adds only the encoding). Rules: [CONFIGURATION_CANONICALIZATION_RULES_V1.md](../CONFIGURATION_CANONICALIZATION_RULES_V1.md).

## Fields, classes, and serialization keys

| Key | Field kind | Class / rule | Conditional? |
|---|---|---|---|
| `DIM.length_mm` | numeric | **L** (0.1 mm, 1 decimal) | always present |
| `END.end_flare` | boolean | `TRUE` / `FALSE` (§7) | always present |
| `END.flare_length_mm` | numeric | **L** (0.1 mm, 1 decimal) | only when `end_flare = TRUE` (§9.3) |
| `END.flare_angle_deg` | numeric | **A** (0.1°, 1 decimal) | only when `end_flare = TRUE` (§9.3) |

`section_ref` (the component's `GS-…`, e.g. [`GS-000002`](../../../../../registry/gsid/GS-000002.md)) is a component-definition reference, **not** a hashed configuration field (rules §3; the template's own §2 states this).

## Serialization order

`CANON-CFG-V1|ROL-DKS.v1|DIM.length_mm=<L>;END.end_flare=<TRUE|FALSE>[;END.flare_length_mm=<L>;END.flare_angle_deg=<A>]`

(bracketed segment present only when `end_flare = TRUE`, per the omission rule §9.3.)

## Reference test vectors

See rules §10.2 Vectors A (`end_flare=FALSE`) and B (`end_flare=TRUE`) — both computed and independently reproducible; neither is production data.

---

*Related: [templates/ROL-DKS.v1.md](../../../../../templates/ROL-DKS.v1.md) · [CONFIGURATION_CANONICALIZATION_RULES_V1.md](../CONFIGURATION_CANONICALIZATION_RULES_V1.md) · [registry/dictionary/ROL-DKS.md](../../../../../registry/dictionary/ROL-DKS.md)*
