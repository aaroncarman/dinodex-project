/* ============================================================
   THEROPODS TO BIRDS DATA
   Loaded before the main inline script. All exports use the
   TTB_* naming convention to avoid collisions with existing
   DinoDex globals. Render functions live in index.html and
   reference this data rather than embedding content inline,
   following the last-day.js pattern.
   ============================================================ */

/* Jump-rail nav — mirrors LAST_DAY_CHAPTERS' nav/id pairing */
var TTB_SECTIONS = [
  { id: 'hook',      nav: 'Start Here' },
  { id: 'skeleton',  nav: 'Shared Skeleton' },
  { id: 'cladogram', nav: 'Family Tree' },
  { id: 'cards',     nav: 'What Was It For?' },
  { id: 'strip',     nav: 'Timeline' }
];

/* ── SECTION 1 — HOOK ───────────────────────────────────── */
var TTB_HOOK = "There is a dinosaur in most kitchens. Not a metaphor - a chicken is a theropod dinosaur in the same sense a bat is a mammal: not descended from one, but a living member of the group. Every pigeon on every street is a dinosaur that never went extinct. The line most people draw between \"dinosaur\" and \"bird\" doesn't exist in the fossil record. It was drawn later, by us.";

/* ── SECTION 2 — SKELETON OVERLAY ───────────────────────── */
var TTB_SKELETON = {
  fossilSpeciesId: 'anchiornis',
  callouts: [
    {
      id: 'pneumatic-bones',
      feature: 'Hollow, air-filled bones',
      text: "Both skeletons are riddled with air pockets - the same pneumatic system, not a coincidence.",
      confidence: 'strong',
      glossaryId: 'pneumatisation'
    },
    {
      id: 'furcula',
      feature: 'Furcula (wishbone)',
      text: "A fused collarbone found in this lineage since the Late Triassic - present in both.",
      confidence: 'strong',
      glossaryId: 'furcula'
    },
    {
      id: 'foot',
      feature: 'Three-toed, bird-like foot',
      text: "Same basic foot plan, same digit reduction pattern.",
      confidence: 'strong',
      glossaryId: null
    },
    {
      id: 'neck',
      feature: 'S-curved neck',
      text: "The same flexible S-shape, built from the same vertebral proportions.",
      confidence: 'strong',
      glossaryId: null
    },
    {
      id: 'feathers',
      feature: 'Feathers',
      text: "Present in both, though the fossil's feather coverage is only as complete as what's preserved.",
      confidence: 'moderate',
      confidenceNote: 'extent, not presence',
      glossaryId: 'feathers'
    }
  ]
};

/* ── SECTION 3 — CLADOGRAM ──────────────────────────────── */
var TTB_CLADOGRAM = {
  backbone: [
    { id: 'theropoda',     label: 'Theropoda',     trait: null, glossaryId: 'theropod' },
    { id: 'coelurosauria', label: 'Coelurosauria', trait: 'Filamentous feathers appear broadly here, not just in bird ancestors', glossaryId: 'coelurosauria' },
    { id: 'maniraptora',   label: 'Maniraptora',   trait: 'Pennaceous (vaned) feathers, furcula consistently present', glossaryId: 'maniraptoran' },
    { id: 'paraves',       label: 'Paraves',       trait: null, glossaryId: 'paravian' },
    { id: 'avialae',       label: 'Avialae',       trait: null, glossaryId: 'avialan' },
    { id: 'aves',          label: 'Aves',          trait: 'Crown group, all living birds', glossaryId: null }
  ],
  tips: [
    { node: 'coelurosauria', speciesId: 'yutyrannus', note: "Feathered tyrannosauroid - proof feathers aren't unique to bird ancestry", confidence: 'strong' },
    { node: 'coelurosauria', speciesId: 'sinosauropteryx', note: 'Simple filaments only - earliest directly preserved feather evidence', confidence: 'strong' },
    { node: 'paraves', speciesId: 'wulong', note: 'Pennaceous feathers, four-winged experiment', confidence: 'strong', confidenceNote: 'anatomy strong, function moderate' },
    { node: 'paraves', speciesId: 'anchiornis', note: 'Pennaceous feathers across all four limbs', confidence: 'strong', confidenceNote: 'anatomy strong, function moderate' },
    { node: 'paraves', speciesId: 'microraptor', note: 'Four-winged glider or flier - the extent of powered flight is debated', confidence: 'strong', confidenceNote: 'anatomy strong, function moderate' },
    { node: 'avialae', speciesId: 'archaeopteryx', note: "Long bony tail, no pygostyle - more primitive avialan condition", confidence: 'moderate', flagged: true },
    { node: 'avialae', speciesId: 'confuciusornis', note: "Has a pygostyle; Archaeopteryx doesn't", confidence: 'strong' }
  ],
  stillUnderStudy: {
    title: 'Still Under Study',
    text: "Archaeopteryx's exact placement has moved between analyses. A 2011 study briefly placed it outside Avialae; most subsequent work has put it back inside. Tree shape is sensitive to which characters and taxa go into the analysis - this is a live example of that, not a settled exception."
  },
  wildcard: {
    title: 'Wildcard: Yi qi',
    text: "Yi qi's placement - basal paravian outside Avialae, stem-avialan, or basal oviraptorosaur, depending on the study - is genuinely unresolved across recent reviews. It sits here as a sidebar note rather than pinned to a branch."
  }
};

