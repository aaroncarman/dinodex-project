# Refactor Notes

Running log of things noticed during the efficiency refactor (see
`REFACTOR-PLAN.md`) that are out of scope for a zero-behaviour-change pass —
content issues, data-shape oddities, and forward-looking structural notes.
Nothing here has been acted on.

---

## Content / data issues spotted (not fixed — flagging for the content owner)

- **`exampleSpeciesIds` on every glossary term is dead data.** Every entry in
  `glossary.js` has a populated `exampleSpeciesIds` array, but no render
  function in `index.html` or `glossary.js` ever reads it. Either it's a
  cross-link that was scaffolded (parallel to the fossil-science trio) and
  never wired up, or it's leftover from an earlier design. Worth a decision:
  wire it up as a real "Species that show this" pill list, or drop the field.
- **Glossary `relatedTerms` pills are not interactive.** They render as plain
  `<span>` elements with no `onclick`, and the value is raw typed text, not
  resolved against other glossary entries the way `linkedSpecies`/
  `glossaryLinks` are elsewhere. A reader can see "Related: taphonomy" but
  can't click through to it. If the intent was always static text, fine — but
  it reads like an oversight given every other cross-reference type in the
  site is clickable.

---

## Phase 3 proposal: shared detail-panel/modal utility (NOT IMPLEMENTED)

Per the original refactor brief, this is a proposal only. Do not implement
without explicit per-tab go-ahead — the five existing implementations
genuinely differ in accessibility behaviour, not just code shape, so merging
them is a product decision as much as a refactor.

### What exists today (from REFACTOR-PLAN.md §3)

| Pattern | DOM | Focus mgmt | Escape key | Scroll reset | Content persists between opens? |
|---|---|---|---|---|---|
| DinoDex `openModal` | shared `#scrim`/`#modal` overlay | yes (`lastFocus`) | yes | `modal.scrollTop=0` | no (350ms deferred clear) |
| Fossil Hunters `openPersonModal` | same `#scrim`/`#modal`, same `closeModal()` | yes (shared) | yes (shared) | yes (shared) | no (shared) |
| Fossils Science `openFossilExhibit` | own panel `#fossil-exhibit-detail-panel` | **no** | **no** | **no** | no (immediate clear) |
| Research Desk `rdOpenDetail` | view-swap, `#rd-grid-area`/`#rd-detail` | **no** | **no** | `window.scrollTo(0,0)` | **yes** (stale until next open) |
| Glossary `glExpandTerm` | in-place accordion, no separate panel | n/a | n/a | n/a | n/a (not applicable — it's a toggle) |

### Why this isn't a simple merge

The DinoDex/Person pair is already unified in practice (literally shares
`closeModal`). The other three are not just "the same thing implemented
differently" — they're three different UX decisions:
- The fossil exhibit panel and Research Desk both skip focus management and
  Escape-to-close. That could be an accessibility gap worth fixing, or it
  could be intentional given they're inline panels rather than modal
  overlays that trap focus. Not my call to make silently.
- Research Desk's "don't wipe content between opens" is arguably correct for
  its swap-panel model (avoids a flash of empty content) but would be wrong
  if copied onto the overlay pattern.

### Proposed shape, if/when this goes ahead

A low-level shared module rather than one mega-function:

```js
// opens `panelEl`, optionally with scrim + body-scroll-lock + focus-trap.
// Each existing open*/close* function would call into this for the bits
// that are genuinely identical, keeping its own content-building and its
// own decision about which optional behaviours it wants.
function openDetailSurface(panelEl, html, {
  scrimEl,           // pass to get backdrop + click-outside-to-close
  lockScroll,        // body.style.overflow lock on/off
  manageFocus,       // lastFocus save/restore + focus first interactive el
  escapeToClose,      // wire the Escape key
  clearOnClose,       // 'immediate' | 'deferred' | 'never'
} = {}) { ... }
```

Recommended migration order if approved: (1) DinoDex + Person modal onto the
shared module first since they're already behaviourally identical — pure
mechanical work, verify with snapshot diff. (2) Stop and get a product
decision on whether the Fossils Science panel and Research Desk should *gain*
focus-trap/Escape support as part of migrating (a real UX change) or keep
their current behaviour explicitly opted out. (3) Glossary's accordion is
different enough in kind (no overlay at all) that it probably shouldn't move
onto this utility at all — flagging that as a likely "leave alone."

### Step 1 done; steps 2-3 evaluated and declined — closing this phase

Step 1 shipped: `openModal`/`openPersonModal` now share `openOverlayModal()`.
Verified byte-identical via snapshot diff (21 views, 102 species modals, 12
person modals).

For step 2, chose to preserve current behaviour rather than add focus-trap/
Escape (that choice being the zero-behaviour-change default the whole refactor
has followed) — but on reading the actual `openFossilExhibit`/
`closeFossilExhibit` and `rdOpenDetail`/`rdCloseCase` code closely to do the
merge, there isn't a real merge to do. Unlike DinoDex/Person (which were
byte-identical copy-paste), these two share no implementation at all — only
the label "show a detail view":

