# registry/component/

**Component identities** (`CMP-<serial6>`) — Category E of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md) §1 (3 worked-example components: the rack upright, the mesh panel, the deck-support channel). Each `CMP-` record carries its derived `CF1-<hash12>` ConfigurationID companion. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md) (component variant).

**Not populated yet.** Component records require, as prerequisites (First 100 Records Plan §6, §7, §8):

1. The Category-D geometries they reference (registry/gsid/). **Satisfied** — 8 GSID records seeded 2026-07-12.
2. The Category-C configuration templates they bind (`ROL-COL.v1`, `ROL-DKS.v1`, `ROL-MSH.v1`) — in `templates/`. **Satisfied** — seeded 2026-07-12.
3. The `ConfigurationID` byte-serialization, rounding, and hash procedure. **Satisfied** — [Configuration Canonicalization Rules v1](../../standards/canonicalization/configuration/v1/CONFIGURATION_CANONICALIZATION_RULES_V1.md) published 2026-07-12 (the gap every published Category-C template already flagged; not named as a numbered item anywhere in First 100 Records Plan §6, an omission this package's Engineering Log entry flags without editing the plan itself).
4. `dictionaries/enum_tokens.csv` — the governed `UPPER_SNAKE` token superset (First 100 Records Plan §6 item 2, §8 step 2). **Not yet published.**
5. The recorded **steward-seeding decision** authorizing Category E + F (a narrow, bounded reconciliation with the Submission Model's stage-S3 intake rule). **Not yet recorded.**

Items 4–5 remain independent blockers even though items 1–3 are now satisfied. Each record will name the bound template version and its identity-bearing field values, and give the path to **recompute the ConfigurationID** (P9) once items 4–5 clear.
