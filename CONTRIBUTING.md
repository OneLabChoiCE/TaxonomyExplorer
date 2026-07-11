# Contributing to the SectionHub Taxonomy

Thank you for helping build a deterministic, vendor-neutral classification standard for material-handling and industrial-storage equipment.

## The contract (short version)

The project is deterministic.

- **No AI-generated classifications are accepted without documented rules and human-authored rationale.**
- **All new codes require: rationale, examples, and backward-compatibility review.**
- **Classification must be reproducible:** the same inputs against the same snapshot must always produce the same result.

Everything below elaborates these three commitments. Normative background: [the Taxonomy Standard draft](standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md), especially Part 3 (code dictionary), Part 5 (decision rules), Part 12 (adoption strategy), and Part 14 (prohibited anti-patterns). Governance authority and decision rights are defined in [GOVERNANCE.md](GOVERNANCE.md). All participants are bound by the [Code of Conduct](CODE_OF_CONDUCT.md).

## What you can contribute

| Contribution | Vehicle | Decided by |
|---|---|---|
| New code (`SEC:` / `ROL:` / `ASM:` / `FAM:` / `CFG:`) | Proposal issue → PR after acceptance | Technical Committee |
| New enumeration token (e.g., a new `CFG:EDG` edge style) | Proposal issue → PR after acceptance | Technical Committee (lightweight) |
| New or changed configuration-template field | Proposal issue → PR after acceptance | Technical Committee |
| Designation-system import (AISC/EN/GB/T/JIS/AS-NZS tables) | Proposal issue → data PR | Technical Committee + Registry |
| Geometry submission for GSID registration | Registry submission (public parameters only) | Registry Operator |
| Erratum (wrong definition, broken mapping) | Erratum issue | Maintainers (editorial text) / Technical Committee (anything touching a published dictionary row or normative meaning) |
| Documentation, examples, typo fixes | Direct PR | Maintainers |
| Explorer application code (Roadmap Phases 3–4) | Direct PR | Maintainers |

## Before you propose a new code

1. **Fields first.** Every proposal is presumed to be a configuration field or enumeration token until proven otherwise (standard rule P5). Finish, edge condition, wire diameter, hole pattern, support count, span direction, and similar variation belong in structured fields — never in new codes.
2. **Name the code that fails.** Your proposal must identify the existing code that cannot represent your case, and explain exactly why (which rule blocks it).
3. **Check precedent.** Search closed proposals and the rejection log (`REJECTIONS.md`). Rejected precedents (e.g., `CFS`, `PIP`, `TUB` as shape codes) are binding unless new evidence overturns them.
4. **Check the anti-pattern list** (standard Part 14). Proposals exhibiting AP-1 through AP-13 are rejected on sight.

## Evidence requirements by proposal type

These are the hard acceptance gates from the standard's decision rules. Proposals missing the required evidence are returned without review.

| Proposal | Required evidence |
|---|---|
| New `SEC:` shape code | The **D-1 case**: demonstrate the candidate's cross-section topology cannot be described by any existing code's canonical parameter schema, nor by a compatible schema extension; name the closest existing code and why it fails; supply **at least two independent real-world instances** (different manufacturers or standards) |
| New `FAM:` product family | The **D-7 case**: a market/system scope distinction recognized at industry-standard level (e.g., a distinct RMI/SMA specification scope) — not a manufacturer product line |
| New `ROL:` component role | A functional role in assemblies that no existing role covers, with at least two assembly types that would use it |
| New `ASM:` assembly type | A structurally/functionally distinct kind of assemblage, with the component-vs-assembly test (standard §4.9) applied |
| New enum token | The physical condition it names, and why no existing token covers it |
| New template field | Field definition, units, controlled values, and an explicit **identity-bearing vs informative** declaration with rationale |
| Erratum | The defect, plus a fix expressed as **deprecation-with-successor** — never in-place edits of published meaning |

## Proposal workflow

