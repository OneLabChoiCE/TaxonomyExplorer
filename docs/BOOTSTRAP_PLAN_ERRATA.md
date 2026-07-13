# Bootstrap Plan — Errata

**Status:** Erratum note, recorded 2026-07-13, under the bootstrap clause (GOVERNANCE §2). **Documentation-currency only** — this note corrects no registry record and changes no governed data; it records that a later planning document supersedes an earlier sketch on three numeric/semantic points.

---

## What this corrects

The [Bootstrap Plan](SECTIONHUB_BOOTSTRAP_PLAN.md) §1 ("The first ~110 records") is an early **sketch**. The [First 100 Records Plan](FIRST_100_RECORDS_PLAN.md) later refined that sketch into the **exact** founding cohort (its own §1 note: "Category C is a refinement of the Bootstrap sketch"). Where the two differ, **the First 100 Records Plan governs**, and it is what the seeded `SNAP-1.0.0` cohort was built against. The Bootstrap Plan is retained unchanged as **useful historical planning context** (curation-vs-import strategy, the 500-record tranches, the one-year roadmap) — it is not rewritten.

| Point | Bootstrap Plan sketch (§1 / Q2) | First 100 Records Plan (governs) | Reality in the repo |
|---|---|---|---|
| **Founding cohort count** | "the first **~110** records" (≈92 dictionary + ≈10 GSID + ≈5 product) | **exactly 108** registered (A 6 + B 86 + C 4 + D 8 + E 3 + F 1), +12 derived companions (§1) | 108 records seeded 2026-07-12 |
| **Template count** | gate item 2 names **three** seed templates (`ASM-WDK.v1`, `ROL-COL.v1`, `ROL-DKS.v1`) | **four** — adds `ROL-MSH.v1` as its own Category C, because the wire deck's mesh panel is a `ROL:MSH` component needing a registered mesh-role template (§2, explicit) | 4 templates in [`templates/`](../templates/) |
| **Activation semantics** | Q2 row: cut `SNAP-1.0.0` "**activating everything**" | **not** everything: ≈98 records activate; **10** non-`ACTIVE` dictionary rows take terminal statuses — 5 `SUPERCLASS`, 2 `RESERVED`-parked, 3 `REJECTED` (which never activate — activating a burned string would breach N7 / RA-2) (§9) | statuses recorded per-record; the cut is deferred |

## What this does **not** do

- It does **not** rewrite the Bootstrap Plan body — a one-line pointer banner is added at its head directing readers here; the planning content is untouched.
- It creates or changes **no registry record**, dictionary row, template, standard, or governed value.
- It does **not** cut `SNAP-1.0.0`, adopt any lifecycle, or activate anything.
- It asserts no new count as final beyond what the First 100 Records Plan already states; the founder may still tune Category D within that plan's stated elasticity (§1 note) without touching this erratum.

## Scope note

The three points above are the only substantive Bootstrap-vs-First-100 divergences that affect the cohort. Everything else in the Bootstrap Plan (its §2 tranches, §3–§12 strategy and roadmap) sits at a horizon beyond `SNAP-1.0.0` and is not in tension with the founding cohort.

---

*Related: [Bootstrap Plan](SECTIONHUB_BOOTSTRAP_PLAN.md) · [First 100 Records Plan §1–§2, §9](FIRST_100_RECORDS_PLAN.md) · [Engineering log](ENGINEERING_LOG.md) · [GOVERNANCE.md](../GOVERNANCE.md)*
