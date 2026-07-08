/* ============================================================
   ANATOMY 101 DATA
   Loaded before the main inline script. All exports use the
   ANAT_* naming convention. Render functions live in index.html
   and reference this data rather than embedding content inline,
   following the last-day.js / theropods-to-birds.js / me2 pattern.

   Distinct from How Palaeontology Works: HPW's Reading Bones
   covers the methodology of inferring biology from fossils, and
   Classification covers naming and phylogenetics. This tab covers
   what the anatomy is and how it functioned. Cross-reference those
   two sections rather than repeating them.

   Two species anchor every comparison: Tyrannosaurus (saurischian)
   and Triceratops (ornithischian), both already built out in
   DinoDex. Link to them via openModal() rather than restating
   their content here.
   ============================================================ */

/* ── HOOK ────────────────────────────────────────────────── */
var ANAT_HOOK_TEXT = "A dinosaur's tail was not just for balance. In most species, it housed one of the single largest, most important muscles in the entire body - the engine that powered every stride. Losing that muscle, millions of years later, is part of how a dinosaur became a bird.";

/* ── SECTION 1: SKELETON BASICS ─────────────────────────────
   SVG diagram: labelled skeleton, colour-coded axial vs
   appendicular, simple legend. No photo. */
var ANAT_SKELETON_INTRO = "Every dinosaur skeleton splits into two systems. The axial skeleton - skull, vertebral column, ribs, tail - forms the central supporting line of the body. The appendicular skeleton - shoulder and hip girdles, plus the limbs themselves - attaches to it and does the work of standing and moving.";

var ANAT_SKELETON_POSTURE = "What sets dinosaurs apart from most of their Triassic contemporaries is posture, not just parts. Lizards and crocodilians hold the femur out to the side and sprawl, throwing much of their muscular effort into simply keeping the body off the ground. Dinosaurs instead evolved an upright, columnar hind limb, with the femur held close beneath the body and the joint surfaces reshaped to support weight in that orientation. It is a single change with large consequences: an upright limb is more efficient to move and better able to support size, which is part of why dinosaurs were able to grow larger and range more widely than most animals sharing their world.";

var ANAT_SKELETON_LEGEND = [
  { id: 'axial', label: 'Axial skeleton', detail: 'Skull, vertebral column, ribs, tail', tone: 'sediment' },
  { id: 'appendicular', label: 'Appendicular skeleton', detail: 'Girdles and limbs', tone: 'rust' }
];

/* ── SECTION 2: THE HIP DIVIDE ──────────────────────────────
   SVG diagram: side-by-side pelvis pair, identical labelling
   (ilium/ischium/pubis) on both. Species names link via
   openModal('tyrannosaurus') / openModal('triceratops'). */
var ANAT_HIP_INTRO = "Every dinosaur pelvis is built from the same three bones - ilium, ischium, pubis - arranged one of two ways. The arrangement is the single feature the whole group is named after and split into at the start: Saurischia ('lizard-hipped') and Ornithischia ('bird-hipped').";

var ANAT_HIP_SAURISCHIAN = {
  speciesId: 'tyrannosaurus',
  clade: 'Saurischian - "lizard-hipped"',
  detail: "In Tyrannosaurus, the pubis points forward and down, giving the pelvis a three-pronged profile in side view. This is the ancestral reptilian arrangement, retained from early archosaurs."
};

var ANAT_HIP_ORNITHISCHIAN = {
  speciesId: 'triceratops',
  clade: 'Ornithischian - "bird-hipped"',
  detail: "In Triceratops, the pubis is rotated backward, running parallel to the ischium, often with an added forward-pointing process. The result is a four-pronged profile in side view - superficially closer to a bird pelvis than Tyrannosaurus's is."
};

var ANAT_HIP_BIRD_NOTE = "The resemblance is misleading, and worth stating plainly: birds did not evolve from ornithischians. Birds are saurischians - derived theropods - that independently evolved a backward-pointing pubis of their own, for reasons unrelated to the ornithischian version. Two lineages arrived at a similar-looking bone position from different starting points and, it seems, different causes.";

