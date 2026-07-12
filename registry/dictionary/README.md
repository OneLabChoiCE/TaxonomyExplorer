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

## Remaining (seeded in later batches)

| Source CSV | Namespace | Rows | Seeded |
|---|---|---|---|
| [sec_codes.csv](../../dictionaries/sec_codes.csv) | `SEC:` | 29 | 2 |
| [rol_codes.csv](../../dictionaries/rol_codes.csv) | `ROL:` | 17 | 1 |
| [asm_codes.csv](../../dictionaries/asm_codes.csv) | `ASM:` | 16 | 1 |
| [fam_codes.csv](../../dictionaries/fam_codes.csv) | `FAM:` | 12 | 1 |
| [cfg_groups.csv](../../dictionaries/cfg_groups.csv) | `CFG:` | 12 | 1 |
| **Total** | | **86** | **6** |

Records carry each code's **assigned** status, not a blanket `ACTIVE`: the `SUPERCLASS` rollups, `RESERVED`-parked codes, and `REJECTED` burned-string rows each carry a record for precedent, even though they never activate (First 100 Records Plan §9).

**Deferred within Category B — a sequencing choice, not a doctrine blocker.** The `SUPERCLASS` rollups (SEC `OCS`/`HSS`/`BAR`/`ZEE`, ASM `DCK`) and `REJECTED` burned-string rows (`CFS`/`PIP`/`TUB`) are held for a later batch only to keep this pass small. No unresolved status question blocks them: `status` is the assigned registry state, and these records are **born in their assigned state** — `SUPERCLASS` or `REJECTED` — directly. [Registry Architecture §8](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) gates only the `RESERVED → ACTIVE` transition; `SUPERCLASS`/`REJECTED` codes are not activation-bound and do not pass through `RESERVED` ([§5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md): a `REJECTED` row records a burned string, and such rows never activate). They can be seeded whenever the sequencing calls for it.
