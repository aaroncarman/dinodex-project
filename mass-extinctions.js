/* ============================================================
   MASS EXTINCTIONS DATA
   Loaded before the main inline script. All exports use the
   MASSEXT_* naming convention. Render functions live in
   index.html and reference this data rather than embedding
   content inline, following the last-day.js / theropods-to-birds.js
   / mesozoic-ecosystems.js pattern.

   Covers three events only: End-Permian, End-Triassic, and a
   short K-Pg recap that hands off to The Last Day rather than
   duplicating it. End-Ordovician and Late Devonian are
   deliberately excluded as not relevant to this site's
   dinosaur-centred story.
   ============================================================ */

/* ── HOOK ────────────────────────────────────────────────── */
var MASSEXT_HOOK_TEXT = "Dinosaurs exist because of two catastrophes they didn't cause and barely survived. One emptied the world their ancestors would eventually inherit. The other cleared out the rivals standing in their way. Neither had anything to do with dinosaurs being better at anything. This is the story of both.";

var MASSEXT_HOOK_IMG = {
  src: 'images/mass_extinctions/siberian_flood_basalt.jpeg',
  alt: 'Siberian flood basalt landscape, remnant of the volcanic province linked to the end-Permian extinction',
  caption: 'A remnant of the Siberian Traps - flood basalt from the volcanic province blamed for the worst extinction in the history of life.'
};

/* ── SECTION 1: END-PERMIAN ─────────────────────────────── */
var MASSEXT_END_PERMIAN = {
  date: '~252 Ma',
  lossHeadline: '81-96% of marine species; 70-75% of terrestrial vertebrate species',
  barPct: 88, /* illustrative only - see framing text; real figures are the two above, not this single number */
  beforeImg: {
    src: 'images/mass_extinctions/late_permian_life.jpg',
    alt: 'Illustration of Late Permian land life, dominated by synapsids and large amphibians',
    caption: null /* source/licence not independently confirmed - no attribution guessed */
  },
  afterSpeciesId: 'lystrosaurus',
  body: "The end-Permian extinction, roughly 252 million years ago, is the most severe extinction in the history of life. Estimates put the loss at 81 to 96% of marine species and 70 to 75% of terrestrial vertebrate species. The trigger was the Siberian Traps, a volcanic province that eventually covered somewhere around six million square kilometres of Siberia.",
  bodyMechanism: "The exact kill mechanism is still debated: warming, ocean anoxia, ocean acidification, and possibly toxic metal pollution have all been implicated, with no consensus on which mattered most. Whether the extinction happened in one pulse or two is also a live, open question.",
  bodyBefore: "Before the extinction, synapsids - the mammal-line lineage - and large amphibians dominated the land. Recovery took millions of years. What eventually inherited the recovering world included the archosaurs, the group that would go on to produce the dinosaurs.",
  confidenceNote: "The Siberian Traps as the ultimate trigger is well established. The exact kill mechanism and whether it came in one pulse or two are still under active research, not settled details being simplified here.",
  sourceNotes: 'Li et al. (2021), Nature Communications, on Siberian Traps nickel isotope evidence; Clarkson et al. (2015), Science, on end-Permian ocean temperature and hypoxia.'
};

/* ── SECTION 2: END-TRIASSIC ────────────────────────────── */
var MASSEXT_END_TRIASSIC = {
  date: '~201.5 Ma',
  lossHeadline: '~76% of species, on land and at sea',
  barPct: 76,
  supportingImg: {
    src: 'images/mass_extinctions/palisades_sill.jpeg',
    alt: 'The Palisades Sill, a surviving exposure of Central Atlantic Magmatic Province volcanism',
    caption: null, /* source/licence not independently confirmed - no attribution guessed */
    dateCaveat: "Some dating places the Palisades Sill itself somewhat later (roughly 192-186 Ma) than the extinction boundary - shown here as a surviving exposure of this volcanic event, not as an exact match to the boundary's own date."
  },
  beforeSpeciesId: 'postosuchus',
  afterSpeciesId: 'cryolophosaurus',
  body: "Dated to roughly 201.5 million years ago via zircon geochronology, the end-Triassic extinction removed about 76% of species on land and at sea. The cause was CAMP - the Central Atlantic Magmatic Province - a wave of volcanism that erupted as Pangaea began rifting apart.",
  bodyRemoved: "It removed the large crurotarsans (Postosuchus and its relatives), most large labyrinthodont amphibians, and many early synapsids. Not every early dinosaur lineage survived either - some primitive lines went extinct too - but enough did, and with the large rivals gone, dinosaurs diversified rapidly into the space left behind, beginning a rise that lasted roughly 135 million years.",
  hypothesis: {
    label: 'A hypothesis, not a settled fact',
    text: "Repeated volcanic-winter cooling pulses may have specifically favoured the already-feathered, insulated dinosaurs adapted to cooler, higher-latitude conditions over the large, uninsulated crurotarsans that dominated the warmer tropics. If so, insulation may have given dinosaurs a specific edge at exactly the right moment, not just luck - but this remains one candidate explanation, not a consensus account."
  },
  documentaryAside: "At least one popular natural-history documentary series is reported to have skipped over this extinction almost entirely, apparently to tell a cleaner story of dinosaurs simply out-competing their rivals. The real story - survival aided by traits that evolved for other reasons - is more interesting, not less.",
  sourceNotes: 'Blackburn et al., Science, on CAMP zircon geochronology; volcanic-winter/dinosaur insulation hypothesis paper for the feather-insulation hypothesis.'
};

/* ── SECTION 3: K-PG RECAP ──────────────────────────────── */
var MASSEXT_KPG_RECAP = {
  date: '66 Ma',
  lossHeadline: '~75% of species overall',
  body: "The most recent of the three, 66 million years ago: an asteroid struck the Yucatán Peninsula, and roughly 75% of species were lost. Every non-avian dinosaur species ended here. The full story - the impact, the aftermath, who survived and why - is told in The Last Day rather than repeated here.",
  linkView: 'last-day',
  linkLabel: 'Read The Last Day'
};

/* ── CLOSING VISUAL: SEVERITY COMPARISON ────────────────── */
var MASSEXT_SEVERITY_FRAMING = "Percentage-loss figures vary between studies and what exactly is being measured, so treat the strip below as illustrative of relative scale, not a precise scoreboard.";

var MASSEXT_SEVERITY_BARS = [
  { id: 'end-permian', label: 'End-Permian', date: '~252 Ma', pct: 88, detail: '81-96% marine species; 70-75% terrestrial vertebrates' },
  { id: 'end-triassic', label: 'End-Triassic', date: '~201.5 Ma', pct: 76, detail: '~76% of species overall' },
  { id: 'k-pg', label: 'K-Pg', date: '66 Ma', pct: 75, detail: '~75% of species overall' }
];
