# Configuration canonicalization schema — `ROL-MSH.v1`

Canonicalization contribution for [`templates/ROL-MSH.v1.md`](../../../../../templates/ROL-MSH.v1.md) (the field-schema authority; this file adds only the encoding). Rules: [CONFIGURATION_CANONICALIZATION_RULES_V1.md](../CONFIGURATION_CANONICALIZATION_RULES_V1.md).

## Fields, classes, and serialization keys

| Key | Field kind | Class / rule |
|---|---|---|
| `DIM.nominal_width_mm` | numeric | **L** (0.1 mm, 1 decimal) |
| `DIM.nominal_depth_mm` | numeric | **L** (0.1 mm, 1 decimal) |
| `MAT.mesh_grade` | open string/token (may contain spaces) | verbatim (§8.2) |
| `MPT.aperture_x_mm` | numeric | **L** (0.1 mm, 1 decimal) |
| `MPT.aperture_y_mm` | numeric | **L** (0.1 mm, 1 decimal) |
| `MPT.pattern` | closed enum | verbatim `UPPER_SNAKE` (§8.1) |
| `WIR.wire_diameter_mm` | numeric | **W** (0.05 mm, 2 decimals) |
| `WIR.wire_condition` | closed enum | verbatim `UPPER_SNAKE` (§8.1) |
| `WIR.wire_stock_gsid` | reference (`GS-…`) | verbatim identifier (§8.4) |

No `section_ref` — the mesh panel is non-prismatic (Taxonomy Standard §4.9); `wire_stock_gsid` references the wire **stock** (e.g. [`GS-000004`](../../../../../registry/gsid/GS-000004.md)), and unlike `section_ref` on `ROL-COL.v1`/`ROL-DKS.v1`, it **is** a hashed configuration field here — the template's own §2 states this distinction.

## Serialization order

`CANON-CFG-V1|ROL-MSH.v1|DIM.nominal_width_mm=<L>;DIM.nominal_depth_mm=<L>;MAT.mesh_grade=<tok>;MPT.aperture_x_mm=<L>;MPT.aperture_y_mm=<L>;MPT.pattern=<enum>;WIR.wire_diameter_mm=<W>;WIR.wire_condition=<enum>;WIR.wire_stock_gsid=<GS-…>`

## Reference test vector

See rules §10.2 Vector C — computed and independently reproducible; uses a non-registered placeholder `GS-999999` and synthetic values, not production data.

---

*Related: [templates/ROL-MSH.v1.md](../../../../../templates/ROL-MSH.v1.md) · [CONFIGURATION_CANONICALIZATION_RULES_V1.md](../CONFIGURATION_CANONICALIZATION_RULES_V1.md) · [registry/dictionary/ROL-MSH.md](../../../../../registry/dictionary/ROL-MSH.md)*
