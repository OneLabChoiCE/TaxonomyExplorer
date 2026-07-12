# registry/status/

**Lifecycle-status reference records.** One record per status token a registry record may hold — a definitional artifact so that a record citing `status: RESERVED` resolves to a record defining what `RESERVED` means.

**Not populated at founding.** This directory defers deliberately. It does **not** restate status doctrine — the authoritative definitions live in:

- **Code Dictionary Standard N5** — the code/namespace status set: `ACTIVE`, `SUPERCLASS`, `RESERVED`, `DEPRECATED`, `REJECTED` (see [standards/Code_Dictionary_Standard.md](../../standards/Code_Dictionary_Standard.md)).
- **[Registry Architecture §5](../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md)** — the general object-record lifecycle (`RESERVED` / `ACTIVE` / `DEPRECATED` / `SUPERSEDED` / `RETIRED`), which is **`[Proposed]`** and has no force until adopted.

Seeding these reference records depends on adopting the object-record lifecycle by recorded normative-rule decision ([First 100 Records Plan §6 item 6](../../docs/FIRST_100_RECORDS_PLAN.md)) — a gate that must clear **before** the `SNAP-1.0.0` cut. Until then, this directory holds no records; status tokens are cited by their normative home above.
