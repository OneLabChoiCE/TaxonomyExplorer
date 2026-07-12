---
identifier: "ASM-WDK.v1"
record_type: configuration_template
name: "Wire deck assembly — configuration template, version 1"
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: Taxonomy Standard
authorizing_decision: "Founding configuration-template seed under the bootstrap clause (GOVERNANCE §2; a new configuration template version is a TC decision, Registry Architecture §9.1); recorded in docs/ENGINEERING_LOG.md (2026-07-12, Category C configuration templates); identity-bearing/informative field schema restated from Taxonomy Standard §4.7–4.8 and the Part 6.5 deck configuration record; activation gate per FIRST_100_RECORDS_PLAN §6 item 2, §9 (template adoption + object-record lifecycle, Registry Architecture §5/§9.1, [Proposed])"
---

# Configuration template record — `ASM-WDK.v1` (Wire deck assembly, v1)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../docs/FOUNDING_RECORD_TEMPLATE.md) (configuration-template variant). Category C of the [First 100 Records Plan](../docs/FIRST_100_RECORDS_PLAN.md).*

## 1. Identity
- **Identifier:** `ASM-WDK.v1` — the version-1 configuration template for assembly type `ASM:WDK` (template identifier form `ASM-<code>.v<n>`; [Registry Architecture §2](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), Configuration Type record).
- **Record type:** Configuration template (a versioned, TC-registered field schema; [Registry Architecture §2](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), [§9.1](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md); Taxonomy Standard §4.7). The `record_type: configuration_template` value instantiates the **Configuration Type** record the Registry Architecture §2 object model already names — no new architecture — but it is **not yet listed** in [FOUNDING_RECORD_TEMPLATE](../docs/FOUNDING_RECORD_TEMPLATE.md) §2.1's frontmatter enum or its §4 variant catalog; adding the configuration-template variant is a **pending normative amendment** to that format doc, flagged here (not made), on the same footing as this cohort's other flagged prerequisites (template adoption, the object-record lifecycle, the CF-hashing rules).
- **Subject:** the identity-bearing / informative configuration field schema for a **wire deck** (`ASM:WDK`, family `FAM:DKG`). A **schema, not an object** — it defines which fields a deck's `ConfigurationID` hashes; it never names a deck, component, or geometry (Taxonomy Standard §4.7; P1).

## 2. Meaning
A **Configuration Template** is a versioned published schema for one `ASM:`/`ROL:` code that lists which `CFG:` groups apply, which fields exist, which are **identity-bearing (IB)** vs **informative (INF)**, and the canonical units and field order used when an instance's IB fields are hashed to a `ConfigurationID` (Taxonomy Standard §4.7). This record restates, without alteration, the deck configuration record published in **Taxonomy Standard Part 6.5** (and the structured form in Part 6.6).

**Field schema** — IB fields participate in the `CF1-…` hash; INF fields do not (§4.7). Canonical unit `mm` for lengths; categorical values are `UPPER_SNAKE` enum tokens; `support_component` and `wire_stock_gsid` are registry references.

