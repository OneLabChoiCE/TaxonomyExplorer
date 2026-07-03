# Rejection Log

Rejected proposals and rulings, recorded per [GOVERNANCE.md](GOVERNANCE.md) §5. **Precedents here are binding on future proposals unless materially new evidence is presented** (GOVERNANCE.md §4). Each entry: what was proposed, the rule it failed, and the correct alternative.

| Date | Proposal | Namespace | Ruling | Rule failed | Correct alternative |
|---|---|---|---|---|---|
| 2026-07-02 | `CFS` as a shape code ("cold-formed steel") | `SEC:` | **REJECTED** (Ruling R6, standard Part 3.1) | D-1 — a material/manufacturing category, not a cross-section topology | Informative `form_class` facet (`FOLDED_UNIFORM_T`, …) on shape-code entries |
| 2026-07-02 | `PIP` as a shape code ("pipe") | `SEC:` | **REJECTED** (standard Part 3.2) | D-1 — pipe is a designation system, not a geometry class | Geometry is `SEC:CHS`; pipe schedules map via `DSG-` designation records |
| 2026-07-02 | `TUB` as a shape code ("tube") | `SEC:` | **REJECTED** (standard Part 3.2) | D-1 — ambiguous; no single canonical parameter schema | Use `SEC:RHS` / `SEC:SHS` / `SEC:CHS` per actual profile |

Recurring proposal patterns that inherit these precedents without a new hearing:

- material or process categories as shape codes (the `CFS` precedent);
- designation systems or catalog naming conventions as shape codes (the `PIP` precedent);
- umbrella terms with no single canonical parameter schema as terminal codes (the `TUB` precedent; cf. `SUPERCLASS` status for legitimate rollups);
- codes encoding field-grade variation — finish, edge condition, gauge, counts (standard AP-7).
