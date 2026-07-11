# SectionHub Taxonomy Explorer

Working repository for the **SMHE / SectionHub Material Handling Taxonomy Standard** and the public, deterministic **Taxonomy Explorer** application built on it.

## Contents

| Path | What it is |
|---|---|
| [standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md](standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md) | The full draft standard: identity layers, namespaces, code dictionary, decision rules, worked examples, Explorer specification, governance & adoption strategy (Parts 0–15) |
| [dictionaries/](dictionaries/) | Seed dictionary CSVs (namespaces, section shapes, component roles, assembly types, product families, configuration groups) matching the draft's Part 3 tables, pinned to `SNAP-1.0.0` |
| [standards/GSID_2D_Standard.md](standards/GSID_2D_Standard.md) | Split working copy — the 2D geometry layer: SEC shape codes and rulings, CanonicalGeometryID, GSID, designation mapping, geometry boundary rules |
| [standards/Material_Handling_Taxonomy_Standard.md](standards/Material_Handling_Taxonomy_Standard.md) | Split working copy — domain MH above the geometry layer: hierarchy, ROL/ASM/FAM/CFG dictionaries, component/assembly/configuration identity, evidence layer, compatibility, worked examples |
| [standards/Code_Dictionary_Standard.md](standards/Code_Dictionary_Standard.md) | Split working copy — namespace model, code status lifecycle, proposal/deprecation rules, demo-code handling, dictionary CSV contracts |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to propose codes and changes: evidence gates, proposal workflow, determinism & AI policy |
| [GOVERNANCE.md](GOVERNANCE.md) | Roles, decision rights, release train, industry participation, amendment process |
| [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) | Contributor Covenant 2.1 plus project-specific standards for a vendor-neutral standards effort |
| [ROADMAP.md](ROADMAP.md) | Seven-phase plan from foundation to formal governance |
| [docs/repository-structure.md](docs/repository-structure.md) | Target repository layout for the data layer and future Explorer application, with rationale and migration plan |
| [SECTIONHUB_STRATEGIC_ARCHITECTURE.md](SECTIONHUB_STRATEGIC_ARCHITECTURE.md) | 10-year ecosystem strategy: governance eras, adoption roadmap, external-standards relationships, crosswalk architecture, certification model, failure modes |
| [docs/position-paper-why-sectionhub.md](docs/position-paper-why-sectionhub.md) | Public position paper: the identity gap SectionHub fills, and how it complements — never substitutes for — AISC, AISI, RMI, SMA, GS1, and the classification systems |
| [explorer/](explorer/) | Explorer (Phases 1–2) — pure static, deterministic taxonomy navigation demo with rule traceability (GitHub Pages-ready; see [explorer/README.md](explorer/README.md)) |

## How to propose changes

Taxonomy, dictionary, and mapping changes go through a public, evidence-gated proposal process — no private channel needed. Copy the matching template into a new GitHub issue: [code changes](proposals/TEMPLATE-code-change.md) (add/deprecate/alias codes), [taxonomy changes](proposals/TEMPLATE-taxonomy-change.md) (template fields, enum tokens, rule changes), or [crosswalk changes](proposals/TEMPLATE-crosswalk-change.md) (designation imports and external-classification mappings). The full lifecycle — evidence gates, who decides what, acceptance/deferral/rejection, and how decisions propagate to dictionaries, standards, the Explorer, and the changelog — is in [docs/proposal-workflow.md](docs/proposal-workflow.md). Two ground rules save everyone time: variation is presumed to be a **field, not a code**, until proven otherwise, and rejections recorded in [REJECTIONS.md](REJECTIONS.md) are binding precedent.

## Why the Explorer is different

The Explorer is **deterministic and traceable by construction**: every classification is a pure function of your answers plus versioned dictionaries ([explorer/data/](explorer/data/)) and a machine-readable rule table ([explorer/rules/question_nodes.csv](explorer/rules/question_nodes.csv)). Each result shows a **Decision trace** — the exact rule IDs applied, the dictionary rows used, the reason, and the standard reference — and embeds it in the JSON output. When required input is missing, the engine **refuses to guess** (warning `W-201`, status `INDETERMINATE`) and states what information is needed. The current dictionaries are an honestly-labeled demo subset (`SNAP-0.1.0-DEMO`), not the final standard; known deviations are tracked as an [open governance item](proposals/2026-07-03-phase1-demo-alias-deviations.md). Dictionary and rule changes go through the proposal process in [CONTRIBUTING.md](CONTRIBUTING.md) — never through the app.

## Architecture in one paragraph

Identity is split into **separate but compatible layers**: canonical 2D section geometry (`SEC:` shape codes → CanonicalGeometryID → **GSID**), domain-scoped product classification (`FAM:` / `ASM:` / `ROL:` codes), content-addressed **ConfigurationIDs** for components and assemblies, a zero-authority naming layer (manufacturer parts and aliases), an evidence layer (tests and certifications), and immutable governance snapshots. GSID identifies canonical 2D cross-section geometry **only** — assemblies, products, and SKUs are classified by family, assembly type, component roles, and configuration identity, never by GSID.

## Status

DRAFT for senior-engineer review, dated 2026-07-02. Nothing here is a released snapshot; all example identifiers in the draft are illustrative.

## Try the Explorer

The Phase 1 TaxonomyExplorer MVP is a static deterministic browser app.

It demonstrates:

- Section classification
- Component role classification
- Assembly classification
- Suggested code output
- JSON output
- refusal-to-guess behavior for indeterminate cases

Live demo:

[Open TaxonomyExplorer](./explorer/)