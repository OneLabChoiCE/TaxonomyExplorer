# SectionHub Bootstrap Plan

**From "interesting architecture" to "useful public registry" — without waiting for industry adoption.**

**Status:** execution plan, 2026-07-11. This is the practical companion to the constitutional stack ([Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md), [Data Submission Model](SECTIONHUB_DATA_SUBMISSION_MODEL.md), [GOVERNANCE.md](../GOVERNANCE.md), the [standards](../standards/GSID_2D_Standard.md)). It changes no rules and adopts nothing — it sequences work a single motivated founder can do, under the gates the constitution already sets. Where a number is a target, it is a planning target, not a promise.

**The bootstrap thesis:** a registry becomes real the day its identifiers resolve to something people actually look up. Nobody's adoption is required for that — the founder can seed genuinely useful content (the project's own worked examples made live, the used-rack identification wedge, a cleared designation subset) and let usefulness recruit the first outsiders. Every record follows the constitution from day one, so the audit trail never has a "before we were serious" era.

---

## 1. The first ~110 records

**Purpose: make the constitution demonstrably real.** Composition (≈110 records; items 1–3 land `RESERVED` by recorded decision and **activate together when `SNAP-1.0.0` is cut last**, per the nothing-activates-between-snapshots rule):

| # | Records | Count | Why first |
|---|---|---|---|
| 0 | **`SNAP-1.0.0` itself** — the first cut snapshot, content-hashed, archived; **cut after items 1–3 are ratified**, so it freezes and activates them | 1 | Everything else is cited *through* it; the lineage starts here |
| 1 | **Seed dictionary rows ratified** — the existing `dictionaries/*.csv` (SEC 29 incl. SUPERCLASS/RESERVED/REJECTED rows, ROL 17, ASM 16, FAM 12, CFG 12, plus 6 namespace rows) ratified by recorded bootstrap decision, activated at the snapshot | ≈92 | The dictionaries *are* registry records (Registry Architecture §2 note 3); ratifying them is the first mass exercise of TC power under the bootstrap clause, and it turns three years of drafting into force |
| 2 | **Flagship GSIDs: the standard's own worked-example geometry** — the OCL upright (76.2×41.3×12.7×1.9), OCU deck channel (32×25×1.5), RBR 4.0 wire stock, OCU brace (40×40×1.5), PLT base plate, ANG shelving post, FBR sway strap, SHS platform column, CHS brace, and their kin from Parts 6–10 | ≈10 | Converts every worked example in the published standards from *illustrative* to *resolvable* — the single highest-credibility move available: the documentation becomes a live demo of the registry |
| 3 | **Worked-example product records** — the wire deck `ASP` + its `CMP`s (mesh panel, support channel) and the upright `CMP`, with real computed ConfigurationIDs | ≈5 | Proves the whole layer stack end-to-end: GSID → component → assembly → CF hash, all recomputable by a stranger |

Three gates before any of this, and they — not data entry — are the true critical path of the first quarter:

1. **Canonicalization rules v1 and per-shape parameter schemas** extracted from the draft and published (repository-structure migration step 5) — no CGID can be honestly computed without them.
2. **Configuration templates and rule tables seeded** (`ASM-WDK.v1`, `ROL-COL.v1`, `ROL-DKS.v1`, the rule/warning tables, and `enum_tokens.csv` — migration steps 3 and 6) — no ConfigurationID can exist without a registered template version, and `SNAP-1.0.0` must freeze *every* data directory (migration step 10).
3. **A recorded bootstrap decision authorizing steward-seeding** of the standard's own worked-example objects as `CMP-`/`ASP-` records — an explicit, narrow reconciliation with the submission model's rule that product-instance intake otherwise opens only at stage S3. Filed through the proposal workflow like anything else, so the exception is on the record, bounded to the standards' published examples, and never a precedent for third-party data.

Deliberately **not** in the first ~110: anything requiring a license review (AISC designations — §5), anything measured from manufacturers' current products (S3 territory), any evidence references (§6), and the three demo aliases (which must be *resolved*, not registered — §7).

## 2. The first 500 records

**Purpose: make the registry useful to strangers.** Adds ≈400 records in three deliberate tranches:

