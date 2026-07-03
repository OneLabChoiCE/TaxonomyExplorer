/*
 * SectionHub Taxonomy Explorer — Phase 1 MVP
 * ------------------------------------------
 * Pure static, deterministic taxonomy navigation demo.
 *
 * Contract (from the Taxonomy Standard draft, Part 13):
 *   - Classification is a pure function of (answers, dictionaries).
 *   - The engine never guesses: missing/unknown answers halt with a warning.
 *   - Codes come only from the loaded dictionaries; the UI never invents codes.
 *   - No persistence, no editing, no network beyond loading local data files.
 *
 * Layout of this file:
 *   1. Constants
 *   2. CSV parsing + dictionary loading (fetch, with embedded file:// fallback)
 *   3. Decision tables (data — mirrors the target rules/question_nodes.csv)
 *   4. Engine (state machine over the decision tables)
 *   5. Output builder (classification path, codes, designation, JSON envelope)
 *   6. UI rendering (vanilla DOM, no dependencies)
 */

"use strict";

/* ------------------------------------------------------------------ */
/* 1. Constants                                                        */
/* ------------------------------------------------------------------ */

const SCHEMA_VERSION = "1.0";
const SNAPSHOT_ID = "SNAP-0.1.0-DEMO"; // demo dictionary subset — NOT the SNAP-1.0.0 seed registry
const DICTIONARY_FILES = ["sec_codes", "rol_codes", "asm_codes"];

/* ------------------------------------------------------------------ */
/* 2. CSV parsing + dictionary loading                                 */
/* ------------------------------------------------------------------ */

/** Minimal CSV parser: handles quoted fields and escaped quotes (""). */
function parseCsv(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (ch === '"') { inQuotes = false; }
      else { field += ch; }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(field); field = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.length > 1 || row[0] !== "") rows.push(row);
      row = [];
    } else {
      field += ch;
    }
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  const header = rows.shift();
  return rows.map(r => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])));
}

/**
 * Load one dictionary. Over http(s) the .csv file is fetched; when the page
 * is opened from disk (file://), browsers block fetch, so we fall back to
 * data/embedded.js (a maintained copy of the same CSV text).
 */
