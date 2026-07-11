# Demo Scenario Outputs

Machine-readable companions to [docs/demo-scenarios.md](../../docs/demo-scenarios.md). Every file carries a leading `_scenario` metadata block with one of two statuses:

- **`EXPLORER_REPRODUCIBLE`** (scenarios 1, 2, 4) — matches the public Explorer's Phase-2 output envelope; replay the listed `explorer_answers` in [`explorer/`](../../explorer/) and remove the `_scenario` block to compare byte-for-byte.
- **`ILLUSTRATIVE_DATA_MODEL`** (scenarios 3, 5, 6) — shows the registry data model from the [standards](../../standards/Material_Handling_Taxonomy_Standard.md) and [strategic architecture](../../SECTIONHUB_STRATEGIC_ARCHITECTURE.md) ahead of current tooling. **All identifiers are illustrative**; scenario 5's `FLR` code is illustrative only and is not in any dictionary.

Nothing here states or implies performance approval: scenario 6 exists specifically to show identity attestation kept separate from capacity, safety, and conformance judgments.
