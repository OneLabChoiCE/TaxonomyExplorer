# Demo Scenarios — Who Uses This, and For What

Six walkthroughs showing how different audiences use TaxonomyExplorer and the SectionHub identity model. Each scenario states the user's problem, what they enter, what comes out at each identity layer, **what the system refuses to infer** (refusal is a feature, not a gap), and why it reduces real friction. Machine-readable outputs live in [`examples/scenarios/`](../examples/scenarios/); each JSON is tagged either `EXPLORER_REPRODUCIBLE` (you can produce it in the public Explorer today) or `ILLUSTRATIVE_DATA_MODEL` (it shows the standard's registry model ahead of current tooling — all such identifiers are illustrative, per the standard's convention).

> **Two ground rules apply everywhere.** Nothing in these scenarios implies performance approval — no output states or suggests load capacity, safety, or fitness. And no scenario introduces governed codes: the one proposed code in Scenario 5 is explicitly illustrative and unregistered.

---

## Scenario 1 — A rack manufacturer classifies a lipped upright section

**The problem.** A manufacturer's engineer needs a neutral, permanent way to refer to a roll-formed upright profile in drawings and test documentation — one that won't break when marketing renames the product line, and that doesn't force competitors' engineers to decode a proprietary name.

**Input.** The profile itself, observed end-on: open profile → C-form (web + two flanges) → simple lips (one fold per flange). Nominal 76.2 × 41.3 × 12.7 × 1.9 mm (dimensions are not yet captured by the Phase-2 Explorer; the topology questions are enough to classify).

**Classification path.** `SEC:OCL` — sections are domain-neutral, so the path has no product context (entry at any level is valid, rule H3).

**Identity layers produced.**

| Layer | Value | Meaning |
|---|---|---|
| SectionShapeCode | `SEC:OCL` | Topology class: open C, lipped |
| CanonicalGeometryID / GSID | `null` today; `CG1-7B3E91A0C24D` / `GS-004217` (illustrative) once parameters + registry land | The permanent geometry identity the drawings will cite |
| Decision trace | Rules `R-SEC-001 → R-SEC-004 → R-SEC-008` | Every step cites a rule row and a standard reference |

**What the system refuses to infer.** If the engineer can't confirm the lip condition, classification **halts** with warning `W-201` at the `SEC:OCS` rollup, status `INDETERMINATE` — because lipped vs unlipped changes section behavior fundamentally, and a guessed terminal code would be worse than none. It also won't take "it's our TD-300 profile" as input: brand names have zero classification authority.

**Why this reduces friction.** The profile's identity survives every rename, merger, and catalog revision. Two manufacturers rolling geometrically equivalent profiles resolve to the *same* geometry identity — which is exactly what a spec writer or reviewing engineer needs and exactly what no part number can say.

**Output:** [`examples/scenarios/scenario-1-manufacturer-section.json`](../examples/scenarios/scenario-1-manufacturer-section.json) *(EXPLORER_REPRODUCIBLE — answers: Section → Open profile → C-form → Simple lips)*

---

## Scenario 2 — A testing lab receives a wire deck with incomplete naming

**The problem.** A deck arrives for load testing labeled only "46×46 deck — Brand X." The lab must describe the specimen so the report is unambiguous years later — including after Brand X renames the product or is acquired.

**Input.** What the technician can *measure and observe*: welded mesh deck on 3 support channels, legs down, waterfall front edge, resistance-welded mesh-to-channel. No reliance on the label.

**Classification path.** `MH / ASM:WDK` — an assembly, classified by what it is (mesh + distinct-role supports), with the observed facts recorded as configuration fields (`CFG:EDG`, `CFG:SUP`, `CFG:JNT`), never as new codes.

**Identity layers produced.** Assembly type + configuration record; in the full registry model, the identity-bearing fields hash to a ConfigurationID (illustrative: `CF1-8C41D02E97BA`) — and **five replicate specimens are still one configuration** (rule P4), which is how the report avoids the classic "specimen 3 of what, exactly?" problem.

