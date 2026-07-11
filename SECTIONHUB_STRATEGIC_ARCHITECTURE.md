# SectionHub Strategic Architecture

**Scope:** the 10-year ecosystem around SectionHub and TaxonomyExplorer — governance, adoption, interoperability, and long-term industry impact.
**Status:** strategic design document, 2026-07-11. Non-normative; where it touches rules, the normative documents win ([Taxonomy Standard draft](standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md), [GOVERNANCE.md](GOVERNANCE.md), [CONTRIBUTING.md](CONTRIBUTING.md)).
**Assumes:** TaxonomyExplorer v0.4 (static, deterministic, rule-traceable Explorer; demo dictionary subset `SNAP-0.1.0-DEMO`; seed dictionaries `SNAP-1.0.0` drafted but unreleased).

**Names, once:** *SMHE* is the steward organization and registration authority. *SectionHub* is the platform: the standards, dictionaries, registries, and data. *TaxonomyExplorer* is the reference application that proves the platform is real, deterministic, and usable.

---

## 1. Mission and Vision

### 1.1 Mission

Give the material-handling industry a deterministic, vendor-neutral, publicly governed identification and classification infrastructure — in which every section, component, assembly, and configuration has exactly one resolvable identity, every classification is traceable to published rules, and no manufacturer's naming controls anyone else's data.

### 1.2 The problem being solved

Material handling runs on ambiguous identity. The same roll-formed upright is a different part number at every manufacturer, a marketing name at every dealer, a hand-typed description on every purchase order, and an unidentifiable legacy profile in every used-equipment transaction and post-installation inspection. Test evidence attaches to catalog names rather than to configurations, so it dies when the name changes. Nothing in the industry plays the role that a VIN plays for vehicles or a DOI plays for papers.

### 1.3 Vision (2036)

- A cross-section's **GSID** is the normal way engineers, labs, inspectors, and used-equipment dealers refer to a profile — the "DOI of cross-sections."
- **ConfigurationIDs** appear in test reports, certification records, RFQs, and BIM objects, so evidence and procurement bind to *what a thing physically is*, not to what someone called it that year.
- The dictionaries and rules are boring — settled, versioned, cited, and no longer argued about. Boring is the success condition of infrastructure.
- SMHE operates a trusted registry the way GS1 stewards GTIN allocation — governed issuance and permanent, non-reusable identifiers — but with a stronger openness commitment: all SectionHub registry data is openly licensed, with no fee to resolve an identifier.

### 1.4 Non-goals (permanent)

SectionHub does not design structures, rate load capacity, certify safety, replace RMI/SMA/AISC/AISI design and testing standards, or sell access to the taxonomy itself. It identifies and classifies; it never judges adequacy.

### 1.5 Values (the constitutional invariants)

Determinism (P7), identity-as-reference-key (P1), the GSID 2D-only boundary (P2), immutability of published meaning (P8), namespace separation (P6), fields-first restraint (P5), vendor neutrality (P3), and public reproducibility (P9). Under [GOVERNANCE.md](GOVERNANCE.md) §3 these are constitutional: changing any of them requires the supermajority-plus-public-comment path, and the GSID boundary is presumptively rejected even then.

---

## 2. Governance Model

Governance is already defined normatively in [GOVERNANCE.md](GOVERNANCE.md); this section defines its **evolution path** — the same rules operated by progressively broader bodies.

### 2.1 Three governance eras

| Era | Trigger to enter | Who decides | Exit criteria |
|---|---|---|---|
| **G1 — Bootstrap** (now) | — | Founding maintainer acts as TC + Registry Operator, all decisions recorded per GOVERNANCE §5 | Roadmap **Phase 7 (Formal Governance)** declared, per the GOVERNANCE.md §2 bootstrap clause. Readiness evidence for declaring Phase 7: ≥3 qualified external participants willing to serve (each with ≥2 merged evidence-gated contributions across ≥2 quarters); SNAP-1.x released; demo aliases resolved |
| **G2 — Seated committee** | Exit of G1 (= Roadmap Phase 7) | Technical Committee of 3–9 (§3 below); SMHE retains Registry Operator role | ≥3 member organizations with sustained participation; liaison relationship with ≥1 industry association; funding covers registry operations |
| **G3 — Industry consortium** | Exit of G2 | TC under a charter with industry advisory council; optionally pursue formal standardization (e.g., development under an ANSI-accredited process or adoption by an existing association) | — (steady state) |

