# Proposal: <short title — e.g. "New SEC code for closed tri-cell profile">

> **How to use this template:** copy it into a new GitHub issue titled `[Code proposal] <short title>`, fill every field, and delete the guidance quotes. Proposals with empty required fields are returned at triage with the missing item named — nothing personal, it's rule N5's paper trail. Process reference: [docs/proposal-workflow.md](../docs/proposal-workflow.md).

## 1. Administrative

- **Proposer:** <name>
- **Affiliation and commercial interest:** <employer; state plainly if your or your employer's products are affected — disclosure is required, undisclosed advocacy is a conduct violation>
- **Date:** <YYYY-MM-DD>
- **Proposal type:** `NEW_CODE` | `DEPRECATION` | `STATUS_CHANGE` | `ALIAS_RECORD`
- **Namespace:** `SEC:` | `ROL:` | `ASM:` | `FAM:` | `CFG:`
- **Proposed / affected code:** <3-char uppercase alpha, unique within namespace>

## 2. The change in one paragraph

<What should the dictionary say after this proposal that it does not say now?>

## 3. The fields-first hurdle (required for `NEW_CODE`)

> Presumption P5: every variation is a configuration field or enum token until proven otherwise. Your proposal must overcome this.

- **Which existing code fails:** <name the closest existing code>
- **Why it fails:** <for `SEC:` — show the candidate topology cannot be described by that code's canonical parameter schema, nor by a compatible schema extension (rule D-1); for `FAM:` — show a market/system scope distinction recognized at industry-standard level (rule D-7); for `ROL:`/`ASM:` — show a functional role / assemblage kind no existing code covers>
- **Why it is not a field or enum token:** <one honest paragraph>

## 4. Evidence

- **For `SEC:`:** at least **two independent real-world instances** (different manufacturers or standards), with drawings, photos, or published tables. <attach/link>
- **For `FAM:`:** the industry-standard scope anchor (e.g., a distinct RMI/SMA specification scope). <cite>
- **For `ROL:`/`ASM:`:** at least two assembly types (for roles) or two product families (for assembly types) that would use it. <list>
- **For `DEPRECATION`/`STATUS_CHANGE`:** the defect or supersession case, and the successor code. <explain>
- **For `ALIAS_RECORD`:** the name, what it points at, and proof the physical object/configuration is unchanged (rule D-8). <explain>

## 5. Precedent check (required)

- **REJECTIONS.md search performed:** yes / no — <which precedents are closest, and why they do not bind here. The CFS/PIP/TUB rejections are binding on materially similar proposals.>
- **Closed proposals searched:** yes / no

## 6. Proposed dictionary row(s), exactly as they would land

> New codes land as `RESERVED` and become `ACTIVE` only at a snapshot release. Use the column headers of the target CSV in `dictionaries/`.

```csv
code,name,status,definition,successor,since_snapshot
<XXX>,<name>,RESERVED,<definition>,,<next snapshot>
```

## 7. Backward-compatibility statement (required)

- Published rows edited in place: **none** (rule N7/P8 — if your proposal needs one, it is a deprecation-with-successor instead).
- Deprecations proposed: <code → successor, effective snapshot>
- Existing data affected: <who is currently using the affected codes, and what they must do — usually "nothing; old snapshots remain valid">

## 8. Downstream effects (fill in what you know; maintainers complete at triage)

- Standards document touched: <GSID Standard §3 for SEC / MH Taxonomy Standard for ROL-ASM-FAM-CFG / none>
- Explorer rule tables affected (`explorer/rules/question_nodes.csv`): <e.g., new answer option at node S2 — described only; Explorer changes follow the decision, never precede it>
- Configuration templates affected: <if any>

## 9. Checklist before submitting

- [ ] Every required field above is filled
- [ ] Affiliation and commercial interest disclosed
- [ ] Fields-first hurdle argued (for `NEW_CODE`)
- [ ] Evidence attached, not promised
- [ ] REJECTIONS.md checked
- [ ] Proposed CSV row is exact and status is `RESERVED`
- [ ] No published row is edited in place
