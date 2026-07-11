# Why SectionHub Exists

**A position paper on the gap between existing standards and deterministic identity in material handling.**

**Status:** public draft, 2026-07-11. This is an independent open project. SectionHub is **not affiliated with, endorsed by, or a substitute for** any organization or standard named in this document; all names and marks belong to their owners, and nothing here represents the positions of the organizations discussed. Statements about external standards describe, in general terms, what they publicly set out to do; consult the standards themselves for authoritative scope.

---

## 1. Executive summary

Material handling has excellent standards for **how to design** steel structures (AISC, AISI), **how to design, test, and use** racks and storage equipment (RMI- and SMA-scope ANSI standards), **how to identify trade items** in commerce (GS1), and **how to categorize products** for procurement, product data, and construction documentation (UNSPSC, ECLASS, ETIM, OmniClass, MasterFormat). What the industry does not have is a shared, deterministic way to answer a more basic question: ***what, exactly, is this thing?*** — asked of a roll-formed cross-section, a punched column, a wire deck configuration, or the specimen a test report describes.

SectionHub is an attempt to build that missing layer: **open, vendor-neutral, deterministic identity and classification infrastructure** for sections, components, assemblies, configurations, and the evidence records that attach to them. It complements the standards above — it is designed to import their designations as mapping records, crosswalk to their categories, and cite their test protocols — and it does not substitute for any of them. It defines no design rules, rates no capacities, and certifies no safety. It identifies and classifies, reproducibly, in public.

## 2. The naming problem in material handling

Consider one roll-formed rack upright profile. In practice it is:

- a different part number at every manufacturer that rolls something geometrically equivalent;
- a marketing name at every dealer, subject to rebranding and acquisition churn;
- a hand-typed description on purchase orders ("teardrop upright, 3×1.63, 14 ga" — in a dozen inconsistent phrasings);
- an unidentifiable legacy profile in every used-equipment transaction, post-installation inspection, and damage assessment, where the original catalog may no longer exist;
- and, in test documentation, whatever the lab was told to call it — so when the name changes, the link between the physical article and its evidence quietly breaks.

The failure is not that anyone is careless. It is that **no shared identity infrastructure exists at the level where engineering equivalence lives**: the canonical cross-section, and the exact as-built configuration. Vehicles have VINs. Publications have DOIs. Trade items have GTINs. A cross-section geometry, or a specific wire-deck configuration, has — a name someone made up, valid until they change it.

## 3. What AISC and AISI solve

AISC publishes structural steel design specifications and maintains shape designations and a shapes database; AISI publishes the North American specification for cold-formed steel design and its associated nomenclature. Between them, they give the industry **design rules** and, for standard hot-rolled and generic cold-formed shapes, **designation vocabularies**: "W12X50" is meaningful to every structural engineer.

What they do not set out to provide — because it is not their job — is identity infrastructure for the space material handling actually lives in: proprietary roll-formed profiles that appear in no published shape table; a manufacturer-independent way to say two differently-named profiles are geometrically the same; or identity for configured, assembled products. A designation system names entries in its own table. It does not name everything, and it does not arbitrate equivalence across tables.

**SectionHub's relationship:** designation systems import as mapping records (many designations → one geometry identity), and design specifications are cited as design-basis references in evidence records. SectionHub restates no design provision and maps to these systems; it does not substitute for them.

## 4. What RMI and SMA solve

The RMI- and SMA-scope ANSI standards (for example ANSI MH16.1 for industrial steel storage racks, MH16.3 for cantilevered storage racks, MH26.2 for rack decking, and the SMA-scope storage-equipment standards) define **how products in this industry are designed, tested, and used**, and RMI operates the R-Mark certification program for conformance with its design and testing standards. These are the authorities on whether rack and storage equipment is engineered correctly.

What they leave to manufacturers — again, appropriately — is **naming**. The standards say how to test an upright frame; they do not issue identities for specific column profiles or deck configurations, and they do not maintain a public registry that survives catalog renames. Notably, the test-based philosophy in decking standards (capacities established by testing specific configurations) presumes exactly the thing that has no public identifier: *the specific configuration*.

**SectionHub's relationship:** complement, never substitute. Product families and assembly types align with these standards' scopes; test protocols are what evidence records cite; conformance certification remains entirely with the existing programs. SectionHub adds the identity those test reports can bind to.

## 5. What the commerce, procurement, and construction classifications solve

- **GS1** provides commerce identification and data standards — trade items (GTIN), parties and locations (GLN), master-data synchronization (GDSN). A GTIN identifies *a trade item*: the thing as sold. It is governed issuance with permanent, non-reusable identifiers — a model worth learning from — but it does not describe engineering identity: two GTINs may be the same configuration, and one catalog item may span many.
- **UNSPSC** is a four-level procurement hierarchy (segment → family → class → commodity). It answers "what budget category is this?" — coarse relative to engineering identity, and silent on geometry and configuration.
- **ECLASS** is an industrial product classification with property lists, used in product-data and digital-twin pipelines; its content is licensed. **ETIM** provides technical product classes with features (electrotechnical origin, later expanded toward building trades); its classification model is published under an open data license. Both describe products with properties; neither issues deterministic identities for cross-sections or as-built configurations, and neither adjudicates whether two manufacturers' entries are the same physical thing.
- **OmniClass** and **MasterFormat** organize construction information — classification tables for BIM on one side, specification section numbering on the other. They tell documents where product information belongs; they do not identify the products' engineering content.

