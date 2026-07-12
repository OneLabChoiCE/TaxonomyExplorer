# Canonical parameter schema v1 — `SEC:RBR` (Round bar / rod / wire)

*Part of [Canonicalization Rules v1](../CANONICALIZATION_RULES_V1.md). Governs CGID derivation for `SEC:RBR` sections only.*

- **Shape code:** `SEC:RBR` — Round bar / rod / wire (solid circular; includes wire stock). Dictionary record: [registry/dictionary/SEC-RBR.md](../../../../registry/dictionary/SEC-RBR.md); definition source [GSID Standard §3.2](../../../GSID_2D_Standard.md).
- **Model:** intrinsic parameter vector. A solid circle is **fully described by its diameter** — this schema carries no idealization and no excluded geometric feature.

## Required parameters (fixed order)

| # | Parameter | Meaning | Unit | Precision class (§4) |
|---|---|---|---|---|
| 1 | `diameter` | outside diameter of the solid circular section | mm | E (0.1) |

Single parameter; required.

## Allowed numeric domain

`diameter > 0` mm. No further constraint justified for v1.

## Excluded fields

Length-direction features, material/grade/coating, surface finish, and every non-geometry field (product, component, manufacturer, SKU, capacity, test, certification). (`RBR` covers mesh **wire stock** as a cross-section — the wire's *geometry* only; a mesh panel built from it is a component, not this record.)

## Serialization contribution (§7)

`CANON-V1|SEC:RBR|<diameter>`

Cohort instance — mesh wire stock ⌀4.0 → `CANON-V1|SEC:RBR|4.0`
