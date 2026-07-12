---
identifier: "ASM:DCK"
record_type: dictionary_code
name: Deck superclass
status: SUPERCLASS
born_snapshot: SNAP-1.0.0
governed_by: Taxonomy Standard
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-11, dictionary batch 2); classifier-only rollup — status S in the Assembly type codes table (Taxonomy Standard §3.4; rule N6). Not activation-bound."
---

# Dictionary code record — `ASM:DCK` (Deck superclass)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`ASM:`](../namespace/ASM.md).*

## 1. Identity
- **Identifier:** `ASM:DCK` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** Deck superclass
- **Namespace:** [`ASM:`](../namespace/ASM.md) — Assembly type.

## 2. Meaning
Restates, without alteration, the `DCK` row of [dictionaries/asm_codes.csv](../../dictionaries/asm_codes.csv) (the `ASM:` dictionary has `definition`/`successor` columns — no `form_class`/`maps_from`):
- **Definition:** Rollup for all decking assemblies; classifier-only.
- **Successor:** none.

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component.

## 3. Lifecycle
- **Assigned status (all lineage points):** `SUPERCLASS` (N5) — a **classifier-only rollup** per rule N6 ([Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)). This code is **born `SUPERCLASS`** and holds it: it is not activation-bound, so [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)'s `RESERVED → ACTIVE` gate does not apply and it never passes through `RESERVED`. [dictionaries/asm_codes.csv](../../dictionaries/asm_codes.csv) records the same value (`status=SUPERCLASS`, `since_snapshot=SNAP-1.0.0`) — identical at R0 and at the `SNAP-1.0.0` lineage point; the cut seals it, it does not change it.
- **Not assignable.** As a rollup, `ASM:DCK` classifies but is never assigned to an object (N6); its members are the active decking assemblies `ASM:WDK` / `ASM:SDK` / `ASM:PDK` / `ASM:BGD`.
- **Event history:**
  - *Established `SUPERCLASS`* — 2026-07-11, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: the `DCK` deck-superclass designation (status `S`) in the Assembly type codes table (Taxonomy Standard §3.4). `ASM:DCK` was never a registry-`ACTIVE` code, so no in-registry `ACTIVE → SUPERCLASS` transition occurs. Seed row in `dictionaries/asm_codes.csv`.
- **Next transition:** none. `SUPERCLASS` is terminal in ordinary operation; §5's `ACTIVE → SUPERCLASS` path governs *future* demotions of an active code, not this born-rollup.

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — Taxonomy Standard §3.4 (Assembly type codes, status `S`); committed seed row in [dictionaries/asm_codes.csv](../../dictionaries/asm_codes.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`ASM:`](../namespace/ASM.md).
- **Rolls up (classifier-only):** `ASM:WDK`, `ASM:SDK`, `ASM:PDK`, `ASM:BGD` (the active decking assemblies).
- **Predecessor / successor:** none (CSV `successor` empty).
- **Crosswalks / aliases:** none at issuance.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `DCK` row of [dictionaries/asm_codes.csv](../../dictionaries/asm_codes.csv) — the `status` column matches at every lineage point (this code is not activation-bound, so no lineage-point caveat applies). A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
