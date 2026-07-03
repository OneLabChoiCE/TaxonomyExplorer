/*
 * AUTO-MAINTAINED FALLBACK — do not edit the CSV text here.
 * Source of truth: the .csv files in this directory.
 * This file exists only so the Explorer works when index.html is opened
 * directly from disk (file://), where browsers block fetch() of local files.
 * When served over http(s) — e.g. GitHub Pages — the .csv files are fetched
 * and this fallback is ignored. Keep the strings byte-identical to the CSVs.
 */
window.EMBEDDED_DICTIONARIES = {
  "sec_codes": `code,name,status,definition,demo_note
OCL,Open C lipped,ACTIVE,Folded C-profile with one stiffening lip fold per flange,
OCU,Open C unlipped,ACTIVE,Folded plain C-profile with uniform thickness and no lips,
ZED,Z-section,DEMO,Folded Z-family profile,Demo code: SNAP-1.0.0 defines ZEE as a superclass with leaves ZLP (lipped) and ZUN (unlipped)
HSS,Hollow structural section,DEMO,Closed single-cell hollow profile,Demo terminal code: SNAP-1.0.0 defines HSS as a superclass with leaves RHS / SHS / CHS
ANG,Angle,ACTIVE,Two-leg L-profile equal or unequal,
PLT,Plate / flat,ACTIVE,Rectangular solid plate or sheet stock,
OCS,Open C superclass,SUPERCLASS,Any open C-family profile; classifier-only rollup — never a terminal assignment,Displayed only when lip condition is unknown (warning W-201)
`,
  "rol_codes": `code,name,status,definition,demo_note
COL,Column / upright post,ACTIVE,Vertical load-bearing member: rack uprights and shelving posts,
BEM,Beam / load member,ACTIVE,Horizontal load member: pallet rack load beams and shelf beams,
ARM,Arm,ACTIVE,Cantilever arm carrying loads from a column,
CHL,Support channel,DEMO,Channel-form support member under decks and panels,Demo code: SNAP-1.0.0 names this role DKS (deck support member)
`,
  "asm_codes": `code,name,status,definition,demo_note
WDK,Wire deck,ACTIVE,Welded wire mesh joined to support members; laid on pallet rack beams,
FRM,Upright frame,ACTIVE,Two columns joined by bracing (plus base plates) forming a braced frame,
`
};
