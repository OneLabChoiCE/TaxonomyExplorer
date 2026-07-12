# SectionHub Data Submission Model

**The constitutional model for how information enters the future SectionHub Registry — roles, evidence, trust classification, review, refusal, correction, and dispute — over the same 30-year horizon as the registry itself.**

**Status:** design document, 2026-07-11. Deliberately **not** an implementation: no forms, APIs, schemas, or code — this defines what a submission *is*, who may make one, what it must carry, and what the registry must do with it, so any future intake mechanism is a replaceable detail. It builds directly on the [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) (append-only doctrine, record model, lifecycle, TC–Operator boundary), [GOVERNANCE.md](../GOVERNANCE.md), the [proposal workflow](proposal-workflow.md), and the standards. Mechanisms new to this document are marked **[Proposed]** and have no force until adopted through the normative path; several depend on prerequisites named in §14 (notably the SMHE legal entity and finalized repository licensing).

---

## 1. Purpose and scope

This model governs **every path by which information becomes, changes, or annotates a registry record**: proposals for codes and rules, geometry submissions, catalog and alias data, configuration and evidence references, crosswalk mappings, corrections, and disputes.

It does **not** govern: the meaning of identities (the standards do), decision authority (GOVERNANCE.md does), record behavior after acceptance (the Registry Architecture does), or anything about product performance — which no submission path can carry (§8, §11).

One sentence of philosophy: **the registry accepts descriptions, never claims of goodness.** Everything below is machinery for keeping those two things apart for thirty years.

## 2. Submission roles

A role is a *capacity in which a party submits*, with its own duties and limits. One organization may act in several roles; each submission names exactly one.

| Role | Who | May submit | May never submit | Standing duties |
|---|---|---|---|---|
| **Manufacturer submitter** | A producer describing its own products | Geometry references for its profiles; aliases/part numbers; component & assembly configuration references; correction requests on its own records | Competitors' data; performance values in any field; codes named after its brands | Signed data license + accuracy attestation **[Proposed]** (requires the SMHE legal entity); affiliation disclosure; designated contact role |
| **Testing laboratory submitter** | An independent lab | Evidence references (existence, subject, protocol, custodian); verification statements supporting trust upgrades | Report contents, capacities, ratings; identity records for objects it did not classify | Disclosure of client relationship on each submission; protocol edition named |
| **Software vendor submitter** | A tool maker consuming snapshots | Crosswalk mapping proposals; error/mismatch reports (a species of correction request); golden-test discrepancies | Bulk scraped third-party catalog data; inferred classifications presented as fact | Statement of data origin for every mapping proposed |
| **Standards contributor** | Anyone proposing dictionary/rule changes | Code, taxonomy, and crosswalk proposals per the [templates](../proposals/README.md) | — (the evidence gates are the limit) | Affiliation and commercial-interest disclosure; precedent check |
| **Inspector / field observer** | An identified professional documenting equipment in the field | Geometry observations (measured parameters, stated method and limits); dispute reports; correction requests | Manufacturer attributions they did not verify; condition or capacity assessments (out of scope entirely) | Identify themselves and their method; unknowns stay unknown — the model rewards `INDETERMINATE` over guessing |
| **Registry operator** | SMHE staff function | Issuance records, snapshot records, validation outcomes — always as its own constitutional role executing published procedures (Registry Architecture §9.2) | Anything requiring judgment about meaning | Every action audited and transparency-reported |
| **Technical Committee reviewer** | TC members acting in review | Decision records, rationale, dissents | Submissions they must recuse from (own-product matters) | Recusal and disclosure per GOVERNANCE §6 |

Anonymous submissions are not accepted in any role: append-only history is only as trustworthy as its attribution. (Public *readership* requires no identity at all.)

## 3. Submission object types

Each type maps to an existing record type and review path; none of this creates new registry mechanics.

