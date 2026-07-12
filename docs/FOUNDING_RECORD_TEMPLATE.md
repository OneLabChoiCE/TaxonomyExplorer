# Founding Record Template

**The minimal, standards-aligned format for a single registry record — the fill-in form that instantiates the [Registry Architecture](SECTIONHUB_REGISTRY_ARCHITECTURE.md) §4.1 public record format.**

**Status:** format specification, 2026-07-11. This template **creates no new architecture and no new governance doctrine.** It is the executable form of a record format the constitution already defines: every field below traces to an existing normative source (cited inline), and no field is added for a hypothetical future use. Where a record type carries no value for a block, the block states the present fact ("none at issuance"); it never reserves a speculative slot.

Registry records live under [`registry/`](../registry/) — one file per record, append-only, one record per identifier (Registry Architecture §2, §3). The current view a reader sees is derived from the record's events, never by overwriting (§3).

---

## 1. Design constraints

Five rules, in priority order — they are why the schema is shaped the way it is:

1. **Minimal.** The smallest field set that satisfies the seven blocks of Registry Architecture §4.1. Nothing more.
2. **Maximally traceable.** Every record cites the standard that gives it meaning and the recorded decision that authorized it. A stranger can follow both without asking anyone.
3. **Maximally auditable.** For registered records, the record restates its governed source (e.g., a `dictionaries/*.csv` row) verbatim and is checkable by exact match. For derived records, it carries enough to recompute the identifier from published rules (P9).
4. **No speculative fields.** No `expiry`, no empty `successor`, no `provenance_grade`, no placeholder for data a founding record does not yet hold. Empty blocks state "none at issuance."
5. **No performance data, ever.** No load, capacity, safety, or compliance value in any field (Registry Architecture invariant 8; refusal rule 3). This is the permanent zero.

---

## 2. The schema

A record is a Markdown file with a small YAML frontmatter (the machine-readable core) followed by seven prose blocks that mirror **Registry Architecture §4.1** one-for-one.

### 2.1 Frontmatter — the machine core

```yaml
---
identifier: ""            # the record's identity string — see §3.1
record_type: ""           # namespace | dictionary_code | gsid | component | assembly | status
name: ""                  # human name (namespaces, codes); omit for object records that use `subject`
status: RESERVED          # N5 status (namespace/code records) or RA §5 object state; at founding: RESERVED
born_snapshot: SNAP-1.0.0 # the snapshot that first activates this record (§8)
governed_by: ""           # the normative document that defines this record's meaning
authorizing_decision: ""  # the recorded decision that reserved/issued this record (log or proposal reference)
---
```

Seven fields. Object records (gsid/component/assembly) additionally use `subject:` in place of `name:` and add `derived_id:` for their CGID/ConfigurationID companion (§4). No other fields are permitted without a normative change to this template.

### 2.2 Body — the seven blocks (Registry Architecture §4.1)

| # | Block | What it holds | Source |
|---|---|---|---|
| 1 | **Identity** | identifier; record type; name/subject; namespace-qualified codes | §4.1.1 |
| 2 | **Meaning** | the definition or canonical values as published; for derived IDs, the derivation inputs + rules version | §4.1.2 |
| 3 | **Lifecycle** | current status; the full dated event history, each event citing its authority and decision record | §4.1.3 |
| 4 | **Provenance** | who decided/submitted (attribution as disclosed); source + license. Provenance *grade* is `[Proposed]` and **omitted** in founding records | §4.1.4 |
| 5 | **Relationships** | members/contents; successor/predecessor; crosswalks; aliases; evidence — present facts only | §4.1.5 |
| 6 | **Reproducibility** | snapshot of birth; snapshot the current view is rendered from; for derived IDs, how to recompute | §4.1.6 |
| 7 | **Disclaimer** | identity and traceability only — no performance, safety, or compliance representation | §4.1.7 |

Blocks 4 (grade) and the `[Proposed]` mechanisms are deliberately thin: the founding cohort takes exactly one `[Proposed]` dependency (the §5 object-record lifecycle, adopted before the cut) and no others (First 100 Records Plan §6).

---

## 3. Field definitions

### 3.1 `identifier`

The record's own identity string, exactly as the standard forms it:

| Record type | `identifier` form | Example | Normative home |
|---|---|---|---|
| `namespace` | the namespace prefix (or "bare — unprefixed" for the Domain namespace) | `SEC:` | namespaces.csv; §2 |
| `dictionary_code` | the namespace-qualified code | `SEC:OCL` | GSID / MH Taxonomy Standard |
| `gsid` | the registered serial | `GS-000001` | GSID Standard §4 |
| `component` | the registered serial | `CMP-000001` | MH Taxonomy Standard §4 |
| `assembly` | the registered serial | `ASP-000001` | MH Taxonomy Standard §4 |
| `status` | the status token | `RESERVED` | Code Dictionary Standard N5; RA §5 |

