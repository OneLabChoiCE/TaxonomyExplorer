# Changelog

All notable dictionary and standard changes, summarized per snapshot release ([GOVERNANCE.md](GOVERNANCE.md) §5). Detailed rationale lives in [proposals/](proposals/); rejections in [REJECTIONS.md](REJECTIONS.md).

## [Unreleased]

- Code Dictionary Standard: linked the operational proposal workflow and issue templates from its proposal-rules clause (editorial bridge; completes the standards-split cross-referencing — the split itself landed in commit ee28c98) (2026-07-11).

- Public-readiness audit (`docs/PUBLIC_READINESS_AUDIT.md`): README rewritten for first-time visitors (live Explorer link up top, no-performance-claims disclaimer, status-at-a-glance table, grouped contents); LICENSE placeholder notice added (no license granted yet); dead empty `dictionaries/` PascalCase CSVs and stray `app/` directory removed per repository-structure migration step 2; corrupted `docs/governance-note-demo-code-reconciliation.md` repaired (PowerShell wrapper → intended content + pointer to the authoritative DEFERRED record); live Explorer URL added to explorer/README. No Explorer behavior, dictionary content, or demo-alias decisions changed (2026-07-11).

- Demo scenario pack added: `docs/demo-scenarios.md` plus `examples/scenarios/` — six audience walkthroughs (manufacturer section, lab wire deck, SKU mapping, inspector W-201 refusal, code proposal, future certification), each tagged EXPLORER_REPRODUCIBLE or ILLUSTRATIVE_DATA_MODEL; no dictionary or Explorer changes (2026-07-11).
- Public position paper added: `docs/position-paper-why-sectionhub.md` — the deterministic-identity gap relative to AISC/AISI/RMI/SMA/GS1/UNSPSC/ECLASS/ETIM/OmniClass/MasterFormat/SKUs, with explicit non-affiliation and non-substitution posture (2026-07-11).
- Formal proposal workflow established: `docs/proposal-workflow.md` (lifecycle, evidence gates, decision categories, outcomes, propagation) plus issue templates `proposals/TEMPLATE-code-change.md`, `proposals/TEMPLATE-taxonomy-change.md`, `proposals/TEMPLATE-crosswalk-change.md`; README "How to propose changes" section; GOVERNANCE.md and CONTRIBUTING.md pointers (2026-07-11).
- Standards split (working copies): populated `standards/GSID_2D_Standard.md`, `standards/Material_Handling_Taxonomy_Standard.md`, and `standards/Code_Dictionary_Standard.md` by verbatim extraction from the unified v0.1 draft, which remains the canonical document of record; original clause numbering and rule IDs retained; editorial bridge text marked; no normative meaning changed (2026-07-11).
- SECTIONHUB_STRATEGIC_ARCHITECTURE.md added: 10-year ecosystem strategy (governance eras G1–G3, adoption stages A1–A7, external-standards relationships, XMAP crosswalk architecture, certification model, failure modes F-1..F-16) (2026-07-11).
- ROADMAP.md repaired: restored the seven-phase roadmap from commit e8c9c5b (the file had been overwritten with an unexecuted PowerShell fragment in commit d996b85, breaking GOVERNANCE.md's "Phase 7" bootstrap anchor) (2026-07-11).

- Explorer Phase 2 — Rule Traceability & Standards Credibility Layer: machine-readable rule table `explorer/rules/question_nodes.csv`; Decision trace in UI and JSON (`decision_trace`); first-class W-201 refusal panel (why stopped / what's needed / why no guessing); dictionary provenance display with status badges and demo-code banner; refusal sample `explorer/samples/section-indeterminate-w201.json`; demo-alias governance note `proposals/2026-07-03-phase1-demo-alias-deviations.md` (2026-07-03).
- Explorer Phase 1 MVP under `explorer/`: static deterministic wizard for Section/Component/Assembly with demo dictionary subset `SNAP-0.1.0-DEMO` (2026-07-02).
- Governance documents established: CONTRIBUTING.md, GOVERNANCE.md, CODE_OF_CONDUCT.md, REJECTIONS.md, proposals/, CHANGELOG.md (2026-07-02).

## [SNAP-1.0.0] — draft seed, 2026-07-02 (not yet released)

- Seed dictionaries published under `dictionaries/`: `namespaces.csv`, `sec_codes.csv`, `rol_codes.csv`, `asm_codes.csv`, `fam_codes.csv`, `cfg_groups.csv`, matching Part 3 of the Taxonomy Standard draft.
- Founding rulings R1–R6 (OCL/OCU/OCR adopted; OCS demoted to SUPERCLASS; CHN adopted; CFS/PIP/TUB rejected) — see the standard Part 3.1 and REJECTIONS.md.
