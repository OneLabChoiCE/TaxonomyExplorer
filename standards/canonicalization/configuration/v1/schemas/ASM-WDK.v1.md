# Configuration canonicalization schema — `ASM-WDK.v1`

Canonicalization contribution for [`templates/ASM-WDK.v1.md`](../../../../../templates/ASM-WDK.v1.md) (the field-schema authority; this file adds only the encoding). Rules: [CONFIGURATION_CANONICALIZATION_RULES_V1.md](../CONFIGURATION_CANONICALIZATION_RULES_V1.md).

## Fields, classes, and serialization keys

| Key | Field kind | Class / rule | IB? |
|---|---|---|---|
| `DIM.nominal_width_mm` | numeric | **L** (0.1 mm, 1 decimal) | IB |
| `DIM.nominal_depth_mm` | numeric | **L** (0.1 mm, 1 decimal) | IB |
| `EDG.front` | closed enum | verbatim `UPPER_SNAKE` (§8.1) | IB |
| `EDG.rear` | closed enum | verbatim `UPPER_SNAKE` (§8.1) | IB |
| `EDG.sides` | closed enum | verbatim `UPPER_SNAKE` (§8.1) | IB |
| `EDG.waterfall_drop_mm` | numeric | **L** (0.1 mm, 1 decimal) | IB |
| `FIN.system` | closed enum | verbatim `UPPER_SNAKE` (§8.1) | IB |
| `FIN.color` | — | **excluded — informative (§3)** | INF |
| `JNT.method` | closed enum | verbatim `UPPER_SNAKE` (§8.1) | IB |
| `JNT.weld_schedule_class` | open string/token | verbatim (§8.2) | IB |
| `MAT.mesh_grade` | open string/token (may contain spaces) | verbatim (§8.2) | IB |
| `MPT.aperture_x_mm` | numeric | **L** (0.1 mm, 1 decimal) | IB |
| `MPT.aperture_y_mm` | numeric | **L** (0.1 mm, 1 decimal) | IB |
| `MPT.pattern` | closed enum | verbatim `UPPER_SNAKE` (§8.1) | IB |
| `SPD.span` | closed enum | verbatim `UPPER_SNAKE` (§8.1) | IB |
| `SUP.support_count` | integer | class **N**, exact (§6) | IB |
| `SUP.support_component` | reference (`CMP-…`) | verbatim identifier (§8.4) | IB |
| `SUP.orientation` | closed enum | verbatim `UPPER_SNAKE` (§8.1) | IB |
| `SUP.spacing_mm` | ordered list of numeric | list of **L** elements (§8.3) | IB |
| `WIR.wire_diameter_mm` | numeric | **W** (0.05 mm, 2 decimals) | IB |
| `WIR.wire_condition` | closed enum | verbatim `UPPER_SNAKE` (§8.1) | IB |
| `WIR.wire_stock_gsid` | reference (`GS-…`) | verbatim identifier (§8.4) | IB |

## Serialization order

`CANON-CFG-V1|ASM-WDK.v1|DIM.nominal_width_mm=<L>;DIM.nominal_depth_mm=<L>;EDG.front=<enum>;EDG.rear=<enum>;EDG.sides=<enum>;EDG.waterfall_drop_mm=<L>;FIN.system=<enum>;JNT.method=<enum>;JNT.weld_schedule_class=<tok>;MAT.mesh_grade=<tok>;MPT.aperture_x_mm=<L>;MPT.aperture_y_mm=<L>;MPT.pattern=<enum>;SPD.span=<enum>;SUP.support_count=<N>;SUP.support_component=<CMP-…>;SUP.orientation=<enum>;SUP.spacing_mm=<list>;WIR.wire_diameter_mm=<W>;WIR.wire_condition=<enum>;WIR.wire_stock_gsid=<GS-…>`

(`FIN.color`, being informative, never appears in the record.)

## Illustrative fragment (not a complete or hashed record)

See rules §10.3 for a non-hashed `SUP` group fragment demonstrating the integer, reference, and list rules together, using non-registered placeholder `CMP-999999`.

---

*Related: [templates/ASM-WDK.v1.md](../../../../../templates/ASM-WDK.v1.md) · [CONFIGURATION_CANONICALIZATION_RULES_V1.md](../CONFIGURATION_CANONICALIZATION_RULES_V1.md) · [registry/dictionary/ASM-WDK.md](../../../../../registry/dictionary/ASM-WDK.md)*