| Submission type | Becomes | Review path (§7) |
|---|---|---|
| New code proposal (SEC/FAM/ASM/ROL/CFG — including product family, component role, and assembly type entries) | Dictionary row (RESERVED → ACTIVE at snapshot) | TC decision (evidence-gated) |
| GSID / canonical geometry reference | CGID recognition + GSID issuance-or-match | Operator deterministic procedure |
| Manufacturer alias / part number | `MPN-`/`ALS-` record pointing at one object | Operator checklist *(today routed as a proposal; checklist delegation is the [Proposed] target state, Registry Architecture §9.2)* |
| Product-instance registration (component / assembly with configuration reference) | `CMP-`/`ASP-` record + bound ConfigurationID | Operator checklist + spot review **[Proposed]** |
| Crosswalk mapping | `DSG-` record (designations) / XMAP record **[Proposed]** | Import track (TC + Operator validation) / Fast track |
| Evidence reference | `TST-`/`CRT-` pointer record | Operator checklist |
| Dispute report | Dispute event on the target record + `DISPUTED` overlay (§4) | Operator triage (completeness only) → TC decision for any outcome that changes the record's story (Registry Architecture §9.1) |
| Correction request | Erratum → supersession event, never an edit | Editorial or TC per what it touches (§9) |
| Configuration template proposal (new/changed identity-bearing field schema) | `ASM-<code>.v<n>` / `ROL-<code>.v<n>` template version | TC decision (taxonomy-change template) |

## 4. Trust classification **[Proposed]**

Trust labels answer one question only: ***how did this record's content come to be believed?*** They classify **provenance of the record — never product performance**, never quality, never adequacy. A `LAB_VERIFIED` geometry is not a better profile than a `SELF_REPORTED` one; the label describes the epistemic trail, nothing else.

This seven-label scheme refines the two-grade model (`SELF_REPORTED`/`VERIFIED`) proposed in the [strategy](../SECTIONHUB_STRATEGIC_ARCHITECTURE.md) §7.3 and carried by the Registry Architecture; it decomposes `VERIFIED` by *verification basis* and adds two overlays that are **not provenance grades**. On adoption, this scheme supersedes the two-grade naming wherever it appears (Registry Architecture §3.2 and §11; strategy §7.3), with legacy `VERIFIED` read as "any of `OBSERVED` / `DOCUMENT_REFERENCED` / `LAB_VERIFIED` / `REGISTRY_REVIEWED`" — one specification, not two competing ones.

**Provenance grades** (ordered by strength of independent verification; every data-bearing record carries exactly one):

| Grade | Meaning |
|---|---|
| `SELF_REPORTED` | Attested by the submitter under the accuracy attestation; mechanically validated only |
| `OBSERVED` | Measured or witnessed in the field by an identified observer who states method and limits |
| `DOCUMENT_REFERENCED` | Backed by a cited, identified document (published table, drawing reference, catalog page) — the citation is recorded; the document itself may remain private, optionally anchored by a public content fingerprint **[Proposed]** (§6) |
| `LAB_VERIFIED` | Independently confirmed by an identified testing laboratory's measurement, referenced as evidence |
| `REGISTRY_REVIEWED` | Checked by the Operator or TC against the published verification checklist, on the record |

**Overlays** (append-only events, shown alongside the grade, deliberately *not* grades):

- `DISPUTED` — an unresolved dispute event is open against the record (§10). It suspends nothing by itself; it warns.
- `DEPRECATED` — a **lifecycle state** (Registry Architecture §5), displayed with provenance but governed by lifecycle rules, not by this scheme.

Grades move only by evidence: upgrades are dated events citing their basis; a grade is never bought, never negotiated, and never decays silently (a successful dispute produces a correction event, not a stealth downgrade).

## 5. Required evidence by submission type

Minimums, designed so that **no private or customer data is ever required** to reach the registry.

| Submission | Minimum evidence | Explicitly not required |
|---|---|---|
| New code proposal | Per the [templates](../proposals/README.md): fields-first argument, the failing existing code, ≥2 independent instances (SEC) or industry-scope anchor (FAM), precedent check | Any confidential drawing or customer identity |
| Geometry reference | Canonical parameters per the shape schema + basis statement (drawing reference, measurement method, or published table citation) | The drawing itself; tolerances beyond canonical parameters |
| Alias / part number | The string, owner, validity period, the object it points at, and a public catalog citation *or* owner attestation | Pricing, commercial terms |
| Product-instance registration | Identity-bearing configuration fields per the template; provenance grade claim with basis **[Proposed]** (§4) | Informative-only fields; anything the template marks private |
| Crosswalk mapping | Source system + edition; mapping type and direction; rationale; license analysis (X-4) | Republication of the external content |
| Evidence reference | Report identifier, issuing lab, protocol + edition, subject object + ConfigurationID, custodian | **Report contents, results, capacities — refused if offered (§8)** |
| Dispute report | The contested record, the specific claim contested, the disputant's identity and basis | Proof to a legal standard — the registry records disputes; it does not try them (§10) |
| Correction request | The defective record, the defect, the proposed successor content, evidence for the correction | — |

