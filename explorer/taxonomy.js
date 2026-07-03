/*
 * SectionHub Taxonomy Explorer — Phase 2: Rule Traceability & Standards Credibility Layer
 * ---------------------------------------------------------------------------------------
 * Pure static, deterministic taxonomy navigation demo.
 *
 * Contract (from the Taxonomy Standard draft, Part 13):
 *   - Classification is a pure function of (answers, dictionaries, rules).
 *   - The engine never guesses: missing/unknown answers halt with a warning.
 *     Deterministic classification SHALL refuse ambiguous terminal assignment
 *     when required input is missing (principle P7).
 *   - Codes come only from the loaded dictionaries; the UI never invents codes.
 *   - Every decision is traceable: each answered question applies exactly one
 *     rule row from rules/question_nodes.csv, and the trace is shown in the UI
 *     and embedded in the JSON output (decision_trace).
 *   - No persistence, no editing, no network beyond loading local data files.
 *
 * Layout of this file:
 *   1. Constants
 *   2. CSV parsing + dictionary/rule loading (fetch, with embedded file:// fallback)
 *   3. Decision tables (question nodes; each option points at one rule_id —
 *      explanation text lives in rules/question_nodes.csv, not here)
 *   4. Engine (state machine over the decision tables)
 *   5. Output builder (classification path, codes, designation, trace, JSON envelope)
 *   6. UI rendering (vanilla DOM, no dependencies)
 */

"use strict";

/* ------------------------------------------------------------------ */
/* 1. Constants                                                        */
/* ------------------------------------------------------------------ */

const SCHEMA_VERSION = "1.0";
const SNAPSHOT_ID = "SNAP-0.1.0-DEMO"; // demo dictionary subset — NOT the SNAP-1.0.0 seed registry
const DICTIONARY_FILES = ["sec_codes", "rol_codes", "asm_codes"];
const RULES_FILE = "question_nodes";
const REFUSAL_PRINCIPLE =
  "Deterministic classification SHALL refuse ambiguous terminal assignment when required input is missing " +
  "(Taxonomy Standard principle P7). A guessed code would be unreproducible and untraceable.";

/** Which dictionary file backs each code namespace (for trace provenance). */
const NAMESPACE_DICTIONARY = { SEC: "data/sec_codes.csv", ROL: "data/rol_codes.csv", ASM: "data/asm_codes.csv" };