| Tranche | Records | Count | Serves |
|---|---|---|---|
| A | **Legacy/orphaned upright and channel profiles**, founder-measured or drawn from SMHE's reference collection: canonical parameters with the stated-basis statements the submission model §5 already requires (method or document cited; grade labels such as `OBSERVED`/`DOCUMENT_REFERENCED` applied when the [Proposed] provenance scheme is adopted — scheduled in Q2, §12); manufacturer field honestly *unknown* unless documented | ≈80–120 GSIDs | The used-rack identification wedge (strategy §5.2) — the one constituency with acute pain, no vendor loyalty, and no need for anyone's permission |
| B | **Cleared designation subset**: the material-handling-relevant slice of one structural library (target: AISC shapes actually used in MH — W/S/C/MC/L/HSS subsets), imported per the Import track *after* the per-source license review (F-5), restated as canonical parameters, DSG records mapped to GSIDs | ≈150–250 DSG + the GSIDs they resolve to | Spec-writers and engineers get real lookup value ("what is geometrically identical to C4X5.4?"); cross-library equivalence starts working |
| C | **Deck-support and decking-adjacent profiles** + the corresponding configuration templates exercised with a handful more registered product examples | ≈30–50 | Deepens the wire-deck story where SMHE's own expertise is strongest |

Path to the strategy's Year-1 "order of 10³ GSIDs": completing tranche B across the full cleared library plus one non-US library. This plan schedules that for Q4-into-early-year-2 (§12); **to the extent it lands in year 2, this plan explicitly re-baselines that strategy milestone** — recorded as a deviation, not slipped silently. Volume comes from imports; credibility comes from tranches A and C.

## 3. Data sources to avoid initially

- **Scraped or bulk-forwarded manufacturer catalogs** — prohibited outright (DS-3), and strategically poisonous: the first manufacturer contact should be an invitation, not an apology.
- **License-unreviewed standards content** — no EN/GB-T/JIS/AS-NZS tables, no full AISC database, until each source passes the F-5 review with the license recorded. One cleared source beats five gray ones.
- **ECLASS/ETIM/UNSPSC/OmniClass/MasterFormat content** — crosswalks wait for XMAP adoption; their licensed content never enters at all (X-4).
- **AI-extracted geometry** from photos, PDFs, or catalogs presented as measured — guess-laundering (DS-8). Inference may *suggest* where to look; only stated-method measurement or cited documents become records.
- **Competitor cross-reference charts** ("our X replaces their Y") — provenance-free marketing artifacts; equivalence must come out of geometry, or not at all.
- **Anything needing a signed data license** — there is no legal entity to sign with yet (strategy §2.5); S3 waits.

## 4. What should be manually curated (and stay that way for the bootstrap year)

Everything that touches meaning — the founder's hours go here *because* they don't scale:

- **Canonical parameter entry and shape-schema fit** for every geometry record, with the basis stated (drawing cited, measurement method, table reference).
- **Equivalence review at issuance** — every GSID issuance-or-match where the candidate lands near an existing class gets human eyes before the procedure's answer stands.
- **Designation normalization** (the `DSG-<SYSTEM>-<NORMALIZED>` strings) — mechanical-looking, meaning-bearing.
- **All dictionary and template decisions** — TC-power acts under the bootstrap clause, each with a recorded decision file.
- **Alias attributions** — few in number during bootstrap, each with an unambiguous pointer and citation.
- **The rejection log** — every "no" written as reusable precedent is compounding anti-explosion capital (§8).

Manual curation is not a temporary embarrassment; at this stage it *is* the quality bar. The procedures written down while doing it become the checklists that later delegation requires.

## 5. What should be imported

Exactly one category during bootstrap: **license-cleared designation tables**, one source at a time, through the Import track (recorded decision + per-row validation), geometry restated as SectionHub canonical parameters, source license recorded on the designation-system record. First candidate: the AISC shapes database's MH-relevant subset (pending its terms-of-use review); second: one non-US library (EN or AS/NZS) chosen partly *by* which clears licensing review most cleanly. Nothing else is import-shaped yet — no catalogs, no crosswalk targets, no evidence.

## 6. The most valuable existing SMHE assets

