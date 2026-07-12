# registry/gsid/

**Registered geometry identities** (`GS-<serial6>`) — Category D of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md) §1 (8 flagship worked-example sections). Each `GS-` record carries its derived `CG1-<hash12>` companion. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md) (gsid variant).

**Not populated yet.** GSID records require, as prerequisites (First 100 Records Plan §6, §8):

1. ~~**Canonicalization rules v1** + per-shape parameter schemas published (`standards/canonicalization/v1/`) — without them no CGID is honest (the critical path).~~ **Satisfied (2026-07-12):** [standards/canonicalization/v1/](../../standards/canonicalization/v1/) publishes the byte-exact serialization, the `CG1-` hash procedure (with a verified reference test vector), and per-shape schemas for all seven cohort shapes (`OCL`/`OCU`/`RBR`/`PLT`/`ANG`/`FBR`/`SHS`). Every Category-D CGID is now recomputable from published files alone (P9).
2. The `RESERVED → ACTIVE` object-record lifecycle adopted (Registry Architecture §5, `[Proposed]`) — still pending. Per the founding template §3.2 this MAY be flagged as a pending dependency when the `RESERVED` records are authored (as the dictionary cohort does with the un-cut snapshot); activation waits on the adoption decision before the cut.

Each record will restate the section's canonical parameter values, name the canonicalization rules version, and give enough to **recompute the CGID from published rules alone** (P9) — per the now-published [Canonicalization Rules v1](../../standards/canonicalization/v1/CANONICALIZATION_RULES_V1.md). Serials are opaque and issued by deterministic procedure — the first geometry registered is `GS-000001`, not the illustrative placeholders (`GS-004217`, …) cited in the standards (reconciled per First 100 Records Plan §4).
