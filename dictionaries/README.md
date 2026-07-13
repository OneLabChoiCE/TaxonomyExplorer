# dictionaries/

Governed vocabularies — one CSV per namespace plus the controlled enum-token list — that the classifier and the canonicalization packages consume as data (standard P7; [repository-structure.md §3](../docs/repository-structure.md)). **Owner: Technical Committee** (GOVERNANCE §3); every change passes the [GOVERNANCE.md](../GOVERNANCE.md) §5 machine gates (unique codes per namespace, no edits to published rows, status-transition legality, `UPPER_SNAKE` enum tokens, proposal citation on new rows). Column contracts for the code CSVs live in the [Code Dictionary Standard](../standards/Code_Dictionary_Standard.md); the files themselves are `namespaces.csv`, `sec_codes.csv`, `rol_codes.csv`, `asm_codes.csv`, `fam_codes.csv`, `cfg_groups.csv`, and `enum_tokens.csv`.

## `enum_tokens.csv` — the governed enum-token authority

The controlled `UPPER_SNAKE` values for the closed-domain fields inside `CFG:` configuration groups (rule **N4**: enumeration values SHALL be `UPPER_SNAKE` tokens, never three-character codes; [Code Dictionary Standard](../standards/Code_Dictionary_Standard.md)). Seeded from the CFG-group value lists in **Taxonomy Standard §3.6** ([repository-structure.md](../docs/repository-structure.md) migration step 3). This is the **governed token superset** that [Configuration Canonicalization Rules v1 §8.1](../standards/canonicalization/configuration/v1/CONFIGURATION_CANONICALIZATION_RULES_V1.md) validates a bound token against before serializing it into a `ConfigurationID`.

**Columns:** `cfg_group,field,token,status,definition,source,since_snapshot`
- `cfg_group` — the `CFG:` group code (foreign key to `cfg_groups.csv` `code`).
- `field` — the configuration-field *domain* the token belongs to (the §3.6 domain name, e.g. `edge_style`).
- `token` — the `UPPER_SNAKE` value.
- `status` / `since_snapshot` — as for every dictionary row (`ACTIVE` at `SNAP-1.0.0`; assignment-bound at R0, activated at the cut).
- `definition` — a minimal literal gloss (never a performance, capacity, safety, or compliance claim).
- `source` — the published provenance: the §3.6 CFG-group value list, the governing template field, and/or the standard worked example that exercises it.

**Authority boundary (do not conflate).** This file is the **enum-token authority** (which values are valid inside a field's closed domain). It is **not** the field-schema authority — *which* fields exist, their identity-bearing/informative split, and their hash order are fixed by the versioned [configuration templates](../templates/) (§4.7), never here. Enum tokens are governed once per `(cfg_group, field)` domain; a template field that draws a domain binds one of its tokens. In particular the three `ASM-WDK.v1` edge fields `EDG.front`, `EDG.rear`, and `EDG.sides` all draw the single `edge_style` domain governed here.

**Scope.** Only the closed-enum domains the four published founding templates use are governed (`edge_style`, `system`, `method`, `pattern`, `span`, `orientation`, `wire_condition`). Deliberately **excluded**: open string/spec fields the templates leave unenumerated (`MAT.spec`/`grade`, `mesh_grade`, `HOL.pattern_id`, `HOL.faces`, `END.top`/`bottom`, `JNT.weld_schedule_class`) — the canonicalization rules serialize these verbatim (§8.2), so a closed vocabulary would be fabrication; and the boolean `END.end_flare` (`TRUE`/`FALSE` is a serialization primitive, §7, not a governed enum). No token is included that cannot be traced to §3.6, a template field, or a standard worked example; `WIR.wire_condition = PLAIN` is the one token whose sole source is the Category-C templates (§3.6 publishes only pre/post-galvanized) and its `source` column says so.

---

*Related: [Code Dictionary Standard](../standards/Code_Dictionary_Standard.md) (N4, file contracts) · [Taxonomy Standard §3.6](../standards/Material_Handling_Taxonomy_Standard.md) · [Configuration Canonicalization Rules v1](../standards/canonicalization/configuration/v1/CONFIGURATION_CANONICALIZATION_RULES_V1.md) · [templates/](../templates/) · [repository-structure.md §3](../docs/repository-structure.md) · [GOVERNANCE.md](../GOVERNANCE.md)*