## 6. Public versus controlled information

Follows the Registry Architecture §4 exactly; restated here from the submission side.

**Public by default:** identity and classification path; non-sensitive designations; submitter *type* (role) and organizational attribution as disclosed; provenance grade and overlays; lifecycle status and full event history; references — protocol names, document citations, evidence pointers; and content **fingerprints [Proposed]**: a submitter MAY anchor a private document by publishing only its cryptographic hash, so a future dispute can verify an unaltered document without the registry ever holding or revealing it.

**Not public by default (controlled or refused):** raw test results and report contents; proprietary drawings; confidential customer or project data (the registry practices data minimization — it does not want this material even privately); **capacity values and any performance payload — refused outright, not merely private (§8)**; private engineering evaluations; submitter contact details beyond the designated role.

The dividing principle: **the registry publishes what a thing is and how we came to believe it — never what it can do, and never more about the submitter's business than identity requires.**

## 7. Submission review paths

Mapped onto GOVERNANCE §3 and the Registry Architecture's procedure test — *anything a procedure can decide sits with the Operator; anything requiring judgment about meaning sits with the TC.*

| Path | Applies to | Authority |
|---|---|---|
| **Deterministic procedure** | Geometry → CGID/GSID issuance-or-match | Operator (audited) |
| **Checklist validation** | Aliases *(target state; interim routing as a proposal issue per the [workflow](proposal-workflow.md) and Registry Architecture §9.2)*; evidence references and product-instance registrations *(no interim route exists — their intake opens only at stages S4 and S3 respectively, §14)* | Operator (audited; transparency-reported) |
| **Editorial review** | Corrections confined to non-normative text; documentation | Maintainers (72-h lazy consensus) |
| **TC decision** | All code/taxonomy proposals; template versions; external-system onboarding; corrections touching identity bindings, meanings, or grades; every dispute outcome that changes a record's story — and dispute dismissals too, since rejection is a merit judgment (Registry Architecture §9.1) | TC per GOVERNANCE §3 (evidence gates first) |
| **Normative path** | Anything touching invariants, N-rules, or this model itself once adopted | TC supermajority + 30-day public comment |

Review examines evidence sufficiency and rule compliance — never the commercial desirability of the submission. A submission from the smallest shop and the largest manufacturer meet identical gates (open participation on published criteria; strategy §2.5).

## 8. Refusal rules

The registry **must refuse** — not park, not quietly accept — a submission that:

