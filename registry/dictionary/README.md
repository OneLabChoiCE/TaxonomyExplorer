# registry/dictionary/

**Dictionary code records** — Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md) §1 (86 records). One record per code, each a verbatim, sourced restatement of its `dictionaries/*.csv` row. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Files use `<NS>-<CODE>.md` naming (`:` → `-` for the filesystem; each record's identifier keeps the canonical `SEC:OCL` form).

## Population: in progress

**Batch 1 (2026-07-11)** seeds 6 representative records — one code per namespace, plus one `RESERVED`-parked SEC code. Every record's **assigned status** at the current (R0, pre-snapshot) lineage point is `RESERVED` — the assigned registry state, not a publication flag; per [Registry Architecture §8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md), `ACTIVE` is reached only through the `RESERVED → ACTIVE` release transition. The `status` value each code's CSV pins at `SNAP-1.0.0` (the same field, read at that snapshot) is shown below:

| Record | Identifier | Namespace | `status` @ `SNAP-1.0.0` |
|---|---|---|---|
| [SEC-OCL.md](SEC-OCL.md) | `SEC:OCL` | `SEC:` | `ACTIVE` |
| [SEC-SBR.md](SEC-SBR.md) | `SEC:SBR` | `SEC:` | `RESERVED` (parked) |
| [ROL-COL.md](ROL-COL.md) | `ROL:COL` | `ROL:` | `ACTIVE` |
| [ASM-WDK.md](ASM-WDK.md) | `ASM:WDK` | `ASM:` | `ACTIVE` |
| [FAM-SPR.md](FAM-SPR.md) | `FAM:SPR` | `FAM:` | `ACTIVE` |
| [CFG-DIM.md](CFG-DIM.md) | `CFG:DIM` | `CFG:` | `ACTIVE` |

**Batch 2 (2026-07-11)** seeds the 8 non-activation-bound codes, exercising the two born-in-terminal-state statuses (`SUPERCLASS`, `REJECTED`). Unlike Batch 1's activation-bound codes (which sit `RESERVED` at R0 → `ACTIVE` at the cut), these are **born directly in their assigned terminal state** and hold it at every lineage point — [Registry Architecture §8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) gates only `RESERVED → ACTIVE`, which does not apply to them, so their `status` column matches the CSV directly with no lineage-point caveat:

| Record | Identifier | Namespace | Born status |
|---|---|---|---|
| [SEC-OCS.md](SEC-OCS.md) | `SEC:OCS` | `SEC:` | `SUPERCLASS` |
| [SEC-HSS.md](SEC-HSS.md) | `SEC:HSS` | `SEC:` | `SUPERCLASS` |
| [SEC-BAR.md](SEC-BAR.md) | `SEC:BAR` | `SEC:` | `SUPERCLASS` |
| [SEC-ZEE.md](SEC-ZEE.md) | `SEC:ZEE` | `SEC:` | `SUPERCLASS` |
| [ASM-DCK.md](ASM-DCK.md) | `ASM:DCK` | `ASM:` | `SUPERCLASS` |
| [SEC-CFS.md](SEC-CFS.md) | `SEC:CFS` | `SEC:` | `REJECTED` |
| [SEC-PIP.md](SEC-PIP.md) | `SEC:PIP` | `SEC:` | `REJECTED` |
| [SEC-TUB.md](SEC-TUB.md) | `SEC:TUB` | `SEC:` | `REJECTED` |

With Batch 2, **four of the five N5 states are now represented in records**: `ACTIVE` (Batch 1, at the `SNAP-1.0.0` lineage point), `RESERVED` in both its pending-activation and parked senses (Batch 1), and `SUPERCLASS` + `REJECTED` (Batch 2). The fifth, `DEPRECATED`, has no founding-cohort record — deprecation requires a later decision naming a successor ([Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)) — so no seed code carries it.

**Batch 3 (2026-07-12)** populates the **member codes under the existing superclasses** — the leaf shape codes that `SEC:OCS` / `SEC:HSS` / `SEC:BAR` / `SEC:ZEE` roll up, plus the standalone hot-rolled channel `SEC:CHN`. Ten are activation-bound (`RESERVED` at R0 → `ACTIVE` at the cut, like Batch 1's active codes); `SEC:HBR` is parked-`RESERVED` (like `SEC:SBR`). Each names its parent superclass in §5, matching the member list the parent record already declares:

| Record | Identifier | Parent superclass | `status` @ `SNAP-1.0.0` | Basis |
|---|---|---|---|---|
| [SEC-OCU.md](SEC-OCU.md) | `SEC:OCU` | [`SEC:OCS`](SEC-OCS.md) | `ACTIVE` | Ruling R2 (§3.1) |
| [SEC-OCR.md](SEC-OCR.md) | `SEC:OCR` | [`SEC:OCS`](SEC-OCS.md) | `ACTIVE` | Ruling R4 (§3.1) |
| [SEC-CHN.md](SEC-CHN.md) | `SEC:CHN` | — (standalone) | `ACTIVE` | Ruling R5 (§3.1) |
| [SEC-RHS.md](SEC-RHS.md) | `SEC:RHS` | [`SEC:HSS`](SEC-HSS.md) | `ACTIVE` | §3.2 table (A) |
| [SEC-SHS.md](SEC-SHS.md) | `SEC:SHS` | [`SEC:HSS`](SEC-HSS.md) | `ACTIVE` | §3.2 table (A) |
| [SEC-CHS.md](SEC-CHS.md) | `SEC:CHS` | [`SEC:HSS`](SEC-HSS.md) | `ACTIVE` | §3.2 table (A) |
| [SEC-RBR.md](SEC-RBR.md) | `SEC:RBR` | [`SEC:BAR`](SEC-BAR.md) | `ACTIVE` | §3.2 table (A) |
| [SEC-FBR.md](SEC-FBR.md) | `SEC:FBR` | [`SEC:BAR`](SEC-BAR.md) | `ACTIVE` | §3.2 table (A) |
| [SEC-HBR.md](SEC-HBR.md) | `SEC:HBR` | [`SEC:BAR`](SEC-BAR.md) | `RESERVED` (parked) | §3.2 table (R) |
| [SEC-ZLP.md](SEC-ZLP.md) | `SEC:ZLP` | [`SEC:ZEE`](SEC-ZEE.md) | `ACTIVE` | §3.2 table (A) |
| [SEC-ZUN.md](SEC-ZUN.md) | `SEC:ZUN` | [`SEC:ZEE`](SEC-ZEE.md) | `ACTIVE` | §3.2 table (A) |

Every `SEC:` superclass rollup now has all its declared members seeded: `SEC:OCS`→{`OCL`, `OCU`, `OCR`}, `SEC:HSS`→{`RHS`, `SHS`, `CHS`}, `SEC:BAR`→{`RBR`, `FBR`, `SBR`, `HBR`}, `SEC:ZEE`→{`ZLP`, `ZUN`} — parent↔child membership is complete and consistent. N5 coverage is unchanged (Batch 3 deepens `ACTIVE` and parked-`RESERVED`; `DEPRECATED` remains structurally absent).

**Batch 4 (2026-07-12)** completes the `SEC:` namespace with its **9 standalone active shape codes** — the section shapes that belong to no superclass rollup. All are activation-bound (`RESERVED` at R0 → `ACTIVE` at the cut) and cite the §3.2 shape-code table (status `A`):

| Record | Identifier | Form class | `status` @ `SNAP-1.0.0` |
|---|---|---|---|
| [SEC-IWF.md](SEC-IWF.md) | `SEC:IWF` | `HOT_ROLLED_FILLETED` | `ACTIVE` |
| [SEC-ITF.md](SEC-ITF.md) | `SEC:ITF` | `HOT_ROLLED_FILLETED` | `ACTIVE` |
| [SEC-ANG.md](SEC-ANG.md) | `SEC:ANG` | `HOT_ROLLED_FILLETED` | `ACTIVE` |
| [SEC-TEE.md](SEC-TEE.md) | `SEC:TEE` | `HOT_ROLLED_FILLETED` | `ACTIVE` |
| [SEC-PLT.md](SEC-PLT.md) | `SEC:PLT` | `HOT_ROLLED_FILLETED` | `ACTIVE` |
| [SEC-OMG.md](SEC-OMG.md) | `SEC:OMG` | `FOLDED_UNIFORM_T` | `ACTIVE` |
| [SEC-SGM.md](SEC-SGM.md) | `SEC:SGM` | `FOLDED_UNIFORM_T` | `ACTIVE` |
| [SEC-STB.md](SEC-STB.md) | `SEC:STB` | `FOLDED_UNIFORM_T` | `ACTIVE` |
| [SEC-BXB.md](SEC-BXB.md) | `SEC:BXB` | `FOLDED_UNIFORM_T` | `ACTIVE` |

**The `SEC:` namespace is now complete — all 29 `sec_codes.csv` rows have a founding record**: 2 from Batch 1 (`OCL` active, `SBR` parked), 7 from Batch 2 (`OCS`/`HSS`/`BAR`/`ZEE` `SUPERCLASS`, `CFS`/`PIP`/`TUB` `REJECTED`), 11 members from Batch 3, and these 9 standalone shapes. N5 coverage is unchanged (Batch 4 adds only `ACTIVE` codes).

**Batch 5 (2026-07-12)** completes the `ASM:` namespace with its **14 remaining assembly type codes**. All are `ACTIVE` (`RESERVED` at R0 → `ACTIVE` at the cut) and cite the Assembly type codes table (Taxonomy Standard §3.4); the `ASM:` dictionary carries only `definition`/`successor` (no `form_class`/`maps_from`). Three are decking members of the `ASM:DCK` rollup; eleven are standalone assembly types:

| Record | Identifier | Superclass | `status` @ `SNAP-1.0.0` |
|---|---|---|---|
| [ASM-SDK.md](ASM-SDK.md) | `ASM:SDK` | [`ASM:DCK`](ASM-DCK.md) | `ACTIVE` |
| [ASM-PDK.md](ASM-PDK.md) | `ASM:PDK` | [`ASM:DCK`](ASM-DCK.md) | `ACTIVE` |
| [ASM-BGD.md](ASM-BGD.md) | `ASM:BGD` | [`ASM:DCK`](ASM-DCK.md) | `ACTIVE` |
| [ASM-FRM.md](ASM-FRM.md) | `ASM:FRM` | — (standalone) | `ACTIVE` |
| [ASM-BMA.md](ASM-BMA.md) | `ASM:BMA` | — (standalone) | `ACTIVE` |
| [ASM-CBA.md](ASM-CBA.md) | `ASM:CBA` | — (standalone) | `ACTIVE` |
| [ASM-ACA.md](ASM-ACA.md) | `ASM:ACA` | — (standalone) | `ACTIVE` |
| [ASM-CVB.md](ASM-CVB.md) | `ASM:CVB` | — (standalone) | `ACTIVE` |
| [ASM-SHU.md](ASM-SHU.md) | `ASM:SHU` | — (standalone) | `ACTIVE` |
| [ASM-WPF.md](ASM-WPF.md) | `ASM:WPF` | — (standalone) | `ACTIVE` |
| [ASM-GDA.md](ASM-GDA.md) | `ASM:GDA` | — (standalone) | `ACTIVE` |
| [ASM-CNT.md](ASM-CNT.md) | `ASM:CNT` | — (standalone) | `ACTIVE` |
| [ASM-DRW.md](ASM-DRW.md) | `ASM:DRW` | — (standalone) | `ACTIVE` |
| [ASM-LKR.md](ASM-LKR.md) | `ASM:LKR` | — (standalone) | `ACTIVE` |

**The `ASM:` namespace is now complete — all 16 `asm_codes.csv` rows have a founding record**: 1 from Batch 1 (`WDK`), 1 from Batch 2 (`DCK` `SUPERCLASS`), and these 14. The `ASM:DCK` deck rollup now has all four declared members seeded (`WDK`/`SDK`/`PDK`/`BGD`); `WDK`'s §5 was aligned to the reciprocal-back-reference convention (additive cross-reference — no status/CSV value changed). N5 coverage is unchanged (Batch 5 adds only `ACTIVE` codes).

## Remaining (seeded in later batches)

| Source CSV | Namespace | Rows | Seeded |
|---|---|---|---|
| [sec_codes.csv](../../dictionaries/sec_codes.csv) | `SEC:` | 29 | **29 ✓ (complete)** |
| [rol_codes.csv](../../dictionaries/rol_codes.csv) | `ROL:` | 17 | 1 |
| [asm_codes.csv](../../dictionaries/asm_codes.csv) | `ASM:` | 16 | **16 ✓ (complete)** |
| [fam_codes.csv](../../dictionaries/fam_codes.csv) | `FAM:` | 12 | 1 |
| [cfg_groups.csv](../../dictionaries/cfg_groups.csv) | `CFG:` | 12 | 1 |
| **Total** | | **86** | **48** |

Records carry each code's **assigned** status, not a blanket `ACTIVE`: the `SUPERCLASS` rollups, `RESERVED`-parked codes, and `REJECTED` burned-string rows each carry a record for precedent, even though they never activate (First 100 Records Plan §9).

**Remaining within Category B — a sequencing choice, not a doctrine blocker.** With Batch 5 the `SEC:` (29 of 29) and `ASM:` (16 of 16) namespaces are both fully seeded, and every non-`ACTIVE` code in Category B is on record (the nine `SEC:` `SUPERCLASS`/`REJECTED`/parked rows plus the ASM `DCK` superclass — the only non-`ACTIVE` rows in the whole cohort). The 38 still-unseeded codes are therefore all `ACTIVE` codes in the `ROL:` (16), `FAM:` (11), and `CFG:` (11) namespaces, held for later batches only to keep each pass small. This confirms the settled doctrine: `status` is the assigned registry state; [Registry Architecture §8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) gates only the `RESERVED → ACTIVE` transition; and `SUPERCLASS`/`REJECTED` codes are **born in their assigned state directly**, never passing through `RESERVED` ([§5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md): a `REJECTED` row records a burned string, and such rows never activate).
