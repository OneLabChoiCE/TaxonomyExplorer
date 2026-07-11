# Proposal Workflow

How taxonomy, dictionary, and mapping changes are proposed, decided, recorded, and released. This is the operational walkthrough of the rules in [GOVERNANCE.md](../GOVERNANCE.md) (which is normative and wins on any conflict) and the evidence gates in [CONTRIBUTING.md](../CONTRIBUTING.md). It exists so that an outside engineer or manufacturer can contribute through the public record — no private email required.

## 1. The lifecycle

```
DRAFT ──► TRIAGED ──► EVIDENCE-COMPLETE ──► REVIEW ──► ┬ ACCEPTED ──► RESERVED row ──► ACTIVE at snapshot
 (issue      (monthly;    (all gate items       (per     ├ REJECTED ──► REJECTIONS.md (binding precedent)
  opened)     gate check)   present)             class)  └ DEFERRED ──► parked; no dictionary row
```

Nothing becomes citable between snapshot releases, and nothing published is ever edited in place. Those two properties are what make the registry audit-safe, and every step below serves them.

## 2. How to open a proposal

1. Pick the template that matches your change and copy it into a **new GitHub issue**:
   - [proposals/TEMPLATE-code-change.md](../proposals/TEMPLATE-code-change.md) — add, deprecate, or status-change a code in any namespace; alias records.
   - [proposals/TEMPLATE-taxonomy-change.md](../proposals/TEMPLATE-taxonomy-change.md) — configuration-template fields, enum tokens, classification/decision-rule and other normative changes.
   - [proposals/TEMPLATE-crosswalk-change.md](../proposals/TEMPLATE-crosswalk-change.md) — designation-system imports (AISC, AISI, EN, GB/T, JIS, AS/NZS, manufacturer systems) and external-classification crosswalks (GS1, UNSPSC, ECLASS, ETIM, OmniClass, MasterFormat).
2. Fill **every** field. The templates encode the evidence gates; an empty field is the reason proposals get returned.
3. One proposal per issue. Bundles are split at triage.
4. Do **not** open a pull request yet. Dictionary and standards PRs are accepted only after a recorded decision (and, for external contributors, only once the repository `LICENSE` is finalized — see CONTRIBUTING.md).

## 3. Evidence required (summary — the templates are authoritative)

| Change | Gate |
|---|---|
| New `SEC:` code | Rule **D-1**: topology/parameter-schema case; name the closest code and why it fails; ≥2 independent real-world instances |
| New `FAM:` code | Rule **D-7**: industry-standard-level scope distinction, not a product line |
| New `ROL:` / `ASM:` code | Functional distinctness; ≥2 real uses |
| Template field / enum token | Physical condition it captures; identity-bearing vs informative declared |
| Normative rule change | Exact before/after text; a real failing case; what breaks |
| DSG import / XMAP crosswalk | Edition named; license/republication analysis; typed mappings; ≥3 exact sample records |
| Deprecation / erratum | Defect + successor; never an in-place edit |

Universal requirements: affiliation and commercial-interest disclosure; a [REJECTIONS.md](../REJECTIONS.md) precedent check (rejections bind unless you bring materially new evidence); and the **fields-first presumption** — every proposal is presumed to be a configuration field or enum token until proven otherwise (P5).

## 4. Decision categories and who decides

These are the [GOVERNANCE.md](../GOVERNANCE.md) §3 classes, unchanged:

| Category | Examples | Decided by | Method / cadence |
|---|---|---|---|
| Editorial | Docs, typos, non-normative text | Maintainer | Lazy consensus, 72 h |
| Lightweight dictionary data | Enum tokens, informative template fields | Technical Committee | Lazy consensus, 14 days |
| Code changes | New/deprecated codes, identity-bearing fields | Technical Committee | Recorded vote; quarterly |
| Designation-system imports | DSG tables | TC + Registry Operator | Recorded vote + registry validation; quarterly |
| Normative rule changes | Decision rules, namespaces, boundaries, GOVERNANCE itself | Technical Committee | Two-thirds supermajority + 30-day public comment |
| Snapshot releases | Cutting `SNAP-x.y.z` | Registry Operator | Quarterly release train |

