# Canonicalization Rules v1 — Normative Package

**Document:** SectionHub Canonicalization Rules **v1** — the deterministic procedure that turns a resolved 2D section's canonical parameter vector into a reproducible CanonicalGeometryID (CGID).
**Status:** DRAFT normative rule package, 2026-07-12. Realizes the canonicalization rules that [GSID Standard §4.3–§4.4](../../GSID_2D_Standard.md) *references but does not itself publish*. It **adds no architecture and redefines nothing**: it is the published `v1` instance of the derivation the GSID Standard already defines. Rules major version = **1** → derived CGIDs carry the `CG1-` prefix.

> **Provenance and boundary.** This package is authored to satisfy exactly one existing prerequisite: [First 100 Records Plan §6 item 1 / §8 step 1](../../../docs/FIRST_100_RECORDS_PLAN.md) and the gate stated in [registry/gsid/README.md](../../../registry/gsid/README.md) — *"Canonicalization rules v1 + per-shape parameter schemas published … without them no CGID is honest."* It does not modify the GSID Standard, the Registry Architecture, governance, dictionaries, the Explorer, or any registry record.

---

## 1. Scope

Canonicalization Rules v1 exists **only** to support **deterministic CGID computation for the founding GSID proof cohort** (First 100 Records Plan Category D — the eight flagship worked-example sections). Its sole function is: given a section that has already been classified to a `SEC:` shape code and measured to that shape's canonical parameters, produce **one reproducible normalized byte string** and, from it, one CGID that any independent party can recompute from published files alone (P9).

This package **does not** define, imply, or attach to: product identity, component identity, assembly identity, manufacturer identity, SKU or part-number identity, load capacity, structural performance, test results, certification, or regulatory compliance. Those boundaries are the GSID Standard's (P2; boundary anti-patterns AP-1/AP-3/AP-4) and are **out of scope here by construction** — v1 serializes intrinsic cross-section dimensions and nothing else.

v1 is deliberately **minimal**: it covers exactly the seven shape schemas the Category D cohort needs (§9) and nothing more. Shapes, features, and equivalence questions outside that set are **explicitly excluded** (§10), not guessed.

### 1.1 What v1 canonicalizes — the one foundational choice

Per [GSID Standard §4.3](../../GSID_2D_Standard.md), a CanonicalGeometry is the record `{shape_code, canonicalization_rules_version, normalized parameter vector}`. v1 takes this literally: **the object canonicalized is an intrinsic scalar parameter vector, not a coordinate geometry (not a polygon, point list, or CAD outline).** Every v1 parameter is an intrinsic dimension of the cross-section (a web depth, a flange width, a wall thickness, a diameter) — a magnitude, not a coordinate.

This single choice is what makes v1 honest and fully deterministic: because no coordinates are ever serialized, there is **no orientation, rotation, translation, point-ordering, or CAD-tessellation ambiguity to resolve** (§5, §6). The only ordering discipline v1 needs is a fixed parameter order (§3) and, for shapes with interchangeable like-dimensions, one canonical ordering rule (§3.2). This is a v1 scoping decision, disclosed as such; a future major version MAY canonicalize coordinate geometry, which is why this is `v1` and the CGID carries its rules version.

---

## 2. Units

- **Canonical unit: millimetre (mm).** All v1 parameters are lengths expressed in millimetres. The GSID Standard §4.3 already names mm as the canonical unit; v1 adopts it as normative with no exception (none of the seven cohort shapes requires angular or other-unit parameters — flange taper and fillet radii, the features that would introduce angle/radius units, are excluded in v1, §10).
- Input in any other unit **SHALL** be converted to millimetres **before** numeric normalization (§4). The conversion is the producer's responsibility and is not itself part of the hashed record.
- Units are **not** written into the serialized record as a token (§7); the record is millimetres by definition of `CANON-V1`. This keeps the byte string minimal and removes unit-spelling ambiguity ("mm" vs "MM" vs "millimeter").

---

## 3. Parameter ordering

### 3.1 Global rule

