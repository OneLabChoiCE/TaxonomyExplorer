# SectionHub Code Dictionary Standard — Namespaces, Statuses, and Dictionary Governance

**Document:** Code Dictionary Standard — DRAFT (split working copy)
**Status:** DRAFT — not yet balloted

> **Source and split note.** This document was extracted verbatim on 2026-07-11 from the unified draft [SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md](SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md), which **remains the canonical document of record** until this split is ratified. Clause and section numbers below retain the unified draft's numbering to preserve cross-references. Rule identifiers (P-, N-, D-, C-) are global across the SectionHub document family; where a rule also appears in another split document, the text is duplicated verbatim and the unified draft is authoritative if any copy diverges. No normative meaning has been changed. Text original to this split is marked *[Editorial bridge]*.

## Scope

*[Editorial bridge.]* This standard governs the **mechanics shared by every code dictionary**: the namespace model, code formats and qualification, the code status lifecycle, proposal and deprecation rules, demo-code caveat handling, and the dictionary file (CSV) contracts. The code **tables** themselves are normative in their subject standards: `SEC:` in the [GSID Standard](GSID_2D_Standard.md); `ROL:` / `ASM:` / `FAM:` / `CFG:` in the [Material Handling Taxonomy Standard](Material_Handling_Taxonomy_Standard.md). Operating process (who decides, cadences, records) is in [GOVERNANCE.md](../GOVERNANCE.md) and [CONTRIBUTING.md](../CONTRIBUTING.md).

## Governing principles (restated verbatim from the unified draft, Part 0.2)

- **P6 — One namespace per code type.** Section shapes, product families, assembly types, component roles, and configuration groups SHALL each occupy a separate namespace. A bare three-character code has no meaning; only a namespace-qualified code does.
- **P8 — Immutability and audit safety.** Published identifiers SHALL never be reused, re-meant, or retroactively altered. Corrections occur by deprecation-with-successor, recorded in snapshots.

## Part 2 — Namespace Model (Deliverable 2)

### 2.1 Namespaces

| Namespace | Prefix | Contains | Code form | Governed by |
|---|---|---|---|---|
| Domain | (bare) | Top-level domains | 2-char alpha | Taxonomy Standard |
| Section shape | `SEC:` | Cross-section topology classes | 3-char alpha | GSID Standard v2.0 |
| Product family | `FAM:` | Market/system families | 3-char alpha | Taxonomy Standard |
| Assembly type | `ASM:` | Assembly structural/functional types | 3-char alpha | Taxonomy Standard |
| Component role | `ROL:` | Functional roles of components | 3-char alpha | Taxonomy Standard |
| Configuration group | `CFG:` | Named attribute groups | 3-char alpha | Taxonomy Standard |
| Enumeration tokens | (none) | Controlled values inside CFG groups | `UPPER_SNAKE` token | per-group value lists |

### 2.2 Identifier prefixes (registry-issued and derived IDs)

| Identity | Prefix / format | Example | Kind |
|---|---|---|---|
| CanonicalGeometryID | `CG<v>-<hash12>` | `CG1-9F3A62C81B44` | Derived (content-addressed) |
| GSID | `GS-<serial6>` | `GS-004217` | Registered |
| IndustryDesignationID | `DSG-<SYSTEM>-<NORMALIZED>` | `DSG-AISC-W12X50` | Registered |
| ManufacturerPartID | `MPN-<serial6>` | `MPN-018233` | Registered |
| AliasID | `ALS-<serial6>` | `ALS-002911` | Registered |
| ComponentID | `CMP-<serial6>` | `CMP-000482` | Registered |
| AssemblyProductID | `ASP-<serial6>` | `ASP-000173` | Registered |
| ConfigurationID | `CF<v>-<hash12>` | `CF1-4D2E91AA07C3` | Derived (content-addressed) |
| TestID | `TST-<year>-<serial5>` | `TST-2026-00087` | Registered |
| CertificationID | `CRT-<year>-<serial5>` | `CRT-2026-00031` | Registered |
| SnapshotID | `SNAP-<semver>` | `SNAP-1.0.0` | Registered release |

`<v>` in `CG<v>-` and `CF<v>-` is the major version of the canonicalization rules used to derive the hash. `<hash12>` is the first 12 hex characters of the SHA-256 of the normalized record.

### 2.3 Namespace rules (normative)

