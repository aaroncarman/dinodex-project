# DinoDex — Project Instructions for Claude

> Place this file at the repo root. Claude Code reads `CLAUDE.md` automatically as
> persistent context. The chat-based Claude should also be pointed at it. Keep it
> updated as the project evolves — treat it as the single source of truth for "how
> we work here."

---

## 1. What this project is

DinoDex is a single-page, static field guide to dinosaurs and deep time. It is three
things at once, and decisions should serve all three:

1. **A learning artifact for a paleo enthusiast** — content accuracy and intellectual
   honesty matter as much as features.
2. **A portfolio piece for a paleobiology application** — it should demonstrate
   genuine subject understanding, not just web-dev polish. The "separate what the
   fossils show from what scientists argue about" philosophy is the differentiator;
   protect it.
3. **A learning-and-development vehicle for AI-assisted building** — the owner is an
   AI consultant using this to deepen skills in vibecoding, web design, agentic
   systems, and data work. So *how* we build is itself a deliverable. Explain
   reasoning, name trade-offs, and prefer approaches that teach transferable skills
   over one-off hacks.

When these goals conflict, ask which one is in front today rather than guessing.

---

## 2. Current architecture (as of this writing — verify before trusting)

- **`index.html`** — the live app. ~3,550 lines. Contains:
  - All CSS in one `<style>` block in `<head>`.
  - All DOM scaffolding: a tab nav (`#viewTabs`) that shows/hides view `<div>`s.
  - One large inline `<script>` with all app logic and render functions. All data
    has been extracted to external files — the inline script contains logic only.
- **External data files**, loaded via `<script>` tags before the inline script:
  - `species.js` — `var SPECIES = [...]` — **74** entries. Rich schema (see §3).
  - `glossary.js` — `window.GLOSSARY_TERMS = [...]` — **41** terms, `gl*`-prefixed logic.
  - `research-cases.js` — `var RESEARCH_CASES = [...]` — **10** open-question cases.
  - `fossil-hunters.js` — `var PEOPLE = [...]` — **12** people.
  - `last-day.js` — three arrays: `LAST_DAY_CHAPTERS` (8), `SURVIVAL_GROUPS` (8),
    `FOSSILS_SCIENCE_CASES` (11). Extracted in Phase 0 — render functions in
    index.html unchanged, data now external.
- **`index_copy.html`** — the OLD monolith (~6,900 lines). Superseded by git history.
  **Delete this file** — it is dead weight and a source of confusion. If anything
  from it is ever needed, it is recoverable from the initial git commit.

### Views (tabs)
Home · DinoDex · Timeline · Moving Earth · Fossil Hunters · Fossils That Changed
Science · The Last Day · Research Desk · Glossary.

### Known structural debt (don't "fix" silently — discuss first)
- CSS is one monolithic block; not yet split. Low priority until the project grows
  further.
- No build step, no module system — everything is global-scope `<script>` tags. This is
  fine for a static portfolio site; do not introduce a bundler/framework without an
  explicit decision, because that trades simplicity for capability and the owner wants
  to make that trade deliberately.

---

## 3. Data schemas — match these exactly when adding entries

Adding content is the most common task. New entries MUST match the existing object
shape or the render functions break. Before adding, open the relevant file and copy an
existing entry as a template. Key fields:

**Species** (`species.js`): `id, name, epithet, pron, period, clade, diet, age,
startMa, endMa, length, mass, place, img, overview, insights[[title,body]...],
behaviour, evolution, study[{q,why,interps[[label,conf,text]]}], matters, fossilRecord{
knownFrom, evidenceLevel, locality, formation, material[], note}, hook, learnerLevel,
conceptTags[], glossaryLinks[], researchLinks[]`. HTML is allowed inside prose fields
(`<b>`, `<p>`). Confidence values use the `conf-strong|moderate|low` convention.

**Glossary** (`glossary.js`): `id, term, category, difficulty(core|useful|advanced),
aliases[], simpleDefinition, scientificExplanation, whyItMatters, dinodexContext,
exampleUsage, examples[], exampleSpeciesIds[], relatedTerms[], keywords[], sourceNotes`.

**Research case** (`research-cases.js`): `id, number, title, subtitle, hook, summary,
status[], categories[], activeness(1–5), evidence[], question, whyItMatters,
changedRecently, competingInterpretations[], mostlyAgreed[], unresolved[], direction,
cautiousReading, linkedSpecies[], papers[{authors,year,title,source,doi,type,note}]`.

