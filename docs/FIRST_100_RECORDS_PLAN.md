# First 100 Records Plan

**The exact founding cohort of the SectionHub Registry — what `SNAP-1.0.0` contains, in what order, and what has to be true before it is cut.**

**Status:** execution plan, 2026-07-11. Refines [Bootstrap Plan](SECTIONHUB_BOOTSTRAP_PLAN.md) §1 (the "~110" sketch) into an exact, itemized cohort, grounded in the current [dictionaries](../dictionaries/), the worked examples in the [standards](../standards/Material_Handling_Taxonomy_Standard.md) (Parts 6–11), the [Explorer samples](../explorer/samples/), and the [scenario pack](../examples/scenarios/). It **creates no records** and adopts nothing — it is the checklist for the founder. Constitutional gates come from the [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md), [Data Submission Model](SECTIONHUB_DATA_SUBMISSION_MODEL.md), and [GOVERNANCE.md](../GOVERNANCE.md).

**The one insight that shapes everything below:** the first 100 records are **~85% ratified dictionary and ~15% live proof-of-stack**. The dictionaries already exist as reviewed CSVs; the founding act is mostly *ratifying and activating* them, then adding a thin, fully zero-permission slice of geometry and one worked product so the standards stop being illustrative and start resolving. Volume and outside data come later; the first 100 exist to make the constitution real and recomputable by a stranger.

---

## 1. Record categories and 2. counts

Two kinds of identity live in the cohort: **registered** records (issued by decision or deterministic procedure) and **derived** companions (`CGID`, `ConfigurationID` — *computed and recognized, never issued*, Registry Architecture §2). Only registered records are "issued"; derived companions ride along and are recomputable by anyone.

| Cat | Category | Registered count | Derived companions |
|---|---|---|---|
| A | **Namespace records** (`namespaces.csv`: Domain, SEC:, FAM:, ASM:, ROL:, CFG:) | 6 | — |
| B | **Dictionary code records** (SEC 29 · ROL 17 · ASM 16 · FAM 12 · CFG 12) | 86 | — |
| C | **Configuration template versions** (`ASM-WDK.v1`, `ROL-COL.v1`, `ROL-DKS.v1`, `ROL-MSH.v1`) | 4 | — |
| D | **Flagship canonical-geometry / GSID records** (zero-permission worked-example sections, §4) | 8 | 8 CGIDs |
| E | **Worked-example component records** (`CMP`: upright · mesh panel · deck support channel) | 3 | — |
| F | **Worked-example assembly record** (`ASP`: the wire deck) | 1 | 4 ConfigurationIDs (deck, mesh, channel, upright) |
| | **Founding cohort total** | **108 registered** (+12 derived: 8 CGID + 4 ConfigurationID) | |

108 is the honest number; "first 100" names the cohort, not a literal integer, and the founder may tune category D up or down (it is the only elastic category) without touching the gated core. The container — the `SNAP-1.0.0` snapshot record itself — is cut *last* (§9) and is what activates the cohort into its recorded statuses at once (not uniformly `ACTIVE` — see §9).

**Category C is a refinement of the Bootstrap sketch.** The [Bootstrap Plan](SECTIONHUB_BOOTSTRAP_PLAN.md) §1 named three seed templates (`ASM-WDK.v1`, `ROL-COL.v1`, `ROL-DKS.v1`); this plan adds a fourth, **`ROL-MSH.v1`**, because the wire deck's mesh panel (category E) is a `ROL:MSH` component whose ConfigurationID needs a registered mesh-role template — an omission in the "~110" sketch, corrected here. Each of the four templates is a TC-decided registered record (Registry Architecture §9.1).

### 3. Why each category belongs in the first 100

- **A + B (namespaces + codes, 92):** the dictionaries *are* registry records (Registry Architecture §2 note 3). Ratifying them converts three years of reviewed drafting into force and is the substrate every other record cites. Nothing resolves without them; they are non-negotiably first. This deliberately includes the non-`ACTIVE` rows — the 4 `SUPERCLASS` rollups (OCS/HSS/BAR/ZEE), 2 `RESERVED` (SBR/HBR), and 3 `REJECTED` burned-string rows (CFS/PIP/TUB) — because their *records* carry meaning and precedent from record one.
- **C (templates, 4):** no `ConfigurationID` can exist without a registered template version, and `SNAP-1.0.0` must freeze *every* data directory (repository-structure migration step 10). These four are exactly the set the wire-deck + upright proof needs.
- **D (geometry, 8):** the highest-credibility move available — converting the standards' own worked-example *sections* from illustrative to resolvable. A skeptic can recompute each CGID from published canonicalization rules and confirm the GSID.
- **E + F (one product, 4):** proves the whole stack end-to-end (GSID → component → assembly → ConfigurationID hash) with a single real assembly. One is enough to demonstrate; more wait for their templates (§7).

