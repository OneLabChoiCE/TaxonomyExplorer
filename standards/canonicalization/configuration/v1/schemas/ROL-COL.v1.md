# Configuration canonicalization schema — `ROL-COL.v1`

Canonicalization contribution for [`templates/ROL-COL.v1.md`](../../../../../templates/ROL-COL.v1.md) (the field-schema authority; this file adds only the encoding). Rules: [CONFIGURATION_CANONICALIZATION_RULES_V1.md](../CONFIGURATION_CANONICALIZATION_RULES_V1.md).

## Fields, classes, and serialization keys

| Key | Field kind | Class / rule | IB? |
|---|---|---|---|
| `DIM.length_mm` | numeric | **L** (0.1 mm, 1 decimal) | IB |
| `END.top` | open string/token | verbatim (§8.2) | IB |
| `END.bottom` | open string/token | verbatim (§8.2) | IB |
| `FIN.system` | closed enum | verbatim `UPPER_SNAKE` (§8.1) | IB |
| `FIN.color` | — | **excluded — informative (§3)** | INF |
| `HOL.pattern_id` | open string/token | verbatim (§8.2) | IB |
| `HOL.pitch_mm` | numeric | **L** (0.1 mm, 1 decimal) | IB |
| `HOL.start_offset_mm` | numeric | **L** (0.1 mm, 1 decimal) | IB |
| `HOL.faces` | open string/token | verbatim (§8.2) | IB |
| `MAT.spec` | open string/token (may contain spaces) | verbatim (§8.2) | IB |
| `MAT.grade` | open string/token | verbatim (§8.2) | IB |

`section_ref` (the component's `GS-…`, e.g. [`GS-000001`](../../../../../registry/gsid/GS-000001.md)) is a component-definition reference, **not** a hashed configuration field (rules §3; the template's own §2 states this). Punching does not change it (G-3).

## Serialization order

`CANON-CFG-V1|ROL-COL.v1|DIM.length_mm=<L>;END.top=<tok>;END.bottom=<tok>;FIN.system=<enum>;HOL.pattern_id=<tok>;HOL.pitch_mm=<L>;HOL.start_offset_mm=<L>;HOL.faces=<tok>;MAT.spec=<tok>;MAT.grade=<tok>`

(`FIN.color`, being informative, never appears in the record.)

---

*Related: [templates/ROL-COL.v1.md](../../../../../templates/ROL-COL.v1.md) · [CONFIGURATION_CANONICALIZATION_RULES_V1.md](../CONFIGURATION_CANONICALIZATION_RULES_V1.md) · [registry/dictionary/ROL-COL.md](../../../../../registry/dictionary/ROL-COL.md)*
