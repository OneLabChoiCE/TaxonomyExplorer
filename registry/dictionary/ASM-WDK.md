---
identifier: "ASM:WDK"
record_type: dictionary_code
name: Wire deck
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: Taxonomy Standard
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-11, dictionary batch 1); activation gate per FIRST_100_RECORDS_PLAN §6 item 4, §9"
---

# Dictionary code record — `ASM:WDK` (Wire deck)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`ASM:`](../namespace/ASM.md).*

## 1. Identity
- **Identifier:** `ASM:WDK` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** Wire deck
- **Namespace:** [`ASM:`](../namespace/ASM.md) — Assembly type.

## 2. Meaning
Restates, without alteration, the `WDK` row of [dictionaries/asm_codes.csv](../../dictionaries/asm_codes.csv):
- **Definition:** Mesh + support members; all edge/attachment variants via configuration.
- **Successor:** none.

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component. An assembly type is classified by family, component roles, and configuration identity — never by a GSID (GSID identifies 2D section geometry only; Registry Architecture invariant 2).

## 3. Lifecycle
- **Assigned status (current lineage point, R0):** `RESERVED` (N5) — the code's assigned registry state now, not a publication flag. Per [Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), a record exists from `RESERVED` onward; per [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), `ACTIVE` is reached only through the `RESERVED → ACTIVE` transition at a snapshot release — so before `SNAP-1.0.0` the assigned state is `RESERVED`.
- **Same `status` field at the `SNAP-1.0.0` lineage point:** `ACTIVE`, as governed by [dictionaries/asm_codes.csv](../../dictionaries/asm_codes.csv) (`status=ACTIVE`, `since_snapshot=SNAP-1.0.0`). This is the one `status` field read at the snapshot the CSV pins it to — a single trajectory (`RESERVED` now → `ACTIVE` at `SNAP-1.0.0`), not a separate "terminal status."
- **Event history:**
  - *Reserved* — 2026-07-11, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: Taxonomy Standard Part 3 (code dictionary); seed row in `dictionaries/asm_codes.csv`.
- **Next transition:** the `RESERVED → ACTIVE` release transition ([Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)) fires at the `SNAP-1.0.0` release ([First 100 Records Plan §9](../../docs/FIRST_100_RECORDS_PLAN.md)), pending the readiness checklist (§10).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — Taxonomy Standard Part 3 (and the wire-deck worked example, Standard Part 6); committed seed row in [dictionaries/asm_codes.csv](../../dictionaries/asm_codes.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`ASM:`](../namespace/ASM.md).
- **Referenced by:** the worked-example wire-deck assembly record ([registry/assembly/](../assembly/), Category F, deferred) is an `ASM:WDK` assembly bound via its `ASM-WDK.v1` configuration template (in `templates/`).
- **Rollup:** `ASM:DCK` (Deck superclass) is the classifier-only `SUPERCLASS` rollup over decking assembly types; `WDK` is one of its members (deferred `SUPERCLASS` record, see [../dictionary/](.) README).
- **Predecessor / successor:** none (first issuance; CSV `successor` empty).
- **Crosswalks / aliases:** none at issuance.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `WDK` row of [dictionaries/asm_codes.csv](../../dictionaries/asm_codes.csv) — reading the `status` column at its `since_snapshot` lineage point (§3), so every column matches. A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
