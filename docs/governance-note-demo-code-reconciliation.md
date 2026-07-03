if (!(Test-Path "docs")) {
    New-Item -ItemType Directory -Path "docs"
}

@"
# Governance Note: Demo Code Reconciliation

The Phase 1 Explorer MVP includes several explicitly labeled demo-code deviations from the SNAP-1.0.0 seed dictionaries:

- ZED is used as a demo section code, while the seed dictionary uses ZEE as a superclass with ZLP / ZUN leaves.
- CHL is used as a demo component/support-channel code, while the seed dictionary uses DKS for deck supports.
- HSS is treated as terminal in the demo subset, while the seed dictionary treats HSS as classifier-only.

These are acceptable for the Phase 1 static Explorer MVP because they are labeled DEMO and surfaced in the application explanations.

Before v1.0, the project shall resolve these through governance:
1. Retain demo codes only as examples, or
2. Promote them into governed dictionaries, or
3. Replace them with SNAP-aligned codes.
"@ | Set-Content "docs\governance-note-demo-code-reconciliation.md"