1. **Lacks its minimum evidence** (§5): returned at triage naming the missing item (never silently rejected).
2. **Conflicts with registered identity**: asserts a binding contradicting an existing record without going through dispute/correction (e.g., re-pointing someone else's alias by submission).
3. **Carries a performance claim**: any capacity, rating, safety, or compliance value in any field, including free text (E-104 generalized). There is no authority under which the registry can accept it.
4. **Uses commercial naming to steer taxonomy**: brand-derived codes, SKU-shaped classifications, "name it after our series" (P3, D-8, E-102, AP-2/AP-8).
5. **Asserts ambiguous assembly identity**: a GSID for a deck or frame, a section code for an assemblage, or a configuration missing its identity-bearing fields (P2, E-101; the correct output for genuinely missing facts is `INDETERMINATE`, and the model treats that as a *good* submission, not a failure).
6. **Requests mutation of an immutable record**: any "just change it" — the only lawful shapes are correction-by-supersession (§9) and lifecycle events (RA-1/RA-2).
7. **Would confuse classification with certification**: submissions framing registration as approval, requesting endorsement language, or attaching marks the registry does not govern (§11).
8. **Arrives anonymously or with undisclosed conflicts** where disclosure is required (§2).

Refusals are recorded like everything else: dated, reasoned, and — for pattern-forming refusals — reflected into public precedent (REJECTIONS.md for code matters).

## 9. Correction and supersession

Mistakes are corrected **forward, never backward**; history is never rewritten (append-only doctrine, Registry Architecture §3).

- A validated correction produces a **successor**: a new record or new event carrying the corrected content, with the predecessor lifecycle-marked (DEPRECATED-with-successor per rule N7; SUPERSEDED once the Registry Architecture §5 lifecycle is adopted) and cross-linked both ways.
- The defective record **remains resolvable forever**, displaying its correction chain — a 2027 citation of the wrong record still resolves in 2040, to a page that says exactly what was wrong and where the correction lives.
- Who decides: corrections to non-normative text are editorial; corrections touching identity bindings, dictionary meanings, or provenance grades are TC matters (§7); self-corrections by the original submitter follow the same paths with the same records — being the author buys no shortcut.
- Systemic errors (a flawed procedure, not one record) additionally amend the procedure, on the record.

## 10. Dispute handling **[Proposed]**

Public posture: **disputes are first-class records, cheap to open, expensive to fake, and resolved on the page.** The event/overlay mechanics below ride the same adoption decision as the §4 trust scheme; until adopted, a dispute is raised as an issue through the existing [proposal workflow](proposal-workflow.md) (erratum/correction route). Resolutions — including dismissals — are TC decisions; the Operator's role is completeness triage only (§7).

- **What can be disputed:** a record's factual bindings — an alias pointing at the wrong object, a geometry that doesn't match its basis, a provenance grade claimed without basis, a license violation in an import, a duplicate identity.
- **What cannot be disputed here:** product performance, design adequacy, commercial disagreements, IP ownership beyond pointer validity, and anything the registry does not assert. Disputes about *whether a product is good* have no docket.
- **Who may dispute:** anyone, in any role, with disclosed identity and a stated basis. Competitors explicitly may — and vexatious patterns are themselves conduct matters (Code of Conduct; anti-pattern DS-10).
- **What the registry records:** the dispute event (target, claim, disputant, basis, date), the `DISPUTED` overlay while open, every exchange entered into the record, and the resolution with rationale — upheld (→ correction path), rejected (→ overlay cleared, precedent noted), or unresolvable-on-the-record (→ overlay persists with both positions visible).
- **What the registry does not adjudicate:** truth beyond its own records and published rules. It verifies what can be verified (fingerprints, citations, derivations) and otherwise records the disagreement honestly — an unresolved dispute displayed forever is a legitimate outcome.

## 11. Relationship to certification

Restating the boundary this entire model serves (Registry Architecture invariant 8; strategy §10.2):

- **Registry acceptance is not certification.** It means a description met evidence and validation gates — nothing more.
- **Identity registration is not performance approval.** A registered configuration is an *identified* configuration.
- **An evidence reference is not a capacity claim.** It records that a report exists, who holds it, and what exact configuration it addresses — the numbers stay with the lab and the engineer of record.
- **If certification references are ever supported**, they remain bounded to record existence and traceability with the no-inspection disclaimer, unless and until a separate, explicitly-scoped authority is created through the normative path — and nothing in this submission model creates one.

## 12. Relationship to TaxonomyExplorer

The Explorer is a **view, never the registry** — and never an intake.

- It MAY later display submission-derived records: resolving an identifier to its public record, showing provenance grades, overlays, lifecycle, and citations, always snapshot-pinned (`identifier @ snapshot` once adopted).
- It SHALL NOT accept submissions, mint or reserve identifiers, mutate any record, or present demo-dictionary content as registry content — the demo subset (`SNAP-0.1.0-DEMO`, three labeled deviations) stays visibly separate until the seed dictionaries are released and adopted by the app through the normal decision path.
- The Explorer's deterministic classification remains exactly what it is today: a rule-traced *recommendation of codes* from user answers. Classification sessions are not submissions; a user wanting to register something is handed off to the submission paths above.

## 13. Anti-patterns

Prohibited submission practices, extending the registry anti-patterns (RA-1..RA-14):

| # | Anti-pattern | Guard |
|---|---|---|
| DS-1 | **Capacity smuggling** — performance values hidden in free-text, file names, aliases ("DECK-2500LB") | Refusal rule 3; field-level screening; aliases carrying performance tokens returned |
| DS-2 | **Submission-as-marketing** — registering to obtain implied endorsement | §11 boundary; no endorsement language anywhere in records |
| DS-3 | **Bulk unattributed dumps** — catalogs scraped or forwarded without owner authority | Role duties (§2); data license + attestation; refusal rule 8 |
| DS-4 | **Trust-label inflation** — claiming `LAB_VERIFIED`/`REGISTRY_REVIEWED` without the recorded basis | Grades assigned by the registry from evidence, never self-declared above `SELF_REPORTED`/`OBSERVED`/`DOCUMENT_REFERENCED` |
| DS-5 | **Grade-for-fee** — paying to be labeled more trusted | Invariant 7 posture: money buys service levels, never records |
| DS-6 | **Oversharing** — submitting customer data, project details, or full reports the model doesn't ask for | Data minimization (§6): unrequested sensitive material is rejected and not retained |
| DS-7 | **Identity squatting** — registering aliases/geometry for competitors' products to control their entries | Ownership attestation; dispute path; corrections on the record |
| DS-8 | **Guess-laundering** — submitting inferred or AI-generated values as `OBSERVED`/measured | Method statement required; AP-9 posture; discovered inference → correction + grade event |
| DS-9 | **Mutation pressure** — escalation, urgency, or legal threats to edit history | Refusal rule 6; append-only is not negotiable at any escalation level |
| DS-10 | **Dispute weaponization** — serial baseless disputes against a competitor | Disclosed-identity requirement; conduct process; dismissal precedents on the record |
| DS-11 | **Review-path shopping** — routing a meaning-bearing change as "editorial correction" | Procedure test (§7); maintainers escalate anything touching meaning |

## 14. Minimal viable submission program

Staged so each stage is safe with the institutions that actually exist at the time. These are submission-program stages, prefixed **S** to keep them distinct from the Registry Architecture's R0–R4 *infrastructure* stages, which they ride. (The commission's R0–R5 numbering maps 1:1 onto S0–S5.)

