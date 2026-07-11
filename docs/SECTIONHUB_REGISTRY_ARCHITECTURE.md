# SectionHub Registry Architecture

**The constitutional design for the long-term public registry — information architecture, identity governance, immutability, versioning, registry behavior, and public participation over a 30-year horizon.**

**Status:** design document, 2026-07-11. Deliberately **not** a software, API, database, or cloud design: it defines what the registry *is* and how it must behave, so that any future implementation is a detail that can be replaced without touching identity. Normative rules cited here live in the [standards](../standards/GSID_2D_Standard.md) and [GOVERNANCE.md](../GOVERNANCE.md); operating strategy in [SECTIONHUB_STRATEGIC_ARCHITECTURE.md](../SECTIONHUB_STRATEGIC_ARCHITECTURE.md). Where this document proposes something new, it is marked **[Proposed]** and has no force until adopted through the [proposal workflow](proposal-workflow.md).

---

## 1. Registry mission

### 1.1 What the SectionHub Registry is

The Registry is the **system of record for SectionHub identity**: the authoritative, public, append-only collection of every issued identifier, its meaning, its lifecycle, and its relationships — dictionaries of codes, registered geometry identities (GSIDs), component and assembly identities, configuration templates, crosswalks, aliases, and evidence references — published as versioned, immutable snapshots that anyone can download, verify, and keep.

It is not an application. TaxonomyExplorer and any future tools are *views over* the Registry; the Registry itself is the data, the issuance discipline, and the promises.

### 1.2 Why it exists

Identity infrastructure is only as good as its weakest promise. A GSID is worth citing in a drawing, a ConfigurationID worth citing in a test report, only if three things hold for decades: the identifier **never changes meaning**, it **always resolves** to its record, and the record's history is **reproducible by anyone** without permission. Those are registry properties, not software properties — and they are the entire product. The standards define what identities mean; the Registry is the institution that keeps them meaning it.

### 1.3 The problem it solves

Without a registry, every SectionHub identifier is a claim with no custodian: two parties could mint colliding identities, meanings could drift silently, and a citation in a 2026 test report could be unresolvable by 2036. The Registry solves exactly this: **one issuance authority, zero meaning drift, permanent resolvability, public verifiability** — the same social function GTIN allocation or DOI registration serves in their domains, delivered here with a stronger openness commitment: no fee to resolve, and no fee that can change a record.

### 1.4 Constitutional invariants

These restate commitments already made in the standards, the governance documents, and the strategic architecture; the Registry exists to keep them. Invariants 7, 8, and 10 originate in the (non-normative) strategy document — stating them here as constitutional is itself **[Proposed]** and follows the same adoption path as everything else so marked. Amending any adopted invariant follows the normative-rule path (two-thirds supermajority + 30-day public comment, GOVERNANCE §3), and the GSID boundary is presumptively rejected even then.

1. **Identity is a reference key, never a description** (P1). No registry identifier encodes dimensions, categories, manufacturers, or hierarchy positions.
2. **GSID identifies canonical 2D section geometry only** (P2). Assemblies, products, components, SKUs, and evidence never receive GSIDs.
3. **The Registry is append-only** (P8, N7). Nothing published is ever deleted, reused, re-meant, or edited in place. Every change is a new, dated, attributed event.
4. **Same inputs, same rules, same result** (P7). Registered issuance follows deterministic published procedures; derived identifiers (CGID, ConfigurationID) are recomputable by anyone (P9).
5. **Names are powerless** (P3, D-8). Aliases, part numbers, and commercial names point at identity; they never create, select, or alter it.
6. **Evidence never mints identity** (D-9, P4). Tests and certifications attach to existing identities; specimen counts and re-tests change nothing about *what* a thing is.
7. **Resolution is free, forever.** No one ever pays to read a dictionary or resolve an identifier — and no one can pay to change one.
8. **The Registry attests records, never performance.** No registry output states or implies load capacity, safety, or compliance (strategy §10.2).
9. **Every record is snapshot-pinned.** Every issuance, change, and output cites the snapshot under which it happened, so any historical state is reconstructible.
10. **The Registry outlives its steward.** Open data, independent archives, documented formats, and a succession rule (strategy §2.4) make continuity a design property, not a hope.