| CFG group | Field | Canonical unit / domain | IB? | Source |
|---|---|---|---|---|
| [`CFG:DIM`](../registry/dictionary/CFG-DIM.md) | `nominal_width_mm` | mm | IB | Part 6.5 |
| [`CFG:DIM`](../registry/dictionary/CFG-DIM.md) | `nominal_depth_mm` | mm | IB | Part 6.5 |
| [`CFG:EDG`](../registry/dictionary/CFG-EDG.md) | `front` | `FLUSH \| WATERFALL \| REVERSE_WATERFALL \| BOXED` | IB | Part 6.5–6.6 |
| [`CFG:EDG`](../registry/dictionary/CFG-EDG.md) | `rear` | `FLUSH \| WATERFALL \| REVERSE_WATERFALL \| BOXED` | IB | Part 6.5–6.6 |
| [`CFG:EDG`](../registry/dictionary/CFG-EDG.md) | `sides` | `FLUSH \| WATERFALL \| REVERSE_WATERFALL \| BOXED` | IB | Part 6.5–6.6 |
| [`CFG:EDG`](../registry/dictionary/CFG-EDG.md) | `waterfall_drop_mm` | mm | IB | Part 6.5–6.6 |
| [`CFG:FIN`](../registry/dictionary/CFG-FIN.md) | `system` | `POWDER \| PAINT \| PRE_GALV \| HOT_DIP_GALV \| ZINC_PLATE` | IB | Part 6.5–6.6 |
| [`CFG:FIN`](../registry/dictionary/CFG-FIN.md) | `color` | free text | **INF** | Part 6.5 (color is informative) |
| [`CFG:JNT`](../registry/dictionary/CFG-JNT.md) | `method` | `RESISTANCE_WELD \| FUSION_WELD \| CLINCH \| BOLT \| RIVET \| INTERLOCK` | IB | Part 6.5–6.6 |
| [`CFG:JNT`](../registry/dictionary/CFG-JNT.md) | `weld_schedule_class` | token | IB | Part 6.5–6.6 |
| [`CFG:MAT`](../registry/dictionary/CFG-MAT.md) | `mesh_grade` | material spec token | IB | Part 6.5–6.6 |
| [`CFG:MPT`](../registry/dictionary/CFG-MPT.md) | `aperture_x_mm` | mm | IB | Part 6.5–6.6 |
| [`CFG:MPT`](../registry/dictionary/CFG-MPT.md) | `aperture_y_mm` | mm | IB | Part 6.5–6.6 |
| [`CFG:MPT`](../registry/dictionary/CFG-MPT.md) | `pattern` | `SQUARE \| RECT` | IB | Part 6.5–6.6 |
| [`CFG:SPD`](../registry/dictionary/CFG-SPD.md) | `span` | `FRONT_TO_BACK \| SIDE_TO_SIDE` | IB | Part 6.5–6.6 |
| [`CFG:SUP`](../registry/dictionary/CFG-SUP.md) | `support_count` | integer | IB | Part 6.5–6.6 |
| [`CFG:SUP`](../registry/dictionary/CFG-SUP.md) | `support_component` | `CMP-…` ref (role `ROL:DKS`) | IB | Part 6.5–6.6 |
| [`CFG:SUP`](../registry/dictionary/CFG-SUP.md) | `orientation` | `LEGS_DOWN \| LEGS_UP` | IB | Part 6.5–6.6 |
| [`CFG:SUP`](../registry/dictionary/CFG-SUP.md) | `spacing_mm` | ordered list of mm | IB | Part 6.5–6.6 |
| [`CFG:WIR`](../registry/dictionary/CFG-WIR.md) | `wire_diameter_mm` | mm | IB | Part 6.5–6.6 |
| [`CFG:WIR`](../registry/dictionary/CFG-WIR.md) | `wire_condition` | `PRE_GALV \| POST_GALV \| PLAIN` | IB | Part 6.5–6.6 |
| [`CFG:WIR`](../registry/dictionary/CFG-WIR.md) | `wire_stock_gsid` | `GS-…` ref (`SEC:RBR`) | IB | Part 6.6 (`wire_stock_gsid`) |

**Exclusions restated from the standard.** Channel thickness is **not** a deck-level field — it is a parameter of the support channel's canonical geometry, reached through `support_component` → its `GS-…` (Part 6.5). **Load capacity does not appear at all** — ratings are evidence-layer outputs (E-104), never configuration (Part 6.5; invariant 8).

**Field order for hashing.** When an instance is hashed to a `ConfigurationID`, IB fields are taken in ascending `CFG:` group-code order (`DIM, EDG, FIN, JNT, MAT, MPT, SPD, SUP, WIR`) and, within a group, in the field order listed above; INF fields (`CFG:FIN.color`) are excluded. The `ConfigurationID` has the form `CF1-<12-hex>` (template rules major 1; Taxonomy Standard §4.8).

**ConfigurationID hashing is a downstream prerequisite, not part of this record.** This template fixes the *field schema* (groups, fields, IB/INF split, units, order) that §4.7 requires. The **byte-serialization and numeric-normalization (rounding) rules** that turn a bound field set into the hashed string are a separate published prerequisite — not yet published — exactly as [Canonicalization Rules v1](../standards/canonicalization/v1/CANONICALIZATION_RULES_V1.md) was the prerequisite for every `CG1-…`. No `ConfigurationID` is computed, embedded, or registered by this record; Category E/F ([First 100 Records Plan §8](../docs/FIRST_100_RECORDS_PLAN.md) steps 3, 6) compute them once those rules and the enum-token list ([`dictionaries/enum_tokens.csv`](../dictionaries/), migration step 3) are published.

