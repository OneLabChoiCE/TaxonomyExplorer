# GSID Standard — Canonical 2D Section Geometry Identity

**Document:** GSID Standard v2.0 — DRAFT (split working copy)
**Status:** DRAFT — not yet balloted

> **Source and split note.** This document was extracted verbatim on 2026-07-11 from the unified draft [SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md](SectionHub-Material-Handling-Taxonomy-Standard-v0.1.md), which **remains the canonical document of record** until this split is ratified. Clause and section numbers below retain the unified draft's numbering to preserve cross-references; renumbering per the unified draft's Part 15.2 outline happens at ratification. Rule identifiers (P-, R-, D-, G-, C-, N-, AP-) are global across the SectionHub document family; where a rule also appears in another split document, the text is duplicated verbatim and the unified draft is authoritative if any copy diverges. No normative meaning has been changed. Text original to this split is marked *[Editorial bridge]*.

## 1. Scope

*[Editorial bridge — restates the unified draft's Part 15.2 clause 1 plan.]* This standard governs the identity layer for **canonical 2D cross-sectional geometry only**: SectionShapeCodes (`SEC:`), CanonicalGeometryIDs (the deterministic geometry signature), GSIDs, industry-designation mapping, and the boundary rules that keep 3D components, assemblies, products, test setups, manufacturer part numbers, certification records, and commercial SKUs out of this layer. Everything above the geometry layer is governed by the [Material Handling Taxonomy Standard](Material_Handling_Taxonomy_Standard.md); namespace and dictionary governance mechanics are in the [Code Dictionary Standard](Code_Dictionary_Standard.md).

## 2. Governing principles (restated verbatim from the unified draft, Part 0.2)

- **P2 — GSID is 2D-only.** GSID SHALL identify canonical 2D cross-sectional geometry only. Assemblies, products, components, test setups, manufacturer part numbers, certification records, and commercial SKUs SHALL NOT receive GSIDs. (Carried forward from GSID Standard v1.)
- **P7 — Determinism.** Given the same inputs and the same registry snapshot, classification, code assignment, designation generation, and ID derivation SHALL produce the same outputs. No AI inference is permitted as an authoritative classifier.
- **P8 — Immutability and audit safety.** Published identifiers SHALL never be reused, re-meant, or retroactively altered. Corrections occur by deprecation-with-successor, recorded in snapshots.
- **P9 — Public reproducibility.** The public dictionary and rule layer SHALL be sufficient for an independent party to classify an object and derive its content-addressed identifiers without proprietary SMHE data. Registry-assigned serial identifiers (e.g., GSID) require a registry lookup, which is satisfied by the published public snapshot files.

## 3. Rulings and section shape codes (unified draft Part 3.1–3.2)

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


## 4. Geometry-layer identity definitions (unified draft §4.2–4.5)

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


## 5. Geometry decision rules (unified draft Part 5 — rules D-1, D-2, G-3, D-4)

- **D-1 (new shape code).** A new `SEC:` code is justified **only** when the candidate geometry cannot be described by any existing code's canonical parameter schema, and the gap cannot be closed by a compatible schema extension. A *compatible extension* adds optional parameters whose default values reproduce all existing CGIDs unchanged (e.g., adding optional web-rib parameters to `OCL`); governance MAY apply it as a MINOR revision instead of a new code. Parameter **values**, manufacturing process, manufacturer identity, market usage, and product context SHALL NOT justify a new shape code.
- **D-2 (new canonical geometry / GSID).** Any difference in normalized parameter values that survives canonical rounding produces a new CGID automatically (content addressing). A new GSID is issued only if no existing GSID maps to that equivalence class. Differences **within** canonical rounding collapse to the same CGID/GSID — this is the anti-proliferation valve for mill/roll tolerance noise.
- **G-3 (geometry boundary).** Canonical geometry describes the **continuous prismatic cross-section**: features constant along the extrusion axis (folds, ribs, continuous stiffeners) belong to geometry; features discrete or periodic along the length (teardrop punching, slots, notches, weld nuggets, embossed logos) belong to component configuration (`CFG:HOL`, `CFG:END`, …). A punched rack column and its unpunched blank share the same GSID.
- **D-4 (built-up profiles).** A multi-piece profile MAY receive a canonical geometry (and hence GSID) only if the pieces are continuously connected along the full length so the cross-section is constant and acts as one section (e.g., interlocked `BXB`). Intermittently connected members (stitch-welded back-to-back, laced members) are **components/assemblies**, not sections.

### Worked micro-examples (unified draft §5.3, geometry subset)

- Lip added to an unlipped C die → schema changes (`OCU` → `OCL`): different shape code, new CGID, new GSID (D-1/D-2).
- Same OCL die, web widened 5 mm → same schema, new values: same `SEC:OCL`, new CGID, new GSID (D-2).
- Same column, teardrop punch pitch changed 50→75 mm → same GSID, new component ConfigurationID (G-3, D-5).

## 6. Designation mapping and import rules (unified draft §11.10, rules C-1–C-3)

- **C-1.** Importing an external section library SHALL create `DSG-…` records mapped to GSIDs (issuing new GSIDs only for geometry classes not yet registered) and SHALL NOT create new `SEC:` codes unless a D-1 topology case is made through governance.
- **C-2.** Designation-system distinctions that do not change canonical geometry schema (WT vs ST lineage; HW vs HM vs HN width class; pipe schedule naming) SHALL be carried as designation-record fields, never as shape codes.
- **C-3.** Two designations from different systems whose canonical geometries match within canonical rounding SHALL map to the same GSID; the registry SHALL expose these cross-system equivalences.

## 7. Boundary anti-patterns — 2D section identity (unified draft Part 14, geometry subset)

**AP-1 — Embedding geometry into IDs.** Identifiers SHALL NOT encode dimensions, gauges, counts, or attributes. *Violates P1, P5, P8.* Thirty-year failure mode: every spec correction orphans the ID; parsers grow around the encoding; the encoding runs out of room. Before/after: `WDK-46x46-3CH-WF-4GA-WLD` → `ASP-000173` + the Part 6 configuration record.

**AP-3 — Confusing section identity with product identity.** A section (2D geometry class) SHALL NOT be identified by, or merged with, the identity of a product that happens to use it. *Violates P2, H6.* Before/after: "GSID for the ACME TD-300 upright" → `GS-004217` (geometry) + `CMP-000482` (component) + `MPN-018233` (name), per Part 7.

**AP-4 — Treating assemblies as 2D cross-sections.** Decks, frames, shelving units, platforms, drawers, and lockers SHALL NOT receive GSIDs, `SEC:` codes, or canonical geometry. *Violates P2 (E-101).* Failure mode: geometry registry fills with non-geometry; canonicalization becomes undefined; the 2D layer's determinism is destroyed.

**AP-11 — Tolerance-noise proliferation.** Geometry differing only within canonical rounding SHALL NOT mint new CGIDs/GSIDs. *Violates D-2's collapsing function.* Failure mode: mill-to-mill measurement noise creates thousands of phantom geometry classes.

## Annex A (informative) — Shape-resolution decision tree (unified draft §13.3 excerpt)

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