---

## 2. Registry object model

Two issuance modes across all record types. **Registered** identifiers are allocated by the Registry Operator under a recorded decision or a deterministic procedure; **derived** identifiers are content-addressed — computed from published canonicalization rules by anyone, and *recognized* (not issued) by the Registry. The table lists the eleven record types named in this design's commission; component identities (`CMP-`), assembly-product identities (`ASP-`), the Domain code, and `CFG:` group codes are registry records under exactly the same discipline (see the notes below).

| Record type | Identifier | Issuance | Identifies | Normative home |
|---|---|---|---|---|
| Shape Code | `SEC:XXX` | Registered (TC decision) | A cross-section topology class with a canonical parameter schema | GSID Standard §3 |
| Canonical Geometry | `CG<v>-<hash12>` | Derived | One normalized geometry record under canonicalization rules version `<v>` | GSID Standard §4 |
| GSID | `GS-<serial6>` | Registered (deterministic procedure) | The stable public identity of one canonical-geometry equivalence class; 1:1 with its current CGID, with full CGID history across rule versions | GSID Standard §4 |
| Product Family | `FAM:XXX` | Registered (TC decision) | A market/system family anchored to industry-standard scope | MH Taxonomy Standard |
| Component Role | `ROL:XXX` | Registered (TC decision) | A functional role of components within assemblies | MH Taxonomy Standard |
| Assembly Type | `ASM:XXX` | Registered (TC decision) | A structural/functional kind of assemblage | MH Taxonomy Standard |
| Configuration Type | Template: `ASM-<code>.v<n>` / `ROL-<code>.v<n>`; instance: `CF<v>-<hash12>` | Template registered (TC); instance derived | Template: the declared identity-bearing/informative field schema for a role or assembly type. Instance: one fully-bound identity-bearing value set | MH Taxonomy Standard §4.7–4.8 |
| Crosswalk Mapping | `DSG-<SYSTEM>-<NORMALIZED>` (designations; uppercase, normalized string per GSID Standard §4.5); XMAP record id **[Proposed]** | Registered (Import track / Fast track) | A typed, edition-pinned pointer between an external identifier and a SectionHub identity | GSID Standard §6; strategy §7 |
| Manufacturer Alias | `MPN-<serial6>` / `ALS-<serial6>` | Registered (Operator checklist validation) | One manufacturer part number or name record pointing at exactly one registry object | MH Taxonomy Standard §4.11–4.12 |
| Evidence Reference | `TST-<year>-<serial5>` / `CRT-<year>-<serial5>` | Registered (Operator checklist validation) | The existence, subject (object + ConfigurationID), protocol reference, and custodian of a test or certification — **a pointer, never the report contents** | MH Taxonomy Standard §4.13–4.14 |
| Certification Reference *(future)* | `CRT-…` extension **[Proposed]** | Registered | A record-existence attestation: this identifier resolves to a registered configuration with a stated provenance grade — explicitly not a performance claim | Strategy §10 |

Three structural notes:

- **Registered-over-derived pairing is deliberate.** CGID and ConfigurationID hashes are reproducible but rule-version-fragile and human-hostile; GS- and registered records give them stable public handles that survive canonicalization revisions. The pair — *derived for verification, registered for citation* — is the registry's core trick (GSID Standard §4.4).
- **Component and assembly identities** (`CMP-`, `ASP-`) are registered records in the same mold; they are covered by the MH Taxonomy Standard and participate in this model wherever "registry object" is said, with configuration instances giving them their deterministic content.
- **Dictionary codes are records too.** A code's row — definition, status, since-snapshot, deciding proposal — is a registry record with the same append-only discipline as everything else.

---

## 3. Immutable vs mutable

The clean rule: **a record's meaning is immutable; a record's story accretes.** Formally, every record is an immutable core plus an append-only event log; the "current view" anyone displays is derived from events, never by overwriting.

### 3.1 Immutable forever (the core)

