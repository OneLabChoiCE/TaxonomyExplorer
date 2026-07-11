# Governance Note: Demo Code Reconciliation

> Formal record: this note summarizes the open item tracked in [proposals/2026-07-03-phase1-demo-alias-deviations.md](../proposals/2026-07-03-phase1-demo-alias-deviations.md) (status **DEFERRED** — documented, not yet decided). That record is authoritative; this note is an informal orientation.

The Phase 1 Explorer MVP includes several explicitly labeled demo-code deviations from the SNAP-1.0.0 seed dictionaries:

- ZED is used as a demo section code, while the seed dictionary uses ZEE as a superclass with ZLP / ZUN leaves.
- CHL is used as a demo component/support-channel code, while the seed dictionary uses DKS for deck supports.
- HSS is treated as terminal in the demo subset, while the seed dictionary treats HSS as classifier-only.

These are acceptable for the Phase 1 static Explorer MVP because they are labeled DEMO and surfaced in the application explanations.

Before v1.0, the project shall resolve these through governance:

1. Retain demo codes only as examples, or
2. Promote them into governed dictionaries, or
3. Replace them with SNAP-aligned codes.
