---
identifier: "SEC:OCS"
record_type: dictionary_code
name: Open C superclass
status: SUPERCLASS
born_snapshot: SNAP-1.0.0
governed_by: GSID Standard v2.0
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-11, dictionary batch 2); demoted to classifier-only rollup by founding Ruling R3 (standard Part 3.1; rule N6). Not activation-bound."
---

# Dictionary code record — `SEC:OCS` (Open C superclass)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`SEC:`](../namespace/SEC.md).*

## 1. Identity
- **Identifier:** `SEC:OCS` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** Open C superclass
- **Namespace:** [`SEC:`](../namespace/SEC.md) — Section shape.

## 2. Meaning
Restates, without alteration, the `OCS` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv):
- **Definition:** Any open C-family profile; classifier-only rollup.
- **Form class:** `FOLDED_UNIFORM_T`.
- **Maps from:** Legacy SMHE OCS records. *(Informative record of origin, not a registered crosswalk.)*
- **Successor:** none.

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component.

## 3. Lifecycle
- **Assigned status (all lineage points):** `SUPERCLASS` (N5) — a **classifier-only rollup** per rule N6 ([Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)). This code is **born `SUPERCLASS`** and holds it: it is not activation-bound, so [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)'s `RESERVED → ACTIVE` gate does not apply and it never passes through `RESERVED`. [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) records the same value (`status=SUPERCLASS`, `since_snapshot=SNAP-1.0.0`) — identical at R0 and at the `SNAP-1.0.0` lineage point; the cut seals it, it does not change it.
- **Not assignable.** As a rollup, `SEC:OCS` classifies but is never assigned to an object (N6); its members are the active open-C codes `SEC:OCL` / `SEC:OCU` / `SEC:OCR`.
- **Event history:**
  - *Established `SUPERCLASS`* — 2026-07-11, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: the OCS demotion to superclass — founding **Ruling R3** (GSID Standard §3.1) — a pre-registry normative-rule decision. `SEC:OCS` was never a registry-`ACTIVE` code, so no in-registry `ACTIVE → SUPERCLASS` transition occurs. Seed row in `dictionaries/sec_codes.csv`.
- **Next transition:** none. `SUPERCLASS` is terminal in ordinary operation; §5's `ACTIVE → SUPERCLASS` path governs *future* demotions of an active code, not this born-rollup.

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — GSID Standard §3.1 (Ruling R3, the OCS demotion) and the §3.2 shape-code table (status `S`); committed seed row in [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`SEC:`](../namespace/SEC.md).
- **Rolls up (classifier-only):** `SEC:OCL`, `SEC:OCU`, `SEC:OCR` (the active open-C codes).
- **Predecessor / successor:** none (CSV `successor` empty).
- **Crosswalks / aliases:** none at issuance.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `OCS` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) — the `status` column matches at every lineage point (this code is not activation-bound, so no lineage-point caveat applies). A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