async function loadDictionary(name) {
  try {
    const res = await fetch(`data/${name}.csv`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { rows: parseCsv(await res.text()), source: "csv" };
  } catch (err) {
    const embedded = window.EMBEDDED_DICTIONARIES && window.EMBEDDED_DICTIONARIES[name];
    if (embedded) return { rows: parseCsv(embedded), source: "embedded" };
    throw new Error(`Cannot load dictionary "${name}": ${err.message}`);
  }
}

async function loadAllDictionaries() {
  const dicts = {}, sources = new Set();
  for (const name of DICTIONARY_FILES) {
    const { rows, source } = await loadDictionary(name);
    dicts[name] = Object.fromEntries(rows.map(r => [r.code, r]));
    sources.add(source);
  }
  dicts._source = sources.has("embedded") ? "embedded fallback (file://)" : "CSV files";
  return dicts;
}

/* ------------------------------------------------------------------ */
/* 3. Decision tables                                                  */
/* ------------------------------------------------------------------ */
/*
 * These tables are the classifier. Each node is one question; each option
 * carries a controlled answer token, an optional code assignment, an optional
 * configuration assignment, the next node, and a "because" line that feeds
 * the explanation output. In the target architecture this data lives in
 * rules/question_nodes.csv; it is inlined here for Phase 1 readability.
 */

const ROUTES = { section: "S1", component: "R1", assembly: "A1" };

const NODES = {
  /* ---- Section route ---- */
  S1: {
    question: "Is the cross-section profile open, closed (hollow), or solid?",
    help: "Look at the profile end-on. Open: you can trace the outline without enclosing a void. Closed: it encloses a hollow cell. Solid: no void, full material.",
    options: [
      { token: "OPEN", label: "Open profile", next: "S2",
        because: "An open profile was selected, so the open-form families apply." },
      { token: "CLOSED", label: "Closed / hollow profile", assign: { ns: "SEC", code: "HSS" },
        because: "A closed single-cell hollow resolves to HSS in this demo subset (the full standard resolves further to RHS / SHS / CHS)." },
      { token: "SOLID", label: "Solid (plate / flat)", assign: { ns: "SEC", code: "PLT" },
        because: "A solid rectangular profile is plate/flat stock: PLT." },
    ],
  },
  S2: {
    question: "Which open form is it?",
    help: "Match the silhouette: C (web with two parallel flanges), Z (flanges on opposite sides), or L (two legs).",
    options: [
      { token: "C_FORM", label: "C-form (web + two flanges, same side)", next: "S3",
        because: "A C-form open profile was selected; lip condition decides the terminal code." },
      { token: "Z_FORM", label: "Z-form (flanges on opposite sides)", assign: { ns: "SEC", code: "ZED" },
        because: "A Z-form profile resolves to ZED in this demo subset (SNAP-1.0.0 splits the Z family into ZLP / ZUN under the ZEE rollup)." },
      { token: "L_FORM", label: "L-form (two legs / angle)", assign: { ns: "SEC", code: "ANG" },
        because: "A two-leg L profile is an angle: ANG." },
    ],
  },
  S3: {
    question: "Are there stiffening lips on the flange ends?",
    help: "A lip is a short return fold at the free edge of each flange. Lip condition changes section behavior fundamentally, so it can never be guessed.",
    options: [
      { token: "NONE", label: "No lips (plain C)", assign: { ns: "SEC", code: "OCU" },
        because: "No lip elements: open C unlipped, OCU." },
      { token: "SIMPLE_LIP", label: "Simple lips (one fold per flange)", assign: { ns: "SEC", code: "OCL" },
        because: "One stiffening lip fold per flange: open C lipped, OCL." },
      { token: "UNKNOWN", label: "I don't know",
        halt: {
          warning: "W-201",
          rollup: "SEC:OCS",
          message: "Lip condition unknown — classification halts at the OCS rollup with status INDETERMINATE. OCS is a superclass and is never emitted as a terminal code. Measure the flange ends and try again.",
        },
        because: "Lip condition could not be determined; the engine refuses to guess (determinism rule P7)." },
    ],
  },

  /* ---- Component route ---- */
  R1: {
    question: "What functional role does this part play?",
    help: "Roles describe function inside assemblies, independent of shape or family.",
    options: [
      { token: "COL", label: "Column / upright post", assign: { ns: "ROL", code: "COL" }, next: "R2",
        because: "The part carries vertical load as an upright: role COL." },
      { token: "BEM", label: "Beam / load member", assign: { ns: "ROL", code: "BEM" }, next: "R2",
        because: "The part spans horizontally carrying load: role BEM." },
      { token: "ARM", label: "Cantilever arm", assign: { ns: "ROL", code: "ARM" }, next: "R2",
        because: "The part projects from a column to carry load: role ARM." },
      { token: "CHL", label: "Support channel (under decks/panels)", assign: { ns: "ROL", code: "CHL" }, next: "R2",
        because: "The part stiffens/supports a deck or panel: role CHL (SNAP-1.0.0 names this role DKS)." },
    ],
  },
  R2: {
    question: "Is it a prismatic member (constant cross-section along its length)?",
    help: "Punched holes and end cuts do not break prismatic-ness — only the continuous profile counts. Prismatic members reference a section; formed parts do not.",
    options: [
      { token: "YES", label: "Yes — constant cross-section", next: "S1",
        because: "Prismatic member: its cross-section is classified next and referenced by the component." },
      { token: "NO", label: "No — formed / non-prismatic",
        because: "Non-prismatic parts carry no section reference; role classification is complete." },
    ],
  },

  /* ---- Assembly route ---- */
  A1: {
    question: "What kind of assemblage is it?",
    help: "An assembly joins parts with distinct roles. Assemblies are never sections and never receive geometry identity (GSID).",
    options: [
      { token: "MESH_DECK", label: "Mesh/wire deck laid on beams", assign: { ns: "ASM", code: "WDK" }, next: "A2W",
        because: "Mesh joined to distinct-role support members: assembly type WDK." },
      { token: "BRACED_FRAME", label: "Braced column pair (upright frame)", assign: { ns: "ASM", code: "FRM" }, next: "A2F",
        because: "Columns joined by bracing with distinct roles: assembly type FRM." },
    ],
  },
  A2W: {
    question: "Front edge condition of the deck?",
    help: "Edge condition is a configuration field (CFG:EDG) — it never changes the assembly type code.",
    options: [
      { token: "FLUSH", label: "Flush", config: { group: "CFG:EDG", field: "front", value: "FLUSH" }, next: "A3W",
        because: "Front edge FLUSH recorded as configuration (CFG:EDG) — variation lives in fields, not codes (rule P5)." },
      { token: "WATERFALL", label: "Waterfall (drops over the beam)", config: { group: "CFG:EDG", field: "front", value: "WATERFALL" }, next: "A3W",
        because: "Front edge WATERFALL recorded as configuration (CFG:EDG) — variation lives in fields, not codes (rule P5)." },
    ],
  },
  A3W: {
    question: "How many support channels?",
    help: "Support count is configuration (CFG:SUP). Changing it creates a new configuration identity, never a new code.",
    options: [
      { token: "TWO", label: "2", config: { group: "CFG:SUP", field: "support_count", value: 2 },
        because: "Support count 2 recorded as configuration (CFG:SUP)." },
      { token: "THREE", label: "3", config: { group: "CFG:SUP", field: "support_count", value: 3 },
        because: "Support count 3 recorded as configuration (CFG:SUP)." },
      { token: "FOUR", label: "4", config: { group: "CFG:SUP", field: "support_count", value: 4 },
        because: "Support count 4 recorded as configuration (CFG:SUP)." },
    ],
  },
  A2F: {
    question: "How is the bracing joined to the columns?",
    help: "Joining method is configuration (CFG:JNT); a bolted and a welded frame are two configurations of the same assembly type.",
    options: [
      { token: "BOLT", label: "Bolted", config: { group: "CFG:JNT", field: "brace_to_column", value: "BOLT" },
        because: "Bolted bracing recorded as configuration (CFG:JNT)." },
      { token: "FUSION_WELD", label: "Welded", config: { group: "CFG:JNT", field: "brace_to_column", value: "FUSION_WELD" },
        because: "Welded bracing recorded as configuration (CFG:JNT)." },
    ],
  },
};

/** Bill of roles emitted per assembly type (Phase 1 demo scope). */
const ASSEMBLY_COMPONENTS = {
  WDK: (config) => [
    { role: "ROL:CHL", count: (config["CFG:SUP"] || {}).support_count ?? null,
      note: "support channels; the mesh panel role (MSH in SNAP-1.0.0) is outside the Phase 1 role subset" },
  ],
  FRM: () => [
    { role: "ROL:COL", count: 2, note: "brace and base-plate roles are outside the Phase 1 role subset" },
  ],
};

/* ------------------------------------------------------------------ */
/* 4. Engine                                                           */
/* ------------------------------------------------------------------ */

function newSession(objectType) {
  return {
    objectType,                 // "section" | "component" | "assembly"
    nodeId: ROUTES[objectType], // current question node, null when finished
    trail: [],                  // [{nodeId, token, because}]
    codes: {},                  // { SEC: "OCL", ROL: "COL", ASM: "WDK" }
    config: {},                 // { "CFG:EDG": {front: "WATERFALL"}, ... }
    halt: null,                 // {warning, rollup, message} when refused
  };
}

/** Apply one controlled answer token to the session. Deterministic; throws on unknown tokens. */
function answer(session, token) {
  const node = NODES[session.nodeId];
  const opt = node.options.find(o => o.token === token);
  if (!opt) throw new Error(`Token ${token} is not a controlled answer for node ${session.nodeId}`);
  session.trail.push({ nodeId: session.nodeId, token, because: opt.because });
  if (opt.assign) session.codes[opt.assign.ns] = opt.assign.code;
  if (opt.config) {
    session.config[opt.config.group] = session.config[opt.config.group] || {};
    session.config[opt.config.group][opt.config.field] = opt.config.value;
  }
  if (opt.halt) { session.halt = opt.halt; session.nodeId = null; return session; }
  session.nodeId = opt.next || null;
  return session;
}

/* ------------------------------------------------------------------ */
/* 5. Output builder                                                   */
/* ------------------------------------------------------------------ */

function qualified(ns, code) { return `${ns}:${code}`; }

function classificationPath(session) {
  const p = [];
  if (session.objectType !== "section") p.push("MH"); // sections are domain-neutral (rule H4)
  if (session.codes.ASM) p.push(qualified("ASM", session.codes.ASM));
  if (session.codes.ROL) p.push(qualified("ROL", session.codes.ROL));
  if (session.codes.SEC) p.push(qualified("SEC", session.codes.SEC));
  return p;
}

function designation(session) {
  const { SEC, ROL, ASM } = session.codes;
  const dims = "(dimensions not captured in Phase 1)";
  if (ASM) {
    const tokens = [];
    for (const [group, fields] of Object.entries(session.config)) {
      const short = group.replace("CFG:", "");
      for (const [f, v] of Object.entries(fields)) {
        tokens.push(`${short}.${f === "support_count" ? "count" : f}=${v}`);
      }
    }
    return `${ASM} ${tokens.join(" ")} ${dims}`.trim();
  }
  if (ROL) {
    return SEC ? `${ROL} SMHE ${SEC} ${dims} L=PARAM` : `${ROL} (non-prismatic; no section reference)`;
  }
  return SEC ? `SMHE ${SEC} ${dims}` : null;
}

function suggestedCodes(session, dicts) {
  const out = [];
  const add = (ns, code, dictName) => {
    const entry = dicts[dictName][code] || {};
    out.push({ namespace: ns, code: qualified(ns, code), name: entry.name || "",
               status: entry.status || "", definition: entry.definition || "",
               demo_note: entry.demo_note || "" });
  };
  if (session.codes.ASM) add("ASM", session.codes.ASM, "asm_codes");
  if (session.codes.ROL) add("ROL", session.codes.ROL, "rol_codes");
  if (session.codes.SEC) add("SEC", session.codes.SEC, "sec_codes");
  return out;
}

function explanations(session, dicts) {
  const lines = session.trail.map(t => t.because);
  for (const c of suggestedCodes(session, dicts)) {
    if (c.demo_note) lines.push(`${c.code}: ${c.demo_note}.`);
  }
  if (session.objectType !== "section") {
    lines.push("Product family (FAM) level is outside Phase 1 scope; the path enters at the assembly/role level (rule H3: entry at any level is valid).");
  }
  if (session.codes.SEC || session.objectType === "section") {
    lines.push("Geometry parameters, CanonicalGeometryID computation, and GSID lookup are outside Phase 1 scope; gsid is emitted as null.");
  }
  return lines;
}

function buildOutput(session, dicts) {
  const halted = !!session.halt;
  const output = {
    schema_version: SCHEMA_VERSION,
    snapshot_id: SNAPSHOT_ID,
    object_type: session.objectType,
    status: halted ? "INDETERMINATE" : "CLASSIFIED",
    classification_path: halted ? [] : classificationPath(session),
    codes: {},
    warnings: [],
    explanations: [],
  };
  if (halted) {
    output.rollup = session.halt.rollup;
    output.warnings.push({ code: session.halt.warning, message: session.halt.message });
    output.explanations = session.trail.map(t => t.because);
    return output;
  }
  if (session.objectType !== "section") output.codes.domain = "MH";
  if (session.codes.ASM) output.codes.assembly_type = qualified("ASM", session.codes.ASM);
  if (session.codes.ROL) output.codes.component_role = qualified("ROL", session.codes.ROL);
  if (session.codes.SEC) output.codes.section_shape = qualified("SEC", session.codes.SEC);
  if (session.codes.SEC) output.identifiers = { gsid: null, canonical_geometry_id: null };
  if (session.codes.ASM) {
    output.configuration = session.config;
    output.components = ASSEMBLY_COMPONENTS[session.codes.ASM](session.config);
  }
  output.designation = designation(session);
  output.explanations = explanations(session, dicts);
  output.db_mapping = {
    table: session.codes.ASM ? "assembly_product" : (session.codes.ROL ? "component" : "section_geometry"),
    natural_key: session.codes.ASM ? "assembly_product_id" : (session.codes.ROL ? "component_id" : "gsid"),
    note: "Registered identifiers are issued by the SMHE registry, never by this tool.",
  };
  return output;
}

/* ------------------------------------------------------------------ */
/* 6. UI rendering                                                     */
/* ------------------------------------------------------------------ */

const el = (id) => document.getElementById(id);

const state = { dicts: null, session: null };

function render() {
  renderTrail();
  renderQuestion();
  renderResult();
}

function renderTrail() {
  const box = el("trail");
  box.innerHTML = "";
  if (!state.session) return;
  const label = { section: "Section", component: "Component", assembly: "Assembly" }[state.session.objectType];
  box.appendChild(chip(`Classifying: ${label}`));
  for (const t of state.session.trail) {
    const node = NODES[t.nodeId];
    const opt = node.options.find(o => o.token === t.token);
    box.appendChild(chip(`${node.question} → ${opt.label}`));
  }
}

function chip(text) {
  const span = document.createElement("span");
  span.className = "chip";
  span.textContent = text;
  return span;
}

function renderQuestion() {
  const box = el("question");
  box.innerHTML = "";
  if (!state.session) {
    box.appendChild(heading("What are you classifying?"));
    const grid = document.createElement("div");
    grid.className = "options";
    for (const [type, label] of [["section", "Section"], ["component", "Component"], ["assembly", "Assembly"]]) {
      grid.appendChild(optionButton(label, () => { state.session = newSession(type); render(); }));
    }
    box.appendChild(grid);
    return;
  }
  if (!state.session.nodeId) return; // finished — result panel takes over
  const node = NODES[state.session.nodeId];
  box.appendChild(heading(node.question));
  if (node.help) {
    const p = document.createElement("p");
    p.className = "help";
    p.textContent = node.help;
    box.appendChild(p);
  }
  const grid = document.createElement("div");
  grid.className = "options";
  for (const opt of node.options) {
    grid.appendChild(optionButton(opt.label, () => { answer(state.session, opt.token); render(); }));
  }
  box.appendChild(grid);
}

function heading(text) {
  const h = document.createElement("h2");
  h.textContent = text;
  return h;
}

function optionButton(label, onClick) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "option";
  b.textContent = label;
  b.addEventListener("click", onClick);
  return b;
}

