# Phase 1/2 Explorer demo-alias deviations — open governance item

- **Proposal:** (no issue yet — this record documents a known, deliberate deviation)
- **Type:** erratum / dictionary alignment (future)
- **Decision:** **RESOLVED 2026-07-13** — [`DECISION-DEMO-ALIAS-001`](../docs/DEMO_ALIAS_RESOLUTION_DECISION.md): the three demo codes remain **demo-only** and never enter `SNAP-1.0.0`; no dictionary rows or registry records are created; Explorer re-alignment (option 1 below) is post-cut editorial; future reconsideration takes the normal governance path. Closes the G1 exit blocker. *(Originally DEFERRED 2026-07-03; superseded by the recorded decision.)*
- **Decided by:** bootstrap maintainer, 2026-07-03 (documented); resolved 2026-07-13 (recorded decision)
- **Method:** n/a (no dictionary rows created or changed)
- **Rules applied:** P5 (fields-first), N7/P8 (no silent re-meaning), Part 3.1 Rulings R3–R5, Part 3.2 statuses

## The deviation

The Phase 1 Explorer MVP specification requested demo codes that deviate from the `SNAP-1.0.0` seed dictionaries in `dictionaries/`:

| Explorer demo code | `SNAP-1.0.0` seed dictionaries | Nature of deviation |
|---|---|---|
| `SEC:ZED` (terminal) | `ZEE` = SUPERCLASS; terminal leaves `ZLP` / `ZUN` | Unregistered code used as a Z-family terminal |
| `SEC:HSS` (terminal) | `HSS` = SUPERCLASS (classifier-only); terminal leaves `RHS` / `SHS` / `CHS` | Superclass used as terminal, contrary to rule N6 / warning E-103 |
| `ROL:CHL` | Role is registered as `DKS` (deck support member) | Unregistered role code naming an existing role |

## Containment (why this is acceptable for a demo, temporarily)

- The Explorer's dictionaries are a separate demo subset pinned as `SNAP-0.1.0-DEMO`; the seed dictionaries are untouched.
- All three codes carry `status=DEMO` in `explorer/data/*.csv`, an amber badge + provenance note in the UI, `DEMO` status in `explorer/rules/question_nodes.csv`, and caveats in `explorer/README.md`.
- Nothing was changed silently; no published dictionary row was edited (N7/P8 respected).

## Required future resolution (Technical Committee)

One of:

1. **Align the Explorer to the seed dictionaries** — replace `ZED` with a lip-condition question resolving `ZLP`/`ZUN`; replace terminal `HSS` with an outline question resolving `RHS`/`SHS`/`CHS`; rename `CHL` → `DKS`. (Most consistent with the standard; recommended default.)
2. **Amend the seed dictionaries** via new-code proposals with the D-1/D-7 evidence gates — only if a real case exists for these codes (none is currently known; `ZED`/`CHL` would likely fail the "name the code that fails" test against `ZLP`/`ZUN`/`DKS`).
3. **Register the demo names as aliases** (`ALS-` records pointing at `ZLP`/`ZUN`, `DKS`) once an alias registry exists, and align the app per option 1.

Until resolved, the demo codes SHALL NOT appear in any registered record, snapshot export, or seed dictionary.