Every shape's canonical parameters are serialized in the **exact fixed order declared by that shape's schema** ([schemas/](schemas/), §9). The order is a normative property of each schema and never varies by producer, tool, or input order. A reader obtains the order from the schema file, not by inference.

The global convention the schemas follow (stated here for auditability, binding only as expressed in each schema): **outermost envelope dimensions first, in descending structural significance, then wall/material thickness last.** For example a folded C lists `web_depth, flange_width, [lip_length,] thickness`.

### 3.2 Canonical ordering of interchangeable like-dimensions

Where a schema contains two parameters of the same kind that a section does not intrinsically distinguish (e.g., the two legs of an angle), v1 fixes their order **descending (largest first)**, ties broken by the schema's declared order. This collapses the leg-swap / mirror ambiguity deterministically (§6). For the Category D cohort this affects only `ANG`, and its sole cohort instance is equal-leg (38 = 38), so the rule is exercised but not load-bearing for the cohort — it is stated so the schema is correct for unequal legs too, without expanding scope.

---

## 4. Numeric normalization

Two precision classes, applied per parameter as its schema declares. Each parameter is **rounded to its class step**, then **formatted with its class's fixed number of fractional digits** at serialization (§7). Rounding uses **round-half-up** on the absolute value (all v1 parameters are positive).

| Class | Applies to | Rounding step | Serialized fractional digits |
|---|---|---|---|
| **E** (envelope) | overall envelope dimensions, lengths, diameters | 0.1 mm | 1 |
| **T** (thickness) | wall / material thickness | 0.05 mm | 2 |

- These are the **actual v1 rule**, not merely illustrative. GSID Standard §4.3 offers "e.g., 0.05 mm for thickness and 0.1 mm for envelope dimensions" as an *illustrative* example; v1 **adopts those two steps as normative** and assigns each schema parameter to class E or T explicitly. The distinction the task requires is thus: *§4.3 = illustrative example; this table = the published v1 rule.*
- Rounding exists solely to make measurement/tolerance noise reproducible (D-2 collapse; anti-pattern AP-11). It is deliberately coarse-grained-minimal: two classes, two steps. v1 does **not** define per-shape or per-parameter bespoke tolerances — that would overfit future cases.
- The class step and the serialized fractional-digit count are paired so the byte string is exact: a class-T value of `1.9` rounds to `1.90` and serializes as `1.90`; a class-E value of `76.2` serializes as `76.2`. There is exactly one serialized form per rounded value.

---

## 5. Orientation normalization

**Not applicable in v1 — by construction, not by omission.** Because v1 serializes an intrinsic scalar parameter vector and never a coordinate geometry (§1.1), there is no drawing frame, no axis assignment, and no rotation to normalize. A section measured "web vertical" and the same section measured "web horizontal" yield the **same parameter values** and therefore the same record.

The only residual question — *which measured dimension is the web vs the flange vs the thickness* — is a **classification/measurement** determination fixed by the shape schema's parameter definitions and the GSID Standard's shape-resolution decision tree ([GSID Standard Annex A](../../GSID_2D_Standard.md)), executed **before** canonicalization. It is deterministic there and is not re-litigated here. v1 introduces **no** visual, CAD, or drawing-orientation rule, and therefore no CAD ambiguity.

---

## 6. Equivalent transforms

Stated conservatively for v1's parameter-vector model. A transform is "identity-preserving" iff it leaves the serialized record byte-identical.

| Transform | v1 treatment | Why |
|---|---|---|
| **Translation** | Identity-preserving (N/A) | No coordinates are serialized; position is never part of the record. |
| **Rotation** | Identity-preserving (N/A) | Parameters are orientation-independent magnitudes (§1.1, §5). |
| **Mirroring (reflection)** | **Identity-preserving** | For all seven cohort schemas the parameters are mirror-invariant scalars (web depth, flange width, lip length, thickness, diameter, leg lengths). A left-opening and right-opening C share one v1 CGID. Conservative and correct for these symmetric schemas. |
| **Point / vertex reordering** | Identity-preserving (N/A) | v1 has no point list; only the fixed parameter order applies (§3), which is not producer-variable. |
| **Like-dimension swap** (e.g., angle legs) | Collapsed by the descending-order rule (§3.2) | Deterministic canonical order removes the swap degree of freedom. |

