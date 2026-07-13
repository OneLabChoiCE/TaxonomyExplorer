# registry/component/

**Component identities** (`CMP-<serial6>`) — Category E of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md) §1 (3 worked-example components: the rack upright, the mesh panel, the deck-support channel). Each `CMP-` record carries its derived `CF1-<hash12>` ConfigurationID companion. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md) (component variant).

**Populated (2026-07-12) — Category E seeded, 3/3.** All five prerequisites (Category-D geometries, Category-C templates, Configuration Canonicalization Rules v1, `dictionaries/enum_tokens.csv`, and the steward-seeding decision [`DECISION-EF-SEED-001`](../../docs/STEWARD_SEEDING_DECISION_EF.md)) were satisfied before authoring. Serials issued in First 100 Records Plan §1/§4 Category-E enumeration order (upright · mesh panel · deck-support channel):

| Record | Role | Section (GSID) | Bound template | ConfigurationID |
|---|---|---|---|---|
| [`CMP-000001`](CMP-000001.md) | [`ROL:COL`](../dictionary/ROL-COL.md) rack upright | [`GS-000001`](../gsid/GS-000001.md) (`SEC:OCL`) | [`ROL-COL.v1`](../../templates/ROL-COL.v1.md) | `CF1-671CAD0B9F50` |
| [`CMP-000002`](CMP-000002.md) | [`ROL:MSH`](../dictionary/ROL-MSH.md) mesh panel | stock [`GS-000004`](../gsid/GS-000004.md) (`SEC:RBR`) | [`ROL-MSH.v1`](../../templates/ROL-MSH.v1.md) | `CF1-296722274C4A` |
| [`CMP-000003`](CMP-000003.md) | [`ROL:DKS`](../dictionary/ROL-DKS.md) deck-support channel | [`GS-000002`](../gsid/GS-000002.md) (`SEC:OCU`) | [`ROL-DKS.v1`](../../templates/ROL-DKS.v1.md) | `CF1-265CDD59847D` |

Each `CMP-` record is `RESERVED`, cites `DECISION-EF-SEED-001`, binds its Category-C template, references only registered GSIDs (real serials, not the standards' illustrative `CMP-000482`/`-000611`/`-000612` placeholders), and embeds the normalized byte string + full SHA-256 so its ConfigurationID recomputes from published files alone (P9). The `SNAP-1.0.0` cut still gates activation (`RESERVED → ACTIVE`).
