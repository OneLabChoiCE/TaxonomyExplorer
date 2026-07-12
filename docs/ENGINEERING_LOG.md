# Engineering Log

**Append-only, dated record of repository-stewardship and registry-operations actions** — the executable-artifact trail behind the standards. It records *engineering and steward decisions*: creating registry artifacts, structural changes, snapshot mechanics, and the recorded decisions that authorize them under the bootstrap clause.

It is distinct from, and cross-links to:

- [proposals/](../proposals/) — taxonomy/dictionary **decision records** (what a code or rule *means*);
- [CHANGELOG.md](../CHANGELOG.md) — the per-snapshot summary of dictionary/standard changes (GOVERNANCE §5);
- `docs/architecture/decisions/` — ADRs for repo-level engineering *design* choices ([repository-structure](repository-structure.md) §1).

Entries are append-only and never edited in place (P8); a correction is a new entry. **Newest first.**

---

## 2026-07-11 — Registry artifacts stood up; six namespace founding records reserved

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause — the founding maintainer acts as Technical Committee and Registry Operator (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

### Actions

1. Created the founding record format [docs/FOUNDING_RECORD_TEMPLATE.md](FOUNDING_RECORD_TEMPLATE.md) — the minimal fill-in form instantiating the [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §4.1 public record format (seven blocks: identity, meaning, lifecycle, provenance, relationships, reproducibility, disclaimer). No new architecture or governance doctrine — it is the executable form of an already-specified record format.
2. Created the registry directory structure `registry/{namespace,status,dictionary,gsid,component,assembly}/`, each with a README stating its record type, source category ([First 100 Records Plan](FIRST_100_RECORDS_PLAN.md) §1), owner (Registry Operator only — GOVERNANCE §8), and population gate. [registry/README.md](../registry/README.md) records that this per-record-type layout **refines** repository-structure.md's `registry/` sketch to record granularity (the export/`snapshots/` views remain that document's tabular half) and introduces no new registry architecture.
3. **Reserved the six namespace founding records** (Category A) under [registry/namespace/](../registry/namespace/): the `SEC:`, `FAM:`, `ASM:`, `ROL:`, `CFG:` namespaces and the bare **Domain** namespace. Each is a verbatim, sourced restatement of its row in [dictionaries/namespaces.csv](../dictionaries/namespaces.csv).

### Decision (the authorizing decision these records cite)

Acting under the bootstrap clause, the six namespace records are hereby **reserved** (status `RESERVED`, N5) as the substrate of `SNAP-1.0.0`. `RESERVED` is the correct pre-cut status: no snapshot has been cut, and nothing activates between snapshots ([Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §8). Activation to `ACTIVE` occurs only at the `SNAP-1.0.0` cut ([First 100 Records Plan](FIRST_100_RECORDS_PLAN.md) §9), pending its readiness checklist (§10).

This decision **reserves the namespace layer only** — the least-gated, zero-permission part of the cohort (First 100 Records Plan §5). It explicitly does **not**:

- ratify the full seed dictionaries (Categories A + B together),
- cut any snapshot,
- adopt the `[Proposed]` Registry Architecture §5 object-record lifecycle (still an open gate — First 100 Records Plan §6 item 6),
- resolve the demo aliases, publish canonicalization rules, seed configuration templates, or finalize the `LICENSE`.

Those remain open gates in the First 100 Records Plan §6 / §10 checklist.

### Scope discipline (verified)

- No performance, capacity, safety, or compliance value introduced in any artifact (Registry Architecture invariant 8; the permanent zero).
- No Explorer, dictionary CSV, or standard document modified.
- No new namespace, code, rule, lifecycle state, or governance body created; namespace records match `dictionaries/namespaces.csv` exactly (six rows: Domain, `SEC:`, `FAM:`, `ASM:`, `ROL:`, `CFG:`).
- The `[Proposed]` provenance-grade scheme is deliberately not applied (First 100 Records Plan §6).

### Files

- **Created:** `docs/FOUNDING_RECORD_TEMPLATE.md`, `docs/ENGINEERING_LOG.md` (this file); `registry/README.md`; `registry/{namespace,status,dictionary,gsid,component,assembly}/README.md` (6); `registry/namespace/{DOMAIN,SEC,FAM,ASM,ROL,CFG}.md` (6).
- **Modified:** `CHANGELOG.md`, `README.md` (contents/status index); `docs/FIRST_100_RECORDS_PLAN.md` (in-passing erratum — see below).

### In-passing correction (Evidence custodian)

Adversarial verification of the founding cohort surfaced a pre-existing off-by-one in [FIRST_100_RECORDS_PLAN.md](FIRST_100_RECORDS_PLAN.md): the ASM superclass `DCK` (deck rollup, `asm_codes.csv`) was omitted from the activation tallies. Corrected the enumerations — **4 → 5** `SUPERCLASS`, **≈99 → ≈98** activating at the cut, **~83 → ~82** of the A+B set, and **9 → 10** non-`ACTIVE` dictionary rows (9 `SEC` + ASM `DCK`). No cohort total changes (108 registered is unaffected — `DCK`'s record was always counted; only its *status* was mis-tallied). A documentation erratum, not a governance change.

**Status left:** uncommitted, pending review.
