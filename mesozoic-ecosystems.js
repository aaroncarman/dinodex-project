/* ============================================================
   MESOZOIC ECOSYSTEMS DATA
   Loaded before the main inline script. All exports use the
   ME2_* naming convention (existing ME_* globals belong to
   Moving Earth). Render functions live in index.html and
   reference this data rather than embedding content inline,
   following the last-day.js / theropods-to-birds.js pattern.
   ============================================================ */

/* ── HOOK ────────────────────────────────────────────────
   Timeline scale runs 252 Ma (true start of the Triassic, so
   the three colour bands represent the full, correct span of
   each period) to 66 Ma (K-Pg). Dinosaurs first appear at 231
   Ma - partway into the Triassic band, not at the strip's
   start - matching the Deep Time tab's DEEP_TIME_ANCHORS
   figure. A separate, unscaled "and then" segment follows for
   the post-66 Ma arrival of true grassland. */
var ME2_HOOK_TEXT = "Picture a dinosaur, and you'll probably put it somewhere green - ferns, maybe a distant forest, perhaps even open grassland. Almost none of that picture is right. Dinosaurs existed for over 100 million years - more than half their entire history - before a single flower existed anywhere on Earth. Grass arrived even later. And true grassland, the kind of open grassy plain most people actually picture, never existed at all while a non-avian dinosaur was alive to walk across it. It's a purely post-dinosaur invention.";

var ME2_TIMELINE_START_MA = 252;
var ME2_TIMELINE_END_MA = 66;

var ME2_TIMELINE_POINTS = [
  {
    id: 'dinosaurs-first',
    ma: 231,
    label: 'Dinosaurs first appear',
    note: 'The same figure used in the Deep Time tab. The Triassic itself began 21 million years earlier - dinosaurs turn up after the period is already well underway.'
  },
  {
    id: 'angiosperms-first',
    ma: 130,
    label: 'Flowering plants first appear',
    note: 'Dinosaurs had already existed roughly 101 million years - more than half their history - before this point.',
    glossaryId: 'cretaceous-terrestrial-revolution'
  },
  {
    id: 'earliest-grass',
    maRangeLabel: '113-101 Ma',
    ma: 107,
    label: 'Earliest confirmed grass',
    note: "Phytoliths found with a basal duck-billed dinosaur's teeth, China, described 2018.",
    glossaryId: 'phytolith'
  },
  {
    id: 'grass-and-kpg',
    maRangeLabel: '67-65 Ma',
    ma: 66,
    label: 'Grass confirmed in dinosaur diets, right before the extinction',
    note: 'Titanosaur coprolites, India (Prasad et al. 2005, Science) - the K-Pg extinction, at 66 Ma, followed within the same narrow window.',
    glossaryId: 'coprolite'
  }
];

var ME2_TIMELINE_REVISION_NOTE = "Until a 2005 discovery of grass phytoliths in fossil dung, the standard view was that grasses were purely a Cenozoic phenomenon - no dinosaur ever encountered one. A 2018 fossil find pushed the confirmed date back further. This is a live example of the field revising its picture of the past, not a settled backdrop.";

var ME2_TIMELINE_AFTER = {
  label: 'True grasslands become ecologically significant',
  note: 'Well into the Cenozoic, tens of millions of years after 66 Ma - grassland is a purely post-dinosaur biome.'
};

/* ── FRAME ───────────────────────────────────────────────
   Text only. Rendered with a goToView('moving-earth') link. */
var ME2_FRAME_TEXT = "Moving Earth showed the world's geography changing beneath the dinosaurs' feet. That drift did more than redraw coastlines - it remade climate, vegetation, and food webs along with it, on a timeline that often runs against what feels intuitive, as the flower and grass timeline above shows. This is the world that resulted: what it felt like to stand in it, what actually grew there, and who ate whom.";

/* ── SECTION 1: CLIMATE ─────────────────────────────────── */
var ME2_CLIMATE_ICE_NOTE = "None of the three had polar ice at either pole - worth sitting with before the differences below.";

var ME2_CLIMATE_CARDS = [
  {
    id: 'triassic',
    period: 'Triassic',
    co2: '~600 to over 2,000 ppm, depending on sub-stage',
    seaLevel: 'Low',
    character: 'A single vast continent produces a climate of extremes: huge interior deserts far from any coast, strong seasonal monsoons, little refuge from either.'
  },
  {
    id: 'jurassic',
    period: 'Jurassic',
    co2: '~1,200 ppm (Late Jurassic, 2025 tooth-enamel study)',
    seaLevel: 'Rising, as new seaways open between the splitting continents',
    character: "As Pangaea began splitting, new seaways moderated the extremes - more humid than the Triassic's interior deserts, though still a full greenhouse world. High-latitude lake sediment evidence shows winters at the poles still dropped below freezing seasonally - a warm world, not a uniformly tropical one."
  },
  {
    id: 'cretaceous',
    period: 'Cretaceous',
    co2: '~750 ppm (Late Cretaceous, same 2025 study) - lower than the Jurassic figure',
    seaLevel: 'High, flooding shallow seas across low-lying continents',
    character: 'The warmest sustained interval of the three - but not because of higher CO2. The warmth instead reflects ocean circulation, continental configuration, and the complete absence of polar ice anywhere on the planet. By its final few hundred thousand years, evidence points to further warming still - the Hell Creek world used below.'
  }
];

var ME2_CLIMATE_CONFIDENCE_NOTE = "These are broad, well-supported trends, not point-by-point certainties - exact figures vary between reconstruction methods and studies, and short-term fluctuations sit on top of the broad pattern. The Jurassic and Cretaceous CO2 figures follow a 2025 dinosaur tooth enamel isotope study (PNAS); the wider Triassic range reflects multiple studies across its sub-stages.";

