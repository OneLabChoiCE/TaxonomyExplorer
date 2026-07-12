---
identifier: "CFG:HOL"
record_type: dictionary_code
name: Hole / punch pattern
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: Taxonomy Standard
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-12, dictionary batch 8); listed in the Configuration group codes table (Taxonomy Standard §3.6), status ACTIVE per the seed row in dictionaries/cfg_groups.csv; activation gate per FIRST_100_RECORDS_PLAN §6 item 4, §9"
---

# Dictionary code record — `CFG:HOL` (Hole / punch pattern)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`CFG:`](../namespace/CFG.md).*

## 1. Identity
- **Identifier:** `CFG:HOL` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** Hole / punch pattern
- **Namespace:** [`CFG:`](../namespace/CFG.md) — Configuration group.

## 2. Meaning
Restates, without alteration, the `HOL` row of [dictionaries/cfg_groups.csv](../../dictionaries/cfg_groups.csv) (the configuration-group CSV carries `example_fields`; it has no free-text definition or successor column):
- **Example fields:** pattern id; pitch; gauge; hole geometry; start offset.

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component. `CFG:HOL` is a **schema organizer, never an object identifier** — it groups identity-bearing/informative fields that configuration templates draw on; it never names a component, assembly, or geometry. The example fields are illustrative of the group's scope, not a fixed template schema (identity-bearing field sets are fixed by the versioned templates in `templates/`, not here).

## 3. Lifecycle
- **Assigned status (current lineage point, R0):** `RESERVED` (N5) — the code's assigned registry state now, not a publication flag. Per [Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), a record exists from `RESERVED` onward; per [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), `ACTIVE` is reached only through the `RESERVED → ACTIVE` transition at a snapshot release — so before `SNAP-1.0.0` the assigned state is `RESERVED`.
- **Same `status` field at the `SNAP-1.0.0` lineage point:** `ACTIVE`, as governed by [dictionaries/cfg_groups.csv](../../dictionaries/cfg_groups.csv) (`status=ACTIVE`, `since_snapshot=SNAP-1.0.0`). This is the one `status` field read at the snapshot the CSV pins it to — a single trajectory (`RESERVED` now → `ACTIVE` at `SNAP-1.0.0`), not a separate "terminal status."
- **Event history:**
  - *Reserved* — 2026-07-12, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: the `HOL` entry in the Configuration group codes table (Taxonomy Standard §3.6); status `ACTIVE` from the seed row in `dictionaries/cfg_groups.csv`.
- **Next transition:** the `RESERVED → ACTIVE` release transition ([Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)) fires at the `SNAP-1.0.0` release ([First 100 Records Plan §9](../../docs/FIRST_100_RECORDS_PLAN.md)), pending the readiness checklist (§10).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — Taxonomy Standard §3.6 (Configuration group codes); committed seed row in [dictionaries/cfg_groups.csv](../../dictionaries/cfg_groups.csv) (status `ACTIVE`).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`CFG:`](../namespace/CFG.md).
- **Consumed by:** configuration templates (in `templates/`) that draw `HOL` fields into their identity-bearing/informative field sets.
- **Predecessor / successor:** none (first issuance; the `cfg_groups.csv` schema has no `successor` column — configuration groups are superseded by version, not by row succession).
- **Crosswalks / aliases:** none at issuance.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `HOL` row of [dictionaries/cfg_groups.csv](../../dictionaries/cfg_groups.csv) — reading the `status` column at its `since_snapshot` lineage point (§3), so every column matches. A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
