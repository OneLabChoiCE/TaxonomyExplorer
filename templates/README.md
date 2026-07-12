# templates/

**Configuration templates** — the versioned, TC-registered field schemas that define what a component's or assembly's `ConfigurationID` hashes. Category C of the [First 100 Records Plan](../docs/FIRST_100_RECORDS_PLAN.md) §1. One file per template version; identifier form `ASM-<code>.v<n>` / `ROL-<code>.v<n>` ([Registry Architecture §2](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), Configuration Type record; Taxonomy Standard §4.7).

**Owner: Technical Committee** (a new configuration template version is a TC decision — [Registry Architecture §9.1](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md); repository-structure §3). Templates version **independently per `ASM:`/`ROL:` code** and are frozen into every snapshot ([repository-structure.md §3](../docs/repository-structure.md); First 100 Records Plan §10, migration step 10).

**Populated (2026-07-12) — the four founding templates seeded.** These are exactly the set the wire-deck + upright proof (Categories E/F) needs (First 100 Records Plan §2):

| Template | Templates code | Basis in the Standard | CFG groups drawn on |
|---|---|---|---|
| [`ASM-WDK.v1`](ASM-WDK.v1.md) | [`ASM:WDK`](../registry/dictionary/ASM-WDK.md) (wire deck) | Part 6.5–6.6 | DIM, EDG, FIN, JNT, MAT, MPT, SPD, SUP, WIR |
| [`ROL-COL.v1`](ROL-COL.v1.md) | [`ROL:COL`](../registry/dictionary/ROL-COL.md) (upright / column) | Part 7.3, 7.6 | DIM, END, FIN, HOL, MAT |
| [`ROL-DKS.v1`](ROL-DKS.v1.md) | [`ROL:DKS`](../registry/dictionary/ROL-DKS.md) (deck-support channel) | Part 6.3–6.4 | DIM, END |
| [`ROL-MSH.v1`](ROL-MSH.v1.md) | [`ROL:MSH`](../registry/dictionary/ROL-MSH.md) (mesh panel) | Part 6.3, 6.6 | DIM, MAT, MPT, WIR |

`ROL-MSH.v1` is the fourth template the [First 100 Records Plan](../docs/FIRST_100_RECORDS_PLAN.md) §2 added to the three-template Bootstrap sketch, because the wire deck's mesh panel is a `ROL:MSH` component whose `ConfigurationID` needs a registered mesh-role template.

## Format

Each record follows [FOUNDING_RECORD_TEMPLATE](../docs/FOUNDING_RECORD_TEMPLATE.md) (configuration-template variant): the seven blocks, with a **Meaning** block that restates the identity-bearing (IB) / informative (INF) field split, the CFG groups, canonical units, and field order for hashing — exactly as the [Taxonomy Standard §4.7](../standards/Material_Handling_Taxonomy_Standard.md) worked examples publish them. Every field cites its source Part, and every CFG group links its [dictionary code record](../registry/dictionary/). Authored as Markdown (with the machine-readable JSON encoding — `schemas/files/template.schema.json` per [repository-structure.md §4](../docs/repository-structure.md) — deferred, the same precedent as the [canonicalization v1 shape schemas](../standards/canonicalization/v1/schemas/)).

**One flagged format gap.** `record_type: configuration_template` instantiates the **Configuration Type** record that [Registry Architecture §2](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) already names (so no new architecture is invented), but that value is **not yet listed** in [FOUNDING_RECORD_TEMPLATE](../docs/FOUNDING_RECORD_TEMPLATE.md) §2.1's frontmatter enum or its §4 variant catalog. Adding the configuration-template variant is a **pending normative amendment** to the founding-record format doc — flagged here, not made — on the same footing as the cohort's other flagged prerequisites (template adoption, the object-record lifecycle, and the CF-hashing rules below).

## Two deliberate boundaries

1. **No `ConfigurationID` is computed here.** A template fixes the *field schema* §4.7 requires (groups, fields, IB/INF, units, order). The **byte-serialization and numeric-normalization (rounding) rules** that turn a bound field set into the hashed `CF1-…` string are a separate published prerequisite — **not yet published** — exactly as [Canonicalization Rules v1](../standards/canonicalization/v1/CANONICALIZATION_RULES_V1.md) was the prerequisite for every `CG1-…`. Category E/F compute the `ConfigurationID`s once those rules and the enum-token list (`dictionaries/enum_tokens.csv`, migration step 3) are published.
2. **No fabricated fields.** Where the Standard does not enumerate a field for a code (e.g. an independent material field on a `ROL:DKS` channel beyond its section geometry), the founding v1 template does not invent one; it enters later as a **new template version** (`.v2`), never an edit ([Registry Architecture §3.3](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md); append-only).

## Status

Stage **R0 — files-as-registry** ([Registry Architecture §12](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)). Every template's assigned state is `RESERVED`; `ACTIVE` is reached only through the `RESERVED → ACTIVE` transition at the `SNAP-1.0.0` cut, pending the template-adoption decision (First 100 Records Plan §6 item 2) and the object-record lifecycle adoption (§6 item 6). Nothing here is activated, released, or citable as current.

---

*Related: [First 100 Records Plan](../docs/FIRST_100_RECORDS_PLAN.md) · [Founding record template](../docs/FOUNDING_RECORD_TEMPLATE.md) · [Registry Architecture](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [Taxonomy Standard §4.7–4.8](../standards/Material_Handling_Taxonomy_Standard.md) · [registry/](../registry/) · [Engineering log](../docs/ENGINEERING_LOG.md)*
