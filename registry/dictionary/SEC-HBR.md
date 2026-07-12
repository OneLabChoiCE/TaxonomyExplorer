---
identifier: "SEC:HBR"
record_type: dictionary_code
name: Hex bar
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: GSID Standard v2.0
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md (2026-07-12, dictionary batch 3); parked-RESERVED designation (status R) in the §3.2 shape-code table (standard Part 3.2). Not activation-bound at issuance."
---

# Dictionary code record — `SEC:HBR` (Hex bar)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md). Namespace: [`SEC:`](../namespace/SEC.md).*

## 1. Identity
- **Identifier:** `SEC:HBR` (namespace-qualified code)
- **Record type:** Dictionary code
- **Name:** Hex bar
- **Namespace:** [`SEC:`](../namespace/SEC.md) — Section shape.

## 2. Meaning
Restates, without alteration, the `HBR` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv):
- **Definition:** Reserved pending demand.
- **Form class:** `HOT_ROLLED_FILLETED`.
- **Maps from:** none recorded.
- **Successor:** none.

A dictionary code is registered by TC decision (Registry Architecture §2); it has no derived component.

## 3. Lifecycle
- **Assigned status (all lineage points):** `RESERVED` (N5), in the **parked** sense of [Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) — "parked pending demand (the SBR/HBR precedent)." This is **not** the "pending activation" reading of `RESERVED` that an activation-bound code carries: `SEC:HBR` is assigned `RESERVED` as its settled state and holds it. [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) records the same value (`status=RESERVED`), identical at the `SNAP-1.0.0` lineage point and after — the cut publishes it, it does not change it (First 100 Records Plan §9 — `SBR`/`HBR` are `RESERVED`-parked).
- **Event history:**
  - *Reserved* — 2026-07-12, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: the `HBR` parked-`RESERVED` designation (status `R`) in the §3.2 shape-code table (GSID Standard §3.2); seed row in `dictionaries/sec_codes.csv`.
- **Next transition:** none. `SEC:HBR` holds `RESERVED` (parked) at every snapshot, preserving the string against reuse; it would move to `ACTIVE` only on a future recorded decision if demand materializes ([Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) rightward transition).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — GSID Standard §3.2 (the `SEC:` shape-code table, status `R`); committed seed row in [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6).
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Namespace:** member of [`SEC:`](../namespace/SEC.md).
- **Superclass:** member of the [`SEC:BAR`](SEC-BAR.md) solid-bar superclass rollup (classifier-only, N6) — `SEC:BAR` rolls up `SEC:RBR` / `SEC:FBR` (active) plus the parked-`RESERVED` `SEC:SBR` / `SEC:HBR`. As a parked-`RESERVED` code, `SEC:HBR` is not an assignable member until activated.
- **Predecessor / successor:** none (first issuance; CSV `successor` empty).
- **Crosswalks / aliases:** none at issuance.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** exact match to the `HBR` row of [dictionaries/sec_codes.csv](../../dictionaries/sec_codes.csv) — the `status` column matches at every lineage point (this code is parked-`RESERVED`, not activation-bound, so no lineage-point caveat applies). A dictionary code is registered by decision, not derived — no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
