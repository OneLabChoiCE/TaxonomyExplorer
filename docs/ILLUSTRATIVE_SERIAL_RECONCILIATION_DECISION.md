# Illustrative-Serial Reconciliation Decision

**Decision ID:** `DECISION-SERIAL-RECON-001`
**Status:** Recorded — 2026-07-13, under the bootstrap clause (GOVERNANCE §2; the founding maintainer acting as Technical Committee / Registry Operator, [Registry Architecture §9.2–§9.3](SECTIONHUB_REGISTRY_ARCHITECTURE.md)).
**Closes:** the `SNAP-1.0.0` readiness gate "The illustrative-serial reconciliation decided (§4) so standards and registry agree post-cut" ([First 100 Records Plan §4, §10](FIRST_100_RECORDS_PLAN.md)).
**Type:** Narrow reconciliation decision. Renames no record; changes no standard in this task.

---

## 1. The situation

The published standards use **illustrative placeholder identifiers** in their worked examples — e.g. `GS-004217` / `CG1-7B3E91A0C24D` (upright section), `GS-002734` (deck channel), `GS-000891` (mesh wire stock), `CMP-000482` (upright), `CMP-000611`/`CMP-000612` (mesh/channel), `ASP-000173` (wire deck), and the `CF1-…` values beside them. The registry issues **real serials by deterministic procedure** in [First 100 Records Plan §4](FIRST_100_RECORDS_PLAN.md) enumeration order (first geometry registered = `GS-000001`, not `GS-004217`). The founding cohort therefore registered the **geometries and products**, not the standards' placeholder serials. [First 100 §4](FIRST_100_RECORDS_PLAN.md) flags this as "a required decision" to settle before the cut.

## 2. Decision

1. **Real registered serials govern.** The identifiers assigned by the registry are authoritative. The founding cohort registered `GS-000001…GS-000008`, `CMP-000001`/`CMP-000002`/`CMP-000003`, and `ASP-000001`, with their recomputed `CG1-…` / `CF1-…` companions. These are the identities of record.
2. **The standards' illustrative IDs are non-binding examples.** `GS-004217`, `CMP-000482`, `ASP-000173`, and their kin (and the illustrative `CG1-`/`CF1-` values shown beside them) are **teaching placeholders only** — they identify nothing in the registry and confer no identity. The standards already label them illustrative ([First 100 §4](FIRST_100_RECORDS_PLAN.md); Taxonomy Standard Part 6.3/7.2 "illustrative").
3. **No assigned registry identifier may reuse an illustrative placeholder unless it is the value the deterministic procedure actually issues.** Serials are opaque and procedure-assigned (RA-3 / AP-10); a placeholder serial becomes "real" only if independently issued by the registry, never by copying it from a worked example.
4. **`SNAP-1.0.0` uses the real serials already issued.** The founding records were authored against the real serials from the start (each record explicitly states it is "not the illustrative `GS-004217`/`CMP-000482`/`ASP-000173` placeholder"). No renumbering is required or permitted for the cut.
5. **Standards cleanup is post-cut editorial, never record renumbering.** After the cut, the worked examples SHOULD be updated to cite the real registered IDs — as a **permitted informative-text erratum** (the placeholders were never registry records, so this rewrites no identity), or alternatively via a published **crosswalk index** mapping each illustrative ID to its real serial. Either path is post-cut editorial ([First 100 §8 step 8](FIRST_100_RECORDS_PLAN.md)); **neither renames, re-serials, or edits any seeded `GS-`/`CMP-`/`ASP-` record** (append-only doctrine, N7 / P8 / RA-2).

## 3. Illustrative → real mapping (for the future crosswalk / erratum)

Non-binding, for the post-cut editorial step; the real serials govern.

| Object | Illustrative ID (standards) | Real registered serial |
|---|---|---|
| Rack upright section `SEC:OCL` | `GS-004217` / `CG1-7B3E91A0C24D` | [`GS-000001`](../registry/gsid/GS-000001.md) / `CG1-8EF31CC7EA1F` |
| Deck-support channel section `SEC:OCU` | `GS-002734` | [`GS-000002`](../registry/gsid/GS-000002.md) / `CG1-710171128D0C` |
| Mesh wire stock `SEC:RBR` | `GS-000891` | [`GS-000004`](../registry/gsid/GS-000004.md) / `CG1-8728D6FACFC3` |
| Rack upright component `ROL:COL` | `CMP-000482` / `CF1-5A0B44E19C77` | [`CMP-000001`](../registry/component/CMP-000001.md) / `CF1-671CAD0B9F50` |
| Mesh panel component `ROL:MSH` | `CMP-000611` / `CF1-2E90A17BD534` | [`CMP-000002`](../registry/component/CMP-000002.md) / `CF1-296722274C4A` |
| Deck-support channel component `ROL:DKS` | `CMP-000612` | [`CMP-000003`](../registry/component/CMP-000003.md) / `CF1-265CDD59847D` |
| Wire deck assembly `ASM:WDK` | `ASP-000173` / `CF1-8C41D02E97BA` | [`ASP-000001`](../registry/assembly/ASP-000001.md) / `CF1-17E80499A7EE` |

*(The illustrative `CG1-`/`CF1-` hashes were never recomputed against real geometry; the real companions are those in the registry records, each reproducible from its embedded byte string. Frame/cantilever/shelving/platform illustrative IDs — `GS-001582`/`006010`/`009410`/`009522`/`010233`, `ASP-000246`, etc. — are for deferred products (First 100 §7) and are not part of `SNAP-1.0.0`.)*

## 4. Scope / boundaries

This decision does **not**: cut `SNAP-1.0.0`; activate any record; rename, re-serial, or edit any `GS-`/`CMP-`/`ASP-` record or its `derived_id`; modify any standard, dictionary, or governed value in this task (the standards erratum/crosswalk is explicitly deferred to post-cut editorial); change LICENSE; or make any claim about the Registry Architecture §5 lifecycle adoption, which remains a separate open blocker.

---

*Related: [First 100 Records Plan §4, §8 step 8, §10](FIRST_100_RECORDS_PLAN.md) · [registry/gsid/README.md](../registry/gsid/README.md) · [Registry Architecture §3 (append-only), §9.2 (deterministic issuance), RA-3/AP-10](SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [Engineering log](ENGINEERING_LOG.md)*