**Person** (`fossil-hunters.js`): `id, name, dates, role, oneLineHook, knownFor,
eraCategory, linkedDinoDexSpecies[], image, imageAlt, imageCaption, imageFit,
imagePosition, modal{person,discovery,ideaChanged,messyBit,legacyInDinodex},
sourceNotes[]`.

**Last Day chapter** (`last-day.js` → `LAST_DAY_CHAPTERS`): `id, nav, kicker, title,
time, body(HTML), links[], facts[{k,v}], chain[{num,label,desc}], afterHTML, img{src,
alt,caption,contain,position}`.

**Survival group** (`last-day.js` → `SURVIVAL_GROUPS`): `group, fate, tone
(loss|some|survived), why, examples[]`.

**Fossil exhibit** (`last-day.js` → `FOSSILS_SCIENCE_CASES`): `id, number, title,
subtitle, image, alt, caption, contain, before, showed, how, nuance, species[],
people[], researchCases[], lastDay(bool)`.

Cross-references rely on matching `id`s (e.g. `glossaryLinks`, `linkedSpecies`,
`exampleSpeciesIds`). When adding an entry that references another, verify the target
`id` actually exists.

---

## 4. House content standards (non-negotiable — this is the portfolio's soul)

- **Separate evidence from inference.** Every claim about behaviour, ecology, or
  appearance should make clear what is preserved vs. interpreted. This is the site's
  whole thesis. Never write confident prose about a contested point.
- **Represent live debates honestly.** Use the `study` / `competingInterpretations`
  structures. Show confidence levels. "We don't know" is a valid, valuable answer.
- **No invented facts, no invented citations.** Every paper in `papers[]` must be real
  with a correct DOI. If unsure, flag it for verification — do not fabricate.
- **British English** in prose (the existing content uses it: "palaeontology",
  "metres", "colour").
- **Match the existing voice**: precise, calm, a little wry, never breathless. Compare
  any new prose against existing entries before committing.

---

## 5. How to work with the codebase

- **Edit `index.html` and the data files (`species.js`, `glossary.js`, `research-cases.js`,
  `fossil-hunters.js`, `last-day.js`).** `index_copy.html` has been deleted — use git
  history if you ever need to look back at the old monolith.
- **Make surgical edits.** This is a large hand-built file; prefer targeted
  `str_replace` over rewriting whole sections. Show the diff and explain it.
- **Preserve the design system.** Colours, type, and spacing come from CSS custom
  properties in `:root` (e.g. `--bone`, `--ink`, `--rust`, `--strata-*`). Use the
  variables; don't hardcode hex values.
- **Test mentally before claiming done.** There's no test suite. After any change to a
  render function or data schema, trace how it flows to the DOM and call out anything
  that could break a cross-reference.
- **When adding a capability, default to vanilla JS + static files** unless we've
  explicitly decided otherwise. Keep the "no build step" property until there's a
  reason worth the cost, and name that reason.

---

## 6. Paleontology research workflow

Deep, accurate paleo research is a recurring need. When researching:

- **Prefer primary literature and authoritative sources**: peer-reviewed papers (with
  DOIs), museum publications (NHM, AMNH, Smithsonian), and recognised researchers.
  Treat secondary/popular sources as leads to verify, not as citable facts.
- **Date-stamp the science.** The field moves fast (e.g. the 2024–25 Nanotyrannus
  shift). Always note when a finding is recent or contested, and search for the
  current state rather than relying on training data.
- **Produce research as structured notes** that map onto the data schemas above, so
  findings drop cleanly into `species.js` / `research-cases.js`. A good research
  deliverable already looks like a draft entry.
- **Separate consensus from frontier** in every research summary — mirror the
  `mostlyAgreed` / `unresolved` split the site itself uses.
- Flag anything you couldn't verify rather than smoothing over the gap.

---

## 7. Interaction style the owner wants

- This is an L&D collaboration, not just task execution. Explain the *why*, surface
  trade-offs, and teach the transferable pattern.
- Push back when something is a bad idea, scientifically or technically. Honest
  disagreement is more valuable here than agreeableness.
- For anything ambiguous or multi-path, lay out the options and let the owner choose
  rather than picking silently.
- Keep an eye on all three project goals (§1) and say which one a given suggestion
  serves.