- **N1.** A three-character code SHALL be unique **within** its namespace. Uniqueness across namespaces is NOT required.
- **N2.** Codes SHALL always be stored, exchanged, and serialized in namespace-qualified form (`SEC:OCL`, `ASM:WDK`). Bare codes MAY appear only in human-facing rendered text where the namespace is unambiguous from context.
- **N3.** Cross-namespace collisions (the same three letters in two namespaces) are permitted but SHOULD be avoided when assigning new codes, to reduce human transcription error.
- **N4.** Enumeration values inside configuration groups SHALL be `UPPER_SNAKE` tokens (e.g., `WATERFALL`, `FLUSH`), never three-character codes. This keeps the 3-char space reserved for classification codes and prevents code proliferation.
- **N5.** Every namespace dictionary entry SHALL carry: code, name, definition, status (`ACTIVE`, `SUPERCLASS`, `RESERVED`, `DEPRECATED`, `REJECTED`), status rationale, successor (if deprecated), and the SnapshotID in which it first appeared.
- **N6.** Codes flagged `SUPERCLASS` are **classifier-only rollups**: valid in queries, filters, and classification paths as grouping nodes, but SHALL NOT be assigned as the terminal code of any new registry record.
- **N7.** Codes SHALL never be deleted or re-meant. Retirement is by status `DEPRECATED` with a successor pointer, effective at a named snapshot.

### 2.4 Which codes belong where

- **Section shapes** (`SEC:`) — identify cross-section **topology classes** (open C lipped, hollow rectangular, wide-flange I). Never products, never processes, never roles.
- **Product families** (`FAM:`) — identify **market/system families** aligned with industry-standard scopes (selective pallet rack, cantilever rack, steel shelving). Never shapes, never manufacturers.
- **Assembly types** (`ASM:`) — identify **kinds of assembled products** (wire deck, upright frame, beam assembly). Never the section of any member.
- **Component roles** (`ROL:`) — identify the **function of a part inside assemblies** (column, brace, base plate). Orthogonal to shape: a `ROL:BRC` brace may be `SEC:CHS`, `SEC:OCU`, or `SEC:ANG`.
- **Configuration groups** (`CFG:`) — identify **named attribute groups** whose fields carry variation (edge condition, mesh pattern, joining method). They are schema organizers, not object identifiers.
- **Evidence records** (`TST-`, `CRT-`) — identify **events and attestations**, never objects. Evidence points at objects + configurations; objects never point at evidence for identity.


## Namespace concepts overview

*[Editorial bridge.]* One-line orientation per namespace; the owning standard is normative.

| Namespace | Concept | Normative home |
|---|---|---|
| `SEC:` | Cross-section topology classes | [GSID Standard](GSID_2D_Standard.md) §3 |
| `ROL:` | Functional roles of components in assemblies | [MH Taxonomy Standard](Material_Handling_Taxonomy_Standard.md) (unified draft §3.3) |
| `ASM:` | Assembly structural/functional types | [MH Taxonomy Standard](Material_Handling_Taxonomy_Standard.md) (unified draft §3.4) |
| `FAM:` | Product families (ProductFamilyCode; occasionally written "PFM" informally — the registered namespace prefix is `FAM:`) | [MH Taxonomy Standard](Material_Handling_Taxonomy_Standard.md) (unified draft §3.5) |
| `CFG:` | Configuration attribute groups (schema organizers, never object identifiers) | [MH Taxonomy Standard](Material_Handling_Taxonomy_Standard.md) (unified draft §3.6) |
| XMAP | External-classification crosswalk records (UNSPSC, ECLASS, ETIM, OmniClass, MasterFormat, …) — **proposed, non-normative**: defined in [SECTIONHUB_STRATEGIC_ARCHITECTURE.md](../SECTIONHUB_STRATEGIC_ARCHITECTURE.md) §7 and targeted at Taxonomy Standard v1.1; no XMAP namespace exists in any released dictionary | — (proposal) |

## Code status lifecycle

*[Editorial bridge.]* The normative status set and lifecycle rules are N5–N7 in the namespace model above (unified draft §2.3): **`ACTIVE`, `SUPERCLASS` (classifier-only rollups, N6), `RESERVED`, `DEPRECATED` (with successor pointer, N7), `REJECTED`** — every entry carrying definition, status rationale, successor where applicable, and the SnapshotID in which it first appeared (N5). Codes are never deleted or re-meant (N7).

### `DEMO` status *(editorial bridge — demonstration datasets only)*

`DEMO` is a **non-normative status used only in demonstration dictionaries** (the TaxonomyExplorer demo subset, snapshot `SNAP-0.1.0-DEMO`). It marks codes that deviate from the released seed dictionaries for demonstration purposes. Handling rules, restated from the open governance record [proposals/2026-07-03-phase1-demo-alias-deviations.md](../proposals/2026-07-03-phase1-demo-alias-deviations.md):