v1 makes **no** claim about equivalences beyond these — in particular it does **not** assert that two sections differing only within some tolerance band are equivalent except exactly as the §4 rounding steps collapse them. Toleranced equivalence beyond §4 rounding is **excluded** (§10).

---

## 7. Serialization — the normalized record (mandatory, byte-exact)

The **normalized record** is the exact byte string that is hashed (§8). It is produced deterministically from `{rules tag, shape code, ordered parameter values}` as follows. This section is normative to the byte.

### 7.1 Grammar

```
record   := rules_tag "|" shape_code "|" params
rules_tag := "CANON-V1"                      ; literal ASCII, fixed
shape_code := "SEC:" 3*UPALPHA               ; the resolved dictionary code, e.g. SEC:OCL
params   := value *( ";" value )             ; in the schema's fixed order (§3)
value    := 1*DIGIT "." 1*DIGIT              ; decimal, per §7.2
```

### 7.2 Exact lexical rules

1. **Encoding:** UTF-8, no byte-order mark. (All bytes are in fact ASCII; UTF-8 is specified so non-ASCII input is impossible, not merely discouraged.)
2. **Field separator:** a single U+007C `|` between the three top-level fields. **Parameter separator:** a single U+003B `;` between successive parameter values. No separator precedes the first parameter or follows the last.
3. **Case sensitivity:** the whole record is **case-sensitive**. `rules_tag` is upper-case `CANON-V1`; `shape_code` is the upper-case dictionary code including the `SEC:` prefix (the colon U+003A appears **only** inside the shape code and is never a separator).
4. **Whitespace:** **none.** No spaces, tabs, or padding anywhere — not around separators, not within values. A producer that emits whitespace has produced a different (invalid) record.
5. **Decimal formatting:** each value is a non-negative decimal using ASCII digits `0-9` and exactly one `.` (U+002E) as the decimal point. It carries **exactly the fractional-digit count of its precision class** (§4: class E → 1 digit, class T → 2 digits) — no more, no fewer. Integer part has **no leading zeros** except a single `0` when the integer part is zero; there is **no** sign, **no** thousands separator, **no** exponent, **no** unit suffix.
6. **Newline convention:** the record contains **no** internal newline and **no** trailing newline. The hashed bytes are exactly the record; any trailing `\n` a text editor or shell adds **must be stripped** before hashing. (Negative control: adding one `\n` changes the SHA-256 completely — see §8.2.)

### 7.3 Worked serialization examples (cohort parameter values)

Each Category D shape produces exactly one string. These are the **inputs** the Category D task will hash; they are shown here to prove schema coverage (their CGIDs are **not** computed in this package — §11):

| Shape | Canonical params (mm) | Normalized record (byte-exact) |
|---|---|---|
| `SEC:OCL` | 76.2, 41.3, 12.7, 1.90 | `CANON-V1\|SEC:OCL\|76.2;41.3;12.7;1.90` |
| `SEC:OCU` | 32.0, 25.0, 1.50 | `CANON-V1\|SEC:OCU\|32.0;25.0;1.50` |
| `SEC:OCU` | 40.0, 40.0, 1.50 | `CANON-V1\|SEC:OCU\|40.0;40.0;1.50` |
| `SEC:RBR` | 4.0 | `CANON-V1\|SEC:RBR\|4.0` |
| `SEC:PLT` | 152.0, 6.40 | `CANON-V1\|SEC:PLT\|152.0;6.40` |
| `SEC:ANG` | 38.0, 38.0, 2.70 | `CANON-V1\|SEC:ANG\|38.0;38.0;2.70` |
| `SEC:FBR` | 25.0, 3.00 | `CANON-V1\|SEC:FBR\|25.0;3.00` |
| `SEC:SHS` | 76.0, 3.20 | `CANON-V1\|SEC:SHS\|76.0;3.20` |

