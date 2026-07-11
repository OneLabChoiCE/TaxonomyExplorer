# Repository Structure — TaxonomyExplorer

**Status:** design, 2026-07-02. Implements Part 12.3 of [the Taxonomy Standard draft](../standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md) against the repository as it exists today, and defines where the future application lives. No application code is implied by this document.

## Design principles

The repository mirrors the standard's own architecture: **strictly separated layers, linked by references, each with one owner and one change process.**

1. **Normative / informative / data / code are different things** and never share a directory. A file's location tells you its authority level and who may change it (per the [GOVERNANCE.md](../GOVERNANCE.md) §3 decision-rights matrix).
2. **The application is a pure function over the data directories** (standard P7). Everything the classifier consumes — dictionaries, templates, rules, registry exports — lives outside the application tree, so a snapshot fully determines behavior and the app carries no embedded taxonomy.
3. **A snapshot is a git tag plus a frozen export.** Tagging `SNAP-x.y.z` versions the dictionaries, templates, rules, schemas, and registry together; `registry/snapshots/` keeps each release permanently downloadable in place (GOVERNANCE §5 permanence rule).
4. **Prepared to split.** When industry governance matures (Roadmap Phases 6–7), the data + standards + registry half can be extracted into a standalone `sectionhub-taxonomy` data repository; the Explorer then consumes published snapshots by pinned version. The directory boundaries below are exactly that future split line — nothing in `explorer/` may reach into data directories except through the documented file contracts in `schemas/`.

## Top level

```
TaxonomyExplorer/
├── README.md  LICENSE  LICENSE-DATA        # LICENSE: Apache-2.0 (code); LICENSE-DATA (NEW — lands with license finalization): CC-BY-4.0 (data/spec)
├── CONTRIBUTING.md  GOVERNANCE.md  CODE_OF_CONDUCT.md
├── CHANGELOG.md  REJECTIONS.md  ROADMAP.md
│   # unified draft lives at standards/SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md; split per Part 15 pending
├── .github/                                # forms + CI (see below)
├── docs/                                   # informative documentation
├── standards/                              # normative documents
├── dictionaries/                           # governed vocabularies (one CSV per namespace)
├── templates/                              # configuration templates (versioned JSON)
├── rules/                                  # deterministic decision tables — the classifier as data
├── registry/                               # published snapshot exports (Registry Operator only)
├── schemas/                                # interchange contracts (JSON Schema)
├── examples/                               # worked examples as validated fixtures
├── proposals/                              # decision records (exists)
└── explorer/                               # the application (Roadmap Phases 3–4; empty until then)
```

`.github/` carries the governance tooling: `ISSUE_TEMPLATE/` with the five typed proposal forms required by standard Part 12.4 (new code, template field, enum token, designation system, erratum), a PR template that demands the proposal-issue reference, and `workflows/` running two groups of checks on every PR: **(i)** the GOVERNANCE §5 machine-checked gates (unique codes per namespace, no edits to published rows, status-transition rules, `UPPER_SNAKE` tokens, no bare unqualified codes, proposal citation on new rows) and **(ii)** repo-added gates (schema validation of every data file against `schemas/files/`, link check, golden-example verification — the golden gate activates once `explorer/cli` exists at Roadmap Phase 3; until then session fixtures are schema-validated only).

## 1. `docs/` — informative documentation

```
docs/
├── repository-structure.md          # this document
├── architecture/
│   ├── identity-layers.md           # the layer map for newcomers (from standard Part 0.3)
│   └── decisions/                   # ADRs: adr-0001-monorepo-until-phase-6.md, …
├── explorer/                        # the public Explorer documentation set (standard Part 15.4)
│   ├── user-guide.md                # the seven entry types, walkthroughs
│   ├── question-model.md            # rendered view of rules/question_nodes.csv
│   ├── rule-engine-spec.md          # rendered view of the Part 13.4 contract: refusal semantics, determinism
│   ├── warning-catalog.md           # rendered view of rules/warnings.csv
│   ├── output-reference.md          # rendered view of schemas/output/*
│   └── dictionary-file-reference.md # column contracts for every data file
└── guides/
    ├── computing-cgid-cfid.md       # reproducing derived IDs offline (standard P9)
    ├── importing-designation-systems.md
    └── snapshot-pinning.md          # how consumers pin and upgrade
```