- The identifier itself — never reused, never reassigned (N7).
- The **binding**: what the identifier identifies — the definition text, the canonical parameter values, the subject of the record *as published at issuance*.
- Issuance metadata: date, snapshot of birth, the deciding proposal/decision record, the issuing authority (TC decision vs delegated procedure).
- For derived identifiers: the derivation inputs and rules version — reproducibility depends on them.

If any of these is wrong, the correction is a **new record** (successor) plus a lifecycle event on the old one — never an edit.

### 3.2 Mutable by append-only event (the story)

- Lifecycle status transitions (§5), each with date, authority, and rationale.
- Successor/predecessor links (deprecation, supersession).
- Attached pointers: crosswalks, aliases, evidence references — these are *their own records* pointing here; the target record merely accumulates back-references.
- Provenance grade upgrades (`SELF_REPORTED` → `VERIFIED`) **[Proposed]** (§9.1), as dated events citing the verification basis (strategy §7.3).
- Annotations that carry no identity weight: errata notices, clarifying notes, translation pointers — always marked non-normative.

### 3.3 Versioned (neither frozen nor free)

- **Canonicalization rules** (`v1`, `v2`, …): a new major version re-derives CGIDs; GSIDs persist and re-point, with superseded CGIDs retained in history and a dual-derivation window (both resolvable) across the transition.
- **Configuration templates** (`.v1`, `.v2`): identity-bearing field changes are new template versions, never edits — otherwise ConfigurationID hashes would silently shift under existing records.
- **Crosswalks**: pinned to a named edition of the external system; a new external edition means new mapping records after review, never auto-carry (X-2).
- **Dictionaries and the registry as a whole**: versioned by snapshot (§8).

---

## 4. Public record format

What a publicly viewable record contains — stated as information architecture, not a schema.

### 4.1 Every public record shows

1. **Identity block:** the identifier; record type; namespace-qualified codes where applicable.
2. **Meaning block:** the definition or canonical values as published; for derived IDs, the derivation inputs and rules version.
3. **Lifecycle block:** current status; the full dated event history (issued → … ), each event citing its authority and, where applicable, its proposal/decision record.
4. **Provenance block:** who submitted/decided (organizational attribution as disclosed), provenance grade for data-bearing records **[Proposed]** (§9.1), source license and attribution for imported data (X-4).
5. **Relationship block:** successor/predecessor; crosswalks in and out (typed, edition-pinned); aliases pointing here; evidence references and their custodians.
6. **Reproducibility block:** the snapshot of birth; the snapshot the current view was rendered from; for derived identifiers, enough to recompute.
7. **The standing disclaimer:** identity and traceability only — no performance, safety, or compliance representation (invariant 8; strategy §2.5).

### 4.2 Never included in public records

- Manufacturer-confidential fields (submitted under the data license as private; the record shows *that* private fields exist, not their contents).
- Evidence report **contents** — capacities, curves, findings. The registry holds pointers, protocol references, and custodianship; the report stays with its issuing laboratory and owner. This is both a confidentiality and a liability boundary.
- Personal data beyond chosen attribution; reviewer deliberations beyond the recorded rationale.
- License-restricted external content (ECLASS property texts, MasterFormat section text, source dimension tables) — referenced, never republished (X-4).
- Anything from demonstration datasets: `DEMO`-status codes exist only in demo dictionaries and SHALL never appear in registry records (Code Dictionary Standard).
- Performance ratings, in any field, ever (E-104).

---

## 5. Registry lifecycle **[Proposed]**

The commission names six lifecycle stages — Draft, Reserved, Active, Deprecated, Superseded, Retired. This section reconciles them with the status set already normative for dictionary codes (Code Dictionary Standard / rule N5: `ACTIVE`, `SUPERCLASS`, `RESERVED`, `DEPRECATED`, `REJECTED`). Because the general lifecycle below would extend N5–N7 and the GOVERNANCE §5 status-transition gates, **it is proposed, not in force**; until adopted through the normative-rule path, dictionary code rows carry exactly the N5 statuses.

