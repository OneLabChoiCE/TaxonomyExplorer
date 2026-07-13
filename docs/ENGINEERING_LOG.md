# Engineering Log

**Append-only, dated record of repository-stewardship and registry-operations actions** — the executable-artifact trail behind the standards. It records *engineering and steward decisions*: creating registry artifacts, structural changes, snapshot mechanics, and the recorded decisions that authorize them under the bootstrap clause.

It is distinct from, and cross-links to:

- [proposals/](../proposals/) — taxonomy/dictionary **decision records** (what a code or rule *means*);
- [CHANGELOG.md](../CHANGELOG.md) — the per-snapshot summary of dictionary/standard changes (GOVERNANCE §5);
- `docs/architecture/decisions/` — ADRs for repo-level engineering *design* choices ([repository-structure](repository-structure.md) §1).

Entries are append-only and never edited in place (P8); a correction is a new entry. **Newest first.**

---

## 2026-07-12 — Steward-seeding decision recorded (`DECISION-EF-SEED-001`) — Category E/F unblocked

**Roles:** Standards architect · Registry steward · Documentation maintainer. Authority: the bootstrap clause (GOVERNANCE §2; the founding maintainer acting as Technical Committee and Registry Operator, [Registry Architecture §9.3](SECTIONHUB_REGISTRY_ARCHITECTURE.md)).

**Objective.** Record the final Category E/F prerequisite — the steward-seeding decision [First 100 Records Plan §6 item 5 / §8 step 3](FIRST_100_RECORDS_PLAN.md) mandates and the §10 readiness checklist requires ("Every record cites its authorizing decision: … steward-seeding (E+F)"). This closes the **authorization** gap; it authors no records.

**What it authorizes (narrow).** Exactly the four planned Category E/F founding proof records — the rack-upright (`ROL:COL`), mesh-panel (`ROL:MSH`), and deck-support-channel (`ROL:DKS`) components, and the wire-deck (`ASM:WDK`/`FAM:DKG`) assembly — bound to their published Category-C templates, referencing the registered GSIDs (`GS-000001`/`GS-000002`/`GS-000004`), each `RESERVED`, each citing `DECISION-EF-SEED-001`, each carrying a `CF1-` ConfigurationID recomputable from published files. Nothing else.

**What it does NOT do (boundaries held).** Does not open Submission-Model stage S3 or any stage; does not create a general or interim submission pathway; does not weaken, amend, or reinterpret any Submission-Model rule, refusal, or gate; is not a precedent for third-party data. The reconciliation is honest: a `CMP-`/`ASP-` product-instance registration is normally S3-gated ([Submission Model §7](SECTIONHUB_DATA_SUBMISSION_MODEL.md)), whose prerequisites (SMHE legal entity, signed data licenses) exist to govern **third parties** registering **their** products — none of which applies to the steward registering the project's **own** published worked examples under the bootstrap clause. The decision records a bounded exception for exactly these four project-authored records and sunsets when they are authored; all refusal rules (§8) and the §11 certification boundary remain in force. **No performance/capacity/safety/compliance/certification language is introduced except as explicit exclusions and constraints.**

**Prerequisites confirmed present (readiness §6).** GSID records (8, `registry/gsid/`), the four Category-C templates (`templates/`), Configuration Canonicalization Rules v1 (`standards/canonicalization/configuration/v1/`), and `dictionaries/enum_tokens.csv` (24 tokens) all exist and are cited by real relative links in the decision.

**Scope (verified).** New: `docs/STEWARD_SEEDING_DECISION_EF.md` (the standalone, citable decision record, ID `DECISION-EF-SEED-001`). Modified: `registry/component/README.md`, `registry/assembly/README.md` (steward-seeding now shown satisfied — all E/F prerequisites met), this log, `CHANGELOG.md`. **No component (`CMP-`) or assembly (`ASP-`) record authored. No production `ConfigurationID` computed. No new architecture, record type, submission pathway, or governance rule. No activation; no snapshot cut.** No change to standards' normative text, dictionaries, templates' field schemas, GSID records, the Submission Model, or the Explorer. **Category E/F is now authorable; the remaining gates are the `SNAP-1.0.0` readiness checklist items (object-record lifecycle adoption §6 item 6, finalized `LICENSE`), which govern the cut, not the authoring.**

---

## 2026-07-12 — `dictionaries/enum_tokens.csv` published (Category E prerequisite #2 of 2)

**Roles:** Standards architect · Registry steward · Documentation maintainer. Authority: the bootstrap clause (GOVERNANCE §2; a `dictionaries/` vocabulary is a TC-owned data file, GOVERNANCE §3, seeded per repository-structure migration step 3).

**Objective.** Publish the governed `UPPER_SNAKE` enum-token vocabulary that [Configuration Canonicalization Rules v1 §8.1](../standards/canonicalization/configuration/v1/CONFIGURATION_CANONICALIZATION_RULES_V1.md) names as the token superset a bound value validates against — the second of the two Category E prerequisites (the first, the CF-hash procedure, was cleared earlier today; the third, the steward-seeding decision, is out of scope here and remains). Principle held throughout: **every token traces to a published source; a smaller table beats a fabricated one.**

