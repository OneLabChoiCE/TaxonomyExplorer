# SMHE / SectionHub Material-Handling Taxonomy Standard

**Document:** SectionHub Material Handling Taxonomy Standard v1.0 — DRAFT for review
**Companion documents:** SMHE Identifier Standard v2.0 (draft), GSID Standard v2.0 (draft), SectionHub Taxonomy Explorer public documentation
**Status:** DRAFT — not yet balloted
**Date:** 2026-07-02

> All identifiers appearing in examples in this document (e.g., `GS-004217`, `CMP-000482`) are **illustrative** and shall not be treated as assigned registry values.

---

## Part 0 — Scope, Principles, and Architecture Overview

### 0.1 Scope

This standard defines a layered identification and classification architecture for material-handling and industrial-storage products, covering:

- canonical 2D cross-sectional geometry (sections);
- 3D manufactured components;
- assembly-level products;
- product families and market systems (RMI- and SMA-scope equipment);
- industry designations (AISC, AISI, GB/T, EN, JIS, AS/NZS, and others);
- manufacturer part numbers, aliases, and commercial names;
- configuration identity;
- test and certification evidence;
- versioned, immutable registry snapshots.

It is designed for a 30-year service life: identity layers are separated so that any one layer can evolve, be extended, or be superseded without breaking the others.

### 0.2 Foundational principles (normative)

- **P1 — Identity is a reference key.** An identifier SHALL identify; it SHALL NOT describe. Descriptive data (dimensions, materials, finishes, capacities) SHALL live in structured fields keyed by the identifier. (Carried forward from SMHE Identifier Standard v1.)
- **P2 — GSID is 2D-only.** GSID SHALL identify canonical 2D cross-sectional geometry only. Assemblies, products, components, test setups, manufacturer part numbers, certification records, and commercial SKUs SHALL NOT receive GSIDs. (Carried forward from GSID Standard v1.)
- **P3 — Classification is geometry- and function-driven, never name-driven.** Manufacturer naming, marketing names, and SKUs SHALL NOT control classification. They attach as alias/part records that point *at* classified objects.
- **P4 — Configuration-driven identity.** Identity SHALL be determined by configuration, not by specimen count. Identical configurations SHALL collapse to one identifier. Ten tested specimens of one configuration are one ConfigurationID with one or more evidence records. (Carried forward from the SMHE configuration clarification.)
- **P5 — Fields, not codes, for variation.** Attribute variation that belongs in structured fields (edge condition, finish, wire diameter, mesh pattern, hole pattern, span direction, channel count, thickness, open area) SHALL NOT be encoded into identifiers or spawn new codes. (Generalized from the SMHE decking family-code work.)
- **P6 — One namespace per code type.** Section shapes, product families, assembly types, component roles, and configuration groups SHALL each occupy a separate namespace. A bare three-character code has no meaning; only a namespace-qualified code does.
- **P7 — Determinism.** Given the same inputs and the same registry snapshot, classification, code assignment, designation generation, and ID derivation SHALL produce the same outputs. No AI inference is permitted as an authoritative classifier.
- **P8 — Immutability and audit safety.** Published identifiers SHALL never be reused, re-meant, or retroactively altered. Corrections occur by deprecation-with-successor, recorded in snapshots.
- **P9 — Public reproducibility.** The public dictionary and rule layer SHALL be sufficient for an independent party to classify an object and derive its content-addressed identifiers without proprietary SMHE data. Registry-assigned serial identifiers (e.g., GSID) require a registry lookup, which is satisfied by the published public snapshot files.

### 0.3 Architecture overview

The architecture is a set of **separate but compatible identity layers**, linked by references, never merged into one overloaded ID:

```
GEOMETRY LAYER (domain-neutral)
  SectionShapeCode (SEC:) ──► CanonicalGeometryID (CG…) ◄──1:1──► GSID (GS-…)
                                        ▲
                                        │ maps to (many:1)
  IndustryDesignationID (DSG-…) ────────┘

PRODUCT LAYER (domain-scoped: MH)
  DomainCode ─► ProductFamilyCode (FAM:) ─► AssemblyTypeCode (ASM:)
                                                    │
  ComponentRoleCode (ROL:) ─► ComponentID (CMP-…) ──┤ participates in
                                    │               ▼
                                    └────► AssemblyProductID (ASP-…)
  ComponentID references GSID for its cross-section (when prismatic)

CONFIGURATION LAYER
  ConfigurationGroup (CFG:) ─► Configuration Template ─► ConfigurationID (CF…)
  ComponentID and AssemblyProductID each bind to a ConfigurationID

NAMING LAYER (zero classification authority)
  ManufacturerPartID (MPN-…), AliasID (ALS-…) ─► point at any registry object

EVIDENCE LAYER
  TestID (TST-…), CertificationID (CRT-…) ─► reference object + ConfigurationID + SnapshotID

GOVERNANCE LAYER
  SnapshotID (SNAP-…) ─► immutable release of all dictionaries and registry state
```

Every arrow is a foreign-key reference in a normalized database. No layer's identifier embeds another layer's data.

---

## Part 1 — Taxonomy Hierarchy (Deliverable 1)

### 1.1 The canonical classification path

Classification proceeds along six levels, from broadest context to most specific geometry:

| Level | Layer | Namespace / prefix | Example |
|---|---|---|---|
| L0 | Domain | DomainCode (bare, 2-char) | `MH` |
| L1 | Product family | `FAM:` | `FAM:SPR` (selective pallet rack) |
| L2 | Assembly type | `ASM:` | `ASM:FRM` (upright frame) |
| L3 | Component role | `ROL:` | `ROL:COL` (column/upright) |
| L4 | Section shape | `SEC:` | `SEC:OCL` (open C, lipped) |
| L5 | Canonical geometry | `GS-` / `CG…` | `GS-004217` |

Rendered as a classification path string:

```
MH / FAM:SPR / ASM:FRM / ROL:COL / SEC:OCL / GS-004217
```

### 1.2 Rules for the hierarchy

- **H1.** The classification path is a **navigation and context structure**, not an identifier. No identifier SHALL encode the path. Objects are identified by their layer IDs; the path is derived by following references.
- **H2.** The hierarchy is a **DAG, not a strict tree**. A section shape (e.g., `SEC:OCL`) legitimately appears under many component roles, assembly types, and families. A component role (e.g., `ROL:BPL`) appears under many assembly types. Multi-parenting is expected and permitted.
- **H3.** **Entry at any level is valid.** A bare section is classified `SEC:OCL / GS-004217` with no product context. A component may exist with no assembly context. Lower levels never require upper levels.
- **H4.** Levels L1–L3 are **domain-scoped** (they carry material-handling meaning). Levels L4–L5 are **domain-neutral shared infrastructure**: the same `SEC:` dictionary and GSID registry serve any future domain.
- **H5.** Each level answers exactly one question:
  - L0: *What industry domain governs the product vocabulary?*
  - L1: *What market/system family does the product belong to?*
  - L2: *What kind of assembly is it structurally/functionally?*
  - L3: *What functional role does this part play inside assemblies?*
  - L4: *What cross-section topology class is this?*
  - L5: *Which exact canonical cross-section geometry is this?*
- **H6.** An object SHALL be classified at the level matching its nature: sections at L4–L5; components at L3 (with an L4–L5 reference when prismatic); assemblies at L2; families at L1. Classifying an assembly at L4–L5 is a **prohibited boundary violation** (see Part 5 and Part 14).

---

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

---

## Part 3 — Three-Character Code Dictionary (Deliverable 3) and the OCS/OCL Ruling

### 3.1 Ruling on OCS / OCL / OCU / OCR / CHN / CFS (the specific decision requested)

**Ruling R1 — OCL is adopted** as the preferred three-character code for *Open C-shape, Lipped* (simple stiffening lip, one fold per lip). It is the default classification for lipped cold-formed C-sections including AISI C-sections-with-lips and the base topology of most roll-formed rack upright profiles.

**Ruling R2 — OCU is adopted** for *Open C-shape, Unlipped* (plain C, no lip elements, uniform thickness folded profile).

**Ruling R3 — OCS is demoted to SUPERCLASS status.** OCS remains in the dictionary as the *Open C-section umbrella*: valid as a query rollup, as a classification-path grouping node, and as the preserved meaning of legacy records. OCS SHALL NOT be assigned as the terminal shape code of any new canonical geometry record after adoption of GSID Standard v2.0. Existing records tagged OCS SHALL be migrated to OCL or OCU where lip condition is determinable; where indeterminable, they retain OCS with flag `LEGACY_UNRESOLVED` until reviewed. Rationale: an umbrella code that can also be a terminal assignment creates two names for the same geometry and makes lip condition — which changes section properties fundamentally — invisible to the classifier.

**Ruling R4 — OCR is adopted (ACTIVE)** for *Open C-shape, Return-lipped* (each lip has a second fold returning toward the web; also called double-lip or re-entrant lip). Justification per rule D-1 (Part 5): the return fold adds topology elements and requires an extended canonical parameter schema (return length, second bend radius). It is prevalent in rack upright profiles, so demand is established, not speculative. More complex multi-fold proprietary open profiles that exceed the OCR schema SHALL be proposed as new codes through governance, not forced into OCR.

**Ruling R5 — CHN is adopted** for *hot-rolled channel* geometry (AISC C and MC, EN UPN/UPE, GB/T hot-rolled channel, JIS channel). Justification: although its root topology (web + two flanges) matches OCU, its canonical parameter schema is different in kind — fillet radii, flange taper/slope, root radii, non-uniform thickness — versus the uniform-thickness, bend-radius schema of folded sections. Different canonical parameter schema → different shape code (rule D-1). The correlation with the hot-rolled process is real but incidental; the code is defined by geometry schema, not process.

**Ruling R6 — CFS is rejected as a shape code.** "Cold-formed steel" is a material/manufacturing category, not a cross-section topology. It SHALL NOT appear in the `SEC:` namespace. The concept survives as an informative `form_class` facet on shape-code dictionary entries (`FOLDED_UNIFORM_T`, `HOT_ROLLED_FILLETED`, `WELDED`, `EXTRUDED`) usable for filtering, and MAY be used in domain/category documentation.

### 3.2 Section shape codes (`SEC:` namespace)

Statuses: **A** = Active, **S** = Superclass (classifier-only), **R** = Reserved, **X** = Rejected.

