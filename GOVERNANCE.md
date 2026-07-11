# Governance

This document defines who decides what in the SectionHub Taxonomy project, and how. It implements Part 12 of [the Taxonomy Standard draft](standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md) and is designed for the transition from single-maintainer stewardship to formal industry governance (Roadmap Phases 5–7).

## 1. Guiding principles

1. **Rule-based decisions.** Classification and dictionary decisions SHALL be justified by the published decision rules (standard Part 5: D-1…D-9, G-3; principles P1–P9). A decision that cannot cite its rule is out of order.
2. **Determinism.** A governance decision SHALL NOT introduce inference-based classification into the authoritative path. The rule engine, dictionaries, and canonicalization rules are the only classifiers.
3. **Immutability.** Published codes, identifiers, and snapshots are never edited, reused, or re-meant. Corrections are deprecation-with-successor.
4. **Vendor neutrality.** No manufacturer, brand, or SKU structure has naming or classification authority. Commercial names enter only through the alias/part naming layer.
5. **Openness.** Proposals, decisions, rationale, and rejections are public. Anyone may propose; the gates are evidential, not social.

## 2. Roles

| Role | Responsibilities | How obtained |
|---|---|---|
| **Contributor** | Proposals, PRs, review comments | Participating (see CONTRIBUTING.md) |
| **Maintainer** | Repository health, triage, docs/tooling PR approval, release mechanics | Appointed by the Technical Committee for sustained quality contribution |
| **Technical Committee (TC)** | Dictionary decisions, template changes, decision-rule interpretation, standard revisions | Appointed per §6; the authoritative body for taxonomy content |
| **Registry Operator (SMHE)** | Issues registered identifiers (`GS-`, `CMP-`, `ASP-`, `DSG-`, `MPN-`, `ALS-`, `TST-`, `CRT-`); cuts and publishes snapshots | Held by SMHE; not delegated |
| **Industry Advisory Member** | Non-binding review of proposals affecting their sector (rack, shelving, decking, structural libraries) | Organizational seat per §7 |

**Bootstrap clause:** until Roadmap Phase 7 (Formal Governance) is reached, the founding maintainer acts as the TC and Registry Operator. All decisions made under the bootstrap SHALL still be recorded per §5 so the audit trail is continuous when the full TC is seated.

## 3. Decision rights

| Change class | Examples | Decided by | Method |
|---|---|---|---|
| Editorial | Typos, formatting, non-normative docs | Maintainer | PR review; lazy consensus (72 h) |
| Lightweight dictionary data | New enum token; informative template field | TC | Lazy consensus (14 days) with rule citation |
| **Code changes** | New/deprecated `SEC:`/`ROL:`/`ASM:`/`FAM:`/`CFG:` codes; identity-bearing template fields | TC | Recorded vote, simple majority; D-1/D-7 evidence gates are preconditions, not subjects of the vote |
| Designation-system imports | New `DSG-` system; bulk table import | TC + Registry Operator | Recorded vote + registry validation |
| **Normative rule changes** | Decision rules, canonicalization rules, namespace model, identity-layer boundaries (including the GSID 2D-only boundary), this document | TC | Two-thirds supermajority **after a 30-day public comment period** |
| Snapshot releases | Cutting `SNAP-x.y.z` | Registry Operator | Release train per §5; content is whatever the TC has accepted |
| Code of Conduct enforcement | — | Maintainers (excluding involved parties) | Per CODE_OF_CONDUCT.md |

The **GSID boundary** (GSID identifies canonical 2D section geometry only; assemblies, products, and SKUs never receive GSIDs) is a constitutional rule: any proposal to weaken it requires the supermajority + comment-period path and SHOULD be treated as presumptively rejected.

## 4. How decisions are made