## 4. Records that already exist implicitly

Every category-D and E/F record is *described* somewhere in the repo today; the founding work is registration, not invention. The "cited in" column below lists only where the **literal illustrative identifier** actually appears — which is the standards' worked examples and two of the data-model scenarios, *not* the Phase-1 Explorer samples (those emit `gsid: null`; see the note after the table):

| Geometry (section + canonical dims) | Illustrative ID in docs | Illustrative ID cited in |
|---|---|---|
| `SEC:OCL` 76.2×41.3×12.7×1.9 (rack upright) | `GS-004217` / `CG1-7B3E91A0C24D` | Standard Part 7; scenario 3 (SKU mapping) |
| `SEC:OCU` 32×25×1.5 (deck support channel) | `GS-002734` | Standard Part 6 |
| `SEC:OCU` 40×40×1.5 (frame brace) | `GS-001582` | Standard Part 8 |
| `SEC:RBR` 4.0 (mesh wire stock) | `GS-000891` | Standard Part 6 |
| `SEC:PLT` 152×6.4 (base plate) | `GS-006010` | Standard Part 8 |
| `SEC:ANG` 38×38×2.7 (shelving post) | `GS-009410` | Standard Part 10 |
| `SEC:FBR` 25×3 (sway strap) | `GS-009522` | Standard Part 10 |
| `SEC:SHS` 76×76×3.2 (platform column) | `GS-010233` | Standard Part 10 |
| Wire-deck assembly + mesh/channel components | `ASP-000173`, `CMP-000611/612`, `CF1-8C41D02E97BA` | Standard Part 6; scenario 6 (certification record) |
| Upright component | `CMP-000482`, `CF1-5A0B44E19C77` | Standard Part 7; scenario 3 |

> **Note — demo samples show the classification, not the IDs.** The Phase-1 Explorer samples (`section-ocl.json`, `component-col-ocl.json`, `assembly-wdk.json`) and scenarios 1–2 *demonstrate the classification* of these same objects, but they run under `SNAP-0.1.0-DEMO` and emit `gsid: null` with no dimensions — and the deck demo uses the `ROL:CHL` demo alias, the very alias §6.3 resolves to `ROL:DKS`. They contain the codes, never the registered IDs above. The fourth Explorer sample, `section-indeterminate-w201.json` (scenario 4), is intentionally **not** a founding record: it maps to hot-rolled AISC `IWF` geometry deferred in §7, so every Explorer sample is now accounted for.

> **The illustrative-serial reconciliation (a required decision).** The IDs above are *illustrative placeholders*; the registry issues real serials by deterministic procedure (the first geometry registered becomes `GS-000001`, not `GS-004217`). Registration therefore registers the **geometries and products**, not their placeholder serials. **Recommended:** after the cut, update the worked examples via editorial erratum to cite the real registered IDs — this is what makes "documentation as live demo" actually resolve, and it is a permitted informative-text change (the placeholders were never registry records). Alternative: keep the illustrative IDs and publish a crosswalk index. Either way, decide before the cut so the standards and registry agree.

The 92 dictionary/namespace records also "exist implicitly" — as the committed CSVs — awaiting only ratification.

## 5. Records creatable with zero external permissions

The entire founding cohort is zero-permission by design:

