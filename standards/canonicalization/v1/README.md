# standards/canonicalization/v1/

**Canonicalization Rules v1** — the published, versioned procedure that derives a reproducible CanonicalGeometryID (`CG1-<hash12>`) from a resolved 2D section's canonical parameter vector. This is the `v1` instance of the canonicalization the [GSID Standard §4.3–§4.4](../../GSID_2D_Standard.md) references but does not itself publish.

**Why this exists:** it satisfies exactly one existing prerequisite — the gate in [registry/gsid/README.md](../../../registry/gsid/README.md) and [First 100 Records Plan §6 item 1 / §8 step 1](../../../docs/FIRST_100_RECORDS_PLAN.md): *GSID proof records require published canonicalization rules v1 + per-shape schemas, "without them no CGID is honest."* It **introduces no new architecture, redefines no identity, and modifies no other document.**

## Contents

| File | What it is |
|---|---|
| [CANONICALIZATION_RULES_V1.md](CANONICALIZATION_RULES_V1.md) | The normative rules: scope, units, parameter ordering, numeric normalization, orientation, equivalent transforms, **byte-exact serialization**, the **CGID hash procedure** with a verified reference test vector, explicit exclusions, and the Category D readiness statement. |
| [schemas/](schemas/) | One per-shape canonical parameter schema per Category D proof shape — `OCL`, `OCU`, `RBR`, `PLT`, `ANG`, `FBR`, `SHS` (7 files; `OCU` serves both OCU cohort records). |

## The one design choice to know

v1 canonicalizes an **intrinsic scalar parameter vector** (web depth, flange width, thickness, diameter…), **not** a coordinate polygon or CAD outline — taking [GSID Standard §4.3](../../GSID_2D_Standard.md)'s "normalized parameter vector" literally. Because no coordinates are ever serialized, v1 has **no** orientation/rotation/point-order/CAD ambiguity to resolve; determinism reduces to fixed parameter order + fixed decimal formatting. The one disclosed simplification is a **sharp-corner idealization** (fillet/bend/corner radii and flange taper are excluded in v1 — the worked examples carry no radius values, so v1 invents none). See rules §1.1, §5, §10.

## Version semantics

Rules **major** version 1 → CGID prefix `CG1-`. A future major version (e.g. coordinate-geometry canonicalization, or radius-aware schemas) would publish as `standards/canonicalization/v2/`, re-derive CGIDs under `CG2-`, and — per [Registry Architecture §3.3](../../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) — GSIDs persist and re-point while superseded CGIDs are retained in history. v1 is frozen once referenced by a cut snapshot.

## Status

DRAFT normative package, R0 (files-as-registry; no snapshot cut). Ratified into force when first referenced by a `SNAP-1.0.0` cut. Scope is intentionally limited to the eight Category D proof records; extending it to further shapes is a later, separately-justified addition (rules §10).

---

*Related: [GSID Standard](../../GSID_2D_Standard.md) · [Registry Architecture](../../../docs/SECTIONHUB_REGISTRY_ARCHITECTURE.md) · [First 100 Records Plan](../../../docs/FIRST_100_RECORDS_PLAN.md) · [registry/gsid/](../../../registry/gsid/README.md) · [Founding record template](../../../docs/FOUNDING_RECORD_TEMPLATE.md)*
