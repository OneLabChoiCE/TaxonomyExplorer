# SectionHub Material Handling Taxonomy Standard — Domain MH

**Document:** SectionHub Material Handling Taxonomy Standard v1.0 — DRAFT (split working copy)
**Status:** DRAFT — not yet balloted

> **Source and split note.** This document was extracted verbatim on 2026-07-11 from the unified draft [SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md](SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md), which **remains the canonical document of record** until this split is ratified. Clause and section numbers below retain the unified draft's numbering to preserve cross-references; renumbering per the unified draft's Part 15.3 outline happens at ratification. Rule identifiers (P-, H-, D-, G-, C-, N-, AP-) are global across the SectionHub document family; where a rule also appears in another split document, the text is duplicated verbatim and the unified draft is authoritative if any copy diverges. No normative meaning has been changed. Text original to this split is marked *[Editorial bridge]*.

## Scope

*[Editorial bridge — restates the unified draft's Part 15.3 clause 1 plan.]* This standard governs domain-MH product classification **above the geometry layer**: the taxonomy hierarchy, product family / assembly type / component role / configuration-group dictionaries, component and assembly identity, configuration identity, the naming layer (manufacturer parts and aliases), the evidence layer (tests and certifications), snapshots, decision rules D-5–D-9, and compatibility with external product standards. The geometry layer (SEC codes, CanonicalGeometryID, GSID, designation mapping) is normatively governed by the [GSID Standard](GSID_2D_Standard.md); namespace and dictionary governance mechanics are in the [Code Dictionary Standard](Code_Dictionary_Standard.md).

## Governing principles (restated verbatim from the unified draft, Part 0.2)

- **P1 — Identity is a reference key.** An identifier SHALL identify; it SHALL NOT describe. Descriptive data (dimensions, materials, finishes, capacities) SHALL live in structured fields keyed by the identifier. (Carried forward from SMHE Identifier Standard v1.)
- **P3 — Classification is geometry- and function-driven, never name-driven.** Manufacturer naming, marketing names, and SKUs SHALL NOT control classification. They attach as alias/part records that point *at* classified objects.
- **P4 — Configuration-driven identity.** Identity SHALL be determined by configuration, not by specimen count. Identical configurations SHALL collapse to one identifier. Ten tested specimens of one configuration are one ConfigurationID with one or more evidence records. (Carried forward from the SMHE configuration clarification.)
- **P5 — Fields, not codes, for variation.** Attribute variation that belongs in structured fields (edge condition, finish, wire diameter, mesh pattern, hole pattern, span direction, channel count, thickness, open area) SHALL NOT be encoded into identifiers or spawn new codes. (Generalized from the SMHE decking family-code work.)

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


## Product-layer code dictionaries (unified draft §3.3–3.6)

*[Editorial bridge.]* The `SEC:` section-shape dictionary and the OCS/OCL/OCU/OCR/CHN/CFS rulings are normative in the [GSID Standard](GSID_2D_Standard.md) §3.

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


## Identity layer definitions (unified draft §4.1 and §4.6–4.15)

*[Editorial bridge.]* The geometry-layer definitions (§4.2 SectionShapeCode, §4.3 CanonicalGeometryID, §4.4 GSID, §4.5 IndustryDesignationID) are normative in the [GSID Standard](GSID_2D_Standard.md) §4.

### 4.1 DomainCode
- **Identifies:** the top-level industry domain that scopes the product vocabulary (families, assembly types, configuration templates). v1.0 defines one domain: `MH` — Material Handling & Industrial Storage Equipment.
- **Never identifies:** shapes or geometry (the geometry layer is domain-neutral, shared infrastructure).
- **Format:** 2-char alpha, bare.
- **Assignment:** by standard revision only. **Mutability:** immutable.


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


*[Editorial bridge.]* Rules D-1, D-2, G-3, and D-4 in the part below are normatively owned by the [GSID Standard](GSID_2D_Standard.md) §5; they are reproduced here unchanged so the integrated decision table stays whole.

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


*[Editorial bridge.]* Rules C-1–C-3 (designation import) in the part below also appear in the [GSID Standard](GSID_2D_Standard.md) §6, verbatim.

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


## Annexes A–E (informative) — Worked examples (unified draft Parts 6–10)

*[Editorial bridge.]* The five worked examples are informative applications of the normative rules above (per the unified draft's Part 15.3 outline): wire deck (Part 6), rack upright column (Part 7), rack upright frame (Part 8), cantilever rack (Part 9), and SMA storage equipment (Part 10). All identifiers in them are illustrative.

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