**SectionHub's relationship:** these are downstream facades reached by governed, typed crosswalk records — "this SectionHub family maps (broader-than) to this UNSPSC commodity," "this configuration carries this GTIN as a naming-layer record." Crosswalks reference external identifiers under their owners' license terms and are never inputs to classification.

## 6. What manufacturer SKUs solve

Manufacturer part numbers and SKUs are genuinely good at what they exist for: order entry, internal traceability, pricing, and warranty within one company's systems. No proposal here asks manufacturers to abandon them, and SectionHub claims no authority over anyone's catalog.

Their limits are structural, not accidental: part numbers are scoped to one issuer, so they cannot express cross-manufacturer equivalence; they follow marketing and acquisition cycles, so they do not survive renames; and they identify catalog entries, not configurations — the same SKU can quietly span a specification change, which is precisely the case that breaks test-report traceability.

**SectionHub's relationship:** part numbers and commercial names live in a dedicated **naming layer** — records that point *at* classified objects and carry zero classification authority. Manufacturer naming is preserved, cross-referenced, and firewalled from identity.

## 7. What none of them fully solve

| Need | Closest existing tool | Why it falls short |
|---|---|---|
| Manufacturer-independent identity for a cross-section geometry | Designation systems (AISC/EN/GB-T/JIS/AS-NZS tables) | Cover only their own published tables; no identity for proprietary profiles; no cross-table equivalence arbitration |
| Identity for a specific as-built configuration (deck, frame, connection set) | Manufacturer SKUs | Issuer-scoped, rename-fragile, spec-drift-prone |
| Classification that two parties compute identically | Category systems (UNSPSC/ECLASS/ETIM/OmniClass) | Human-judgment placement into categories; no deterministic, rule-traceable resolution |
| Evidence bound to what was physically tested | Test reports citing catalog names | The name is the weakest link; it changes, and the binding dies |
| A public registry whose identifiers never change meaning | — | None known to the authors for this domain |

Each system above is good at its own layer. The gap is the layer none of them claim: **deterministic engineering identity**.

## 8. SectionHub as the deterministic identity layer

SectionHub's architecture (defined in the [standards documents](../standards/GSID_2D_Standard.md) in this repository) is a set of separate, linked identity layers:

- **Section geometry:** shape topology codes (`SEC:`) → a content-addressed canonical-geometry fingerprint (CGID) → a stable registered **GSID**.
- **Product classification:** product family (`FAM:`), assembly type (`ASM:`), component role (`ROL:`) — orthogonal, namespaced dictionaries.
- **Configuration identity:** a **ConfigurationID**, computed as a hash of declared identity-bearing fields — the deterministic name for "this exact as-built thing."
- **Naming layer:** manufacturer part numbers, aliases, GTINs — pointers with no classification authority.
- **Evidence layer:** test and certification records that reference objects *plus their ConfigurationIDs*.
- **Governance:** immutable, versioned snapshots; published rules; every classification traceable to a rule row.

Two properties make this infrastructure rather than another catalog: **determinism** (same inputs and same published rules produce byte-identical results, verifiable by anyone — the public [Explorer](../explorer/README.md) demonstrates this, including its refusal to guess when input is missing) and **immutability** (published identifiers are never reused or re-meant; corrections are deprecation-with-successor, so a 2026 identifier still resolves in 2036).

## 9. Why GSID is like a DOI for section geometry

A DOI does one narrow thing extraordinarily well: it gives a document a permanent, opaque, registered identifier designed to keep resolving regardless of publisher reshuffling. GSID aims at the same narrow excellence for canonical 2D cross-section geometry:

- **Registered and permanent** — issued once, never reused, resolving to a canonical geometry record.
- **Opaque** — no dimensions encoded in the identifier, so corrections never orphan it.
- **Equivalence-arbitrating** — many designations and many manufacturers' profiles that are geometrically identical (within published canonicalization rules) resolve to *one* GSID; cross-library equivalence falls out of the geometry itself.
- **Reproducible without permission** — the canonical-geometry fingerprint under a GSID is content-addressed: anyone with the published rules can compute it and verify a claimed identity offline.

The analogy has limits — a DOI names an artifact, a GSID names an equivalence class of geometry — but the social function is the same: a citation that outlives every name attached to it.

## 10. Why assemblies need configuration identity, not GSID

It is tempting to stretch a successful identifier: give the wire deck a GSID too. SectionHub's rules prohibit this, and the prohibition is one of its most important design decisions. A GSID identifies canonical 2D cross-section geometry **only**. A deck, frame, or shelving unit has no cross-section constant along any axis — there is nothing to canonicalize, so a "deck GSID" would be an arbitrary label wearing a deterministic costume, and it would destroy the property that makes GSID trustworthy.

