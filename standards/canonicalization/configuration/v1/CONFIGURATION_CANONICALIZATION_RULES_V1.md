# Configuration Canonicalization Rules v1 — Normative Package

**Document:** SectionHub Configuration Canonicalization Rules **v1** — the deterministic procedure that turns a Configuration Template's bound identity-bearing field record into a reproducible ConfigurationID (`CF1-…`).
**Status:** DRAFT normative rule package, 2026-07-12. Realizes the serialization/rounding/hashing procedure that [Material Handling Taxonomy Standard §4.7–4.8](../../../Material_Handling_Taxonomy_Standard.md) *names but does not itself publish* ("canonical units, rounding, and field order for hashing" is a template's job per §4.7; §4.8 fixes only the `CF<templateRulesMajor>-<12-hex>` output format). It **adds no architecture and redefines nothing**: it is the published `v1` instance of the derivation the Taxonomy Standard already names, applied to the four Category-C templates. Template rules version = **1** for all four (`ASM-WDK.v1`, `ROL-COL.v1`, `ROL-DKS.v1`, `ROL-MSH.v1`) → every derived ConfigurationID under this package carries the `CF1-` prefix.

> **Provenance and boundary.** This package is authored to satisfy exactly one prerequisite: no `ConfigurationID` byte-serialization/rounding/hashing procedure existed anywhere in the repository — every published Category-C template explicitly deferred it ("a separate published prerequisite — not yet published"), a gap surfaced by a same-session Category E readiness assessment (2026-07-12; conversational, not itself a recorded repository artifact) and independently verifiable directly from the four `templates/*.v1.md` files. It does not modify the Taxonomy Standard, the Registry Architecture, governance, dictionaries, the templates themselves, the Explorer, or any registry record. It does not compute, embed, or register any production `ConfigurationID` — see §12.

---

## 1. Scope

Configuration Canonicalization Rules v1 exists **only** to support **deterministic ConfigurationID computation for the four published founding configuration templates** (`ASM-WDK.v1`, `ROL-COL.v1`, `ROL-DKS.v1`, `ROL-MSH.v1` — First 100 Records Plan Category C). Its sole function is: given one of these templates and a fully bound set of its identity-bearing (IB) field values, produce **one reproducible normalized byte string** and, from it, one `CF1-…` ConfigurationID that any independent party can recompute from published files alone (P9).

This package **does not** define, imply, or attach to: geometry identity (that is [Canonicalization Rules v1](../../v1/CANONICALIZATION_RULES_V1.md) for `CG1-…`, a separate package for a separate identifier), product identity, manufacturer identity, SKU or part-number identity, load capacity, structural performance, test results, certification, or regulatory compliance. Those boundaries are the Taxonomy Standard's and Registry Architecture's (invariant 8; E-104) and are **out of scope here by construction**.

v1 is deliberately **minimal**: it covers exactly the field kinds the four founding templates use (§9) and nothing more. Field kinds, templates, or equivalence questions outside that set are **explicitly excluded** (§11), not guessed.

### 1.1 Relationship to Configuration Templates (Taxonomy Standard §4.7)

A **Configuration Template** (`templates/*.v1.md`) fixes *what* is hashed: which `CFG:` groups apply, which fields exist, which are identity-bearing (IB) vs informative (INF), and — already, per each template's own "Field order for hashing" clause — the field order. This package fixes *how* a bound instance of that field set becomes bytes and then a hash: value-kind serialization (§5–§8), the byte-exact grammar (§9), and the hash procedure (§10). **The templates are the schema authority; this package is the encoding authority.** Neither restates the other's job: this package does not re-derive or alter any template's field list, IB/INF split, or field order — it cites them.

### 1.2 What v1 canonicalizes — the one foundational choice

A Configuration Template's identity-bearing fields are **heterogeneous** — numeric dimensions, integer counts, boolean flags, closed enum tokens, open material-spec strings, ordered lists, and registered-identifier references — unlike a geometry schema's uniform vector of scalar dimensions. v1 therefore canonicalizes a **keyed field record** (`group.field = value`, §9), not a positional vector: each field is written with an explicit key, so **optional/conditional fields may be present or absent** without breaking a fixed-position layout (§8). This is the one structural difference from geometry [Canonicalization Rules v1](../../v1/CANONICALIZATION_RULES_V1.md), disclosed here as a deliberate v1 scoping decision made necessary by the field kinds actually present in the four founding templates — not an arbitrary departure.

---

## 2. Units

- **Canonical unit for length fields: millimetre (mm).** Matches the canonical unit already declared by every published template (§2 of each `templates/*.v1.md`) and by [geometry Canonicalization Rules v1 §2](../../v1/CANONICALIZATION_RULES_V1.md).
- **Canonical unit for angular fields: degree.** The only angular field in the four founding templates is `ROL-DKS.v1`'s `CFG:END.flare_angle_deg`.
- Input in any other unit **SHALL** be converted to millimetres or degrees **before** numeric normalization (§6). The conversion is the producer's responsibility and is not itself part of the hashed record.
- Units are **not** written into the serialized record as a token (§9) — the field's canonical class (§6) fixes it by construction, exactly as geometry v1 does.

---

## 3. Field selection — identity-bearing only

Only fields the bound template marks **identity-bearing (IB)** enter the record; **informative (INF)** fields never do (Taxonomy Standard §4.7). Across the four founding templates, the sole INF field is `CFG:FIN.color` (`ASM-WDK.v1`, `ROL-COL.v1`). A bound record may carry `FIN.system = POWDER` and `FIN.color = blue`; only `FIN.system=POWDER` enters the serialized record (§9) — `color` is **omitted**, not written as empty.

Fields the templates mark as **component-definition references, not hashed configuration fields** — `ROL-COL.v1`'s and `ROL-DKS.v1`'s `section_ref` (each template's own §2 states this explicitly) — are likewise never part of the serialized record. A component's geometry is cited through its `GS-…` at the component-definition level (Taxonomy Standard §4.9), not re-hashed into its `ConfigurationID`.

---

## 4. Field ordering

### 4.1 Group order

Identity-bearing fields are serialized in **ASCII-ascending order of their `CFG:` group code** (`D`&lt;`E`&lt;`F`&lt;`H`&lt;`J`&lt;`M`&lt;`S`&lt;`W`, and alphabetically within a shared first letter — e.g. `MAT` before `MPT`). This is not a per-template restatement: it is a single mechanical rule, and every published template's own "Field order for hashing" clause already lists its groups in exactly this order (verified: `ASM-WDK.v1` → `DIM, EDG, FIN, JNT, MAT, MPT, SPD, SUP, WIR`; `ROL-COL.v1` → `DIM, END, FIN, HOL, MAT`; `ROL-DKS.v1` → `DIM, END`; `ROL-MSH.v1` → `DIM, MAT, MPT, WIR` — all ASCII-ascending).

### 4.2 Within-group order

Within one `CFG:` group, fields are serialized in the **exact order the template's field-schema table lists them** — a citation to the already-published template, never re-derived here. (E.g. `ASM-WDK.v1`'s `CFG:SUP` row order is `support_count, support_component, orientation, spacing_mm`; this package does not alter it.)

---

## 5. Numeric fields — precision classes

Three precision classes, assigned per field below. Each value is **rounded to its class step**, then **formatted with its class's fixed number of fractional digits** at serialization (§9). Rounding uses **round-half-up** on the absolute value (all founding-template numeric fields are non-negative).

| Class | Applies to | Rounding step | Serialized fractional digits |
|---|---|---|---|
| **L** (length) | general lengths, envelope/aperture/pitch/offset/spacing dimensions | 0.1 mm | 1 |
| **W** (wire) | fine-gauge dimensions | 0.05 mm | 2 |
| **A** (angle) | angular fields | 0.1° | 1 |

**Field → class assignment (all IB numeric fields across the four founding templates):**

| Template | Field | Class |
|---|---|---|
| `ASM-WDK.v1` | `DIM.nominal_width_mm`, `DIM.nominal_depth_mm`, `EDG.waterfall_drop_mm`, `MPT.aperture_x_mm`, `MPT.aperture_y_mm`, `SUP.spacing_mm` (each element), `WIR.wire_diameter_mm` | L, L, L, L, L, L, **W** |
| `ROL-COL.v1` | `DIM.length_mm`, `HOL.pitch_mm`, `HOL.start_offset_mm` | L, L, L |
| `ROL-DKS.v1` | `DIM.length_mm`, `END.flare_length_mm`, `END.flare_angle_deg` | L, L, **A** |
| `ROL-MSH.v1` | `DIM.nominal_width_mm`, `DIM.nominal_depth_mm`, `MPT.aperture_x_mm`, `MPT.aperture_y_mm`, `WIR.wire_diameter_mm` | L, L, L, L, **W** |

**Rationale for the class steps.** These two length-class steps (0.1 mm envelope-like / 0.05 mm fine-gauge) are **deliberately the same numeric steps** [geometry Canonicalization Rules v1 §4](../../v1/CANONICALIZATION_RULES_V1.md) adopted for its own, separate CGID classes — a disclosed choice for cross-package consistency (one anti-proliferation convention across the registry), **not** a functional dependency on that package and **not** an assertion that the Taxonomy Standard specifies these numbers for configuration (it does not; §4.7 names "rounding" as a template/rules-layer responsibility without giving figures, unlike GSID Standard §4.3's illustrative geometry example). The 0.1° angle class is new — configuration-specific, since geometry v1's cohort has no angular parameter. Wire diameter is assigned class **W** (not **L**): a mesh/deck wire gauge is a finer-tolerance dimension than a general envelope length, warranting the tighter step on its own engineering merits. **Correction (this is not a claim of consistency with `SEC:RBR`):** `SEC:RBR`'s diameter parameter is itself classified **E** — geometry v1's *coarse* envelope class (0.1 mm/1 decimal; see [schemas/RBR.md](../../v1/schemas/RBR.md) and [`GS-000004`](../../../../registry/gsid/GS-000004.md), whose normalized record `CANON-V1|SEC:RBR|4.0` carries one fractional digit) — the numeric equivalent of *this* package's class **L**, not **W**. Class **W** is chosen here for `WIR.wire_diameter_mm` independent of that precedent, not consistent with it.

- Rounding exists solely to make measurement/tolerance noise reproducible (anti-proliferation, mirroring GSID D-2/AP-11 for configuration fields). v1 does **not** define per-field bespoke tolerances beyond these three classes.

---

## 6. Integer fields

**Class N (count).** Exact, non-negative integers — **no rounding, no fractional digits**. The sole IB integer field across the four founding templates is `ASM-WDK.v1`'s `SUP.support_count`. Serialized as bare ASCII digits with no leading zeros (except a single `0`), no decimal point, no sign.

---

## 7. Boolean fields

Serialized as the literal token `TRUE` or `FALSE` (exact case). The sole IB boolean field across the four founding templates is `ROL-DKS.v1`'s `END.end_flare`.

---

## 8. Categorical, string, list, and reference fields

### 8.1 Closed enum tokens

Fields whose template entry states a closed domain (`FLUSH | WATERFALL | REVERSE_WATERFALL | BOXED`, `POWDER | PAINT | PRE_GALV | HOT_DIP_GALV | ZINC_PLATE`, `RESISTANCE_WELD | FUSION_WELD | CLINCH | BOLT | RIVET | INTERLOCK`, `SQUARE | RECT`, `FRONT_TO_BACK | SIDE_TO_SIDE`, `LEGS_DOWN | LEGS_UP`, `PRE_GALV | POST_GALV | PLAIN`) serialize as the **exact `UPPER_SNAKE` token bound**, case-sensitive, verbatim. No synonym normalization is performed here — the governed superset of valid tokens per `CFG:` group is the separate dictionary artifact [`dictionaries/enum_tokens.csv`](../../../../dictionaries/enum_tokens.csv) (First 100 Records Plan §6 item 2), against which a producer validates a bound token *before* serialization; this package fixes only *how* an already-valid token becomes bytes, not *which* tokens are valid (that authority boundary is preserved by keeping the vocabulary in `dictionaries/`, not here).

### 8.2 Open string/token fields

Fields whose template entry names a token or spec **without** a closed domain (`weld_schedule_class`, `top`/`bottom`, `pattern_id`, `faces`, `spec`, `grade`, `mesh_grade`) serialize as the **exact string bound**, byte-for-byte, including any internal spaces (e.g. `ASTM A1011 SS`, `SAE 1008`). **Constraint (disclosed, not fabricated):** such a value **SHALL NOT** contain the record's reserved delimiter bytes — `|` (U+007C), `;` (U+003B), or `=` (U+003D). A value requiring one of these bytes is out of v1 scope; this is the same class of disclosed lexical constraint geometry v1 places on its own grammar (its §7.2 rule 4 forbids whitespace; this package's constraint instead forbids the three delimiter bytes, because open string fields — unlike geometry's pure decimals — legitimately contain spaces).

### 8.3 Ordered list fields

The sole IB list field across the four founding templates is `ASM-WDK.v1`'s `SUP.spacing_mm` (Taxonomy Standard Part 5 rule D-6, restated in Part 6.7's decision table: "Support count 3→4: new configuration" — order and count are both identity-bearing). Serialized as `[` + each element (formatted per its field's own numeric class, §5) + `,` between elements (no space) + `]`. Element order is preserved exactly as bound — reordering the same multiset of spacings **is** a different record (spacing is positional, front-to-back or side-to-side per `CFG:SPD.span`).

### 8.4 Reference fields

Fields that point at another registered identifier (`ASM-WDK.v1`'s `SUP.support_component` → a `CMP-…`; `ASM-WDK.v1`'s and `ROL-MSH.v1`'s `WIR.wire_stock_gsid` → a `GS-…`) serialize as the **exact registered identifier string**, verbatim — never the referenced object's own field values. This preserves layering (identity is a reference key, never a description — Registry Architecture §1.4 invariant 1, restated from Taxonomy Standard P1): a component's `ConfigurationID` cites another object's identifier, and never re-embeds that object's geometry or configuration, so a later change to the *referenced* object's own record (e.g. a GSID re-pointing after a canonicalization-rules revision) does not silently reach into an unrelated hash through anything other than the explicit reference string itself.

---

## 9. Serialization — the normalized record (mandatory, byte-exact)

The **normalized record** is the exact byte string that is hashed (§10). This section is normative to the byte.

### 9.1 Grammar

```
record      := rules_tag "|" template_id "|" fields
rules_tag   := "CANON-CFG-V1"                        ; literal ASCII, fixed
template_id := ("ASM-" / "ROL-") 3UPALPHA ".v" 1*DIGIT   ; e.g. ROL-DKS.v1
fields      := field *( ";" field )                  ; in the order fixed by §4; absent optional fields omitted entirely (§9.3)
field       := key "=" value
key         := 3UPALPHA "." fieldname                ; e.g. DIM.length_mm — the CFG group code + "." + the template's field name
value       := numeric / integer / boolean / token / list
numeric     := 1*DIGIT "." 1*DIGIT                   ; fractional-digit count fixed by class (§5)
integer     := 1*DIGIT
boolean     := "TRUE" / "FALSE"
token       := 1*(%x21-7E) ; any printable ASCII except SP, excluding "|" / ";" / "=" — but see §8.2 (spaces ARE permitted in open string fields; the exclusion is only the three reserved delimiter bytes)
list        := "[" numeric *( "," numeric ) "]"
```

### 9.2 Exact lexical rules

1. **Encoding:** UTF-8, no byte-order mark.
2. **Top-level separator:** a single `|` (U+007C) between `rules_tag`, `template_id`, and `fields`. **Field separator:** a single `;` (U+003B) between successive `field` entries. No separator precedes the first field or follows the last.
3. **Key/value separator:** a single `=` (U+003D) between `key` and `value`. `key` is exactly `<CFG-group-code>.<field-name>` as published in the field's template row (e.g. `DIM.length_mm`, `SUP.spacing_mm`) — case-sensitive, matching the template's own spelling exactly.
4. **Case sensitivity:** the whole record is case-sensitive. `rules_tag` is `CANON-CFG-V1`; `template_id` matches the template's own identifier exactly (e.g. `ROL-DKS.v1`); enum tokens are upper-case as bound (§8.1); booleans are `TRUE`/`FALSE`.
5. **Whitespace:** none **outside** open string field values (§8.2). No spaces around `|`, `;`, or `=`.
6. **Decimal formatting:** as geometry Canonicalization Rules v1 §7.2 rule 5 — non-negative decimal, ASCII digits, exactly one `.`, exactly the fractional-digit count of the field's class (§5), no leading zeros beyond a single `0`, no sign, no thousands separator, no exponent, no unit suffix.
7. **Newline convention:** the record contains no internal newline and no trailing newline. The hashed bytes are exactly the record (§10.2 demonstrates this is load-bearing).

### 9.3 Optional/conditional field omission

A field the template marks as conditionally present (`ROL-DKS.v1`'s `END.flare_length_mm` / `END.flare_angle_deg`, present "when `end_flare = TRUE`") is **omitted entirely** from `fields` when absent in the bound instance — not written with an empty value, a null token, or a placeholder. This is the one rule with no geometry-v1 analog (every geometry schema parameter is always present); it exists because configuration schemas, unlike geometry schemas, have template-declared conditional fields. §10.3 and §10.4 demonstrate both the present and absent case for the same template, byte-for-byte.

---

## 10. Hash procedure — ConfigurationID derivation

### 10.1 Procedure (deterministic, public)

Given a normalized record string `S` (§9):

1. Take the **UTF-8 bytes of `S`**, with no trailing newline (§9.2 rule 7).
2. Compute **`H = SHA-256(bytes)`**.
3. Take the **first 12 hexadecimal characters** of `H`, rendered in **upper-case** hex.
4. The ConfigurationID is **`CF<templateRulesMajor>-` + those 12 hex characters** (Taxonomy Standard §4.8 format `CF<templateRulesMajor>-<12-hex>`). All four founding templates are `.v1` → `templateRulesMajor = 1` → prefix **`CF1-`**.

Collision handling at registry issuance is a registry-issuance concern (parallel to GSID Standard §4.4 / GS- allocation), not a canonicalization concern, and is out of scope here.

### 10.2 Verified reference test vectors (reproducibility proof — NOT production data)

Every vector below uses **deliberately illustrative, non-cohort field values** — round synthetic numbers and, where a reference field is demonstrated, a placeholder identifier (`GS-999999`, `CMP-999999`) that is **explicitly not a registered GSID or ComponentID**. None of these vectors is, or is intended to become, a real Category E/F ConfigurationID; they exist only to prove the procedure is reproducible from these published files alone (P9), exactly as geometry Canonicalization Rules v1 §8.2 used a non-cohort `SEC:OCU` 100×50×2 reference geometry for the same reason.

**Vector A — `ROL-DKS.v1`, no end flare (demonstrates the omission rule, §9.3):**
- Normalized record: `CANON-CFG-V1|ROL-DKS.v1|DIM.length_mm=2000.0;END.end_flare=FALSE` (64 bytes, no trailing newline)
- `SHA-256` = `4861ab2ada2e2b6bbfd3e88ef07bbdf50fa070f77ab024a747904e7500340f16`
- `CF1-4861AB2ADA2E`

**Vector B — `ROL-DKS.v1`, with end flare (demonstrates the angle class + conditional-field inclusion, contrasted with Vector A):**
- Normalized record: `CANON-CFG-V1|ROL-DKS.v1|DIM.length_mm=2000.0;END.end_flare=TRUE;END.flare_length_mm=30.0;END.flare_angle_deg=15.0` (113 bytes, no trailing newline)
- `SHA-256` = `cb4fcc0c895e7f89347cab7b8e78c4e2b8da22ef0164e8eb86cb631e7ad59688`
- `CF1-CB4FCC0C895E`

**Vector C — `ROL-MSH.v1` (demonstrates the enum token, the fine-wire class, the open-string field, and the reference-field rule):**
- Normalized record: `CANON-CFG-V1|ROL-MSH.v1|DIM.nominal_width_mm=500.0;DIM.nominal_depth_mm=500.0;MAT.mesh_grade=SAMPLE-GRADE-1;MPT.aperture_x_mm=20.0;MPT.aperture_y_mm=20.0;MPT.pattern=SQUARE;WIR.wire_diameter_mm=2.00;WIR.wire_condition=PLAIN;WIR.wire_stock_gsid=GS-999999` (253 bytes, no trailing newline)
- `SHA-256` = `fd320d3a0c4b8ba3f77445e8cd784b3ab38e7f7c5b22eea06c9e5c2ca3bfcee8`
- `CF1-FD320D3A0C4B`

Reproduce any vector with:
```
printf '%s' 'CANON-CFG-V1|ROL-DKS.v1|DIM.length_mm=2000.0;END.end_flare=FALSE' | sha256sum
# → 4861ab2ada2e...  ; take first 12 hex, upper-case → CF1-4861AB2ADA2E
```

**Negative control (determinism check, Vector A with a trailing newline):** `sha256sum` of the same string **with** a trailing `\n` yields `5a8f82b51faa2c2934e3fe3aaa48a63a0ecf8dd084fb54188e54cf310935f1d7` — a completely different digest, confirming §9.2 rule 7 is normative, not stylistic.

### 10.3 Illustrative fragment — list, integer, and CMP-reference syntax (NOT a complete or hashed record)

To demonstrate `ASM-WDK.v1`'s two remaining field kinds — the integer count and the ordered list — without computing anything resembling a complete deck configuration (Category F's task, not this package's), an isolated, non-hashed fragment of its `CFG:SUP` group:

```
...;SUP.support_count=5;SUP.support_component=CMP-999999;SUP.orientation=LEGS_UP;SUP.spacing_mm=[150.0,300.0,300.0,300.0,150.0];...
```

`CMP-999999` is an explicitly non-registered placeholder (no such ComponentID exists); `support_count=5`, `orientation=LEGS_UP`, and `spacing_mm=[150.0,300.0,300.0,300.0,150.0]` are likewise deliberately synthetic — **distinct from** Taxonomy Standard Part 6.5/6.6's real `ASM-WDK` worked-example values (`support_count=3`, `LEGS_DOWN`, `[290, 580, 290]`), which are the actual field values slated to become the real Category F founding record (First 100 Records Plan §4) and must not appear in an illustrative, non-production fragment. This fragment is illustrative syntax only — it is not prefixed with `CANON-CFG-V1|ASM-WDK.v1|`, is not a complete field record (the other eight `ASM-WDK.v1` groups are omitted), and no hash is computed from it.

---

## 11. Explicit exclusions — what v1 does NOT support

**Scope exclusions (future rules-version or template candidates):**
- **Any template other than the four founding templates** (`ASM-WDK.v1`, `ROL-COL.v1`, `ROL-DKS.v1`, `ROL-MSH.v1`). A future template (e.g. `ROL:BRC`, `ASM:FRM`) receives a class assignment only when it is published (First 100 Records Plan §7 deferred products).
- **Validating tokens against the governed vocabulary.** This package fixes *how* an enum token already bound by a template is serialized (§8.1) — verbatim, case-sensitive — but does **not** itself perform vocabulary validation. The governed token superset now lives in [`dictionaries/enum_tokens.csv`](../../../../dictionaries/enum_tokens.csv) (published separately); checking a bound token against it is the producer's step, upstream of serialization. Keeping the vocabulary in `dictionaries/` and the encoding here preserves the enum-token-authority vs field-schema/encoding-authority boundary.
- **Toleranced equivalence beyond the §5 rounding steps** — no tolerance-band, no "within X%" merging, mirroring geometry v1's own exclusion.
- **Geometry canonicalization** of any kind — that is [Canonicalization Rules v1](../../v1/CANONICALIZATION_RULES_V1.md), a distinct package for a distinct identifier (`CG1-…`).

**Permanent boundaries (never in any canonicalization version):**
- Product, manufacturer, SKU, or part-number identity beyond the registered references a template already declares (§8.4).
- Load capacity, structural performance, or any engineering-property value.
- Test results, certification, or regulatory-compliance claims.

---

## 12. Category E readiness statement

**After this package is published, can Category E component records be authored honestly? — The canonicalization blocker is cleared; one governance prerequisite remains.**

The ConfigurationID serialization/rounding/field-order/hash procedure — the gap every published Category-C template already flagged and the primary blocker a same-session Category E readiness assessment identified — **is cleared** for the four founding templates: every identity-bearing field kind they use (numeric, integer, boolean, enum, open string, list, reference) now has a defined precision class or serialization rule (§5–§8), a byte-exact grammar (§9), and a hash procedure with independently reproducible test vectors (§10).

**What remains required before any Category E `CMP-…` record is authored (not canonicalization work):**

1. ~~`dictionaries/enum_tokens.csv`~~ — **satisfied.** The governed `UPPER_SNAKE` token superset per `CFG:` group is now published at [`dictionaries/enum_tokens.csv`](../../../../dictionaries/enum_tokens.csv) (First 100 Records Plan §6 item 2, §8 step 2), covering the closed-enum domains of all four founding templates; §8.1 validates against it.
2. **The steward-seeding decision** authorizing Category E + F intake (First 100 Records Plan §6 item 5; `registry/component/README.md`) — a governance decision, not a canonicalization gap. **This is now the sole remaining Category E prerequisite.**

**No production ConfigurationID is computed, embedded, or registered by this package.** §10.2's three vectors and §10.3's fragment are reference/test data only, built from deliberately synthetic values and explicitly non-registered placeholder identifiers, precisely so they cannot be mistaken for — or later reused as — a real Category E or F ConfigurationID. Computing the actual `CF1-…` values for the rack upright, the mesh panel, the deck-support channel, and the wire deck is Category E/F's task, to run only after items 1–2 above are also satisfied.

---

*Related: [Material Handling Taxonomy Standard §4.7–4.9](../../../Material_Handling_Taxonomy_Standard.md) · [Registry Architecture §1.4, §2, §4.1](../../../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [First 100 Records Plan §6, §8](../../../../docs/FIRST_100_RECORDS_PLAN.md) · [geometry Canonicalization Rules v1](../../v1/CANONICALIZATION_RULES_V1.md) (the sibling package for `CG1-…`) · [templates/](../../../../templates/) · [registry/component/README.md](../../../../registry/component/README.md) · [registry/assembly/README.md](../../../../registry/assembly/README.md) · [schemas/](schemas/)*
