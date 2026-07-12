---
identifier: "SEC:CFS"
record_type: dictionary_code
name: ""
status: REJECTED
born_snapshot: SNAP-1.0.0
governed_by: GSID Standard v2.0
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-11, dictionary batch 2); rejection ruling R6 recorded in REJECTIONS.md / standard Part 3.1. Burned string — never reused (N7, RA-2)."
---

# Dictionary code record — `SEC:CFS` (rejected)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`SEC:`](../namespace/SEC.md).*

## 1. Identity
- **Identifier:** `SEC:CFS` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** none — `CFS` is a burned string (the CSV `name` field is empty); it records a rejected candidate, not a named shape.
- **Namespace:** [`SEC:`](../namespace/SEC.md) — Section shape.

## 2. Meaning
Restates, without alteration, the `CFS` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv):
- **Name:** (empty).
- **Definition:** Rejected: material/manufacturing category not a shape (Ruling R6).
- **Form class:** none.
- **Maps from:** none.
- **Successor:** none.

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component.

## 3. Lifecycle
- **Assigned status (all lineage points):** `REJECTED` (N5) — a **burned string**. Per [Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), a `REJECTED` row records a burned string so the precedent is citable and the three letters are never reused. This code is **born `REJECTED`** and is terminal: it is not activation-bound, so it does not pass through `RESERVED`; it never activates and the string is never reused (N7, RA-2). [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) records the same value (`status=REJECTED`, `since_snapshot=SNAP-1.0.0`) — identical at every lineage point; the `SNAP-1.0.0` cut records the rejection permanently.
- **Event history:**
  - *Recorded `REJECTED`* — 2026-07-11, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: founding ruling R6 — "material/manufacturing category not a shape" ([REJECTIONS.md](../../REJECTIONS.md); standard Part 3.1). Seed row in `dictionaries/sec_codes.csv`.
- **Next transition:** none — terminal. A burned string is never reused (N7, RA-2) and never activates (§5).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — GSID Standard Part 3 and founding rulings R1–R6 (standard Part 3.1, [REJECTIONS.md](../../REJECTIONS.md), CHANGELOG `[SNAP-1.0.0]`); committed seed row in [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`SEC:`](../namespace/SEC.md) (as a rejected/burned string, not an assignable code).
- **Predecessor / successor:** none (CSV `successor` empty).
- **Crosswalks / aliases:** none.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `CFS` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv), including the empty `name`, `form_class`, `maps_from`, and `successor` fields — the `status` column matches at every lineage point (this code is not activation-bound, so no lineage-point caveat applies). A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
