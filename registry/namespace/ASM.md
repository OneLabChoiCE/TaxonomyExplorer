---
identifier: "ASM:"
record_type: namespace
name: Assembly type
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: Taxonomy Standard
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md 2026-07-11; activation gate per FIRST_100_RECORDS_PLAN §6 item 4, §9"
---

# Namespace record — `ASM:` (Assembly type)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category A of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md).*

## 1. Identity
- **Identifier:** `ASM:` (namespace prefix)
- **Record type:** Namespace
- **Name:** Assembly type

## 2. Meaning
- **Contains:** Assembly structural/functional types.
- **Code form:** 3-char alpha, always namespace-qualified (e.g. `ASM:WDK`).
- **Governed by:** Taxonomy Standard — [standards/Material_Handling_Taxonomy_Standard.md](../../standards/Material_Handling_Taxonomy_Standard.md).
- **Note:** Domain-scoped (MH).
- A namespace is registered by TC decision (Registry Architecture §2); this record has no derived component.

## 3. Lifecycle
- **Current status:** `RESERVED` — the assigned state pending the `SNAP-1.0.0` release; per [Registry Architecture §8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), `ACTIVE` is reached only through the `RESERVED → ACTIVE` release transition, so nothing is `ACTIVE` before the cut. Namespaces are registered-by-decision records (§2); this record cites no code-status set (N5) as its authority — whether N5 governs namespaces is unsettled in the architecture and is not decided here.
- **Event history:**
  - *Reserved* — 2026-07-11, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: Standard Part 3; seed row in `dictionaries/namespaces.csv`.
- **Next transition:** `RESERVED → ACTIVE` at the `SNAP-1.0.0` release ([First 100 Records Plan §9](../../docs/FIRST_100_RECORDS_PLAN.md)), pending the readiness checklist (§10).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — Taxonomy Standard Part 3; committed seed row in [dictionaries/namespaces.csv](../../dictionaries/namespaces.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6); this is a project-defined structural record, not third-party data.
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Members:** all `ASM:` assembly-type codes — realized as the rows of [dictionaries/asm_codes.csv](../../dictionaries/asm_codes.csv); their per-code founding records populate [registry/dictionary/](../dictionary/) (Category B).
- **Predecessor / successor:** none (first issuance).
- **Crosswalks / aliases:** none at issuance.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** this record restates, without alteration, the `ASM:` row of [dictionaries/namespaces.csv](../../dictionaries/namespaces.csv). A namespace is registered by decision, not derived — there is no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
