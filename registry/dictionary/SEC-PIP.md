---
identifier: "SEC:PIP"
record_type: dictionary_code
name: ""
status: REJECTED
born_snapshot: SNAP-1.0.0
governed_by: GSID Standard v2.0
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-11, dictionary batch 2); rejection recorded in REJECTIONS.md / standard Part 3.2 (§3.2 shape-code table). Burned string — never reused (N7, RA-2)."
---

# Dictionary code record — `SEC:PIP` (rejected)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`SEC:`](../namespace/SEC.md).*

## 1. Identity
- **Identifier:** `SEC:PIP` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** none — `PIP` is a burned string (the CSV `name` field is empty); it records a rejected candidate, not a named shape.
- **Namespace:** [`SEC:`](../namespace/SEC.md) — Section shape.

## 2. Meaning
Restates, without alteration, the `PIP` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv):
- **Name:** (empty).
- **Definition:** Rejected: pipe is a designation system; geometry is CHS.
- **Form class:** none.
- **Maps from:** ASTM pipe designations map via DSG records. *(Informative — designation crosswalks are separate `DSG-` records, deferred per First 100 Records Plan §7.)*
- **Successor / use instead:** `SEC:CHS` (CSV `successor=CHS`).

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component.

## 3. Lifecycle
- **Assigned status (all lineage points):** `REJECTED` (N5) — a **burned string**. Per [Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), a `REJECTED` row records a burned string so the precedent is citable and the three letters are never reused. This code is **born `REJECTED`** and is terminal: it is not activation-bound, so it does not pass through `RESERVED`; it never activates and the string is never reused (N7, RA-2). [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) records the same value (`status=REJECTED`, `since_snapshot=SNAP-1.0.0`) — identical at every lineage point; the `SNAP-1.0.0` cut records the rejection permanently.
- **Event history:**
  - *Recorded `REJECTED`* — 2026-07-11, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: the founding rejection ruling — "pipe is a designation system; geometry is CHS" ([REJECTIONS.md](../../REJECTIONS.md); standard Part 3.2). Seed row in `dictionaries/sec_codes.csv`.
- **Next transition:** none — terminal. A burned string is never reused (N7, RA-2) and never activates (§5).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — GSID Standard §3.2 (the `SEC:` shape-code table, status `X`) and [REJECTIONS.md](../../REJECTIONS.md) (standard Part 3.2); committed seed row in [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`SEC:`](../namespace/SEC.md) (as a rejected/burned string, not an assignable code).
- **Redirect:** pipe geometry uses `SEC:CHS` (CSV `successor=CHS`).
- **Crosswalks / aliases:** none registered at issuance. ASTM pipe designations will attach via `DSG-` crosswalk records (deferred, First 100 Records Plan §7) — pointing at `SEC:CHS` geometry, never at this burned string.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `PIP` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv), including the empty `name` and `form_class` and the `successor=CHS` field — the `status` column matches at every lineage point (this code is not activation-bound, so no lineage-point caveat applies). A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