- A `DEMO` code SHALL NOT appear in any registered record, snapshot export, or seed dictionary.
- Every `DEMO` row SHALL carry a `demo_note` naming the corresponding released code(s), and conforming demo tools SHALL surface that note to the user.
- Each `DEMO` deviation SHALL be documented as an open governance item with a resolution path; this document does not resolve them.

## Proposal rules for new codes (unified draft §12.4–12.5)

*[Editorial bridge.]* The operational walkthrough of these rules — lifecycle, evidence tables, decision categories, and outcomes — is [docs/proposal-workflow.md](../docs/proposal-workflow.md), with copyable issue templates in [proposals/](../proposals/README.md) (`TEMPLATE-code-change.md`, `TEMPLATE-taxonomy-change.md`, `TEMPLATE-crosswalk-change.md`).

### 12.4 Community proposal process

1. Proposals SHALL be submitted via typed issue forms: *new code* (per namespace), *new template field*, *new enum token*, *new designation system*, *erratum*.
2. A new-`SEC:`-code form SHALL require the D-1 evidence: the topology/parameter-schema case, the existing code that fails to fit **and why**, and at least two independent real-world instances (prevents speculative codes). A new-`FAM:` form SHALL require the D-7 industry-scope case.
3. The SMHE technical committee reviews on a published cadence (SHOULD be monthly triage, quarterly decisions) with recorded rationale in `proposals/`.
4. Accepted codes land as `RESERVED` immediately, become `ACTIVE` only at the next snapshot release; rejected proposals are recorded in `REJECTIONS.md` with rationale (the CFS/PIP/TUB entries in Part 3 seed this log).
5. Community members MAY submit geometry for GSID registration (public parameters only); the registry validates canonicalization and issues serially.

### 12.5 Preventing uncontrolled code proliferation

- **Fields-first presumption (P5):** every proposal is presumed to be a configuration field or enum token until the D-1/D-7 case is proven. The burden of proof is on the code, not on the field.
- Hard gates D-1 (topology schema) and D-7 (industry scope) as acceptance criteria; "my catalog needs it" is not a criterion.
- `RESERVED` parking for plausible-but-undemanded codes (`SBR`, `HBR` precedents).
- Release-train discipline: codes activate only at snapshots (no continuous dictionary drift).
- The public rejection log makes precedents citable, so repeat proposals die quickly.
- Dictionary size is a watched metric: reviewers SHOULD treat >10% namespace growth per year as a smell requiring explicit justification.


## Deprecation and alias rules

*[Editorial bridge.]* Deprecation mechanics are N7 (§3 above): status `DEPRECATED` plus a successor pointer, effective at a named snapshot; rejected proposals are recorded as binding precedent in [REJECTIONS.md](../REJECTIONS.md). The boundary between a dictionary change and a mere renaming is rule D-8, restated verbatim from the unified draft Part 5:

- **D-8 (alias only).** If the physical object and configuration are unchanged and only the name differs, the change is a naming-layer record. This is the firewall that keeps commercial naming out of taxonomy.

Alias records (`ALS-`) and manufacturer part records (`MPN-`) are naming-layer objects with zero classification authority; their definitions are normative in the [MH Taxonomy Standard](Material_Handling_Taxonomy_Standard.md) (unified draft §4.11–4.12).

## Dictionary file and CSV governance (unified draft §13.6)

### 13.6 CSV/dictionary file concept

Shipped data files (all versioned; the set = the public snapshot):

`namespaces.csv`, `sec_codes.csv`, `rol_codes.csv`, `asm_codes.csv`, `fam_codes.csv`, `cfg_groups.csv`, `enum_tokens.csv`, `question_nodes.csv`, `templates/*.json`, `designation_systems.csv`, `dsg_index.csv`, `gsid_registry.csv`.

Key columns:

- `sec_codes.csv`: `code,name,status,form_class,definition,maps_from,successor,since_snapshot`
- `gsid_registry.csv`: `gsid,cgid,sec_code,param_json,since_snapshot` — the offline GSID lookup table
- `question_nodes.csv`: `route,node_id,question,answer_token,next_node,assignment,because_text`


*[Editorial bridge.]* The authoritative repository files are the snake_case CSVs under `dictionaries/` per [docs/repository-structure.md](../docs/repository-structure.md) §3, and every dictionary change passes the machine-checked pre-release gates of [GOVERNANCE.md](../GOVERNANCE.md) §5 (unique codes per namespace; no edits to published rows; status-transition rules; `UPPER_SNAKE` enum tokens; no bare unqualified codes; proposal citation on every new row).