/* ------------------------------------------------------------------ */
/* 2. CSV parsing + dictionary/rule loading                            */
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
 * Load one CSV file. Over http(s) the file is fetched; when the page is
 * opened from disk (file://), browsers block fetch, so we fall back to
 * data/embedded.js (a maintained byte-identical copy of the same CSV text).
 */
async function loadCsv(name, path) {
  try {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { rows: parseCsv(await res.text()), source: "csv" };
  } catch (err) {
    const embedded = window.EMBEDDED_DICTIONARIES && window.EMBEDDED_DICTIONARIES[name];
    if (embedded) return { rows: parseCsv(embedded), source: "embedded" };
    throw new Error(`Cannot load "${path}": ${err.message}`);
  }
}

async function loadAllData() {
  const dicts = {}, sources = new Set();
  for (const name of DICTIONARY_FILES) {
    const { rows, source } = await loadCsv(name, `data/${name}.csv`);
    dicts[name] = Object.fromEntries(rows.map(r => [r.code, r]));
    sources.add(source);
  }
  const { rows: ruleRows, source: ruleSource } = await loadCsv(RULES_FILE, `rules/${RULES_FILE}.csv`);
  const rules = Object.fromEntries(ruleRows.map(r => [r.rule_id, r]));
  sources.add(ruleSource);
  const provenance = {
    source: sources.has("embedded") ? "embedded fallback (file://)" : "CSV files",
    snapshot: SNAPSHOT_ID,
    demoCodes: Object.values(dicts).flatMap(d => Object.values(d)).filter(r => r.status === "DEMO").map(r => r.code),
  };
  return { dicts, rules, provenance };
}

/* ------------------------------------------------------------------ */
/* 3. Decision tables                                                  */
/* ------------------------------------------------------------------ */
/*
 * Each node is one question; each option carries a controlled answer token,
 * the rule_id that governs it (rules/question_nodes.csv is the source of
 * truth for explanation and standard reference), an optional code or
 * configuration assignment, and the next node.
 */

const ROUTES = { section: "S1", component: "R1", assembly: "A1" };

const NODES = {
  /* ---- Section route ---- */
  S1: {
    question: "Is the cross-section profile open, closed (hollow), or solid?",
    help: "Look at the profile end-on. Open: you can trace the outline without enclosing a void. Closed: it encloses a hollow cell. Solid: no void, full material.",
    options: [
      { token: "OPEN", label: "Open profile", rule: "R-SEC-001", next: "S2" },
      { token: "CLOSED", label: "Closed / hollow profile", rule: "R-SEC-002", assign: { ns: "SEC", code: "HSS" } },
      { token: "SOLID", label: "Solid (plate / flat)", rule: "R-SEC-003", assign: { ns: "SEC", code: "PLT" } },
    ],
  },
  S2: {
    question: "Which open form is it?",
    help: "Match the silhouette: C (web with two parallel flanges), Z (flanges on opposite sides), or L (two legs).",
    options: [
      { token: "C_FORM", label: "C-form (web + two flanges, same side)", rule: "R-SEC-004", next: "S3" },
      { token: "Z_FORM", label: "Z-form (flanges on opposite sides)", rule: "R-SEC-005", assign: { ns: "SEC", code: "ZED" } },
      { token: "L_FORM", label: "L-form (two legs / angle)", rule: "R-SEC-006", assign: { ns: "SEC", code: "ANG" } },
    ],
  },
  S3: {
    question: "Are there stiffening lips on the flange ends?",
    help: "A lip is a short return fold at the free edge of each flange. Lip condition changes section behavior fundamentally, so it can never be guessed.",
    options: [
      { token: "NONE", label: "No lips (plain C)", rule: "R-SEC-007", assign: { ns: "SEC", code: "OCU" } },
      { token: "SIMPLE_LIP", label: "Simple lips (one fold per flange)", rule: "R-SEC-008", assign: { ns: "SEC", code: "OCL" } },
      { token: "UNKNOWN", label: "I don't know", rule: "R-WRN-201",
        halt: {
          warning: "W-201",
          rollup: "SEC:OCS",
          message: "Lip condition unknown — classification halts at the OCS rollup with status INDETERMINATE. OCS is a superclass and is never emitted as a terminal code.",
          whyStopped: "Terminal shape assignment requires the lip condition (it changes section behavior fundamentally); the answer given was UNKNOWN.",
          needed: "Inspect the flange free edges: no fold → OCU (unlipped); one fold per flange → OCL (lipped). Return-lipped profiles (OCR) are outside the Phase 1/2 demo subset.",
        } },
    ],
  },

  /* ---- Component route ---- */
  R1: {
    question: "What functional role does this part play?",
    help: "Roles describe function inside assemblies, independent of shape or family.",
    options: [
      { token: "COL", label: "Column / upright post", rule: "R-ROL-001", assign: { ns: "ROL", code: "COL" }, next: "R2" },
      { token: "BEM", label: "Beam / load member", rule: "R-ROL-002", assign: { ns: "ROL", code: "BEM" }, next: "R2" },
      { token: "ARM", label: "Cantilever arm", rule: "R-ROL-003", assign: { ns: "ROL", code: "ARM" }, next: "R2" },
      { token: "CHL", label: "Support channel (under decks/panels)", rule: "R-ROL-004", assign: { ns: "ROL", code: "CHL" }, next: "R2" },
    ],
  },
  R2: {
    question: "Is it a prismatic member (constant cross-section along its length)?",
    help: "Punched holes and end cuts do not break prismatic-ness — only the continuous profile counts. Prismatic members reference a section; formed parts do not.",
    options: [
      { token: "YES", label: "Yes — constant cross-section", rule: "R-ROL-005", next: "S1" },
      { token: "NO", label: "No — formed / non-prismatic", rule: "R-ROL-006" },
    ],
  },

  /* ---- Assembly route ---- */
  A1: {
    question: "What kind of assemblage is it?",
    help: "An assembly joins parts with distinct roles. Assemblies are never sections and never receive geometry identity (GSID).",
    options: [
      { token: "MESH_DECK", label: "Mesh/wire deck laid on beams", rule: "R-ASM-001", assign: { ns: "ASM", code: "WDK" }, next: "A2W" },
      { token: "BRACED_FRAME", label: "Braced column pair (upright frame)", rule: "R-ASM-002", assign: { ns: "ASM", code: "FRM" }, next: "A2F" },
    ],
  },
  A2W: {
    question: "Front edge condition of the deck?",
    help: "Edge condition is a configuration field (CFG:EDG) — it never changes the assembly type code.",
    options: [
      { token: "FLUSH", label: "Flush", rule: "R-CFG-001", config: { group: "CFG:EDG", field: "front", value: "FLUSH" }, next: "A3W" },
      { token: "WATERFALL", label: "Waterfall (drops over the beam)", rule: "R-CFG-002", config: { group: "CFG:EDG", field: "front", value: "WATERFALL" }, next: "A3W" },
    ],
  },
  A3W: {
    question: "How many support channels?",
    help: "Support count is configuration (CFG:SUP). Changing it creates a new configuration identity, never a new code.",
    options: [
      { token: "TWO", label: "2", rule: "R-CFG-003", config: { group: "CFG:SUP", field: "support_count", value: 2 } },
      { token: "THREE", label: "3", rule: "R-CFG-004", config: { group: "CFG:SUP", field: "support_count", value: 3 } },
      { token: "FOUR", label: "4", rule: "R-CFG-005", config: { group: "CFG:SUP", field: "support_count", value: 4 } },
    ],
  },
  A2F: {
    question: "How is the bracing joined to the columns?",
    help: "Joining method is configuration (CFG:JNT); a bolted and a welded frame are two configurations of the same assembly type.",
    options: [
      { token: "BOLT", label: "Bolted", rule: "R-CFG-006", config: { group: "CFG:JNT", field: "brace_to_column", value: "BOLT" } },
      { token: "FUSION_WELD", label: "Welded", rule: "R-CFG-007", config: { group: "CFG:JNT", field: "brace_to_column", value: "FUSION_WELD" } },
    ],
  },
};

/** Bill of roles emitted per assembly type (Phase 1/2 demo scope). */
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
    trail: [],                  // [{nodeId, token, ruleId}]
    codes: {},                  // { SEC: "OCL", ROL: "COL", ASM: "WDK" }
    config: {},                 // { "CFG:EDG": {front: "WATERFALL"}, ... }
    halt: null,                 // halt descriptor when the engine refuses
  };
}