| Code | St | Name | Definition / scope | Maps from |
|---|---|---|---|---|
| `OCS` | S | Open C superclass | Any open C-family profile; rollup only | legacy SMHE OCS records |
| `OCL` | A | Open C, lipped | Folded C with one stiffening lip fold per flange | AISI lipped C-studs; rack upright base topology |
| `OCU` | A | Open C, unlipped | Folded plain C, uniform thickness, no lips | AISI plain C track/channel |
| `OCR` | A | Open C, return-lipped | Folded C with return (second-fold) lips | proprietary rack upright profiles |
| `CHN` | A | Channel, hot-rolled | Filleted channel w/ tapered or parallel flanges | AISC C, MC; EN UPN/UPE; GB/T channel; JIS channel |
| `IWF` | A | I-shape, wide/parallel flange | Filleted I/H, parallel flange faces | AISC W, HP, M; EN HE/IPE/UB/UC; GB/T HW/HM/HN; JIS H; AS/NZS UB/UC |
| `ITF` | A | I-shape, taper flange | Filleted I with sloped inner flange faces | AISC S; EN IPN; GB/T 706 I; JIS I |
| `ANG` | A | Angle | Two-leg L, equal or unequal (parameters) | AISC L; EN/GB/JIS/AS-NZS angles |
| `TEE` | A | Tee | T-profile incl. split tees | AISC WT/MT/ST; EN T |
| `HSS` | S | Hollow structural superclass | Any closed single-cell hollow; rollup only | AISC "HSS" usage |
| `RHS` | A | Rectangular hollow | Closed rectangular single-cell hollow | AISC HSS rect; EN/AS-NZS RHS; GB/T; JIS |
| `SHS` | A | Square hollow | Closed square single-cell hollow | AISC HSS square; EN/AS-NZS SHS |
| `CHS` | A | Circular hollow | Closed circular hollow, incl. pipe geometry | AISC HSS round, Pipe; EN/AS-NZS CHS; GB/T; JIS |
| `PLT` | A | Plate / flat | Rectangular solid, plate or sheet stock | AISC PL; plate to all systems |
| `BAR` | S | Solid bar superclass | Any solid bar; rollup only | — |
| `RBR` | A | Round bar / rod / wire | Solid circular; includes wire stock | round bar; mesh wire stock |
| `FBR` | A | Flat bar | Solid narrow rectangular bar | flat bar; grating bearing bar |
| `SBR` | R | Square bar | Reserved pending demand | — |
| `HBR` | R | Hex bar | Reserved pending demand | — |
| `ZEE` | S | Z superclass | Any Z-family profile; rollup only | — |
| `ZLP` | A | Z, lipped | Folded Z with stiffening lips | AISI lipped Z purlins |
| `ZUN` | A | Z, unlipped | Folded plain Z | AISI plain Z |
| `OMG` | A | Omega / hat, open | Open hat profile (crown, two webs, two outstand flanges) | hat channels; deck supports |
| `SGM` | A | Sigma | Folded C-family with web indents (sigma profile) | sigma purlins/rack members |
| `STB` | A | Step beam profile | Closed/semi-closed roll-formed beam profile with integral step ledge | rack step beams |
| `BXB` | A | Interlocked box beam profile | Closed multi-piece interlocked/seamed rectangular beam profile | rack box beams |
| `CFS` | X | — | Rejected: category, not shape (Ruling R6) | — |
| `PIP` | X | — | Rejected: pipe is a designation system → geometry is `CHS` | ASTM pipe designations map via `DSG-` |
| `TUB` | X | — | Rejected: ambiguous; use `RHS`/`SHS`/`CHS` | — |

Notes:
- Perforation/hole patterns are **not** section topology (they are discrete along length) and never affect the `SEC:` code — see rule G-3.
- Built-up continuously connected multi-part profiles other than `BXB`/`STB` (e.g., back-to-back C) are handled per rule D-4; code `BUP` is a candidate reservation, deliberately not pre-assigned.

### 3.3 Component role codes (`ROL:` namespace)

| Code | St | Name | Scope notes |
|---|---|---|---|
| `COL` | A | Column / upright post | Rack uprights, shelving posts, platform columns |
| `BEM` | A | Beam / load member | Pallet rack load beams, shelf beams, platform joists |
| `BRC` | A | Brace | Diagonal/horizontal via `CFG:SUP` fields, frame or plan bracing |
| `ARM` | A | Arm | Cantilever arms, incl. straight/inclined via fields |
| `BAS` | A | Base member | Cantilever base rails, movable-base members |
| `BPL` | A | Base plate / footplate | One code; style (footplate, extended, seismic) is a config field — two codes would split one function |
| `DKS` | A | Deck support member | Support channels, hat stiffeners, deck reinforcements |
| `MSH` | A | Wire mesh panel | Welded/woven mesh treated as a single homogeneous panel component |
| `PAN` | A | Panel | Solid or perforated panel; perforation is `CFG:PRF` fields, not a role split |
| `SHF` | A | Shelf | Formed shelf components in shelving/workstations |
| `CON` | A | Connector | Beam end connectors, clip-in brackets, arm connectors |
| `CLP` | A | Clip / retainer | Safety clips, deck retainers, shelf clips |
| `ADP` | A | Adapter | Interface adapters between systems |
| `GRD` | A | Guard member | Column protectors, rail members, mesh guard members |
| `STP` | A | Stop | Pallet stops, backstops |
| `SPC` | A | Spacer | Row spacers, wall spacers |
| `ANC` | A | Anchor | Concrete anchors, hold-downs |

### 3.4 Assembly type codes (`ASM:` namespace)

| Code | St | Name | Scope notes |
|---|---|---|---|
| `DCK` | S | Deck superclass | Rollup for all decking assemblies |
| `WDK` | A | Wire deck | Mesh + support members, all edge/attachment variants |
| `SDK` | A | Solid deck | Solid panel deck |
| `PDK` | A | Perforated deck | Perforated panel deck |
| `BGD` | A | Bar grating deck | Bearing bar + crossbar grating deck |
| `FRM` | A | Upright frame | Columns + bracing (+ base plates) as braced frame |
| `BMA` | A | Beam assembly | Beam member + end connectors (+ locks) |
| `CBA` | A | Column-base assembly | Column + footplate/base plate joined |
| `ACA` | A | Arm-column assembly | Cantilever arm + column connection set |
| `CVB` | A | Cantilever base assembly | Base rail + column interface (+ anchors) |
| `SHU` | A | Shelving unit | Posts + shelves + sway bracing etc. |
| `WPF` | A | Work platform | Elevated platform assembly (rack-supported or freestanding via family) |
| `GDA` | A | Guarding assembly | Guard rail systems, mesh partitions, protectors as systems |
| `CNT` | A | Container | Rigid container assemblies |
| `DRW` | A | Drawer system | Modular drawer cabinets/inserts |
| `LKR` | A | Locker | Locker units |

### 3.5 Product family codes (`FAM:` namespace, domain `MH`)

| Code | St | Name | Industry anchor |
|---|---|---|---|
| `SPR` | A | Selective pallet rack | RMI / ANSI MH16.1 scope |
| `CLR` | A | Cantilever rack | RMI cantilever scope |
| `DKG` | A | Industrial storage rack decking | RMI decking scope |
| `RSP` | A | Rack-supported platforms | RMI scope |
| `RPA` | A | Rack protection & accessories | rack accessory scope |
| `SHV` | A | Steel shelving | SMA shelving scope |
| `WPL` | A | Industrial work platforms | SMA scope |
| `WKS` | A | Workstations | SMA scope |
| `MDR` | A | Modular drawer storage | SMA scope |
| `LCK` | A | Lockers | SMA scope |
| `MBS` | A | Movable-base storage | SMA scope |
| `STC` | A | Storage containers | SMA scope |

### 3.6 Configuration group codes (`CFG:` namespace)

Configuration groups are **schema organizers**: each names a group of structured fields with controlled units and enumeration tokens. They never identify objects.

| Code | Name | Example fields (illustrative) |
|---|---|---|
| `DIM` | Principal dimensions | width, depth, length, height, nominal vs actual |
| `MAT` | Material specification | spec, grade, Fy, coating class of raw material |
| `EDG` | Edge condition | `edge_style: FLUSH \| WATERFALL \| REVERSE_WATERFALL \| BOXED`, waterfall drop, edge reinforcement |
| `MPT` | Mesh pattern | aperture_x, aperture_y, pattern: `SQUARE \| RECT`, orientation |
| `WIR` | Wire specification | wire_diameter, wire grade, pre/post-galvanized |
| `SPD` | Span direction | `span: FRONT_TO_BACK \| SIDE_TO_SIDE` |
| `SUP` | Support arrangement | support_count, support_role ref, spacing[], orientation (`LEGS_DOWN \| LEGS_UP`), inversion |
| `JNT` | Joining / attachment | method: `RESISTANCE_WELD \| FUSION_WELD \| CLINCH \| BOLT \| RIVET \| INTERLOCK`, weld schedule class, fastener spec |
| `FIN` | Finish system | system: `POWDER \| PAINT \| PRE_GALV \| HOT_DIP_GALV \| ZINC_PLATE`, color (informative) |
| `PRF` | Perforation pattern | pattern id, open_area_pct, hole shape/size/pitch |
| `HOL` | Hole / punch pattern | pattern id, pitch, gauge, hole geometry, start offset (for columns/beams) |
| `END` | End condition | end fittings, cope/notch, cap, swage |

Field-level detail lives in **Configuration Templates** (Part 4, §4.7), versioned per assembly type or component role.

---

## Part 4 — Identity Layer Definitions (Deliverable 4)

Each definition states: what it identifies, what it never identifies, format, assignment, and mutability.

### 4.1 DomainCode
- **Identifies:** the top-level industry domain that scopes the product vocabulary (families, assembly types, configuration templates). v1.0 defines one domain: `MH` — Material Handling & Industrial Storage Equipment.
- **Never identifies:** shapes or geometry (the geometry layer is domain-neutral, shared infrastructure).
- **Format:** 2-char alpha, bare.
- **Assignment:** by standard revision only. **Mutability:** immutable.

### 4.2 SectionShapeCode (`SEC:`)
- **Identifies:** a cross-section **topology class** — a family of 2D profiles sharing one canonical parameter schema (the ordered set of dimensions, radii, angles that fully describe any member of the class).
- **Never identifies:** specific dimensions, manufacturing process, products, components, roles, or manufacturers.
- **Format:** `SEC:` + 3-char alpha.
- **Assignment:** governance proposal per rule D-1. **Mutability:** status changes only; meaning frozen.

### 4.3 CanonicalGeometryID (CGID)
- **Identifies:** exactly one canonical 2D geometry record: `{shape_code, canonicalization_rules_version, normalized parameter vector}` after applying the canonicalization rules (canonical units = mm; canonical rounding, e.g., 0.05 mm for thickness and 0.1 mm for envelope dimensions; canonical orientation; canonical parameter order).
- **Never identifies:** anything 3D; anything with along-length features; tolerance-band commercial variants (those collapse via canonical rounding).
- **Format:** `CG<rulesMajor>-<12-hex SHA-256 prefix>` of the normalized record. **Derived, content-addressed, reproducible by anyone** — this is what makes public deterministic tooling possible without registry access.
- **Assignment:** computed, never issued. **Mutability:** immutable by construction; a new rules version yields new CGIDs while GSIDs persist.

### 4.4 GSID
- **Identifies:** the stable, registered, public **grouping identity of one canonical cross-section geometry equivalence class**. One GSID ↔ one current CGID (1:1), with history: when canonicalization rules are revised, the GSID persists and re-points to the re-derived CGID; superseded CGIDs are retained in history.
- **Never identifies:** assemblies, products, components, manufacturer parts, SKUs, test setups, certification records. (Boundary P2 — absolute.)
- **Why both GSID and CGID:** CGID is a reproducible fingerprint but is long, opaque, and changes when canonicalization rules change. GSID is the short, stable, human-manageable public key that survives rule revisions and carries registry history.
- **Format:** `GS-` + 6-digit serial. **Assignment:** registry, deterministic: canonicalize → compute CGID → if a GSID already maps to this equivalence class, return it; else issue the next serial. **Mutability:** immutable; never reused.