1. **Open a typed proposal issue.** GitHub issue forms per proposal type are planned; until they land, copy this skeleton into a new issue: *Proposal type / Namespace / Proposed code or token / The existing code that fails and why / Rule cited (D-1, D-7, …) / Evidence (instances, sources) / Identity-bearing or informative (for fields) / Backward-compatibility impact.* One proposal per issue.
2. **Triage** (monthly): maintainers verify the evidence gate is met and label the proposal; incomplete proposals are returned with the missing item named.
3. **Decision** (quarterly, or sooner for lightweight items): the Technical Committee accepts or rejects with recorded rationale. Accepted codes enter the dictionary as `RESERVED`. Rejections are recorded in `REJECTIONS.md`.
4. **Pull request:** after acceptance, submit the dictionary row(s) referencing the proposal issue. Dictionary PRs without an accepted proposal are closed.
5. **Activation:** `RESERVED` codes become `ACTIVE` only at the next snapshot release (see GOVERNANCE.md — release train). No code is usable in registered records before its activating snapshot.

## Determinism and AI policy

- You MAY use AI tools to research, draft text, or prepare proposals.
- Every taxonomy change SHALL carry **human-authored rationale that cites the applicable decision rule** (D-1…D-9, G-3, P-rules). "The model suggested it" is not rationale; a proposal whose reasoning cannot be traced to the published rules is rejected regardless of how it was produced.
- Every classification outcome SHALL be reproducible from the published dictionaries, canonicalization rules, and decision tables. Contributions to classification logic SHALL be expressible as rule/decision-table data — inference-based classifiers are prohibited in the authoritative path (standard AP-9).
- The proposing human is accountable for the content they submit, AI-assisted or not.

## Backward compatibility (non-negotiable)

- Published codes and identifiers are **never deleted, reused, or re-meant** (standard rules N7, P8).
- Corrections are made by **deprecation-with-successor**, effective at a named snapshot.
- Every dataset row and tool output pins the `SnapshotID` it was produced under; historical snapshots remain permanently available.
- Any PR that edits the meaning of **any published dictionary row** in place — whatever its status (`ACTIVE`, `SUPERCLASS`, `RESERVED`, `DEPRECATED`, `REJECTED`) — will be closed; file an erratum instead.

## Mechanics

- **Dictionary format:** the authoritative files are the populated snake_case CSVs under `dictionaries/` — `namespaces.csv`, `sec_codes.csv`, `rol_codes.csv`, `asm_codes.csv`, `fam_codes.csv`, `cfg_groups.csv` (one per namespace, per standard Part 12.3). The empty PascalCase files (`ShapeCodes.csv`, `ComponentRoles.csv`, `ProductFamilies.csv`, `AssemblyTypes.csv`) are dead scaffolding pending removal; PRs against them are closed. Keep the existing column headers; codes are 3-char uppercase alpha, unique within their namespace, and always written namespace-qualified in prose (`SEC:OCL`, never bare `OCL`).
- **Enumeration values** are `UPPER_SNAKE` tokens, never 3-char codes.
- **Normative language:** use SHALL / SHOULD / MAY in rule statements; keep explanation in plain prose.
- **Commits/PRs:** one logical change per PR; reference the proposal issue (`Proposal: #123`); sign off your commits (`git commit -s`, Developer Certificate of Origin).
- **Licensing:** the intended split (standard Part 12.1) is Apache-2.0 for application code and CC-BY-4.0 for dictionaries, templates, and standard text. **The `LICENSE` file is not yet finalized; external contributions will not be merged until it is**, so that every contribution lands under defined terms. Once finalized, contributing means you license your contribution under the license that applies to the files you changed (DCO sign-off certifies this).

## Fast rejections

To save everyone time, the following are declined without committee review:

- codes derived from manufacturer, brand, series, or SKU names;
- codes encoding dimensions, gauges, counts, or finishes;
- proposals to edit or reuse a published code or identifier;
- classification logic that requires inference, scoring, or model judgment to produce a code;
- proposals whose only justification is an existing commercial catalog structure;
- bulk SKU dumps (this project deliberately avoids SKU harvesting — submit the underlying geometry/configuration instead).