**Rationale.** Everything here is explanatory and re-renderable; nothing here is authoritative. Where a doc mirrors machine-readable data (`question-model.md`, `warning-catalog.md`, `output-reference.md`), the data file is the source of truth and CI SHOULD regenerate or diff the rendered doc. The normative (N) pieces of the standard's Part 15.4 documentation set anchor elsewhere: the rule-engine contract in a conformance clause of `standards/Material_Handling_Taxonomy_Standard.md` (Part 15.5), the warning catalog in `rules/warnings.csv`, the output contract in `schemas/output/`, the file contracts in `standards/Code_Dictionary_Standard.md`; Part 15.4's "Contribution guide" maps to the root `CONTRIBUTING.md` — so `docs/explorer/` pages are always informative renderings, completing 15.4 coverage without making `docs/` authoritative. **Change process:** maintainer PR review (editorial class). ADRs record repo-level engineering decisions — deliberately separate from `proposals/`, which records *taxonomy* decisions with different authority.

## 2. `standards/` — normative documents

```
standards/
├── Identifier_Standard.md                    # SMHE Identifier Standard v2.0 (Part 15.1) — NEW
├── GSID_2D_Standard.md                       # GSID Standard v2.0 (Part 15.2) — existing placeholder
├── Material_Handling_Taxonomy_Standard.md    # Taxonomy Standard v1.0 (Part 15.3) — existing placeholder
├── Code_Dictionary_Standard.md               # dictionary file contracts, status lifecycle, namespace rules — existing placeholder
└── canonicalization/
    └── v1/
        ├── rules.md                          # units, rounding, orientation, hashing (normative)
        └── shapes/                           # per-SEC-code canonical parameter schemas
            ├── OCL.json  OCU.json  OCR.json  CHN.json  IWF.json … (machine-readable, normative)
```

**Rationale.** The existing placeholders map as follows: `GSID_2D_Standard.md` ← Part 15.2 outline; `Material_Handling_Taxonomy_Standard.md` ← Part 15.3 outline; `Identifier_Standard.md` (new file — added rather than renaming anything already published) ← Part 15.1 outline. `Code_Dictionary_Standard.md` has no Part 15 outline of its own: it is populated from the Part 13.6 file/column contracts plus the N5 status lifecycle — i.e., it *is* the normative "Dictionary file reference" of Part 15.4. Boundary between the two: `Identifier_Standard.md` owns the namespace rules N1–N7; `Code_Dictionary_Standard.md` owns file formats, columns, and status-lifecycle mechanics. Two deliberate deviations from the Part 12.3 sketch, both for the same reason (normative/informative separation): the standards texts live here rather than under `docs/` as sketched, and canonicalization lives *inside* `standards/` rather than top-level, because its rules text and per-shape parameter schemas are **normative** — they define CGID reproducibility — and they version as a unit (`v1/`, `v2/` — the `<v>` in `CG<v>-…`). The per-shape JSON files are simultaneously normative content and machine input for the engine; putting them here rather than in `schemas/` keeps "what geometry means" under standards governance while `schemas/` stays purely about interchange. The unified root draft remains until this split executes, then gains a superseded banner pointing here (never deleted — P8 applies to documents too). **Change process:** normative rule change — TC two-thirds supermajority + 30-day comment (GOVERNANCE §3).

## 3. Dictionary structure — `dictionaries/`, `templates/`, `rules/`, `registry/`

Four directories, because the data layer has four different owners and mutation rates:

```
dictionaries/                        # governed vocabularies — TC decides, quarterly activation
├── namespaces.csv
├── sec_codes.csv  rol_codes.csv  asm_codes.csv  fam_codes.csv  cfg_groups.csv
└── enum_tokens.csv                  # controlled UPPER_SNAKE values per CFG group — NEW

templates/                           # configuration templates — TC decides
├── ASM-WDK.v1.json  ASM-FRM.v1.json …  # per assembly type, versioned in-name
└── ROL-COL.v1.json  ROL-DKS.v1.json …  # per component role (flat, prefixed — the literal path form of standard Part 13.3)

rules/                               # the deterministic classifier as data — TC decides
├── question_nodes.csv               # wizard decision tables (route, node, answer → next/assignment, because_text)
├── warnings.csv                     # the E/W/I catalog (code, trigger, behavior) — normative per Part 15.4
└── designation_grammar.md           # the derived-designation rendering rules

registry/                            # published assignments — Registry Operator ONLY
├── gsid_registry.csv                # current: gsid, cgid, sec_code, param_json, since_snapshot
├── designation_systems.csv  dsg_index.csv
└── snapshots/
    └── SNAP-1.0.0/                  # complete frozen export of every data dir at that release
```

**Rationale.** `dictionaries/` keeps the CONTRIBUTING.md contract literally true: one CSV per namespace, plus the token list that rule N4 requires to be governed alongside them. `templates/` is separate because templates version independently per ASM/ROL code and define the identity-bearing/informative field split that ConfigurationID hashing depends on. `rules/` is separate from `dictionaries/` — a deliberate refinement of the Part 13.6 flat file list — because decision tables are *logic-as-data*, reviewed for routing correctness (the SEC:STB reachability class of bug), not vocabulary; the snapshot bundle still ships all of them together. `warnings.csv` and `designation_grammar.md` are **additions** to the Part 13.6 file set (machine-readable forms of the Part 13.7 catalog and the Part 13.5 grammar); Part 13.6's enumerated list gets updated accordingly when the Part 15 split executes. `registry/` is write-restricted to the Registry Operator (GOVERNANCE §8): contributors propose, the registry assigns — CI SHOULD reject any PR from outside the release process that touches it. The four empty PascalCase CSVs currently in `dictionaries/` are dead scaffolding, already flagged in CONTRIBUTING.md, and are removed by the migration below. **Change process:** dictionaries/templates/rules → TC per GOVERNANCE §3; registry → Registry Operator release train.

## 4. `schemas/` — interchange contracts

```
schemas/
├── output/
│   └── classification-output.v1.schema.json   # the shared JSON envelope (standard Parts 6–10, 13.5)
├── files/                                       # one JSON Schema per data-file format
│   ├── sec_codes.schema.json  enum_tokens.schema.json  question_nodes.schema.json
│   ├── template.schema.json                     # shape of a configuration template
│   ├── gsid_registry.schema.json  …
└── proposal-stub.v1.schema.json                 # the W-301/W-303 registration stub format
```

**Rationale.** Schemas are the firewall that lets the repo split later: the Explorer, third-party tools, and CI all validate against these contracts instead of assuming file layouts. Versioned in-name (`.v1.`) and never edited in place — a changed contract is a new version (P8 for machine contracts). `files/` schemas make every CSV/JSON in the data layer CI-validatable, which is what turns the GOVERNANCE §5 gates from prose into checks. **Change process:** additive schema versions → the GOVERNANCE §3 *lightweight dictionary data* class (TC lazy consensus, 14 days); breaking versions of a normative contract (e.g., the output envelope) → the §3 *normative rule change* path (two-thirds supermajority + 30-day comment period), shipped in a MAJOR snapshot — the snapshot is the vehicle, the supermajority is the authority.

## 5. `examples/` — worked examples as validated fixtures

```
examples/
├── sections/    rack-upright-ocl.json          # standard Part 7
├── components/  rack-column-cmp.json           # Part 7 (bound + parametric)
├── assemblies/  wire-deck.json                 # Part 6
│                rack-frame.json  cantilever-aca.json  shelving-unit.json   # Parts 8–10
└── sessions/                                    # golden classification sessions
    ├── wire-deck.answers.json → wire-deck.expected.json
    └── ocl-section.answers.json → ocl-section.expected.json
```

**Rationale.** The standard's worked examples stop being prose the moment they are also machine-checked: every file here validates against `schemas/`, and every `sessions/` pair is a golden test — answers in, byte-identical expected output out (P7 made executable). When a dictionary or rule change breaks an expected output, CI fails and the change either carries a MAJOR snapshot or is wrong. This directory is also the Explorer's acceptance-test corpus, which is why it lives outside `explorer/`: the fixtures are contract artifacts, not app property. **Change process:** must accompany the proposal that changes their inputs; otherwise editorial.