- **A + B:** authored by the project; ratification is an internal recorded decision under the bootstrap clause.
- **C:** the templates derive from the project's own decking/configuration expertise and the standard's §4.7 field definitions.
- **D:** every category-D geometry is a **proprietary or generic profile** measured or defined by the project — no external table, no license. (Their canonical parameters are the project's own values, restated per the published shape schemas.)
- **E + F:** the project's own worked examples; the components and assembly reference only category-D geometries and category-C templates.

Nothing in the first 100 touches a copyrighted table, a manufacturer's catalog, or a signed agreement.

## 6. Records requiring governance decisions first

Each is a recorded decision filed through the [proposal workflow](proposal-workflow.md), decided by the founder acting as TC under the bootstrap clause (GOVERNANCE §2) — with the *same* evidence and records a stranger would file:

1. **Publish canonicalization rules v1** + per-shape parameter schemas (repository-structure migration step 5). *Prerequisite for every CGID; the true critical path.*
2. **Seed and adopt the four configuration templates** (migration steps 3, 6; plus `enum_tokens.csv` for a complete `dictionaries/` freeze). *Prerequisite for every ConfigurationID.*
3. **Resolve the three demo aliases** (`ZED`, `CHL`, terminal-`HSS`) by recorded bootstrap decision — a G1 exit criterion; ensures zero `DEMO` leakage (RA-11) so the ratified dictionary is clean.
4. **Ratify the seed dictionaries** (A + B) as `RESERVED` records citing the ratification decision.
5. **Record the steward-seeding decision** authorizing category E + F: an explicit, narrow reconciliation with the Submission Model's rule that `CMP`/`ASP` intake otherwise opens only at stage S3 — bounded to the standards' published examples, never a precedent for third-party data.
6. **Adopt the Registry Architecture §5 lifecycle** (at minimum the `RESERVED`→`ACTIVE` transition for **object records** — GSIDs, components, assembly products) via the normative-rule path (TC supermajority + 30-day comment; RA §9.1, GOVERNANCE §3). Dictionary codes (A + B) already have `RESERVED`/`ACTIVE` under N5, but GSID/CMP/ASP have no `RESERVED` state outside the still-`[Proposed]` §5 lifecycle — so it must be adopted **before** the cut, exactly as the Bootstrap Q2 schedules the other `[Proposed]` adoptions.
7. **Finalize the repository `LICENSE`** (GOVERNANCE §8) — not a record, but a gate on everything public.

The first 100 deliberately **avoid** the `[Proposed]` provenance-grade scheme: category-D geometry carries a plain project-defined/measured **basis statement** (the Submission Model §5 minimum), and grade labels are applied later on adoption. With the one lifecycle adoption above, every other mechanism the cohort relies on is already-normative — the founding cohort takes exactly one `[Proposed]` dependency, and takes it explicitly.

## 7. Records that should intentionally wait

| Deferred | Why it waits | Gate that releases it |
|---|---|---|
| **AISC designation records** (`DSG-AISC-W6X15/W12X50/C4X5.4/C8X11.5`) | Mandatorily deferred: designation records require the F-5 per-source license review of AISC's terms of use | Bootstrap Tranche B (first 500), after license clearance |
| **The paired hot-rolled geometry** (IWF `W6X15`/`W12X50`, CHN `C4X5.4`/`C8X11.5`; illustrative `GS-007731/007844/007902/012140`) — this is the `IWF` geometry the demo `section-indeterminate-w201.json` maps to | **Not** license-gated — geometry enters as SectionHub's own canonical parameters (RA §6.5, GSID C-1), the same basis as the category-D generic shapes. Deferred only as a pragmatic bundle with its designations; **could be entered now** if independently measured with a stated-method basis | Bootstrap Tranche B, or sooner by independent measurement |
| Frame, cantilever, shelving, work-platform products (`ASP-000246/000310/000311/000402/000420` + their `CMP`s) | Need templates not in the seeded four (`ROL:BRC/BPL/ARM/BAS/ANC/SHF/PAN/CLP`, `ASM:FRM/ACA/CVB/SHU/WPF`) | Additional template decisions (post-cut) |
| Evidence references (`TST-`/`CRT-`) | No interim route; intake opens only at S4; carrying any test *contents* is refused forever | Stage S4 (Submission Model §14) |
| Manufacturer aliases (`MPN-`) | Real manufacturer data needs a signed data license and legal entity | Stage S3 |
| Flared-channel teaching variant (`SEC:OCU` continuous-flare, illustrative `GS-002735`) | Optional pedagogy, not needed for the proof slice | Any later cut, on demand |
| The three demo aliases | **Never registered** — resolved by decision instead (§6.3) | — |
| Any performance value | Refused forever (refusal rule 3) | Never |

## 8. Recommended creation sequence

Strictly gated; each step's outputs are the next step's prerequisites. Steps 1–3 are the real work; 4–7 are fast once the gates hold.

1. **Publish `canonicalization/v1/`** (rules + per-shape schemas). Without this, no CGID is honest.
2. **Seed + adopt templates C** and `enum_tokens.csv`; **resolve demo aliases**; **adopt the RA §5 object-record lifecycle** (§6.6); **finalize LICENSE**.
3. **Record the steward-seeding decision** (authorizes E + F).
4. **Ratify dictionaries** → the 92 A+B records land in their recorded statuses: ~83 head toward `ACTIVE`, while `OCS`/`HSS`/`BAR`/`ZEE` are born `SUPERCLASS`, `SBR`/`HBR` are `RESERVED`-parked, and `CFS`/`PIP`/`TUB` are `REJECTED` (never activate).
5. **Compute + register category-D geometries** → 8 GSIDs `RESERVED`, each with a reproducible CGID and a basis statement; run equivalence review at issuance (Bootstrap §4).
6. **Compute ConfigurationIDs + register E + F** → 3 `CMP` + 1 `ASP` `RESERVED`, referencing D geometries and C templates. These are **intra-cohort bindings within a single atomic snapshot** — resolved and activated together at the cut — not citations of `RESERVED`-state records in the RA §5 "not citable in new records" sense (that rule governs *later* records depending on an un-activated reservation).
7. **Cut `SNAP-1.0.0` last** → freezes the cohort and transitions each record to its recorded terminal status (§9); compute content hash; deposit the archival copy.
8. **(Post-cut, editorial)** update the worked examples to cite the real registered IDs (§4 reconciliation); align the Explorer to the ratified dictionaries so `gsid: null` begins resolving to real IDs.

## 9. Suggested snapshot cut line

Draw the line **immediately after step 6 (the wire-deck `ASP`) and before anything in §7.** Concretely, `SNAP-1.0.0` contains exactly categories A–F and nothing else: no AISC import, no additional-template products, no evidence, no aliases, no public (S2) submissions. The cut is what transitions the cohort into its recorded statuses in one atomic, content-hashed, archived event: **≈99 records activate** (all active codes, namespaces, templates, GSIDs, and the components/assembly), while the **9 non-`ACTIVE` `SEC` rows take their terminal statuses** — `SUPERCLASS` (`OCS`/`HSS`/`BAR`/`ZEE`), `RESERVED`-parked (`SBR`/`HBR`), and `REJECTED` (`CFS`/`PIP`/`TUB`, which **never activate** — activating a burned string would breach N7 / RA-2). This is the first link in a lineage that must never break. The very next quarter's work (Tranche B import, S2 opening, more products) lands in `SNAP-1.1.0`, keeping the founding cut small, clean, and entirely zero-permission.

## 10. Readiness criteria for `SNAP-1.0.0`

The cut proceeds only when **every** line is true (conjunctive; opening early is the failure mode):

- [ ] Canonicalization rules v1 + per-shape schemas published; every category-D CGID recomputable by an independent party from published files alone (P9).
- [ ] The Registry Architecture §5 object-record `RESERVED`→`ACTIVE` lifecycle adopted by recorded normative-rule decision (§6 item 6) — the cohort's one `[Proposed]` dependency, resolved before the cut.
- [ ] The four configuration templates (incl. `ROL-MSH.v1`) seeded and adopted by recorded decision; every category-F ConfigurationID recomputable.
- [ ] All `dictionaries/` directories complete and frozen (codes, `enum_tokens.csv`, templates, rule tables) — migration step 10 satisfied.
- [ ] Demo aliases resolved by recorded decision; **zero `DEMO`-status content** anywhere in the cohort (RA-11).
- [ ] Repository `LICENSE` finalized (GOVERNANCE §8).
- [ ] Every record cites its authorizing decision: ratification (A+B), template adoptions (C), steward-seeding (E+F); no record lacks its gate.
- [ ] **No performance, capacity, safety, or compliance value anywhere** — verified field-by-field (refusal rule 3; the permanent zero).
- [ ] The illustrative-serial reconciliation decided (§4) so standards and registry agree post-cut.
- [ ] Machine gates pass: unique identifiers per namespace; no edits to any published row; status-transition legality; `UPPER_SNAKE` enum tokens; proposal citation on every new row (GOVERNANCE §5).
- [ ] Each record's activation target is its recorded status, not a blanket `ACTIVE` (§9): the 3 `REJECTED` `SEC` rows never activate; the 4 `SUPERCLASS` and 2 `RESERVED` rows take their terminal statuses.
- [ ] Content hash computed and recorded in the snapshot record; archival deposit prepared (Registry Architecture §8; strategy §2.4).
- [ ] Lineage anchor set: `SNAP-1.0.0` names itself as the first snapshot, predecessor = none.

When all boxes hold, cut the snapshot. The registry exists — and every worked example in the published standards resolves to something a stranger can look up and recompute.

---

*Related: [Bootstrap Plan](SECTIONHUB_BOOTSTRAP_PLAN.md) · [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [Data Submission Model](SECTIONHUB_DATA_SUBMISSION_MODEL.md) · [Repository structure](repository-structure.md) (migration steps) · [GOVERNANCE.md](../GOVERNANCE.md) · [Proposal workflow](proposal-workflow.md)*