1. **The decking family-code work and configuration expertise** — it seeds the `ASM:WDK` template, the worked product records, and (if SMHE holds historical wire-deck test reports) the ideal **S0 rehearsal fixtures** for the evidence-reference path: dry-run `TST-` pointer handling on real reports *without issuing any records*, and write what breaks into the evidence checklist. Actual evidence-reference registration waits for stage S4 like everyone else's — the submission model gives it no interim route, and the founder being the custodian earns rehearsal realism, not a gate-skip.
2. **The profile reference collection and measurement capability** — tranche A of the first 500 exists only because SMHE can measure real legacy sections with stated methods.
3. **The worked examples in the standards** — already written, already reviewed; registering them (first-100 tranche 2–3) converts sunk documentation cost into live registry value.
4. **The identifier-standard lineage and canonicalization thinking** — the Part 4.3 material that becomes `canonicalization/v1/`; no asset matters more to the critical path.
5. **Industry relationships** — deliberately *not* spent during bootstrap; they are the S3/S4 recruitment capital, and they are worth more presented with a working registry than with a plan.

## 7. What intentionally never enters (bootstrap or ever, per the constitution)

- **Performance data of any kind** — capacities, ratings, safety or compliance claims (refusal rule 3; the Year-10 metric is that this count is still zero).
- **The three demo aliases** (`ZED`, `CHL`, terminal-`HSS`) — they get *resolved by recorded decision* (a G1 exit criterion), never registered; zero DEMO leakage (RA-11).
- **Manufacturer attributions the founder cannot document** — a measured legacy profile with "looks like Brand X" stays `manufacturer: unknown`; the alias layer fills in later from documented sources or the owner's own S3 submission (DS-7 protection runs both ways).
- **SKU dumps and full catalogs** — the registry grows by identity value, never by row count (AP-8).
- **Drawings, CAD files, report contents** — pointers only; content fingerprints once that [Proposed] mechanism is adopted (§6 of the submission model).
- **Certification records** — the concept stays [Proposed] and unexercised until its separate authority exists.

## 8. Avoiding taxonomy explosion during bootstrap

The explosion risk is highest exactly now, when one person can add codes frictionlessly. Standing defenses, plus two bootstrap-specific disciplines:

- **Parameters, not codes.** Nearly every "different" legacy upright is the same `OCL`/`OCR` schema with different values → a new *GSID*, never a new *shape code*. Planning expectation: **the bootstrap year should add zero to three SEC codes**; if tranche A generates more than that, the D-1 gate is being cheated somewhere, and the right response is schema review, not code minting.
- **Self-imposed gates are real gates.** The founder-as-TC files the same evidence, precedent check, and decision record for his own proposals as any stranger would — partly for audit continuity, mostly because the rejection log only deters others if it visibly binds the founder too.
- Fields-first presumption (P5), REJECTIONS.md precedents, RESERVED parking, quarterly activation only, and the >10%/year namespace-growth alarm (standard Part 12.5) all apply from record one.

## 9. The minimum registry dataset for usefulness

"Useful" defined per audience, honestly:

| Audience | Needs resolvable | Approximate threshold |
|---|---|---|
| Reader of the standards | Every worked-example identifier | First ~110 — resolvable once activated at `SNAP-1.0.0` (end of Q2) |
| Used-rack dealer / inspector | Enough legacy profiles that a random orphan upright has a real chance of matching | ~100+ measured profiles with a published lookup method (first 500, tranche A — expected to complete in early year 2 if the Q3 drive lands at the low end) |
| Spec-writer / engineer | The MH-relevant designation slice with cross-library equivalence | ~150–250 DSG records (tranche B) |
| Standards contributor | Dictionaries + rejection log + live proposal workflow | Already exists; ratification makes it citable |

**The single-sentence bar:** the registry is minimally useful when a stranger's common classification session can end at a *real* GSID instead of `gsid: null` — roughly the first-500 state.

## 10. How the Explorer demonstrates value before the registry exists

The Explorer already proves the hard claims — determinism, rule traceability, refusal-to-guess — with zero registry rows. Bootstrap uses (no Explorer behavior changes required; items marked ▸ are future app releases planned through the normal decision path, not this document):

- **Classification-as-documentation practice:** a traced classification (path + decision trace + JSON) is already a shareable, defensible artifact for inspection reports and spec appendices, even with null identifiers.
- **The scenario pack as outreach:** six audience walkthroughs double as demo scripts for every early conversation (dealer, lab, manufacturer, association).
- **The refusal demo as the credibility opener:** "watch it refuse to guess" lands harder with skeptical engineers than any feature list.
- **Golden sessions as the conformance seed:** today's byte-identical sample outputs become the conformance suite that software integrations later test against.
- ▸ After `SNAP-1.0.0` is cut (end of Q2): aligning the Explorer to the ratified seed dictionaries (implementing the demo-alias resolution) and letting it look up real GSIDs from the published snapshot file — the moment `gsid: null` starts becoming `GS-…`, the Explorer *is* the registry's first consumer, while remaining a view, never the registry (submission model §12).

