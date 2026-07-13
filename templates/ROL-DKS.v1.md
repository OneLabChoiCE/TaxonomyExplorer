---
identifier: "ROL-DKS.v1"
record_type: configuration_template
name: "Deck-support channel component — configuration template, version 1"
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: Taxonomy Standard
authorizing_decision: "Founding configuration-template seed under the bootstrap clause (GOVERNANCE §2; a new configuration template version is a TC decision, Registry Architecture §9.1); recorded in docs/ENGINEERING_LOG.md (2026-07-12, Category C configuration templates); identity-bearing/informative field schema restated from Taxonomy Standard §4.7–4.9 and the Part 6 wire-deck worked example (§6.3–6.4); activation gate per FIRST_100_RECORDS_PLAN §6 item 2, §9 (template adoption + object-record lifecycle, Registry Architecture §5/§9.1, [Proposed])"
---

# Configuration template record — `ROL-DKS.v1` (Deck-support channel, v1)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../docs/FOUNDING_RECORD_TEMPLATE.md) (configuration-template variant). Category C of the [First 100 Records Plan](../docs/FIRST_100_RECORDS_PLAN.md).*

## 1. Identity
- **Identifier:** `ROL-DKS.v1` — the version-1 configuration template for component role `ROL:DKS` (template identifier form `ROL-<code>.v<n>`; [Registry Architecture §2](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), Configuration Type record).
- **Record type:** Configuration template (a versioned, TC-registered field schema; [Registry Architecture §2](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), [§9.1](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md); Taxonomy Standard §4.7). The `record_type: configuration_template` value instantiates the **Configuration Type** record the Registry Architecture §2 object model already names — no new architecture — but it is **not yet listed** in [FOUNDING_RECORD_TEMPLATE](../docs/FOUNDING_RECORD_TEMPLATE.md) §2.1's frontmatter enum or its §4 variant catalog; adding the configuration-template variant is a **pending normative amendment** to that format doc, flagged here (not made), on the same footing as this cohort's other flagged prerequisites (template adoption, the object-record lifecycle, the CF-hashing rules).
- **Subject:** the identity-bearing / informative configuration field schema for a **deck-support channel** (`ROL:DKS`) — a prismatic component carrying a section reference (`GSID`) plus parametric length and end condition. A **schema, not an object**; it never names a channel (Taxonomy Standard §4.7; P1).

## 2. Meaning
A **Configuration Template** is a versioned published schema for one `ASM:`/`ROL:` code listing which `CFG:` groups apply, which fields exist, which are **identity-bearing (IB)** vs **informative (INF)**, and the canonical units and field order for hashing (Taxonomy Standard §4.7). This record restates, without alteration, the deck-support-channel configuration published in **Taxonomy Standard Part 6** (§6.3 layer table and §6.4 flared-channel teaching point).

A `ROL:DKS` component is **prismatic**: its cross-section is a registered geometry (`GSID`), and its length and end treatment are **configuration** (rule G-3, §6.4). The component definition binds `{ROL:DKS, section reference (GSID), this template ref, ConfigurationID}` (§4.9); the fields below are the configuration whose IB subset hashes to the `ConfigurationID`.

**Component-level reference (part of the component definition, §4.9):**
- **`section_ref`** → a `GS-…` geometry with shape `SEC:OCU` — for the Part 6 deck-support channel, [`GS-000002`](../registry/gsid/GS-000002.md) (`SEC:OCU` 32×25×1.5 mm). (Real registered serial; Part 6 uses illustrative `GS-002734`, reconciled per [First 100 Records Plan §4](../docs/FIRST_100_RECORDS_PLAN.md).) One GSID regardless of which deck uses the channel (§6.3). Channel thickness lives in this section geometry, never as a channel or deck field (§6.5).

**Configuration field schema** — IB fields hash to `CF1-…`; INF fields do not (§4.7). Canonical unit `mm`; categorical values are `UPPER_SNAKE` enum tokens.

| CFG group | Field | Canonical unit / domain | IB? | Source |
|---|---|---|---|---|
| [`CFG:DIM`](../registry/dictionary/CFG-DIM.md) | `length_mm` | mm (**parametric** — open in the catalog definition, bound per deck depth; §6.3) | IB | Part 6.3 |
| [`CFG:END`](../registry/dictionary/CFG-END.md) | `end_flare` | `TRUE \| FALSE` | IB | Part 6.4 (ends flared only → configuration) |
| [`CFG:END`](../registry/dictionary/CFG-END.md) | `flare_length_mm` | mm (present when `end_flare = TRUE`) | IB | Part 6.4 |
| [`CFG:END`](../registry/dictionary/CFG-END.md) | `flare_angle_deg` | degrees (present when `end_flare = TRUE`) | IB | Part 6.4 |

**Scope of the founding v1 field set.** Part 6's worked example enumerates exactly these identity-bearing channel fields — the section reference, parametric length, and end condition (§6.3–6.4). Fields not enumerated by the standard for a `ROL:DKS` component (e.g. an independent material/finish field beyond what the section geometry already carries) are **deliberately not invented here**; if the standard later enumerates them, they enter as a **new template version** (`.v2`), never an edit (Registry Architecture §3.3; append-only, no fabrication). Load capacity does not appear — ratings are evidence-layer outputs (E-104; invariant 8).