The G-eras are this document's names for the governance side of the ROADMAP.md phases: G1 spans Phases 1–6; G2 begins at Phase 7. The bootstrap clause in GOVERNANCE.md §2 remains the normative trigger.

The **rules do not change between eras** — only the breadth of who operates them. This is deliberate: adopters in G1 must not face different guarantees than adopters in G3.

### 2.2 Decision rights (unchanged across eras)

The GOVERNANCE.md §3 matrix holds: editorial → maintainers; codes and templates → TC with D-1/D-7 evidence gates; designation-system imports → TC recorded vote + Registry Operator validation; normative rules → two-thirds supermajority + 30-day public comment; snapshots → Registry Operator on the release train. Strategic documents (this file, roadmap revisions) fall under the existing **Editorial** class of that matrix (maintainer, lazy consensus); TC review is invited as a courtesy, not required — strategy is non-normative and this document adds no decision classes.

### 2.3 Neutrality and funding

- Funding SHOULD come from diversified sources: membership dues, registration services, certification program fees (§10), and grants — never from exclusive arrangements with a single manufacturer.
- Money buys **service levels, never decisions**: no sponsored codes, no priority in the evidence gates, no naming rights inside namespaces.
- All funding sources above a de-minimis threshold are published annually.

### 2.4 Continuity and succession (the 10-year promise)