### 4.5 IndustryDesignationID
- **Identifies:** one designation **string within one designation system and edition** (e.g., AISC `W12X50`; GB/T `HN400X200`; EN `IPE 300`; pipe `NPS 4 SCH 40`), as a record `{system, designation, edition, source table}` that **maps to** a GSID (many designations : one GSID).
- **Never identifies:** the geometry itself (that is the GSID's job); never a product.
- **Format:** `DSG-<SYSTEM>-<NORMALIZED STRING>` (uppercase, `X` as separator, spaces removed); edition held as a field.
- **Assignment:** registry import of published tables. **Mutability:** immutable; corrections by deprecation-with-successor.

### 4.6 ProductFamilyCode (`FAM:`), AssemblyTypeCode (`ASM:`), ComponentRoleCode (`ROL:`)
- **FAM identifies** a market/system family aligned to an industry-standard scope; it answers "what system is this sold and engineered as part of."
- **ASM identifies** the structural/functional kind of an assembled product; it answers "what is this assemblage."
- **ROL identifies** the function a component performs in assemblies; it answers "what does this part do." Orthogonal to shape and family.
- **Never:** none of the three ever encodes geometry, dimensions, manufacturer, or performance.
- **Format:** namespace-qualified 3-char codes. **Assignment:** governance. **Mutability:** status changes only.

### 4.7 ConfigurationGroup (`CFG:`) and Configuration Templates
- **ConfigurationGroup identifies** a named group of structured attributes (fields + units + enumeration tokens).
- A **Configuration Template** is a versioned, published schema for a given `ASM:` or `ROL:` code listing: which CFG groups apply; which fields exist; which fields are **identity-bearing** vs **informative**; canonical units, rounding, and field order for hashing.
- Identity-bearing fields (e.g., wire diameter, support count, joining method) participate in the ConfigurationID hash. Informative fields (e.g., paint color name, marketing finish name) do not.

### 4.8 ConfigurationID
- **Identifies:** one fully-bound set of identity-bearing configuration values under one Configuration Template version — the physical as-built configuration of a component or assembly.
- **Never identifies:** specimens (P4: ten identical specimens = one ConfigurationID); never performance ratings (ratings are evidence-layer outputs, not configuration).
- **Format:** `CF<templateRulesMajor>-<12-hex SHA-256 prefix>` of the normalized identity-bearing field record. Derived, content-addressed, reproducible.
- **Assignment:** computed. **Mutability:** immutable by construction.

### 4.9 ComponentID
- **Identifies:** one registered **component definition**: `{ROL code, section reference (GSID) when prismatic, material spec, Configuration Template ref, ConfigurationID or declared open parameters}`. A component definition MAY be **parametric** (e.g., cut-to-length column: length declared as an open parameter); a fully-bound instance binds a ConfigurationID.
- **Component vs assembly test:** an object is a *component* if it is monolithic (one piece, possibly punched/formed) **or** a homogeneous repeating fabrication acting as a single planar/linear element (e.g., welded wire mesh panel). It is an *assembly* if it joins parts that carry **distinct roles** (column + footplate; beam + connectors; mesh + support channels).
- **Format:** `CMP-` + serial. **Assignment:** registry. **Mutability:** immutable; supersede, never edit.

### 4.10 AssemblyProductID
- **Identifies:** one registered **assembly product definition**: `{FAM, ASM, bill of roles (ROL → ComponentID refs + counts), assembly Configuration Template ref, assembly ConfigurationID}`.
- **Never receives:** a GSID or a `SEC:` code under any circumstances.
- **Format:** `ASP-` + serial. **Assignment:** registry. **Mutability:** immutable; supersede, never edit.

### 4.11 ManufacturerPartID
- **Identifies:** one manufacturer part-number record: `{manufacturer, part number string, points-at (CMP/ASP/GS), validity period, commercial description}`.
- **Authority:** zero. It never controls classification, never seeds codes, never becomes a GSID. It is a pointer for cross-reference and search.
- **Format:** `MPN-` + serial (manufacturer and raw string are fields — part-number strings are not identifier-safe). **Mutability:** record immutable; re-pointing = new record + deprecation.

### 4.12 AliasID
- **Identifies:** one name record (legacy name, marketing name, regional term, misspelling in common use) pointing at exactly one registry object of any layer.
- **Authority:** zero (same as MPN). **Format:** `ALS-` + serial.

### 4.13 TestID
- **Identifies:** one test event or test series: `{object ref (CMP/ASP), ConfigurationID, protocol ref (e.g., ANSI MH16.1 §, ANSI MH26.2 §, AISI S100 ch.), lab, date, specimen count, results ref, SnapshotID at time of test}`.
- **Never identifies:** the object tested; never modifies configuration identity. New specimens of the same configuration → same ConfigurationID, additional evidence.
- **Format:** `TST-<year>-<serial>`.

### 4.14 CertificationID
- **Identifies:** one attestation record: `{scope (object ref + ConfigurationID(s)), basis (TestIDs and/or analysis), certifying body, validity window, SnapshotID}`.
- **Format:** `CRT-<year>-<serial>`. Expiry/renewal = new record; never mutation.

### 4.15 SnapshotID
- **Identifies:** one immutable release of the entire registry state: all dictionaries, templates, registered IDs, and mappings, with a content hash.
- **Every assignment cites** the SnapshotID under which it was made; every Explorer output embeds the SnapshotID it used. This is the audit and backward-compatibility anchor.
- **Format:** `SNAP-<semver>`; content hash held as a field. Semver: MAJOR = breaking rule change (new canonicalization major), MINOR = additive codes/templates, PATCH = corrections by deprecation.

---

## Part 5 — Difference Decision Rules (Deliverable 5)

### 5.1 The decision table

| A difference in… | Creates… | Rule |
|---|---|---|
| Cross-section topology / canonical parameter **schema** | new `SEC:` code | D-1 |
| Canonical parameter **values** (beyond canonical rounding) | new CGID → new GSID (if class is new) | D-2 |
| Along-length discrete features (holes, slots, punches) | new component configuration only | G-3 |
| Any identity-bearing configuration field of a component | new ConfigurationID → new ComponentID binding | D-5 |
| BOM (roles, member components, counts), arrangement, joining method, identity-bearing assembly field | new assembly ConfigurationID → new AssemblyProductID | D-6 |
| Market/system scope recognized by an industry standard | new `FAM:` code | D-7 |
| Name only (manufacturer, marketing, legacy, regional) | new `MPN-`/`ALS-` record only | D-8 |
| Evidence only (new test, new certification, more specimens) | new `TST-`/`CRT-` record only | D-9 |

### 5.2 Rules in full

- **D-1 (new shape code).** A new `SEC:` code is justified **only** when the candidate geometry cannot be described by any existing code's canonical parameter schema, and the gap cannot be closed by a compatible schema extension. A *compatible extension* adds optional parameters whose default values reproduce all existing CGIDs unchanged (e.g., adding optional web-rib parameters to `OCL`); governance MAY apply it as a MINOR revision instead of a new code. Parameter **values**, manufacturing process, manufacturer identity, market usage, and product context SHALL NOT justify a new shape code.
- **D-2 (new canonical geometry / GSID).** Any difference in normalized parameter values that survives canonical rounding produces a new CGID automatically (content addressing). A new GSID is issued only if no existing GSID maps to that equivalence class. Differences **within** canonical rounding collapse to the same CGID/GSID — this is the anti-proliferation valve for mill/roll tolerance noise.
- **G-3 (geometry boundary).** Canonical geometry describes the **continuous prismatic cross-section**: features constant along the extrusion axis (folds, ribs, continuous stiffeners) belong to geometry; features discrete or periodic along the length (teardrop punching, slots, notches, weld nuggets, embossed logos) belong to component configuration (`CFG:HOL`, `CFG:END`, …). A punched rack column and its unpunched blank share the same GSID.
- **D-4 (built-up profiles).** A multi-piece profile MAY receive a canonical geometry (and hence GSID) only if the pieces are continuously connected along the full length so the cross-section is constant and acts as one section (e.g., interlocked `BXB`). Intermittently connected members (stitch-welded back-to-back, laced members) are **components/assemblies**, not sections.
- **D-5 (new component configuration).** Any change to an identity-bearing field in the component's Configuration Template — hole pattern, material grade, finish **system**, end condition, bound length — produces a new ConfigurationID. Informative-field changes (color name, label) do not.
- **D-6 (new assembly configuration).** Any change to the assembly's bill of roles, member ComponentIDs, member counts, spatial arrangement class, joining method, or any identity-bearing assembly field produces a new assembly ConfigurationID. Support count 3→4: new configuration. Weld → clinch attachment: new configuration. Same everything, different quantity ordered: same configuration (P4).
- **D-7 (new product family).** A new `FAM:` code requires a market/system scope distinction recognized at industry-standard level (e.g., a distinct RMI/SMA specification scope or equivalent), not a manufacturer's product line naming.
- **D-8 (alias only).** If the physical object and configuration are unchanged and only the name differs, the change is a naming-layer record. This is the firewall that keeps commercial naming out of taxonomy.
- **D-9 (evidence only).** New tests, recertification, more specimens, new lab: evidence-layer records referencing the existing ConfigurationID. Evidence SHALL NOT mint object identity.

### 5.3 Worked micro-examples of the table

- Lip added to an unlipped C die → schema changes (`OCU` → `OCL`): different shape code, new CGID, new GSID (D-1/D-2).
- Same OCL die, web widened 5 mm → same schema, new values: same `SEC:OCL`, new CGID, new GSID (D-2).
- Same column, teardrop punch pitch changed 50→75 mm → same GSID, new component ConfigurationID (G-3, D-5).
- Same wire deck, 3 channels → 4 channels → same `ASM:WDK`, new assembly ConfigurationID (D-6).
- Same wire deck sold under a new brand name → new `ALS-`/`MPN-` record only (D-8).
- Same deck configuration retested at a second lab → new `TST-` record only (D-9).

---

## Part 6 — Worked Example: Wire Deck (Deliverable 6)

### 6.1 The object

An industrial storage rack wire deck, nominal 1160 mm wide × 1170 mm deep: welded wire mesh (4.0 mm wire, 50 × 100 mm apertures) resistance-welded to three U-channel support members (straight legs, legs-down), waterfall front edge, flush rear and side edges, powder-coat finish, spanning front-to-back.

### 6.2 Why this is an assembly, never a section

A wire deck joins parts carrying **distinct roles** (mesh panel + support members) — the component-vs-assembly test of §4.9. It has no cross-section constant along any axis, so it has no canonical 2D geometry. Per P2 and H6, a wire deck SHALL NOT receive a GSID. Classification path:

```
MH / FAM:DKG / ASM:WDK
```

### 6.3 Layer-by-layer representation

| Object | Layer | Code / ID (illustrative) | Notes |
|---|---|---|---|
| The deck (product) | AssemblyProductID | `ASP-000173` | type `ASM:WDK`, family `FAM:DKG` |
| Deck configuration | ConfigurationID | `CF1-8C41D02E97BA` | hash of identity-bearing fields, §6.5 |
| Mesh panel | ComponentID | `CMP-000611`, role `ROL:MSH` | homogeneous repeating fabrication → component (§4.9) |
| Mesh wire stock geometry | GSID | `GS-000891` (`SEC:RBR`, d = 4.0 mm) | referenced from the mesh component's `CFG:WIR` as **stock geometry** — the mesh panel itself is non-prismatic and carries no `section_ref` (§4.9) |
| Support channel | ComponentID | `CMP-000612`, role `ROL:DKS` | parametric length, bound per deck depth |
| Channel cross-section | GSID | `GS-002734` (`SEC:OCU` 32×25×1.5 mm) | one GSID regardless of which deck uses it |
| Mesh-to-channel attachment | `CFG:JNT` fields | `method = RESISTANCE_WELD` | configuration, never identity of any code |
| Commercial name "QuickDeck 46×46" | AliasID | `ALS-002911` → `ASP-000173` | zero classification authority (P3) |
| Manufacturer SKU | ManufacturerPartID | `MPN-018240` → `ASP-000173` | pointer only (D-8) |

The mesh panel is a **component**, not an assembly: its wires are a homogeneous repeating fabrication acting as one planar element; no wire carries a distinct role (§4.9). Its identity-bearing configuration (wire diameter, apertures, sheet size) hashes to its own ConfigurationID, e.g. `CF1-2E90A17BD534`.

### 6.4 The flared-channel teaching point (rule G-3 in action)

| Case | Where it lives | Effect |
|---|---|---|
| Channel legs flared **continuously along the full length** (legs open at, say, 100° instead of 90°) | Geometry layer | The flange opening angle is a canonical parameter of the `SEC:OCU` schema. New parameter value → new CGID → new GSID (e.g. `GS-002735`), per D-2. Same shape code. |
| Channel **ends flared only** (last 30 mm splayed for lay-in fit on a beam) | Configuration layer | Cross-section is unchanged over the prismatic body; the end treatment is discrete along length → `CFG:END` field (`end_flare = TRUE`, flare length, flare angle), per G-3. Same GSID. |

This is the general rule: constant-along-length features are geometry; local/periodic features are configuration.

### 6.5 The deck configuration record (Configuration Template `ASM:WDK`, v1)

Identity-bearing (**IB**) fields participate in the `CF1-…` hash; informative (**INF**) fields do not (§4.7).

| Group | Field | Value | IB? |
|---|---|---|---|
| `CFG:DIM` | nominal_width / nominal_depth | 1160 / 1170 mm | IB |
| `CFG:MPT` | aperture_x / aperture_y / pattern | 50 / 100 mm / `RECT` | IB |
| `CFG:WIR` | wire_diameter / wire_condition | 4.0 mm / `PRE_GALV` | IB |
| `CFG:SPD` | span | `FRONT_TO_BACK` | IB |
| `CFG:SUP` | support_count / support_component / orientation / spacing | 3 / `CMP-000612` / `LEGS_DOWN` / [290, 580, 290] mm | IB |
| `CFG:EDG` | edge_style front / rear / sides; waterfall_drop | `WATERFALL` / `FLUSH` / `FLUSH`; 38 mm | IB |
| `CFG:JNT` | method / weld_schedule_class | `RESISTANCE_WELD` / `WS-2` | IB |
| `CFG:MAT` | channel thickness (via `CMP-000612` section, t = 1.5 mm); mesh grade | ref / SAE 1008 | IB |
| `CFG:FIN` | system / color | `POWDER` / gray (color) | system IB; color INF |

Channel thickness never appears as a deck-level free field: it is a parameter of the channel's canonical geometry (`GS-002734`), referenced through the support component. Load capacity does **not** appear at all — ratings are evidence-layer outputs (E-104), derived from `TST-…` records against this ConfigurationID.

### 6.6 Structured JSON

```json
{
  "schema_version": "1.0",
  "snapshot_id": "SNAP-1.0.0",
  "object_type": "assembly",
  "classification_path": ["MH", "FAM:DKG", "ASM:WDK"],
  "codes": { "domain": "MH", "family": "FAM:DKG", "assembly_type": "ASM:WDK" },
  "identifiers": {
    "assembly_product_id": "ASP-000173",
    "configuration_id": "CF1-8C41D02E97BA"
  },
  "components": [
    { "role": "ROL:MSH", "component_id": "CMP-000611", "count": 1 },
    { "role": "ROL:DKS", "component_id": "CMP-000612", "count": 3,
      "section_ref": { "gsid": "GS-002734", "section_shape": "SEC:OCU" } }
  ],
  "configuration": {
    "CFG:DIM": { "nominal_width_mm": 1160, "nominal_depth_mm": 1170 },
    "CFG:MPT": { "aperture_x_mm": 50, "aperture_y_mm": 100, "pattern": "RECT" },
    "CFG:WIR": { "wire_diameter_mm": 4.0, "wire_condition": "PRE_GALV",
                 "wire_stock_gsid": "GS-000891" },
    "CFG:MAT": { "mesh_grade": "SAE 1008" },
    "CFG:SPD": { "span": "FRONT_TO_BACK" },
    "CFG:SUP": { "support_count": 3, "orientation": "LEGS_DOWN",
                 "spacing_mm": [290, 580, 290] },
    "CFG:EDG": { "front": "WATERFALL", "rear": "FLUSH", "sides": "FLUSH",
                 "waterfall_drop_mm": 38 },
    "CFG:JNT": { "method": "RESISTANCE_WELD", "weld_schedule_class": "WS-2" },
    "CFG:FIN": { "system": "POWDER", "color": "gray" }
  },
  "designation": "WDK 1160x1170 SUP.count=3 SPD.span=FRONT_TO_BACK EDG.front=WATERFALL",
  "aliases": ["ALS-002911"],
  "evidence": { "tests": ["TST-2026-00114"], "certifications": ["CRT-2026-00042"] },
  "warnings": [],
  "explanations": [
    "ASM:WDK selected: mesh panel joined to distinct-role support members (deck assembly test).",
    "No GSID at deck level: assemblies never receive GSIDs (P2). Section identity appears only on component section_ref entries."
  ],
  "db_mapping": {
    "table": "assembly_product",
    "natural_key": "assembly_product_id",
    "foreign_keys": { "configuration_id": "configuration", "components[].component_id": "component" }
  }
}
```

### 6.7 What changes when — decision-rule outcomes

| Change | Outcome | Rule |
|---|---|---|
| 3 support channels → 4 | New assembly ConfigurationID → new `ASP-…` | D-6 |
| Wire 4.0 → 4.5 mm | New wire GSID (`SEC:RBR` value change), new mesh component configuration, new deck configuration | D-2, D-5, D-6 |
| Waterfall front → flush | New assembly ConfigurationID | D-6 |
| Resistance weld → fusion weld (or clinch) | New assembly ConfigurationID (`CFG:JNT.method`) | D-6 |
| Channel legs continuously flared | New channel CGID/GSID; new support component; new deck configuration | D-2, G-3 |
| Channel ends flared only | Same GSID; new channel component configuration (`CFG:END`); new deck configuration | G-3, D-5, D-6 |
| Same deck, new brand name | New `ALS-…` record only | D-8 |
| Same configuration retested (10 more specimens) | New `TST-…` record only; same ConfigurationID | P4, D-9 |

### 6.8 The prohibited alternative

The overloaded legacy pattern `WDK-46x46-3CH-WF-4GA-WLD` (one ID encoding size, channel count, edge, gauge, and weld method) is **prohibited**: it violates P1 (ID describing), P5 (fields not codes), and P8 (any spec correction changes the ID). A request to issue such an ID — or any GSID for a deck — SHALL be refused by tooling with `E-101: GSID/overloaded identity requested for an assembly product; decks are classified FAM/ASM + ConfigurationID`.

---

## Part 7 — Worked Example: Rack Upright Column (Deliverable 7)

### 7.1 The object

A roll-formed lipped-C rack upright: web 76.2 mm, flanges 41.3 mm, simple lips 12.7 mm, thickness 1.9 mm, teardrop-punched on both flanges at 50.8 mm pitch, supplied cut-to-length. Manufacturer ACME sells it as part "TD-300-16".

### 7.2 One object, every layer

| Layer | Question it answers | Illustrative ID | What would NOT change it |
|---|---|---|---|
| SectionShapeCode | What topology class? | `SEC:OCL` | any dimension change; any hole pattern; any manufacturer |
| CanonicalGeometryID | Which exact canonical profile? | `CG1-7B3E91A0C24D` | hole patterns, length, finish, name (G-3) |
| GSID | Which registered geometry class? | `GS-004217` | punching, length, finish, name; also survives canonicalization-rule revisions (§4.4) |
| ComponentRoleCode | What does the part do? | `ROL:COL` | which frame or system it ends up in |
| ComponentID | Which component definition? | `CMP-000482` | specimen count; commercial naming |
| ConfigurationID (bound) | Which exact as-built configuration? | `CF1-5A0B44E19C77` (L = 4267 mm) | ordering 1 or 10 000 pieces (P4) |
| ManufacturerPartID | What does ACME call it? | `MPN-018233` → `CMP-000482` | nothing about classification depends on this |
| TestID | What evidence exists? | `TST-2026-00087` | does not alter any identity above |
| CertificationID | Who attests what, on what basis? | `CRT-2026-00031` | same |
| SnapshotID | Under which registry release? | `SNAP-1.0.0` | pins every assignment above for audit |

### 7.3 Teaching points

- **(a) Punched = blank.** The punched column and its unpunched roll-formed blank share `GS-004217`. Teardrop punching is discrete along the length → `CFG:HOL` fields on the component (`pattern_id = TEARDROP-A`, `pitch_mm = 50.8`, `start_offset_mm = 25.4`), per G-3 and D-5.
- **(b) Return lips would change the shape code.** If each lip had a second fold returning toward the web, the profile would be `SEC:OCR` (Ruling R4): the return fold adds topology elements outside the OCL parameter schema (D-1).
- **(c) OCS is not assignable.** `SEC:OCS` is a SUPERCLASS rollup (Ruling R3). A tool asked to record this section as OCS SHALL refuse with `E-103` and resolve lip condition to choose `OCL`/`OCU`/`OCR`.
- **(d) The part number points; it never classifies.** `MPN-018233` records `{ACME, "TD-300-16"} → CMP-000482`. If ACME renames it "TD-300X", that is a new `MPN-`/`ALS-` record (D-8). No code, geometry, or component identity moves.
- **(e) Tests attach to configurations.** The stub-column test series per ANSI MH16.1 is `TST-2026-00087`, referencing `CMP-000482` + `CF1-5A0B44E19C77` (the bound test length), protocol clause, lab, date, and `specimen_count = 5`. Testing five more specimens of the same configuration creates a new `TST-…` record — never a new ConfigurationID (P4, D-9).
- **(f) Certification cites tests.** `CRT-2026-00031` attests the column family for use in `FAM:SPR` frames, basis = [`TST-2026-00087`, analysis per AISI S100], validity window, certifying body.
- **(g) Everything is pinned.** Each record above carries `SNAP-1.0.0`. A future snapshot can deprecate or supersede, but can never rewrite, these assignments (P8).

### 7.4 Parametric definition vs bound configuration (§4.9)

| | ComponentID | ConfigurationID |
|---|---|---|
| Catalog definition (cut-to-length) | `CMP-000482` with open parameter `length` | none — parameters unbound |
| As-built / as-tested instance | same `CMP-000482` | `CF1-5A0B44E19C77` (L = 4267 mm) |
| Another length (L = 3658 mm) | same `CMP-000482` | `CF1-91D3E5077F2A` |

The component definition is one registry object; lengths do not proliferate ComponentIDs.

### 7.5 Designations (derived, informative)

- Section: `SMHE OCL 76.2x41.3x12.7x1.9 mm` (no industry designation system covers this proprietary profile — SMHE grammar applies).
- Component: `COL SMHE OCL 76.2x41.3x12.7x1.9 mm L=PARAM` (bound: `… L=4267`).

### 7.6 Structured JSON

```json
{
  "schema_version": "1.0",
  "snapshot_id": "SNAP-1.0.0",
  "object_type": "component",
  "classification_path": ["MH", "FAM:SPR", "ASM:FRM", "ROL:COL", "SEC:OCL"],
  "codes": { "domain": "MH", "family": "FAM:SPR", "assembly_type": "ASM:FRM",
             "component_role": "ROL:COL", "section_shape": "SEC:OCL" },
  "identifiers": {
    "component_id": "CMP-000482",
    "gsid": "GS-004217",
    "canonical_geometry_id": "CG1-7B3E91A0C24D",
    "configuration_id": "CF1-5A0B44E19C77"
  },
  "configuration": {
    "CFG:DIM": { "length_mm": 4267 },
    "CFG:HOL": { "pattern_id": "TEARDROP-A", "pitch_mm": 50.8, "start_offset_mm": 25.4, "faces": "BOTH_FLANGES" },
    "CFG:MAT": { "spec": "ASTM A1011 SS", "grade": "GR50" },
    "CFG:FIN": { "system": "POWDER", "color": "blue" },
    "CFG:END": { "top": "PLAIN", "bottom": "PLAIN" }
  },
  "designation": "COL SMHE OCL 76.2x41.3x12.7x1.9 mm L=4267",
  "aliases": ["ALS-003107"],
  "evidence": { "tests": ["TST-2026-00087"], "certifications": ["CRT-2026-00031"] },
  "warnings": [],
  "explanations": [
    "SEC:OCL selected: open C topology, one stiffening lip fold per flange, no return fold (Rulings R1/R4).",
    "GS-004217 unchanged by teardrop punching: discrete along-length features are configuration (G-3)."
  ],
  "db_mapping": {
    "table": "component",
    "natural_key": "component_id",
    "foreign_keys": { "gsid": "gsid_registry", "configuration_id": "configuration" }
  }
}
```

Note the classification path here carries product **context** (`FAM:SPR / ASM:FRM`) because the component was classified in a pallet-rack workflow; the same component classified context-free would carry the path `ROL:COL / SEC:OCL / GS-004217` only (H3). Neither path is stored as identity (H1).

---

## Part 8 — Worked Example: Rack Upright Frame (Deliverable 8)

### 8.1 Why a frame is an assembly, not a section

A rack upright frame (two columns + bracing + base plates) fails every test of section identity and passes every test of assembly identity:

- It joins parts with **distinct roles** — columns carry vertical load, braces stabilize, base plates transfer to the slab (§4.9 component-vs-assembly test).
- It has **no cross-section constant along any axis**; there is nothing to canonicalize, so no CGID can exist and no GSID SHALL be issued (P2, H6). A tool asked to do so emits `E-101`.
- Its behavior depends on **arrangement and joining** (brace pattern, pitch, weld vs bolt), which are assembly configuration (D-6), not geometry.

Classification path: `MH / FAM:SPR / ASM:FRM`.

### 8.2 Bill of roles

Frame: 1067 mm deep × 4877 mm high, two teardrop-punched OCL columns, welded lattice bracing (horizontal + diagonal OCU channels), two base plates.

| Role | Component | Count | Section reference | Notes |
|---|---|---|---|---|
| `ROL:COL` | `CMP-000482` (Part 7 column) | 2 | `GS-004217` (`SEC:OCL`) | bound length CF per frame height |
| `ROL:BRC` | `CMP-000733` brace channel | 7 | `GS-001582` (`SEC:OCU` 40×40×1.5 mm) | orientation per member in `CFG:SUP` fields |
| `ROL:BPL` | `CMP-000751` base plate | 2 | `GS-006010` (`SEC:PLT` 152×6.4 mm) | anchor holes = `CFG:HOL` on the component |

Joining: `CFG:JNT.method = FUSION_WELD` (braces-to-columns), `FUSION_WELD` (plates-to-columns). A bolted-frame variant changes these fields → new assembly ConfigurationID (D-6).

### 8.3 Frame identity

- Assembly configuration (identity-bearing): depth 1067 mm, height 4877 mm, brace pattern `Z_LATTICE`, brace pitch table, member component refs and counts, joint methods, finish system.
- `ConfigurationID = CF1-3F82B6D01E45` → registered as `ASP-000246` (`ASM:FRM`, `FAM:SPR`), snapshot `SNAP-1.0.0`.

```json
{
  "schema_version": "1.0",
  "snapshot_id": "SNAP-1.0.0",
  "object_type": "assembly",
  "classification_path": ["MH", "FAM:SPR", "ASM:FRM"],
  "codes": { "domain": "MH", "family": "FAM:SPR", "assembly_type": "ASM:FRM" },
  "identifiers": { "assembly_product_id": "ASP-000246", "configuration_id": "CF1-3F82B6D01E45" },
  "components": [
    { "role": "ROL:COL", "component_id": "CMP-000482", "count": 2,
      "section_ref": { "gsid": "GS-004217", "section_shape": "SEC:OCL" } },
    { "role": "ROL:BRC", "component_id": "CMP-000733", "count": 7,
      "section_ref": { "gsid": "GS-001582", "section_shape": "SEC:OCU" } },
    { "role": "ROL:BPL", "component_id": "CMP-000751", "count": 2,
      "section_ref": { "gsid": "GS-006010", "section_shape": "SEC:PLT" } }
  ],
  "configuration": {
    "CFG:DIM": { "depth_mm": 1067, "height_mm": 4877 },
    "CFG:SUP": { "brace_pattern": "Z_LATTICE", "brace_pitch_mm": [610] },
    "CFG:JNT": { "brace_to_column": "FUSION_WELD", "plate_to_column": "FUSION_WELD" },
    "CFG:FIN": { "system": "POWDER" }
  },
  "designation": "FRM 1067x4877 SUP.brace_pattern=Z_LATTICE",
  "evidence": { "tests": ["TST-2026-00095"], "certifications": [] },
  "warnings": [],
  "explanations": [
    "ASM:FRM selected: columns + braces + base plates joined with distinct roles.",
    "No GSID: a frame has no canonical cross-section (P2/E-101). Section identity lives on member section_ref entries only."
  ],
  "db_mapping": { "table": "assembly_product", "natural_key": "assembly_product_id",
                  "foreign_keys": { "configuration_id": "configuration", "components[].component_id": "component" } }
}
```

### 8.4 What changes when

| Change | Outcome | Rule |
|---|---|---|
| Frame depth 1067 → 1219 mm | New assembly ConfigurationID → new `ASP-…` | D-6 |
| Welded → bolted bracing | New assembly ConfigurationID (`CFG:JNT`) | D-6 |
| Brace section OCU → CHS tube | New member ComponentID in the bill → new assembly ConfigurationID | D-5, D-6 |
| Same frame, distributor's new name | New `ALS-…` record only | D-8 |
| Frame retested for seismic report | New `TST-…` record only | D-9 |

---

## Part 9 — Worked Example: Cantilever Rack (Deliverable 9)

### 9.1 The system

A single-sided cantilever rack under `FAM:CLR`: hot-rolled I column, welded base, four bolt-on inclined arms per column, X-bracing between column pairs.

### 9.2 Objects and layers

| Object | Classification | Illustrative IDs | Notes |
|---|---|---|---|
| Column | `ROL:COL`, `SEC:IWF` | `CMP-001102`; section via `DSG-AISC-W6X15` → `GS-007731` | industry designation maps to GSID; designation never identifies the component (§4.5) |
| Base member | `ROL:BAS`, `SEC:IWF` | `CMP-001103`; `DSG-AISC-W6X15` → `GS-007731` | same section geometry as column — one GSID, two components (different roles, hole patterns) |
| Arm | `ROL:ARM`, `SEC:CHN` | `CMP-001110`; `DSG-AISC-C4X5.4` → `GS-007844` | incline angle, lip/end stop = component configuration |
| Arm end stop | `ROL:STP` | `CMP-001111` | optional per arm configuration |
| Brace | `ROL:BRC`, `SEC:CHS` | `CMP-001120`; `GS-008102` (CHS 33.4×2.6 mm) | X-brace sets between adjacent columns |
| Cantilever base assembly | `ASM:CVB` | `ASP-000310`, `CF1-6D19E8A3B072` | base + column interface + anchor set (`ROL:ANC` `CMP-001130`); note `ASM:CVB` (cantilever base), not `ASM:CBA` (pallet-rack column + footplate) |
| Arm-column assembly | `ASM:ACA` | `ASP-000311`, `CF1-0A7C55D14E9B` | the connection is its own assembly identity — see 9.3 |
| Column-to-base **connection** | `CFG:JNT` on `ASM:CVB` | `method = FUSION_WELD`, weld class | connection behavior is configuration of the assembly that contains it |
| Arm-column **connection** | `CFG:JNT` on `ASM:ACA` | `method = BOLT`, 2 × M16 8.8, slotted seat | bolt pattern/grade are identity-bearing fields |

### 9.3 Connections are assembly configurations, not components and not sections

RMI-style design treats arm-column and column-base connections as tested behaviors. In this taxonomy, a connection SHALL be represented as identity-bearing `CFG:JNT` (and related) fields of the assembly that contains it; a connection SHALL NOT be registered as a component, a section, or any standalone identified object, and evidence for connection behavior SHALL attach to the containing assembly's ConfigurationID. The arm-column connection therefore exists only inside `ASM:ACA`, captured by that assembly's `CFG:JNT` (+ arm seat geometry references), with exactly one identity — the ACA assembly's ConfigurationID:

- `TST-2026-00102`: arm + connection test per ANSI MH16.3 [clause], object `ASP-000311`, configuration `CF1-0A7C55D14E9B`, 3 specimens → one ConfigurationID (P4).
- `TST-2026-00103`: base-fixity test, object `ASP-000310`, configuration `CF1-6D19E8A3B072`.
- `CRT-2026-00044`: certification of the cantilever system family, basis = [`TST-2026-00102`, `TST-2026-00103`, analysis], validity window, snapshot `SNAP-1.0.0`.

Changing the bolt grade, bolt count, seat slot, or weld schedule → new assembly ConfigurationID (D-6) → prior evidence no longer attaches (it references the old CF hash). This is the audit chain the layered model buys.

### 9.4 Consolidated JSON — the arm-column assembly

```json
{
  "schema_version": "1.0",
  "snapshot_id": "SNAP-1.0.0",
  "object_type": "assembly",
  "classification_path": ["MH", "FAM:CLR", "ASM:ACA"],
  "codes": { "domain": "MH", "family": "FAM:CLR", "assembly_type": "ASM:ACA" },
  "identifiers": { "assembly_product_id": "ASP-000311", "configuration_id": "CF1-0A7C55D14E9B" },
  "components": [
    { "role": "ROL:ARM", "component_id": "CMP-001110", "count": 1,
      "section_ref": { "gsid": "GS-007844", "section_shape": "SEC:CHN",
                       "industry_designation": "DSG-AISC-C4X5.4" } },
    { "role": "ROL:COL", "component_id": "CMP-001102", "count": 1,
      "section_ref": { "gsid": "GS-007731", "section_shape": "SEC:IWF",
                       "industry_designation": "DSG-AISC-W6X15" } },
    { "role": "ROL:STP", "component_id": "CMP-001111", "count": 1 }
  ],
  "configuration": {
    "CFG:DIM": { "arm_length_mm": 1219, "incline_deg": 3.5 },
    "CFG:JNT": { "method": "BOLT", "fastener_spec": "2xM16-8.8", "seat_type": "SLOTTED" }
  },
  "designation": "ACA 1219 JNT.method=BOLT DIM.incline=3.5",
  "evidence": { "tests": ["TST-2026-00102"], "certifications": ["CRT-2026-00044"] },
  "warnings": [],
  "explanations": [
    "ASM:ACA selected: arm + column connection set with distinct roles; connection behavior is CFG:JNT configuration.",
    "Column section identified via DSG-AISC-W6X15 → GS-007731; the designation is a mapping record, not an identity."
  ],
  "db_mapping": { "table": "assembly_product", "natural_key": "assembly_product_id",
                  "foreign_keys": { "configuration_id": "configuration", "components[].component_id": "component" } }
}
```

---

## Part 10 — Worked Example: SMA Storage Equipment (Deliverable 10)

The point of this part: SMA-scope equipment uses the **same six layers with zero new mechanisms** — only different dictionary rows (FAM/ASM/ROL combinations).

### 10.1 Steel shelving unit

Classification path: `MH / FAM:SHV / ASM:SHU`. An 8-shelf closed shelving unit, 914 × 457 × 2210 mm.

| Role | Component | Count | Section reference | Notes |
|---|---|---|---|---|
| `ROL:COL` | `CMP-002201` angle post | 4 | `GS-009410` (`SEC:ANG` 38×38×2.7 mm) | post punching = `CFG:HOL` (G-3), same as rack columns |
| `ROL:SHF` | `CMP-002210` formed shelf | 8 | **none** | a formed pan is not prismatic → no section reference; §4.9 permits componenthood without a GSID link |
| `ROL:BRC` | `CMP-002215` sway brace | 4 | `GS-009522` (`SEC:FBR` 25×3 mm strap) | |
| `ROL:PAN` | `CMP-002220` side/back panel | 3 | none (formed) | perforated variant = `CFG:PRF` fields on the same role — never a new role or code (P5) |
| `ROL:CLP` | `CMP-002230` shelf clip | 32 | none | |

Assembly configuration (identity-bearing): footprint, height, shelf count and pitch pattern, open/closed style, member refs, `CFG:JNT.method = BOLT` (or `CLINCH` for boltless — a different configuration per D-6). `ConfigurationID = CF1-B04D77E921AC` → `ASP-000402`.

```json
{
  "schema_version": "1.0",
  "snapshot_id": "SNAP-1.0.0",
  "object_type": "assembly",
  "classification_path": ["MH", "FAM:SHV", "ASM:SHU"],
  "codes": { "domain": "MH", "family": "FAM:SHV", "assembly_type": "ASM:SHU" },
  "identifiers": { "assembly_product_id": "ASP-000402", "configuration_id": "CF1-B04D77E921AC" },
  "components": [
    { "role": "ROL:COL", "component_id": "CMP-002201", "count": 4,
      "section_ref": { "gsid": "GS-009410", "section_shape": "SEC:ANG" } },
    { "role": "ROL:SHF", "component_id": "CMP-002210", "count": 8 },
    { "role": "ROL:BRC", "component_id": "CMP-002215", "count": 4,
      "section_ref": { "gsid": "GS-009522", "section_shape": "SEC:FBR" } },
    { "role": "ROL:PAN", "component_id": "CMP-002220", "count": 3 },
    { "role": "ROL:CLP", "component_id": "CMP-002230", "count": 32 }
  ],
  "configuration": {
    "CFG:DIM": { "width_mm": 914, "depth_mm": 457, "height_mm": 2210 },
    "CFG:SUP": { "shelf_count": 8, "shelf_pitch_pattern": "EQUAL" },
    "CFG:JNT": { "method": "BOLT" },
    "CFG:FIN": { "system": "POWDER" }
  },
  "designation": "SHU 914x457 DIM.height=2210 SUP.shelf_count=8",
  "evidence": { "tests": ["TST-2026-00121"], "certifications": [] },
  "warnings": [],
  "explanations": [
    "ASM:SHU selected: posts, shelves, braces, panels, clips joined with distinct roles.",
    "Shelf and panel components carry no GSID: non-prismatic formed parts have no canonical cross-section; componenthood does not require one (4.9)."
  ],
  "db_mapping": { "table": "assembly_product", "natural_key": "assembly_product_id",
                  "foreign_keys": { "configuration_id": "configuration", "components[].component_id": "component" } }
}
```

### 10.2 Industrial work platform

Classification path: `MH / FAM:WPL / ASM:WPF` (freestanding SMA platform). The RMI cousin — a rack-supported platform — is `MH / FAM:RSP / ASM:WPF`: **same assembly type, different family**, demonstrating that family (market/system, L1) and assembly type (structural kind, L2) are orthogonal axes.

| Role | Section reference | Notes |
|---|---|---|
| `ROL:COL` platform columns | `GS-010233` (`SEC:SHS` 76×76×3.2 mm) | |
| `ROL:BEM` joists | `DSG-AISC-C8X11.5` → `GS-007902` (`SEC:CHN`) | hot-rolled library entry reused directly — the geometry layer is shared across AISC and SMA worlds |
| `ROL:PAN` deck panels | none (formed plank) | the plank could alternatively be a prismatic roll-formed panel whose cross-section registers its own GSID, referenced through the component's `section_ref` — decided by the prismatic test, not by product marketing |
| `ROL:GRD` guardrail members | `GS-008102` (`SEC:CHS`) | same CHS geometry record used by cantilever braces in Part 9 — one GSID, many uses |
| `ROL:ANC` anchors | none | |

Platform assembly configuration (bay grid, height, deck system, guardrail layout, `CFG:JNT`) → `CF1-77A9C30F5E18` → `ASP-000420`. Evidence: `TST-2026-00130` (per the applicable ANSI MH work-platform provisions), attaching to the configuration, never to a SKU.

### 10.3 Roll-call: remaining SMA families need only dictionary rows

| Family | Typical assembly | Typical roles |
|---|---|---|
| `FAM:WKS` workstations | `ASM:SHU`-like bench units | `ROL:COL`, `ROL:SHF`, `ROL:PAN`, `ROL:BEM` |
| `FAM:MDR` modular drawers | `ASM:DRW` | `ROL:PAN` housing, `ROL:SHF` drawer bottoms, `ROL:CON` slides, `ROL:CLP` |
| `FAM:LCK` lockers | `ASM:LKR` | `ROL:PAN`, `ROL:CON` hinges, `ROL:CLP` latches |
| `FAM:MBS` movable-base storage | carriage + mounted units | `ROL:BAS` carriage members, `ROL:COL`, wheels as `ROL:CON` fittings |
| `FAM:STC` storage containers | `ASM:CNT` | `ROL:PAN`, `ROL:MSH` (mesh containers), `ROL:CON` |

### 10.4 Closing rule

Adding an SMA (or any future) product line SHALL require at most new dictionary **entries** (FAM/ASM/ROL rows and configuration templates) and SHALL NOT require new identity **layers**, new namespaces, or changes to the geometry boundary. If a proposed product cannot be represented as components-with-roles + assembly configuration, the proposal SHALL be escalated as a standard-revision question, not solved with an ad-hoc identifier.

---

## Part 11 — Compatibility with Existing Standards and Libraries (Deliverable 11)

The universal mechanism: external section libraries enter through **IndustryDesignationID records** (`DSG-<SYSTEM>-<STRING>`) that map many-to-one onto GSIDs; external product standards align at the **family/assembly/evidence** layers. Imports never mint shape codes (rule C-1 below).

### 11.1 AISC steel shape designations

| AISC concept | This standard |
|---|---|
| W, HP, M shapes | `SEC:IWF`; each table row → `DSG-AISC-…` → GSID |
| S shapes | `SEC:ITF` (tapered inner flange faces) |
| C, MC | `SEC:CHN` |
| L | `SEC:ANG` |
| WT, MT, ST | `SEC:TEE`; the parent-shape lineage (cut from W/M/S) is a field on the DSG record, not a shape-code split |
| HSS rect / square / round | `SEC:RHS` / `SEC:SHS` / `SEC:CHS`; "HSS" itself is the SUPERCLASS rollup `SEC:HSS` |
| Pipe | `SEC:CHS`; pipe schedules are a designation system (`DSG-ASTM-NPS4SCH40`), not a geometry class |
| PL, bars | `SEC:PLT`, `SEC:RBR`/`SEC:FBR` |

`W12X50` worked through: `DSG-AISC-W12X50` (system AISC, edition field) → `GS-012140` (`SEC:IWF`), CGID computed from the published dimensions after canonicalization. EN, GB/T, or JIS sections with matching canonical geometry (within canonical rounding) map to the **same GSID** — cross-library equivalence falls out of the geometry layer for free.

### 11.2 AISI cold-formed steel concepts

- Lipped C-stud → `SEC:OCL`; plain C/track → `SEC:OCU`; lipped/plain Z → `SEC:ZLP`/`SEC:ZUN`; hat → `SEC:OMG`; sigma → `SEC:SGM`.
- "Cold-formed steel" as a class → rejected as a shape code (Ruling R6); available as the `form_class = FOLDED_UNIFORM_T` facet for filtering.
- AISI S100 effective-width and section-property computation are **downstream consumers** of canonical geometry: the registry stores geometry, not derived properties; derived properties are reproducible from the CGID record and belong in analysis tooling, keeping the identity layer stable when design provisions change editions.
- AISI-style nomenclature (e.g., 362S162-68) imports as a designation system (`DSG-AISI-…` records → GSIDs).

### 11.3 RMI rack and decking standards

| RMI scope | This standard |
|---|---|
| ANSI MH16.1 selective pallet rack | `FAM:SPR`; frames `ASM:FRM`, beams `ASM:BMA`, column-base `ASM:CBA`; beam-column connection = `CFG:JNT` of `ASM:BMA`-to-frame interface configurations; test protocols referenced by `TST-…` records |
| Cantilever rack (ANSI MH16.3) | `FAM:CLR`; `ASM:ACA`, `ASM:CVB` per Part 9 |
| ANSI MH26.2 welded-wire rack decking | `FAM:DKG` + `ASM:WDK`; MH26.2's tested-configuration philosophy maps 1:1 onto ConfigurationID + TestID: "the tested deck" *is* a bound assembly configuration, and P4 (specimen-count independence) matches its treatment of replicate specimens |
| Rack-supported platforms | `FAM:RSP` + `ASM:WPF` |
| Protection & accessories | `FAM:RPA`; guards `ROL:GRD`/`ASM:GDA`, stops `ROL:STP`, spacers `ROL:SPC`, anchors `ROL:ANC` |

The proprietary roll-formed upright profiles central to RMI-world products live in the geometry layer as `SEC:OCL`/`SEC:OCR`/`SEC:SGM` + GSIDs — classified by geometry, never by brand (P3).

### 11.4 SMA storage equipment categories

SMA categories map to `FAM:SHV`, `FAM:WPL`, `FAM:WKS`, `FAM:MDR`, `FAM:LCK`, `FAM:MBS`, `FAM:STC` with assembly types per Part 10. SMA equipment receives full layer treatment identical to rack — same geometry registry, same configuration mechanism, same evidence layer. Applicable ANSI MH28-series provisions enter as protocol references on `TST-…` records [edition].

### 11.5 GB/T libraries

- GB/T hot-rolled H-sections HW/HM/HN (and HP piles) → `SEC:IWF` via `DSG-GBT-HN400X200` style records; the HW/HM/HN distinction (flange-width class) is a designation-system attribute, not a shape-code split — canonical geometry already captures it.
- GB/T 706 hot-rolled I → `SEC:ITF`; hot-rolled channel → `SEC:CHN`; angle → `SEC:ANG`.
- GB/T cold-formed open sections [e.g., GB/T 6723] → `SEC:OCL`/`OCU`/`ZLP`/`OMG` per topology.

### 11.6 EN libraries

IPE/HE/HL/UB/UC → `SEC:IWF`; IPN → `SEC:ITF`; UPN/UPE → `SEC:CHN`; EN RHS/SHS/CHS naming aligns natively with `SEC:RHS`/`SHS`/`CHS`. Section tables (e.g., EN 10365 [edition]) import as `DSG-EN-…` records. EN 15512-series racking design provisions align at the evidence layer as test/analysis protocol references, exactly like MH16.1.

### 11.7 JIS libraries

JIS H-sections (G 3192 [edition]) → `SEC:IWF`; JIS channels/angles → `SEC:CHN`/`SEC:ANG`; lightweight cold-formed channels (G 3350 class) → `SEC:OCL`/`OCU`. Import as `DSG-JIS-…`.

### 11.8 AS/NZS libraries

UB/UC (AS/NZS 3679.1 [edition]) → `SEC:IWF`; PFC → `SEC:CHN`; RHS/SHS/CHS (AS/NZS 1163 class) native; cold-formed C/Z purlins → `SEC:OCL`/`ZLP`. Import as `DSG-ASNZS-…`.

### 11.9 Proprietary rack-industry product names

"Teardrop", brand system names, series names, and dealer nicknames are **always** `ALS-…`/`MPN-…` records pointing at classified objects — never codes, never classification inputs (P3, D-8). Interchange claims ("teardrop-compatible") are configuration facts: the connector's `CFG:HOL.pattern_id` matching a published pattern registry entry — comparable across manufacturers without ever naming one.

### 11.10 Normative compatibility rules

- **C-1.** Importing an external section library SHALL create `DSG-…` records mapped to GSIDs (issuing new GSIDs only for geometry classes not yet registered) and SHALL NOT create new `SEC:` codes unless a D-1 topology case is made through governance.
- **C-2.** Designation-system distinctions that do not change canonical geometry schema (WT vs ST lineage; HW vs HM vs HN width class; pipe schedule naming) SHALL be carried as designation-record fields, never as shape codes.
- **C-3.** Two designations from different systems whose canonical geometries match within canonical rounding SHALL map to the same GSID; the registry SHALL expose these cross-system equivalences.
- **C-4.** External product/design standards (MH16.1, MH16.3, MH26.2, MH28-series, EN 15512, AISI S100, AISC 360) SHALL be referenced as evidence-layer protocols with edition fields; taxonomy codes SHALL NOT embed standard editions.
- **C-5.** Proprietary names SHALL enter only through the naming layer and SHALL be rejected as classification inputs by conforming tools (`E-102`).

---

## Part 12 — Public GitHub Adoption Strategy (Deliverable 12)

### 12.1 What is open source

| Artifact | License (proposed) | Rationale |
|---|---|---|
| Code dictionaries (SEC/ROL/ASM/FAM/CFG CSVs, enum token lists) | CC-BY-4.0 | Adoption requires free reuse; attribution preserves provenance |
| Canonicalization rules specification (units, rounding, orientation, parameter schemas per shape code) | CC-BY-4.0 | Required for anyone to reproduce CGIDs (P9) |
| Configuration templates (per ASM/ROL, JSON) | CC-BY-4.0 | Required to reproduce ConfigurationIDs |
| JSON output schemas; warning catalog | CC-BY-4.0 | Interchange contract |
| Public GSID registry snapshot (GSID ↔ CGID ↔ shape code ↔ geometry parameters; DSG mappings from public-domain tables) | CC-BY-4.0 | The lookup data the Explorer needs offline |
| SectionHub Taxonomy Explorer application | Apache-2.0 | Patent grant + permissive; standard OSS tooling choice |
| Governance documents (proposal process, decision log, rejection log) | CC-BY-4.0 | Trust requires visible governance |

Trademark note: "SMHE", "SectionHub", and "GSID" SHOULD be reserved as marks; the licenses grant content reuse, not the right to publish a *modified* registry under the same names (prevents forked "GSIDs" colliding with official ones).

### 12.2 What remains proprietary or separately governed

- **Assignment authority.** Registered identifiers (serials `GS-`, `CMP-`, `ASP-`, `MPN-`, `ALS-`, `TST-`, `CRT-`, and string-keyed `DSG-` records) and snapshots SHALL be issued only by the SMHE registry. Any party MAY compute derived `CG…`/`CF…` hashes; no other party SHALL register or publish them as registry assignments.
- **Manufacturer-submitted confidential data** (drawings, tolerances beyond canonical parameters, commercial terms).
- **Evidence contents.** `TST-`/`CRT-` record *existence and IDs* MAY be public; report contents and data packages are governed by the submitting parties.
- **Unreleased draft dictionaries** (work between snapshots).

### 12.3 Repository structure

```
sectionhub-taxonomy/
├── dictionaries/          # one CSV per namespace + enum_tokens.csv
│   ├── namespaces.csv
│   ├── sec_codes.csv  rol_codes.csv  asm_codes.csv  fam_codes.csv  cfg_groups.csv
├── canonicalization/      # rules spec + per-shape parameter schemas (versioned: v1/, v2/)
├── templates/             # configuration templates, JSON, per ASM/ROL code
├── registry/              # public snapshot exports: gsid_registry.csv, dsg_index.csv
├── schemas/               # JSON Schemas for Explorer output + registry files
├── docs/                  # the standards documents (this draft's Parts 0–15)
├── explorer/              # the application
├── proposals/             # accepted proposal records (one file per decision)
└── GOVERNANCE.md  CHANGELOG.md  REJECTIONS.md
```

Every release SHALL be published as a tagged snapshot whose tag equals the SnapshotID (e.g., `SNAP-1.1.0`), with the tag's content hash recorded in the snapshot record.

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

### 12.6 Preserving backward compatibility

- Codes and IDs are never deleted, reused, or re-meant (N7, P8). Retirement = `DEPRECATED` + successor pointer, effective at a named snapshot.
- Every dataset row and every Explorer output carries its SnapshotID; consumers pin snapshots and upgrade deliberately.
- Semver per §4.15: MAJOR only for breaking rule changes (e.g., canonicalization v2 — GSIDs persist, CGIDs re-derive with full history retained); MINOR for additive codes/templates; PATCH for deprecation-based corrections.
- MAJOR releases SHALL ship migration notes and a dual-derivation window (old and new CGIDs both resolvable).
- All historical snapshots remain permanently downloadable; the registry SHALL never serve only "latest".

---

## Part 13 — SectionHub Taxonomy Explorer: Product Specification (Deliverable 13)

### 13.1 Product statement

A small public open-source application that turns guided answers into deterministic classification: classification path, namespace-qualified codes, derived designation, structured JSON, warnings, explanations, and database-mapping fields. It SHALL be deterministic (P7): predefined dictionaries, rule tables, and explicit decision logic only. It SHALL NOT rely on AI inference as an authoritative classifier (an optional assistant MAY *suggest* answers to the questions, but every suggestion routes through the same deterministic questions and is confirmable by the user; the rule engine is the only authority).

### 13.2 User workflows (Step 1: "What are you classifying?")

Exactly seven entry types:

| Entry type | Workflow |
|---|---|
| **Section** | Resolve `SEC:` code via topology questions; collect the shape schema's parameters; compute CGID locally; look up GSID in the loaded public snapshot; derive designation; emit JSON. Fully offline-capable. |
| **Component** | Pick `ROL:`; if prismatic, run the Section sub-route for its cross-section; fill the role's configuration template; compute ConfigurationID; emit JSON with component identity fields (registration itself is a registry action — the tool emits a proposal stub). |
| **Assembly** | Resolve `ASM:` via function questions; build the bill of roles (each member either references an existing component record or runs the Component sub-route); fill the assembly template; compute assembly ConfigurationID; emit JSON. |
| **Product family** | Guided mapping of a market/system description onto the `FAM:` dictionary; explains scope anchors (RMI/SMA); never creates codes — emits a D-7 proposal stub if nothing fits. |
| **Test specimen** | First resolves the **object + bound ConfigurationID** (reusing routes above), then captures evidence metadata (protocol, clause, lab, date, specimen count). The UI SHALL explain P4: more specimens of the same configuration do not create new identity. |
| **Certification record** | References existing objects/configurations/tests; captures scope, basis, body, validity; emits a `CRT-` proposal stub. |
| **Manufacturer part / alias** | Captures `{manufacturer, string, description}` and points it at an object found via search or the routes above. The name is never used to *derive* the classification (`E-102` if the user tries to skip classification by naming a brand). |

### 13.3 Form/question model (Step 2: minimum necessary questions)

Questions are nodes in versioned decision tables. Illustrative Section route (the deepest):

| Node | Question | Answers → next |
|---|---|---|
| S1 | Closed (hollow) or open profile? | `CLOSED` → S10; `OPEN` → S2; `SOLID` → S20 |
| S2 | Basic open form? | `C_FORM` → S3; `Z_FORM` → S6; `HAT` → `SEC:OMG`; `I_FORM` → S7; `L_FORM` → `SEC:ANG`; `T_FORM` → `SEC:TEE`; `STEP_PROFILE` → `SEC:STB` |
| S3 | Uniform folded thickness, or filleted with taper/root radii? | `FOLDED` → S4; `FILLETED` → `SEC:CHN` |
| S4 | Lips on flange ends? | `NONE` → `SEC:OCU`; `SIMPLE_LIP` → S5; `RETURN_LIP` → `SEC:OCR`; `UNKNOWN` → **halt, W-201** |
| S5 | Web indents (sigma profile)? | `NO` → `SEC:OCL`; `YES` → `SEC:SGM` |
| S6 | Lips on the Z flange ends? | `NONE` → `SEC:ZUN`; `SIMPLE_LIP` → `SEC:ZLP`; `UNKNOWN` → **halt, W-201** |
| S7 | Inner flange faces parallel or sloped? | `PARALLEL` → `SEC:IWF`; `SLOPED` → `SEC:ITF` |
| S10 | Closed profile outline? | `RECT` → S11; `CIRC` → `SEC:CHS`; `MULTI_PIECE_INTERLOCK` → `SEC:BXB`; `STEP_PROFILE` → `SEC:STB` |
| S11 | Square or rectangular? | `SQUARE` → `SEC:SHS`; `RECT` → `SEC:RHS` |
| S20 | Solid form? | `PLATE_SHEET` → `SEC:PLT`; `ROUND` → `SEC:RBR`; `FLAT_BAR` → `SEC:FBR` |
| S30 | (post-resolution) Enter parameters per the resolved shape schema | → CGID computation |

`SEC:STB` is deliberately reachable from both S2 (`STEP_PROFILE`) and S10 (`STEP_PROFILE`): step-beam profiles are semi-closed and users legitimately perceive them either way. Both paths terminate identically, so determinism (P7) is preserved.

Component route: R1 role picker (`ROL:` dictionary with plain-language descriptions) → R2 "prismatic member?" (`YES` → Section sub-route; `NO` → skip geometry) → R3 template fields (from `templates/ROL-<code>.v<n>.json`). Assembly route: A1 function picker → A2 assembly-vs-component check ("does it join parts with distinct roles?" — `NO` → redirect to Component, W-202 if still ambiguous) → A3 bill of roles → A4 template fields. Every route ends with review-and-confirm before output.

### 13.4 Deterministic rule engine concept

- All logic is data: `question_nodes.csv` rows `(node_id, question, answer_token, next_node | assignment)`, plus per-shape parameter schemas and configuration templates. The engine is a pure function:

```
classify(answers, snapshot) -> output
  node <- route entry node
  while node is a question:
      if answers[node] is missing or not in node's controlled options:
          return refusal(W-2xx, ask=node)        # never guess, never default
      node <- next(node, answers[node])
  codes <- assignments collected along the path
  ids   <- derive CGID/CFID from canonicalized parameter values   # content addressing
  gsid  <- lookup(ids.cgid, snapshot.gsid_registry)               # may yield W-301
  return output(codes, ids, designation(codes, values), warnings, explanations, db_mapping)
```

- Same `answers` + same `snapshot_id` ⇒ byte-identical output (P7). The engine SHALL refuse on missing/out-of-vocabulary input with a `W-2xx` naming the exact unanswered node — refusal, not defaulting, is the ambiguity behavior.
- Explanations are generated from the traversed path (each node contributes a "because" line), so the "why this code" text is itself deterministic.

### 13.5 JSON schema concept

The output contract is the shared envelope used throughout this draft (Parts 6–10): `schema_version` and `snapshot_id` mandatory on every output; `classification_path`, `codes`, `identifiers`, `configuration` (grouped by `CFG:` code, identity-bearing flagged), `components`, `designation`, `warnings[{code,message}]`, `explanations[]`, and `db_mapping{table, natural_key, foreign_keys}` for future database import. Published as JSON Schema files in `schemas/`; the schema itself is versioned and snapshot-pinned.

Designation strings are generated by one deterministic grammar (derived, informative, never parsed as identity): sections with an industry designation render `<SYSTEM> <DESIGNATION>` (`AISC W12X50`); sections without one render `SMHE <SEC> <principal dims per shape schema, thickness last> mm`; components render `<ROL> <section designation> L=<mm|PARAM>`; assemblies render `<ASM> <principal dims per template> [<group>.<field>=<TOKEN|value>…]` with abbreviated unitless field keys (`SUP.count=3`, `DIM.height=2210`, `EDG.front=WATERFALL`).

### 13.6 CSV/dictionary file concept

Shipped data files (all versioned; the set = the public snapshot):

`namespaces.csv`, `sec_codes.csv`, `rol_codes.csv`, `asm_codes.csv`, `fam_codes.csv`, `cfg_groups.csv`, `enum_tokens.csv`, `question_nodes.csv`, `templates/*.json`, `designation_systems.csv`, `dsg_index.csv`, `gsid_registry.csv`.

Key columns:

- `sec_codes.csv`: `code,name,status,form_class,definition,maps_from,successor,since_snapshot`
- `gsid_registry.csv`: `gsid,cgid,sec_code,param_json,since_snapshot` — the offline GSID lookup table
- `question_nodes.csv`: `route,node_id,question,answer_token,next_node,assignment,because_text`

### 13.7 Validation warnings (Step 3 guardrails)

| Code | Trigger | Behavior |
|---|---|---|
| `E-101` | GSID or section identity requested for an assembly/product/deck/frame/SKU | Hard stop + explanation + redirect to Assembly route |
| `E-102` | Manufacturer/brand name offered as the classification driver | Hard stop; name captured as alias candidate only |
| `E-103` | SUPERCLASS code (`OCS`, `HSS`, `BAR`, `ZEE`, `DCK`) as terminal assignment | Hard stop; present the leaf choices |
| `E-104` | Performance rating entered as a configuration field | Hard stop; explain evidence layer |
| `W-201` | Lip condition unknown (node S4 or S6) | Halt with status `INDETERMINATE` at the family SUPERCLASS rollup (`OCS` for C-form, `ZEE` for Z-form; display only — never emitted as terminal); list the missing answer |
| `W-202` | Component-vs-assembly ambiguity after A2 | Halt; show the distinct-roles test with examples |
| `W-301` | CGID computed but no GSID in loaded snapshot | Output valid classification + `gsid: null` + a registration proposal stub (JSON) |
| `W-303` | Valid classification but no registered `CMP-`/`ASP-` record for the computed ConfigurationID in the loaded snapshot | Output classification + `null` registered-ID field + a registration proposal stub (JSON) |
| `I-401` | Input matched a known alias | Show the pointed-at object; continue normally |
| `I-402` | Input matched a superseded/deprecated record (DSG or other) | Show successor; require confirmation before continuing |
| `I-403` | Loaded snapshot is not the latest published | Informational pin notice |

### 13.8 Example output

A wire-deck session produces exactly the JSON shown in Part 6 §6.6 — with `warnings: []` when complete, or with `W-303` and `"assembly_product_id": null` plus a proposal stub when the configuration is not yet registered. (No GSID appears at deck level under any input; `W-301` is a geometry-layer warning and can never fire on the Assembly route.)

### 13.9 Prohibited behavior (SHALL NOT)

The Explorer SHALL NOT: guess or default ambiguous answers; emit bare unqualified 3-char codes; assign registered serials offline (it MAY only compute derived hashes and emit proposal stubs); mutate dictionaries at runtime; accept manufacturer names, SKUs, or marketing text as classification inputs; emit any output without `snapshot_id`; parse designation strings as identity; present AI-generated suggestions as decisions; hide warnings from the JSON output.

### 13.10 Minimum viable public release (MVP)

**In scope:** Section route complete (topology questions → `SEC:` resolution → parameter entry → CGID computation → GSID lookup from `gsid_registry.csv` → designation → JSON); Component route for `ROL:COL` and `ROL:DKS`; Assembly route for `ASM:WDK` only; full warning system; dictionary/snapshot loading with pin display; JSON export; the seed dictionaries of Part 3.

**Explicitly deferred:** remaining assembly routes; Test-specimen and Certification routes (stub screens explaining the evidence layer); designation-system bulk import UI; any registry write access; multi-language; property calculation (area, Ix/Iy — downstream tooling, not identity).

This MVP is deliberately small: one complete vertical slice per layer proves the architecture without a SKU-harvesting effort.

---

## Part 14 — Prohibited Anti-Patterns (Deliverable 14)

Each anti-pattern is stated as a SHALL NOT rule, with the violated principle and the correct alternative. These are normative prohibitions.

**AP-1 — Embedding geometry into IDs.** Identifiers SHALL NOT encode dimensions, gauges, counts, or attributes. *Violates P1, P5, P8.* Thirty-year failure mode: every spec correction orphans the ID; parsers grow around the encoding; the encoding runs out of room. Before/after: `WDK-46x46-3CH-WF-4GA-WLD` → `ASP-000173` + the Part 6 configuration record.

**AP-2 — Manufacturer names as classification.** Brand, series, or manufacturer names SHALL NOT determine or influence any code, path, or geometry identity. *Violates P3, D-8.* Failure mode: taxonomy inherits marketing churn and M&A renames; competitors reject the standard. Correct: `ALS-`/`MPN-` pointers at classified objects.

**AP-3 — Confusing section identity with product identity.** A section (2D geometry class) SHALL NOT be identified by, or merged with, the identity of a product that happens to use it. *Violates P2, H6.* Before/after: "GSID for the ACME TD-300 upright" → `GS-004217` (geometry) + `CMP-000482` (component) + `MPN-018233` (name), per Part 7.

**AP-4 — Treating assemblies as 2D cross-sections.** Decks, frames, shelving units, platforms, drawers, and lockers SHALL NOT receive GSIDs, `SEC:` codes, or canonical geometry. *Violates P2 (E-101).* Failure mode: geometry registry fills with non-geometry; canonicalization becomes undefined; the 2D layer's determinism is destroyed.

**AP-5 — One namespace for unrelated code types.** Shape, role, family, assembly, and configuration codes SHALL NOT share a namespace or be stored unqualified. *Violates P6, N1/N2.* Failure mode: collisions force awkward renames; a code's kind becomes guesswork; joins go wrong silently.

**AP-6 — Changing old IDs retroactively.** Published identifiers, dictionary meanings, and snapshot contents SHALL NOT be edited, reused, or re-meant. *Violates P8, N7.* Correct: deprecate-with-successor at a named snapshot. Failure mode otherwise: every downstream database and test report silently means something different than when written — the audit chain is dead.

**AP-7 — New codes for field-grade variation.** Differences representable as structured fields (finish, edge condition, wire diameter, hole pattern, support count, span direction) SHALL NOT spawn codes. *Violates P5, D-5/D-6.* Before/after: proposed codes `WDF` "wire deck flared" / `WD4` "4-channel deck" → `ASM:WDK` + `CFG:SUP`/`CFG:END` fields. Failure mode: combinatorial code explosion (the decking family-code history is the cautionary tale).

**AP-8 — Commercial SKUs controlling taxonomy.** SKU structures, catalog hierarchies, and price-list groupings SHALL NOT define families, assembly types, or configurations. *Violates P3, D-7, D-8.* Failure mode: the taxonomy mirrors one vendor's catalog and loses neutrality — and invites the "massive SKU harvesting" scope explosion this standard explicitly avoids.

**AP-9 — AI inference as authoritative classifier.** Machine-learned inference SHALL NOT assign codes or identities. *Violates P7.* AI MAY pre-fill answers to the deterministic questions; the rule engine and the user's confirmed answers are the only authority, and outputs record answers, not model guesses. Failure mode: non-reproducible classification; no two runs audit the same.

**AP-10 — Semantic ("smart") serials.** Registered serials SHALL NOT carry meaning in their digits (ranges by family, prefixes by manufacturer, check-digit-encoded categories beyond a plain check character). *Violates P1.* Failure mode: the meaning changes, the serial can't.

**AP-11 — Tolerance-noise proliferation.** Geometry differing only within canonical rounding SHALL NOT mint new CGIDs/GSIDs. *Violates D-2's collapsing function.* Failure mode: mill-to-mill measurement noise creates thousands of phantom geometry classes.

**AP-12 — Hierarchy position encoded into IDs.** IDs SHALL NOT embed their classification path (e.g., `SPR-FRM-COL-000482`). *Violates H1, P1.* Failure mode: multi-parent objects (H2) get duplicate IDs; a reclassification breaks the key.

**AP-13 — Evidence minting identity.** Tests and certifications SHALL NOT create or alter object/configuration identity. *Violates D-9, P4.* Failure mode: "tested version" forks identifiers that describe the same physical configuration.

---

## Part 15 — Normative Standard Outline (Deliverable 15)

Clause-level outlines showing where this draft's material lands. **(N)** = normative, **(I)** = informative.

### 15.1 SMHE Identifier Standard v2.0 — identifier architecture (domain-independent)

| Clause | Content | Source here |
|---|---|---|
| 1 Scope (N) | Identifier architecture for all SMHE registries | Part 0.1 |
| 2 Normative references (N) | — | — |
| 3 Terms & definitions (N) | ID vs data; registered vs derived IDs | Part 4 |
| 4 Principles (N) | P1, P4, P7, P8, P9 | Part 0.2 |
| 5 Namespace model (N) | N1–N7; qualified-code rule; enum tokens | Part 2 |
| 6 Identifier formats (N) | prefix table; serial rules; hash rules; check character | Part 2 §2.2 |
| 7 Registered vs derived identity (N) | registry issuance vs content addressing | Parts 4.3/4.4/4.8 |
| 8 Naming layer (N) | MPN/ALS records; zero-authority rule | Parts 4.11/4.12 |
| 9 Snapshot governance (N) | SnapshotID; semver; immutability; deprecation | Parts 4.15, 12.6 |
| 10 Conformance (N) | see 15.5 | — |
| Annex A (I) | Anti-pattern catalog | Part 14 |

### 15.2 GSID Standard v2.0 — the 2D geometry layer only

| Clause | Content | Source here |
|---|---|---|
| 1 Scope (N) | Canonical 2D cross-section identity; explicit exclusions (the P2 list) | Parts 0.2, 4.4 |
| 2–3 References, terms (N) | topology class; canonical parameter schema; equivalence class | Part 4.2/4.3 |
| 4 SEC namespace & dictionary (N) | shape codes incl. statuses; SUPERCLASS mechanics | Part 3.2 |
| 5 Rulings (N) | OCS/OCL/OCU/OCR; CHN; CFS rejection; migration of legacy OCS records | Part 3.1 |
| 6 Canonicalization rules (N) | units, rounding, orientation, per-schema parameter order; versioning | Part 4.3 |
| 7 CGID derivation (N) | content addressing; reproducibility requirement | Part 4.3 |
| 8 GSID assignment (N) | deterministic issue procedure; 1:1 with equivalence class; history across rule versions | Part 4.4 |
| 9 Designation mapping (N) | DSG records; import rules C-1..C-3 | Parts 4.5, 11 |
| 10 Boundary clauses (N) | what GSID SHALL NOT identify; G-3; D-4 built-up rule | Parts 5, 0.2 |
| 11 Conformance (N) | see 15.5 | — |
| Annex A (I) | Shape-resolution decision tree | Part 13.3 (S-nodes) |
| Annex B (I) | Cross-library equivalence examples | Part 11 |

### 15.3 SectionHub Material Handling Taxonomy Standard v1.0 — domain MH

| Clause | Content | Source here |
|---|---|---|
| 1 Scope (N) | Domain MH product classification above the geometry layer | Part 0.1 |
| 2–3 References, terms (N) | component-vs-assembly test; parametric components | Part 4.9 |
| 4 Hierarchy (N) | L0–L5; H1–H6; DAG rules | Part 1 |
| 5 FAM/ASM/ROL dictionaries (N) | Parts 3.3–3.5 tables | Part 3 |
| 6 Configuration layer (N) | CFG groups; templates; identity-bearing vs informative; CFID derivation | Parts 3.6, 4.7, 4.8 |
| 7 Component & assembly identity (N) | CMP/ASP registration; bill of roles | Parts 4.9/4.10 |
| 8 Decision rules (N) | D-5..D-9 (+ pointers to D-1..D-4 in GSID std) | Part 5 |
| 9 Evidence layer (N) | TST/CRT; protocol referencing rule C-4 | Parts 4.13/4.14 |
| 10 Compatibility (N) | C-1..C-5 | Part 11 |
| 11 Conformance (N) | see 15.5 | — |
| Annex A–E (I) | Worked examples: wire deck, upright, frame, cantilever, SMA | Parts 6–10 |

### 15.4 Public SectionHub Taxonomy Explorer documentation

| Doc | Content | Source here |
|---|---|---|
| User guide (I) | Seven entry types and walkthroughs | Part 13.2 |
| Dictionary file reference (N) | file set + column contracts | Part 13.6 |
| Rule-engine specification (N) | decision tables; refusal semantics; determinism contract | Part 13.4 |
| JSON schema reference (N) | output envelope | Part 13.5 |
| Warning catalog (N) | E/W/I registry | Part 13.7 |
| Contribution guide (I→N for process rules) | proposal forms; governance | Part 12.4–12.5 |

### 15.5 Conformance clause concepts

- **Identifier Standard:** A conforming registry SHALL issue identifiers only in the defined formats and namespaces; SHALL never reuse or re-mean an identifier; SHALL publish immutable snapshots such that any assignment is reproducible from its cited SnapshotID.
- **GSID Standard:** A conforming implementation SHALL reproduce byte-identical CGIDs from published canonicalization rules for any input geometry; SHALL refuse GSID association for any non-section object; SHALL resolve lip-condition (and equivalent schema-discriminating) questions before terminal shape assignment.
- **Taxonomy Standard:** A conforming dataset SHALL classify every product object with namespace-qualified FAM/ASM/ROL codes and reference geometry only through component `section_ref`s; SHALL collapse identical configurations to one ConfigurationID regardless of specimen or order count; SHALL record manufacturer naming exclusively in the naming layer.
- **Explorer documentation:** A conforming tool SHALL produce identical outputs for identical answers under a pinned snapshot; SHALL emit the standard warning codes; SHALL NOT exhibit any Part 14 anti-pattern or §13.9 prohibited behavior.