var ANAT_HIP_ISCHIOTRUNCUS_HYPOTHESIS = "Why the pubis rotated backward at all, independently, in more than one dinosaur lineage is still a live question rather than a settled one. A 2018 study proposed that the answer lies in breathing rather than diet: a muscle called the ischiotruncus, running from the ischium to the gastralia (the belly ribs) and helping ventilate the lungs, used the forward-pointing pubis as an anchor in its ancestral form. Where that muscle's role in ventilation was reduced, the pubis was freed to rotate backward. The study found pubic orientation tracked this ventilation pattern more closely than it tracked whether a species was a herbivore - a genuine hypothesis, not a closed case.";

/* ── SECTION 3: MUSCLES AND SOFT TISSUE ─────────────────────
   Centrepiece section. SVG: caudofemoralis longus overlay on a
   Tyrannosaurus skeleton silhouette, tail to femur, fourth
   trochanter marked. Paired with t_rex_femur.jpg as supporting
   photo - captioned as "a theropod femur", not claiming the
   fourth trochanter is visible in the photo itself (it is a
   subtle ridge, not obvious at this angle). No attribution
   caption; sourcing wasn't confirmed. */
var ANAT_MUSCLE_INTRO = "The single most important hind-limb muscle in most non-avian dinosaurs was the caudofemoralis longus. It ran from the tail directly to the femur, anchoring on a bony ridge called the fourth trochanter, and acted as the primary retractor of the hind limb - the muscle that pulled the leg backward through each stride. A dinosaur's tail was, in large part, a locomotor organ. Balance was a secondary function, not the main one.";

var ANAT_MUSCLE_ROMER_CORRECTION = {
  heading: 'A textbook error, corrected',
  body: "A highly cited 1923 reconstruction of theropod tail musculature attached the caudofemoralis to the wrong part of the tail, understating both its size and its role. That error shaped textbook illustrations of dinosaur tails for decades before later anatomical work - tracing muscle scars directly on fossil hemal spines - corrected the attachment and restored the muscle to something closer to its true proportions."
};

var ANAT_MUSCLE_TREX_FIGURE = "In Tyrannosaurus specifically, the caudofemoralis longus is modelled at roughly 2 to 4% of total body mass. For comparison, that is proportionally in the same range as the hind-limb muscle mass of ratites - ostriches and their relatives, the most muscular hind limbs of any living animal group.";

var ANAT_MUSCLE_BIRD_LINK = "As the theropod lineage leading to birds evolved, the tail - and the caudofemoralis it housed - shrank dramatically, alongside a broader shift from hip-driven to knee-driven locomotion. The muscle that powered a Tyrannosaurus stride is largely gone in living birds for exactly this reason.";

var ANAT_MUSCLE_IMAGE = {
  src: 'images/anatomy_101/t_rex_femur.jpg',
  alt: 'A museum-mounted theropod femur.',
  caption: 'A theropod femur. The fourth trochanter - the caudofemoralis attachment point - is a subtle ridge, not clearly visible from this angle; see the diagram above for its exact position.'
};

/* ── SECTION 4: SKULL AND TEETH ─────────────────────────────
   SVG: labelled generic diapsid skull diagram (schematic,
   fenestrae pattern). Paired with t_rex_tooth.jpg and
   triceratops_skull.jpg side by side. No attribution captions. */
var ANAT_SKULL_INTRO = "Dinosaurs are diapsids: the skull has two openings behind each eye socket. As archosaurs, they also carry a third opening in front of the eye, the antorbital fenestra. That opening's size echoes the same divide as the hip: large in most saurischians - in theropods like Tyrannosaurus, it is the single largest opening in the skull - and reduced or closed in most ornithischians, including Triceratops.";

var ANAT_TEETH_TREX = "Tyrannosaurus teeth are unusually thick and robust for a theropod, built to withstand bone-crushing bite force rather than pure slicing - a bite capable of breaking bone rather than only cutting flesh.";

var ANAT_TEETH_TRICERATOPS = "Triceratops fed with a horny beak at the front, for cropping vegetation, and shearing tooth batteries further back, for cutting it into smaller pieces. That is a slicing mechanism, built from many teeth stacked and replaced in columns - distinct in its motion from a hadrosaur's dental battery, which grinds rather than shears.";

var ANAT_SKULL_IMAGES = [
  {
    src: 'images/anatomy_101/t_rex_tooth.jpg',
    alt: 'A Tyrannosaurus tooth specimen, MOR-1128, showing a fractured cross-section.',
    caption: 'A Tyrannosaurus tooth (specimen MOR-1128), fractured to show a cross-section.'
  },
  {
    src: 'images/anatomy_101/triceratops_skull.jpg',
    alt: 'A studio-photographed Triceratops skull, showing the brow horns, frill, and beak.',
    caption: 'A Triceratops skull, showing the brow horns, frill, and beak clearly. The shearing tooth batteries sit further back in the jaw and are not visible from this external angle.'
  }
];