(The `\|` above is Markdown table escaping; the literal separator byte is a single `|`.)

The two `SEC:OCU` rows are the same schema with different parameter values → different records → different CGIDs. This is the D-2 "same schema, different values = new CGID" behaviour, demonstrated within the cohort.

---

## 8. Hash procedure — CGID derivation

### 8.1 Procedure (deterministic, public)

Given a normalized record string `S` (§7):

1. Take the **UTF-8 bytes of `S`**, with no trailing newline (§7.2 rule 6).
2. Compute **`H = SHA-256(bytes)`**.
3. Take the **first 12 hexadecimal characters** of `H` (i.e. the first 6 bytes, most-significant first), rendered in **UPPER-CASE** hex.
4. The CanonicalGeometryID is **`CG1-` + those 12 hex characters** — e.g. `CG1-8424749059A5`. The `CG1` reflects canonicalization rules **major** version 1 ([GSID Standard §4.3](../../GSID_2D_Standard.md) format `CG<rulesMajor>-<12-hex>`).

The 12-hex (48-bit) prefix follows the GSID Standard's stated CGID format. Collision handling at registry issuance (the astronomically unlikely event of two distinct records sharing a 48-bit prefix) is a **registry-issuance** concern governed by GSID Standard §4.4 / the GS- allocation procedure, **not** a canonicalization concern, and is out of scope here.

### 8.2 Verified reference test vector (reproducibility proof)

A **reference geometry that is deliberately NOT a cohort member** (a synthetic `SEC:OCU` 100.0 × 50.0 × 2.00), so this vector pins the pipeline without pre-minting any Category D CGID:

- Normalized record: `CANON-V1|SEC:OCU|100.0;50.0;2.00`  (32 bytes, no trailing newline)
- `SHA-256` = `8424749059a57baae307e7180931f13bc84b965d41ef0dc38e28518104cc5288`
- **CGID = `CG1-8424749059A5`**

Reproduce it with any SHA-256 tool, e.g.:

```
printf '%s' 'CANON-V1|SEC:OCU|100.0;50.0;2.00' | sha256sum
# → 8424749059a5...  ; take first 12 hex, upper-case → CG1-8424749059A5
```

**Negative control (determinism check):** the same string **with** a trailing newline hashes to `204a25cf8104…` — a completely different digest. This is why §7.2 rule 6 (no trailing newline) is normative, not stylistic.

---

## 9. Per-shape schemas

The canonical parameter schema for each Category D shape is published as one file under [schemas/](schemas/). Each schema declares: the `SEC:` shape code and its dictionary relationship, the required parameters, their fixed order, each parameter's unit and precision class (§4), any already-justified numeric domain, the excluded fields, and the shape's exact serialization contribution (§7).

| Schema | Shape | Cohort instance(s) | Params (order) |
|---|---|---|---|
| [OCL](schemas/OCL.md) | Open C, lipped | rack upright 76.2×41.3×12.7×1.9 | web_depth, flange_width, lip_length, thickness |
| [OCU](schemas/OCU.md) | Open C, unlipped | deck-support channel 32×25×1.5; frame brace 40×40×1.5 | web_depth, flange_width, thickness |
| [RBR](schemas/RBR.md) | Round bar / rod / wire | mesh wire stock ⌀4.0 | diameter |
| [PLT](schemas/PLT.md) | Plate / flat | base plate 152×6.4 | width, thickness |
| [ANG](schemas/ANG.md) | Angle | shelving post 38×38×2.7 | leg_1, leg_2, thickness |
| [FBR](schemas/FBR.md) | Flat bar | sway strap 25×3 | width, thickness |
| [SHS](schemas/SHS.md) | Square hollow | platform column 76×76×3.2 | outer_size, thickness |

Seven schemas cover the eight cohort records (OCU covers two). **No schema is published for any shape not in the Category D cohort** — that is the §10 exclusion, not an oversight.