/* ── SECTION 2: FLORA ───────────────────────────────────── */
var ME2_FLORA_INTRO = "For most of the Triassic and Jurassic - long before flowering plants existed at all - the plant world belonged to gymnosperms: conifers, cycads, ferns, and ginkgoes. A Jurassic forest would have looked, to modern eyes, oddly monochrome: greens and browns, no blossom, no fruit as we'd recognise it.";

var ME2_FLORA_REVOLUTION = "That changed with the Cretaceous Terrestrial Revolution, roughly 125 to 80 million years ago - the point flowering plants went from a minor presence to the dominant plant group across much of the world. From their first appearance around 130 million years ago, angiosperm diversity climbed sharply while conifer diversity declined over the same interval.";

var ME2_FLORA_CORRECTION = {
  heading: 'The tempting story, and the more honest one',
  body: "It's easy to assume flowering plants and plant-eating dinosaurs rose together as partners. The evidence doesn't support that cleanly. A well-cited 2008 study (Lloyd et al., Proceedings of the Royal Society B) found no clear correlation between angiosperm diversification and dinosaur diversity patterns over the same interval, and dinosaurs appear to have contributed comparatively little to spreading flowering plants themselves - that work was driven mostly by coevolution with insects and, later, mammals. Gut contents and coprolites confirm some dinosaurs did eat angiosperm material - fruit remnants in an Early Cretaceous ankylosaur's gut, angiosperm chemical traces in some hadrosaur coprolites - but gymnosperms remained the larger part of most herbivorous dinosaurs' diet even after flowering plants had spread widely. Two worlds changed alongside each other, not because one drove the other in a simple line."
};

var ME2_FLORA_SETUP = "By the very end of the Cretaceous - the Hell Creek world used as the case study below - that revolution had gone further than almost anywhere else in the fossil record. A detailed study of Hell Creek leaf fossils found roughly 90% of identified plant species were flowering plants, with conifers at about 5% and ferns around 4%. That forest was still a forest, not a grassland - the plant fossils show no evidence of grassland at Hell Creek at all, even this late. The Triassic forest of gymnosperms and the Hell Creek forest of flowering hardwoods and palms are, botanically, almost different planets - separated by the roughly 165 million years dinosaurs existed on Earth.";

var ME2_FLORA_BARS = [
  {
    id: 'early-mesozoic',
    label: 'Triassic-Jurassic',
    segments: [
      { name: 'Gymnosperm-dominated (conifers, cycads, ferns, ginkgoes)', pct: 100, tone: 'gymnosperm' }
    ]
  },
  {
    id: 'hell-creek',
    label: 'Hell Creek, ~66 Ma',
    segments: [
      { name: 'Angiosperms', pct: 90, tone: 'angiosperm' },
      { name: 'Conifers', pct: 5, tone: 'gymnosperm' },
      { name: 'Ferns', pct: 4, tone: 'fern' },
      { name: 'Other', pct: 1, tone: 'other' }
    ]
  }
];

/* ── SECTION 3: FOOD WEBS - HELL CREEK CASE STUDY ───────── */
var ME2_FOODWEB = {
  formationName: 'Hell Creek Formation',
  plantBase: {
    label: 'Angiosperm-dominated hardwood forest',
    detail: 'Palms, flowering trees, conifers and ferns as a minority, cycads and Ginkgo as rare holdouts. No grassland anywhere in it.'
  },
  distinctionNote: "Two species here - Edmontosaurus and Triceratops - have physical fossil evidence of a specific feeding interaction with Tyrannosaurus. The other two are reasonable inferences from size, diet, and shared time and place, not confirmed incidents. Most of any food web, in any fossil ecosystem, is inference; documented cases are the rare exception.",
  documentedEvidenceNote: "The Edmontosaurus link is documented directly: a healed tail wound matches Tyrannosaurus tooth dimensions, evidence of a predation attempt it survived. The Triceratops link is documented too, in the form of bite marks attributable to Tyrannosaurus recorded on Triceratops bone.",
  nodes: [
    { id: 'edmontosaurus', speciesId: 'edmontosaurus', role: 'Bulk-feeding herbivore, likely herding' },
    { id: 'triceratops', speciesId: 'triceratops', role: 'Low browser, beak-and-battery shearing feeder' },
    { id: 'ankylosaurus', speciesId: 'ankylosaurus', role: 'Low-grazing armoured herbivore' },
    { id: 'pachycephalosaurus', speciesId: 'pachycephalosaurus', role: 'Small, alert herbivore' },
    { id: 'tyrannosaurus', speciesId: 'tyrannosaurus', role: 'Apex predator' }
  ],
  edges: [
    {
      from: 'edmontosaurus', to: 'tyrannosaurus', status: 'documented',
      evidence: 'A healed tail wound matching T. rex tooth dimensions - direct fossil evidence of a survived attack.'
    },
    {
      from: 'triceratops', to: 'tyrannosaurus', status: 'documented',
      evidence: 'Bite marks attributable to T. rex are recorded on Triceratops bone.'
    },
    {
      from: 'ankylosaurus', to: 'tyrannosaurus', status: 'inferred',
      evidence: 'No direct bite-mark evidence links it to a specific predator, but its defensive build implies real predator pressure.'
    },
    {
      from: 'pachycephalosaurus', to: 'tyrannosaurus', status: 'inferred',
      evidence: 'Coexistence and relative size place it as likely occasional prey, without direct evidence of a specific attack.'
    }
  ],
  extraNote: "Triceratops also carries evidence of a second, unrelated conflict: healed puncture wounds on some frills match Triceratops horns, showing intraspecific fighting rather than predation."
};