**What the system refuses to infer.** No GSID for the deck — assemblies never get geometry identity (E-101). Unobserved facts (wire grade, pre/post-galvanized) stay absent rather than defaulted. And if the technician tries to record "4,100 lb capacity" as a configuration field, the model rejects it (E-104): ratings are evidence-layer *outputs*, never identity inputs.

**Why this reduces friction.** The test report binds to *what was physically on the floor*, not to a brand string. When the manufacturer's name changes, the evidence doesn't die.

**Output:** [`examples/scenarios/scenario-2-lab-wire-deck.json`](../examples/scenarios/scenario-2-lab-wire-deck.json) *(EXPLORER_REPRODUCIBLE — answers: Assembly → Mesh/wire deck → Waterfall → 3)*

---

## Scenario 3 — A software vendor maps a manufacturer SKU to the neutral identity layer

**The problem.** A WMS / rack-configurator vendor maintains cross-reference tables like "ACME TD-300-16 ≈ Brand-Y 3016-TD" by hand, and every catalog revision breaks them.

**Input.** The SKU string plus what the part actually is (from the manufacturer's spec sheet): a `ROL:COL` component whose cross-section is the Scenario 1 profile, teardrop-punched at 50.8 mm pitch.

**Classification path.** `MH / ROL:COL / SEC:OCL` — the *part* is classified by role and geometry; the SKU becomes a **naming-layer record** (`MPN-…`) that points at the component. The pointer direction is the whole architecture: names point at identities, identities never derive from names.

**Identity layers produced (illustrative registry model).** `MPN-018233` {ACME, "TD-300-16"} → `CMP-000482` (role `ROL:COL`, section → `GS-004217`, punching in `CFG:HOL`). A competitor's equivalent part is a *different* MPN pointing at its own component — and if the geometries match canonically, both components reference the **same GSID**, which is the neutral cross-reference the vendor wanted.

**What the system refuses to infer.** It will not classify from the SKU (E-102): the vendor must know what the part *is* once — after which every rename is a one-row naming-layer update, not a re-engineering job. Equivalence claims beyond geometry (hole-pattern compatibility) ride declared configuration facts, never brand reputation.

**Why this reduces friction.** Cross-references become computed facts with an audit trail instead of maintained folklore.

**Output:** [`examples/scenarios/scenario-3-sku-mapping.json`](../examples/scenarios/scenario-3-sku-mapping.json) *(ILLUSTRATIVE_DATA_MODEL)*

---

## Scenario 4 — A used-rack inspector avoids overclaiming identity

**The problem.** An inspector documents an unlabeled, decades-old upright in a facility audit. The professional risk runs both ways: identifying too little (report is useless) or too much (asserting a manufacturer or rating they cannot know).

**Input.** What's measurable on site: open C profile, web ≈ 76 mm, flanges ≈ 41 mm, 1.9 mm wall, teardrop punching — but the flange free edges are buried against a wall, so **lip condition cannot be confirmed**.

**Classification path.** Halts, correctly: `Section → Open → C-form → (lip condition unknown)` → **`W-201`, status `INDETERMINATE`, rollup `SEC:OCS`** — with the output stating exactly what additional observation would complete classification (inspect the flange free edges: no fold → OCU, one fold → OCL).

**Identity layers produced.** An honest partial record: everything observed is captured; nothing unobserved is asserted. On a return visit with the lips visible, the same answers plus one more resolve to `SEC:OCL` deterministically. Manufacturer stays **unknown** — the naming layer is simply empty, which is a valid state, not a failure.

**What the system refuses to infer.** The terminal shape code (until lips are observed); the manufacturer (never guessed from punching patterns); and — categorically — any capacity or condition rating. An inspector's SectionHub record says *what the member is*, never *what it can carry*.

**Why this reduces friction.** "Indeterminate, and here's the exact missing observation" is a professionally defensible finding. It converts inspector judgment calls into a reproducible procedure, and it gives the used-equipment market its first identification tool with no vendor stake in the answer.

**Output:** [`examples/scenarios/scenario-4-inspector-indeterminate.json`](../examples/scenarios/scenario-4-inspector-indeterminate.json) *(EXPLORER_REPRODUCIBLE — answers: Section → Open profile → C-form → I don't know)*

---

## Scenario 5 — A standards contributor proposes a new assembly type

**The problem.** A contributor believes carton-flow lane assemblies aren't representable and wants a new assembly-type code — call it `ASM:FLR` *(ILLUSTRATIVE ONLY — this code is **not** in any dictionary, is not being proposed here, and is used solely to show the workflow)*.

**Input.** Not a classification session — a proposal, via [`proposals/TEMPLATE-code-change.md`](../proposals/TEMPLATE-code-change.md) copied into a public GitHub issue.

**The path is the workflow** ([docs/proposal-workflow.md](proposal-workflow.md)): the fields-first hurdle first (*which existing code fails, and why isn't this configuration fields on an existing assembly type?*), evidence (≥2 real uses), a REJECTIONS.md precedent check, the exact `RESERVED` CSV row, then triage → Technical Committee decision → recorded decision file → activation only at a snapshot release.

**What the system refuses to infer.** Everything, structurally: the Explorer cannot mint codes at runtime; no maintainer can slip a code in without a recorded decision; a rejected proposal becomes binding precedent so the argument isn't re-run annually. Deferral is also a real outcome — parked with a named revival condition and **no dictionary row** (the repository's demo-alias record is the live example).

**Why this reduces friction.** An outside engineer can see exactly how to change the standard without knowing anyone: the gate is evidence, not access.

**Output:** [`examples/scenarios/scenario-5-new-code-proposal.json`](../examples/scenarios/scenario-5-new-code-proposal.json) *(ILLUSTRATIVE_DATA_MODEL — a proposal record rendered as JSON)*

---

## Scenario 6 — A future certification workflow: record identity ≠ performance rating

**The problem.** A buyer scans a QR label on a wire deck. Two questions hide in that scan, and conflating them is how misgrading happens: *"what is this?"* (identity) and *"what can it hold?"* (performance).

**Input.** The label's identifier, resolved against a published registry snapshot *(illustrative — no such resolution service exists yet)*.

**What resolves.** The registered configuration (`ASP-000173` / `CF1-8C41D02E97BA`, illustrative): assembly type, configuration fields, provenance grade (`SELF_REPORTED` vs `VERIFIED`), and the evidence layer's *pointers* — which test records exist for this exact ConfigurationID, at which lab, under which protocol.

**What the system refuses to infer — and states in the record itself.** The resolution response carries the attestation boundary verbatim: registration attests **record existence and traceability only**; it does not attest load capacity, safety, code compliance, or fitness; no physical inspection is implied; performance questions belong to the cited test reports, the engineer of record, and the industry's conformance programs. A "registered" deck is an *identified* deck — nothing more, and that's the point.

**Why this reduces friction.** Today, capacity claims and identity claims travel in the same brand-labeled blur. Separating them cleanly means the identity half can finally be automated and trusted — *because* it refuses to carry the performance half.

**Output:** [`examples/scenarios/scenario-6-certification-record.json`](../examples/scenarios/scenario-6-certification-record.json) *(ILLUSTRATIVE_DATA_MODEL)*

---

## Reproducing the reproducible ones

Scenarios 1, 2, and 4 can be replayed in the public Explorer (`explorer/`) with the answer sequences noted above; their JSONs match the Explorer's output envelope, prefixed with a `_scenario` metadata block (remove it to compare byte-for-byte with live output). Scenarios 3, 5, and 6 illustrate the registry data model defined in the [standards](../standards/Material_Handling_Taxonomy_Standard.md) ahead of tooling; every identifier in them is illustrative per the standard's convention.