- **Evidence gates first.** A proposal that does not meet its CONTRIBUTING.md evidence requirement is returned at triage; it never reaches a vote.
- **Fields-first presumption.** The default answer to "new code?" is "new field or token" (P5). The proposal must overcome the presumption.
- **Precedent binds.** Rejections recorded in `REJECTIONS.md` are binding on future proposals unless materially new evidence is presented.
- **Rationale is mandatory.** Every accepted or rejected proposal gets a written decision citing the rules applied. AI tools MAY assist analysis; no decision is valid without a named human decision-maker and rule-based written rationale.
- **Deadlock:** if the TC cannot reach the required threshold in two consecutive cycles, the proposal issue is parked as **DEFERRED** — a proposal state, with **no dictionary row created** — or closed without prejudice (for rule changes). Only TC-accepted proposals produce `RESERVED` dictionary rows.

## 5. Records, releases, and backward compatibility

- **Decision records:** one file per decision under `proposals/`; rejections summarized in `REJECTIONS.md`; changes summarized in `CHANGELOG.md`.
- **Release train:** snapshots are cut on a quarterly cadence (off-cycle only for security or legal necessity). Accepted codes sit as `RESERVED` until their activating snapshot; nothing becomes `ACTIVE` between snapshots.
- **Versioning:** `SNAP-<semver>` — MAJOR for breaking rule changes (e.g., a new canonicalization major version), MINOR for additive codes/templates, PATCH for deprecation-based corrections. MAJOR releases SHALL ship migration notes and a dual-derivation window.
- **Pre-release gates (machine-checked):** unique codes per namespace; no status regressions (`ACTIVE` may move only to `DEPRECATED`-with-successor, or to `SUPERCLASS` via a recorded normative-rule-change decision that renders the code non-assignable per rule N6 — the OCS precedent); no changed definition text on published rows; no bare unqualified codes in normative text; enum tokens are `UPPER_SNAKE`; every new row cites its proposal.
- **Permanence:** all historical snapshots remain permanently downloadable. The registry never serves only "latest".

## 6. Technical Committee composition

- Three to nine members, appointed initially by the founding maintainer and thereafter by the sitting TC.
- **Anti-capture rule:** no single employer or corporate family may hold more than one-third of TC seats.
- Members SHALL disclose employer and material commercial interests; a member SHALL recuse from decisions where their employer's product line is the direct subject.
- Seats are personal, not corporate: a member who changes employers keeps their seat subject to the anti-capture rule.

## 7. Industry participation

- Trade associations, standards bodies, manufacturers, and testing laboratories MAY hold **Industry Advisory seats**: they receive proposal notifications in their sector and their review comments are recorded with the decision, but votes rest with the TC.
- Liaison relationships with existing industry standards efforts (RMI/MHI-scope, SMA-scope, structural-section libraries) SHOULD be established as the project matures (Roadmap Phase 6); alignment mappings live in the standard's compatibility clauses, not in side agreements.
- Participation confers **no naming authority**: advisory status never exempts a proposal from the evidence gates or the vendor-neutrality principle.
- Anyone proposing a change that affects their own commercial products SHALL disclose the affiliation in the proposal.

## 8. Registry authority and forks

- Registered identifiers and snapshots SHALL be issued only by the SMHE Registry Operator. Anyone MAY compute the derived content-addressed identifiers (`CG…`, `CF…`) from published rules — that reproducibility is a feature, not a loophole for registration.
- The dictionaries and standard text are intended to be openly licensed (Apache-2.0 for code, CC-BY-4.0 for data and standard text, per standard Part 12.1); the `LICENSE` file is pending finalization and no license is granted until it lands. Once licensed, forks are permitted by license but SHALL NOT publish modified registries under the project's names or identifier prefixes ("SMHE", "SectionHub", "GSID"), so that an identifier's meaning is always resolvable to exactly one registry.

## 9. Amending this document

Amendments follow the **normative rule change** path in §3: two-thirds TC supermajority after a 30-day public comment period, recorded like any other decision. During the bootstrap period, amendments additionally require the comment period to have received no unresolved objection from any Industry Advisory Member.