---

## 10. Explicit exclusions — what v1 does NOT support

v1 is a minimal founding package. It explicitly does **not** define, and no CGID computed under it represents, any of the following. Each is deferred to a future rules major version through governance, or is a permanent boundary:

**Geometry-model exclusions (future rules-version candidates):**
- **Fillet, bend, and corner radii; flange taper/slope; root radii.** v1 canonicalizes the **idealized sharp-corner prismatic outline** described by the enumerated parameters. Two sections that differ *only* in corner radius or flange taper collapse to one v1 CGID. This is disclosed, deliberate, and the single simplification shared by the folded and hollow shapes; the worked examples carry no radius values, so v1 does not invent any.
- **Coordinate / polygon / CAD geometry** (arbitrary CAD imports, tessellated outlines, spline or curved profiles beyond the specified parametric shapes).
- **Any shape code not listed in §9** — including every other `SEC:` code (`OCR`, `CHN`, `IWF`, `ITF`, `TEE`, `RHS`, `CHS`, `ZLP`, `ZUN`, `OMG`, `SGM`, `STB`, `BXB`, `CHS`-family, etc.). They receive schemas only when a cohort or import needs them.
- **Toleranced equivalence beyond the §4 rounding steps** — no tolerance-band, no "within X%" merging.
- **Along-length features** (holes, slots, notches, welds, embossing) — these are never geometry (GSID Standard G-3); they belong to `CFG:` configuration, not to any CGID.

**Permanent boundaries (never in any canonicalization version):**
- Material identity, grade, coating, or finish.
- Product, component, assembly, manufacturer, SKU, or part-number identity.
- Load capacity, structural performance, or any engineering-property value.
- Test results, certification, or regulatory-compliance claims.

---

## 11. Category D readiness statement

**After this package is published, can the Category D GSID proof records be authored honestly? — YES, for the canonicalization dependency.** Every one of the eight cohort geometries resolves to a fixed `SEC:` schema (§9), a byte-exact normalized record (§7.3), and a CGID recomputable by any independent party from these published files alone (§8). The blocker that [registry/gsid/README.md](../../../registry/gsid/README.md) named — *"without them no CGID is honest"* — is **cleared**. Canonicalization is no longer a Category D blocker.

**What remains required before the eight GSID records are authored (none of it canonicalization work):**

1. **Compute the eight CGIDs** by applying §8 to the eight records in §7.3 — deferred to the Category D task by design (this package defines and verifies the procedure but does not mint the production CGIDs).
2. **Fix the deterministic GS- serial-issuance order** for the eight, so serials `GS-000001…GS-000008` are assigned reproducibly (First 100 Records Plan §4 reconciliation: real serials, not the illustrative `GS-004217`-style placeholders). This is a Category D authoring decision, not a canonicalization rule.
3. **Object-record lifecycle handling.** GSID records use the Registry Architecture §5 object-record states, whose `RESERVED → ACTIVE` transition is still `[Proposed]` (gsid README prerequisite 2; First 100 Records Plan §6 item 6). As with the un-cut `SNAP-1.0.0`, the founding records MAY be authored as `RESERVED` with this dependency **flagged as pending** — exactly as the founding template §3.2 anticipates and the dictionary cohort already does — and activation waits on the adoption decision before the cut. This is a governance/authoring step, not a canonicalization gap.

**Remaining canonicalization blockers: none** for the eight cohort shapes. Any *ninth* shape, or any radius/taper-sensitive distinction, would require a v1 schema addition (minor) or a future rules major version (§10) first.

---

*Related: [GSID Standard §4.3–§4.4](../../GSID_2D_Standard.md) · [Registry Architecture §2, §4.1, §5](../../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [First 100 Records Plan §4, §6, §8](../../../docs/FIRST_100_RECORDS_PLAN.md) · [registry/gsid/README.md](../../../registry/gsid/README.md) · [Founding record template](../../../docs/FOUNDING_RECORD_TEMPLATE.md) · [schemas/](schemas/)*
