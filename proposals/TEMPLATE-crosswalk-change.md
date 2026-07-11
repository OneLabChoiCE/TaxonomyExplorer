# Proposal: <short title — e.g. "Import EN 10365 channel designations" or "UNSPSC crosswalk for FAM:SPR">

> **How to use this template:** copy it into a new GitHub issue titled `[Crosswalk proposal] <short title>`, fill every field, and delete the guidance quotes. This template covers **DSG designation-system imports** (AISC, AISI nomenclature, EN, GB/T, JIS, AS/NZS, manufacturer designation systems) and **XMAP external-classification crosswalks** (GS1, UNSPSC, ECLASS, ETIM, OmniClass, MasterFormat). Note: XMAP is a *proposed, not-yet-normative* record type (see [SECTIONHUB_STRATEGIC_ARCHITECTURE.md](../SECTIONHUB_STRATEGIC_ARCHITECTURE.md) §7); XMAP proposals are accepted as **DEFERRED-pending-adoption** design records until the XMAP rules land in a released standard. Process reference: [docs/proposal-workflow.md](../docs/proposal-workflow.md).

## 1. Administrative

- **Proposer:** <name>
- **Affiliation and commercial interest:** <employer; disclose plainly — especially for manufacturer designation systems>
- **Date:** <YYYY-MM-DD>
- **Proposal type:** `DSG_IMPORT` (designation system → GSIDs) | `XMAP_CROSSWALK` (external classification ↔ SectionHub objects)
- **External system and edition:** <e.g., "AISC Shapes Database v16.0", "UNSPSC v26", "ECLASS 14.0" — edition is mandatory; unversioned mappings are returned at triage>

## 2. Licensing and republication check (required — this gates everything else)

> Rules X-4 / F-5: reference external identifiers under the source's license terms; never republish license-restricted content. For DSG imports, geometry is restated as canonical parameters, never republished as the source's tables.

- **Source license / terms of use:** <cite or link; state what the terms permit>
- **What this proposal references vs republishes:** <e.g., "designation strings + our own canonicalized parameters (referenced); no source table text reproduced">
- **Open questions for counsel/maintainers:** <anything uncertain — flagging it here is a merit, not a weakness>

## 3. Scope of the mapping

- **Number of records:** <approximate row count>
- **Target SectionHub objects:** <GSIDs via canonical geometry (DSG) / FAM-ASM-ROL codes or registered objects (XMAP)>
- **Out of scope:** <what this deliberately does not map>

## 4. Mapping semantics

- **For `DSG_IMPORT`:** confirm rule C-1 (import creates DSG records mapped to GSIDs; new GSIDs only for unregistered geometry classes; **no new `SEC:` codes** without a separate D-1 proposal), C-2 (designation-system distinctions stay in designation-record fields), C-3 (cross-system geometric equivalences exposed).
- **For `XMAP_CROSSWALK`:** every mapping typed `EXACT` | `CLOSE` | `BROADER_THAN` | `NARROWER_THAN` | `RELATED`, direction source-relative-to-target (X-1; when unsure between `EXACT` and `CLOSE`, choose `CLOSE`); versioned to the named edition, never auto-carried (X-2); **never an input to classification** (X-3).

## 5. Sample records (required — at least three, exactly as they would land)

```
# DSG example:
DSG-<SYSTEM>-<NORMALIZED>  →  GS-XXXXXX   (system, edition, source ref)
# XMAP example:
<source id> —CLOSE→ FAM:SPR   (rationale, evidence, edition)
```

## 6. Verification plan

- **How correctness will be checked:** <e.g., canonicalization of source dimensions → CGID computation → collision/equivalence report; spot-check sample against source publication>
- **Known ambiguities:** <designations whose geometry is unclear or edition-dependent, and how you propose to handle them — omission is an acceptable answer>

## 7. Maintenance commitment

- **Edition updates:** <who watches for new editions; mappings are re-reviewed per X-2, not auto-carried>
- **Contact for source-data questions:** <role or venue, not a private email>

## 8. Backward-compatibility statement (required)

- Existing DSG/GSID records edited in place: **none** (N7/P8; corrections are deprecation-with-successor)
- Superseded mappings: <how prior-edition records are retained and marked>

## 9. Checklist before submitting

- [ ] Edition named; license terms cited
- [ ] Reference-vs-republish analysis done
- [ ] Mapping types and direction declared (XMAP) / C-1..C-3 confirmed (DSG)
- [ ] ≥3 exact sample records included
- [ ] Verification plan stated
- [ ] No published record edited in place
- [ ] Affiliation disclosed
