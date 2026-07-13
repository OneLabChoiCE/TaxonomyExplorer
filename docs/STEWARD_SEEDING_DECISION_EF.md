# Steward-Seeding Decision — Category E/F Founding Proof Records

**Decision ID:** `DECISION-EF-SEED-001`
**Status:** Recorded — 2026-07-12, under the bootstrap clause (GOVERNANCE §2; the founding maintainer acting as Technical Committee and Registry Operator, [Registry Architecture §9.3](SECTIONHUB_REGISTRY_ARCHITECTURE.md)).
**Mandate:** [First 100 Records Plan §6 item 5](FIRST_100_RECORDS_PLAN.md) and §8 step 3 ("Record the steward-seeding decision — authorizes E + F"); required by the §10 readiness checklist ("Every record cites its authorizing decision: … steward-seeding (E+F)").
**Type:** Narrow founding-cohort authorization. **This decision creates no architecture, no new record type, no new submission pathway, and no new governance rule.** It authorizes a bounded, one-time intake and nothing else.

---

## 1. Objective

Authorize the founding-cohort intake of **exactly the four planned Category E/F proof records** — three component records (`CMP-`) and one assembly-product record (`ASP-`) — so that the SectionHub worked-example stack can be proven end-to-end (GSID → component → assembly → ConfigurationID). No other intake is authorized.

## 2. Scope

**In scope (the four records, by subject — serials issued deterministically at authoring, not fixed here):**

| # | Record | Type | Role / type code | Bound template | Geometry reference |
|---|---|---|---|---|---|
| 1 | Rack upright component | `CMP-` | [`ROL:COL`](../registry/dictionary/ROL-COL.md) | [`ROL-COL.v1`](../templates/ROL-COL.v1.md) | `section_ref` → [`GS-000001`](../registry/gsid/GS-000001.md) (`SEC:OCL`) |
| 2 | Mesh panel component | `CMP-` | [`ROL:MSH`](../registry/dictionary/ROL-MSH.md) | [`ROL-MSH.v1`](../templates/ROL-MSH.v1.md) | `wire_stock_gsid` → [`GS-000004`](../registry/gsid/GS-000004.md) (`SEC:RBR`) |
| 3 | Deck-support channel component | `CMP-` | [`ROL:DKS`](../registry/dictionary/ROL-DKS.md) | [`ROL-DKS.v1`](../templates/ROL-DKS.v1.md) | `section_ref` → [`GS-000002`](../registry/gsid/GS-000002.md) (`SEC:OCU`) |
| 4 | Wire deck assembly | `ASP-` | [`ASM:WDK`](../registry/dictionary/ASM-WDK.md) / [`FAM:DKG`](../registry/dictionary/FAM-DKG.md) | [`ASM-WDK.v1`](../templates/ASM-WDK.v1.md) | bill of roles referencing records 1–3; no GSID (assemblies never receive one — P2) |

These are the exact records enumerated in [First 100 Records Plan §1](FIRST_100_RECORDS_PLAN.md) (Category E: upright · mesh panel · deck-support channel; Category F: the wire deck) and §4. Their content is the project's **own** published worked examples (Taxonomy Standard Parts 6–7), authored by the project — zero external permission, no third-party data ([First 100 Records Plan §5 E+F](FIRST_100_RECORDS_PLAN.md)).

**Out of scope (this decision authorizes none of the following):**
- General or public submissions of any kind.
- Third-party, manufacturer, or catalog data — this decision is **never a precedent for third-party intake** (First 100 Records Plan §6 item 5).
- Manufacturer part numbers, SKUs, brand names, or commercial-name identity (those are separate `MPN-`/`ALS-` records, not seeded here).
- Product certification or any certification reference.
- Load-capacity, structural-performance, safety, or regulatory-compliance values or claims, in any field (refused outright — Submission Model refusal rule 3; invariant 8).
- Unrestricted or open-ended `CMP-`/`ASP-` intake — the authorization is exhausted by the four records above.
- Opening Submission-Model stage S3 (or any stage). This decision does not open a stage (§5).

## 3. Rationale

The founding cohort's purpose is to make the constitution real and recomputable by a stranger; Categories E + F are the single worked product that proves the whole identity stack end-to-end ([First 100 Records Plan §3](FIRST_100_RECORDS_PLAN.md)). Every technical prerequisite for authoring them honestly now exists:

- **GSID records exist** — the eight Category-D geometries ([`registry/gsid/`](../registry/gsid/)), including the three the E/F records reference (`GS-000001`, `GS-000002`, `GS-000004`), each with a reproducible `CG1-` companion.
- **Configuration templates exist** — the four Category-C templates ([`templates/`](../templates/)) fixing each object's identity-bearing/informative field schema.
- **Configuration Canonicalization Rules v1 exist** — [the CF-hash procedure](../standards/canonicalization/configuration/v1/CONFIGURATION_CANONICALIZATION_RULES_V1.md) that derives a reproducible `CF1-` ConfigurationID from a bound field record.
- **The governed enum-token vocabulary exists** — [`dictionaries/enum_tokens.csv`](../dictionaries/enum_tokens.csv), the token superset the canonicalization rules validate closed-enum fields against.

The **only** remaining gap is authorization: a `CMP-`/`ASP-` product-instance registration is, in the Submission Model, an S3-gated intake (§5). Absent this decision, seeding the founding cohort's own worked examples would either wait on S3's institutional prerequisites (an SMHE legal entity, signed data licenses) — which do not apply to the project registering its own examples — or proceed without a recorded gate, which the readiness checklist forbids. This decision closes that gap narrowly and on the record.

## 4. Constraints on every seeded record

Each of the four records SHALL:

