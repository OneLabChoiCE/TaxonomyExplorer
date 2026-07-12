# registry/gsid/

**Registered geometry identities** (`GS-<serial6>`) — Category D of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md) §1 (8 flagship worked-example sections). Each `GS-` record carries its derived `CG1-<hash12>` companion. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md) (gsid variant).

**Populated (2026-07-12) — all 8 records seeded.** Both prerequisites are handled:

1. ~~**Canonicalization rules v1** + per-shape parameter schemas published.~~ **Satisfied:** [standards/canonicalization/v1/](../../standards/canonicalization/v1/) publishes the byte-exact serialization, the `CG1-` hash procedure, and per-shape schemas for all seven cohort shapes (`OCL`/`OCU`/`RBR`/`PLT`/`ANG`/`FBR`/`SHS`). Every CGID below is recomputable from published files alone (P9).
2. The `RESERVED → ACTIVE` object-record lifecycle (Registry Architecture §5, `[Proposed]`) — **flagged as a pending dependency** in each record's §3 (as the founding template §3.2 anticipates and the dictionary cohort does with the un-cut snapshot). Records are authored `RESERVED`; **activation waits** on that adoption decision **and** the `SNAP-1.0.0` cut — no record here is activated.

Each record restates its section's canonical parameter values, names the canonicalization rules version, and carries the normalized byte string + SHA-256 so the CGID recomputes independently. Serials are opaque and issued by deterministic procedure in **First 100 Records Plan §4 enumeration order** — the first geometry registered is `GS-000001`, **not** the illustrative placeholders (`GS-004217`, …) cited in the standards (reconciled per First 100 Records Plan §4).

| Serial | Shape | Canonical geometry (mm) | Derived CGID |
|---|---|---|---|
| [GS-000001](GS-000001.md) | [`SEC:OCL`](../dictionary/SEC-OCL.md) | web 76.2 × flange 41.3 × lip 12.7 × t 1.90 | `CG1-8EF31CC7EA1F` |
| [GS-000002](GS-000002.md) | [`SEC:OCU`](../dictionary/SEC-OCU.md) | web 32.0 × flange 25.0 × t 1.50 | `CG1-710171128D0C` |
| [GS-000003](GS-000003.md) | [`SEC:OCU`](../dictionary/SEC-OCU.md) | web 40.0 × flange 40.0 × t 1.50 | `CG1-7076AF79DD56` |
| [GS-000004](GS-000004.md) | [`SEC:RBR`](../dictionary/SEC-RBR.md) | diameter 4.0 | `CG1-8728D6FACFC3` |
| [GS-000005](GS-000005.md) | [`SEC:PLT`](../dictionary/SEC-PLT.md) | width 152.0 × t 6.40 | `CG1-F6C764B089B4` |
| [GS-000006](GS-000006.md) | [`SEC:ANG`](../dictionary/SEC-ANG.md) | leg 38.0 × leg 38.0 × t 2.70 | `CG1-686CDC3CB280` |
| [GS-000007](GS-000007.md) | [`SEC:FBR`](../dictionary/SEC-FBR.md) | width 25.0 × t 3.00 | `CG1-648776464448` |
| [GS-000008](GS-000008.md) | [`SEC:SHS`](../dictionary/SEC-SHS.md) | outer 76.0 × t 3.20 | `CG1-8B0B6C97B279` |

The two `SEC:OCU` records (same schema, different values) carry different CGIDs (D-2); `GS-000005`/`GS-000007` show a `SEC:PLT` plate and `SEC:FBR` flat bar distinguished by shape code (a hashed field) despite the same two-parameter schema shape. **Category D is complete: 8 of 8.**
