# SectionHub Taxonomy Explorer

Open, vendor-neutral, **deterministic identity and classification infrastructure** for material-handling sections, components, assemblies, and configurations — a draft standard, seed code dictionaries, and a public reference application. Stewarded by SMHE (the project's registration authority); *SectionHub* is the platform, *TaxonomyExplorer* is this repository and its app.

**▶ Try the live Explorer:** <https://onelabchoice.github.io/TaxonomyExplorer/explorer/> — classify a section, component, or assembly; every result shows its decision trace, and the app refuses to guess when input is missing.

> **What this project does not do:** it makes **no performance, safety, load-capacity, or compliance claims**, and it is not affiliated with or a substitute for any standards body (AISC, AISI, RMI, SMA, GS1, or others) — it identifies and classifies, nothing more. See the [position paper](docs/position-paper-why-sectionhub.md).

## Status at a glance

| Artifact | Label | State |
|---|---|---|
| Unified standard | file `v0.1`; document titled toward its **v1.0 ratification target** (titles name targets, filenames name the draft series) | Canonical draft — the document of record |
| Split standards ([GSID](standards/GSID_2D_Standard.md), [MH Taxonomy](standards/Material_Handling_Taxonomy_Standard.md), [Code Dictionary](standards/Code_Dictionary_Standard.md)) | v2.0 / v1.0 targets | Verbatim split working copies; unified draft wins on divergence |
| Seed dictionaries ([dictionaries/](dictionaries/)) | `SNAP-1.0.0` | Drafted, **unreleased** — no snapshot has been cut |
| Explorer ([explorer/](explorer/)) | Phase 2 | **Live demo**; deliberately small demo dictionary subset `SNAP-0.1.0-DEMO`, with 3 labeled demo-code deviations tracked as an [open governance item](proposals/2026-07-03-phase1-demo-alias-deviations.md) |
| Example identifiers in all docs (`GS-004217`, `CMP-000482`, …) | — | **Illustrative only** — nothing has been registered |
| [LICENSE](LICENSE) | placeholder | Not yet finalized; no license granted; external PRs are not merged until it lands |

## Contents

| Path | What it is |
|---|---|
| **Standards** | |
| [standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md](standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md) | The full draft standard: identity layers, namespaces, code dictionary, decision rules, worked examples, Explorer specification, governance & adoption strategy (Parts 0–15) |
| [standards/GSID_2D_Standard.md](standards/GSID_2D_Standard.md) | Split working copy — the 2D geometry layer: SEC shape codes and rulings, CanonicalGeometryID, GSID, designation mapping, geometry boundary rules |
| [standards/Material_Handling_Taxonomy_Standard.md](standards/Material_Handling_Taxonomy_Standard.md) | Split working copy — domain MH above the geometry layer: hierarchy, ROL/ASM/FAM/CFG dictionaries, component/assembly/configuration identity, evidence layer, compatibility, worked examples |
| [standards/Code_Dictionary_Standard.md](standards/Code_Dictionary_Standard.md) | Split working copy — namespace model, code status lifecycle, proposal/deprecation rules, demo-code handling, dictionary CSV contracts |
| [dictionaries/](dictionaries/) | Seed dictionary CSVs (namespaces, section shapes, component roles, assembly types, product families, configuration groups), pinned to `SNAP-1.0.0` |
| **Application** | |
| [explorer/](explorer/) | The Explorer (Phase 2) — pure static, deterministic taxonomy navigation with rule traceability; [live here](https://onelabchoice.github.io/TaxonomyExplorer/explorer/), docs in [explorer/README.md](explorer/README.md) |
| [docs/demo-scenarios.md](docs/demo-scenarios.md) | Six audience walkthroughs (manufacturer, testing lab, software vendor, inspector, contributor, future certification) with JSON outputs in [examples/scenarios/](examples/scenarios/) |
| **Governance & process** | |
| [GOVERNANCE.md](GOVERNANCE.md) | Roles, decision rights, release train, industry participation, amendment process |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to propose codes and changes: evidence gates, proposal workflow, determinism & AI policy |
| [docs/proposal-workflow.md](docs/proposal-workflow.md) | The proposal lifecycle end-to-end, with templates in [proposals/](proposals/) |
| [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) | Contributor Covenant 2.1 plus project-specific standards for a vendor-neutral standards effort |
| **Strategy & background** | |
| [docs/position-paper-why-sectionhub.md](docs/position-paper-why-sectionhub.md) | Public position paper: the identity gap SectionHub fills, and how it complements — never substitutes for — AISC, AISI, RMI, SMA, GS1, and the classification systems |
| [SECTIONHUB_STRATEGIC_ARCHITECTURE.md](SECTIONHUB_STRATEGIC_ARCHITECTURE.md) | 10-year ecosystem strategy: governance eras, adoption roadmap, external-standards relationships, crosswalk architecture, certification model, failure modes |
| [docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md](docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) | Constitutional design for the long-term public registry: object model, immutability doctrine, lifecycle, snapshots, crosswalks, governance boundaries, anti-patterns, roadmap |
| [docs/SECTIONHUB_DATA_SUBMISSION_MODEL.md](docs/SECTIONHUB_DATA_SUBMISSION_MODEL.md) | Constitutional model for registry submissions: roles, evidence minimums, trust/provenance grades, review paths, refusal rules, corrections, disputes, staged S0–S5 program |
| [docs/SECTIONHUB_BOOTSTRAP_PLAN.md](docs/SECTIONHUB_BOOTSTRAP_PLAN.md) | Practical bootstrap execution: the first ~110 and 500 records, curation vs import, taxonomy-explosion defenses, readiness milestones, one-year quarter-by-quarter roadmap |
| [ROADMAP.md](ROADMAP.md) | Seven-phase plan from foundation to formal governance |
| [docs/repository-structure.md](docs/repository-structure.md) | Target repository layout for the data layer and future Explorer application, with rationale and migration plan |

## How to propose changes

Taxonomy, dictionary, and mapping changes go through a public, evidence-gated proposal process — no private channel needed. Copy the matching template into a new GitHub issue: [code changes](proposals/TEMPLATE-code-change.md) (add/deprecate/alias codes), [taxonomy changes](proposals/TEMPLATE-taxonomy-change.md) (template fields, enum tokens, rule changes), or [crosswalk changes](proposals/TEMPLATE-crosswalk-change.md) (designation imports and external-classification mappings). The full lifecycle — evidence gates, who decides what, acceptance/deferral/rejection, and how decisions propagate to dictionaries, standards, the Explorer, and the changelog — is in [docs/proposal-workflow.md](docs/proposal-workflow.md). Two ground rules save everyone time: variation is presumed to be a **field, not a code**, until proven otherwise, and rejections recorded in [REJECTIONS.md](REJECTIONS.md) are binding precedent.

## Why the Explorer is different

The Explorer is **deterministic and traceable by construction**: every classification is a pure function of your answers plus versioned dictionaries ([explorer/data/](explorer/data/)) and a machine-readable rule table ([explorer/rules/question_nodes.csv](explorer/rules/question_nodes.csv)). Each result shows a **Decision trace** — the exact rule IDs applied, the dictionary rows used, the reason, and the standard reference — and embeds it in the JSON output. When required input is missing, the engine **refuses to guess** (warning `W-201`, status `INDETERMINATE`) and states what information is needed. The current dictionaries are an honestly-labeled demo subset (`SNAP-0.1.0-DEMO`), not the final standard; known deviations are tracked as an [open governance item](proposals/2026-07-03-phase1-demo-alias-deviations.md). Dictionary and rule changes go through the proposal process in [CONTRIBUTING.md](CONTRIBUTING.md) — never through the app.

## Architecture in one paragraph

Identity is split into **separate but compatible layers**: canonical 2D section geometry (`SEC:` shape codes → CanonicalGeometryID → **GSID**), domain-scoped product classification (`FAM:` / `ASM:` / `ROL:` codes), content-addressed **ConfigurationIDs** for components and assemblies, a zero-authority naming layer (manufacturer parts and aliases), an evidence layer (tests and certifications), and immutable governance snapshots. GSID identifies canonical 2D cross-section geometry **only** — assemblies, products, and SKUs are classified by family, assembly type, component roles, and configuration identity, never by GSID.
