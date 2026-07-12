---
identifier: "FAM:MBS"
record_type: dictionary_code
name: Movable-base storage
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: Taxonomy Standard
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-12, dictionary batch 7); active designation (status A) in the Product family codes table (Taxonomy Standard §3.5); activation gate per FIRST_100_RECORDS_PLAN §6 item 4, §9"
---

# Dictionary code record — `FAM:MBS` (Movable-base storage)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`FAM:`](../namespace/FAM.md).*

## 1. Identity
- **Identifier:** `FAM:MBS` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** Movable-base storage
- **Namespace:** [`FAM:`](../namespace/FAM.md) — Product family.

## 2. Meaning
Restates, without alteration, the `MBS` row of [dictionaries/fam_codes.csv](../../dictionaries/fam_codes.csv) (the family CSV carries `domain` and `industry_anchor` in place of a free-text definition):
- **Domain:** `MH` (Material Handling).
- **Industry anchor:** SMA scope.
- **Successor:** none.

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component. The industry anchor names the external standard *scope* this family aligns to; it is not a crosswalk record and confers no external authority.

## 3. Lifecycle
- **Assigned status (current lineage point, R0):** `RESERVED` (N5) — the code's assigned registry state now, not a publication flag. Per [Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), a record exists from `RESERVED` onward; per [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), `ACTIVE` is reached only through the `RESERVED → ACTIVE` transition at a snapshot release — so before `SNAP-1.0.0` the assigned state is `RESERVED`.
- **Same `status` field at the `SNAP-1.0.0` lineage point:** `ACTIVE`, as governed by [dictionaries/fam_codes.csv](../../dictionaries/fam_codes.csv) (`status=ACTIVE`, `since_snapshot=SNAP-1.0.0`). This is the one `status` field read at the snapshot the CSV pins it to — a single trajectory (`RESERVED` now → `ACTIVE` at `SNAP-1.0.0`), not a separate "terminal status."
- **Event history:**
  - *Reserved* — 2026-07-12, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: the `MBS` active designation (status `A`) in the Product family codes table (Taxonomy Standard §3.5); seed row in `dictionaries/fam_codes.csv`.
- **Next transition:** the `RESERVED → ACTIVE` release transition ([Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)) fires at the `SNAP-1.0.0` release ([First 100 Records Plan §9](../../docs/FIRST_100_RECORDS_PLAN.md)), pending the readiness checklist (§10).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — Taxonomy Standard §3.5 (Product family codes, status `A`), anchored to SMA scope; committed seed row in [dictionaries/fam_codes.csv](../../dictionaries/fam_codes.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`FAM:`](../namespace/FAM.md); domain-scoped to `MH`.
- **Predecessor / successor:** none (first issuance; CSV `successor` empty).
- **Crosswalks / aliases:** none at issuance. (The industry anchor is provenance text, not a registered `DSG-`/`XMAP` crosswalk.)

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `MBS` row of [dictionaries/fam_codes.csv](../../dictionaries/fam_codes.csv) — reading the `status` column at its `since_snapshot` lineage point (§3), so every column matches. A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
