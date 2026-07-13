# registry/assembly/

**Assembly-product identities** (`ASP-<serial6>`) — Category F of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md) §1 (1 worked-example assembly: the wire deck). The `ASP-` record carries the assembly's ConfigurationID companions. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md) (assembly variant).

**Populated (2026-07-12) — Category F seeded, 1/1.** The one founding assembly record proves the whole stack end-to-end (GSID → component → assembly → ConfigurationID) and was created last, after its component records ([registry/component/](../component/)) and the `ASM-WDK.v1` template:

| Record | Family / type | Bill of roles | Bound template | ConfigurationID |
|---|---|---|---|---|
| [`ASP-000001`](ASP-000001.md) | [`FAM:DKG`](../dictionary/FAM-DKG.md) / [`ASM:WDK`](../dictionary/ASM-WDK.md) wire deck | `ROL:MSH`→[`CMP-000002`](../component/CMP-000002.md) ×1; `ROL:DKS`→[`CMP-000003`](../component/CMP-000003.md) ×3 | [`ASM-WDK.v1`](../../templates/ASM-WDK.v1.md) | `CF1-17E80499A7EE` |

`ASP-000001` is `RESERVED`, cites `DECISION-EF-SEED-001`, references its component records (real serials, not the illustrative `ASP-000173`/`CMP-000611/612` placeholders), and embeds the normalized byte string + full SHA-256 so its ConfigurationID recomputes from published files alone (P9). The `SNAP-1.0.0` cut still gates activation.

An assembly product is classified by family, assembly type, component roles, and configuration identity — **never** by a GSID (GSID identifies 2D section geometry only; Registry Architecture invariant 2).
