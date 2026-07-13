# standards/canonicalization/configuration/v1/

**Configuration Canonicalization Rules v1** — the deterministic procedure that derives a reproducible `CF1-<hash12>` ConfigurationID from a Configuration Template's bound identity-bearing field record (Taxonomy Standard §4.7–4.8). The sibling package to [standards/canonicalization/v1/](../../v1/) (geometry, `CG1-…`) — same discipline, distinct identifier, distinct field kinds.

## Contents

- [CONFIGURATION_CANONICALIZATION_RULES_V1.md](CONFIGURATION_CANONICALIZATION_RULES_V1.md) — the normative rules: scope, units, field selection (IB vs INF), field ordering, three numeric precision classes (length 0.1mm / wire 0.05mm / angle 0.1°), integer/boolean/enum/open-string/list/reference serialization, the byte-exact grammar, the SHA-256 → `CF1-` hash procedure, three verified (non-production) reference test vectors, exclusions, and a Category E readiness statement.
- [schemas/](schemas/) — one per-template canonicalization schema, restating each founding template's field kinds, precision-class assignments, and exact serialization key order: [ASM-WDK.v1.md](schemas/ASM-WDK.v1.md), [ROL-COL.v1.md](schemas/ROL-COL.v1.md), [ROL-DKS.v1.md](schemas/ROL-DKS.v1.md), [ROL-MSH.v1.md](schemas/ROL-MSH.v1.md).

## Why this package exists

Every one of the four founding [Configuration Templates](../../../../templates/) (`ASM-WDK.v1`, `ROL-COL.v1`, `ROL-DKS.v1`, `ROL-MSH.v1`) explicitly deferred its `ConfigurationID` hashing: *"The byte-serialization and numeric-normalization (rounding) rules that turn a bound field set into the hashed string are a separate published prerequisite — not yet published."* This package publishes that prerequisite — the Category E analog of what [geometry Canonicalization Rules v1](../../v1/) did for Category D's `CG1-…`.

## What this package is not

- **Not a component or assembly record.** No `CMP-…`/`ASP-…` is authored here.
- **Not a production ConfigurationID computation.** Every worked example in the main rules doc (§10) is a deliberately synthetic reference/test vector built from illustrative values and explicitly non-registered placeholder identifiers (`GS-999999`, `CMP-999999`) — never a real Category E/F hash.
- **Not `dictionaries/enum_tokens.csv`.** This package fixes *how* an already-bound enum token is serialized (verbatim, case-sensitive); it does not publish or freeze the governed token vocabulary a value must belong to. That remains a separate, First-100-named prerequisite (§6 item 2).
- **Not a governance or architecture change.** No standard, template, dictionary, or Registry Architecture document is modified.

## Status

DRAFT normative rule package, published under the bootstrap clause (GOVERNANCE §2), same authority and pattern as geometry Canonicalization Rules v1. Clears the ConfigurationID-hashing blocker every published Category-C template already flagged; two independent prerequisites remain before Category E can be authored (§12 of the rules doc: `dictionaries/enum_tokens.csv` and the steward-seeding decision).

---

*Related: [First 100 Records Plan](../../../../docs/FIRST_100_RECORDS_PLAN.md) · [Registry Architecture](../../../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [Taxonomy Standard §4.7–4.9](../../../Material_Handling_Taxonomy_Standard.md) · [templates/](../../../../templates/) · [geometry Canonicalization Rules v1](../../v1/) · [registry/component/README.md](../../../../registry/component/README.md) · [registry/assembly/README.md](../../../../registry/assembly/README.md) · [Engineering log](../../../../docs/ENGINEERING_LOG.md)*