What an assembly needs is different: identity for *the assemblage* — which components in which roles, how many supports, which edge condition, which joining method. That is a **ConfigurationID**: a hash over declared identity-bearing fields. It is deterministic (same configuration, same identifier, computed by anyone), it collapses correctly (ten identical specimens are one configuration), and it changes exactly when the physical configuration changes — not when the marketing name does. Sections get geometry identity; assemblies get configuration identity; the two never blur.

## 11. How public dictionaries and rule traceability help adoption

Standards adoption is a trust problem before it is a technical one. SectionHub's answer is to make trust checkable:

- **The dictionaries are public data** — every code, definition, status, and rule table in versioned files, free to read and resolve, with the stated intent to keep them that way.
- **Every classification shows its work.** The public Explorer emits a decision trace: which rule row fired on which answer, which dictionary rows were used, which clause of the standard it comes from.
- **The system refuses to guess.** Missing input halts classification with a named warning and a statement of what is needed — because a guessed identifier is worse than none.
- **Deviations are surfaced, not hidden.** The current demonstration dictionaries deliberately deviate from the seed dictionaries in three codes; those deviations are labeled in the data, displayed in the tool, and tracked as an open governance item.
- **Changes go through a public, evidence-gated [proposal workflow](proposal-workflow.md)** with recorded decisions and binding rejection precedents — no private channel required.

An engineer evaluating SectionHub does not have to take a classification on faith: given the published rules and dictionaries, they can recompute it. (Registry-issued serials like GSID are governance promises — issuance and non-reuse — verified against the published snapshots rather than recomputed.)

## 12. Relationship to certification and evidence records

Test and certification records are where identity failure costs the most: evidence is expensive, and evidence bound to a mutable name is evidence with an expiration date nobody chose. In SectionHub's model, tests and certifications reference the object **and its ConfigurationID**, under a pinned snapshot. Renames stop mattering; replicate specimens stop multiplying identities; "is this report about *this* deck?" becomes a computable question.

The boundary is strict and permanent: any future SectionHub registration or certification activity attests **record existence and traceability only** — that an identifier resolves to a registered, deterministic description. It does not and will not attest load capacity, safety, code compliance, or fitness for purpose. Those judgments belong to testing laboratories, engineers of record, building officials, and the established conformance programs of the industry's standards bodies.

## 13. What SectionHub explicitly does not do

- It does **not** define design rules, load tables, or safety factors — and does not restate anyone else's.
- It does **not** rate capacity or certify safety, conformance, or fitness.
- It does **not** replace or compete with AISC, AISI, RMI, SMA, GS1, or any classification system named here; it maps to them.
- It does **not** claim authority over manufacturer catalogs or require anyone to rename anything.
- It does **not** paywall its data; identifiers are free to resolve, and no one can pay to change one.
- It does **not** classify by inference: no machine-learning guesswork sits in the authoritative path, ever.
- It does **not** harvest SKUs; manufacturer data enters only by voluntary, attributed submission.

## 14. Adoption path

The project is deliberately staged so each step is useful on its own (details in the [strategic architecture](../SECTIONHUB_STRATEGIC_ARCHITECTURE.md)):

1. **Today:** a public, deterministic, rule-traceable [Explorer](../explorer/README.md) and public draft standards — inspect them, break them, file issues.
2. **Reference data:** designation-system imports so the registry answers real lookup questions ("what is geometrically identical to this designation?"), subject to per-source licensing review.
3. **Pilots:** a few manufacturers mapping product lines through the naming layer; a testing lab citing ConfigurationIDs in reports.
4. **Liaison and integration:** relationships with the relevant industry bodies pursued as complement-never-substitute; software consuming versioned snapshots.

To participate now: use the Explorer, read the standards, and open a proposal through the [public workflow](proposal-workflow.md). Affiliation with a manufacturer is welcome and must simply be disclosed.

## 15. Closing statement

Infrastructure succeeds when it becomes boring. The ambition here is not a new brand in material handling; it is that, some years from now, a cross-section or a deck configuration is cited by its identifier as unremarkably as a paper is cited by its DOI — while AISC and AISI keep defining how steel is designed, RMI and SMA keep defining how storage equipment is engineered and tested, GS1 keeps identifying trade items, and every classification system keeps serving its layer. SectionHub's only job is the layer under all of them that nobody owned: saying, deterministically and permanently, *what the thing is*.

---

*Repository: [README](../README.md) · Standards: [GSID](../standards/GSID_2D_Standard.md), [MH Taxonomy](../standards/Material_Handling_Taxonomy_Standard.md), [Code Dictionary](../standards/Code_Dictionary_Standard.md) · Governance: [GOVERNANCE.md](../GOVERNANCE.md) · Strategy: [SECTIONHUB_STRATEGIC_ARCHITECTURE.md](../SECTIONHUB_STRATEGIC_ARCHITECTURE.md)*