**Source and scope (grounded, not invented).** Seeded from the CFG-group value lists in **Taxonomy Standard §3.6** (the source repository-structure migration step 3 names) plus the four published Category-C templates and the standard's worked examples (Part 6.5/6.6, 7.6). Governs **only** the seven closed-enum domains the four founding templates actually use — `EDG.edge_style`, `FIN.system`, `JNT.method`, `MPT.pattern`, `SPD.span`, `SUP.orientation`, `WIR.wire_condition` — **24 tokens**. This is the full declared closed domain of each field (so the canonicalization rules' "governed superset" is complete, not a cohort-only subset that would leave template-permitted values ungoverned), bounded strictly to the four templates (no domains for unused CFG groups — `DIM`/`MAT`/`PRF`/`HOL`/`END` — and no speculative tokens beyond §3.6's published lists, so not a broad future registry).

**Deliberate exclusions (would have been fabrication).** No token list for the fields the templates and the canonicalization rules mark **open** (`MAT.spec`/`grade`, `mesh_grade`, `HOL.pattern_id`, `HOL.faces`, `END.top`/`bottom`, `JNT.weld_schedule_class` — serialized verbatim per §8.2, so a closed vocabulary would invent constraints the templates deliberately don't impose); and no entry for the boolean `END.end_flare` (`TRUE`/`FALSE` is a serialization primitive, §7, not a governed CFG enum). `ROL-DKS.v1` therefore contributes zero tokens (its only categorical field is that boolean).

**The one disclosed-provenance token.** Six of the seven domains have their exact `UPPER_SNAKE` tokens published in §3.6 (21 tokens, rock-solid). `WIR.wire_condition` is the exception: §3.6/`cfg_groups.csv` publish only "pre/post-galvanized" → `PRE_GALV`/`POST_GALV`, while **`PLAIN`** (the uncoated third state) traces **only** to the Category-C templates (`ROL-MSH.v1`, `ASM-WDK.v1`), not to §3.6. `PLAIN` is included because a template field is an accepted provenance source and excluding it would leave a template-permitted value ungoverned (a serialization-compatibility break) — but its `source` column states plainly "not in Part 3.6," so the weaker provenance is disclosed, not laundered. Surfaced here for a future TC decision to either ratify `PLAIN` into §3.6 or tighten the template.

**Columns** (`cfg_group,field,token,status,definition,source,since_snapshot`) mirror the `cfg_groups.csv` convention (`status=ACTIVE`, `since_snapshot=SNAP-1.0.0`; assignment-bound at R0), with `cfg_group` a foreign key to `cfg_groups.csv` `code` and `field` the §3.6 domain name. The three `EDG` template fields (`front`/`rear`/`sides`) all draw the single `edge_style` domain, governed once (documented in the new `dictionaries/README.md`). No comma appears inside any field, so the CSV needs no quoting and passes the `UPPER_SNAKE`-token machine gate.

**Authority boundary preserved.** `enum_tokens.csv` is the **enum-token authority** (which values are valid in a closed domain); the versioned **templates** remain the field-schema authority (which fields exist, IB/INF, hash order); the **canonicalization package** remains the encoding authority (how a valid token becomes bytes). The canonicalization rules' §8.1/§11/§12 "not-yet-published" references to `enum_tokens.csv` were stale reference defects the moment this file landed, so they were corrected to cite it as published (factual currency only — no normative logic changed); §12 now records the steward-seeding decision as the **sole** remaining Category E prerequisite. The four templates' and both registry READMEs' "once enum_tokens.csv is published" clauses were likewise updated.

**Scope (verified).** New: `dictionaries/enum_tokens.csv`, `dictionaries/README.md`. Modified: the four `templates/*.v1.md` hashing clauses, `templates/README.md`, the canonicalization rules doc (§8.1/§11/§12 currency), `registry/component/README.md`, `registry/assembly/README.md`, this log, `CHANGELOG.md`. **No component or assembly record authored. No production `ConfigurationID` computed. Steward-seeding decision not recorded (out of scope).** No change to the other `dictionaries/*.csv`, the standards' normative text (Taxonomy/GSID/Code Dictionary Standards), the templates' field schemas, the GSID records, governance, or the Explorer. **Category E now has one remaining blocker: the steward-seeding decision.**

---

## 2026-07-12 — Configuration Canonicalization Rules v1 published (Category E prerequisite)

**Roles:** Standards architect · Registry steward · Release manager. Authority: the bootstrap clause (GOVERNANCE §2; a normative rules package published under the same authority that published geometry Canonicalization Rules v1).

**Objective.** Publish the ConfigurationID byte-serialization/rounding/field-order/hash procedure identified as the primary blocker by a same-session Category E readiness assessment (2026-07-12; conversational, not itself a recorded repository artifact — the gap is independently verifiable directly from the templates themselves): every one of the four published Category-C templates explicitly deferred this hashing ("a separate published prerequisite — not yet published"), and no such procedure existed anywhere in the repository (Taxonomy Standard §4.8 fixes only the `CF<templateRulesMajor>-<12-hex>` output format, not how a bound field record becomes bytes). Principle held throughout, identical to the geometry canonicalization precedent: **no field kind's serialization guessed; refusal over fabrication.**

**Where it lives.** New package `standards/canonicalization/configuration/v1/` — a sibling to `standards/canonicalization/v1/` (geometry, `CG1-…`), additive only; the existing geometry package is untouched. Contains `CONFIGURATION_CANONICALIZATION_RULES_V1.md`, a package `README.md`, and four per-template schemas under `schemas/` (`ASM-WDK.v1.md`, `ROL-COL.v1.md`, `ROL-DKS.v1.md`, `ROL-MSH.v1.md`) — one per founding Category-C template, restating each template's field kinds, precision-class assignments, and exact serialization key order.

**The one structural design decision (disclosed).** Unlike geometry's uniform scalar-vector schemas, a Configuration Template's identity-bearing fields are heterogeneous — numeric, integer, boolean, closed enum, open string, ordered list, and registered-identifier reference — and some fields are template-declared conditional (`ROL-DKS.v1`'s flare fields, present only when `end_flare = TRUE`). v1 therefore canonicalizes a **keyed field record** (`group.field=value`, ascending CFG-group order, then template-declared field order) rather than geometry's fixed-position vector, with an explicit **omission rule** for absent conditional fields. This is the package's one genuine departure from the geometry precedent, disclosed as necessary rather than arbitrary.

**Numeric precision classes (three, defined here — no universal figure exists in the Standard for configuration fields, unlike GSID Standard §4.3's illustrative geometry example).** Length fields: 0.1 mm / 1 decimal (class **L**) — deliberately the same step geometry v1 uses for its own, separate classes, adopted here for cross-package consistency, not as a functional dependency. Fine-gauge (wire diameter): 0.05 mm / 2 decimals (class **W**), matching geometry's thickness-tier precision. Angular (the deck-channel end-flare angle — new, no geometry-v1 analog): 0.1° / 1 decimal (class **A**). Integer counts: exact, no rounding. Booleans: literal `TRUE`/`FALSE`. Closed enum tokens: verbatim `UPPER_SNAKE`, case-sensitive. Open string/spec fields (which may contain spaces, e.g. `ASTM A1011 SS`): verbatim, excluding only the three reserved delimiter bytes (`|`, `;`, `=`). Ordered lists (deck support spacing): bracketed, comma-separated, order-preserving. Registered-identifier references (`GS-…`, `CMP-…`): the exact identifier string only, never the referenced object's own fields — preserving layering (identity is a reference key, never a description).

**Reference test vectors (verified with `sha256sum`; NOT production data).** Three vectors, deliberately synthetic (round illustrative numbers; placeholder identifiers `GS-999999`/`CMP-999999` explicitly flagged as non-registered), so none could be mistaken for a real Category E/F hash:

| Vector | Template | Normalized record | `CF1-…` |
|---|---|---|---|
| A | `ROL-DKS.v1` (no flare) | `CANON-CFG-V1\|ROL-DKS.v1\|DIM.length_mm=2000.0;END.end_flare=FALSE` (64 B) | `CF1-4861AB2ADA2E` |
| B | `ROL-DKS.v1` (flared) | `CANON-CFG-V1\|ROL-DKS.v1\|DIM.length_mm=2000.0;END.end_flare=TRUE;END.flare_length_mm=30.0;END.flare_angle_deg=15.0` (113 B) | `CF1-CB4FCC0C895E` |
| C | `ROL-MSH.v1` | `CANON-CFG-V1\|ROL-MSH.v1\|DIM.nominal_width_mm=500.0;DIM.nominal_depth_mm=500.0;MAT.mesh_grade=SAMPLE-GRADE-1;MPT.aperture_x_mm=20.0;MPT.aperture_y_mm=20.0;MPT.pattern=SQUARE;WIR.wire_diameter_mm=2.00;WIR.wire_condition=PLAIN;WIR.wire_stock_gsid=GS-999999` (253 B) | `CF1-FD320D3A0C4B` |

(The `\|` is Markdown escaping; the literal separator byte is a single `|`.) A and B contrast the conditional-field omission rule (A omits the flare fields entirely; B includes them) on the same template. A negative control (Vector A with a trailing newline) hashes to a completely different digest, confirming the no-trailing-newline rule is load-bearing. A fourth, unhashed illustrative fragment demonstrates `ASM-WDK.v1`'s remaining field kinds (integer count, `CMP-…` reference, ordered list) without computing anything resembling a complete deck configuration.

**Two independent prerequisites remain (verified, neither closed by this package).** (1) `dictionaries/enum_tokens.csv` — the governed token superset (First 100 Records Plan §6 item 2); this package serializes whatever token a template binds, but does not publish or freeze the governed vocabulary. (2) The recorded **steward-seeding decision** authorizing Category E + F intake (§6 item 5). `registry/component/README.md` and `registry/assembly/README.md` updated to reflect the corrected, complete prerequisite picture (both previously omitted the ConfigurationID-hashing prerequisite from their lists entirely — a gap surfaced during this task, now fixed).

**Scope (verified).** No component (`CMP-…`) or assembly (`ASP-…`) record authored. No production `ConfigurationID` computed. No change to the four Category-C templates' field schemas, IB/INF splits, or field orders — only their "ConfigurationID hashing" paragraph updated to cite the now-published package (the templates' prior "not yet published" claim would otherwise be stale). No change to dictionaries, standards (other than the new sibling canonicalization package), governance, the Explorer, geometry Canonicalization Rules v1, or any GSID/dictionary record. `docs/FIRST_100_RECORDS_PLAN.md` deliberately **not edited** — the observation that it never named this prerequisite as a numbered §6 item is recorded here, not corrected there, pending separate authorization (mirroring how a prior tally erratum to that plan was made only when explicitly requested).

---

## 2026-07-12 — Category C configuration templates seeded (4 founding template records)

**Roles:** Standards architect · Registry steward · Documentation maintainer. Authority: the bootstrap clause (GOVERNANCE §2; a new configuration template version is a Technical-Committee decision, [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.1).

**Objective.** Seed the four founding configuration templates ([First 100 Records Plan §1–2](FIRST_100_RECORDS_PLAN.md) Category C) — the versioned field schemas whose identity-bearing subset a `ConfigurationID` hashes — exactly the set the wire-deck + upright proof (Categories E/F) needs. Principle held throughout: **every field traces to a Taxonomy Standard worked example; no field invented; refusal over fabrication.**

**Where they live and their form.** Created the `templates/` directory (repository-structure migration step 1/6; it did not exist). Templates are **not** under `registry/` — they live in `templates/` under TC decision (Registry Architecture §2, §9.1; repository-structure §3), identifier form `ASM-<code>.v<n>` / `ROL-<code>.v<n>`. Authored as Markdown following [FOUNDING_RECORD_TEMPLATE](FOUNDING_RECORD_TEMPLATE.md) (configuration-template variant), the JSON machine-encoding (`schemas/files/template.schema.json`) deferred — the same precedent set by the canonicalization v1 shape schemas (authored `.md`, not the sketched `.json`). `record_type: configuration_template` instantiates the **Configuration Type** record the Registry Architecture §2 object model already names; no new record type invented. **One flagged format gap (surfaced in adversarial review):** that value is not yet in [FOUNDING_RECORD_TEMPLATE](FOUNDING_RECORD_TEMPLATE.md) §2.1's frontmatter enum or its §4 variant catalog — adding the configuration-template variant is a **pending normative amendment** to that format doc, flagged (not made) here, in each template's §1, and in `templates/README.md`, on the same footing as the cohort's other flagged prerequisites. FOUNDING_RECORD_TEMPLATE.md itself is deliberately left unmodified (out of scope).

**The four templates (one record per planned template).**

| Template | Templates code | Basis in Standard | CFG groups drawn on |
|---|---|---|---|
| `ASM-WDK.v1` | `ASM:WDK` (wire deck) | Part 6.5–6.6 | DIM, EDG, FIN, JNT, MAT, MPT, SPD, SUP, WIR |
| `ROL-COL.v1` | `ROL:COL` (upright / column) | Part 7.3, 7.6 | DIM, END, FIN, HOL, MAT |
| `ROL-DKS.v1` | `ROL:DKS` (deck-support channel) | Part 6.3–6.4 | DIM, END |
| `ROL-MSH.v1` | `ROL:MSH` (mesh panel) | Part 6.3, 6.6 | DIM, MAT, MPT, WIR |

`ROL-MSH.v1` is the fourth template First 100 Records Plan §2 added to the three-template Bootstrap sketch (the mesh panel's `ConfigurationID` needs a registered mesh-role template). Each template's Meaning block restates the standard's identity-bearing (**IB**) / informative (**INF**) split verbatim, marks canonical units (mm; `UPPER_SNAKE` enums) and a deterministic field order (ascending CFG group code, then listed field order), links every field's CFG dictionary record, and cites the source Part per field. `CFG:FIN.color` is the one INF field (WDK, COL); channel thickness and load capacity are explicitly excluded per Part 6.5.

**Two honesty boundaries held.**
1. **No `ConfigurationID` computed.** A template fixes the field schema §4.7 requires; the byte-serialization + numeric-normalization (rounding) rules that turn a bound field set into the hashed `CF1-…` string are a **separate published prerequisite — not yet published**, exactly as Canonicalization Rules v1 was the prerequisite for every `CG1-…`. So Category E/F `ConfigurationID` computation stays gated on that spec (and `dictionaries/enum_tokens.csv`, migration step 3), just as Category D was gated on canonicalization v1. No `CF` hash is computed, embedded, or registered.
2. **No fabricated fields.** `ROL-DKS.v1` carries only the fields Part 6.3–6.4 enumerates for the channel (section ref, parametric length, end-flare condition); an independent material/finish field the standard does not enumerate for a `ROL:DKS` component was **not** invented — it would enter as a new template version (`.v2`), never an edit (RA §3.3).

**Record discipline (verified).** Section/stock references use the **real registered GSID serials** — `GS-000001` (COL section `SEC:OCL`), `GS-000002` (DKS section `SEC:OCU`), `GS-000004` (WDK/MSH wire stock `SEC:RBR`) — not the standard's illustrative `GS-004217`/`GS-002734`/`GS-000891` placeholders (reconciled per §4). Each links its `ASM:`/`ROL:` dictionary code, its CFG group dictionary records, and the GSID records it references. Status is `RESERVED` on the single `RESERVED → ACTIVE` trajectory; activation waits on the template-adoption decision (§6 item 2) and the object-record lifecycle adoption (§6 item 6). **No template activated; no snapshot cut.**

**Scope (verified).** New: `templates/` (4 records + README). Modified: this log, `CHANGELOG.md`, and `registry/README.md` (the one stale "that directory is not yet created" clause). No change to `dictionaries/*`, `registry/dictionary/*`, the GSID records, the canonicalization package, the standards, governance, the Explorer, or the Bootstrap Plan. **Founding cohort now A(6)+B(86)+C(4)+D(8) = 104 registered records seeded; remaining E+F (3 CMP + 1 ASP), gated on the configuration-hashing rules and the steward-seeding decision (§6 item 5).**

---

## 2026-07-12 — Category D GSID proof cohort registered (8 founding geometry records)

**Roles:** Standards architect · Registry steward · Evidence custodian · Documentation maintainer · Release manager. Authority: the bootstrap clause (GOVERNANCE §2; deterministic GS- issuance is the Registry Operator's own role, [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.2–§9.3).

**Objective.** Register the eight founding GSID proof records ([First 100 Records Plan §4](FIRST_100_RECORDS_PLAN.md) Category D) — the flagship worked-example geometries — now that [Canonicalization Rules v1](../standards/canonicalization/v1/CANONICALIZATION_RULES_V1.md) makes each CGID honestly computable (the prior blocker). Principle held throughout: **no CGID that cannot be reproduced from published files alone; fabrication refused.**

**Serial-ordering rule (confirmed before assigning).** The plan issues real serials by deterministic procedure and reconciles the illustrative `GS-004217`-style placeholders away (§4: "the first geometry registered becomes `GS-000001`"). The plan does not restate a registration order in §8, but §4 **enumerates** the eight geometries in a fixed table order — that table *is* the deterministic order. Adopted: **First 100 Records Plan §4 top-to-bottom enumeration order** → `GS-000001…GS-000008`. The illustrative placeholders are non-ascending, confirming they never encoded order. (Had the order been genuinely unspecified it would have been surfaced, not guessed; it is specified.)

**CGID computation (deterministic, verified with `sha256sum`; not hand-written).** Each record's normalized byte string is the published Canonicalization Rules v1 §7 serialization; `SHA-256` → first 12 hex, upper-case → `CG1-`:

| Serial | Shape | Normalized byte string (UTF-8, no trailing NL) | CGID |
|---|---|---|---|
| GS-000001 | `SEC:OCL` | `CANON-V1\|SEC:OCL\|76.2;41.3;12.7;1.90` (36 B) | `CG1-8EF31CC7EA1F` |
| GS-000002 | `SEC:OCU` | `CANON-V1\|SEC:OCU\|32.0;25.0;1.50` (31 B) | `CG1-710171128D0C` |
| GS-000003 | `SEC:OCU` | `CANON-V1\|SEC:OCU\|40.0;40.0;1.50` (31 B) | `CG1-7076AF79DD56` |
| GS-000004 | `SEC:RBR` | `CANON-V1\|SEC:RBR\|4.0` (20 B) | `CG1-8728D6FACFC3` |
| GS-000005 | `SEC:PLT` | `CANON-V1\|SEC:PLT\|152.0;6.40` (27 B) | `CG1-F6C764B089B4` |
| GS-000006 | `SEC:ANG` | `CANON-V1\|SEC:ANG\|38.0;38.0;2.70` (31 B) | `CG1-686CDC3CB280` |
| GS-000007 | `SEC:FBR` | `CANON-V1\|SEC:FBR\|25.0;3.00` (26 B) | `CG1-648776464448` |
| GS-000008 | `SEC:SHS` | `CANON-V1\|SEC:SHS\|76.0;3.20` (26 B) | `CG1-8B0B6C97B279` |

(The `\|` is Markdown escaping; the literal separator byte is a single `|`.) All eight CGIDs are distinct. The two `SEC:OCU` records (same schema, different values) yield different CGIDs — the D-2 behaviour; `GS-000005`/`GS-000007` show `SEC:PLT` vs `SEC:FBR` distinguished by the shape code as a hashed field despite an identical two-parameter schema shape.

**Record discipline (verified).** One GSID record per geometry; each `subject` is **geometry only** (shape code + canonical parameters) — no product, component, assembly, manufacturer, SKU, capacity, performance, test, or certification field anywhere (GSID Standard P2; boundary AP-3/AP-4). Each record's product context (rack upright, deck channel, frame brace, base plate, shelving post, sway strap, platform column, mesh wire) is recorded **only** as illustrative worked-example provenance with an explicit "identifies the geometry, never that object" affirmation (AP-3). Each record links its `SEC:` dictionary code and its canonicalization v1 schema, carries `derived_id` = its `CG1-` companion (1:1, GSID Standard §4.4), and gives the full recompute path (byte string + SHA-256 + prefix, P9). Status is `RESERVED` on the single `RESERVED → ACTIVE` trajectory; the RA §5 object-record lifecycle is flagged as the cohort's one `[Proposed]` dependency (§6 item 6). **No record activated; no snapshot cut.**

**Scope (verified).** No change to `dictionaries/*`, `registry/dictionary/*`, the canonicalization package, the standards, governance, the Explorer, or the Bootstrap Plan. Only `registry/gsid/README.md` (populated), this log, and `CHANGELOG.md` updated alongside the 8 new records.

**Files.**
- **Created (8):** `registry/gsid/GS-000001.md` … `registry/gsid/GS-000008.md`.
- **Modified (3):** `registry/gsid/README.md`, `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry).

**Founding cohort status.** Categories A (6) + B (86) + D (8) now seeded = 100 registered founding records (+8 derived CGIDs). Remaining: Category C (4 templates) and E+F (3 `CMP` + 1 `ASP`), which depend on the `templates/` directory (not yet created) and the steward-seeding decision.

**Status left:** uncommitted, pending review.

---

## 2026-07-12 — Canonicalization Rules v1 published (Category D CGID prerequisite)

**Roles:** Standards architect · Registry steward · Evidence custodian · Documentation maintainer · Release manager. Authority: the bootstrap clause (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3). **Scope: a single, explicitly-authorized standards prerequisite** — it clears the gate that blocked Category D and does nothing else.

**Objective.** Publish the minimum normative canonicalization package that makes founding GSID (Category D) CGIDs *honest* — i.e. recomputable by an independent party from published files alone (P9) — satisfying prerequisite 1 of [registry/gsid/README.md](../registry/gsid/README.md) and [First 100 Records Plan §6 item 1 / §8 step 1](FIRST_100_RECORDS_PLAN.md). Category D itself was **held** in the prior turn precisely because this package did not exist; fabricating a CGID without it would have breached P7/P9 and RA-4/RA-12.

**Foundational design choice (grounds the whole package).** [GSID Standard §4.3](../standards/GSID_2D_Standard.md) defines a CanonicalGeometry as `{shape_code, canonicalization_rules_version, normalized parameter vector}`. v1 takes "parameter vector" literally: it canonicalizes an **intrinsic scalar parameter vector, never a coordinate polygon/CAD outline.** Because no coordinates are serialized, there is no orientation/rotation/translation/point-order/CAD ambiguity to resolve — determinism reduces to fixed parameter order plus fixed decimal formatting. This is what let every one of the seven cohort schemas be specified honestly. The single disclosed simplification is a **sharp-corner idealization** (fillet/bend/corner radii and flange taper excluded in v1 — the worked examples carry no radius values, so v1 invents none); it is stated as the explicit §10 exclusion, not hidden.

**What was published (`standards/canonicalization/v1/`).**
- `CANONICALIZATION_RULES_V1.md` — the normative rules: scope (CGID support only; no product/component/manufacturer/SKU/capacity/performance/cert/compliance), canonical unit (mm), global + per-shape parameter ordering, a two-class numeric-normalization rule (envelope 0.1 mm → 1 fractional digit; thickness 0.05 mm → 2), orientation (N/A by construction), conservative equivalent-transform table (translation/rotation/mirror/point-order all identity-preserving for these symmetric parameter schemas), a **byte-exact serialization** (UTF-8, no BOM, `|`/`;` separators, case-sensitive, no whitespace, fixed decimals, **no trailing newline**), the **`CG1-` hash procedure** (SHA-256 → first 12 hex, upper-case), explicit exclusions (§10), and a Category D readiness statement (§11).
- `README.md` — package overview and version semantics (`CG1-` ↔ rules major 1; a future coordinate-geometry or radius-aware version would be `v2`/`CG2-`, GSIDs persisting and re-pointing per RA §3.3).
- `schemas/` — seven per-shape schemas: `OCL`, `OCU`, `RBR`, `PLT`, `ANG`, `FBR`, `SHS`. Each declares shape code + SEC dictionary relationship, required parameters, fixed order, unit, precision class, justified numeric domain (positivity; ANG descending-leg order; SHS square constraint), excluded fields, and exact serialization contribution. `OCU` serves **both** OCU cohort records (same schema, different values → different CGID — the D-2 behaviour). No schema is published for any non-cohort shape (deliberate minimality, §10).

**Reproducibility proof (verified, not asserted).** The rules carry a **reference test vector using a deliberately NON-cohort geometry** (`SEC:OCU` 100.0×50.0×2.00) so the pipeline is pinned without pre-minting any production CGID: `CANON-V1|SEC:OCU|100.0;50.0;2.00` (32 bytes, no trailing newline) → `SHA-256 8424749059a5…` → **`CG1-8424749059A5`**, computed with `sha256sum` during authoring. A negative control (same string + one trailing `\n` → `204a25cf…`) demonstrates why the no-trailing-newline rule is normative. The eight cohort **serialized input strings** are tabulated (§7.3) to prove schema coverage, but their **CGIDs are deliberately NOT computed here** — that is the Category D task (readiness §11).

**Boundary discipline (verified).** No manufacturer/SKU/product/component/assembly/capacity/performance/test/certification/compliance field appears anywhere in the rules or the seven schemas; each schema lists these as excluded. No GSID redefinition; no new architecture, governance, or doctrine — the package is the published `v1` instance of a derivation the GSID Standard already defines. No modification to the GSID Standard, Registry Architecture, governance, dictionaries, the Explorer, or any registry record (only `registry/gsid/README.md` prerequisite note updated).

**Category D readiness (the point of the task).** CGID honesty is **achieved** — canonicalization is no longer a Category D blocker. Remaining before the eight GSID records are authored (none of it canonicalization work): (1) compute the eight CGIDs via §8; (2) fix the deterministic `GS-000001…` serial-issuance order (First 100 §4); (3) handle the still-`[Proposed]` RA §5 object-record lifecycle — authorable as `RESERVED` with the dependency flagged pending, exactly as the dictionary cohort treats the un-cut snapshot.

**Files.**
- **Created (9):** `standards/canonicalization/v1/README.md`, `standards/canonicalization/v1/CANONICALIZATION_RULES_V1.md`, `standards/canonicalization/v1/schemas/{OCL,OCU,RBR,PLT,ANG,FBR,SHS}.md`.
- **Modified (3):** `registry/gsid/README.md` (prerequisite 1 marked satisfied), `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry).

**Status left:** uncommitted, pending review. No snapshot cut; the package is DRAFT R0 and ratifies into force when first referenced by the `SNAP-1.0.0` cut.

---

## 2026-07-12 — Dictionary founding records, batch 8 (CFG namespace completion — Category B ratified 86/86)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

**Objective.** Complete the `CFG:` namespace by seeding every remaining configuration-group code from `dictionaries/cfg_groups.csv`, closing Category B of the First 100 Records Plan at 86/86.

**Note on the source file.** The batch request named `cfg_codes.csv`; the governing dictionary in the repository is `dictionaries/cfg_groups.csv` (the configuration-group dictionary). Enumeration and provenance are taken from that actual file.

**Enumeration (from the CSV directly).** `cfg_groups.csv` has 12 code rows: `DIM` (ACTIVE, seeded batch 1) and 11 remaining — all `ACTIVE`: `MAT`, `EDG`, `MPT`, `WIR`, `SPD`, `SUP`, `JNT`, `FIN`, `PRF`, `HOL`, `END`. The configuration-group CSV columns are `code,name,status,example_fields,since_snapshot` — there is **no `successor` column** and no free-text definition; `example_fields` stands in.

**Records created (11), each a verbatim, sourced restatement of its `dictionaries/cfg_groups.csv` row (`example_fields` restated exactly, including the enumeration tokens and the `|` alternations):** `CFG:MAT` (Material specification), `CFG:EDG` (Edge condition), `CFG:MPT` (Mesh pattern), `CFG:WIR` (Wire specification), `CFG:SPD` (Span direction), `CFG:SUP` (Support arrangement), `CFG:JNT` (Joining / attachment), `CFG:FIN` (Finish system), `CFG:PRF` (Perforation pattern), `CFG:HOL` (Hole / punch pattern), `CFG:END` (End condition).

**Decision (the authorizing decision these records cite).** Acting under the bootstrap clause, the eleven codes are seeded as activation-bound records: each carries `RESERVED` at the current (R0) lineage point on a single `RESERVED → ACTIVE` trajectory the `SNAP-1.0.0` cut completes (§5/§8). Each code is **listed in** the Configuration group codes table (Taxonomy Standard §3.6); because that table carries **no status column**, the `ACTIVE` status is read from the `cfg_groups.csv` seed row — the citation attributes the code listing to §3.6 and the status to the CSV, without asserting a status letter the table does not contain. Configuration groups are **schema organizers that never identify objects** (§3.6); each record records that it groups identity-bearing/informative fields for the versioned templates and is never itself an object identifier. No engineering meaning was inferred beyond the governed row.

**Namespace completeness (verified).** All 12 `cfg_groups.csv` rows now have exactly one founding record (1 batch 1 + 11 batch 8). No orphan `CFG-*.md` without a CSV row. **The `CFG:` namespace is complete.**

**Category-B completeness (verified — the mandate is closed).** Every dictionary row in every namespace now has exactly one founding record: `SEC:` 29/29, `ROL:` 17/17, `ASM:` 16/16, `FAM:` 12/12, `CFG:` 12/12 = **86/86**. First 100 Records Plan §1 Category B is fully seeded.

**Lifecycle-state counts across the full 86-code cohort (assigned status at the `SNAP-1.0.0` lineage point; counted from the `status` column of the five governing CSVs).** `ACTIVE` — 76 (activation-bound: `RESERVED` at R0 → `ACTIVE` at the cut). `RESERVED`-parked — 2 (`SEC:SBR`, `SEC:HBR`). `SUPERCLASS` — 5 (`SEC:OCS`/`HSS`/`BAR`/`ZEE`, `ASM:DCK`). `REJECTED` — 3 (`SEC:CFS`/`PIP`/`TUB`). `DEPRECATED` — 0 (structurally absent; requires a later decision naming a successor, §5). Total 76 + 2 + 5 + 3 = 86. Four of the five N5 states are represented; batch 8 adds only `ACTIVE` codes.

**Scope discipline (verified).** No status transition undefined in §5; no publication-flag / shadow-"terminal status" framing; no invented rationale or inferred engineering meaning; each record matches its CSV row exactly. No new record types, GSID/component/assembly records, snapshot cut, `[Proposed]` adoption, or governance/architecture/standards/Explorer/Bootstrap-Plan change. No performance/capacity/safety/compliance value.

**Files.**
- **Created (11):** `registry/dictionary/{CFG-MAT,CFG-EDG,CFG-MPT,CFG-WIR,CFG-SPD,CFG-SUP,CFG-JNT,CFG-FIN,CFG-PRF,CFG-HOL,CFG-END}.md`
- **Modified (3):** `registry/dictionary/README.md`, `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry).

**Status left:** uncommitted, pending review.

---

## 2026-07-12 — Dictionary founding records, batch 7 (FAM namespace completion)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

**Objective.** Complete the `FAM:` namespace by seeding every remaining product family code from `dictionaries/fam_codes.csv`, under the assigned-status semantics.

**Enumeration (from the CSV directly).** `fam_codes.csv` has 12 code rows: `SPR` (ACTIVE, seeded batch 1) and 11 remaining — all `ACTIVE`: `CLR`, `DKG`, `RSP`, `RPA`, `SHV`, `WPL`, `WKS`, `MDR`, `LCK`, `MBS`, `STC`. The family CSV columns are `code,name,status,domain,industry_anchor,successor,since_snapshot` — `domain` and `industry_anchor` stand in for a free-text definition.

**Records created (11), each a verbatim, sourced restatement of its `dictionaries/fam_codes.csv` row (domain `MH` + industry anchor restated exactly, ANSI standard numbers preserved for `CLR`/`DKG`):** `FAM:CLR` (Cantilever rack), `FAM:DKG` (Industrial storage rack decking), `FAM:RSP` (Rack-supported platforms), `FAM:RPA` (Rack protection & accessories), `FAM:SHV` (Steel shelving), `FAM:WPL` (Industrial work platforms), `FAM:WKS` (Workstations), `FAM:MDR` (Modular drawer storage), `FAM:LCK` (Lockers), `FAM:MBS` (Movable-base storage), `FAM:STC` (Storage containers).

**Decision (the authorizing decision these records cite).** Acting under the bootstrap clause, the eleven codes are seeded as activation-bound records: each carries `RESERVED` at the current (R0) lineage point on a single `RESERVED → ACTIVE` trajectory the `SNAP-1.0.0` cut completes (§5/§8). Citation basis is the Product family codes table (Taxonomy Standard §3.5, status `A`). Each is domain-scoped to `MH`. The `industry_anchor` is recorded as provenance text — the external standard *scope* a family aligns to (e.g. RMI/SMA scopes) — and is explicitly **not** a registered `DSG-`/`XMAP` crosswalk and confers no external authority. No engineering meaning was inferred beyond the governed row.

**Namespace completeness (verified).** All 12 `fam_codes.csv` rows now have exactly one founding record (1 batch 1 + 11 batch 7). No orphan `FAM-*.md` without a CSV row. **The `FAM:` namespace is complete.**

**Effect on coverage.** Category B seeded: **75 of 86** (`SEC:` 29/29, `ASM:` 16/16, `ROL:` 17/17, `FAM:` 12/12 — four namespaces complete). N5-state coverage is unchanged — four of five (`ACTIVE`, `RESERVED`, `SUPERCLASS`, `REJECTED`); batch 7 adds only `ACTIVE` codes. `DEPRECATED` remains structurally absent (§5). Remaining: 11 `ACTIVE` codes in the `CFG:` namespace (the final batch).

**Scope discipline (verified).** No status transition undefined in §5; no publication-flag / shadow-"terminal status" framing; no invented rationale or inferred engineering meaning; each record matches its CSV row exactly. No new record types, GSID/component/assembly records, snapshot cut, `[Proposed]` adoption, or governance/architecture/standards/Explorer/Bootstrap-Plan change. No performance/capacity/safety/compliance value.

**Files.**
- **Created (11):** `registry/dictionary/{FAM-CLR,FAM-DKG,FAM-RSP,FAM-RPA,FAM-SHV,FAM-WPL,FAM-WKS,FAM-MDR,FAM-LCK,FAM-MBS,FAM-STC}.md`
- **Modified (3):** `registry/dictionary/README.md`, `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry).

**Status left:** uncommitted, pending review.

---

## 2026-07-12 — Dictionary founding records, batch 6 (ROL namespace completion)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

**Objective.** Complete the `ROL:` namespace by seeding every remaining component role code from `dictionaries/rol_codes.csv`, under the assigned-status semantics.

**Enumeration (from the CSV directly).** `rol_codes.csv` has 17 code rows: `COL` (ACTIVE, seeded batch 1) and 16 remaining — all `ACTIVE`: `BEM`, `BRC`, `ARM`, `BAS`, `BPL`, `DKS`, `MSH`, `PAN`, `SHF`, `CON`, `CLP`, `ADP`, `GRD`, `STP`, `SPC`, `ANC`.

**Records created (16), each a verbatim, sourced restatement of its `dictionaries/rol_codes.csv` row (the `ROL:` dictionary carries `definition`/`successor` only):** `ROL:BEM` (Beam / load member), `ROL:BRC` (Brace), `ROL:ARM` (Arm), `ROL:BAS` (Base member), `ROL:BPL` (Base plate / footplate), `ROL:DKS` (Deck support member), `ROL:MSH` (Wire mesh panel), `ROL:PAN` (Panel), `ROL:SHF` (Shelf), `ROL:CON` (Connector), `ROL:CLP` (Clip / retainer), `ROL:ADP` (Adapter), `ROL:GRD` (Guard member), `ROL:STP` (Stop), `ROL:SPC` (Spacer), `ROL:ANC` (Anchor).

**Decision (the authorizing decision these records cite).** Acting under the bootstrap clause, the sixteen codes are seeded as activation-bound records: each carries `RESERVED` at the current (R0) lineage point on a single `RESERVED → ACTIVE` trajectory the `SNAP-1.0.0` cut completes (§5/§8). Citation basis is the Component role codes table (Taxonomy Standard §3.3, status `A`). Component roles have no `ROL:` superclass (no rollups in this namespace), so each is standalone; per the DAG hierarchy (H2), a role is orthogonal to section shape (`SEC:`) and product family (`FAM:`). No engineering meaning was inferred beyond the governed `definition` text.

**Namespace completeness (verified).** All 17 `rol_codes.csv` rows now have exactly one founding record (1 batch 1 + 16 batch 6). No orphan `ROL-*.md` without a CSV row. **The `ROL:` namespace is complete.**

**Effect on coverage.** Category B seeded: **64 of 86** (`SEC:` 29/29, `ASM:` 16/16, `ROL:` 17/17 — three namespaces complete). N5-state coverage is unchanged — four of five (`ACTIVE`, `RESERVED`, `SUPERCLASS`, `REJECTED`); batch 6 adds only `ACTIVE` codes. `DEPRECATED` remains structurally absent (§5). Remaining: 22 `ACTIVE` codes in `FAM:` (11) and `CFG:` (11).

**Scope discipline (verified).** No status transition undefined in §5; no publication-flag / shadow-"terminal status" framing; no invented rationale or inferred engineering meaning; each record matches its CSV row exactly. No new record types, GSID/component/assembly records, snapshot cut, `[Proposed]` adoption, or governance/architecture/standards/Explorer/Bootstrap-Plan change. No performance/capacity/safety/compliance value.

**Files.**
- **Created (16):** `registry/dictionary/{ROL-BEM,ROL-BRC,ROL-ARM,ROL-BAS,ROL-BPL,ROL-DKS,ROL-MSH,ROL-PAN,ROL-SHF,ROL-CON,ROL-CLP,ROL-ADP,ROL-GRD,ROL-STP,ROL-SPC,ROL-ANC}.md`
- **Modified (3):** `registry/dictionary/README.md`, `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry).

**Status left:** uncommitted, pending review.

---

## 2026-07-12 — Dictionary founding records, batch 5 (ASM namespace completion)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

**Objective.** Complete the `ASM:` namespace by seeding every remaining assembly type code from `dictionaries/asm_codes.csv`, under the corrected assigned-status semantics.

**Enumeration (from the CSV directly).** `asm_codes.csv` has 16 code rows: `DCK` (SUPERCLASS, seeded batch 2), `WDK` (ACTIVE, seeded batch 1), and 14 remaining — all `ACTIVE`: `SDK`, `PDK`, `BGD`, `FRM`, `BMA`, `CBA`, `ACA`, `CVB`, `SHU`, `WPF`, `GDA`, `CNT`, `DRW`, `LKR`.

**Records created (14), each a verbatim, sourced restatement of its `dictionaries/asm_codes.csv` row (the `ASM:` dictionary carries `definition`/`successor` only — no `form_class`/`maps_from`):**

| Record | Identifier | Superclass | status @ SNAP-1.0.0 |
|---|---|---|---|
| `ASM-SDK.md` | `ASM:SDK` | `ASM:DCK` | `ACTIVE` |
| `ASM-PDK.md` | `ASM:PDK` | `ASM:DCK` | `ACTIVE` |
| `ASM-BGD.md` | `ASM:BGD` | `ASM:DCK` | `ACTIVE` |
| `ASM-FRM.md` | `ASM:FRM` | — | `ACTIVE` |
| `ASM-BMA.md` | `ASM:BMA` | — | `ACTIVE` |
| `ASM-CBA.md` | `ASM:CBA` | — | `ACTIVE` |
| `ASM-ACA.md` | `ASM:ACA` | — | `ACTIVE` |
| `ASM-CVB.md` | `ASM:CVB` | — | `ACTIVE` |
| `ASM-SHU.md` | `ASM:SHU` | — | `ACTIVE` |
| `ASM-WPF.md` | `ASM:WPF` | — | `ACTIVE` |
| `ASM-GDA.md` | `ASM:GDA` | — | `ACTIVE` |
| `ASM-CNT.md` | `ASM:CNT` | — | `ACTIVE` |
| `ASM-DRW.md` | `ASM:DRW` | — | `ACTIVE` |
| `ASM-LKR.md` | `ASM:LKR` | — | `ACTIVE` |

**Decision (the authorizing decision these records cite).** Acting under the bootstrap clause, the fourteen codes are seeded as activation-bound records: each carries `RESERVED` at the current (R0) lineage point on a single `RESERVED → ACTIVE` trajectory the `SNAP-1.0.0` cut completes (§5/§8). Citation basis is the Assembly type codes table (Taxonomy Standard §3.4, status `A`). `SDK`/`PDK`/`BGD` are members of the `ASM:DCK` deck rollup and name it in §5; the other eleven are standalone assembly types (`Superclass: none`). No engineering meaning was inferred beyond the governed `definition` text.

**Parent–child consistency (verified).** `ASM:DCK` (batch 2) declares members `WDK`/`SDK`/`PDK`/`BGD`; all four are now seeded and each names `ASM:DCK` in §5. `ASM:WDK` (batch 1) previously described `ASM:DCK` as a "deferred `SUPERCLASS` record" — stale since batch 2 created it — so its §5 was aligned to the reciprocal-back-reference convention (additive cross-reference only; no `status`, provenance, or CSV value changed). No orphan child; no member declared-but-missing.

**Namespace completeness (verified).** All 16 `asm_codes.csv` rows now have exactly one founding record (1 batch 1 + 1 batch 2 + 14 batch 5). **The `ASM:` namespace is complete.**

**Effect on coverage.** Category B seeded: **48 of 86** (`SEC:` 29/29, `ASM:` 16/16 — two namespaces complete). N5-state coverage is unchanged — four of five (`ACTIVE`, `RESERVED`, `SUPERCLASS`, `REJECTED`); batch 5 adds only `ACTIVE` codes. `DEPRECATED` remains structurally absent (§5). Remaining: 38 `ACTIVE` codes in `ROL:` (16), `FAM:` (11), `CFG:` (11).

**Scope discipline (verified).** No status transition undefined in §5; no publication-flag / shadow-"terminal status" framing; no invented rationale or inferred engineering meaning; each record matches its CSV row exactly. No new record types, GSID/component/assembly records, snapshot cut, `[Proposed]` adoption, or governance/architecture/standards/Explorer/Bootstrap-Plan change. No performance/capacity/safety/compliance value.

**Files.**
- **Created (14):** `registry/dictionary/{ASM-SDK,ASM-PDK,ASM-BGD,ASM-FRM,ASM-BMA,ASM-CBA,ASM-ACA,ASM-CVB,ASM-SHU,ASM-WPF,ASM-GDA,ASM-CNT,ASM-DRW,ASM-LKR}.md`
- **Modified (4):** `registry/dictionary/README.md`, `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry), and `registry/dictionary/ASM-WDK.md` (§5 reciprocal back-reference alignment).

**Status left:** uncommitted, pending review.

---

## 2026-07-12 — Dictionary founding records, batch 4 (SEC namespace completion)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

**Objective.** Complete the `SEC:` namespace by seeding its nine standalone active shape codes — the section shapes that belong to no superclass rollup — under the corrected assigned-status semantics.

**Records created (9), each a verbatim, sourced restatement of its `dictionaries/sec_codes.csv` row (all status `A` in the §3.2 shape-code table, all standalone):**

| Record | Identifier | Form class | status @ SNAP-1.0.0 |
|---|---|---|---|
| `SEC-IWF.md` | `SEC:IWF` | `HOT_ROLLED_FILLETED` | `ACTIVE` |
| `SEC-ITF.md` | `SEC:ITF` | `HOT_ROLLED_FILLETED` | `ACTIVE` |
| `SEC-ANG.md` | `SEC:ANG` | `HOT_ROLLED_FILLETED` | `ACTIVE` |
| `SEC-TEE.md` | `SEC:TEE` | `HOT_ROLLED_FILLETED` | `ACTIVE` |
| `SEC-PLT.md` | `SEC:PLT` | `HOT_ROLLED_FILLETED` | `ACTIVE` |
| `SEC-OMG.md` | `SEC:OMG` | `FOLDED_UNIFORM_T` | `ACTIVE` |
| `SEC-SGM.md` | `SEC:SGM` | `FOLDED_UNIFORM_T` | `ACTIVE` |
| `SEC-STB.md` | `SEC:STB` | `FOLDED_UNIFORM_T` | `ACTIVE` |
| `SEC-BXB.md` | `SEC:BXB` | `FOLDED_UNIFORM_T` | `ACTIVE` |

**Decision (the authorizing decision these records cite).** Acting under the bootstrap clause, the nine codes are seeded as activation-bound records: each carries `RESERVED` at the current (R0) lineage point on a single `RESERVED → ACTIVE` trajectory the `SNAP-1.0.0` cut completes (§5/§8). None is a member of a superclass rollup — each §5 records `Superclass: none` (standalone). Citation basis is the §3.2 shape-code table (status `A`); none of the nine is among the §3.1 founding rulings R1–R6 (which cover only OCS/OCL/OCU/OCR/CHN/CFS).

**Namespace completeness (verified).** All 29 `sec_codes.csv` rows now have exactly one founding record: 2 from batch 1 (`OCL`, `SBR`), 7 from batch 2 (`OCS`/`HSS`/`BAR`/`ZEE` `SUPERCLASS`; `CFS`/`PIP`/`TUB` `REJECTED`), 11 from batch 3 (superclass members + `CHN`), and these 9 standalone shapes. **The `SEC:` namespace is complete.** Cross-checked: every non-`ACTIVE` code in Category B is now on record (the 9 `SEC:` non-active rows + ASM `DCK`), so all remaining Category-B codes are `ACTIVE` codes in `ROL:`/`ASM:`/`FAM:`/`CFG:`.

**Effect on coverage.** Category B seeded: **34 of 86** (`SEC:` **29 of 29**, complete). N5-state coverage is unchanged — four of five (`ACTIVE`, `RESERVED`, `SUPERCLASS`, `REJECTED`); batch 4 adds only `ACTIVE` codes. `DEPRECATED` remains structurally absent (requires a later successor-bearing decision, §5).

**Scope discipline (verified).** No status transition undefined in §5; no publication-flag / shadow-"terminal status" framing; each record matches its CSV row exactly (incl. `IWF`'s `AISC W/HP/M; EN HE/IPE; UB/UC; GB/T HW/HM/HN; JIS H` mapping). No new record types, GSID/component/assembly records, snapshot cut, `[Proposed]` adoption, or governance/architecture/standards/Explorer/Bootstrap-Plan change. No performance/capacity/safety/compliance value.

**Files.**
- **Created (9):** `registry/dictionary/{SEC-IWF,SEC-ITF,SEC-ANG,SEC-TEE,SEC-PLT,SEC-OMG,SEC-SGM,SEC-STB,SEC-BXB}.md`
- **Modified (3):** `registry/dictionary/README.md`, `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry).

**Status left:** uncommitted, pending review.

---

## 2026-07-12 — Dictionary founding records, batch 3 (superclass member codes)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

**Objective.** Populate the member codes under the four existing `SEC:` `SUPERCLASS` records — the leaf shapes each rollup declares — plus the standalone hot-rolled channel `SEC:CHN`, under the corrected assigned-status semantics.

**Records created (11), each a verbatim, sourced restatement of its `dictionaries/sec_codes.csv` row:**

| Record | Identifier | Parent superclass | status @ SNAP-1.0.0 | Basis |
|---|---|---|---|---|
| `SEC-OCU.md` | `SEC:OCU` | `SEC:OCS` | `ACTIVE` | Ruling R2 (§3.1) |
| `SEC-OCR.md` | `SEC:OCR` | `SEC:OCS` | `ACTIVE` | Ruling R4 (§3.1) |
| `SEC-CHN.md` | `SEC:CHN` | — (standalone) | `ACTIVE` | Ruling R5 (§3.1) |
| `SEC-RHS.md` | `SEC:RHS` | `SEC:HSS` | `ACTIVE` | §3.2 table (A) |
| `SEC-SHS.md` | `SEC:SHS` | `SEC:HSS` | `ACTIVE` | §3.2 table (A) |
| `SEC-CHS.md` | `SEC:CHS` | `SEC:HSS` | `ACTIVE` | §3.2 table (A) |
| `SEC-RBR.md` | `SEC:RBR` | `SEC:BAR` | `ACTIVE` | §3.2 table (A) |
| `SEC-FBR.md` | `SEC:FBR` | `SEC:BAR` | `ACTIVE` | §3.2 table (A) |
| `SEC-HBR.md` | `SEC:HBR` | `SEC:BAR` | `RESERVED` (parked) | §3.2 table (R) |
| `SEC-ZLP.md` | `SEC:ZLP` | `SEC:ZEE` | `ACTIVE` | §3.2 table (A) |
| `SEC-ZUN.md` | `SEC:ZUN` | `SEC:ZEE` | `ACTIVE` | §3.2 table (A) |

**Decision (the authorizing decision these records cite).** Acting under the bootstrap clause, the eleven codes are seeded under the assigned-status semantics: the ten activation-bound codes carry `RESERVED` at the current (R0) lineage point on a single `RESERVED → ACTIVE` trajectory the `SNAP-1.0.0` cut completes (§5/§8); `SEC:HBR` is born parked-`RESERVED` (the SBR/HBR precedent, §5) and holds it. Citation basis is grounded per code: `OCU`/`OCR`/`CHN` carry explicit founding rulings (R2/R4/R5, GSID Standard §3.1); the eight hollow/bar/Z leaves are §3.2 shape-code-table designations (status `A`, or `R` for `HBR`). `SEC:CHN` is recorded as a **standalone** active code, not a member of the `SEC:OCS` folded rollup — Ruling R5 adopts it as a distinct hot-rolled family with a different canonical parameter schema.

**Parent–child consistency (verified).** Each child names its parent rollup in §5, and every member list the four `SUPERCLASS` records declared in batch 2 is now fully seeded: `SEC:OCS`→{OCL, OCU, OCR}, `SEC:HSS`→{RHS, SHS, CHS}, `SEC:BAR`→{RBR, FBR, SBR, HBR}, `SEC:ZEE`→{ZLP, ZUN}. No orphan child; no member declared-but-missing. Adversarial verification surfaced that two **batch-1** members — `SEC:OCL` and `SEC:SBR` — lacked the reciprocal §5 superclass bullet the batch-3 siblings carry (their parents declared them, but they did not name their parent); both were given the back-reference, making parent↔child linkage uniform and bidirectional across the entire `SEC:` rollup structure. This was an additive §5 cross-reference only — no `status`, provenance, or CSV value changed on either record.

**Effect on coverage.** Category B seeded: **25 of 86** (`SEC:` 20 of 29). N5-state coverage is unchanged — four of five (`ACTIVE`, `RESERVED`, `SUPERCLASS`, `REJECTED`); batch 3 deepens `ACTIVE` (+10) and parked-`RESERVED` (+1, `HBR`). `DEPRECATED` remains structurally absent (requires a later successor-bearing decision, §5).

**Scope discipline (verified).** No status transition undefined in §5; no publication-flag / shadow-"terminal status" framing; each record matches its CSV row exactly (incl. `CHN`'s `AS/NZS PFC` mapping and the `WELDED` form class on the hollow codes). No new record types, GSID/component/assembly records, snapshot cut, `[Proposed]` adoption, or governance/architecture/standards/Explorer/Bootstrap-Plan change. No performance/capacity/safety/compliance value.

**Files.**
- **Created (11):** `registry/dictionary/{SEC-OCU,SEC-OCR,SEC-CHN,SEC-RHS,SEC-SHS,SEC-CHS,SEC-RBR,SEC-FBR,SEC-HBR,SEC-ZLP,SEC-ZUN}.md`
- **Modified (5):** `registry/dictionary/README.md`, `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry); and `registry/dictionary/{SEC-OCL,SEC-SBR}.md` — added the reciprocal §5 superclass back-reference (see Parent–child consistency).

**Status left:** uncommitted, pending review.

---

## 2026-07-11 — Dictionary founding records, batch 2 (SUPERCLASS + REJECTED)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

**Objective.** Exercise the registry status model across its two born-in-terminal-state statuses (`SUPERCLASS`, `REJECTED`) — the states not yet in records after batch 1 — by seeding the non-activation-bound dictionary codes (five `SUPERCLASS` rollups, three `REJECTED` burned strings) under the assigned-status semantics settled in the prior status-semantics correction.

**Records created (8), each a verbatim, sourced restatement of its `dictionaries/*.csv` row:**

| Record | Identifier | Born status | Source CSV |
|---|---|---|---|
| `SEC-OCS.md` | `SEC:OCS` | `SUPERCLASS` | sec_codes.csv |
| `SEC-HSS.md` | `SEC:HSS` | `SUPERCLASS` | sec_codes.csv |
| `SEC-BAR.md` | `SEC:BAR` | `SUPERCLASS` | sec_codes.csv |
| `SEC-ZEE.md` | `SEC:ZEE` | `SUPERCLASS` | sec_codes.csv |
| `ASM-DCK.md` | `ASM:DCK` | `SUPERCLASS` | asm_codes.csv |
| `SEC-CFS.md` | `SEC:CFS` | `REJECTED` | sec_codes.csv |
| `SEC-PIP.md` | `SEC:PIP` | `REJECTED` | sec_codes.csv |
| `SEC-TUB.md` | `SEC:TUB` | `REJECTED` | sec_codes.csv |

**Decision (the authorizing decision these records cite).** Acting under the bootstrap clause, the eight codes are recorded **born in their assigned state** — `SUPERCLASS` or `REJECTED` — directly, matching their governing CSV `status` at every lineage point. This is the assigned-status model applied to non-activation-bound codes: [Registry Architecture §8](SECTIONHUB_REGISTRY_ARCHITECTURE.md) gates only the `RESERVED → ACTIVE` transition, which does not apply to these codes; §5 gives no `RESERVED → SUPERCLASS` or `RESERVED → REJECTED` transition, so they never pass through `RESERVED`. `REJECTED` records carry **no activation language** — a burned string never activates and is never reused (N7, RA-2). `SEC:OCS` etc. cite their founding rulings (the OCS demotion and family rollups, standard Part 3.1); their rollup role was assigned pre-registry, so no in-registry `ACTIVE → SUPERCLASS` transition occurs.

**Effect on coverage.** Four of the five N5 states now appear in records: `ACTIVE` (batch 1 @ `SNAP-1.0.0`), `RESERVED` (pending-activation and parked; batch 1), and `SUPERCLASS` + `REJECTED` (batch 2). The fifth, `DEPRECATED`, has **no** founding record — deprecation requires a later successor-bearing decision ([Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §5) — so full N5 coverage is not attainable from the founding cohort. Category B seeded: 14 of 86.

**Scope discipline (verified).** No status transition undefined in §5 introduced; no publication-flag / shadow-"terminal status" framing; no activation language on `REJECTED` records; each record matches its CSV row exactly (incl. the empty `name` on `CFS`/`PIP`/`TUB` and `PIP`'s `successor=CHS`). No new record types, GSID/component/assembly records, snapshot cut, `[Proposed]` adoption, or governance/architecture/standards/Explorer/Bootstrap-Plan change. No performance/capacity/safety/compliance value.

**Files.**
- **Created (8):** `registry/dictionary/{SEC-OCS,SEC-HSS,SEC-BAR,SEC-ZEE,ASM-DCK,SEC-CFS,SEC-PIP,SEC-TUB}.md`
- **Modified (3):** `registry/dictionary/README.md`, `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry).

**Status left:** uncommitted, pending review.

---

## 2026-07-11 — Status-semantics framing correction (doctrine alignment)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: interpretation of existing architecture under the bootstrap clause (GOVERNANCE §2); **no new architecture, governance, or doctrine document created.**

**Objective.** Correct the framing of `status` across the Batch-1 records and the registry READMEs so the repository consistently treats `status` as the **assigned registry state at the current lineage point**, not a temporary pre-snapshot publication flag. Prompted by this session's status-semantics doctrine review.

**Decision.** `status` = the record's **assigned registry state** ([Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §5). `RESERVED` is a substantive assigned state; because §8 gates `ACTIVE` to a snapshot release and §5 says "a record exists only from RESERVED onward," an activation-bound code's assigned state before its activating snapshot **is** `RESERVED` (→ `ACTIVE` at `SNAP-1.0.0` via the §5/§8 release transition). `SUPERCLASS`/`REJECTED` codes are **born in their assigned state**, not routed through `RESERVED` (§8 gates only `RESERVED → ACTIVE`).

**Effect — framing only, no values changed.** No frontmatter `status` value was altered (all six Batch-1 dictionary records remain `RESERVED`; the five prefixed namespace records and Domain remain `RESERVED`). The edits: (1) reframed each activation-bound record's Lifecycle block as one `status` field on a single `RESERVED → ACTIVE` trajectory read at two lineage points, and removed the competing "Recorded terminal status" field; (2) distinguished `SEC:SBR`'s **parked** `RESERVED` from the pending-activation `RESERVED`; (3) rewrote the `registry/dictionary/README.md` deferral of `SUPERCLASS`/`REJECTED` as a sequencing choice (born-in-assigned-state), not a doctrine blocker, and clarified §8 gates `RESERVED → ACTIVE` only; (4) removed the unsupported "(N5)" status-*authority* citation from the six namespace records (whether N5 governs namespaces is left open, not invented); (5) corrected `registry/README.md`'s "every record is `RESERVED`" over-generalization.

**Risk avoided.** A shadow "terminal status" model in which `status` means "published?" while the real state lives in a second field — which diverges from the governed CSV, cannot be machine-checked against the dictionary, and would force a mass status rewrite at every snapshot.

**Scope discipline.** No records created; no `status` values changed; no architecture, governance, standards, or Explorer files modified — only registry records, registry READMEs, this log, and CHANGELOG.

**Follow-up (not done here).** The Bootstrap Plan's language ("items 1–3 land `RESERVED` … activate together"; "SUPERCLASS/RESERVED/REJECTED rows … activated at the snapshot"; "activating everything") over-generalizes activation and conflicts with §5 ("such rows never activate"). An erratum aligning it with §5 / First 100 §9 **may be proposed separately**; it is not applied in this pass.

**Status left:** uncommitted, pending review.

---

## 2026-07-11 — Dictionary founding records, batch 1 (6 codes reserved)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

### Actions

Seeded **batch 1 of the Category-B dictionary code records** ([registry/dictionary/](../registry/dictionary/)) — 6 representative records, one code per namespace plus one `RESERVED`-parked SEC code, each a verbatim, sourced restatement of its `dictionaries/*.csv` row:

| Record | Identifier | Recorded terminal status | Source CSV |
|---|---|---|---|
| `SEC-OCL.md` | `SEC:OCL` | `ACTIVE` | sec_codes.csv |
| `SEC-SBR.md` | `SEC:SBR` | `RESERVED` (parked) | sec_codes.csv |
| `ROL-COL.md` | `ROL:COL` | `ACTIVE` | rol_codes.csv |
| `ASM-WDK.md` | `ASM:WDK` | `ACTIVE` | asm_codes.csv |
| `FAM-SPR.md` | `FAM:SPR` | `ACTIVE` | fam_codes.csv |
| `CFG-DIM.md` | `CFG:DIM` | `ACTIVE` | cfg_groups.csv |

Updated [registry/dictionary/README.md](../registry/dictionary/README.md) to reflect partial population (6 of 86).

### Decision (the authorizing decision these records cite)

Acting under the bootstrap clause, the six dictionary code records are **reserved** (current status `RESERVED`, N5) as part of the substrate of `SNAP-1.0.0`. `RESERVED` is the correct pre-cut status: no snapshot has been cut, and nothing activates between snapshots ([Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §8). Each record documents its **recorded terminal status** from the governing CSV — the status the `SNAP-1.0.0` cut will confer (`ACTIVE` for the five active-destined codes; `RESERVED`-parked for `SEC:SBR`, which never activates). No record is activated by its creation.

**Scope of this batch (deliberately narrow):**

- **One record per code**; exact provenance restated from each CSV's *actual* columns (SEC: `form_class`/`maps_from`/`successor`; FAM: `domain`/`industry_anchor`; CFG: `example_fields`; ROL/ASM: `definition`/`successor`).
- **All-`RESERVED`.** The batch includes only codes whose *current* pre-cut status is unambiguously `RESERVED` — the active-destined codes and the parked `SEC:SBR`.
- **`SUPERCLASS` and `REJECTED` codes deferred.** For a `SUPERCLASS` rollup or a `REJECTED` burned string, a current status of `RESERVED` ("allocated, pending activation") is semantically wrong; they should be born in their terminal status. That born-in-terminal-status reading (First 100 Records Plan §8–§9) is flagged in [registry/dictionary/README.md](../registry/dictionary/README.md) and held for a later batch, to be confirmed before those records are created.

This batch does **not** ratify the full dictionaries, cut any snapshot, activate any record, adopt any `[Proposed]` mechanism, or create any GSID / component / assembly record.

### Scope discipline (verified)

- No performance, capacity, safety, or compliance value introduced.
- No dictionary CSV, standard, Explorer, or governance document modified; no new namespace, code, rule, lifecycle state, or governance body created.
- Records match their `dictionaries/*.csv` rows exactly.

### Files

- **Created (6):** `registry/dictionary/{SEC-OCL,SEC-SBR,ROL-COL,ASM-WDK,FAM-SPR,CFG-DIM}.md`
- **Modified (3):** `registry/dictionary/README.md`, `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry).

**Status left:** uncommitted, pending review.

---

## 2026-07-11 — Registry artifacts stood up; six namespace founding records reserved

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause — the founding maintainer acts as Technical Committee and Registry Operator (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

### Actions

1. Created the founding record format [docs/FOUNDING_RECORD_TEMPLATE.md](FOUNDING_RECORD_TEMPLATE.md) — the minimal fill-in form instantiating the [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §4.1 public record format (seven blocks: identity, meaning, lifecycle, provenance, relationships, reproducibility, disclaimer). No new architecture or governance doctrine — it is the executable form of an already-specified record format.
2. Created the registry directory structure `registry/{namespace,status,dictionary,gsid,component,assembly}/`, each with a README stating its record type, source category ([First 100 Records Plan](FIRST_100_RECORDS_PLAN.md) §1), owner (Registry Operator only — GOVERNANCE §8), and population gate. [registry/README.md](../registry/README.md) records that this per-record-type layout **refines** repository-structure.md's `registry/` sketch to record granularity (the export/`snapshots/` views remain that document's tabular half) and introduces no new registry architecture.
3. **Reserved the six namespace founding records** (Category A) under [registry/namespace/](../registry/namespace/): the `SEC:`, `FAM:`, `ASM:`, `ROL:`, `CFG:` namespaces and the bare **Domain** namespace. Each is a verbatim, sourced restatement of its row in [dictionaries/namespaces.csv](../dictionaries/namespaces.csv).

### Decision (the authorizing decision these records cite)

Acting under the bootstrap clause, the six namespace records are hereby **reserved** (status `RESERVED`, N5) as the substrate of `SNAP-1.0.0`. `RESERVED` is the correct pre-cut status: no snapshot has been cut, and nothing activates between snapshots ([Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §8). Activation to `ACTIVE` occurs only at the `SNAP-1.0.0` cut ([First 100 Records Plan](FIRST_100_RECORDS_PLAN.md) §9), pending its readiness checklist (§10).

This decision **reserves the namespace layer only** — the least-gated, zero-permission part of the cohort (First 100 Records Plan §5). It explicitly does **not**:

- ratify the full seed dictionaries (Categories A + B together),
- cut any snapshot,
- adopt the `[Proposed]` Registry Architecture §5 object-record lifecycle (still an open gate — First 100 Records Plan §6 item 6),
- resolve the demo aliases, publish canonicalization rules, seed configuration templates, or finalize the `LICENSE`.

Those remain open gates in the First 100 Records Plan §6 / §10 checklist.

### Scope discipline (verified)

- No performance, capacity, safety, or compliance value introduced in any artifact (Registry Architecture invariant 8; the permanent zero).
- No Explorer, dictionary CSV, or standard document modified.
- No new namespace, code, rule, lifecycle state, or governance body created; namespace records match `dictionaries/namespaces.csv` exactly (six rows: Domain, `SEC:`, `FAM:`, `ASM:`, `ROL:`, `CFG:`).
- The `[Proposed]` provenance-grade scheme is deliberately not applied (First 100 Records Plan §6).

### Files

- **Created:** `docs/FOUNDING_RECORD_TEMPLATE.md`, `docs/ENGINEERING_LOG.md` (this file); `registry/README.md`; `registry/{namespace,status,dictionary,gsid,component,assembly}/README.md` (6); `registry/namespace/{DOMAIN,SEC,FAM,ASM,ROL,CFG}.md` (6).
- **Modified:** `CHANGELOG.md`, `README.md` (contents/status index); `docs/FIRST_100_RECORDS_PLAN.md` (in-passing erratum — see below).

### In-passing correction (Evidence custodian)

Adversarial verification of the founding cohort surfaced a pre-existing off-by-one in [FIRST_100_RECORDS_PLAN.md](FIRST_100_RECORDS_PLAN.md): the ASM superclass `DCK` (deck rollup, `asm_codes.csv`) was omitted from the activation tallies. Corrected the enumerations — **4 → 5** `SUPERCLASS`, **≈99 → ≈98** activating at the cut, **~83 → ~82** of the A+B set, and **9 → 10** non-`ACTIVE` dictionary rows (9 `SEC` + ASM `DCK`). No cohort total changes (108 registered is unaffected — `DCK`'s record was always counted; only its *status* was mis-tallied). A documentation erratum, not a governance change.

**Status left:** uncommitted, pending review.
