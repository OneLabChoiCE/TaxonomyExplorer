# Demo-Alias Resolution Decision

**Decision ID:** `DECISION-DEMO-ALIAS-001`
**Status:** Recorded — 2026-07-13, under the bootstrap clause (GOVERNANCE §2; the founding maintainer acting as Technical Committee, [Registry Architecture §9.3](SECTIONHUB_REGISTRY_ARCHITECTURE.md)).
**Resolves:** the deferred open governance item [proposals/2026-07-03-phase1-demo-alias-deviations.md](../proposals/2026-07-03-phase1-demo-alias-deviations.md) ("Decision: DEFERRED — documented, not yet decided").
**Closes:** the `SNAP-1.0.0` readiness gate "Demo aliases resolved by recorded decision; zero `DEMO`-status content anywhere in the cohort" ([First 100 Records Plan §6 item 3, §10](FIRST_100_RECORDS_PLAN.md); the G1 exit criterion, RA-11).
**Type:** Narrow containment decision. Creates no dictionary row and no registry record.

---

## 1. Objective

Resolve the three Phase-1/2 Explorer demo-code deviations for the purpose of the `SNAP-1.0.0` founding cut, by confirming — as a recorded decision — that they are **demo-only deviations that never enter the founding cohort**.

## 2. The three deviations (from the resolved proposal)

| Explorer demo code | `SNAP-1.0.0` seed dictionaries | Nature |
|---|---|---|
| `SEC:ZED` (terminal) | `ZEE` = `SUPERCLASS`; terminal leaves `ZLP` / `ZUN` | unregistered code used as a Z-family terminal |
| `SEC:HSS` (terminal) | `HSS` = `SUPERCLASS` (classifier-only); terminal leaves `RHS` / `SHS` / `CHS` | superclass used as terminal, contrary to N6 / `E-103` |
| `ROL:CHL` | role is registered as `DKS` (deck-support member) | unregistered role code naming an existing role |

## 3. Decision

1. **No `DEMO`-status alias, code, or record enters `SNAP-1.0.0`.** `SEC:ZED`, terminal `SEC:HSS`, and `ROL:CHL` remain **historical/demo deviations only**, confined to the Explorer's separately-pinned `SNAP-0.1.0-DEMO` subset (`explorer/data/*.csv`), where they already carry `status=DEMO`, an amber UI badge, and provenance caveats.
2. **No dictionary rows and no registry records are created** for them. The seed dictionaries stand as published: `ZEE`/`HSS` are `SUPERCLASS`, the terminal leaves are `ZLP`/`ZUN` and `RHS`/`SHS`/`CHS`, and the deck-support role is `DKS`. No published row is edited (N7 / P8 respected).
3. **The containment is permanent for the founding cut**, not merely "temporary for a demo": the demo codes SHALL NOT appear in any registered record, snapshot export, or seed dictionary of `SNAP-1.0.0` — reaffirming the standing rule stated at the foot of the resolved proposal.
4. **Future reconsideration requires the normal governance path.** Should a real case ever arise (a genuine `ZED`/`CHL` distinction, or an alias registry), it enters through the standard new-code/alias proposal with its D-1/D-7 evidence gates and TC decision — not through this decision and not through the app. None is currently known; `ZED`/`CHL` would likely fail the "name the code that fails" test against `ZLP`/`ZUN`/`DKS`.
5. **Explorer re-alignment is post-cut editorial, not a cut blocker.** Aligning the Explorer to the ratified dictionaries — option 1 of the resolved proposal (a lip-condition question resolving `ZLP`/`ZUN`; an outline question resolving `RHS`/`SHS`/`CHS`; `CHL` → `DKS`) — is the recommended default and is scheduled as post-cut editorial work ([First 100 Records Plan §8 step 8](FIRST_100_RECORDS_PLAN.md)). Because the founding cohort and any `SNAP-1.0.0` export **already contain zero demo codes**, this alignment is not required before the cut.

## 4. Why this closes the gate

The readiness criterion asks for two things: (a) **zero `DEMO`-status content in the cohort** — already true and verified (the 108 seeded records and the seed dictionaries contain no `DEMO`-status row), and (b) the deviations **resolved by recorded decision** — this decision. Options 2 (amend dictionaries) and 3 (register alias records) of the resolved proposal are **declined** for the founding cohort: no evidence case exists for new codes, and no alias registry exists yet. The G1 exit blocker is thereby closed without creating, activating, or renaming anything.

## 5. Scope / boundaries

This decision does **not**: cut `SNAP-1.0.0`; activate any record; create a `DEMO` record, dictionary row, or alias record; modify any registry record, standard, or governed value; weaken any code-status rule (it reaffirms N6/N7/`E-103`); or authorize the demo codes anywhere outside the clearly-labeled `SNAP-0.1.0-DEMO` Explorer subset. It changes no LICENSE and makes no claim about the Registry Architecture §5 lifecycle adoption, which remains a separate open blocker.

---

*Related: [proposals/2026-07-03-phase1-demo-alias-deviations.md](../proposals/2026-07-03-phase1-demo-alias-deviations.md) · [First 100 Records Plan §6 item 3, §8 step 8, §10](FIRST_100_RECORDS_PLAN.md) · [Code Dictionary Standard](../standards/Code_Dictionary_Standard.md) (N6/N7, `E-103`) · [Registry Architecture §9.3](SECTIONHUB_REGISTRY_ARCHITECTURE.md) (RA-11) · [Engineering log](ENGINEERING_LOG.md)*
