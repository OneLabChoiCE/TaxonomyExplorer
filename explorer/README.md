# SectionHub Taxonomy Explorer — Phase 2 (Rule Traceability & Standards Credibility Layer)

A pure static, deterministic taxonomy-navigation demo. No backend, no auth, no cloud services, no database, no persistence, no editing, no build step, no dependencies. The goal is to demonstrate standards-driven, traceable classification — not to be a production application.

## What this demonstrates

- **Deterministic** means classification is a pure function of your answers plus the loaded dictionaries and rules. Same answers, same snapshot — byte-identical output, every time. No inference, no scoring, no AI in the decision path.
- **Rule traceability** means every decision is one identifiable rule row from [`rules/question_nodes.csv`](rules/question_nodes.csv) applied to one answer. The UI shows the full **Decision trace** (rule ID, input, decision, reason, dictionary, standard reference) and embeds it in the JSON output as `decision_trace`.
- **Refusal to guess:** when required input is missing — for example, lip condition on an open C profile — the engine stops with warning `W-201` at the `SEC:OCS` rollup, status `INDETERMINATE`, and tells you exactly what information is needed. *Deterministic classification SHALL refuse ambiguous terminal assignment when required input is missing.* A guessed code would be unreproducible and untraceable.
- **Demo dictionaries are not the final standard.** This app ships a deliberately small demo subset pinned as `SNAP-0.1.0-DEMO`; three of its codes deviate from the `SNAP-1.0.0` seed dictionaries (see caveats below). Codes carry `status` and provenance notes so nothing is presented as more authoritative than it is.
- **Proposing changes:** dictionary and rule changes go through the governance process — typed proposal issues with rule-based rationale per [CONTRIBUTING.md](../CONTRIBUTING.md), decided per [GOVERNANCE.md](../GOVERNANCE.md). The Explorer never edits dictionaries at runtime.

## Run

- **GitHub Pages:** enable Pages for this repository (deploy from branch, root). The app serves at `…/TaxonomyExplorer/explorer/`.
- **Locally over HTTP:** `python -m http.server` from the repo root, then open `http://localhost:8000/explorer/`. Dictionaries and rules load from the `.csv` files.
- **Directly from disk:** double-click `index.html`. Browsers block `fetch()` on `file://`, so the app falls back to `data/embedded.js`, a maintained byte-identical copy of the CSV text.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell — no logic |
| `styles.css` | Presentation only |
| `taxonomy.js` | CSV parser → data loader → decision tables (each option references a rule ID) → deterministic engine → output/trace builder → UI rendering |
| `data/sec_codes.csv`, `data/rol_codes.csv`, `data/asm_codes.csv` | Demo dictionary subset (source of truth for codes, statuses, provenance notes) |
| `rules/question_nodes.csv` | **The rule table** — one row per (question, answer) with output code, explanation, standard reference, warning code, and status; source of truth for all explanation text |
| `data/embedded.js` | `file://` fallback copy of all CSV text — keep byte-identical to the CSVs |
| `samples/*.json` | Pre-generated outputs with `decision_trace`, byte-identical to what the app produces for the same answers — including the `W-201` refusal case |

## Scope (Phases 1–2)

- Object types: **Section, Component, Assembly** only.
- Section codes: `OCL`, `OCU`, `ZED`, `HSS`, `ANG`, `PLT` (+ `OCS` shown only as the W-201 indeterminate rollup).
- Component roles: `COL`, `BEM`, `ARM`, `CHL`. Assembly types: `WDK`, `FRM`.
- Output: classification path, suggested codes with status badges and provenance notes, per-step explanations, decision trace, JSON envelope.
- Out of scope: product families, geometry parameters / CGID / GSID lookup, configuration hashing, test/certification routes, registry access, editing, persistence, broad taxonomy expansion.

## Demo-code caveats (read before extending)

This demo dictionary deliberately deviates from the `SNAP-1.0.0` seed dictionaries in [`../dictionaries/`](../dictionaries/), per the Phase 1 MVP specification. These deviations are **surfaced, not hidden**: they carry `status=DEMO` in the CSVs, an amber badge and provenance note in the UI, a header banner naming them, and rule rows marked `DEMO` in the rule table.

| Demo code | SNAP-1.0.0 says | Governance status |
|---|---|---|
| `ZED` | Z family = `ZEE` superclass with leaves `ZLP` / `ZUN` | Open item — see [governance note](../proposals/2026-07-03-phase1-demo-alias-deviations.md) |
| `HSS` (terminal) | `HSS` is a classifier-only superclass; leaves are `RHS` / `SHS` / `CHS` | Open item — same note |
| `CHL` | this role is named `DKS` (deck support member) | Open item — same note |

Resolving these aliases (aligning the demo set with the seed dictionaries, or amending the seed dictionaries) is a Technical Committee decision, not an app edit.

## Determinism contract

Same answers ⇒ same output, always. The engine only accepts controlled answer tokens; every accepted answer applies exactly one rule row; codes come only from the loaded dictionaries; this tool never assigns registered identifiers (`gsid` is always `null` in this phase) and never mutates its data files.
