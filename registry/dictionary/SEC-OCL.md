---
identifier: "SEC:OCL"
record_type: dictionary_code
name: Open C lipped
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: GSID Standard v2.0
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-11, dictionary batch 1); activation gate per FIRST_100_RECORDS_PLAN §6 item 4, §9"
---

# Dictionary code record — `SEC:OCL` (Open C lipped)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`SEC:`](../namespace/SEC.md).*

## 1. Identity
- **Identifier:** `SEC:OCL` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** Open C lipped
- **Namespace:** [`SEC:`](../namespace/SEC.md) — Section shape.

## 2. Meaning
Restates, without alteration, the `OCL` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv):
- **Definition:** Folded C with one stiffening lip fold per flange.
- **Form class:** `FOLDED_UNIFORM_T`.
- **Maps from:** AISI lipped C; rack upright base topology. *(Informative record of the shape's origin, not a registered crosswalk — designation crosswalks are separate `DSG-` records, deferred per First 100 Records Plan §7.)*
- **Successor:** none.

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component.

## 3. Lifecycle
- **Assigned status (current lineage point, R0):** `RESERVED` (N5) — the code's assigned registry state now, not a publication flag. Per [Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), a record exists from `RESERVED` onward; per [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), `ACTIVE` is reached only through the `RESERVED → ACTIVE` transition at a snapshot release — so before `SNAP-1.0.0` the assigned state is `RESERVED`.
- **Same `status` field at the `SNAP-1.0.0` lineage point:** `ACTIVE`, as governed by [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) (`status=ACTIVE`, `since_snapshot=SNAP-1.0.0`). This is the one `status` field read at the snapshot the CSV pins it to — a single trajectory (`RESERVED` now → `ACTIVE` at `SNAP-1.0.0`), not a separate "terminal status."
- **Event history:**
  - *Reserved* — 2026-07-11, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: GSID Standard Part 3 (code dictionary) and founding rulings R1–R6 (the OCS/OCL family ruling); seed row in `dictionaries/sec_codes.csv`.
- **Next transition:** the `RESERVED → ACTIVE` release transition ([Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)) fires at the `SNAP-1.0.0` release ([First 100 Records Plan §9](../../docs/FIRST_100_RECORDS_PLAN.md)), pending the readiness checklist (§10).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — GSID Standard Part 3 and founding rulings R1–R6 ([REJECTIONS.md](../../REJECTIONS.md), CHANGELOG `[SNAP-1.0.0]`); committed seed row in [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`SEC:`](../namespace/SEC.md).
- **Predecessor / successor:** none (first issuance; CSV `successor` empty).
- **Crosswalks / aliases:** none at issuance. (The `maps_from` note in §2 records shape origin, not a registered `DSG-` crosswalk.)

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `OCL` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) — reading the `status` column at its `since_snapshot` lineage point (§3), so every column matches. A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
