---
identifier: "ROL-COL.v1"
record_type: configuration_template
name: "Upright / column component — configuration template, version 1"
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: Taxonomy Standard
authorizing_decision: "Founding configuration-template seed under the bootstrap clause (GOVERNANCE §2; a new configuration template version is a TC decision, Registry Architecture §9.1); recorded in docs/ENGINEERING_LOG.md (2026-07-12, Category C configuration templates); identity-bearing/informative field schema restated from Taxonomy Standard §4.7–4.9 and the Part 7 rack-upright worked example; activation gate per FIRST_100_RECORDS_PLAN §6 item 2, §9 (template adoption + object-record lifecycle, Registry Architecture §5/§9.1, [Proposed])"
---

# Configuration template record — `ROL-COL.v1` (Upright / column, v1)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../docs/FOUNDING_RECORD_TEMPLATE.md) (configuration-template variant). Category C of the [First 100 Records Plan](../docs/FIRST_100_RECORDS_PLAN.md).*

## 1. Identity
- **Identifier:** `ROL-COL.v1` — the version-1 configuration template for component role `ROL:COL` (template identifier form `ROL-<code>.v<n>`; [Registry Architecture §2](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), Configuration Type record).
- **Record type:** Configuration template (a versioned, TC-registered field schema; [Registry Architecture §2](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), [§9.1](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md); Taxonomy Standard §4.7). The `record_type: configuration_template` value instantiates the **Configuration Type** record the Registry Architecture §2 object model already names — no new architecture — but it is **not yet listed** in [FOUNDING_RECORD_TEMPLATE](../docs/FOUNDING_RECORD_TEMPLATE.md) §2.1's frontmatter enum or its §4 variant catalog; adding the configuration-template variant is a **pending normative amendment** to that format doc, flagged here (not made), on the same footing as this cohort's other flagged prerequisites (template adoption, the object-record lifecycle, the CF-hashing rules).
- **Subject:** the identity-bearing / informative configuration field schema for a **roll-formed upright / column** (`ROL:COL`) — a prismatic component that carries a section reference (`GSID`) plus discrete along-length configuration. A **schema, not an object**; it never names a column (Taxonomy Standard §4.7; P1).

## 2. Meaning
A **Configuration Template** is a versioned published schema for one `ASM:`/`ROL:` code listing which `CFG:` groups apply, which fields exist, which are **identity-bearing (IB)** vs **informative (INF)**, and the canonical units and field order for hashing (Taxonomy Standard §4.7). This record restates, without alteration, the upright configuration published in **Taxonomy Standard Part 7** (fields in §7.3 and the structured form in §7.6).

A `ROL:COL` component is **prismatic**: its cross-section is a registered geometry (`GSID`), and discrete along-length features (punching, end conditions, cut length) are **configuration**, not geometry (rule G-3). The component definition binds `{ROL:COL, section reference (GSID), material, this template ref, ConfigurationID}` (§4.9); the fields below are the configuration whose IB subset hashes to the `ConfigurationID`.

**Component-level reference (part of the component definition, §4.9):**
- **`section_ref`** → a `GS-…` geometry with shape `SEC:OCL` — for the Part 7 upright, [`GS-000001`](../registry/gsid/GS-000001.md) (`SEC:OCL` 76.2×41.3×12.7×1.9 mm). (Real registered serial; Part 7 uses illustrative `GS-004217`, reconciled per [First 100 Records Plan §4](../docs/FIRST_100_RECORDS_PLAN.md).) The section is fixed by the component definition; punching and length never change it (§7.3(a), G-3).

**Configuration field schema** — IB fields hash to `CF1-…`; INF fields do not (§4.7). Canonical unit `mm`; categorical values are `UPPER_SNAKE` enum tokens.

| CFG group | Field | Canonical unit / domain | IB? | Source |
|---|---|---|---|---|
| [`CFG:DIM`](../registry/dictionary/CFG-DIM.md) | `length_mm` | mm (**parametric** — open in the catalog definition, bound per instance; §7.4) | IB | Part 7.6 |
| [`CFG:END`](../registry/dictionary/CFG-END.md) | `top` | end-condition token (e.g. `PLAIN`) | IB | Part 7.6 |
| [`CFG:END`](../registry/dictionary/CFG-END.md) | `bottom` | end-condition token (e.g. `PLAIN`) | IB | Part 7.6 |
| [`CFG:FIN`](../registry/dictionary/CFG-FIN.md) | `system` | `POWDER \| PAINT \| PRE_GALV \| HOT_DIP_GALV \| ZINC_PLATE` | IB | Part 7.6 |
| [`CFG:FIN`](../registry/dictionary/CFG-FIN.md) | `color` | free text | **INF** | Part 7.6 (color is informative; D-5) |
| [`CFG:HOL`](../registry/dictionary/CFG-HOL.md) | `pattern_id` | token (e.g. `TEARDROP-A`) | IB | Part 7.3(a), 7.6 |
| [`CFG:HOL`](../registry/dictionary/CFG-HOL.md) | `pitch_mm` | mm | IB | Part 7.3(a), 7.6 |
| [`CFG:HOL`](../registry/dictionary/CFG-HOL.md) | `start_offset_mm` | mm | IB | Part 7.3(a), 7.6 |
| [`CFG:HOL`](../registry/dictionary/CFG-HOL.md) | `faces` | punched-faces token (e.g. `BOTH_FLANGES`) | IB | Part 7.6 |
| [`CFG:MAT`](../registry/dictionary/CFG-MAT.md) | `spec` | material spec token (e.g. `ASTM A1011 SS`) | IB | Part 7.6 |
| [`CFG:MAT`](../registry/dictionary/CFG-MAT.md) | `grade` | grade token (e.g. `GR50`) | IB | Part 7.6 |

