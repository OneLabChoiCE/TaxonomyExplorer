# Proposal: <short title — e.g. "New configuration template field: deck edge reinforcement">

> **How to use this template:** copy it into a new GitHub issue titled `[Taxonomy proposal] <short title>`, fill every field, and delete the guidance quotes. This template covers structural taxonomy changes: configuration templates and fields, classification/decision rules, hierarchy rules, and identity-layer definitions. For plain code additions/deprecations use [TEMPLATE-code-change.md](TEMPLATE-code-change.md); for external mappings use [TEMPLATE-crosswalk-change.md](TEMPLATE-crosswalk-change.md). Process reference: [docs/proposal-workflow.md](../docs/proposal-workflow.md).

## 1. Administrative

- **Proposer:** <name>
- **Affiliation and commercial interest:** <employer; disclose plainly if affected>
- **Date:** <YYYY-MM-DD>
- **Change class** (pick one — this decides who reviews it and how, per [GOVERNANCE.md](../GOVERNANCE.md) §3):
  - `TEMPLATE_FIELD` — add/change a configuration-template field (lightweight if informative; code-change class if identity-bearing)
  - `ENUM_TOKEN` — new controlled value in a `CFG:` group (lightweight)
  - `NORMATIVE_RULE` — change to a decision rule (D-1…D-9, G-3), hierarchy rule (H1–H6), namespace rule (N1–N7), principle (P1–P9), or identity-layer definition — **two-thirds supermajority + 30-day public comment**
- **Documents affected:** <unified draft part/§ + split standard (GSID / MH Taxonomy / Code Dictionary)>

## 2. The change in one paragraph

<What should the standard or template say after this proposal that it does not say now?>

## 3. Rule basis and boundary check (required)

- **Rules cited:** <which existing rules justify or govern this change — e.g., "new identity-bearing field per §4.7; hashes change, so this is a Configuration Template version bump">
- **Constitutional invariants touched?** <GSID 2D-only boundary (P2), determinism (P7), immutability (P8), namespace separation (P6), fields-first (P5) — if yes, say so explicitly; boundary-weakening proposals are presumptively rejected>

## 4. For `TEMPLATE_FIELD` / `ENUM_TOKEN`

- **Template / group:** <e.g., `ASM:WDK` template v1 / `CFG:EDG`>
- **Field definition:** name, units, controlled values (`UPPER_SNAKE` tokens)
- **Identity-bearing or informative?** <declare and justify — identity-bearing fields change ConfigurationID hashing, so adding one is a template **version** change, never an edit of the published version>
- **The physical condition it captures:** <and why no existing field/token covers it>

## 5. For `NORMATIVE_RULE`

- **Exact text change:** current wording → proposed wording (quote both)
- **Why the current rule fails:** <a real case the rule handles wrongly, not a preference>
- **What breaks:** every record, tool, or worked example that depends on current behavior

## 6. Worked example (required)

> Show one concrete object classified **before and after** the change. If nothing classifies differently, explain what the change actually does.

<example>

## 7. Backward-compatibility statement (required)

- Published meanings edited in place: **none** (N7/P8)
- Template versioning: <old version stays resolvable; new version from snapshot X>
- Migration notes needed: yes / no — <MAJOR-snapshot rule changes require them>

## 8. Downstream effects

- Dictionaries: <rows added/deprecated, if any>
- Standards text: <sections to update, in which document>
- Explorer rule tables / golden examples: <described only — Explorer changes follow the decision>
- CHANGELOG: <one-line summary for the activating snapshot>

## 9. Checklist before submitting

- [ ] Change class picked honestly (supermajority path not dodged by mislabeling)
- [ ] Affiliation disclosed
- [ ] Identity-bearing vs informative declared (for fields)
- [ ] Before/after worked example included
- [ ] No published row or meaning edited in place
- [ ] REJECTIONS.md and closed proposals checked