| Stage | Name | What opens | Prerequisites |
|---|---|---|---|
| **S0** | **Internal dry run** | The steward exercises every path (proposal, geometry, alias, correction, dispute) on illustrative data; procedures and checklists drafted from what breaks | None — can begin now |
| **S1** | **Public proposal-only** | Code/taxonomy/crosswalk *proposals* via the existing public workflow — already live today; no data-bearing registrations yet | Proposal workflow (exists) |
| **S2** | **Alias / crosswalk / geometry pilot** | A small set of alias records, one designation import, and **third-party geometry submissions** (the legacy/orphaned-profile wedge: inspectors and dealers submitting measured parameters for GSID issuance-or-match) processed end-to-end with published checklists | Registry R1 underway — deterministic GS- issuance live; first snapshot cut or cut concurrently (the registry-R1 designation population *is* this stage's pilot import: the two ladders overlap, they don't sequence); repository licensing finalized |
| **S3** | **Manufacturer self-reported pilot** | 1–3 manufacturers register product lines (`SELF_REPORTED`/`DOCUMENT_REFERENCED`) under signed data licenses | SMHE legal entity (strategy §2.5); data license + attestation adopted |
| **S4** | **Lab evidence-reference pilot** | One laboratory submits evidence references against pilot configurations; first `LAB_VERIFIED` upgrades | S3 running; evidence checklist adopted |
| **S5** | **Registry-reviewed public records** | Full trust ladder in operation, `REGISTRY_REVIEWED` grades issued, disputes and transparency reports routine | Seated TC (era G2); dispute path exercised |

The gate discipline: **no stage opens by enthusiasm** — each names its prerequisites, and a stage that can't meet its prerequisites waits.

## 15. Success criteria

Aligned with the strategy §12 and Registry Architecture §11 milestones (those dates govern where they overlap).

**Year 1.** S0 dry run complete with published procedure drafts; S1 demonstrably working in public (external proposals triaged on the record — already true in kind today); zero data-bearing registrations accepted before their prerequisites — measured by the absence of any record lacking its stage's gate.

**Year 3.** S2 running: alias, designation-import, and third-party geometry submissions processed by checklist with every action transparency-reported; first dispute opened and resolved on the record; no accepted submission has ever carried a performance payload (a checkable claim, checked at every snapshot).

**Year 5.** S3–S4 real: multiple manufacturers' self-reported lines registered under signed licenses; a lab citing ConfigurationIDs with evidence references in actual reports; first `LAB_VERIFIED` upgrades on the record; correction and supersession chains publicly walkable end-to-end.

**Year 10.** The full trust ladder is boring: submissions from all role types processed on published cadences; provenance grades cited by downstream users as routinely as the identifiers themselves; a decade of append-only submission history with zero rewrites — and still not one performance claim inside the registry. That last number staying at zero *is* the model working.

---

*Related: [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [GOVERNANCE.md](../GOVERNANCE.md) · [Proposal workflow](proposal-workflow.md) · [Strategic architecture](../SECTIONHUB_STRATEGIC_ARCHITECTURE.md) · [Code Dictionary Standard](../standards/Code_Dictionary_Standard.md) · [MH Taxonomy Standard](../standards/Material_Handling_Taxonomy_Standard.md) · [Position paper](position-paper-why-sectionhub.md)*