**Parametric definition vs bound instance (§7.4).** The catalog component definition leaves `length_mm` **open** — one `CMP-…` covers all cut lengths; a bound instance (one length) has a `ConfigurationID`, so lengths never proliferate ComponentIDs. Punching is discrete-along-length → configuration, so a punched column and its unpunched blank share the **same** `section_ref` GSID (§7.3(a)).

**Field order for hashing.** IB fields are taken in ascending `CFG:` group-code order (`DIM, END, FIN, HOL, MAT`) and, within a group, in the field order above; `CFG:FIN.color` (INF) is excluded; `section_ref` is a component-definition reference, not a hashed configuration field. The `ConfigurationID` has the form `CF1-<12-hex>` (template rules major 1; §4.8).

**ConfigurationID hashing.** This template fixes the field schema §4.7 requires. The byte-serialization, numeric-normalization (rounding), and hash procedure that produce the hashed string are now published: [Configuration Canonicalization Rules v1](../standards/canonicalization/configuration/v1/CONFIGURATION_CANONICALIZATION_RULES_V1.md) (2026-07-12) and its per-template schema [schemas/ROL-COL.v1.md](../standards/canonicalization/configuration/v1/schemas/ROL-COL.v1.md) — the Category E analog of [geometry Canonicalization Rules v1](../standards/canonicalization/v1/CANONICALIZATION_RULES_V1.md) for every `CG1-…`. No production `ConfigurationID` is computed, embedded, or registered by this record or by that package; Category E computes the actual `CF1-…` values once `dictionaries/enum_tokens.csv` (migration step 3) is published and the steward-seeding decision (§6 item 5) is recorded.

## 3. Lifecycle
- **Assigned status (current lineage point, R0):** `RESERVED` — the template's assigned registry state now, not a publication flag. A configuration template version is a TC-decided record (Registry Architecture §9.1); per [Registry Architecture §5/§8](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), `ACTIVE` is reached only through the `RESERVED → ACTIVE` transition at a snapshot release, so before `SNAP-1.0.0` the assigned state is `RESERVED`.
- **Same `status` field at the `SNAP-1.0.0` lineage point:** `ACTIVE`, pending both the template-adoption decision ([First 100 Records Plan §6 item 2](../docs/FIRST_100_RECORDS_PLAN.md)) and the release cut ([§9](../docs/FIRST_100_RECORDS_PLAN.md)). One trajectory (`RESERVED` now → `ACTIVE` at `SNAP-1.0.0`), not a separate terminal status.
- **Event history:**
  - *Reserved* — 2026-07-12, founding template seed under the bootstrap clause (GOVERNANCE §2; TC-decided template version, Registry Architecture §9.1); authorizing decision recorded in [ENGINEERING_LOG](../docs/ENGINEERING_LOG.md). Basis: the rack-upright worked example of Taxonomy Standard Part 7, under §4.7–4.9.
- **Next transition:** `RESERVED → ACTIVE` at the `SNAP-1.0.0` release ([First 100 Records Plan §9](../docs/FIRST_100_RECORDS_PLAN.md)), pending the template-adoption decision (§6 item 2), the object-record lifecycle adoption (§6 item 6), and the readiness checklist (§10).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee under the bootstrap clause (GOVERNANCE §2; new configuration template versions are a TC decision, Registry Architecture §9.1).
- **Source:** project-authored — the rack-upright worked example of Taxonomy Standard Part 7, under the ConfigurationGroup/Configuration-Template definitions of §4.7–4.9. Derived from the project's own configuration expertise and the standard's §4.7 field definitions ([First 100 Records Plan §5 C](../docs/FIRST_100_RECORDS_PLAN.md)). No external table, catalog, or license.
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../README.md) status table).

## 5. Relationships
- **Templates a code:** the component role [`ROL:COL`](../registry/dictionary/ROL-COL.md).
- **CFG groups drawn on:** [`CFG:DIM`](../registry/dictionary/CFG-DIM.md), [`CFG:END`](../registry/dictionary/CFG-END.md), [`CFG:FIN`](../registry/dictionary/CFG-FIN.md), [`CFG:HOL`](../registry/dictionary/CFG-HOL.md), [`CFG:MAT`](../registry/dictionary/CFG-MAT.md).
- **Geometry referenced:** `section_ref` → [`GS-000001`](../registry/gsid/GS-000001.md) (`SEC:OCL` 76.2×41.3×12.7×1.9 mm) for the Part 7 upright. A `ROL:COL` component of a different profile references a different `SEC:OCL`/`SEC:OCU`/`SEC:OCR` GSID; the template is section-agnostic.
- **Predecessor / successor:** none (first version). Identity-bearing field changes are a **new template version** (`.v2`), never an edit (Registry Architecture §3.3).
- **Instances:** none at founding — the upright component (Category E) that binds this template is deferred ([First 100 Records Plan §7](../docs/FIRST_100_RECORDS_PLAN.md)).

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match of the field schema above to the upright configuration of **Taxonomy Standard Part 7** (§7.3(a) punching-as-configuration, §7.4 parametric length, §7.6 fields). A configuration template is registered by TC decision, not derived — no hash to recompute here; the derived `ConfigurationID` its instances carry is recomputed by Category E once the configuration-hashing rules are published (§2).

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