**DRAFT is not a registry state.** Proposal-space states — draft, triaged, deferred, rejected-as-proposal — are governed by the [proposal workflow](proposal-workflow.md) and create **nothing in the registry** (a DEFERRED proposal has no row; GOVERNANCE §4). A record exists only from RESERVED onward.

Proposed registry states for **registered object records** (GSIDs, components, assembly products, aliases, evidence references, crosswalk records):

| State | Meaning | Enter by | Resolvable? | Citable in new records? |
|---|---|---|---|---|
| **RESERVED** | Identifier allocated by a recorded decision; pending activation — or parked pending demand (the SBR/HBR precedent) | Accepted proposal / deterministic issuance | Yes (as reserved) | No |
| **ACTIVE** | In force; citable | Snapshot release activating it | Yes | Yes |
| **DEPRECATED** | Discouraged; successor named; kept for continuity | Recorded decision, effective at a snapshot | Yes, with successor shown | Only to reference history |
| **SUPERSEDED** | Replaced by a specific newer version of *the same subject* (re-derived CGID under new rules; new template version; new-edition crosswalk) | Versioning event (§3.3) | Yes, pointing forward | Only to reference history |
| **RETIRED** | End of line with no successor (scope withdrawn) — **never applicable to dictionary codes**, whose only retirement is `DEPRECATED`-with-successor per rule N7 | Recorded decision, effective at a snapshot | **Yes — forever** | No |

**Dictionary code rows** additionally keep their two code-specific statuses, unchanged in meaning: **`SUPERCLASS`** (classifier-only rollup per N6; reachable from `ACTIVE` only via a recorded normative-rule decision — the OCS precedent, and the one sanctioned exception to rightward-only movement, already encoded in the GOVERNANCE §5 gate) and **`REJECTED`** (a published row recording a *burned string* — CFS/PIP/TUB — so the precedent is citable and the three letters are never reused; such rows never activate).

Rules: transitions otherwise move only rightward (no resurrection — a deprecated, superseded, or retired identifier is never re-activated; a new need gets a new identifier); every transition is an append-only event with authority and rationale; **every state resolves forever** — end-of-life states limit future use, never past reproducibility.

---

## 6. Crosswalk architecture

How AISC, AISI, RMI, SMA, GS1, UNSPSC, ECLASS, ETIM, OmniClass, MasterFormat, manufacturer designation systems, and systems not yet imagined attach to the Registry **without ever controlling identity**.

1. **Attachment is by record, never by merge.** An external system connects through crosswalk records (designation mappings today; XMAP records for classification systems, **[Proposed]** pending adoption) that point between an external identifier and a SectionHub identity. The external system's content stays outside; the pointer is inside.
2. **Typed, directional, honest.** Every mapping carries a type — `EXACT` / `CLOSE` / `BROADER_THAN` / `NARROWER_THAN` / `RELATED`, direction defined source-relative-to-target — because untyped "equivalence" silently lies in one direction (X-1). When in doubt between EXACT and CLOSE, CLOSE.
3. **Edition-pinned.** A mapping binds to a named edition of the external system and is re-reviewed, never auto-carried, when the edition changes (X-2).
4. **Powerless by construction.** Crosswalks are never inputs to classification, never mint codes, never alter any SectionHub identity (X-3, C-1). A UNSPSC commodity or an ECLASS class can be *reached from* a SectionHub identity; it can never *define* one.
5. **License-respecting.** External identifiers are referenced under their owners' terms; license-restricted content is never republished; source licenses are recorded on the importing records (X-4, F-5). Geometry from designation tables enters as SectionHub's own canonical parameters, never as reproduced source tables.
6. **Symmetric for the future.** A system that does not exist yet attaches the same way: propose the system (Import/Fast track), record its edition and license, add typed mappings. The Registry never needs restructuring to meet a new neighbor — that is the point of attachment-by-record.
7. **Manufacturer data is a crosswalk too, socially.** Catalog mappings enter by voluntary, attributed, license-governed submission (never scraping), through the alias model (§7) and component/configuration registration — with the same powerlessness rule: a manufacturer's data describes *their* products' link to identity; it never shapes the taxonomy (D-8, AP-8).