## 3. Lifecycle
- **Assigned status (current lineage point, R0):** `RESERVED` — the template's assigned registry state now, not a publication flag. A configuration template version is a TC-decided record (Registry Architecture §9.1); per [Registry Architecture §5/§8](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), `ACTIVE` is reached only through the `RESERVED → ACTIVE` transition at a snapshot release, so before `SNAP-1.0.0` the assigned state is `RESERVED`.
- **Same `status` field at the `SNAP-1.0.0` lineage point:** `ACTIVE`, pending both the template-adoption decision ([First 100 Records Plan §6 item 2](../docs/FIRST_100_RECORDS_PLAN.md)) and the release cut ([§9](../docs/FIRST_100_RECORDS_PLAN.md)). One trajectory (`RESERVED` now → `ACTIVE` at `SNAP-1.0.0`), not a separate terminal status.
- **Event history:**
  - *Reserved* — 2026-07-12, founding template seed under the bootstrap clause (GOVERNANCE §2; TC-decided template version, Registry Architecture §9.1); authorizing decision recorded in [ENGINEERING_LOG](../docs/ENGINEERING_LOG.md). Basis: the deck configuration record of Taxonomy Standard Part 6.5–6.6, under §4.7–4.8.
- **Next transition:** `RESERVED → ACTIVE` at the `SNAP-1.0.0` release ([First 100 Records Plan §9](../docs/FIRST_100_RECORDS_PLAN.md)), pending the template-adoption decision (§6 item 2), the object-record lifecycle adoption (§6 item 6), and the readiness checklist (§10).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee under the bootstrap clause (GOVERNANCE §2; new configuration template versions are a TC decision, Registry Architecture §9.1).
- **Source:** project-authored — the deck configuration record of Taxonomy Standard Part 6.5–6.6, under the ConfigurationGroup/Configuration-Template definitions of §4.7–4.8. Derived from the project's own decking-configuration expertise and the standard's §4.7 field definitions ([First 100 Records Plan §5 C](../docs/FIRST_100_RECORDS_PLAN.md)). No external table, catalog, or license.
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../README.md) status table).

## 5. Relationships
- **Templates a code:** the assembly type [`ASM:WDK`](../registry/dictionary/ASM-WDK.md) (family [`FAM:DKG`](../registry/dictionary/FAM-DKG.md)).
- **CFG groups drawn on:** [`CFG:DIM`](../registry/dictionary/CFG-DIM.md), [`CFG:EDG`](../registry/dictionary/CFG-EDG.md), [`CFG:FIN`](../registry/dictionary/CFG-FIN.md), [`CFG:JNT`](../registry/dictionary/CFG-JNT.md), [`CFG:MAT`](../registry/dictionary/CFG-MAT.md), [`CFG:MPT`](../registry/dictionary/CFG-MPT.md), [`CFG:SPD`](../registry/dictionary/CFG-SPD.md), [`CFG:SUP`](../registry/dictionary/CFG-SUP.md), [`CFG:WIR`](../registry/dictionary/CFG-WIR.md).
- **Component roles referenced:** support member is a [`ROL:DKS`](../registry/dictionary/ROL-DKS.md) component (template [`ROL-DKS.v1`](ROL-DKS.v1.md)); the mesh panel is a [`ROL:MSH`](../registry/dictionary/ROL-MSH.md) component (template [`ROL-MSH.v1`](ROL-MSH.v1.md)).
- **Geometry referenced:** `wire_stock_gsid` → [`GS-000004`](../registry/gsid/GS-000004.md) (`SEC:RBR` d 4.0 mm, mesh wire stock); the support channel's section is [`GS-000002`](../registry/gsid/GS-000002.md) (`SEC:OCU` 32×25×1.5 mm), reached through its `ROL:DKS` component. (These are the real registered serials; the standard's Part 6 uses illustrative placeholders `GS-000891`/`GS-002734`, reconciled per [First 100 Records Plan §4](../docs/FIRST_100_RECORDS_PLAN.md).)
- **Predecessor / successor:** none (first version). Identity-bearing field changes are a **new template version** (`.v2`), never an edit (Registry Architecture §3.3).
- **Instances:** none at founding — the wire-deck assembly (Category F) that binds this template is deferred ([First 100 Records Plan §7](../docs/FIRST_100_RECORDS_PLAN.md)).

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match of the field schema above to the deck configuration record of **Taxonomy Standard Part 6.5–6.6** (the IB/INF split, the CFG groups, and the exclusion of channel thickness and load capacity). A configuration template is registered by TC decision, not derived — no hash to recompute here; the derived `ConfigurationID` its instances carry is recomputed by Category E/F once the configuration-hashing rules are published (§2).

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
