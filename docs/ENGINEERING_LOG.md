# Engineering Log

**Append-only, dated record of repository-stewardship and registry-operations actions** — the executable-artifact trail behind the standards. It records *engineering and steward decisions*: creating registry artifacts, structural changes, snapshot mechanics, and the recorded decisions that authorize them under the bootstrap clause.

It is distinct from, and cross-links to:

- [proposals/](../proposals/) — taxonomy/dictionary **decision records** (what a code or rule *means*);
- [CHANGELOG.md](../CHANGELOG.md) — the per-snapshot summary of dictionary/standard changes (GOVERNANCE §5);
- `docs/architecture/decisions/` — ADRs for repo-level engineering *design* choices ([repository-structure](repository-structure.md) §1).

Entries are append-only and never edited in place (P8); a correction is a new entry. **Newest first.**

---

## 2026-07-11 — Status-semantics framing correction (doctrine alignment)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: interpretation of existing architecture under the bootstrap clause (GOVERNANCE §2); **no new architecture, governance, or doctrine document created.**

**Objective.** Correct the framing of `status` across the Batch-1 records and the registry READMEs so the repository consistently treats `status` as the **assigned registry state at the current lineage point**, not a temporary pre-snapshot publication flag. Prompted by this session's status-semantics doctrine review.

**Decision.** `status` = the record's **assigned registry state** ([Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §5). `RESERVED` is a substantive assigned state; because §8 gates `ACTIVE` to a snapshot release and §5 says "a record exists only from RESERVED onward," an activation-bound code's assigned state before its activating snapshot **is** `RESERVED` (→ `ACTIVE` at `SNAP-1.0.0` via the §5/§8 release transition). `SUPERCLASS`/`REJECTED` codes are **born in their assigned state**, not routed through `RESERVED` (§8 gates only `RESERVED → ACTIVE`).

**Effect — framing only, no values changed.** No frontmatter `status` value was altered (all six Batch-1 dictionary records remain `RESERVED`; the five prefixed namespace records and Domain remain `RESERVED`). The edits: (1) reframed each activation-bound record's Lifecycle block as one `status` field on a single `RESERVED → ACTIVE` trajectory read at two lineage points, and removed the competing "Recorded terminal status" field; (2) distinguished `SEC:SBR`'s **parked** `RESERVED` from the pending-activation `RESERVED`; (3) rewrote the `registry/dictionary/README.md` deferral of `SUPERCLASS`/`REJECTED` as a sequencing choice (born-in-assigned-state), not a doctrine blocker, and clarified §8 gates `RESERVED → ACTIVE` only; (4) removed the unsupported "(N5)" status-*authority* citation from the six namespace records (whether N5 governs namespaces is left open, not invented); (5) corrected `registry/README.md`'s "every record is `RESERVED`" over-generalization.

**Risk avoided.** A shadow "terminal status" model in which `status` means "published?" while the real state lives in a second field — which diverges from the governed CSV, cannot be machine-checked against the dictionary, and would force a mass status rewrite at every snapshot.

**Scope discipline.** No records created; no `status` values changed; no architecture, governance, standards, or Explorer files modified — only registry records, registry READMEs, this log, and CHANGELOG.

**Follow-up (not done here).** The Bootstrap Plan's language ("items 1–3 land `RESERVED` … activate together"; "SUPERCLASS/RESERVED/REJECTED rows … activated at the snapshot"; "activating everything") over-generalizes activation and conflicts with §5 ("such rows never activate"). An erratum aligning it with §5 / First 100 §9 **may be proposed separately**; it is not applied in this pass.

**Status left:** uncommitted, pending review.

---

## 2026-07-11 — Dictionary founding records, batch 1 (6 codes reserved)

**Roles:** Standards architect · Registry steward · Documentation maintainer · Release manager · Evidence custodian. Authority: the bootstrap clause (GOVERNANCE §2; [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §9.3).

### Actions

Seeded **batch 1 of the Category-B dictionary code records** ([registry/dictionary/](../registry/dictionary/)) — 6 representative records, one code per namespace plus one `RESERVED`-parked SEC code, each a verbatim, sourced restatement of its `dictionaries/*.csv` row:

| Record | Identifier | Recorded terminal status | Source CSV |
|---|---|---|---|
| `SEC-OCL.md` | `SEC:OCL` | `ACTIVE` | sec_codes.csv |
| `SEC-SBR.md` | `SEC:SBR` | `RESERVED` (parked) | sec_codes.csv |
| `ROL-COL.md` | `ROL:COL` | `ACTIVE` | rol_codes.csv |
| `ASM-WDK.md` | `ASM:WDK` | `ACTIVE` | asm_codes.csv |
| `FAM-SPR.md` | `FAM:SPR` | `ACTIVE` | fam_codes.csv |
| `CFG-DIM.md` | `CFG:DIM` | `ACTIVE` | cfg_groups.csv |

Updated [registry/dictionary/README.md](../registry/dictionary/README.md) to reflect partial population (6 of 86).

### Decision (the authorizing decision these records cite)

Acting under the bootstrap clause, the six dictionary code records are **reserved** (current status `RESERVED`, N5) as part of the substrate of `SNAP-1.0.0`. `RESERVED` is the correct pre-cut status: no snapshot has been cut, and nothing activates between snapshots ([Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §8). Each record documents its **recorded terminal status** from the governing CSV — the status the `SNAP-1.0.0` cut will confer (`ACTIVE` for the five active-destined codes; `RESERVED`-parked for `SEC:SBR`, which never activates). No record is activated by its creation.

**Scope of this batch (deliberately narrow):**

- **One record per code**; exact provenance restated from each CSV's *actual* columns (SEC: `form_class`/`maps_from`/`successor`; FAM: `domain`/`industry_anchor`; CFG: `example_fields`; ROL/ASM: `definition`/`successor`).
- **All-`RESERVED`.** The batch includes only codes whose *current* pre-cut status is unambiguously `RESERVED` — the active-destined codes and the parked `SEC:SBR`.
- **`SUPERCLASS` and `REJECTED` codes deferred.** For a `SUPERCLASS` rollup or a `REJECTED` burned string, a current status of `RESERVED` ("allocated, pending activation") is semantically wrong; they should be born in their terminal status. That born-in-terminal-status reading (First 100 Records Plan §8–§9) is flagged in [registry/dictionary/README.md](../registry/dictionary/README.md) and held for a later batch, to be confirmed before those records are created.

This batch does **not** ratify the full dictionaries, cut any snapshot, activate any record, adopt any `[Proposed]` mechanism, or create any GSID / component / assembly record.

### Scope discipline (verified)

- No performance, capacity, safety, or compliance value introduced.
- No dictionary CSV, standard, Explorer, or governance document modified; no new namespace, code, rule, lifecycle state, or governance body created.
- Records match their `dictionaries/*.csv` rows exactly.

### Files

- **Created (6):** `registry/dictionary/{SEC-OCL,SEC-SBR,ROL-COL,ASM-WDK,FAM-SPR,CFG-DIM}.md`
- **Modified (3):** `registry/dictionary/README.md`, `CHANGELOG.md`, `docs/ENGINEERING_LOG.md` (this entry).

**Status left:** uncommitted, pending review.

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