/** Apply one controlled answer token to the session. Deterministic; throws on unknown tokens. */
function answer(session, token) {
  const node = NODES[session.nodeId];
  const opt = node.options.find(o => o.token === token);
  if (!opt) throw new Error(`Token ${token} is not a controlled answer for node ${session.nodeId}`);
  session.trail.push({ nodeId: session.nodeId, token, ruleId: opt.rule });
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

/** One trace entry per answered question — the rule row is the source of truth. */
function buildTrace(session, rules) {
  return session.trail.map(t => {
    const node = NODES[t.nodeId];
    const opt = node.options.find(o => o.token === t.token);
    const rule = rules[t.ruleId] || {};
    let decision, dictionary = "rules/question_nodes.csv";
    if (opt.halt) {
      decision = `Stop at ${opt.halt.rollup} rollup (INDETERMINATE)`;
      dictionary += " · data/sec_codes.csv";
    } else if (opt.assign) {
      decision = qualified(opt.assign.ns, opt.assign.code);
      dictionary += ` · ${NAMESPACE_DICTIONARY[opt.assign.ns]}`;
    } else if (opt.config) {
      decision = `${opt.config.group} ${opt.config.field}=${opt.config.value}`;
    } else {
      decision = "continue → next question";
    }
    const entry = {
      rule_id: t.ruleId,
      input: `${node.question} → ${opt.label}`,
      decision,
      dictionary,
      standard_reference: rule.standard_reference || "(reference pending)",
      explanation: rule.explanation || "",
    };
    if (rule.warning_code_if_any) entry.warning = rule.warning_code_if_any;
    return entry;
  });
}

function explanations(session, rules, dicts) {
  const lines = session.trail.map(t => (rules[t.ruleId] || {}).explanation || "");
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

function buildOutput(session, dicts, rules) {
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
    decision_trace: buildTrace(session, rules),
  };
  if (halted) {
    output.rollup = session.halt.rollup;
    output.warnings.push({ code: session.halt.warning, message: session.halt.message });
    output.explanations = session.trail.map(t => (rules[t.ruleId] || {}).explanation || "");
    output.refusal = {
      why_stopped: session.halt.whyStopped,
      required_information: session.halt.needed,
      principle: REFUSAL_PRINCIPLE,
    };
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
  output.explanations = explanations(session, rules, dicts);
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

const state = { dicts: null, rules: null, provenance: null, session: null };

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

function statusBadge(status) {
  const span = document.createElement("span");
  span.className = `badge badge-${(status || "unknown").toLowerCase()}`;
  span.textContent = status || "—";
  return span;
}

function renderResult() {
  const box = el("result");
  box.innerHTML = "";
  const s = state.session;
  if (!s || s.nodeId) { box.hidden = true; return; }
  box.hidden = false;
  const output = buildOutput(s, state.dicts, state.rules);

  if (output.status === "CLASSIFIED") {
    box.appendChild(heading("Classification path"));
    const path = document.createElement("p");
    path.className = "path";
    path.textContent = output.classification_path.join("  /  ");
    box.appendChild(path);

    box.appendChild(heading("Suggested codes"));
    box.appendChild(codesTable(suggestedCodes(s, state.dicts)));
  } else {
    renderRefusal(box, output);
  }

  box.appendChild(heading("Decision trace"));
  const traceNote = document.createElement("p");
  traceNote.className = "help";
  traceNote.textContent = "Every decision below is one rule row from rules/question_nodes.csv applied to one answer. Same answers, same rules — same result, every time.";
  box.appendChild(traceNote);
  box.appendChild(traceList(output.decision_trace));

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

function renderRefusal(box, output) {
  const w = output.warnings[0];
  const panel = document.createElement("div");
  panel.className = "refusal";
  panel.innerHTML = `
    <div class="refusal-code">${w.code} — classification refused, status INDETERMINATE</div>
    <dl>
      <dt>Why classification stopped</dt><dd></dd>
      <dt>What is needed to continue</dt><dd></dd>
      <dt>Why the system refuses to infer</dt><dd></dd>
    </dl>
    <p class="path"></p>`;
  const dds = panel.querySelectorAll("dd");
  dds[0].textContent = output.refusal.why_stopped;
  dds[1].textContent = output.refusal.required_information;
  dds[2].textContent = output.refusal.principle;
  panel.querySelector(".path").textContent =
    `Nearest rollup: ${output.rollup} (classifier-only superclass — never a terminal code)`;
  box.appendChild(panel);
}

function traceList(trace) {
  const list = document.createElement("div");
  list.className = "trace";
  for (const t of trace) {
    const card = document.createElement("div");
    card.className = "trace-entry" + (t.warning ? " trace-warning" : "");
    const rows = [
      ["Input", t.input],
      ["Decision", t.decision],
      ["Reason", t.explanation],
      ["Dictionary", t.dictionary],
      ["Standard reference", t.standard_reference],
    ];
    if (t.warning) rows.push(["Warning", t.warning]);
    const head = document.createElement("div");
    head.className = "trace-id";
    head.textContent = t.rule_id;
    card.appendChild(head);
    const dl = document.createElement("dl");
    for (const [k, v] of rows) {
      const dt = document.createElement("dt"); dt.textContent = k;
      const dd = document.createElement("dd"); dd.textContent = v;
      dl.appendChild(dt); dl.appendChild(dd);
    }
    card.appendChild(dl);
    list.appendChild(card);
  }
  return list;
}

function codesTable(codes) {
  const table = document.createElement("table");
  table.innerHTML = "<thead><tr><th>Code</th><th>Name</th><th>Status</th><th>Definition</th><th>Provenance note</th></tr></thead>";
  const tbody = document.createElement("tbody");
  for (const c of codes) {
    const tr = document.createElement("tr");
    const tdCode = document.createElement("td"); tdCode.textContent = c.code; tr.appendChild(tdCode);
    const tdName = document.createElement("td"); tdName.textContent = c.name; tr.appendChild(tdName);
    const tdStatus = document.createElement("td"); tdStatus.appendChild(statusBadge(c.status)); tr.appendChild(tdStatus);
    const tdDef = document.createElement("td"); tdDef.textContent = c.definition; tr.appendChild(tdDef);
    const tdNote = document.createElement("td"); tdNote.textContent = c.demo_note || "—";
    if (c.demo_note) tdNote.className = "note";
    tr.appendChild(tdNote);
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
    const { dicts, rules, provenance } = await loadAllData();
    state.dicts = dicts;
    state.rules = rules;
    state.provenance = provenance;
    el("meta").innerHTML =
      `Dictionaries: <strong>${provenance.source}</strong> · Rules: <strong>rules/question_nodes.csv</strong> · ` +
      `Snapshot: <strong>${provenance.snapshot}</strong> · ` +
      `Demo subset: <strong>${provenance.demoCodes.length} codes (${provenance.demoCodes.join(", ")}) deviate from SNAP-1.0.0</strong> — see README caveats`;
    el("restart").addEventListener("click", resetSession);
    render();
  } catch (err) {
    el("question").innerHTML = `<p class="warning">Failed to load dictionaries/rules: ${err.message}.
      Serve this folder over HTTP (e.g. <code>python -m http.server</code>) or open via GitHub Pages.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", init);
