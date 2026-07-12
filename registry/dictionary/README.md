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

## Remaining (seeded in later batches)

| Source CSV | Namespace | Rows | Seeded |
|---|---|---|---|
| [sec_codes.csv](../../dictionaries/sec_codes.csv) | `SEC:` | 29 | 20 |
| [rol_codes.csv](../../dictionaries/rol_codes.csv) | `ROL:` | 17 | 1 |
| [asm_codes.csv](../../dictionaries/asm_codes.csv) | `ASM:` | 16 | 2 |
| [fam_codes.csv](../../dictionaries/fam_codes.csv) | `FAM:` | 12 | 1 |
| [cfg_groups.csv](../../dictionaries/cfg_groups.csv) | `CFG:` | 12 | 1 |
| **Total** | | **86** | **25** |

Records carry each code's **assigned** status, not a blanket `ACTIVE`: the `SUPERCLASS` rollups, `RESERVED`-parked codes, and `REJECTED` burned-string rows each carry a record for precedent, even though they never activate (First 100 Records Plan §9).

**Remaining within Category B — a sequencing choice, not a doctrine blocker.** With Batch 3 the entire `SEC:` superclass–member structure is seeded; the still-unseeded codes are the nine standalone `SEC:` shapes (`IWF`, `ITF`, `ANG`, `TEE`, `PLT`, `OMG`, `SGM`, `STB`, `BXB`) and the remaining `ACTIVE` codes in the `ROL:` / `ASM:` / `FAM:` / `CFG:` namespaces, held for later batches only to keep each pass small. The `SUPERCLASS`/`REJECTED` codes — once the open question for this layer — were seeded in Batch 2, confirming the settled doctrine: `status` is the assigned registry state; [Registry Architecture §8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) gates only the `RESERVED → ACTIVE` transition; and `SUPERCLASS`/`REJECTED` codes are **born in their assigned state directly**, never passing through `RESERVED` ([§5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md): a `REJECTED` row records a burned string, and such rows never activate).
