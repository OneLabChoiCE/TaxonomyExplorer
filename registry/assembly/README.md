# registry/assembly/

**Assembly-product identities** (`ASP-<serial6>`) — Category F of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md) §1 (1 worked-example assembly: the wire deck). The `ASP-` record carries the assembly's ConfigurationID companions. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md) (assembly variant).

**Not populated yet.** The one founding assembly record proves the whole stack end-to-end (GSID → component → assembly → ConfigurationID) and is created last before the cut, after its component records ([registry/component/](../component/)) and the `ASM-WDK.v1` template (in `templates/`). The `ConfigurationID` hash procedure is published — [Configuration Canonicalization Rules v1](../../standards/canonicalization/configuration/v1/CONFIGURATION_CANONICALIZATION_RULES_V1.md) (2026-07-12) — and the governed enum-token vocabulary [`dictionaries/enum_tokens.csv`](../../dictionaries/enum_tokens.csv) is now published (2026-07-12). The sole remaining prerequisite is the same **steward-seeding decision** required by Category E (First 100 Records Plan §6 item 5, not yet recorded).

An assembly product is classified by family, assembly type, component roles, and configuration identity — **never** by a GSID (GSID identifies 2D section geometry only; Registry Architecture invariant 2).