---

## 7. Alias model

The naming layer is where commerce meets identity without contaminating it.

- **One record per name.** Each manufacturer part number (`MPN-`), legacy name, marketing name, or SKU is one registered record: the string, its owner, its validity period, and the **single registry object it points at**.
- **Zero authority** (invariant 5). Aliases never influence classification, issuance, or equivalence. Tools reject names as classification inputs (E-102).
- **Many-to-one, time-layered.** One object accumulates many names across manufacturers, markets, and decades; each name's validity window is recorded, so "what was this called in 2027?" stays answerable in 2045. Renames are new alias records — the old name remains, historically bound.
- **Names are never unique claims.** Two manufacturers may use the same string for different objects; alias records disambiguate by owner + string, and resolution presents all matches rather than guessing.
- **Equivalence flows through identity, not names.** "Interchangeable with" is answered by shared GSIDs and matching configuration facts (e.g., hole-pattern fields), never by alias-to-alias links — preserving vendor neutrality structurally (X-5).
- **Disputes are public and recorded.** A contested pointer (wrong object, contested ownership) goes through the dispute path with a recorded resolution; corrections are new records, not edits (strategy §7.3).

---

## 8. Snapshot model

The snapshot is the Registry's unit of truth and the mechanism that makes history reproducible forever.

- **A snapshot is the complete, frozen state** of every dictionary, record, template, rule table, and mapping at a release: identified as `SNAP-<semver>`, integrity-sealed by a content hash recorded in the snapshot record.
- **Cadence and semantics:** quarterly release train; MAJOR for breaking rule changes (e.g., a canonicalization major — with dual-derivation window and migration notes), MINOR for additive records, PATCH for deprecation-based corrections (GOVERNANCE §5).
- **Nothing activates between snapshots.** RESERVED → ACTIVE happens only at a release; a citation of `ACTIVE` state is therefore always a citation of a specific snapshot.
- **The citation idiom [Proposed]:** the canonical public way to cite a registry fact is *identifier @ snapshot* — `GS-004217 @ SNAP-1.2.0`. A bare identifier means "current"; an @-pinned citation is reproducible forever and is the form test reports and specifications SHOULD use.
- **Permanence, redundantly:** every snapshot remains downloadable from the registry's own publication channel, and independent-archive deposit (a SHOULD in strategy §2.4) is treated by this design as a release-gate expectation from SNAP-1.x onward. The registry never serves only "latest."
- **Reproducibility contract:** given any snapshot, an independent party can re-derive every derived identifier, re-render every record's view at that time, and verify the content hash — no permission, no proprietary data (P9). Lineage is unbroken: each snapshot names its predecessor, so the full history is a chain anyone can walk.

---

## 9. Registry governance

Decision authority follows GOVERNANCE.md §3 unchanged; this section maps it onto registry operations.

### 9.1 Requires Technical Committee decision (never delegable)