**Bootstrap note (current state):** until Roadmap Phase 7, the founding maintainer acts as the Technical Committee and Registry Operator under GOVERNANCE.md §2 — decisions follow exactly the same gates, methods, and records, so the audit trail is continuous when the full TC is seated. Industry Advisory comments, when they exist, are recorded with the decision.

**Roles in review:** the **proposer** supplies evidence and answers questions; **maintainers** run triage (gate check only — they don't judge merit); the **Technical Committee** decides on the merits, citing rules; the **Registry Operator** validates imports and executes issuance exactly as decided; anyone may comment on the public issue.

## 5. Outcomes

- **ACCEPTED.** The decision is recorded as one file in [proposals/](../proposals/) (format: [proposals/README.md](../proposals/README.md)). Dictionary effects land as `RESERVED` rows citing the proposal. The change becomes `ACTIVE` — citable, usable in registered records — only at the next snapshot release.
- **REJECTED.** Recorded in the decision file and summarized in [REJECTIONS.md](../REJECTIONS.md) with the rule it failed. Rejections are **binding precedent**: the same proposal without materially new evidence is closed at triage citing the precedent. This is how the same argument is never had twice.
- **DEFERRED.** Parked as a proposal state with **no dictionary row** — used for deadlock, missing prerequisites, or decisions that belong to a later governance era. A deferral names its revival condition. Worked example: [proposals/2026-07-03-phase1-demo-alias-deviations.md](../proposals/2026-07-03-phase1-demo-alias-deviations.md) (deferred with three explicit resolution options; still open — this workflow document does not resolve it).

## 6. Deprecation and backward compatibility

- Published codes, identifiers, and meanings are **never deleted, reused, re-meant, or edited in place** (rules N7/P8). The only correction mechanism is **deprecation-with-successor**: status `DEPRECATED`, a successor pointer, effective at a named snapshot.
- Old snapshots remain permanently downloadable; data pinned to them stays valid forever.
- Identity-bearing template changes are **version bumps** (a new template version from a named snapshot), never edits of the published version — otherwise ConfigurationID hashes would silently change.
- Anything requiring a breaking rule change rides a MAJOR snapshot with migration notes.

## 7. What a decision updates (propagation)

An accepted decision produces, in order:

1. **Decision record** — one file in `proposals/` naming the rules applied, the vote/method, and the dictionary effect.
2. **Dictionary rows** — `RESERVED` rows in the affected `dictionaries/*.csv`, each citing the proposal (a machine-checked pre-release gate).
3. **Standards text** — the owning document is updated: `SEC:` matters in [standards/GSID_2D_Standard.md](../standards/GSID_2D_Standard.md); product-layer matters in [standards/Material_Handling_Taxonomy_Standard.md](../standards/Material_Handling_Taxonomy_Standard.md); namespace/lifecycle mechanics in [standards/Code_Dictionary_Standard.md](../standards/Code_Dictionary_Standard.md). While the unified v0.1 draft remains the canonical document of record, it is updated in the same commit.
4. **Explorer rule tables** — `explorer/rules/question_nodes.csv` and related data change **after and because of** the decision, never before it; the decision record describes the expected rule-table effect.
5. **CHANGELOG.md** — one line under the activating snapshot.
6. **At the snapshot release** — `RESERVED` → `ACTIVE`, and the release passes the GOVERNANCE.md §5 machine gates (unique codes, no edits to published rows, status-transition rules, `UPPER_SNAKE` tokens, proposal citations).

Rejected decisions update only items 1 and REJECTIONS.md. Deferred decisions update only item 1.

## 8. Practical expectations (early-repo honesty)

Triage targets monthly and decisions target quarterly, but this is currently a bootstrap-era project — if cadence slips, the public record (issue states and `proposals/`) is still the single source of truth about where a proposal stands. If a template doesn't fit your change, open the issue anyway using the closest one and say what didn't fit: template gaps are Editorial-class fixes and easy to make.