Serials are opaque and issued by deterministic procedure — never semantic (RA-3, AP-10). The first geometry registered is `GS-000001`; illustrative IDs in the standards (e.g. `GS-004217`) are placeholders, reconciled post-cut (First 100 Records Plan §4).

### 3.2 `status`

At founding — **before any snapshot is cut** — every record is `RESERVED`: allocated by a recorded decision, pending activation (Registry Architecture §5). Activation to `ACTIVE` happens **only at a snapshot release** (§8); the `SNAP-1.0.0` cut transitions the cohort to its recorded terminal statuses at once (First 100 Records Plan §9). Namespace and dictionary-code records use the N5 status set (`ACTIVE` / `SUPERCLASS` / `RESERVED` / `DEPRECATED` / `REJECTED`); object records (gsid/component/assembly) use the Registry Architecture §5 states — whose `RESERVED → ACTIVE` transition is `[Proposed]` and must be adopted before the cut (First 100 Records Plan §6 item 6).

### 3.3 `authorizing_decision`

The recorded decision that reserved or issued the record — the traceability anchor. Points to a real, dated entry: a [proposals/](../proposals/) decision record, or a [docs/ENGINEERING_LOG.md](ENGINEERING_LOG.md) entry for a steward action under the bootstrap clause (GOVERNANCE §2). A record with no authorizing decision is not a registry record (Registry Architecture §5: a record exists only from `RESERVED` onward, entered by an accepted decision).

---

## 4. Record-type variants

The seven blocks are constant; how thick each is depends on the record type.

- **`namespace` (Category A):** thin. No derivation, no crosswalks at founding. The Meaning block restates the `namespaces.csv` row; the Relationships block lists the namespace's member codes. Reference instance: [registry/namespace/SEC.md](../registry/namespace/SEC.md).
- **`dictionary_code` (Category B):** the Meaning block restates the code's `*_codes.csv` row (definition, form class, mappings); Lifecycle carries the code's N5 status, including `SUPERCLASS` / `RESERVED` / `REJECTED` rows whose records carry precedent even though they never activate.
- **`gsid` (Category D):** adds `subject:` (the section + canonical dimensions) and `derived_id:` (the `CG1-…` companion). The Meaning block carries the canonical parameter values and canonicalization rules version; the Reproducibility block gives enough to recompute the CGID from published rules (P9).
- **`component` / `assembly` (Categories E / F):** add `subject:` and `derived_id:` (the `CF1-…` ConfigurationID). Meaning carries the bound template version + identity-bearing field values; Reproducibility gives the recompute path. These reference their Category-C templates (in `templates/`, not `registry/`) and Category-D geometries.
- **`status`:** a reference record defining one lifecycle status token, pointing to its normative home (N5 or RA §5) — **not populated at founding** (the object-record lifecycle is `[Proposed]` until adopted).

---

## 5. Fill-in skeleton

```markdown
---
identifier: ""
record_type: ""
name: ""
status: RESERVED
born_snapshot: SNAP-1.0.0
governed_by: ""
authorizing_decision: ""
---

# <record type> record — `<identifier>` (<name>)

*Founding registry record. Format: [FOUNDING_RECORD_TEMPLATE](../../docs/FOUNDING_RECORD_TEMPLATE.md). Category <X> of the [First 100 Records Plan](../../docs/FIRST_100_RECORDS_PLAN.md).*

## 1. Identity
- **Identifier:** …
- **Record type:** …
- **Name / subject:** …

## 2. Meaning
- … (the published definition or canonical values; for derived IDs, inputs + rules version)

## 3. Lifecycle
- **Current status:** `RESERVED` — allocated, pending activation at the `SNAP-1.0.0` cut (Registry Architecture §8).
- **Event history:**
  - *Reserved* — <date>, <authority>; authorizing decision: <reference>.
- **Next transition:** `RESERVED → ACTIVE` at the `SNAP-1.0.0` release (First 100 Records Plan §9).

## 4. Provenance
- **Decided by:** …
- **Source:** …
- **License:** repository `LICENSE` not yet finalized; no license granted.

## 5. Relationships
- **Members / contents / references:** …
- **Predecessor / successor:** none (first issuance).
- **Crosswalks / aliases:** none at issuance.

## 6. Reproducibility
- **Snapshot of birth:** `SNAP-1.0.0` (pending cut).
- **Current view rendered from:** pre-release (R0 — files-as-registry, no snapshot cut).
- **Verify:** … (exact match to governed source, or recompute path for derived IDs)

## 7. Disclaimer
Identity and traceability only. No performance, load-capacity, safety, or compliance representation (Registry Architecture invariant 8).
```

---

*Related: [Registry Architecture §4](SECTIONHUB_REGISTRY_ARCHITECTURE.md) (public record format) · [First 100 Records Plan](FIRST_100_RECORDS_PLAN.md) · [Code Dictionary Standard](../standards/Code_Dictionary_Standard.md) (N5 statuses) · [GOVERNANCE.md](../GOVERNANCE.md) · [Repository structure](repository-structure.md) · [registry/](../registry/)*
