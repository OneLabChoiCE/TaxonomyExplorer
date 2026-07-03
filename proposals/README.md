# Decision Records

One file per governance decision, per [GOVERNANCE.md](../GOVERNANCE.md) §5. Records are immutable once merged; corrections are new records that supersede.

**Filename:** `YYYY-MM-DD-<short-slug>.md` (e.g., `2026-10-01-sec-new-code-xyz.md`)

**Required contents:**

```markdown
# <Title of decision>

- **Proposal:** <issue link>
- **Type:** new code | enum token | template field | designation system | erratum | normative rule change
- **Decision:** ACCEPTED | REJECTED | DEFERRED
- **Decided by:** <TC members / bootstrap maintainer>, <date>
- **Method:** lazy consensus | recorded vote (tally) | supermajority + comment period
- **Rules applied:** <D-1 / D-7 / P5 / …, with the specific reasoning>
- **Evidence reviewed:** <instances, sources>
- **Dictionary effect:** <rows added as RESERVED / deprecations-with-successor / none>
- **Activating snapshot:** <SNAP-x.y.z or n/a>
- **Advisory comments:** <recorded sector feedback, if any>
```

Rejected decisions are additionally summarized in [REJECTIONS.md](../REJECTIONS.md); all dictionary effects are summarized in [CHANGELOG.md](../CHANGELOG.md) at each snapshot.