- All public data will be openly licensed (CC-BY-4.0 target per standard Part 12.1; LICENSE finalization is migration step 9 of [docs/repository-structure.md](docs/repository-structure.md) and no license is granted until it lands, per GOVERNANCE.md §8); all snapshots are permanently downloadable; the registry format is documented well enough to re-implement.
- Archival copies of every snapshot SHOULD be deposited with at least one independent long-term archive from SNAP-1.x onward (e.g., Zenodo for snapshot data; Software Heritage's archiving of the public source repositories).
- The charter SHALL name a succession rule: if SMHE ceases operation, the trademark and registry authority transfer to a successor body chosen by the TC, and failing that, the data remains usable under its open license with the names retired. An identifier issued in 2026 must still resolve in 2036 — that promise is the product.

### 2.5 Legal posture (prerequisites for G2)

- **Legal entity.** SMHE SHALL be constituted as a formal legal entity no later than G2 entry — it must hold the trademarks (§8), sign manufacturer data licenses (§7.3), and be an insurable counterparty. Until then, the bootstrap operates at correspondingly limited exposure (no certification program, no physical labels, no signed data licenses).
- **Antitrust / competition-law compliance.** A standards effort jointly governed by competing manufacturers carries classic consortium exposure. From the first multi-vendor meeting: participation open to any qualified party on published objective criteria; marks and registration services licensed on published, nondiscriminatory terms; standard standards-body meeting rules (no discussion of pricing, market allocation, or dealings with specific customers — recorded in every agenda); competition-counsel review of the charter as a G2 entry requirement.
- **Liability boundaries.** Registry outputs, certificates, and any future API SHALL carry standard disclaimer language: identity and traceability assurance only, no representation of load capacity, safety, or fitness (§10.2 defines the attestation boundary precisely). Errors-and-omissions insurance is a G2-era operations requirement before any certification pilot.

---

## 3. Technical Committee Structure

### 3.1 Composition (extends GOVERNANCE.md §6)

- **TC (per GOVERNANCE.md §6):** 3–9 members, personal seats, employer disclosure, ≤1/3 of seats per corporate family, recusal on own-product decisions.
- **Proposed for the G2 charter** (requires a GOVERNANCE.md amendment via its §9 path): staggered 2-year renewable terms; an annually elected **Chair** who sets agendas and breaks procedural (never technical) ties.
- **Registry Operator:** SMHE staff function, non-voting, executes issuance and snapshots exactly as decided.

### 3.2 Working groups (formed as demand justifies, not before)

| Working group | Scope | Feeds |
|---|---|---|
| **Geometry & Canonicalization** | SEC codes, parameter schemas, canonicalization rules, CGID/GSID procedures | GSID Standard v2.0 |
| **Product Taxonomy (MH)** | FAM/ASM/ROL/CFG dictionaries, configuration templates | Taxonomy Standard |
| **Mappings & Interoperability** | DSG imports, external crosswalks (§7), designation systems | Registry |
| **Explorer & Tooling** | Reference app, schemas, validators, conformance tests | Explorer docs |
| **Evidence & Certification** *(future, G2+)* | TST/CRT record model, certification program design | §10 |

Working groups recommend; the TC decides. A WG SHALL NOT be created until there is a backlog that two or more people are actively working — committees without work become governance theater.

### 3.3 Advisory council

Industry Advisory seats (GOVERNANCE.md §7) grow into an **Advisory Council** in G3: associations, manufacturers, testing laboratories, insurers, and large end users. The council reviews and comments with recorded responses; it never votes on taxonomy content. Its real function is adoption feedback: telling the TC where the taxonomy fails in the field.

---

## 4. Proposal Workflow

### 4.1 Lifecycle (states are recorded on the proposal issue)

```
DRAFT → TRIAGED → EVIDENCE-COMPLETE → TC REVIEW → ┬ ACCEPTED → RESERVED row → ACTIVE at snapshot
                                                   ├ REJECTED → REJECTIONS.md (binding precedent)
                                                   └ DEFERRED → parked, no dictionary row
```

- **Triage** (monthly): maintainers check the evidence gate for the proposal type (CONTRIBUTING.md table) and either advance or return with the missing item named. Incomplete proposals never reach the TC.
- **TC review** (quarterly for codes; lightweight items by 14-day lazy consensus): decision recorded in `proposals/` with the rules applied; rejections summarized in `REJECTIONS.md` and binding on future proposals absent new evidence.
- **Activation:** only at a snapshot release. Nothing becomes citable between releases.

### 4.2 Tracks

| Track | For | Gate | Cadence |
|---|---|---|---|
| **Full** | New codes (SEC/FAM/ASM/ROL/CFG), identity-bearing template fields, normative rule changes | D-1 / D-7 / supermajority as applicable | Quarterly |
| **Import** | Designation-table imports (DSG) | Recorded TC vote + Registry Operator validation (GOVERNANCE.md §3); imports never mint codes (rule C-1); source-license clearance (§7.1) | Quarterly |
| **Fast** | Enum tokens, informative fields, crosswalk records (§7 — class to be added to GOVERNANCE §3 by amendment when XMAP is adopted) | Correctness review | 14-day lazy consensus |
| **Erratum** | Defects in published rows | Deprecation-with-successor only (N7/P8) | As needed |

### 4.3 Standing worked example

The open item [proposals/2026-07-03-phase1-demo-alias-deviations.md](proposals/2026-07-03-phase1-demo-alias-deviations.md) (ZED / CHL / terminal-HSS demo aliases) is the template for how deviations are handled: documented immediately, contained visibly, resolved through the workflow — never silently. Its resolution (recommended: align the Explorer to the seed dictionaries) SHOULD be a recorded **bootstrap-era (G1) decision** — the GOVERNANCE.md §2 bootstrap clause empowers the acting TC to make it now, and it is a G1 exit criterion (§2.1). The seated G2 TC SHOULD reaffirm it as its first agenda item, precisely because that demonstrates the system working on its own imperfection.

---

## 5. Industry Adoption Roadmap

Adoption is sequenced by **who gets value before anyone else adopts** — each stage must be independently worthwhile.

### 5.1 Stages

| Stage | Years (indicative) | Wedge | Value delivered before broad adoption |
|---|---|---|---|
| **A1 — Credibility** | done–2027 | Public deterministic Explorer with rule traceability (v0.4) | Anyone can see the system refuses to guess and cites its rules |
| **A2 — Reference data** | 2026–2027 | Import publicly documented designation systems (AISC shapes database; EN/GB-T/JIS/AS-NZS section libraries) as DSG→GSID records, subject to per-source licensing review (F-5) — designations referenced and geometry restated as canonical parameters, never republished as tables | The registry answers a real question: "what section is W12X50, and what else is geometrically identical?" Cross-library equivalence falls out free (rule C-3) |
| **A3 — Manufacturer pilots** | 2027–2028 | 2–3 manufacturers map one product line each (MPN→CMP/ASP+CF) | Pilot partners get clean cross-reference data and a neutral way to say "compatible with" without naming competitors (CFG:HOL pattern ids) |
| **A4 — Evidence pilots** | 2028–2029 | One testing lab cites ConfigurationIDs in wire-deck or upright test reports | Evidence survives renames; labs get unambiguous specimen identity (P4 collapses replicate confusion) |
| **A5 — Association liaison** | 2028–2030 | Liaison with RMI- and SMA-scope committees; taxonomy referenced as documentation practice | Associations get a shared vocabulary without writing one; SectionHub gets legitimacy |
| **A6 — Software integrations** | 2029–2032 | Rack CAD/configurators, WMS, BIM libraries consume snapshots; "SectionHub Conformant" tooling mark (§10.3) | Software vendors get free, versioned reference data with a conformance story |
| **A7 — Certification & registry economy** | 2031+ | Registered-configuration certification (§10); registry APIs | Identity assurance becomes a service the market pays for |

### 5.2 Chosen first wedges (and why)

1. **Wire decking** — configuration-driven identity pain is worst here (the standard's own worked example), MH26.2's test-based capacity approach — capacities established by testing specific decking configurations — aligns naturally with ConfigurationID (and the standard's broadened decking scope in recent editions only widens the fit), and decking crosses manufacturer boundaries constantly.
2. **Used/legacy rack identification** — dealers, inspectors, and AHJs need to identify orphaned profiles; a public GSID registry with geometry parameters is the first genuinely neutral tool for it. This constituency has no vendor loyalty and high pain.
3. **Designation lookup** (A2) — no adoption partner required (source-license clearance still required per F-5): immediately useful, and it exercises the whole geometry layer.

### 5.3 Adoption anti-strategy

No "boil the industry" campaigns, no press-release-driven fake momentum, no SKU harvesting, no exclusive launch partners. Each stage recruits the *minimum* participants that make the next stage credible.

---

## 6. Relationship to External Standards and Classifications

**The one-sentence position:** SectionHub is the *engineering identity spine* — deterministic identity for geometry, components, assemblies, and configurations; every other system is either an upstream technical foundation, a peer product/test standard, or a downstream classification facade reached by governed crosswalks (§7). SectionHub competes with none of them.

| System | What it is | Relationship | Mechanism |
|---|---|---|---|
| **AISC** | Structural steel design spec + shape designations/database | Upstream foundation | Shape tables import as `DSG-AISC-…` → GSIDs (rule C-1); AISC 360 cited as a design-basis reference in evidence records; we never restate design provisions |
| **AISI** | Cold-formed steel spec (S100) and nomenclature | Upstream foundation | Topology families map to SEC codes (OCL/OCU/ZLP…); design calculations per S100 consume canonical section geometry downstream; designation systems import as DSG |
| **RMI (MHI)** | Rack product/design/test standards (ANSI MH16.1, MH16.3, MH26.2) | Peer product-standard body — **complement, never substitute** | FAM/ASM alignment (SPR, CLR, DKG…); test protocols referenced by TST records; pursue liaison (A5); RMI's R-Mark certification program remains the authority on conformance with its design and testing standards — SectionHub never touches performance |
| **SMA (MHI)** | Shelving/storage equipment scope | Peer product-standard body | FAM codes (SHV, WPL, WKS, MDR, LCK, MBS, STC) anchored to its scope; same liaison posture |
| **GS1** | Commerce identification and data standards — trade items (GTIN), parties/locations (GLN), master-data synchronization (GDSN) | Complementary commerce layer | GTINs are naming-layer records (like MPN) pointing at CMP/ASP; SectionHub identifies *engineering* identity, GS1 identifies *trade items*; a GTIN maps to a configuration, never the reverse |
| **UNSPSC** | Procurement category hierarchy (segment→family→class→commodity) | Downstream procurement facade | Crosswalk records FAM/ASM → UNSPSC commodities (mostly `broader-than` mappings); lets buyers file SectionHub-identified products in procurement systems |
| **ECLASS (eCl@ss)** | Industrial product classification with property lists (IRDI-based), licensed | Downstream product-data facade | Class crosswalks + property mapping (ECLASS properties ↔ CFG template fields) for digital-twin/PIM pipelines; respect ECLASS licensing — crosswalks reference their identifiers without republishing their content |
| **ETIM** | Technical product classes with features (electrotechnical origin, later expanded to building/HVAC); model published under an open data license | Downstream product-data facade | Same crosswalk pattern as ECLASS (with easier licensing); relevant where MH products enter building-product catalogs |
| **OmniClass** | Construction classification tables (incl. products table) for BIM | Downstream construction/BIM facade | Crosswalk FAM/ASM → OmniClass product entries so BIM objects can carry both; SectionHub supplies the configuration identity BIM libraries lack |
| **MasterFormat (CSI/CSC)** | Specification section numbering (storage/material-handling equipment appears in its divisions; exact sections per current edition) | Downstream spec-writing facade | Crosswalks let spec writers cite SectionHub identities inside spec sections; we never assign or restate section numbers |

**Boundary discipline:** external systems are never classification *inputs* (P3, E-102 generalized): a UNSPSC commodity or ECLASS class never determines a SectionHub code. Crosswalks are outputs — views for other ecosystems.

---

## 7. Vendor-Neutral Mapping Architecture

### 7.1 The crosswalk record (XMAP) — the one new architectural concept this document proposes

Extend the proven DSG pattern (registered mapping records, many-to-one, zero classification authority) into a general **external crosswalk record**:

```
XMAP := {
  xmap_id,                    # registered, immutable
  source_system + edition,    # e.g. UNSPSC vYY, ECLASS 14.0, OmniClass table/edition
  source_identifier,          # their code/IRDI/section — referenced, not republished
  target,                     # SectionHub object: FAM/ASM/ROL code, GSID, CMP/ASP
  mapping_type,               # EXACT | CLOSE | BROADER_THAN | NARROWER_THAN | RELATED
                              #   (after SKOS exactMatch/closeMatch/broadMatch/narrowMatch/relatedMatch)
  rationale + evidence,
  status, since_snapshot
}
```

Rules (proposed for Taxonomy Standard v1.1 as normative clauses):

- **X-1.** Crosswalks SHALL be typed (`EXACT`/`CLOSE`/`BROADER_THAN`/`NARROWER_THAN`/`RELATED`); untyped "equivalences" are prohibited because they silently lie in one direction. Direction is defined source-relative-to-target: `BROADER_THAN` means the external concept is broader than the SectionHub target. `CLOSE` exists because true cross-scheme equivalence is rare; defaulting to it rather than `EXACT` is the honest posture.
- **X-2.** Crosswalks SHALL be versioned against a named edition of the external system and SHALL NOT be auto-carried to new editions without review.
- **X-3.** Crosswalks SHALL NOT be inputs to classification, SHALL NOT mint codes, and SHALL NOT alter any SectionHub identity (the C-1 principle generalized).
- **X-4.** Crosswalks reference external identifiers under each external system's license terms; SectionHub SHALL NOT republish external content whose license restricts redistribution (e.g., ECLASS property texts, MasterFormat section text), and references even permissively licensed models (e.g., ETIM's open-data-licensed model) with attribution rather than republication. The same discipline applies to **DSG designation imports**: per-library license review before each import (F-5), with the source license recorded on the designation-system record.
- **X-5.** Manufacturer compatibility claims ride configuration facts (e.g., `CFG:HOL.pattern_id`), never brand-name crosswalks — neutrality is structural, not editorial.

### 7.2 Why this is the neutral architecture

Every mapping is: governed (Fast-track review), attributable (rationale + evidence), directional (typed), versioned (editions + snapshots), and powerless (X-3). A manufacturer, association, or software vendor can rely on crosswalks without granting any external system — or any competitor — authority over identity. This is the same neutrality trick the identity layers already perform internally, applied at the ecosystem boundary.

### 7.3 Manufacturer catalog mapping (the controlled version of "SKU harvesting")

The project never scrapes catalogs. Manufacturers self-submit under a signed data license that includes an **accuracy attestation**: MPN → (CMP/ASP + ConfigurationID) with public identity-bearing fields; confidential fields stay private (§8). The incentive: cross-reference data that survives their own renames, and neutral compatibility representation.

Because registry trust is the entire product, self-submitted data carries an integrity model, not just schema validation:

- **Provenance grading:** every registry row carries a provenance status — `SELF_REPORTED` (attested by the submitter, mechanically validated) vs `VERIFIED` (independently checked against drawings, samples, or third-party measurement). Consumers can filter on it; certification (§10.2) requires it to be visible on every certificate.
- **Dispute path:** any party MAY file a public data dispute (a proposal-workflow track) against a registry row; resolution is recorded, and corrections follow the erratum rule (deprecation-with-successor, never silent edits).
- **Early signals watched:** dispute rate and third-party mismatch reports are registry health metrics (failure mode F-16).

---

## 8. Public versus Proprietary Layers

Extends standard Part 12.1–12.2 with the ecosystem view. The principle: **the data is open; authority and assurance are the services.**

| Layer | Public (open license) | Governed / proprietary |
|---|---|---|
| Standards & rules | All normative documents, canonicalization rules, decision rules, warning catalog | — |
| Dictionaries & templates | All namespaces, enum tokens, configuration templates, rule tables | Unreleased drafts between snapshots |
| Registry data | GSID↔CGID↔geometry parameters, DSG mappings, XMAP crosswalks, snapshot archives | **Issuance authority** (only SMHE registers); manufacturer-confidential fields; evidence report contents (IDs public, contents by submitter's choice) |
| Software | TaxonomyExplorer, validators, schemas, conformance test suites | Third parties may build proprietary tools freely (Apache-2.0); the conformance *mark* is governed (§10.3) |
| Marks & names | — | "SMHE", "SectionHub", "GSID", certification and conformance marks (trademark-governed so identifiers stay resolvable to exactly one registry) |
| Revenue services | — | Registration services, certification program, premium API/SLA, membership; none of which gate access to the open data |

Two hard lines, forever: **(1)** no one ever pays to read the dictionaries or resolve an identifier; **(2)** no one can pay to change one.

---

## 9. Community Contribution Strategy

### 9.1 Contributor ladder

User → Issue reporter → Proposer (evidence-gated) → Reviewer → Working-group member → TC member. Each rung is earned by recorded work product (proposals, reviews, imports), not by affiliation. The ladder is the G1→G2 exit mechanism: the first TC is seated from people who climbed it.

### 9.2 Contribution surfaces, easiest first

1. **Golden tests and bug reports** against the Explorer (no domain expertise needed).
2. **Designation-table imports** (A2): well-specified, mechanical, high-value; each import PR is a complete contribution with visible impact.
3. **Geometry submissions** for legacy/orphaned profiles (feeds the used-rack wedge).
4. **Crosswalk proposals** (XMAP) for UNSPSC/OmniClass entries.
5. **Translations** of Explorer UI and definitions (dictionaries stay English-normative; translations are informative).
6. **Code proposals** — deliberately the *hardest* surface, because the D-1/D-7 gates are the product's immune system.

### 9.3 Culture mechanics

- Fields-first is enforced socially as well as procedurally: reviewers respond to "new code?" with "which existing code fails, and why?" — the CONTRIBUTING.md question — before any debate.
- Every rejection is a teaching document (REJECTIONS.md precedents), so the same argument is never had twice.
- Recognition is by record: decision documents name their proposers and reviewers; annual contributor credits in release notes.
- Academic engagement: canonicalization and section-property datasets are publishable research artifacts; invite civil/structural programs to use the registry as teaching data.
- Anti-burnout: the release train (quarterly) bounds the pace; nothing is urgent by design.

---

## 10. Future Certification and Registry Model

### 10.1 Three registries, one discipline

| Registry | Identities | Assurance offered |
|---|---|---|
| **Geometry** | GSID / CGID / DSG | "This profile is this exact canonical geometry; these designations are geometrically identical" |
| **Product** | CMP / ASP / CF / MPN / ALS / XMAP | "This part number resolves to this component/assembly in this exact configuration" |
| **Evidence** | TST / CRT | "This test/certification attaches to that exact configuration, at that snapshot" |

### 10.2 The certification concept: identity assurance, never performance

**"SectionHub Registered Configuration"** certifies exactly one thing — **record-existence assurance**: *the configuration description is registered, deterministic, and traceable*; a label or QR resolves to a ConfigurationID whose identity-bearing fields and provenance status (§7.3) are on record. Unless a certificate explicitly states that physical verification was performed (and by whom, under what terms), **no physical inspection is performed or implied** — the program attests the record, not the artifact. It never certifies load capacity, safety, or code compliance; those belong to testing labs, engineers of record, and programs like RMI's R-Mark certification. This division is the reason associations can adopt SectionHub without ceding anything: we certify *what the record says it is*, they certify *what it can do*. Blurring either line is a named failure mode (§11), and every certificate carries the §2.5 disclaimer language.

### 10.3 Software conformance mark

**"SectionHub Conformant"** for tools: produces byte-identical outputs for the golden test suite under a pinned snapshot, emits the standard warnings, never invents codes, never uses inference as authoritative classifier (AP-9). The conformance suite is public (anyone can self-test); the *mark* is licensed on passing, funding registry operations.

### 10.4 Registry operations at maturity

Quarterly snapshots (unchanged); public read API with the same snapshot pinning as file exports; issuance SLAs for registration services; independent archival deposits per §2.4; annual transparency report (issuance volumes, decisions, funding).

---

## 11. Risks, Failure Modes, and Anti-Patterns

Complementing the taxonomy anti-patterns (standard Part 14) with *ecosystem* failure modes. Each row: early signal → mitigation.

| # | Failure mode | Early signal | Mitigation |
|---|---|---|---|
| F-1 | **Bus factor / founder dependency** | All decisions still bootstrap-mode after SNAP-1.x | G1 exit criteria are public (§2.1); succession clause (§2.4); everything recorded so a successor can operate from the record |
| F-2 | **Vendor capture** | One employer dominates proposals/seats; codes start resembling one catalog | Anti-capture seat cap, recusal, disclosure (§3.1); P3/D-8 firewall; funding transparency (§2.3) |
| F-3 | **Code proliferation** | Dictionary growth >10%/yr; field-grade variation arriving as code proposals | D-1/D-7 gates; fields-first presumption; REJECTIONS.md precedents; growth is a watched metric (Part 12.5) |
| F-4 | **Scope creep into engineering judgment** | Requests to publish capacities, ratings, design tools | Non-goals clause (§1.4); E-104; certification limited to identity (§10.2) |
| F-5 | **Licensing entanglement** | Crosswalks republishing ECLASS/ETIM/MasterFormat content | X-4 (reference, never republish); legal review before each new external system |
| F-6 | **Fork fragmentation** | A vendor publishes a modified "GSID" registry | Open data + trademark-governed names (GOVERNANCE §8): forks may exist but cannot collide with the names; permanence makes the official registry the safest choice |
| F-7 | **Registry authority abuse** (or perceived) | Complaints about arbitrary issuance, pay-for-priority | Deterministic issuance procedures (§4.4 of the standard); transparency report; appeals via the proposal process |
| F-8 | **AI-era identity erosion** | LLM-based tools guessing codes at scale, polluting downstream data | AP-9 + conformance mark (§10.3) make "deterministic or not conformant" checkable; golden suites let anyone catch a guessing tool; the traceability UI (v0.4) is the public counterexample |
| F-9 | **Zombie standard** | No new proposals, snapshots ship empty, liaison contacts lapse | Adoption stages each deliver standalone value (§5.1) so stall ≠ death; A2 reference data keeps the registry useful even with zero community |
| F-10 | **Premature monetization** | Charging for data access; paywalling the Explorer | The two hard lines (§8) are constitutional-grade commitments; revenue only from authority/assurance services |
| F-11 | **Association friction** | RMI/SMA perceive turf encroachment | Complement-never-substitute posture (§6), stated in every liaison contact; never publish anything adjacent to performance |
| F-12 | **Demo-alias fossilization** | ZED/CHL/HSS still shipping in Explorer at v1.0 adoption conversations | Resolution is a recorded bootstrap-era (G1) decision and a G1 exit criterion (§2.1, §4.3); adoption stages A3+ SHALL NOT begin before resolution |
| F-13 | **Governance theater** | WGs and councils without work product | WG formation rule (§3.2); advisory bodies comment on real proposals only |
| F-14 | **Antitrust exposure** | Multi-vendor meetings without meeting rules; mark licensing terms negotiated privately | §2.5: open participation criteria, nondiscriminatory published terms, meeting rules in every agenda, counsel review at G2 entry |
| F-15 | **Liability from misread assurance** | Certificates or labels read as safety claims; registry data cited in an incident dispute | §10.2 attestation boundary (record-existence only, explicit no-inspection disclaimer); §2.5 disclaimers on every output; E&O insurance before certification pilots |
| F-16 | **Registry data corruption via self-submission** | Rising dispute rate; third-party mismatch reports; a certified configuration proven wrong in the field | §7.3 integrity model: provenance grading (SELF_REPORTED/VERIFIED), signed accuracy attestation, public dispute path with recorded resolution |

---

## 12. What Success Looks Like

Measurable, dated, and deliberately modest early — infrastructure adoption compounds late.

### Year 1 (by mid-2027)

- Demo aliases resolved by recorded bootstrap-era decision; Explorer aligned to seed dictionaries.
- `SNAP-1.x` released: seed dictionaries + canonicalization v1 + the A2 designation registry (AISC shapes plus at least one non-US library, scoped to sources whose licensing has been cleared per F-5; order of 10³ GSIDs with cross-library equivalences visible).
- G1 exit readiness measurably progressing: ≥3 sustained external contributors (each ≥2 merged evidence-gated contributions across ≥2 distinct quarters); first non-founder reviewer.
- The standard split executed per Part 15 and the [repository-structure](docs/repository-structure.md) migration steps 4–5: the three existing placeholders populated, `standards/Identifier_Standard.md` added, and the unified draft bannered as superseded.

### Year 3 (2029)

- TC seated (era G2); first-year decision log published; ≥2 working groups with real backlogs.
- 2–3 manufacturer pilot lines mapped (A3); first lab report citing ConfigurationIDs (A4).
- Liaison contact established with at least one of RMI/SMA scope committees (A5 begun).
- Crosswalks live to UNSPSC and one of ECLASS/ETIM/OmniClass under X-rules.
- Explorer conformance test suite public; one third-party tool passes it.

### Year 5 (2031)

- Taxonomy referenced in at least one industry-published document or association guideline.
- Certification pilot running (§10.2) with real registered configurations in the field (labels/QR resolving to the registry).
- ≥2 commercial software integrations consuming snapshots (rack configurator, WMS, or BIM library).
- Funding covers registry operations without any single source >40%.
- Order of 10⁴ GSIDs; used-equipment identification measurably working: third parties (dealers, inspectors, AHJs) logging orphaned-profile identifications against the registry at a steady rate (target: ≥100/year).

### Year 10 (2036)

- SectionHub identifiers appear routinely in RFQs, test reports, inspection reports, and BIM objects — measured as identifiers present in documents from ≥20 independent organizations per year — cited without explanation, the way a GTIN or a W12X50 is cited today.
- The standard is either approved as an American National Standard (developed under an ANSI-accredited process) or adopted/referenced by the relevant associations — whichever path the industry preferred; the taxonomy itself needed no rewrite to get there (the 30-year design horizon of the identity layers held).
- Registry permanence secured: independent archives, succession charter tested by audit, a decade of unbroken snapshot lineage.
- **The boring test** (aspirational, not a metric): nobody argues about the codes anymore. New engineers assume the registry has always existed. That is what winning looks like for infrastructure.

---

*Cross-references: normative rules in [standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md](standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md) (P/D/G/N/H/C rules, Parts 12–15); operating governance in [GOVERNANCE.md](GOVERNANCE.md); contributor process in [CONTRIBUTING.md](CONTRIBUTING.md); phase plan in [ROADMAP.md](ROADMAP.md); repository layout in [docs/repository-structure.md](docs/repository-structure.md).*
