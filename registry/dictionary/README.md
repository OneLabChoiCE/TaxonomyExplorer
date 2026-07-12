# registry/dictionary/

**Dictionary code records** — Category B of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md) §1 (86 records). One record per code, each a verbatim, sourced restatement of its `dictionaries/*.csv` row. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md).

**Not populated yet.** Seeded after the namespace records (Category A), in the [creation sequence](../../docs/FIRST_100_RECORDS_PLAN.md) §8 order. When seeded it will hold the code records for every governed vocabulary:

| Source CSV | Namespace | Rows |
|---|---|---|
| [sec_codes.csv](../../dictionaries/sec_codes.csv) | `SEC:` | 29 |
| [rol_codes.csv](../../dictionaries/rol_codes.csv) | `ROL:` | 17 |
| [asm_codes.csv](../../dictionaries/asm_codes.csv) | `ASM:` | 16 |
| [fam_codes.csv](../../dictionaries/fam_codes.csv) | `FAM:` | 12 |
| [cfg_groups.csv](../../dictionaries/cfg_groups.csv) | `CFG:` | 12 |

Records are created in each code's **recorded** status, not a blanket `ACTIVE`: the `SUPERCLASS` rollups, `RESERVED`-parked codes, and `REJECTED` burned-string rows each carry a record for precedent, even though they never activate (First 100 Records Plan §9).
