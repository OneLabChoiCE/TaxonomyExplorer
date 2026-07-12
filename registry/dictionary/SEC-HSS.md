---
identifier: "SEC:HSS"
record_type: dictionary_code
name: Hollow structural superclass
status: SUPERCLASS
born_snapshot: SNAP-1.0.0
governed_by: GSID Standard v2.0
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-11, dictionary batch 2); classifier-only rollup — status S in the §3.2 shape-code table (standard Part 3.2; rule N6). Not activation-bound."
---

# Dictionary code record — `SEC:HSS` (Hollow structural superclass)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`SEC:`](../namespace/SEC.md).*

## 1. Identity
- **Identifier:** `SEC:HSS` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** Hollow structural superclass
- **Namespace:** [`SEC:`](../namespace/SEC.md) — Section shape.

## 2. Meaning
Restates, without alteration, the `HSS` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv):
- **Definition:** Any closed single-cell hollow; classifier-only rollup.
- **Form class:** `WELDED`.
- **Maps from:** AISC HSS usage. *(Informative record of origin, not a registered crosswalk.)*
- **Successor:** none.

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component.

## 3. Lifecycle
- **Assigned status (all lineage points):** `SUPERCLASS` (N5) — a **classifier-only rollup** per rule N6 ([Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)). This code is **born `SUPERCLASS`** and holds it: it is not activation-bound, so [§8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)'s `RESERVED → ACTIVE` gate does not apply and it never passes through `RESERVED`. [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) records the same value (`status=SUPERCLASS`, `since_snapshot=SNAP-1.0.0`) — identical at R0 and at the `SNAP-1.0.0` lineage point; the cut seals it, it does not change it.
- **Not assignable.** As a rollup, `SEC:HSS` classifies but is never assigned to an object (N6); its members are the active hollow codes `SEC:RHS` / `SEC:SHS` / `SEC:CHS`.
- **Event history:**
  - *Established `SUPERCLASS`* — 2026-07-11, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: the `HSS` superclass designation (status `S`) in the §3.2 shape-code table (GSID Standard §3.2). `SEC:HSS` was never a registry-`ACTIVE` code, so no in-registry `ACTIVE → SUPERCLASS` transition occurs. Seed row in `dictionaries/sec_codes.csv`.
- **Next transition:** none. `SUPERCLASS` is terminal in ordinary operation; §5's `ACTIVE → SUPERCLASS` path governs *future* demotions of an active code, not this born-rollup.

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — GSID Standard §3.2 (the `SEC:` shape-code table, status `S`); committed seed row in [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`SEC:`](../namespace/SEC.md).
- **Rolls up (classifier-only):** `SEC:RHS`, `SEC:SHS`, `SEC:CHS` (the active hollow codes).
- **Predecessor / successor:** none (CSV `successor` empty).
- **Crosswalks / aliases:** none at issuance.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `HSS` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) — the `status` column matches at every lineage point (this code is not activation-bound, so no lineage-point caveat applies). A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