## 6. `explorer/` — the application (structure only; no code now)

```
explorer/
├── engine/                # deterministic core — the ONLY place classification executes
│   ├── loader/            # reads + validates data dirs against schemas/, pins snapshot
│   ├── resolver/          # walks rules/question_nodes.csv; refuses on missing answers (W-2xx)
│   ├── canonicalizer/     # implements standards/canonicalization/v<n>/; CGID/CFID hashing
│   ├── designation/       # renders rules/designation_grammar.md deterministically
│   └── output/            # envelope assembly, warnings, explanations, db_mapping
├── ui/                    # wizard front end — presentation ONLY, zero classification logic
├── cli/                   # same engine, scriptable; enables CI self-hosting of golden tests
└── tests/                 # unit tests + runner that consumes ../examples/sessions/
```

**Rationale.** The `engine/` vs `ui/` boundary is the AP-9 guard rail expressed as architecture: the UI may collect answers and display results but can never compute a code, so no future "smart autocomplete" can silently become an authoritative classifier. The engine's five parts correspond one-to-one to the deterministic contract of standard Part 13.4 (load → resolve → derive → render → emit), each testable in isolation. `cli/` exists so the golden-session tests and any future registry tooling run headless. The MVP (standard Part 13.10) fills exactly these directories and no more — Section route in `resolver/` + `canonicalizer/`, two component roles, one assembly route. **Change process:** maintainer PR review; engine changes that alter any golden output require the data-layer process that justifies it.

## Migration from today's tree

| Step | Action | Owner |
|---|---|---|
| 1 | Create `templates/`, `rules/`, `registry/`, `schemas/`, `examples/` with README stubs (`docs/` already exists and holds this document) | Maintainer |
| 2 | Delete dead `dictionaries/ShapeCodes.csv`, `ComponentRoles.csv`, `ProductFamilies.csv`, `AssemblyTypes.csv` (flagged in CONTRIBUTING.md) and the stray empty `app/` directory — **or**, if `app/` is the preferred application home, rename `explorer/` to `app/` throughout this design first | Maintainer (editorial; record in CHANGELOG) |
| 3 | Add `dictionaries/enum_tokens.csv` seeded from the CFG group value lists in standard Part 3.6 | TC (lightweight) |
| 4 | Add `standards/Identifier_Standard.md` placeholder; populate the three Part 15-outlined standards from their outlines and `Code_Dictionary_Standard.md` from the Part 13.6 contracts + N5 lifecycle; banner the root draft as superseded when done | TC (normative path) |
| 5 | Extract `standards/canonicalization/v1/` (rules + per-shape schemas) from the draft's Part 4.3 and Part 13.3 material | TC (normative path) |
| 6 | Seed the rule tables and templates: `rules/question_nodes.csv` from Part 13.3, `rules/warnings.csv` from Part 13.7, `rules/designation_grammar.md` from Part 13.5; `templates/ASM-WDK.v1.json` from Part 6.5, `templates/ROL-COL.v1.json` from Part 7 and `templates/ROL-DKS.v1.json` from Part 6 | TC |
| 7 | Convert the draft's Part 6–10 JSON examples into `examples/` fixtures; add the two seed golden sessions (they depend on step 6) | Maintainer + TC review |
| 8 | Stand up `.github/` forms and lint workflows (§5 gates + repo-added gates; the golden gate stays dormant until `explorer/cli` exists) | Maintainer |
| 9 | Finalize `LICENSE` (Apache-2.0) and add `LICENSE-DATA` (CC-BY-4.0) with a path-based scope map and trademark notice | Project owner / TC |
| 10 | First registry export → `registry/snapshots/SNAP-1.0.0/` when the TC ratifies the seed dictionaries, templates, and rules — the snapshot must freeze **every** data directory, so it cannot precede step 6 | Registry Operator |

Steps 1–3, 7, and 8 are mechanical; steps 4–6, 9, and 10 are the governance milestones that turn the draft into released standards. `explorer/` is created at Roadmap Phase 3 and stays out of the tree until then.