1. Be authored with assigned status **`RESERVED`** (Registry Architecture §5; nothing is activated by this decision).
2. **Cite this decision** by ID (`DECISION-EF-SEED-001`) in its `authorizing_decision` field.
3. Bind its **published Category-C template** (`ROL-COL.v1` / `ROL-MSH.v1` / `ROL-DKS.v1` / `ASM-WDK.v1`) as the identity-bearing field schema.
4. Derive its ConfigurationID under the **published Configuration Canonicalization Rules v1**, validating closed-enum values against the **published `dictionaries/enum_tokens.csv`**.
5. Include a **`CF1-` ConfigurationID recomputable from published files alone** (P9): the record carries the normalized field record and the recompute path, so any independent party reproduces the hash.
6. Reference geometry only by **registered GSID** and other objects only by **registered identifier** — and carry **no** manufacturer, SKU, part-number, brand, or commercial-name identity (P1, P3, D-8).
7. Carry **no** load-capacity, structural-performance, safety, or compliance value in any field, including free text (refusal rule 3; invariant 8) — and make **no** certification claim (§11 boundary).
8. **Activate nothing and cut no snapshot** — activation to `ACTIVE` happens only at the `SNAP-1.0.0` release, pending the Registry Architecture §5 object-record lifecycle adoption ([First 100 Records Plan §6 item 6](FIRST_100_RECORDS_PLAN.md)), exactly as the Category-D GSID records already sit.

A seeded record that cannot satisfy every constraint — in particular a ConfigurationID that cannot be reproduced from published files — SHALL NOT be authored. Refusal is acceptable; fabrication is not.

## 5. Relationship to the Submission Model

This is a **founding-cohort steward-seeding decision, not public S3 intake.** In the [Data Submission Model](SECTIONHUB_DATA_SUBMISSION_MODEL.md) §7, a component/assembly product-instance registration is intake for which "no interim route exists" — evidence references and product-instance registrations "open only at stages S4 and S3 respectively" (product-instance registration being the S3 case), whose S3 prerequisites are an SMHE legal entity and an adopted data license + attestation (§14). Those prerequisites exist to govern **third parties** registering **their** products under signed licenses.

None of that applies here: the steward is registering the **project's own** published worked examples, in the steward's own constitutional role under the bootstrap clause (Registry Architecture §9.3), with no external submitter, no license to sign, and no manufacturer claim. This decision therefore **reconciles** the founding cohort with the S3 gate by recording a bounded exception for exactly these four project-authored records — it does **not**:

- open S3 or any Submission-Model stage;
- create a general or interim submission pathway;
- weaken, amend, or reinterpret any Submission-Model rule, refusal, or gate;
- establish that self-registration bypasses S3 for anyone else, or for any record beyond the four named here.

Every Submission-Model refusal rule (§8) and the §11 certification boundary remain in full force and are, if anything, reaffirmed by §2's exclusions and §4's constraints. When real third-party component/assembly intake is wanted, it follows the normal S3 path with its full prerequisites — unchanged by this decision.

## 6. Sunset / limitation

This authorization applies **only** to the four `SNAP-1.0.0` founding-cohort records named in §2, as enumerated in the First 100 Records Plan. It is **exhausted** once those four records are authored (or sooner, at the steward's discretion). It does not carry to `SNAP-1.1.0` or any later snapshot, to additional products (the frame, cantilever, shelving, and work-platform products deferred in [First 100 Records Plan §7](FIRST_100_RECORDS_PLAN.md)), or to any record not on the §2 list. **Any future component or assembly intake — the project's own or anyone else's — requires the normal governance / Submission-Model path** (S3 and its prerequisites), not this decision.

## 7. Citation

Records and documents cite this decision as **`DECISION-EF-SEED-001`** (resolves to this file, `docs/STEWARD_SEEDING_DECISION_EF.md`). The four Category E/F records SHALL name it in their `authorizing_decision` field, alongside the bootstrap-clause authority and the ENGINEERING_LOG entry, as the Category-D GSID records name their own gate.

## 8. Follow-up

With this decision recorded, the three Category-C non-governance prerequisites (templates, Configuration Canonicalization Rules v1, `enum_tokens.csv`) and this governance prerequisite are all satisfied. **Category E/F may now be authored** — provided each record's `CF1-` ConfigurationID is reproducible from published files alone (P9), computed under Configuration Canonicalization Rules v1 against the bound template and the governed enum tokens. Production ConfigurationID computation and the deterministic `CMP-`/`ASP-` serial issuance are the Category E/F authoring task; they are **not** performed by this decision. The `SNAP-1.0.0` cut, which activates the cohort, remains gated on the full [readiness checklist](FIRST_100_RECORDS_PLAN.md) (§10), including the object-record lifecycle adoption (§6 item 6) and the finalized repository `LICENSE`.

---

*Related: [First 100 Records Plan §6 item 5](FIRST_100_RECORDS_PLAN.md) · [Data Submission Model §7, §8, §11, §14](SECTIONHUB_DATA_SUBMISSION_MODEL.md) · [Registry Architecture §5, §9.2–§9.3](SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [Founding record template](FOUNDING_RECORD_TEMPLATE.md) · [templates/](../templates/) · [Configuration Canonicalization Rules v1](../standards/canonicalization/configuration/v1/CONFIGURATION_CANONICALIZATION_RULES_V1.md) · [dictionaries/enum_tokens.csv](../dictionaries/enum_tokens.csv) · [registry/component/](../registry/component/) · [registry/assembly/](../registry/assembly/) · [GOVERNANCE.md](../GOVERNANCE.md) · [Engineering log](ENGINEERING_LOG.md)*