- Fossils Science: `panel.classList.add('open')`, locks body scroll, **wipes**
  `innerHTML` on close.
- Research Desk: swaps `style.display` between two separate permanent
  elements (`#rd-grid-area` / `#rd-detail`), calls `window.scrollTo(0,0)`,
  deliberately does **not** wipe content on close (avoids a flash of empty
  content next time it opens).

A shared `openDetailSurface(panel, html, opts)` covering both would need an
`opts` branch for nearly every line already in each function — that's
indirection, not deduplication, and it risks quietly normalising away
Research Desk's "don't wipe" choice the next time someone edits the shared
function without realising one caller depends on the old content still being
there. Declining to implement, per the brief's instruction to stop and flag
rather than force a merge that erases a real behavioural difference.

Glossary's accordion (step 3 candidate) was already flagged as a likely
"leave alone" and nothing since has changed that.

**Phase 3 is closed at step 1.** No further modal/panel unification is
planned unless a future change gives Fossils Science and Research Desk an
actual reason to converge (e.g. if a product decision adds focus-trap +
Escape to both — at that point they'd likely become similar enough to share
real code, and this section should be revisited).

---

## Phase 4: forward-compatibility notes (documentation only, no implementation)

### Chatbot grounding ("all text content for a topic as one blob")

The data files are already reasonably close to this. Each species/person/
glossary term/research case is one object with clearly named prose fields
(`overview`, `behaviour`, `simpleDefinition`, `whyItMatters`, etc.), so a
"concatenate all string fields for entity X" function would be simple to
write today — the render functions don't need to change for that, since the
data objects are the source of truth and the DOM is just one projection of
them.

What would need deciding before a chatbot feature could ground answers
reliably:
- **Confidence/uncertainty framing would need to travel with the text.** Right
  now `conf-strong|moderate|low` markers exist in `study[].interps[]` and
  similar structures, but they're rendered as CSS classes on the DOM, not
  carried as data alongside the prose if you just concatenate string fields.
  A naive "dump all text" blob would lose the evidence-vs-inference distinction
  that's the whole point of the site (per CLAUDE.md §4) — a chatbot grounded on
  the flattened text could end up stating a contested interpretation as fact.
  Any grounding function should walk the structured fields (not just
  string-concatenate) so confidence levels stay attached to their claims.
- **Cross-references (`glossaryLinks`, `linkedSpecies`, etc.) are IDs, not
  inline text** — a grounding blob would want to optionally resolve those into
  actual sentences ("see also: Tyrannosaurus rex") or the chatbot won't be able
  to explain a cross-reference it surfaces.
- No action needed now — this is a "the data shape doesn't block it" finding,
  not a design proposal. Revisit when the chatbot feature is actually scoped.

### Other structural notes from this refactor

- Adding a new species/person/etc. entry is unaffected by anything done in
  Phases 1-2 — those touched only render-function internals, not the data
  schema, per the non-negotiables.
- Nothing in this refactor bears on an alternative navigation scheme; the
  sidebar nav and `data-view` wiring weren't touched.
