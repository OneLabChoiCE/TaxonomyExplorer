# SectionHub Taxonomy Explorer — Phase 1 MVP

A pure static, deterministic taxonomy-navigation demo. No backend, no auth, no cloud services, no database, no persistence, no editing. The goal is to demonstrate taxonomy navigation, not to be a production application.

## Run

- **GitHub Pages:** enable Pages for this repository (deploy from branch, root). The app serves at `…/TaxonomyExplorer/explorer/`.
- **Locally over HTTP:** `python -m http.server` from the repo root, then open `http://localhost:8000/explorer/`. Dictionaries load from the `data/*.csv` files.
- **Directly from disk:** double-click `index.html`. Browsers block `fetch()` on `file://`, so the app falls back to `data/embedded.js`, a maintained byte-identical copy of the CSV text.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell — no logic |
| `styles.css` | Presentation only |
| `taxonomy.js` | Dictionaries loader, decision tables (data), deterministic engine, output builder, UI rendering — in that order, commented |
| `data/sec_codes.csv`, `data/rol_codes.csv`, `data/asm_codes.csv` | Demo dictionary subset (source of truth for codes) |
| `data/embedded.js` | `file://` fallback copy of the CSV text — keep byte-identical to the CSVs |
| `samples/*.json` | Pre-generated outputs, byte-identical to what the app produces for the same answers |

## Scope (Phase 1)

- Object types: **Section, Component, Assembly** only.
- Section codes: `OCL`, `OCU`, `ZED`, `HSS`, `ANG`, `PLT` (+ `OCS` shown only as the W-201 indeterminate rollup).
- Component roles: `COL`, `BEM`, `ARM`, `CHL`. Assembly types: `WDK`, `FRM`.
- Output: classification path, suggested codes, per-step explanations, JSON envelope.
- Out of scope: product families, geometry parameters / CGID / GSID lookup, configuration hashing, test/certification routes, registry access, editing, persistence.

## Demo-code caveats (read before extending)

This demo dictionary deliberately deviates from the `SNAP-1.0.0` seed dictionaries in [`../dictionaries/`](../dictionaries/), per the Phase 1 MVP specification:

| Demo code | SNAP-1.0.0 says | Carried in-app as |
|---|---|---|
| `ZED` | Z family = `ZEE` superclass with leaves `ZLP` / `ZUN` | `status=DEMO` + explanation shown to the user |
| `HSS` (terminal) | `HSS` is a classifier-only superclass; leaves are `RHS` / `SHS` / `CHS` | `status=DEMO` + explanation shown to the user |
| `CHL` | this role is named `DKS` (deck support member) | `status=DEMO` + explanation shown to the user |

Aligning the demo set with the seed dictionaries (or amending the seed dictionaries) is a governance decision — see [CONTRIBUTING.md](../CONTRIBUTING.md).

## Determinism contract

Same answers ⇒ same output, always. The engine only accepts controlled answer tokens; "I don't know" on lip condition halts with `W-201` at the `OCS` rollup (`INDETERMINATE`) rather than guessing. Codes come only from the loaded dictionaries; this tool never assigns registered identifiers (`gsid` is always `null` in Phase 1).