- Creating or deprecating any **code** (SEC/FAM/ASM/ROL/CFG); creating or superseding any **normative rule**. (Changing a published meaning is not a TC power or anyone's — the only lawful correction is deprecation-with-successor, N7/P8.) Anything touching the constitutional invariants (§1.4) goes via the supermajority path.
- New **configuration template versions** (identity-bearing schema changes).
- Onboarding a **new external system** for crosswalks (its license posture, edition policy, and mapping conventions) — the Import track with Registry Operator validation.
- Adopting **[Proposed]** items in this document: the §5 general lifecycle (which extends N5–N7 and the GOVERNANCE §5 gates), XMAP as a record type, the citation idiom, certification references, provenance grading, and the constitutional elevation of strategy-origin invariants (§1.4).
- The **dispute outcomes** that change a record's story (re-pointing an alias, invalidating a mapping).

### 9.2 The Registry Operator's own role (deterministic procedure + audit trail)

Issuance is constitutionally the Operator's role, not a TC delegation: GOVERNANCE §2 holds it with SMHE ("not delegated") and §8 reserves registration to it. What bounds that role is the **procedure test**: the Operator executes published deterministic procedures and checklists, never judgment about meaning.

- **Issuance mechanics:** allocating GS- serials per the deterministic procedure (canonicalize → derive → check equivalence class → issue-or-return-existing); allocating CMP/ASP/MPN/ALS/TST/CRT serials against validation checklists.
- **Validation within an approved import:** row-level checks of an already-approved designation table import (the "registry validation" half of the GOVERNANCE §3 Import class).
- **Alias and evidence-reference registration** meeting the published checklist (attribution, license, pointer validity) — with every registration appearing in the next transparency report. *(Today's [proposal workflow](proposal-workflow.md) routes alias records through a proposal issue; moving routine, checklist-satisfying alias registration to the Operator is the target state described here and rides the same adoption decision as §5.)*
- **Snapshot mechanics:** cutting releases on the train, running the machine gates (unique identifiers, no edits to published records, status-transition legality, proposal citations), publishing archives.
- **Provenance upgrades [Proposed]** where the verification basis meets a published evidence checklist (provenance grading itself originates in the strategy's integrity model and is not yet normative).

The boundary rule: **anything a procedure can decide sits with the Operator; anything requiring judgment about meaning sits with the TC.** Operator actions are always reversible-by-supersession and always audited; an action that proves wrong is corrected through the erratum path, and the procedure is amended.

### 9.3 Bootstrap honesty

Until Roadmap Phase 7, the founding maintainer acts as TC and Registry Operator (GOVERNANCE §2). The registry discipline applies identically from day one — recorded decisions, append-only records, snapshot pinning — precisely so the audit trail is continuous when the institution grows into its structure.

---

## 10. Registry anti-patterns

Named dangers, each a future-debt generator. These extend the taxonomy anti-patterns (standard Part 14) and strategy failure modes (F-1…F-16) with registry-specific forms.

| # | Anti-pattern | Why it destroys a 30-year registry | Guard |
|---|---|---|---|
| RA-1 | **Editable records** ("just fix the typo in place") | Every downstream copy silently diverges from history; audit dies | Append-only events; corrections by supersession (§3) |
| RA-2 | **Identifier reuse or resurrection** | A 2030 citation and a 2040 citation of the same string mean different things | N7; no-resurrection rule (§5) |
| RA-3 | **Semantic serials** (ranges by family, prefixes by manufacturer) | Meaning changes; digits can't | P1; opaque serials (AP-10) |
| RA-4 | **Hash-only identity** (CGID/CFID without registered handles) | Rule-version changes orphan every citation | Registered-over-derived pairing (§2) |
| RA-5 | **"Latest-only" service** | Old snapshots rot; reproducibility becomes marketing | Permanent snapshots + independent archives (§8) |
| RA-6 | **Pay-to-resolve, or pay-to-change** | Trust collapses either way | Invariant 7; revenue only from authority/assurance services |
| RA-7 | **Crosswalks as inputs** (letting UNSPSC/ECLASS placement steer classification) | External churn imports into identity | X-3; C-1 (§6) |
| RA-8 | **Hosting evidence contents** | Confidentiality breaches, liability creep, and the registry becomes a ratings database by accident | Pointers only (§4.2) |
| RA-9 | **Attesting artifacts instead of records** ("registered" read as "inspected") | Liability the registry cannot carry; misgrading in the field | Record-existence boundary + disclaimer on every output (strategy §10.2, §2.5) |
| RA-10 | **Per-manufacturer namespaces or "reserved blocks"** | Neutrality dies structurally | One namespace per code *type*, never per party (P6) |
| RA-11 | **DEMO leakage** (demonstration codes reaching registry records) | Illustrations become de-facto standards | Code Dictionary Standard containment SHALLs |
| RA-12 | **Silent re-canonicalization** (changing derivation rules without a version) | Every derived identifier becomes unverifiable | Versioned rules + dual-derivation windows (§3.3) |
| RA-13 | **Registry authority creep** (the Operator "fixing" taxonomy through issuance choices) | Governance routes around the TC | Procedure test: procedures decide mechanics, never meaning (§9.2) |
| RA-14 | **Single-custodian permanence** | One dead server ends the 30-year promise | Independent archives; documented formats; succession rule (§1.4 inv. 10) |

---

## 11. Success criteria

Registry-specific and measurable, aligned with the strategy document's milestones (its §12 dates govern where they overlap).

**Year 1.** First real snapshot cut (`SNAP-1.x`) with content hash and archival deposit; unbroken lineage begun. Every identifier issued to date traces to a recorded decision. Designation registry live (order of 10³ GSIDs from license-cleared libraries) and resolvable from published files alone. Demo aliases resolved by recorded bootstrap decision — zero DEMO leakage into the registry.

**Year 3.** Registry operations running under the seated TC with the TC–Operator authority boundary (§9) in effect; first transparency report published (issuance volumes, decisions, funding). Dispute path exercised at least once, resolved on the record. Crosswalks live to UNSPSC and one of ECLASS/ETIM/OmniClass under X-rules. First provenance upgrade (`SELF_REPORTED` → `VERIFIED`) executed against the published checklist. Third parties resolving records without contacting anyone.

**Year 5.** Order of 10⁴ GSIDs; alias layer carrying multiple manufacturers' catalog mappings under signed data licenses. Evidence references appearing in real laboratory reports using the *identifier @ snapshot* citation form. Certification references piloted with the record-existence boundary intact (no performance claim ever emitted — a checkable fact, checked). Two consecutive years of on-train quarterly snapshots; archives independently verified.

**Year 10.** A decade of unbroken snapshot lineage; every identifier ever issued still resolves with its full story. Succession machinery tested by audit (could a successor operate the registry from the public record alone? — demonstrated, not assumed). Registry facts cited in documents from ≥20 independent organizations per year (strategy §12 metric). The boring test, registry edition: nobody asks *whether* a SectionHub identifier will still resolve; the question sounds strange.

---

## 12. Registry roadmap

From minimal viable registry to mature ecosystem — capabilities, not systems. Each stage is complete and useful in itself.

| Stage | Name | What exists | What it proves |
|---|---|---|---|
| **R0** *(now)* | **Files-as-registry** | The repository's dictionaries, records, and rule tables under git; discipline enforced by process and machine gates; no snapshot yet cut | The record-keeping discipline works with zero infrastructure |
| **R1** | **First snapshot & issuance** | `SNAP-1.x` released, hashed, archived; deterministic GS- issuance live under bootstrap authority; designation registry populated from cleared sources | Identity issuance + permanence promises are real |
| **R2** | **Citation & resolution conventions** | The *identifier @ snapshot* idiom adopted **[Proposed → adopted]**; published resolution guidance (how to look up any identifier from snapshot files alone); alias and evidence-reference registration open with checklists | Third parties can cite and verify without contacting the steward |
| **R3** | **Accountable operations** | Seated-TC governance; TC–Operator authority boundary in force; transparency reports; dispute path; provenance grading; independent archive verification | The registry is an institution, not a maintainer's repository |
| **R4** | **Mature ecosystem** | Certification references live within the record-existence boundary; multiple manufacturer catalogs mapped; crosswalk coverage across the named external systems; software ecosystems consuming snapshots (their design is out of scope here — the registry's obligation is only that snapshot data remains sufficient, stable, and free) | The 30-year promises are being kept in public, at scale |

The through-line: **every stage changes how much exists, never what a record means.** A GSID issued at R1 reads identically at R4 — that continuity is the registry working.

---

*Related documents: [GSID Standard](../standards/GSID_2D_Standard.md) · [MH Taxonomy Standard](../standards/Material_Handling_Taxonomy_Standard.md) · [Code Dictionary Standard](../standards/Code_Dictionary_Standard.md) · [GOVERNANCE.md](../GOVERNANCE.md) · [Proposal workflow](proposal-workflow.md) · [Strategic architecture](../SECTIONHUB_STRATEGIC_ARCHITECTURE.md) · [Position paper](position-paper-why-sectionhub.md)*