**End-flare is configuration, not geometry (the §6.4 teaching point).** Legs flared *continuously along the full length* change the `SEC:OCU` canonical parameters → new CGID/GSID (D-2, geometry layer). Ends flared *only* leave the prismatic cross-section unchanged → a `CFG:END` field on this component (G-3, configuration layer). The template captures the second; the first is a different `section_ref`.

**Field order for hashing.** IB fields are taken in ascending `CFG:` group-code order (`DIM, END`) and, within a group, in the field order above; `section_ref` is a component-definition reference, not a hashed configuration field. The `ConfigurationID` has the form `CF1-<12-hex>` (template rules major 1; §4.8).

**ConfigurationID hashing.** This template fixes the field schema §4.7 requires. The byte-serialization, numeric-normalization (rounding), and hash procedure that produce the hashed string are now published: [Configuration Canonicalization Rules v1](../standards/canonicalization/configuration/v1/CONFIGURATION_CANONICALIZATION_RULES_V1.md) (2026-07-12) and its per-template schema [schemas/ROL-DKS.v1.md](../standards/canonicalization/configuration/v1/schemas/ROL-DKS.v1.md) — the Category E analog of [geometry Canonicalization Rules v1](../standards/canonicalization/v1/CANONICALIZATION_RULES_V1.md) for every `CG1-…`. No production `ConfigurationID` is computed, embedded, or registered by this record or by that package; Category E computes the actual `CF1-…` values once `dictionaries/enum_tokens.csv` (migration step 3) is published and the steward-seeding decision (§6 item 5) is recorded.

## 3. Lifecycle
- **Assigned status (current lineage point, R0):** `RESERVED` — the template's assigned registry state now, not a publication flag. A configuration template version is a TC-decided record (Registry Architecture §9.1); per [Registry Architecture §5/§8](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), `ACTIVE` is reached only through the `RESERVED → ACTIVE` transition at a snapshot release, so before `SNAP-1.0.0` the assigned state is `RESERVED`.
- **Same `status` field at the `SNAP-1.0.0` lineage point:** `ACTIVE`, pending both the template-adoption decision ([First 100 Records Plan §6 item 2](../docs/FIRST_100_RECORDS_PLAN.md)) and the release cut ([§9](../docs/FIRST_100_RECORDS_PLAN.md)). One trajectory (`RESERVED` now → `ACTIVE` at `SNAP-1.0.0`), not a separate terminal status.
- **Event history:**
  - *Reserved* — 2026-07-12, founding template seed under the bootstrap clause (GOVERNANCE §2; TC-decided template version, Registry Architecture §9.1); authorizing decision recorded in [ENGINEERING_LOG](../docs/ENGINEERING_LOG.md). Basis: the wire-deck worked example of Taxonomy Standard Part 6 (§6.3–6.4), under §4.7–4.9.
- **Next transition:** `RESERVED → ACTIVE` at the `SNAP-1.0.0` release ([First 100 Records Plan §9](../docs/FIRST_100_RECORDS_PLAN.md)), pending the template-adoption decision (§6 item 2), the object-record lifecycle adoption (§6 item 6), and the readiness checklist (§10).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee under the bootstrap clause (GOVERNANCE §2; new configuration template versions are a TC decision, Registry Architecture §9.1).
- **Source:** project-authored — the wire-deck worked example of Taxonomy Standard Part 6 (§6.3–6.4), under the ConfigurationGroup/Configuration-Template definitions of §4.7–4.9. Derived from the project's own decking-configuration expertise and the standard's §4.7 field definitions ([First 100 Records Plan §5 C](../docs/FIRST_100_RECORDS_PLAN.md)). No external table, catalog, or license.
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../README.md) status table).

## 5. Relationships
- **Templates a code:** the component role [`ROL:DKS`](../registry/dictionary/ROL-DKS.md).
- **CFG groups drawn on:** [`CFG:DIM`](../registry/dictionary/CFG-DIM.md), [`CFG:END`](../registry/dictionary/CFG-END.md).
- **Geometry referenced:** `section_ref` → [`GS-000002`](../registry/gsid/GS-000002.md) (`SEC:OCU` 32×25×1.5 mm) for the Part 6 channel.
- **Consumed by:** the wire-deck assembly template [`ASM-WDK.v1`](ASM-WDK.v1.md) via its `CFG:SUP.support_component` field.
- **Predecessor / successor:** none (first version). Identity-bearing field changes are a **new template version** (`.v2`), never an edit (Registry Architecture §3.3).
- **Instances:** none at founding — the support-channel component (Category E) that binds this template is deferred ([First 100 Records Plan §7](../docs/FIRST_100_RECORDS_PLAN.md)).

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match of the field schema above to the deck-support-channel configuration of **Taxonomy Standard Part 6** (§6.3 parametric length + section ref, §6.4 end-flare-as-configuration). A configuration template is registered by TC decision, not derived — no hash to recompute here; the derived `ConfigurationID` its instances carry is recomputed by Category E once the configuration-hashing rules are published (§2).

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