function renderResult() {
  const box = el("result");
  box.innerHTML = "";
  const s = state.session;
  if (!s || s.nodeId) { box.hidden = true; return; }
  box.hidden = false;
  const output = buildOutput(s, state.dicts);

  if (output.warnings.length) {
    for (const w of output.warnings) {
      const div = document.createElement("div");
      div.className = "warning";
      div.innerHTML = `<strong>${w.code}</strong> — ${w.message}`;
      box.appendChild(div);
    }
  }

  if (output.status === "CLASSIFIED") {
    box.appendChild(heading("Classification path"));
    const path = document.createElement("p");
    path.className = "path";
    path.textContent = output.classification_path.join("  /  ");
    box.appendChild(path);

    box.appendChild(heading("Suggested codes"));
    box.appendChild(codesTable(suggestedCodes(s, state.dicts)));
  } else {
    box.appendChild(heading("Classification halted"));
    const p = document.createElement("p");
    p.className = "path";
    p.textContent = `Rollup: ${output.rollup} (INDETERMINATE — not a terminal code)`;
    box.appendChild(p);
  }

  box.appendChild(heading("Why these codes"));
  const ul = document.createElement("ol");
  ul.className = "explanations";
  for (const line of output.explanations) {
    const li = document.createElement("li");
    li.textContent = line;
    ul.appendChild(li);
  }
  box.appendChild(ul);

  box.appendChild(heading("JSON output"));
  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(output, null, 2);
  box.appendChild(pre);

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.appendChild(optionButton("Copy JSON", () => navigator.clipboard.writeText(pre.textContent)));
  actions.appendChild(optionButton("Start over", resetSession));
  box.appendChild(actions);
}

function codesTable(codes) {
  const table = document.createElement("table");
  table.innerHTML = "<thead><tr><th>Code</th><th>Name</th><th>Status</th><th>Definition</th></tr></thead>";
  const tbody = document.createElement("tbody");
  for (const c of codes) {
    const tr = document.createElement("tr");
    for (const v of [c.code, c.name, c.status, c.definition]) {
      const td = document.createElement("td");
      td.textContent = v;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  return table;
}

function resetSession() {
  state.session = null;
  render();
}

async function init() {
  try {
    state.dicts = await loadAllDictionaries();
    el("meta").textContent = `Dictionaries: ${state.dicts._source} · Snapshot: ${SNAPSHOT_ID}`;
    el("restart").addEventListener("click", resetSession);
    render();
  } catch (err) {
    el("question").innerHTML = `<p class="warning">Failed to load dictionaries: ${err.message}.
      Serve this folder over HTTP (e.g. <code>python -m http.server</code>) or open via GitHub Pages.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", init);