## 11. Readiness milestones

Each gate is a checklist, not a date. Opening early is the failure mode; every list below is conjunctive.

**Ready for public submissions (S2)** when: canonicalization v1 published; `SNAP-1.0.0` cut, hashed, and archived; issuance and validation checklists published; repository LICENSE finalized; demo aliases resolved by recorded decision; and the founder has processed **≥20 internal submissions end-to-end (S0 dry run)** including at least one refusal and one correction, with the records public.

**Ready for manufacturer pilots (S3 / adoption A3)** when: S2 has processed real external submissions; the SMHE legal entity exists and the data license + accuracy attestation are adopted; at least one sustained external contributor is active; and the alias/dispute paths have each been exercised at least once. (A3 SHALL NOT begin before demo-alias resolution — strategy F-12 — which S2 readiness already required.)

**Ready for lab participation (S4 / A4)** when: at least one pilot manufacturer line is registered; the evidence checklist is adopted — informed by the S0 rehearsal on SMHE's own historical reports (rehearsed as fixtures, never registered early, §6); and the citation idiom (`identifier @ snapshot`) is adopted so reports have a stable form to cite.

**Ready for software integrations (A6)** when: two consecutive on-train snapshots have shipped; the golden/conformance suite is public and at least the Explorer itself passes it; and schema/file contracts have survived one MINOR release without breaking.

## 12. The one-year bootstrap roadmap

Assumes one founder at sustainable part-time effort; quarters are sequencing, not deadlines. Slipping a quarter is normal; skipping a gate is not.

| Quarter | Theme | Concrete outputs |
|---|---|---|
| **Q1 — Make it computable** | The critical path | Extract and publish `canonicalization/v1/` (rules + per-shape schemas — migration step 5); seed configuration templates, rule tables, and `enum_tokens.csv` (migration steps 3 and 6); resolve the demo aliases by recorded bootstrap decision; finalize the repository LICENSE; draft issuance/validation checklists; run the S0 dry run (≥20 internal submissions incl. refusal, correction, dispute rehearsal, and the evidence-path rehearsal on SMHE's own reports as fixtures) |
| **Q2 — Make it real** | First 110 | Ratify seed dictionaries **+ templates + rule tables** and the steward-seeding decision (recorded decisions); issue the flagship GSIDs and worked-example product records as `RESERVED`; **then cut `SNAP-1.0.0` last** — freezing every data directory, activating everything, hash + archival deposit; open the normative-path adoption of the [Proposed] submission-model mechanisms (provenance grades, fingerprints; 30-day comment) so S2 opens with them in force; begin the AISC terms-of-use review; ▸ plan the Explorer alignment release |
| **Q3 — Make it useful** | Toward 500 | Legacy-profile measurement drive (target: 80–100 profiles with stated methods); execute designation import #1 if cleared (Import track, recorded decision); **cut `SNAP-1.1.0` on the train**, activating the quarter's records; open S2 (public submissions) if its full checklist passes; ▸ ship the Explorer alignment release (seed dictionaries + real GSID lookups); publish transparency note #1 (issuance counts, decisions, refusals) |
| **Q4 — Make it durable** | Institution seeds | Cut `SNAP-1.2.0` on the train; process external submissions on the record; begin the non-US library license review and, if cleared, import #2 (the 10³-GSID path); begin legal-entity formation (S3 prerequisite); assess every §11 milestone honestly in public; write the Year-1 retrospective against §15 of the submission model and strategy §12 — **explicitly recording any re-baselined strategy milestones** (§2) |

**End-of-year picture if the plan holds:** a cut, archived, citable snapshot lineage; a few hundred resolvable records that three real audiences can use; a public submission path that has actually processed strangers' input; zero performance claims, zero DEMO leakage, zero rewritten history — and every industry conversation in year two starts with "look it up" instead of "imagine."

---

*Related: [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [Data Submission Model](SECTIONHUB_DATA_SUBMISSION_MODEL.md) · [Strategic architecture](../SECTIONHUB_STRATEGIC_ARCHITECTURE.md) (adoption stages A1–A7, §12 milestones) · [GOVERNANCE.md](../GOVERNANCE.md) (bootstrap clause) · [Proposal workflow](proposal-workflow.md) · [Demo scenarios](demo-scenarios.md)*
