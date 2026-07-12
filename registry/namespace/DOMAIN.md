---
identifier: "(bare — unprefixed domain codes)"
record_type: namespace
name: Domain
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: Taxonomy Standard
authorizing_decision: "Founding seed under the bootstrap clause (GOVERNANCE §2); recorded in docs/ENGINEERING_LOG.md 2026-07-11; activation gate per FIRST_100_RECORDS_PLAN §6 item 4, §9"
---

# Namespace record — Domain (bare, unprefixed)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category A of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md).*

## 1. Identity
- **Identifier:** the bare, unprefixed domain namespace — domain codes carry **no prefix** (e.g. `MH`), so this namespace has no prefix string of its own. It is cited by name: *Domain*.
- **Record type:** Namespace
- **Name:** Domain

## 2. Meaning
- **Contains:** Top-level industry domains.
- **Code form:** 2-char alpha, **bare** (unprefixed) — e.g. `MH`.
- **Governed by:** Taxonomy Standard — [standards/Material_Handling_Taxonomy_Standard.md](../../standards/Material_Handling_Taxonomy_Standard.md).
- **Note:** Only `MH` (Material Handling) is defined in v1.0. This namespace is what scopes the domain-scoped namespaces (`FAM:`, `ASM:`) to their industry.
- A namespace is registered by TC decision (Registry Architecture §2); this record has no derived component.

## 3. Lifecycle
- **Current status:** `RESERVED` (N5) — allocated, pending activation at the `SNAP-1.0.0` cut. No snapshot has been cut, so nothing is `ACTIVE` yet ([Registry Architecture §8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)).
- **Event history:**
  - *Reserved* — 2026-07-11, founding seed under the bootstrap clause (GOVERNANCE §2); authorizing decision recorded in [ENGINEERING_LOG](../../docs/ENGINEERING_LOG.md). Basis: Standard Part 3; seed row in `dictionaries/namespaces.csv`.
- **Next transition:** `RESERVED → ACTIVE` at the `SNAP-1.0.0` release ([First 100 Records Plan §9](../../docs/FIRST_100_RECORDS_PLAN.md)), pending the readiness checklist (§10).

## 4. Provenance
- **Decided by:** the founding maintainer acting as Technical Committee and Registry Operator under the bootstrap clause (GOVERNANCE §2; Registry Architecture §9.3).
- **Source:** project-authored — Taxonomy Standard Part 3; committed seed row in [dictionaries/namespaces.csv](../../dictionaries/namespaces.csv).
- **Provenance grade:** none — the founding cohort does not apply the `[Proposed]` provenance-grade scheme (First 100 Records Plan §6); this is a project-defined structural record, not third-party data.
- **License:** repository `LICENSE` not yet finalized; no license granted ([README](../../README.md) status table).

## 5. Relationships
- **Members:** the domain codes — only `MH` (Material Handling) in v1.0, defined in the Taxonomy Standard (there is no separate domain-codes CSV; the single domain is fixed by the standard). Additional domains would each be a new domain code under a recorded decision.
- **Scopes:** the domain-scoped namespaces `FAM:` and `ASM:` (both noted "Domain-scoped (MH)" in `dictionaries/namespaces.csv`).
- **Predecessor / successor:** none (first issuance).
- **Crosswalks / aliases:** none at issuance.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut; Registry Architecture §12).
- **Verify:** this record restates, without alteration, the Domain row (empty `prefix`) of [dictionaries/namespaces.csv](../../dictionaries/namespaces.csv). A namespace is registered by decision, not derived — there is no hash to recompute; auditability is by exact match to the governed CSV row and the citing decision.

## 7. Disclaimer
Identity and traceability only. This record makes no performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
