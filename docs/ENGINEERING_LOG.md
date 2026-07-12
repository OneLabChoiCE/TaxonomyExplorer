# Engineering Log

**Append-only, dated record of repository-stewardship and registry-operations actions** — the executable-artifact trail behind the standards. It records *engineering and steward decisions*: creating registry artifacts, structural changes, snapshot mechanics, and the recorded decisions that authorize them under the bootstrap clause.

It is distinct from, and cross-links to:

- [proposals/](../proposals/) — taxonomy/dictionary **decision records** (what a code or rule *means*);
- [CHANGELOG.md](../CHANGELOG.md) — the per-snapshot summary of dictionary/standard changes (GOVERNANCE §5);
- `docs/architecture/decisions/` — ADRs for repo-level engineering *design* choices ([repository-structure](repository-structure.md) §1).

Entries are append-only and never edited in place (P8); a correction is a new entry. **Newest first.**

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
