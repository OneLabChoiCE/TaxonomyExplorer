---
identifier: "SEC:SBR"
record_type: dictionary_code
name: Square bar
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: GSID Standard v2.0
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-11, dictionary batch 1); activation gate per FIRST_100_RECORDS_PLAN §6 item 4, §9"
---

# Dictionary code record — `SEC:SBR` (Square bar)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`SEC:`](../namespace/SEC.md).*

## 1. Identity
- **Identifier:** `SEC:SBR` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** Square bar
- **Namespace:** [`SEC:`](../namespace/SEC.md) — Section shape.

## 2. Meaning
Restates, without alteration, the `SBR` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv):
- **Definition:** Reserved pending demand.
- **Form class:** `HOT_ROLLED_FILLETED`.
- **Maps from:** none recorded.
- **Successor:** none.

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component.

## 3. Lifecycle
- **Assigned status (all lineage points):** `RESERVED` (N5), in the **parked** sense of [Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) — "parked pending demand (the SBR/HBR precedent)." This is **not** the "pending activation" reading of `RESERVED` that an activation-bound code carries: `SEC:SBR` is assigned `RESERVED` as its settled state and holds it. [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) records the same value (`status=RESERVED`), identical at the `SNAP-1.0.0` lineage point and after — the cut publishes it, it does not change it (First 100 Records Plan §9 — `SBR`/`HBR` are `RESERVED`-parked).
- **Event history:**
  - *Reserved* — 2026-07-11, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: GSID Standard Part 3 (code dictionary); seed row in `dictionaries/sec_codes.csv`.
- **Next transition:** none. `SEC:SBR` holds `RESERVED` (parked) at every snapshot, preserving the string against reuse; it would move to `ACTIVE` only on a future recorded decision if demand materializes ([Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) rightward transition).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — GSID Standard Part 3; committed seed row in [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`SEC:`](../namespace/SEC.md).
- **Superclass:** member of the [`SEC:BAR`](SEC-BAR.md) solid-bar superclass rollup (classifier-only, N6) — `SEC:BAR` rolls up `SEC:RBR` / `SEC:FBR` (active) plus the parked-`RESERVED` `SEC:SBR` / `SEC:HBR`. As a parked-`RESERVED` code, `SEC:SBR` is not an assignable member until activated.
- **Predecessor / successor:** none (first issuance; CSV `successor` empty).
- **Crosswalks / aliases:** none at issuance.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `SBR` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv). A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
