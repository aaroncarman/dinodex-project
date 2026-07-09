# Refactor Plan — index.html efficiency pass

Audit date: 2026-07-09. Scope: `index.html` (7,619 lines) plus the nine external
data files it loads. Zero visible/behavioural change is the success condition for
every item below. Nothing in this document has been implemented yet — this is
Phase 0 output, for review before Phase 0.5 (snapshot tooling) begins.

---

## 1. Image-fallback pattern

**What it replaces:** ~20 `<img onerror="...">` call sites, but they are NOT one
pattern — they're three:

| Mechanism | Call sites | Behaviour |
|---|---|---|
| `imgFallback(this)` | 17 sites (static prose images, DinoDex grid/modal, person timeline is NOT this one, Last Day, Mass Extinctions, Theropods→Birds, Anatomy 101) | Replaces the `<img>` node itself with a `div.img-fallback` whose text is derived from `alt`. Has a `dataset.fb` guard against double-firing. |
| `handlePersonImageError(this)` | 2 sites (person modal hero, person timeline card) | Does *not* remove the `<img>` — hides it (`display:none`) and appends a sibling `div.person-image-fallback` with a hardcoded "Portrait pending" string, guarded by checking for an existing fallback node. |
| Inline `this.style.display='none'; this.nextElementSibling.style.display='flex'` | 2 sites (Fossils That Changed Science exhibit panel + grid card) | Relies on a pre-rendered sibling placeholder div already present in markup (emoji/`.fossil-exhibit-placeholder`), just toggles visibility. No JS function at all. |

**Proposal:**
- Extract only the true duplicates: a single helper that produces the `<img ... onerror="imgFallback(this)">` tag given `{src, alt, extraClass, style}`, covering the 17 `imgFallback` sites. This removes the repeated ternary/ template-literal boilerplate without touching behaviour.
- Leave `handlePersonImageError` and the Fossils-exhibit inline mechanism **alone** — they are behaviourally distinct (different DOM outcome, different CSS class, different fallback text), not copy-paste duplication of the same thing. Unifying them would change visible behaviour for person portraits and fossil exhibits, which is out of scope for a zero-behaviour-change pass.
- **Risk: Low** for the 17-site extraction (pure string-building, output must be byte-identical). **Do not touch** the other two mechanisms in this pass — flag in REFACTOR-NOTES.md as a possible future consolidation (would require a product decision on which fallback UX wins, not a mechanical refactor).

## 2. Cross-link pill renderers

**What's actually there:** at least 9 distinct implementations across Fossils That
Changed Science, Fossil Hunters, Research Desk, Last Day (x2, one of which is
copy-pasted inline rather than even calling its sibling function), Mass
Extinctions, Anatomy 101, Theropods→Birds (SVG, not HTML), and Glossary
(non-interactive spans). They look similar but diverge in real ways:

| Divergence axis | Who differs |
|---|---|
| Missing/unresolved-id handling | `buildLinkedSpeciesPills`, `renderLastDayLinks`, and the inline Last Day survival-card duplicate render a disabled "missing" span; the fossil-science trio and `mxPairingCol`/`anatHipColumn` silently render a dead pill instead |
| HTML escaping | Only `rdLinkedPills` (Research Desk) escapes `id`/`name`; every other renderer does not |
| Click semantics | Most use `openModal(id)`; Research Desk's grid variant needs `event.stopPropagation()` because the pill sits inside a clickable card; Theropods→Birds uses SVG `<text onclick>`; Mesozoic Ecosystems food-web nodes don't call `openModal` at all — they drive a separate evidence readout panel |
| Interactivity | Glossary's `relatedTerms` pills are plain `<span>`, not buttons — no click handler exists at all, and the value isn't even resolved against other glossary entries (it's raw typed text) |

**Proposal, in three tiers:**
- **Tier A — safe to merge (Risk: Low-Medium):** `renderFossilLinkedSpecies` /
  `renderFossilLinkedPeople` / `renderFossilLinkedResearch` (the original trio
  the prompt named). These three are genuinely the same shape: same section
  wrapper, same lookup-then-map-then-join structure, only the array/lookup
  field/click-handler/CSS-suffix differ. Parameterize into one
  `renderFossilLinkedEntities(ids, {arrayName, labelField, pillClass, onClick,
  sectionTitle})`. Also fold in `renderFossilLastDay` as a fourth call of the
  same shape (single static pill).
- **Tier B — merge with an explicit missing-state parameter (Risk: Medium):**
  `buildLinkedSpeciesPills` (person modal), `renderLastDayLinks`, and the
  duplicated inline block in `renderSurvivalCards` are close enough to merge
  *if* the missing-state span and aria-label wording are preserved exactly
  per call site. The inline survival-card duplicate should at minimum be
  replaced with a call to `renderLastDayLinks` — that's a pure de-duplication,
  not a design merge, so it's lower risk than merging it with the other two.
- **Do NOT merge into Tier A/B:** `rdLinkedPills` (escaping differs — merging
  would either silently start escaping other tiers' output, changing rendered
  entities like `&` in a species name, or silently stop escaping Research
  Desk's, a real behaviour change either way), `mxPairingCol`/`anatHipColumn`
  (single-entity, not list, different wrapper markup), the Theropods→Birds SVG
  tip text (different element type entirely), and the Glossary `relatedTerms`
  span (non-interactive — merging would either wire up clicks that don't exist
  today, or the pill trio would need a "make it inert" mode, both are
  behaviour changes). These are flagged, not merged.
- **Separately worth flagging (content bug, not a refactor target):** every
  glossary term has a populated `exampleSpeciesIds` array that is never read
  by any render function. This is a dead data field, not dead code — logging
  in REFACTOR-NOTES.md for the content owner, not touching it here.

## 3. Modal / detail-panel implementations

Five distinct patterns exist, not four:

1. **DinoDex `openModal`/`closeModal`** — shared `#scrim`/`#modal` overlay,
   focus save/restore, Escape key, body-scroll lock, 350ms-deferred innerHTML
   clear.
2. **Fossil Hunters `openPersonModal`** — reuses pattern 1's `#scrim`/`#modal`
   and literally calls the *same* `closeModal()` (no separate close function
   exists). Identical mechanics to (1); only the data lookup and builder
   function differ.
3. **Fossils That Changed Science `openFossilExhibit`/`closeFossilExhibit`** —
   own dedicated panel (`#fossil-exhibit-detail-panel`), class-toggle instead
   of shared scrim, immediate innerHTML clear (not deferred), no focus
   management, no Escape-key handling, click-outside via inline `onclick`
   attribute instead of `addEventListener`.
4. **Research Desk `rdOpenDetail`/`rdCloseCase`** — not an overlay at all: a
   view-swap between `#rd-grid-area` and `#rd-detail` via `style.display`, uses
   `window.scrollTo(0,0)` (real page scroll) instead of resetting an inner
   modal's `scrollTop`, no focus management, no Escape key, content persists
   (not wiped) between opens.
5. **Glossary `glExpandTerm`** — in-place accordion: toggles a `.gl-open` class
   on the term's own card, no separate panel/overlay/scrim exists at all.

**Proposal:**
- Merge (2) into (1) is nearly free — they already share every DOM element and
  the close function; the only real "extraction" is making `openModal` accept
  a `{find, build}` pair or having both call a common `openOverlay(html)`
  helper. **Risk: Low**, since behaviour is already identical, this is a pure
  rename/parameterize with no logic change.
- Do **not** attempt to unify (3), (4), (5) into (1)/(2) in this pass. Each has
  at least one accessibility or interaction difference (missing focus
  management, missing Escape handling, different scroll target, different
  persistence-between-opens behaviour) that would have to be either (a) left
  as-is per call site — meaning the "shared utility" is really just a thin
  wrapper with three different configs and marginal benefit, or (b)
  normalized — meaning a real UX change (e.g. adding Escape-to-close to the
  fossil exhibit panel) that needs a product decision, not a refactor.
  Recommend treating (3)/(4)/(5) as a **Phase 3 proposal only** per the
  original brief: write up what a shared utility's config surface would need
  to look like (scrim vs. panel vs. accordion, focus mgmt on/off, Escape
  on/off, immediate vs. deferred clear), get a go-ahead on that shape first,
  then migrate one at a time. Given the divergence found, my recommendation
  when we get there will likely be "share the low-level bits (body-scroll
  lock, focus save/restore as an optional module) but keep three call
  patterns" rather than one mega-function — worth flagging now so the Phase 3
  proposal doesn't surprise you later.

## 4. CSS audit

- **16 confirmed likely-dead selectors** (zero references anywhere in
  index.html markup or the data files, verified by grep, with dynamically-built
  class names like `.ev-strong`/`.gl-diff-*` excluded as false positives):
  `.view-tab`, `.view-tab-sep`, `.view-tabs` (only a comment remains — no rule
  bodies left to delete, this is a no-op), `.stub-view-wrap`, `.stub-note`,
  `.hpw-header`, `.hpw-intro`, `.hpw-title`, `.hpw-section`,
  `.hpw-section--stub` (+ descendant rule), `.people-filters` (+ `.chip` /
  `.chip:last-child` children, base and mobile-media copies — 6 rules total),
  `.people-grid`, `.rai-home-note` (+ `button`/`:hover` children), `.dt-act2`,
  `.dt-act2-band`, `.dt-panel-empty`, `.dtp-band-history` (+ `:hover`),
  `.dtp-verdict` (base + media copy).
  **Risk: Low** — deletion-only, no rewriting of live rules. This is the
  safest possible Phase 1 item since a snapshot diff of rendered output will
  be unaffected by definition (dead CSS can't be visually referenced).
- **69 selectors defined more than once** — sampled a representative set
  across every visual area (Last Day, Fossil Hunters, HPW, Deep Time, the
  sidebar-open compound selectors) and all are legitimate base+`@media`
  responsive-override pairs, not accidental duplicates/conflicts, **except**
  `.dtp-verdict` which is a duplicate of an already-dead rule (covered above).
  I did not hand-verify all 69 pairs individually — if we want full certainty
  before any CSS edit, Phase 0.5's snapshot diff is the real backstop here
  regardless (removing/editing a rule that turns out to matter will show up
  as a visible diff immediately). Not proposing any further CSS action beyond
  the 16-selector deletion list above.

---

## Recommended build order (subject to your go-ahead per phase, per the brief)

1. Phase 0.5: snapshot tooling (next step, pending your confirmation to proceed).
2. Phase 1a: delete the 16 dead CSS selectors (lowest possible risk).
3. Phase 1b: extract the 17-site `imgFallback` image-tag builder.
4. Phase 2a: merge the fossil-science pill trio (+ `renderFossilLastDay`) into
   one parameterized function.
5. Phase 2b: merge `renderLastDayLinks` + its copy-pasted inline duplicate in
   `renderSurvivalCards` (pure de-dup, no new abstraction beyond calling the
   existing function). Evaluate whether `buildLinkedSpeciesPills` should also
   fold in at this point or stay separate — will confirm once 2a/2b are
   verified clean.
6. Phase 3: propose (don't implement) the shared detail-panel utility shape,
   informed by the five-pattern divergence found in §3.

Explicitly **not proposed** for this pass: touching `handlePersonImageError`,
the Fossils-exhibit inline fallback, `rdLinkedPills`, `mxPairingCol`,
`anatHipColumn`, the Theropods→Birds SVG tips, the Glossary `relatedTerms`
spans, or any of the CSS duplicate-selector pairs beyond `.dtp-verdict`. These
either have real behavioural differences worth preserving, or the "duplication"
turned out to be legitimate responsive-design practice rather than copy-paste
waste.