/* ── SECTION 5: POSTURE AND LOCOMOTION ──────────────────────
   Paired with ceratopsian_trackway.jpg as trackway evidence for
   the Triceratops forelimb-posture revision specifically. A
   silhouette stance comparison (biped vs columnar quadruped) is
   a nice-to-have; the section stands on trackway photo + prose
   alone if that diagram doesn't come together cleanly. */
var ANAT_POSTURE_TREX = "Tyrannosaurus was a strict biped, walking digitigrade - on its toes, as birds do - with the caudofemoralis-powered hind limbs doing essentially all locomotor work. The forelimbs, famously short, played no part in getting the animal from place to place.";

var ANAT_POSTURE_TRICERATOPS = "Triceratops was a full quadruped, with columnar limbs built to support its considerable mass rather than for speed.";

var ANAT_POSTURE_TRICERATOPS_REVISION = {
  heading: 'A stance revised by better evidence',
  body: "Older reconstructions gave Triceratops a sprawling, lizard-like elbow. Trackway evidence and biomechanical study have since supported a more upright, columnar forelimb stance instead - closer to how a rhinoceros carries itself than how a lizard does. It is a case of the field's picture changing as evidence accumulated, not a single one-off correction."
};

var ANAT_POSTURE_IMAGE = {
  src: 'images/anatomy_101/ceratopsian_trackway.jpg',
  alt: 'A fossil ceratopsian trackway.',
  caption: 'A fossil ceratopsian trackway - the trace-fossil evidence behind the revised, more upright forelimb stance.'
};

/* ── CROSS-LINKS ─────────────────────────────────────────────
   Section 2 -> HPW Classification (naming/phylogenetics debate)
   Section 3 -> Theropods to Birds (goToView('theropods-to-birds'))
   Sections generally -> HPW Reading Bones (methodology of
   inferring biology from fossils) */
var ANAT_CROSSLINKS = {
  hpwClassification: 'hpw-classification',
  hpwReadingBones: 'hpw-reading-bones',
  theropodsToBirds: 'theropods-to-birds'
};

/* ── SOURCE NOTES ─────────────────────────────────────────────
   Format matches research-cases.js papers[] convention. */
var ANAT_SOURCE_NOTES = [
  { authors: "Persons & Currie", year: "2011", title: "The Tail of Tyrannosaurus: Reassessing the Size and Locomotive Importance of the M. caudofemoralis in Non-Avian Theropods", source: "The Anatomical Record", doi: "10.1002/ar.21290", type: "Primary paper", note: "Digital muscle reconstruction from hemal-spine scarring; found the caudofemoralis longus was exceptionally large in many non-avian theropods, including Tyrannosaurus." },
  { authors: "Romer", year: "1923", title: "Crocodilian pelvic muscles and their avian and reptilian homologues", source: "Bulletin of the American Museum of Natural History, vol. 48, article 15, pp. 533-552", doi: null, type: "Historical / superseded", note: "The reconstruction that misattributed the caudofemoralis's tail attachment, later corrected by direct fossil scar evidence." },
  { authors: "Macaluso & Tschopp", year: "2018", title: "Evolutionary changes in pubic orientation in dinosaurs are more strongly correlated with the ventilation system than with herbivory", source: "Palaeontology", doi: "10.1111/pala.12362", type: "Primary paper", note: "Proposed the ischiotruncus / cuirassal ventilation hypothesis for independent pubic rotation across dinosaur lineages." },
  { authors: "Erickson et al.", year: "2012", title: "Complex Dental Structure and Wear Biomechanics in Hadrosaurid Dinosaurs", source: "Science", doi: "10.1126/science.1224495", type: "Primary paper", note: "Characterised the six-tissue grinding dental battery in hadrosaurids, the comparison point for the Triceratops shearing battery." },
  { authors: "Erickson et al.", year: "2015", title: "Wear biomechanics in the slicing dentition of the giant horned dinosaur Triceratops", source: "Science Advances", doi: "10.1126/sciadv.1500055", type: "Primary paper", note: "Characterised the five-tissue shearing dental battery in Triceratops, distinct in wear mechanics from a hadrosaur's grinding battery." }
];
