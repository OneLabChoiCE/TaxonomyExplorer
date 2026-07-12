# registry/

**The SectionHub Registry — canonical per-record source artifacts.** One file per registry record, organized by record type, following [docs/FOUNDING_RECORD_TEMPLATE.md](../docs/FOUNDING_RECORD_TEMPLATE.md) (the [Registry Architecture](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) §4.1 public record format).

**Owner: Registry Operator only** (GOVERNANCE §8). Contributors *propose*; the registry *assigns*. CI SHOULD reject any PR from outside the release process that touches this tree.

## Stage: R0 — files-as-registry

Per [Registry Architecture §12](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), the registry is at **R0**: records live as source files under git, discipline enforced by process and machine gates, **no snapshot cut yet**. A record's `status` is its **assigned registry state at the current lineage point**, not a publication flag. The founding cohort seeded so far is entirely activation-bound or parked, so every seeded record's assigned state is `RESERVED`; per [§8](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) `ACTIVE` is reached only through the `RESERVED → ACTIVE` release transition, so nothing here is `ACTIVE`, released, or citable as current. (Records whose assigned state is `SUPERCLASS` or `REJECTED` — not yet seeded — are born in that state directly, not `RESERVED`.)

## Layout

| Directory | Record type | Cohort category | Populated? |
|---|---|---|---|
| [namespace/](namespace/) | Namespace records (`SEC:`, `FAM:`, `ASM:`, `ROL:`, `CFG:`, Domain) | A | **Yes** — the six founding records |
| [status/](status/) | Lifecycle-status reference records | — | No — deferred (see its README) |
| [dictionary/](dictionary/) | Dictionary code records (SEC/ROL/ASM/FAM/CFG rows) | B | No — deferred |
| [gsid/](gsid/) | Registered geometry identities (`GS-…`) with their `CG1-…` companions | D | No — deferred |
| [component/](component/) | Component identities (`CMP-…`) with `CF1-…` companions | E | No — deferred |
| [assembly/](assembly/) | Assembly-product identities (`ASP-…`) with `CF1-…` companions | F | No — deferred |

Categories are those of the [First 100 Records Plan](../docs/FIRST_100_RECORDS_PLAN.md) §1. **Configuration templates (Category C)** are *not* here — they live in `templates/` under TC decision (repository-structure §3; that directory is not yet created). Deferred directories carry a README that names their record type, source, and population gate; they are populated in the [creation sequence](../docs/FIRST_100_RECORDS_PLAN.md) §8 order.

## Relationship to the snapshot/export view

[repository-structure.md §3](../docs/repository-structure.md) introduced `registry/` as the home of **published assignments** — tabular exports (`gsid_registry.csv`, `dsg_index.csv`) and frozen `snapshots/SNAP-x.y.z/` bundles. Those are the *denormalized export and frozen-snapshot views*. The per-record-type directories here are the **canonical source records** those exports are generated from — the same registry, at record granularity. Both are Registry-Operator-only and version together at each snapshot. This directory structure refines repository-structure.md's `registry/` sketch to record level; it introduces no new registry architecture (the record format is Registry Architecture §4.1; the categories are First 100 Records Plan §1).

---

*Related: [Registry Architecture](../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [First 100 Records Plan](../docs/FIRST_100_RECORDS_PLAN.md) · [Founding record template](../docs/FOUNDING_RECORD_TEMPLATE.md) · [GOVERNANCE.md](../GOVERNANCE.md) · [Engineering log](../docs/ENGINEERING_LOG.md)*
