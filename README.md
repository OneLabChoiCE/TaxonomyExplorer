# SectionHub Taxonomy Explorer

Working repository for the **SMHE / SectionHub Material Handling Taxonomy Standard** and the public, deterministic **Taxonomy Explorer** application built on it.

## Contents

| Path | What it is |
|---|---|
| [SMHE-SectionHub-Taxonomy-Standard-DRAFT.md](SMHE-SectionHub-Taxonomy-Standard-DRAFT.md) | The full v1.0 draft standard: identity layers, namespaces, code dictionary, decision rules, worked examples, Explorer specification, governance & adoption strategy (Parts 0–15) |
| [dictionaries/](dictionaries/) | Seed dictionary CSVs (namespaces, section shapes, component roles, assembly types, product families, configuration groups) matching the draft's Part 3 tables, pinned to `SNAP-1.0.0` |

## Architecture in one paragraph

Identity is split into **separate but compatible layers**: canonical 2D section geometry (`SEC:` shape codes → CanonicalGeometryID → **GSID**), domain-scoped product classification (`FAM:` / `ASM:` / `ROL:` codes), content-addressed **ConfigurationIDs** for components and assemblies, a zero-authority naming layer (manufacturer parts and aliases), an evidence layer (tests and certifications), and immutable governance snapshots. GSID identifies canonical 2D cross-section geometry **only** — assemblies, products, and SKUs are classified by family, assembly type, component roles, and configuration identity, never by GSID.

## Status

DRAFT for senior-engineer review, dated 2026-07-02. Nothing here is a released snapshot; all example identifiers in the draft are illustrative.