/* ── SECTION 4 — "WHAT WAS IT FOR?" CARDS ───────────────── */
var TTB_WHAT_WAS_IT_FOR = [
  {
    id: 'feathers-warmth',
    lead: 'Feathers: for warmth, not flight.',
    body: "Sinosauropteryx's simple filaments belonged to a ground-runner that could never have flown. The earliest feathers plausibly worked as insulation, water repellency, or display - aerodynamic function only became possible once branched, vaned feathers had already evolved for other reasons.",
    speciesId: 'sinosauropteryx'
  },
  {
    id: 'furcula-wrestling',
    lead: 'The wishbone: for wrestling, not flying.',
    body: "The furcula is a fused collarbone that braces the shoulder. In living birds it also stores elastic energy during wingbeats, but it turns up in the fossil record by the Late Triassic - tens of millions of years before flight - plausibly reinforcing the shoulder for grabbing and restraining prey instead.",
    glossaryId: 'furcula'
  },
  {
    id: 'hollow-bones-breathing',
    lead: 'Hollow bones: for breathing, not lightness.',
    body: "Air-filled bones are often explained as a weight-saving flight adaptation, but the air sacs that hollow them out look like they originated for respiratory efficiency in basal theropods, long before flight was on the table. The lightness came along for the ride.",
    glossaryId: 'pneumatisation'
  },
  {
    id: 'wings-running',
    lead: 'Wings: maybe for running, not flying.',
    isStudy: true,
    q: "Did wings first help small theropods run, not fly?",
    why: "If partial wings were useful before they were flight-capable, it explains how a structure this complex could evolve gradually rather than needing to be flight-ready from the start.",
    interps: [
      {
        label: 'Wing-Assisted Incline Running',
        conf: 'moderate',
        text: "Partial wings first helped small, feathered dinosaurs get traction running up steep surfaces - a halfway-useful wing before a fully flight-capable one."
      },
      {
        label: 'Competing accounts',
        conf: 'low',
        text: "Other hypotheses (predatory strike-assisted stability, gliding descent from height, display) each explain part of the same anatomy. This is one candidate explanation among several, not a consensus account."
      }
    ]
  }
];

/* ── SECTION 5 — FEATURE-ACQUISITION STRIP ──────────────── */
/* TOTAL_MA sets the strip's scale: Late Triassic (~220 Ma) to present (0 Ma) */
var TTB_STRIP_TOTAL_MA = 220;

var TTB_FEATURE_STRIP = [
  {
    id: 'pneumatic-vertebrae',
    feature: 'Pneumatic (air-filled) vertebrae',
    evidence: 'Late Triassic, basal theropods',
    ma: 210,
    confidence: 'moderate',
    note: 'Likely evolved independently across theropods, sauropodomorphs and pterosaurs rather than once',
    glossaryId: 'pneumatisation'
  },
  {
    id: 'furcula',
    feature: 'Furcula',
    evidence: 'Late Triassic, Coelophysis (~212-201 Ma)',
    ma: 206,
    confidence: 'strong',
    note: 'Essentially as old as unambiguous theropods themselves. The open question is what the bone is developmentally, not when it appears',
    glossaryId: 'furcula'
  },
  {
    id: 'filamentous-feathers',
    feature: 'Simple filamentous feathers',
    evidence: '~125 Ma direct evidence (Sinosauropteryx)',
    ma: 125,
    confidence: 'strong',
    confidenceNote: 'presence strong, true origin date moderate',
    impliedEarlier: true,
    note: 'The oldest fossil we have and the oldest the trait probably is are shown as two separate marks - phylogenetic bracketing implies an earlier true origin, undated by direct fossils',
    glossaryId: 'feathers'
  },
  {
    id: 'pennaceous-feathers',
    feature: 'Pennaceous (vaned) feathers',
    evidence: '~125 Ma, multiple Jehol coelurosaurs',
    ma: 125,
    confidence: 'strong',
    note: '',
    glossaryId: 'feathers'
  },
  {
    id: 'pygostyle',
    feature: 'Pygostyle (fused short tail)',
    evidence: '~125-120 Ma, Confuciusornis and contemporaries',
    ma: 122,
    confidence: 'strong',
    note: 'Absent in Archaeopteryx at ~150 Ma; present here - a clean comparison pair',
    glossaryId: 'pygostyle'
  },
  {
    id: 'keeled-sternum',
    feature: 'Keeled sternum',
    evidence: 'Precursor ridge ~125-120 Ma (Pygostylia); full deep keel already present by ~120 Ma in some Jehol ornithuromorphs, but not yet in contemporary enantiornithines',
    ma: 122,
    confidence: 'moderate',
    note: 'Not one clean date - the keel arrived at different rates in different bird lineages, some of which went extinct before finishing the job',
    glossaryId: null
  }
];
