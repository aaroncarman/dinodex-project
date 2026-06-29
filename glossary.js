/* ============================================================
   GLOSSARY DATA & LOGIC
   Loaded before the main inline script. All globals use the
   gl* prefix to avoid collisions with existing DinoDex globals.
   ============================================================ */

window.GLOSSARY_TERMS = [
  /* ── EVOLUTION ──────────────────────────────────────────── */
  {
    id: "adaptive-radiation",
    term: "Adaptive radiation",
    category: "Evolution",
    difficulty: "useful",
    aliases: ["evolutionary radiation", "clade diversification"],
    simpleDefinition: "A rapid diversification of a lineage into many species, each adapted to different ecological roles.",
    scientificExplanation: "Adaptive radiation occurs when a lineage diversifies quickly into multiple ecological niches, typically after a key innovation (a new body plan, dietary strategy, or habitat) or following the opening of ecological space after a mass extinction or colonisation of new territory. Classic examples include the placental mammal radiation after the K-Pg extinction, the diversification of Darwin's finches across the Galápagos, and the early diversification of dinosaur lineages after the end-Triassic extinction cleared ecological space.",
    whyItMatters: "Adaptive radiation explains how enormous diversity can arise rapidly from a single ancestor. It shows that mass extinctions, though catastrophic, can unlock evolutionary opportunities for surviving lineages.",
    dinodexContext: "The Mesozoic saw multiple adaptive radiations — ceratopsians in the Late Cretaceous, sauropodomorphs in the Jurassic, and the early diversification of dinosaur lineages across the Triassic. These radiations are reflected in the variety of species in DinoDex.",
    exampleUsage: "The adaptive radiation of placental mammals after the K-Pg extinction produced the enormous diversity of mammal orders we see today within a geologically brief period.",
    examples: ["Mammalian radiation after the K-Pg extinction", "Ceratopsian diversification in the Late Cretaceous", "Hawaiian honeycreeper birds from a single finch ancestor"],
    exampleSpeciesIds: [],
    relatedTerms: ["Mass extinction", "Clade", "Phylogeny"],
    keywords: ["diversification", "ecological niche", "radiation", "speciation", "innovation", "extinction aftermath"],
    sourceNotes: "Standard evolutionary concept."
  },

  /* ── ANATOMY & ECOLOGY ──────────────────────────────────── */
  {
    id: "bipedal",
    term: "Bipedal",
    category: "Anatomy & Ecology",
    difficulty: "core",
    aliases: ["biped", "bipedality", "two-legged locomotion"],
    simpleDefinition: "Moving on two legs — the ancestral stance of dinosaurs and the defining posture of all theropods.",
    scientificExplanation: "Bipedality in dinosaurs is ancestral to the group: the earliest known dinosaurs were bipedal, and theropods maintained this stance throughout their evolutionary history. Quadrupedality evolved secondarily in several ornithischian lineages (ceratopsians, ankylosaurs, stegosaurs) and in sauropodomorphs. Bipedal posture freed the forelimbs for other functions — grasping, display, or (in paravians) the evolution of wings. The precise biomechanics of dinosaurian bipedal locomotion are inferred from trackways, limb proportions, and comparison with living birds.",
    whyItMatters: "Bipedality is fundamental to the dinosaur body plan. The freed forelimbs of bipedal theropods were a prerequisite for the evolution of wings and, eventually, flight.",
    dinodexContext: "Most theropods in DinoDex were bipedal. Species cards for ornithopods, ceratopsians, and sauropods note when they were secondarily quadrupedal.",
    exampleUsage: "All known tyrannosaurs were obligate bipeds, with arms too short for any significant weight-bearing role.",
    examples: ["Theropods (ancestrally and persistently bipedal)", "Ornithopods (bipedal)", "Hadrosaurs (bipedal or facultatively quadrupedal)"],
    exampleSpeciesIds: [],
    relatedTerms: ["Quadrupedal", "Cursorial", "Theropod"],
    keywords: ["two legs", "locomotion", "posture", "theropod", "upright", "forelimb", "gait"],
    sourceNotes: "Standard anatomical concept."
  },

  /* ── FOSSILS & EVIDENCE ─────────────────────────────────── */
  {
    id: "bonebed",
    term: "Bonebed",
    category: "Fossils & Evidence",
    difficulty: "useful",
    aliases: ["bone bed", "mass death assemblage"],
    simpleDefinition: "A layer of rock containing the fossilised bones of multiple individuals, sometimes of a single species.",
    scientificExplanation: "A bonebed is a concentrated accumulation of skeletal elements from multiple individuals within the same rock unit. They form through various mechanisms: mass death events (floods, droughts, volcanic episodes), attritional accumulation over time, or hydraulic sorting of bones by water. Monodominant bonebeds — dominated by a single species — are particularly valuable for studying population demographics, growth stages, and potentially gregarious behaviour. Multitaxic bonebeds reflect ecological assemblages or taphonomic sorting processes.",
    whyItMatters: "Bonebeds allow palaeontologists to study populations rather than individuals — comparing growth stages, identifying age structures, and (cautiously) drawing inferences about social behaviour.",
    dinodexContext: "Several DinoDex species are known primarily from bonebeds, particularly North American ceratopsians such as Pachyrhinosaurus and Centrosaurus. Bonebed data has influenced interpretations of herding behaviour, though these interpretations are not without ongoing debate.",
    exampleUsage: "The Pipestone Creek bonebed in Alberta has yielded hundreds of Pachyrhinosaurus lakustai specimens, making it one of the richest ceratopsian sites known.",
    examples: ["Pipestone Creek Pachyrhinosaurus bonebed, Alberta", "Hilda Centrosaurus bonebed, Alberta", "Cleveland-Lloyd Dinosaur Quarry, Utah (Allosaurus dominant)"],
    exampleSpeciesIds: ["pachyrhinosaurus"],
    relatedTerms: ["Taphonomy", "Lagerstätte", "Fossil record"],
    keywords: ["mass death", "flood", "gregarious", "population", "assemblage", "monodominant", "herding"],
    sourceNotes: "Standard concept. Specific examples should be checked against primary or museum sources before formal use."
  },

  /* ── CLASSIFICATION ─────────────────────────────────────── */
  {
    id: "ceratopsian",
    term: "Ceratopsian",
    category: "Classification",
    difficulty: "core",
    aliases: ["Ceratopsia", "ceratopsid", "horned dinosaur"],
    simpleDefinition: "The group of ornithischian dinosaurs characterised by a parrot-like beak, a bony neck frill, and (in many species) prominent horns above the face.",
    scientificExplanation: "Ceratopsia is a diverse clade of Ornithischia ranging from small bipedal forms like Psittacosaurus to large quadrupedal ceratopsids like Triceratops. The group is diagnosed by a beak-like rostral bone at the tip of the snout, a developed frill extending back from the skull, and — in derived members — prominent brow and nasal horns. Ceratopsians were among the most abundant large herbivores of the Late Cretaceous, particularly in North America and Asia.",
    whyItMatters: "Ceratopsians illustrate how elaborate display structures — frills and horns — diversified rapidly within a lineage. Whether these features primarily served species recognition, intraspecific combat, or predator deterrence is still actively researched.",
    dinodexContext: "DinoDex includes ceratopsians such as Triceratops, Protoceratops, and Pachyrhinosaurus. Their frill and horn configurations are key identification features visible on each species card.",
    exampleUsage: "Psittacosaurus, a small early ceratopsian, is one of the most frequently found dinosaur genera in Asian fossil sites.",
    examples: ["Triceratops horridus", "Protoceratops andrewsi", "Pachyrhinosaurus lakustai", "Psittacosaurus mongoliensis"],
    exampleSpeciesIds: ["triceratops", "protoceratops", "pachyrhinosaurus", "psittacosaurus"],
    relatedTerms: ["Ornithischian", "Display structure", "Clade"],
    keywords: ["frill", "horns", "beak", "Ornithischia", "Late Cretaceous", "herbivore", "rostral bone", "ceratopsid"],
    sourceNotes: "Standard knowledge. Specific examples should be checked against primary or museum sources before formal use."
  },
  {
    id: "clade",
    term: "Clade",
    category: "Classification",
    difficulty: "core",
    aliases: ["monophyletic group"],
    simpleDefinition: "A group that includes an ancestor and all of its descendants — every organism that shares a common evolutionary origin.",
    scientificExplanation: "A clade (or monophyletic group) is defined by a single common ancestor and encompasses every lineage descended from it. This contrasts with paraphyletic groups (which exclude some descendants) and polyphyletic groups (which lack a single common ancestor). Clades are the basic building blocks of phylogenetic classification and are the only groupings considered valid in strict cladistic taxonomy.",
    whyItMatters: "Clades let scientists group organisms by evolutionary relationship rather than superficial similarity, making classification genuinely reflect history.",
    dinodexContext: "Every classification label in DinoDex — Theropoda, Sauropodomorpha, Ornithischia — is a clade. When a species card lists a clade, it is identifying that species' place in the evolutionary tree.",
    exampleUsage: "Aves (birds) is a clade within Theropoda, meaning birds are technically a type of theropod dinosaur.",
    examples: ["Theropoda", "Sauropodomorpha", "Avialae", "Ornithischia"],
    exampleSpeciesIds: ["velociraptor", "brachiosaurus", "triceratops"],
    relatedTerms: ["Phylogeny", "Cladistics", "Taxonomy"],
    keywords: ["classification", "monophyletic", "ancestor", "descendant", "taxonomy", "tree of life"],
    sourceNotes: "Standard phylogenetic definition. See Hennig (1966) and any modern systematics textbook."
  },

  /* ── EVOLUTION ──────────────────────────────────────────── */
  {
    id: "cladistics",
    term: "Cladistics",
    category: "Evolution",
    difficulty: "useful",
    aliases: ["cladistic analysis", "parsimony analysis", "phylogenetic systematics"],
    simpleDefinition: "The method of classifying organisms by mapping out their shared evolutionary history using inherited derived features.",
    scientificExplanation: "Cladistics (or phylogenetic systematics), formalised by Willi Hennig in the 1960s, classifies organisms on the basis of shared derived characters (synapomorphies) rather than overall similarity. A cladistic analysis scores a matrix of characters across taxa and finds the most parsimonious (or statistically most likely, in model-based approaches) tree of relationships. Modern palaeontological analyses use maximum parsimony, maximum likelihood, or Bayesian inference on datasets that may include hundreds of morphological characters.",
    whyItMatters: "Cladistics replaced older systems that grouped organisms by superficial similarity. It confirmed that birds are nested within theropod dinosaurs, that mammals all share a common ancestor, and that many traditional groups — like 'reptiles' — do not reflect actual evolutionary history.",
    dinodexContext: "All DinoDex classifications are products of cladistic analyses. When scientists debate a species' position on the evolutionary tree, they are debating how to interpret cladistic data.",
    exampleUsage: "Cladistic analysis in the early 1990s first robustly confirmed that birds are nested within theropod dinosaurs, rather than being a separate archosaur lineage.",
    examples: ["Character matrix with morphological scores", "Maximum parsimony cladogram", "Bootstrap or jackknife support values", "Bayesian consensus tree"],
    exampleSpeciesIds: [],
    relatedTerms: ["Phylogeny", "Clade", "Taxonomy", "Transitional fossil"],
    keywords: ["synapomorphy", "Hennig", "parsimony", "character matrix", "systematics", "tree", "Bayesian", "homoplasy"],
    sourceNotes: "Hennig (1966) is the foundational reference. Standard methodology. Technical term; verify wording in a later accuracy pass."
  },
  {
    id: "convergent-evolution",
    term: "Convergent evolution",
    category: "Evolution",
    difficulty: "useful",
    aliases: ["convergence", "homoplasy"],
    simpleDefinition: "When two unrelated lineages independently evolve similar features in response to similar environmental pressures.",
    scientificExplanation: "Convergent evolution (a type of homoplasy) occurs when similar morphological solutions evolve independently in unrelated lineages facing comparable ecological pressures. Classic examples include the streamlined bodies of ichthyosaurs, dolphins, and fish; the similar skulls of marsupial and placental carnivores; and the independent evolution of flight in pterosaurs, birds, and bats. In cladistics, convergent characters can mislead analyses if mistakenly interpreted as evidence of shared ancestry (treated as synapomorphies when they are homoplasies).",
    whyItMatters: "Recognising convergence is essential for accurate classification. If two lineages look alike because of independent evolution rather than common ancestry, grouping them together gives a false picture of evolutionary history.",
    dinodexContext: "Some features shared across different DinoDex lineages — certain skull shapes, bipedal posture, or head crests — may reflect convergence rather than close relationship. This is one reason why visual similarity alone cannot determine classification.",
    exampleUsage: "The sail-like dorsal structures of Spinosaurus and the unrelated Dimetrodon evolved independently — a clear example of convergent evolution.",
    examples: ["Streamlined bodies in ichthyosaurs and dolphins", "Dorsal sails in Spinosaurus and Dimetrodon (unrelated lineages)", "Independent evolution of flight in pterosaurs, birds, and bats"],
    exampleSpeciesIds: [],
    relatedTerms: ["Phylogeny", "Cladistics", "Mosaic evolution"],
    keywords: ["homoplasy", "similar features", "independent", "ecological pressure", "convergence", "classification"],
    sourceNotes: "Standard evolutionary concept."
  },

  /* ── DEEP TIME ──────────────────────────────────────────── */
  {
    id: "cretaceous",
    term: "Cretaceous",
    category: "Deep Time",
    difficulty: "core",
    aliases: ["Cretaceous Period", "Cretaceous period"],
    simpleDefinition: "The last and longest period of the Mesozoic Era (approximately 145–66 million years ago), ending with the mass extinction that wiped out all non-avian dinosaurs.",
    scientificExplanation: "The Cretaceous Period (145–66 Ma) was the longest Mesozoic period and saw the greatest diversity of dinosaur lineages. It is characterised by the continued breakup of Pangaea (driving increasing endemism across isolated landmasses), the spread of flowering plants (angiosperms), and the dominance of tyrannosaurs, ceratopsians, hadrosaurs, and ankylosaurs in the Late Cretaceous. The period ended at the K-Pg boundary, 66 Ma, triggered primarily by the Chicxulub impact.",
    whyItMatters: "The Cretaceous produced some of the most iconic and diverse dinosaur faunas, and its end is the defining event in non-avian dinosaur history. Tyrannosaurus rex, Triceratops, and Velociraptor all lived in the Cretaceous.",
    dinodexContext: "The majority of DinoDex species are Cretaceous, reflecting the richness of the Cretaceous fossil record from North America, Asia, South America, and Europe. The Cretaceous world had no polar ice caps and generally warmer global temperatures than today.",
    exampleUsage: "The Hell Creek Formation of Montana preserves one of the richest Late Cretaceous faunas known, including Tyrannosaurus rex, Triceratops, and Edmontosaurus.",
    examples: ["Hell Creek Formation, USA (latest Cretaceous)", "Dinosaur Park Formation, Alberta, Canada", "Nemegt Formation, Mongolia", "Yixian Formation, China (Early Cretaceous)"],
    exampleSpeciesIds: ["tyrannosaurus", "triceratops", "velociraptor"],
    relatedTerms: ["Mesozoic", "Jurassic", "K-Pg Boundary", "Maastrichtian"],
    keywords: ["Late Cretaceous", "Hell Creek", "K-Pg", "angiosperms", "flowering plants", "tyrannosaurs", "Pangaea breakup"],
    sourceNotes: "Dates from the International Chronostratigraphic Chart (ICS 2023 or current edition). Standard geological knowledge."
  },

  /* ── ANATOMY & ECOLOGY ──────────────────────────────────── */
  {
    id: "cursorial",
    term: "Cursorial",
    category: "Anatomy & Ecology",
    difficulty: "useful",
    aliases: ["cursoriality", "running adaptation"],
    simpleDefinition: "Adapted for fast running — describing the body plan and limb proportions of an animal built for speed on land.",
    scientificExplanation: "Cursorial adaptations in theropods typically include elongated distal limb segments (metatarsus and lower leg longer than the upper leg), reduced toe number, a digitigrade stance (walking on toes rather than the full foot sole), and lightweight limb construction. These proportions maximise stride length and reduce the energetic cost of swinging the legs. Highly cursorial forms like Ornithomimus show extreme versions of these features; large tyrannosaurs are generally considered less cursorial despite their bipedal stance, given their mass and limb scaling.",
    whyItMatters: "Cursoriality affects how a species hunted, escaped predators, and covered territory. Determining whether a dinosaur was fast or slow requires biomechanical analysis rather than simply assuming that all bipeds were swift runners.",
    dinodexContext: "Some DinoDex species are described as cursorial in their ecology notes — particularly lightly built theropods like Ornithomimus. Limb proportion data on species cards is relevant to this assessment.",
    exampleUsage: "Ornithomimus is considered highly cursorial, with limb proportions suggesting it may have been among the faster non-avian dinosaurs known.",
    examples: ["Ornithomimus edmontonicus (highly cursorial)", "Velociraptor mongoliensis (moderately cursorial)", "Triceratops horridus (non-cursorial, slow-moving herbivore)"],
    exampleSpeciesIds: ["ornithomimus"],
    relatedTerms: ["Bipedal", "Quadrupedal"],
    keywords: ["running", "fast", "limb proportion", "metatarsus", "digitigrade", "speed", "biomechanics"],
    sourceNotes: "Standard anatomical and ecological concept. Speed estimates for specific dinosaurs vary significantly between biomechanical studies; avoid citing specific figures without a source."
  },

  /* ── FOSSILS & EVIDENCE ─────────────────────────────────── */
  {
    id: "diagnosis",
    term: "Diagnosis",
    category: "Fossils & Evidence",
    difficulty: "advanced",
    aliases: ["formal diagnosis", "differential diagnosis"],
    simpleDefinition: "The formal list of anatomical features that distinguish a species or genus from all other known species or genera.",
    scientificExplanation: "A diagnosis (or differential diagnosis in some usages) is a required component of any formal species description under the International Code of Zoological Nomenclature (ICZN). It lists the autapomorphies (unique derived features) and combination of characters that set the taxon apart from its closest relatives. In palaeontology, diagnoses are frequently revised as new specimens are discovered, sometimes leading to synonymisation (two names proving to refer to the same animal) or splitting (one species being divided into two distinct ones).",
    whyItMatters: "A rigorous diagnosis is what makes a species name scientifically valid and distinguishable. Without it, there is no reliable way to confirm whether two fossils from different sites represent the same species.",
    dinodexContext: "The scientific validity of each DinoDex species depends on its published diagnosis. Species flagged as 'dubious' or assigned 'nomen dubium' status lack a reliable diagnosis based on sufficient material.",
    exampleUsage: "The diagnosis of Spinosaurus was substantially revised after 2014, when new specimens revealed an unexpectedly short-legged animal with proportions suited to an aquatic lifestyle.",
    examples: ["Autapomorphies listed in a tyrannosaur description", "Revised diagnosis following new specimen discovery", "Nomen dubium — a species name that cannot be confirmed from the available material"],
    exampleSpeciesIds: [],
    relatedTerms: ["Holotype", "Specimen", "Taxonomy", "Species"],
    keywords: ["autapomorphy", "ICZN", "formal description", "synonymy", "nomen dubium", "characters", "validity"],
    sourceNotes: "Standard term. Technical term; verify wording in a later accuracy pass."
  },

  /* ── CLASSIFICATION ─────────────────────────────────────── */
  {
    id: "dinosauria",
    term: "Dinosauria",
    category: "Classification",
    difficulty: "core",
    aliases: ["Dinosaur", "dinosaurs"],
    simpleDefinition: "The clade that contains all true dinosaurs — and, by extension, all living birds.",
    scientificExplanation: "Dinosauria was named by Richard Owen in 1842. Its modern phylogenetic definition anchors the group to the most recent common ancestor of Triceratops and Neornithes (living birds), and all of that ancestor's descendants. The group is distinguished from other archosaurs by a suite of skeletal features including an upright (non-sprawling) posture, a perforate acetabulum (open hip socket), and specific ankle morphology. Under this definition, birds are dinosaurs. Pterosaurs and crocodilians are archosaurs but are not dinosaurs.",
    whyItMatters: "Defining Dinosauria precisely allows scientists to identify which fossil animals are genuine dinosaurs versus related archosaurs. It also resolves the question of whether dinosaurs are truly extinct — they are not, because birds are living members of the group.",
    dinodexContext: "Every species in DinoDex belongs to Dinosauria. Understanding what the clade boundary actually means helps explain why some Mesozoic animals commonly associated with dinosaurs — such as pterosaurs and plesiosaurs — do not appear in DinoDex.",
    exampleUsage: "Pterosaurs were not dinosaurs, despite living alongside them — they belong to a sister group of Dinosauria within Archosauria.",
    examples: ["Triceratops horridus (ornithischian dinosaur)", "Brachiosaurus altithorax (sauropod dinosaur)", "Velociraptor mongoliensis (theropod dinosaur)", "Gallus gallus — domestic chicken (living dinosaur)"],
    exampleSpeciesIds: ["triceratops", "brachiosaurus", "velociraptor"],
    relatedTerms: ["Clade", "Taxonomy", "Theropod", "Sauropod", "Ornithischian"],
    keywords: ["archosaur", "Owen", "hip socket", "acetabulum", "definition", "birds", "clade", "Mesozoic"],
    sourceNotes: "Owen (1842) coined the name; the node-based phylogenetic definition is widely used but variant definitions exist. Standard knowledge."
  },

  /* ── ANATOMY & ECOLOGY ──────────────────────────────────── */
  {
    id: "display-structure",
    term: "Display structure",
    category: "Anatomy & Ecology",
    difficulty: "useful",
    aliases: ["display feature", "ornamentation", "visual signal"],
    simpleDefinition: "Any anatomical feature — a crest, frill, horn, or sail — likely used for visual communication between members of the same species.",
    scientificExplanation: "Display structures in dinosaurs include cranial crests (hadrosaurs), bony frills (ceratopsians), dorsal sails (some spinosaurids), and enlarged domes (pachycephalosaurs). These features are often conspicuous and energetically costly, which in living animals typically signals a role in mate attraction, intraspecific competition, or species recognition. However, proving their function in extinct animals is difficult — thermoregulation, species recognition, and combat are all competing hypotheses. Histological analysis of bone growth rates can help distinguish display structures from functional armour.",
    whyItMatters: "Display structures tell us that dinosaurs had complex intraspecific behaviour — they were not simply feeding and fleeing, but animals that recognised, signalled to, and competed against members of their own species.",
    dinodexContext: "Many DinoDex species have prominent display structures — Triceratops frills, hadrosaur crests, Pachycephalosaurus domes. Understanding these structures adds a behavioural and ecological dimension to species identification.",
    exampleUsage: "The elaborate hollow crest of Parasaurolophus may have functioned as a resonating chamber for low-frequency calls, as well as serving as a visual signal.",
    examples: ["Ceratopsian frills (Triceratops, Protoceratops)", "Hadrosaur hollow crests (Parasaurolophus)", "Pachycephalosaur dome", "Spinosaurid dorsal sail"],
    exampleSpeciesIds: ["triceratops", "protoceratops"],
    relatedTerms: ["Ceratopsian", "Integument", "Bipedal"],
    keywords: ["crest", "frill", "horn", "sail", "ornamentation", "visual signal", "behaviour", "intraspecific", "display"],
    sourceNotes: "Standard concept. Function of display structures in dinosaurs remains debated; avoid overclaiming specific behaviours."
  },

  /* ── CLASSIFICATION ─────────────────────────────────────── */
  {
    id: "dromaeosaurid",
    term: "Dromaeosaurid",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Dromaeosauridae", "raptor", "raptors"],
    simpleDefinition: "A family of feathered, sickle-clawed paravian theropods — the group popularly known as 'raptors'.",
    scientificExplanation: "Dromaeosauridae is a family within Paraves characterised by an enlarged retractable sickle claw on the second toe of each foot. Members ranged from crow-sized Microraptor to the much larger Utahraptor. Most are inferred to have been feathered, and several preserve direct fossil evidence of feathers. The precise function of the sickle claw is debated — pinning and restraining prey (rather than slashing) is one current hypothesis supported by biomechanical modelling.",
    whyItMatters: "Dromaeosaurids sit close to the origin of birds in the theropod family tree, making them key to understanding the dinosaur-to-bird transition. They are also among the most frequently misrepresented dinosaurs in popular media — the large, scaly animals of film depictions differ substantially from the feathered, comparatively modest-sized animals in the fossil record.",
    dinodexContext: "DinoDex includes dromaeosaurids such as Velociraptor and Utahraptor. Their actual size, appearance, and ecology often differs significantly from film portrayals.",
    exampleUsage: "Velociraptor mongoliensis was roughly turkey-sized and feathered — very different from its depiction in Jurassic Park.",
    examples: ["Velociraptor mongoliensis", "Utahraptor ostrommaysorum", "Deinonychus antirrhopus", "Microraptor gui"],
    exampleSpeciesIds: ["velociraptor", "utahraptor"],
    relatedTerms: ["Paravian", "Maniraptoran", "Integument"],
    keywords: ["sickle claw", "raptor", "feathered", "paravian", "Velociraptor", "Utahraptor", "Deinonychus"],
    sourceNotes: "Standard knowledge. Sickle claw function debate is ongoing — avoid overclaiming specific predatory behaviours. Specific examples should be checked against primary or museum sources before formal use."
  },

  /* ── FOSSILS & EVIDENCE ─────────────────────────────────── */
  {
    id: "fossil-formation",
    term: "Fossil formation",
    category: "Fossils & Evidence",
    difficulty: "core",
    aliases: ["fossilisation", "fossilization"],
    simpleDefinition: "The process by which the remains or traces of an organism are preserved in rock over geological time.",
    scientificExplanation: "Fossilisation occurs through several pathways: permineralisation (minerals infill pore spaces in bone or wood), replacement (original material is dissolved and replaced by mineral), carbonisation (soft tissue is reduced to a thin carbon film), preservation in amber, or moulding and casting by surrounding sediment. In most cases only hard parts survive — bones, shells, and teeth. Soft tissue fossilises only under exceptional conditions. The probability of any individual organism fossilising at all is extremely low, which is why the fossil record is so incomplete.",
    whyItMatters: "Understanding how fossils form explains why the record is biased and what can and cannot be inferred from it. It reveals why discoveries such as preserved feathers or original skin colour are scientifically extraordinary.",
    dinodexContext: "The completeness and quality of each DinoDex species entry depends on how that animal fossilised. Species known from complete articulated skeletons (typically buried rapidly in fine-grained sediment) are far better understood than those known only from fragmentary material.",
    exampleUsage: "The exceptional preservation of Archaeopteryx skeletons in the Solnhofen limestone was caused by rapid burial in an oxygen-poor lagoon environment that inhibited decay.",
    examples: ["Permineralisation in dinosaur bone", "Amber preservation of feathers or insects", "Carbonisation of soft tissues in fine-grained shale", "Replacement of original mineral by iron pyrite"],
    exampleSpeciesIds: [],
    relatedTerms: ["Taphonomy", "Fossil record", "Preservation", "Lagerstätte"],
    keywords: ["permineralisation", "preservation", "amber", "carbonisation", "mineralisation", "burial", "fossilization"],
    sourceNotes: "Standard concept."
  },
  {
    id: "fossil-record",
    term: "Fossil record",
    category: "Fossils & Evidence",
    difficulty: "core",
    aliases: ["fossil evidence", "palaeontological record"],
    simpleDefinition: "The totality of all known fossils worldwide — an incomplete but irreplaceable archive of the history of life.",
    scientificExplanation: "The fossil record encompasses all preserved remains, traces, and chemical signatures of past life known to science. It is inherently incomplete: fossilisation requires specific conditions rarely met, so only a fraction of organisms that ever lived leave any trace. The record is also biased toward hard-bodied organisms, large body sizes, and environments with high sediment deposition rates. Despite these limitations, the fossil record provides the only direct physical evidence of extinct life and preserves evolutionary history unobservable by any other means.",
    whyItMatters: "The fossil record is the primary evidence base for everything known about non-avian dinosaurs, ancient ecosystems, and the deep history of life. Understanding its limitations is as important as knowing what it contains.",
    dinodexContext: "Every DinoDex species entry is a data point from the fossil record. The quality and completeness of that entry directly reflects how well a species is preserved.",
    exampleUsage: "The fossil record shows that avian diversity diversified rapidly after the K-Pg extinction, supporting the view that the extinction event opened ecological space for modern bird lineages.",
    examples: ["Bone beds in the Hell Creek Formation", "Beautifully preserved Solnhofen limestone fossils", "Trace fossils recording dinosaur footprints", "Isolated teeth as the only evidence for some species"],
    exampleSpeciesIds: [],
    relatedTerms: ["Taphonomy", "Holotype", "Preservation", "Lagerstätte", "Fossil formation"],
    keywords: ["fossils", "evidence", "incomplete", "preservation", "palaeontology", "bias", "record"],
    sourceNotes: "Standard concept."
  },

  /* ── CLASSIFICATION ─────────────────────────────────────── */
  {
    id: "genus",
    term: "Genus",
    category: "Classification",
    difficulty: "core",
    aliases: ["genera"],
    simpleDefinition: "A level of biological classification that groups closely related species together — the first part of a species' formal Latin name.",
    scientificExplanation: "The genus is the rank between family and species in the Linnaean hierarchy. It groups species that share a recent common ancestor and a distinctive suite of characters. In the binomial system, the genus name is always capitalised and italicised. In palaeontology, genera are often defined from limited material and are frequently revised as better specimens come to light or as phylogenetic analyses are refined.",
    whyItMatters: "The genus provides a shorthand for relatedness. Knowing that Tyrannosaurus and Daspletosaurus are different genera within Tyrannosauridae immediately communicates that they are closely related but distinct animals.",
    dinodexContext: "Every DinoDex species name begins with a genus name. Some genera are monotypic (containing only one species); others contain multiple recognised species.",
    exampleUsage: "The genus Velociraptor contains two recognised species: V. mongoliensis and V. osmolskae.",
    examples: ["Tyrannosaurus (contains T. rex)", "Velociraptor (contains V. mongoliensis and V. osmolskae)", "Triceratops (contains T. horridus and T. prorsus)"],
    exampleSpeciesIds: ["velociraptor"],
    relatedTerms: ["Species", "Taxonomy", "Holotype", "Diagnosis"],
    keywords: ["classification", "binomial", "Linnaean", "rank", "naming", "monotypic"],
    sourceNotes: "Standard biological knowledge."
  },

  /* ── FOSSILS & EVIDENCE ─────────────────────────────────── */
  {
    id: "holotype",
    term: "Holotype",
    category: "Fossils & Evidence",
    difficulty: "useful",
    aliases: ["type specimen", "name-bearing specimen"],
    simpleDefinition: "The single fossil specimen that officially defines a species — the permanent reference point for everything that name means.",
    scientificExplanation: "Under the International Code of Zoological Nomenclature (ICZN), every new species must be anchored to a designated holotype specimen held in a registered institution. All subsequent finds are compared to the holotype to determine whether they belong to the same species. If a holotype is lost or destroyed, the ICZN rules allow the designation of a neotype as a replacement.",
    whyItMatters: "The holotype system ensures that species names are stable and internationally agreed. Without it, the same animal could be named twice by different researchers working independently.",
    dinodexContext: "Many DinoDex species are represented by fragmentary holotypes — partial skulls, isolated limb bones, or even single teeth. The completeness of the holotype affects how confident scientists can be about a species' anatomy and classification.",
    exampleUsage: "The holotype of Tyrannosaurus rex, described by Henry Fairfield Osborn in 1905, is now catalogued as AMNH 973.",
    examples: ["AMNH 973 — Tyrannosaurus rex holotype", "CM 9380 — Diplodocus carnegii holotype", "YPM 1820 — Stegosaurus armatus holotype"],
    exampleSpeciesIds: ["tyrannosaurus"],
    relatedTerms: ["Specimen", "Diagnosis", "Taphonomy", "Taxonomy"],
    keywords: ["type specimen", "nomenclature", "ICZN", "reference", "museum", "fossil record", "neotype"],
    sourceNotes: "ICZN definitions are authoritative. Specific catalogue numbers sourced from general knowledge — verify against institutional databases before citing in formal contexts."
  },

  /* ── ANATOMY & ECOLOGY ──────────────────────────────────── */
  {
    id: "integument",
    term: "Integument",
    category: "Anatomy & Ecology",
    difficulty: "useful",
    aliases: ["integumentary system", "body covering"],
    simpleDefinition: "The outer covering of an animal — skin, scales, feathers, or fur — and the structures derived from it.",
    scientificExplanation: "In palaeontology, integument refers to preserved evidence of skin texture, scales, protofeathers, or feathers on a fossil. Integumentary impressions are rare but enormously informative, revealing whether a dinosaur was scaly, feathered, or somewhere between the two. Exceptional preservation in fine-grained sediments or amber occasionally captures melanosomes (colour-producing organelles), allowing colour reconstruction in some specimens.",
    whyItMatters: "Integument evidence directly challenges the traditional scaly-reptile image of dinosaurs. Multiple theropod lineages preserve feathers or filamentous protofeathers, supporting the evolutionary link to birds and suggesting feathers evolved earlier and more broadly than once assumed.",
    dinodexContext: "Several DinoDex species have integument evidence — from the filamentous fibres of Yutyrannus to scale impressions preserved on Psittacosaurus. This is one of the fastest-moving areas of dinosaur palaeontology.",
    exampleUsage: "The integument of Anchiornis has been reconstructed in detail using melanosome data, revealing a black-and-white patterned plumage with a rufous head crest.",
    examples: ["Feathered integument in Microraptor gui", "Scale impressions in hadrosaur skin", "Filamentous fibres in Sinosauropteryx prima", "Psittacosaurus scale and bristle impressions"],
    exampleSpeciesIds: ["yutyrannus", "psittacosaurus"],
    relatedTerms: ["Fossil record", "Lagerstätte", "Paravian"],
    keywords: ["feathers", "scales", "skin", "preservation", "colour", "protofeathers", "melanosomes", "bristles"],
    sourceNotes: "Anchiornis colour reconstruction by Li et al. (2010) is well-established. Psittacosaurus integument references vary by specimen — verify against primary literature before citing. Technical term; verify wording in a later accuracy pass."
  },

  /* ── DEEP TIME ──────────────────────────────────────────── */
  {
    id: "jurassic",
    term: "Jurassic",
    category: "Deep Time",
    difficulty: "core",
    aliases: ["Jurassic Period", "Jurassic period"],
    simpleDefinition: "The middle period of the Mesozoic Era (approximately 201–145 million years ago) — the age of great sauropods, early birds, and rapidly diversifying dinosaur lineages.",
    scientificExplanation: "The Jurassic Period (201–145 Ma) opened in the aftermath of the end-Triassic extinction, with dinosaurs quickly diversifying to fill vacated ecological roles. It is characterised by the dominance of sauropods as megaherbivores, the diversification of large theropods, and the appearance of the earliest known birds (Archaeopteryx, ~150 Ma). The supercontinent Pangaea continued to break apart during the Jurassic, creating the isolated landmasses and seaways that drove lineage divergence. Climates were generally warm and humid.",
    whyItMatters: "The Jurassic produced the iconic large-dinosaur image — enormous sauropods alongside large predatory theropods — and witnessed the first evolution of birds. It demonstrates how rapidly ecological niches can be filled after a mass extinction.",
    dinodexContext: "Many DinoDex species are Jurassic — including Brachiosaurus and Allosaurus. Their world was warmer and wetter than the modern, with different continental configurations and no polar ice.",
    exampleUsage: "The Late Jurassic Morrison Formation of North America preserves a diverse fauna including Allosaurus, Brachiosaurus, Diplodocus, and Stegosaurus — all sharing the same ecosystem.",
    examples: ["Brachiosaurus altithorax — North America", "Allosaurus fragilis — North America", "Archaeopteryx lithographica — Europe (Bavaria)", "Stegosaurus armatus — North America"],
    exampleSpeciesIds: ["brachiosaurus", "allosaurus"],
    relatedTerms: ["Mesozoic", "Triassic", "Cretaceous"],
    keywords: ["sauropods", "Morrison Formation", "Archaeopteryx", "birds", "Pangaea breakup", "warm", "Allosaurus", "Jurassic"],
    sourceNotes: "Dates from ICS 2023 or current edition. Standard geological knowledge."
  },
  {
    id: "kpg-boundary",
    term: "K-Pg Boundary",
    category: "Deep Time",
    difficulty: "core",
    aliases: ["K-T boundary", "Cretaceous-Palaeogene boundary", "end-Cretaceous extinction"],
    simpleDefinition: "The geological boundary 66 million years ago marking the mass extinction that ended the reign of non-avian dinosaurs — caused primarily by a large asteroid impact.",
    scientificExplanation: "The Cretaceous–Palaeogene (K-Pg) boundary is marked in the rock record worldwide by a thin iridium-rich clay layer — the chemical signature of the Chicxulub bolide impact on the Yucatán Peninsula. The impact triggered global firestorms, prolonged atmospheric darkness and cooling, acid rain, and ocean acidification, driving approximately 75% of species to extinction. The role of concurrent Deccan Traps flood basalt volcanism in amplifying or contributing to the extinction is actively discussed in the scientific literature, with ongoing debate about its relative significance.",
    whyItMatters: "The K-Pg extinction fundamentally restructured life on Earth. The elimination of non-avian dinosaurs opened enormous ecological space that mammals rapidly filled — a process that ultimately led to the conditions enabling human evolution.",
    dinodexContext: "The K-Pg boundary is the endpoint for every non-avian species in DinoDex. Understanding it contextualises why these animals are extinct and why birds — the surviving theropod lineage — look so different from their Mesozoic relatives.",
    exampleUsage: "The iridium anomaly at the K-Pg boundary was first identified by Luis and Walter Alvarez and colleagues in 1980, providing the first strong physical evidence for an extraterrestrial impact at this horizon.",
    examples: ["Chicxulub crater, Yucatán Peninsula, Mexico", "Iridium anomaly layer (worldwide)", "Deccan Traps flood basalt province, India", "Hell Creek Formation, USA (latest Maastrichtian faunas)"],
    exampleSpeciesIds: ["tyrannosaurus", "triceratops"],
    relatedTerms: ["Mesozoic", "Maastrichtian", "Mass extinction", "Cretaceous"],
    keywords: ["mass extinction", "asteroid", "Chicxulub", "iridium", "Cretaceous", "impact winter", "end-Cretaceous", "Deccan Traps"],
    sourceNotes: "Alvarez et al. (1980) is the foundational paper for the iridium anomaly. Chicxulub impact as the primary driver is scientific consensus; the contribution of Deccan volcanism is actively debated in the literature — avoid stating a settled conclusion on this point."
  },

  /* ── FOSSILS & EVIDENCE ─────────────────────────────────── */
  {
    id: "lagerstaette",
    term: "Lagerstätte",
    category: "Fossils & Evidence",
    difficulty: "useful",
    aliases: ["Lagerstätten", "exceptional preservation site", "fossil lagerstaette"],
    simpleDefinition: "A rock deposit with exceptionally well-preserved fossils, often including soft tissue, feathers, skin, or near-complete skeletons.",
    scientificExplanation: "Lagerstätte (plural: Lagerstätten) is a German geological term meaning 'storage place'. In palaeontology it refers to localities where fossils preserve extraordinary completeness or soft-tissue detail, typically because of low-oxygen burial environments that inhibited decay, rapid burial in fine sediment, or unusual chemical conditions. Famous examples include the Solnhofen limestone (Late Jurassic, Germany), the Yixian and Jiufotang formations (Early Cretaceous, China), and the Burgess Shale (Cambrian, Canada). Lagerstätten are disproportionately important because they reveal the soft-bodied and soft-tissue aspects of ancient life otherwise invisible in the fossil record.",
    whyItMatters: "Lagerstätten have transformed our understanding of what ancient organisms actually looked like. Without sites like the Yixian Formation, the feathered nature of many theropods might never have been confirmed.",
    dinodexContext: "Several DinoDex species — including Microraptor, Psittacosaurus, and Wulong — come from the Yixian Formation and related Early Cretaceous beds of Liaoning, China, a Lagerstätte that has revolutionised understanding of feathered theropods.",
    exampleUsage: "The Solnhofen Lagerstätte in Bavaria has produced multiple Archaeopteryx specimens preserved in such detail that individual feather impressions remain visible.",
    examples: ["Solnhofen limestone, Bavaria, Germany (Archaeopteryx)", "Yixian Formation, Liaoning, China (feathered theropods)", "Burgess Shale, British Columbia (Cambrian soft-bodied fauna)", "Messel Pit, Hesse, Germany (Eocene mammals and birds)"],
    exampleSpeciesIds: ["wulong", "psittacosaurus"],
    relatedTerms: ["Taphonomy", "Fossil record", "Preservation", "Fossil formation"],
    keywords: ["exceptional preservation", "Solnhofen", "Yixian", "Burgess Shale", "soft tissue", "feathers", "Germany", "China", "Liaoning"],
    sourceNotes: "Standard geological term. Specific examples should be checked against primary or museum sources before formal use."
  },

  /* ── DEEP TIME ──────────────────────────────────────────── */
  {
    id: "maastrichtian",
    term: "Maastrichtian",
    category: "Deep Time",
    difficulty: "useful",
    aliases: ["Maastrichtian Age", "latest Cretaceous"],
    simpleDefinition: "The final geological age of the Cretaceous Period (approximately 72–66 million years ago) — the last chapter in which non-avian dinosaurs roamed the Earth.",
    scientificExplanation: "The Maastrichtian Age (72.1–66.0 Ma) is the final stage of the Late Cretaceous Epoch. It is defined by its marine fauna in the type section near Maastricht, Netherlands, but is better known palaeontologically for its rich terrestrial dinosaur faunas: the Hell Creek Formation (USA), Horseshoe Canyon and Lance formations (North America), and the Nemegt Formation (Mongolia). Many iconic dinosaurs — Tyrannosaurus, Triceratops, Edmontosaurus, Ankylosaurus — lived exclusively in the Maastrichtian.",
    whyItMatters: "The Maastrichtian gives palaeontologists the clearest window into the world immediately before the K-Pg extinction. Understanding what lived — and what subsequently vanished — in a Maastrichtian ecosystem is central to understanding what the extinction actually took.",
    dinodexContext: "Many DinoDex species are Maastrichtian in age. When a species card notes 'Late Cretaceous', it often specifically means Maastrichtian for well-known North American species.",
    exampleUsage: "Tyrannosaurus rex is known exclusively from Maastrichtian deposits, placing it in the final two to three million years before the K-Pg extinction.",
    examples: ["Tyrannosaurus rex — Hell Creek Formation, USA", "Triceratops horridus — Hell Creek Formation", "Tarbosaurus bataar — Nemegt Formation, Mongolia", "Edmontosaurus regalis — Horseshoe Canyon Formation, Alberta"],
    exampleSpeciesIds: ["tyrannosaurus", "triceratops"],
    relatedTerms: ["Cretaceous", "K-Pg Boundary", "Mesozoic"],
    keywords: ["Late Cretaceous", "Hell Creek", "Nemegt", "final dinosaurs", "66 Ma", "geological age", "end-Cretaceous"],
    sourceNotes: "Dates from ICS 2023 or current edition. Standard geological knowledge."
  },

  /* ── CLASSIFICATION ─────────────────────────────────────── */
  {
    id: "maniraptoran",
    term: "Maniraptoran",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Maniraptora", "maniraptorans"],
    simpleDefinition: "A group of advanced theropod dinosaurs that includes all birds and their closest non-avian relatives — distinguished by grasping hands, long arms, and a wishbone.",
    scientificExplanation: "Maniraptora is a clade within Coelurosauria (advanced theropods) defined by features including a semilunate carpal (a wrist bone enabling a wing-folding stroke), elongated arms with grasping hands, and a furcula (wishbone) present in many members. The group includes Oviraptorosauria, Therizinosauria, Dromaeosauridae, Troodontidae, and Avialae (birds and their stem relatives). Maniraptora represents the theropod grade from which birds emerged.",
    whyItMatters: "Maniraptorans span the evolutionary grade from clearly non-avian theropod to bird. Understanding this group reveals how distinctly avian features — feathers, wishbone, folding wings — evolved step by step before the origin of flight.",
    dinodexContext: "Many DinoDex theropods are maniraptorans. Species that preserve feathers, have notably long arms, or show evidence of nesting behaviour often belong to this group.",
    exampleUsage: "Oviraptor philoceratops is a maniraptoran once wrongly accused of eating eggs — fossils now show it was a dedicated nest-brooder.",
    examples: ["Velociraptor mongoliensis (dromaeosaurid)", "Oviraptor philoceratops (oviraptorosaur)", "Therizinosaurus cheloniformis (therizinosaur)", "Archaeopteryx lithographica (avialan)"],
    exampleSpeciesIds: ["velociraptor"],
    relatedTerms: ["Theropod", "Paravian", "Dromaeosaurid", "Clade"],
    keywords: ["wishbone", "furcula", "grasping", "semilunate", "coelurosaur", "birds", "feathers", "long arms"],
    sourceNotes: "Standard classification. Technical term; verify wording in a later accuracy pass."
  },

  /* ── EVOLUTION ──────────────────────────────────────────── */
  {
    id: "mass-extinction",
    term: "Mass extinction",
    category: "Evolution",
    difficulty: "core",
    aliases: ["extinction event", "mass die-off", "Big Five extinctions"],
    simpleDefinition: "A geologically rapid event in which a large proportion of the world's species are lost — resetting and reshaping the trajectory of life on Earth.",
    scientificExplanation: "A mass extinction is conventionally defined as the loss of more than approximately 75% of species globally within a geologically brief interval. Earth has experienced five major Phanerozoic mass extinctions: end-Ordovician (~443 Ma), Late Devonian (~372 Ma), end-Permian (~252 Ma — the largest, eliminating ~90% of species), end-Triassic (~201 Ma), and end-Cretaceous (K-Pg, 66 Ma). Each event was driven by different mechanisms and reshaped the subsequent evolution of life. Percentage loss figures vary between studies and should be treated as approximate.",
    whyItMatters: "Mass extinctions demonstrate that the trajectory of evolution is not inevitable — catastrophe and cascading ecosystem failure can eliminate even dominant, successful groups. The survival of the bird lineage and the extinction of all other non-avian dinosaurs at the K-Pg event is the most consequential example.",
    dinodexContext: "The K-Pg mass extinction ended the reign of every non-avian dinosaur species in DinoDex. The end-Triassic extinction, 135 million years earlier, created the ecological space in which dinosaurs first rose to dominance.",
    exampleUsage: "The end-Permian mass extinction, sometimes called the Great Dying, was so severe that it took tens of millions of years for terrestrial and marine ecosystems to fully recover.",
    examples: ["End-Permian (Great Dying) — ~252 Ma", "K-Pg extinction — 66 Ma (non-avian dinosaurs)", "End-Triassic — ~201 Ma (opened ecological space for dinosaur dominance)", "End-Ordovician — ~443 Ma"],
    exampleSpeciesIds: [],
    relatedTerms: ["K-Pg Boundary", "Mesozoic", "Adaptive radiation"],
    keywords: ["extinction event", "Big Five", "K-Pg", "Permian", "species loss", "catastrophe", "recovery", "Great Dying"],
    sourceNotes: "Dates from ICS 2023 or equivalent. Percentage loss figures vary between studies; treat as approximate. Standard concept."
  },

  /* ── DEEP TIME ──────────────────────────────────────────── */
  {
    id: "mesozoic",
    term: "Mesozoic",
    category: "Deep Time",
    difficulty: "core",
    aliases: ["Mesozoic Era", "Age of Reptiles", "Age of Dinosaurs"],
    simpleDefinition: "The geological era spanning roughly 252 to 66 million years ago, encompassing the Triassic, Jurassic, and Cretaceous periods — the entire age of non-avian dinosaurs.",
    scientificExplanation: "The Mesozoic Era is divided into three periods: Triassic (252–201 Ma), Jurassic (201–145 Ma), and Cretaceous (145–66 Ma). It began after the end-Permian mass extinction — the largest in Earth's history — and ended with the K-Pg extinction event. During the Mesozoic, the supercontinent Pangaea gradually broke apart into configurations approaching the modern arrangement. Mammals, birds, flowering plants, and many marine groups all originated or diversified significantly during this era.",
    whyItMatters: "The Mesozoic shaped the modern biosphere. Understanding it is essential context for why modern ecosystems look the way they do — and for appreciating the vast timescales involved in the history of life.",
    dinodexContext: "Every DinoDex species lived during the Mesozoic. The period labels on each species card — Triassic, Jurassic, Cretaceous — are subdivisions of this era. The timescales involved are immense: early and late Mesozoic species were separated by as much time as separates us from the earliest Triassic animals.",
    exampleUsage: "The Mesozoic saw the rise of flowering plants in the Cretaceous, fundamentally transforming terrestrial ecosystems and driving the diversification of many herbivore lineages.",
    examples: ["Triassic period (252–201 Ma)", "Jurassic period (201–145 Ma)", "Cretaceous period (145–66 Ma)"],
    exampleSpeciesIds: [],
    relatedTerms: ["K-Pg Boundary", "Triassic", "Jurassic", "Cretaceous"],
    keywords: ["geological time", "era", "Triassic", "Jurassic", "Cretaceous", "Pangaea", "deep time"],
    sourceNotes: "Dates from ICS 2023 or current edition. Standard geological knowledge."
  },

  /* ── EVOLUTION ──────────────────────────────────────────── */
  {
    id: "mosaic-evolution",
    term: "Mosaic evolution",
    category: "Evolution",
    difficulty: "advanced",
    aliases: ["mosaic character distribution"],
    simpleDefinition: "The pattern in which different parts of an organism evolve at different rates, producing creatures with a mix of ancestral and modern features.",
    scientificExplanation: "Mosaic evolution describes the observation that evolutionary change within a lineage is not uniform — different anatomical systems (locomotion, diet, integument, reproduction) can evolve independently and at different rates. Archaeopteryx is a classic example: it had feathered wings (a derived avian feature) alongside teeth and a long bony tail (ancestral theropod features). This uneven rate of change means that the earliest member of a group may have surprisingly advanced features in some respects while retaining ancestral features in others.",
    whyItMatters: "Mosaic evolution explains why transitional fossils rarely look like perfect intermediates between two body plans. It also cautions against assuming that a feature present in a later member of a group was absent throughout the lineage's history.",
    dinodexContext: "Many DinoDex species exhibit mosaic patterns — theropods with feathers but non-avian skeletons, or ornithischians that independently evolved quadrupedality from bipedal ancestors. Recognising mosaic evolution is part of why formal character analysis is needed rather than intuition.",
    exampleUsage: "Archaeopteryx shows clear mosaic evolution: it had a feathered wing surface suited to gliding or flight, yet retained teeth, clawed wing fingers, and a long bony tail absent in modern birds.",
    examples: ["Archaeopteryx — feathered wings combined with teeth and bony tail", "Tiktaalik roseae — fish body plan with proto-wrist bones", "Yutyrannus — large body with filamentous feathers"],
    exampleSpeciesIds: ["yutyrannus"],
    relatedTerms: ["Transitional fossil", "Phylogeny", "Convergent evolution"],
    keywords: ["uneven rates", "ancestral", "derived", "character", "intermediate", "evolution", "Archaeopteryx"],
    sourceNotes: "Standard evolutionary concept. Technical term; verify wording in a later accuracy pass."
  },

  /* ── CLASSIFICATION ─────────────────────────────────────── */
  {
    id: "ornithischian",
    term: "Ornithischian",
    category: "Classification",
    difficulty: "core",
    aliases: ["Ornithischia", "bird-hipped dinosaur"],
    simpleDefinition: "One of the two major dinosaur groups — the 'bird-hipped' dinosaurs, including horned dinosaurs, armoured dinosaurs, duck-billed dinosaurs, and their relatives.",
    scientificExplanation: "Ornithischia is a major dinosaur clade defined by a distinctive backward-pointing pubis bone (convergently similar to the bird hip arrangement, despite the name). The group encompasses diverse herbivorous lineages: Ceratopsia (horned), Thyreophora (armoured stegosaurs and ankylosaurs), and Ornithopoda (including hadrosaurs). No ornithischian lineage survived the K-Pg extinction. Note: an alternative phylogenetic arrangement proposed by Baron et al. (2017) grouped Ornithischia with Theropoda — this hypothesis remains actively debated.",
    whyItMatters: "Ornithischia encompassed most of the famous horned, armoured, and duck-billed dinosaurs. Their diversity illustrates the breadth of large-herbivore strategies in Mesozoic ecosystems.",
    dinodexContext: "DinoDex ornithischian species include ceratopsians, pachycephalosaurs, and ornithopods. Their classification is noted on individual species cards.",
    exampleUsage: "Triceratops is an ornithischian dinosaur, belonging specifically to the ceratopsian subgroup.",
    examples: ["Triceratops horridus (ceratopsian)", "Stegosaurus armatus (thyreophoran)", "Edmontosaurus regalis (ornithopod)", "Ankylosaurus magniventris (ankylosaur)"],
    exampleSpeciesIds: ["triceratops"],
    relatedTerms: ["Dinosauria", "Ceratopsian", "Clade", "Ornithischian"],
    keywords: ["bird-hipped", "herbivore", "horned", "armoured", "duck-billed", "thyreophora", "ornithopoda", "pubis"],
    sourceNotes: "Standard classification. Baron et al. (2017) alternative arrangement is an active debate; the traditional Saurischia/Ornithischia split remains widely used. Verify current consensus before citing for academic use."
  },
  {
    id: "paravian",
    term: "Paravian",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Paraves"],
    simpleDefinition: "The group of feathered theropods most closely related to birds — including dromaeosaurids, troodontids, and early avialans.",
    scientificExplanation: "Paraves is a clade within Maniraptora that unites Dromaeosauridae, Troodontidae, and Avialae (birds and their closest stem relatives). Paravians are characterised by large sickle-shaped second-toe claws in many lineages, extensively feathered bodies, and body plans adapted for flight-adjacent or climbing lifestyles in various members. The precise branching order within Paraves — including which group is the closest outgroup to birds — remains an active area of research.",
    whyItMatters: "Paraves sits right at the evolutionary transition from non-avian theropod to bird. Studying paravians reveals how distinctly avian features — feathers, wishbone, flight apparatus — evolved step by step before true flight.",
    dinodexContext: "DinoDex species including Velociraptor and Wulong are paravians. Their integument evidence and skeletal features are discussed in the context of the dinosaur-to-bird transition.",
    exampleUsage: "Wulong bohaiensis is a paravian dinosaur that preserves a long tail fan of feathers, offering direct evidence of elaborate plumage in this part of the theropod tree.",
    examples: ["Velociraptor mongoliensis (dromaeosaurid)", "Microraptor gui (dromaeosaurid, four-winged)", "Archaeopteryx lithographica (avialan)"],
    exampleSpeciesIds: ["velociraptor", "wulong"],
    relatedTerms: ["Theropod", "Maniraptoran", "Dromaeosaurid", "Integument"],
    keywords: ["feathered", "sickle claw", "bird origin", "maniraptoran", "Dromaeosauridae", "Troodontidae", "Avialae"],
    sourceNotes: "Standard concept. Specific phylogenetic placement of paravian subgroups is actively researched. Technical term; verify wording in a later accuracy pass."
  },

  /* ── EVOLUTION ──────────────────────────────────────────── */
  {
    id: "phylogeny",
    term: "Phylogeny",
    category: "Evolution",
    difficulty: "useful",
    aliases: ["phylogenetic tree", "evolutionary tree", "cladogram"],
    simpleDefinition: "A diagram or description of the evolutionary relationships among a group of organisms — showing who is most closely related to whom.",
    scientificExplanation: "A phylogeny represents the pattern of common ancestry among taxa, inferred from shared derived characteristics (synapomorphies). Modern phylogenies are built using cladistic or model-based methods (maximum likelihood, Bayesian inference) applied to morphological or molecular datasets. The result is a tree where branch points (nodes) represent hypothetical common ancestors. In palaeontology, phylogenies are built from morphological characters alone, and are therefore subject to revision as new specimens are found.",
    whyItMatters: "Phylogenies underpin all of modern biology — from drug discovery and conservation to understanding how major body plans evolved over hundreds of millions of years.",
    dinodexContext: "Every clade label and classification in DinoDex reflects a phylogenetic hypothesis. When scientists reclassify a dinosaur — as happened repeatedly in the 2010s — it is because new data changed the best-supported phylogeny.",
    exampleUsage: "The phylogeny of Theropoda places birds nested deep within the group, making them living dinosaurs by any phylogenetic definition.",
    examples: ["Theropod phylogeny showing bird placement", "Ornithischian relationships within Dinosauria", "Ceratopsian family tree within Ornithischia"],
    exampleSpeciesIds: ["velociraptor", "tyrannosaurus"],
    relatedTerms: ["Clade", "Cladistics", "Taxonomy", "Transitional fossil"],
    keywords: ["evolutionary tree", "cladogram", "synapomorphy", "common ancestor", "systematics", "classification", "Bayesian"],
    sourceNotes: "Standard evolutionary biology concept. Specific phylogenetic positions cited in species data should be verified against current literature."
  },

  /* ── ANATOMY & ECOLOGY ──────────────────────────────────── */
  {
    id: "pneumaticity",
    term: "Pneumaticity",
    category: "Anatomy & Ecology",
    difficulty: "useful",
    aliases: ["pneumatised skeleton", "air sacs", "skeletal pneumaticity"],
    simpleDefinition: "The presence of air-filled cavities inside bones, connected to a respiratory air-sac system — a key feature of birds and many dinosaurs.",
    scientificExplanation: "Skeletal pneumaticity refers to bones that contain hollow, air-filled spaces derived from extensions of the respiratory system's air sacs. In birds and their theropod relatives, extensive pneumatisation reduces skeletal mass while maintaining structural strength. Pneumatic features — foramina and internal chambers — in fossil bones provide evidence of the air-sac respiratory system even when soft tissue is not preserved. Sauropods also show extreme pneumaticity in their vertebrae, a feature likely essential for reducing the mass of their enormous necks.",
    whyItMatters: "Pneumaticity in theropods provided early evidence that the avian air-sac respiratory system — more efficient than the mammalian lung — evolved well before flight and is deeply embedded in the theropod lineage.",
    dinodexContext: "Pneumaticity is relevant to several DinoDex species, particularly large theropods and sauropods. References to 'hollow bones' on species cards relate to this feature.",
    exampleUsage: "The cervical vertebrae of Brachiosaurus were extensively pneumatised — largely hollow, substantially reducing the weight of its long neck.",
    examples: ["Hollow vertebrae in Tyrannosaurus", "Extensive cervical pneumaticity in sauropods", "Air sac system in modern birds", "Pneumatic hip bones in theropods"],
    exampleSpeciesIds: ["brachiosaurus"],
    relatedTerms: ["Sauropod", "Theropod", "Integument"],
    keywords: ["air sacs", "hollow bones", "respiration", "weight reduction", "flight", "avian", "air cavity", "vertebrae"],
    sourceNotes: "Standard anatomical concept. Technical term; verify wording in a later accuracy pass."
  },

  /* ── FOSSILS & EVIDENCE ─────────────────────────────────── */
  {
    id: "preservation",
    term: "Preservation",
    category: "Fossils & Evidence",
    difficulty: "core",
    aliases: ["fossil preservation", "completeness", "preservation quality"],
    simpleDefinition: "How much of an organism's original remains — bones, soft tissue, colour, or behavioural evidence — has survived and can be studied.",
    scientificExplanation: "Preservation quality varies enormously across the fossil record. At the most basic level it describes skeletal completeness — the proportion of the original skeleton represented by fossil material. More broadly it encompasses retention of original microstructure, the presence of soft tissue (skin, feathers, organs), and the degree to which diagenetic processes have altered the original material after burial. Exceptional preservation can reveal colour patterns, stomach contents, and growth stages. Poor preservation may leave only fragments insufficient for reliable species diagnosis.",
    whyItMatters: "Preservation quality directly determines how confidently a species can be described, classified, and reconstructed. The most striking palaeontological findings — original pigment preservation, soft tissue chemistry — depend on exceptional and rare conditions.",
    dinodexContext: "Where DinoDex notes specimen completeness, this reflects how much of that species' anatomy is directly known from fossil evidence versus inferred from relatives. Better preservation means better data and higher confidence in the species card details.",
    exampleUsage: "The Borealopelta markmitchelli specimen at the Royal Tyrrell Museum retained original skin colouration through pigment preservation, allowing colour-countershading to be inferred.",
    examples: ["Articulated complete skeleton (high preservation)", "Three-dimensional skull with soft tissue impressions", "Isolated teeth only (low preservation)", "Amber-preserved feathers with colour-producing melanosomes"],
    exampleSpeciesIds: [],
    relatedTerms: ["Taphonomy", "Fossil record", "Lagerstätte", "Fossil formation"],
    keywords: ["completeness", "articulated", "soft tissue", "diagenesis", "quality", "exceptional", "pigment"],
    sourceNotes: "Standard concept. Claims about preserved original biomolecules in very old fossils (e.g. proteins, DNA) are contested in the literature; treat with caution and verify against current research."
  },

  /* ── ANATOMY & ECOLOGY ──────────────────────────────────── */
  {
    id: "quadrupedal",
    term: "Quadrupedal",
    category: "Anatomy & Ecology",
    difficulty: "core",
    aliases: ["quadruped", "quadrupedality", "four-legged locomotion"],
    simpleDefinition: "Moving on four legs — the stance of sauropods, ceratopsians, ankylosaurs, and several other dinosaur groups.",
    scientificExplanation: "Quadrupedality evolved multiple times independently within Dinosauria from an ancestrally bipedal body plan. In sauropods it is associated with extreme body size and the redistribution of mass along the body. In ceratopsians and ankylosaurs (Ornithischia), it evolved convergently and is associated with large, low-slung bodies bearing heavy horn or armour complexes. Some ornithopods such as hadrosaurs are thought to have been facultatively quadrupedal — capable of moving on either two or four legs depending on circumstance.",
    whyItMatters: "Understanding which dinosaurs were quadrupedal and why helps reconstruct their ecology, posture, and speed — and illustrates that four-legged stance evolved multiple times independently from a two-legged ancestor.",
    dinodexContext: "DinoDex ceratopsians, sauropods, and ankylosaurs were quadrupedal. Their species cards reflect this in ecology and locomotion notes.",
    exampleUsage: "Triceratops was fully quadrupedal, distributing the considerable weight of its frill and horns across all four limbs.",
    examples: ["Brachiosaurus (obligate quadruped, sauropod)", "Triceratops (quadrupedal ceratopsian)", "Ankylosaurus (quadrupedal thyreophoran)", "Hadrosaurs (possibly facultatively quadrupedal)"],
    exampleSpeciesIds: ["triceratops", "brachiosaurus"],
    relatedTerms: ["Bipedal", "Sauropod", "Ornithischian"],
    keywords: ["four legs", "locomotion", "posture", "sauropod", "ceratopsian", "ankylosaur", "gait", "convergent"],
    sourceNotes: "Standard anatomical concept."
  },

  /* ── CLASSIFICATION ─────────────────────────────────────── */
  {
    id: "sauropod",
    term: "Sauropod",
    category: "Classification",
    difficulty: "core",
    aliases: ["Sauropoda", "sauropodomorph"],
    simpleDefinition: "The long-necked, long-tailed giants of the dinosaur world — the largest land animals ever to have lived.",
    scientificExplanation: "Sauropoda is a clade of saurischian dinosaurs characterised by an extremely elongated neck and tail, quadrupedal stance, columnar limbs, and a comparatively small head. Their immense size — some species exceeded 30 metres in length — was made possible partly by a highly pneumatised skeleton and efficient digestive systems. Sauropods dominated terrestrial ecosystems as megaherbivores throughout much of the Mesozoic. Mass estimates for the largest individuals vary significantly between studies and should be treated as approximate.",
    whyItMatters: "Sauropods represent the extreme of vertebrate body size on land, never equalled before or since. Understanding how they grew, moved, and fed informs our understanding of what is biologically possible for terrestrial animals.",
    dinodexContext: "Several DinoDex species are sauropods, including Brachiosaurus and Dreadnoughtus. Size data in DinoDex reflects ongoing scientific debate about mass estimation methods.",
    exampleUsage: "Dreadnoughtus schrani, described in 2014, is one of the most complete giant sauropods known, with a well-preserved skeleton allowing relatively reliable mass estimation.",
    examples: ["Brachiosaurus altithorax", "Diplodocus carnegii", "Dreadnoughtus schrani", "Argentinosaurus huinculensis"],
    exampleSpeciesIds: ["brachiosaurus", "dreadnoughtus"],
    relatedTerms: ["Dinosauria", "Pneumaticity", "Quadrupedal", "Taxonomy"],
    keywords: ["long-neck", "herbivore", "giant", "quadrupedal", "saurischian", "Jurassic", "Cretaceous", "megaherbivore"],
    sourceNotes: "Standard knowledge. Mass estimates for giant sauropods vary significantly between studies — verify specific figures before citing."
  },
  {
    id: "species",
    term: "Species",
    category: "Classification",
    difficulty: "core",
    aliases: ["sp.", "species epithet"],
    simpleDefinition: "The fundamental unit of biological classification — a group recognised as distinct from all other groups by a formal set of defining characters.",
    scientificExplanation: "In palaeontology, species are diagnosed by morphological characters preserved in fossil material, since genetic testing is unavailable for most Mesozoic organisms. A species is formally established by the description of a holotype specimen paired with a diagnosis listing the features that distinguish it from all other known species. Species concepts differ among researchers, and boundaries between species — especially for closely related or fragmentary taxa — are frequently debated and revised.",
    whyItMatters: "Species are the basic units of biodiversity and evolution. Understanding what counts as a distinct species determines how many kinds of dinosaur are recognised and how diverse the Mesozoic world actually was.",
    dinodexContext: "Each DinoDex entry represents a distinct species, identified by a formal binomial name (genus + species epithet). Some entries may be revised, synonymised, or split as new fossils are discovered.",
    exampleUsage: "Tyrannosaurus rex is a species within the genus Tyrannosaurus, first described by Henry Fairfield Osborn in 1905.",
    examples: ["Tyrannosaurus rex", "Velociraptor mongoliensis", "Triceratops horridus"],
    exampleSpeciesIds: ["tyrannosaurus", "velociraptor", "triceratops"],
    relatedTerms: ["Genus", "Taxonomy", "Holotype", "Diagnosis"],
    keywords: ["classification", "binomial", "diagnosis", "morphology", "diversity", "epithet", "ICZN"],
    sourceNotes: "Standard biological knowledge."
  },

  /* ── FOSSILS & EVIDENCE ─────────────────────────────────── */
  {
    id: "specimen",
    term: "Specimen",
    category: "Fossils & Evidence",
    difficulty: "core",
    aliases: ["fossil specimen", "material"],
    simpleDefinition: "An individual fossil or set of associated fossils from a single individual, curated in a museum or research institution.",
    scientificExplanation: "In palaeontology, a specimen refers to a single catalogued find — which may be a complete skeleton, a partial skull, an isolated tooth, or a bone fragment — assigned a unique catalogue number and deposited in an accredited institution. Specimens are the physical evidence on which all palaeontological science is based. The quality, completeness, and preparation status of a specimen determines how much can be reliably inferred about the organism it represents.",
    whyItMatters: "Specimens are the raw data of palaeontology. Every species description, phylogenetic analysis, and reconstruction ultimately depends on what can be directly observed in physical fossil material.",
    dinodexContext: "When DinoDex lists a species, the underlying knowledge comes from one or more fossil specimens. A species known only from a single tooth is far less well understood than one represented by multiple well-preserved skeletons.",
    exampleUsage: "FMNH PR 2081, commonly known as 'Sue', is the most complete Tyrannosaurus rex specimen ever found and is displayed at the Field Museum, Chicago.",
    examples: ["FMNH PR 2081 — 'Sue' (T. rex)", "MOR 555 — 'Wankel Rex' (T. rex)", "CM 9380 — Diplodocus carnegii holotype"],
    exampleSpeciesIds: ["tyrannosaurus"],
    relatedTerms: ["Holotype", "Fossil record", "Diagnosis", "Preservation"],
    keywords: ["catalogue", "museum", "material", "fossil", "evidence", "completeness", "curation"],
    sourceNotes: "Standard term. Specific catalogue numbers should be verified against institutional databases before formal use."
  },

  /* ── FOSSILS & EVIDENCE ─────────────────────────────────── */
  {
    id: "taphonomy",
    term: "Taphonomy",
    category: "Fossils & Evidence",
    difficulty: "useful",
    aliases: ["taphonomic"],
    simpleDefinition: "The study of what happens to an organism between its death and its discovery as a fossil — covering decay, burial, preservation, and distortion.",
    scientificExplanation: "Taphonomy examines the biological, chemical, and physical processes that transform a dead organism into (or prevent it from becoming) a fossil. Key processes include scavenging, transport by water, burial depth and speed, mineral replacement (permineralisation), compaction, and diagenetic alteration over millions of years. Taphonomic analysis can reveal how an animal died, what the depositional environment was like, and how reliable the fossil evidence is for reconstructing the living animal.",
    whyItMatters: "Taphonomy explains why the fossil record is incomplete and biased — hard bones preserve better than soft tissue, large animals better than small ones, and sediment-rich river environments better than dry uplands.",
    dinodexContext: "The quality of DinoDex species data is partly a taphonomic story. Species with excellent skeletal completeness were typically buried rapidly in fine sediment. Species known only from teeth or fragments suffered poor taphonomic conditions.",
    exampleUsage: "Taphonomic analysis of the Hilda bone bed in Alberta suggested that thousands of Centrosaurus were killed in a single catastrophic flood event.",
    examples: ["Permineralisation", "Articulated versus disarticulated skeletons", "Bonebed formation by hydraulic sorting", "Amber preservation"],
    exampleSpeciesIds: [],
    relatedTerms: ["Holotype", "Fossil record", "Preservation", "Bonebed", "Lagerstätte"],
    keywords: ["fossilisation", "preservation", "burial", "decay", "fossil record", "diagenesis", "bone bed"],
    sourceNotes: "Standard definition. Hilda bone bed example is well-documented — see Currie & Eberth (2010) and related literature. Any extended taphonomic claims should be source-checked before formal use."
  },

  /* ── CLASSIFICATION ─────────────────────────────────────── */
  {
    id: "taxonomy",
    term: "Taxonomy",
    category: "Classification",
    difficulty: "core",
    aliases: ["biological classification", "systematics"],
    simpleDefinition: "The science of naming, describing, and classifying living organisms and fossils into ordered groups.",
    scientificExplanation: "Taxonomy assigns organisms to a hierarchical system of ranks — domain, kingdom, phylum, class, order, family, genus, species — governed by formal codes of nomenclature (ICZN for animals). Taxonomists diagnose new species, revise existing ones, and place them within the broader tree of life. Palaeontological taxonomy relies on morphological characters rather than genetics and is more frequently revised as new specimens are discovered.",
    whyItMatters: "Without taxonomy, the same animal could be named multiple times by different researchers working independently. Standardised names allow scientists worldwide to refer unambiguously to the same organism.",
    dinodexContext: "Each DinoDex species has a formal Latin binomial (genus + species epithet). Taxonomy is why that name is internationally stable — and why name changes sometimes follow new discoveries or phylogenetic analyses.",
    exampleUsage: "Tyrannosaurus rex is the formal taxonomic name for the species; 'T. rex' is the standard informal abbreviation.",
    examples: ["Kingdom Animalia", "Order Saurischia", "Family Tyrannosauridae", "Genus Tyrannosaurus", "Species T. rex"],
    exampleSpeciesIds: ["tyrannosaurus"],
    relatedTerms: ["Genus", "Species", "Dinosauria", "Holotype", "Cladistics"],
    keywords: ["classification", "naming", "ICZN", "binomial", "nomenclature", "hierarchy", "systematics"],
    sourceNotes: "Standard biological knowledge."
  },
  {
    id: "theropod",
    term: "Theropod",
    category: "Classification",
    difficulty: "core",
    aliases: ["Theropoda"],
    simpleDefinition: "A major group of mostly bipedal dinosaurs that includes many famous carnivores and all living birds.",
    scientificExplanation: "Theropoda is a clade of saurischian dinosaurs characterised by hollow bones, three-toed functional limbs, and an ancestrally bipedal stance. The group spans from small insectivores to the largest terrestrial predators ever known, and also includes secondarily herbivorous lineages such as therizinosaurs and oviraptorosaurs. Birds (Aves) are the only surviving theropod lineage, meaning theropods remain a living and diverse group.",
    whyItMatters: "Understanding Theropoda reframes what a 'dinosaur' is — every bird alive today is a theropod. The group spans extremes of size, diet, and ecology found in no other single dinosaur clade.",
    dinodexContext: "Many species cards in DinoDex are theropods. The clade field on each card identifies where a species sits within Theropoda — e.g. Coelophysoid, Tyrannosaurid, Dromaeosaurid.",
    exampleUsage: "Tyrannosaurus rex, Velociraptor mongoliensis, and the common house sparrow are all theropods.",
    examples: ["Tyrannosaurus rex", "Velociraptor mongoliensis", "Allosaurus fragilis", "Gallus gallus — domestic chicken (living theropod)"],
    exampleSpeciesIds: ["tyrannosaurus", "velociraptor", "albertosaurus"],
    relatedTerms: ["Clade", "Phylogeny", "Maniraptoran", "Paravian", "Dinosauria"],
    keywords: ["bipedal", "carnivore", "birds", "saurischian", "predator", "hollow bones", "living dinosaurs"],
    sourceNotes: "Well-established clade with broad consensus. Bird-theropod link confirmed by multiple independent lines of evidence."
  },

  /* ── FOSSILS & EVIDENCE ─────────────────────────────────── */
  {
    id: "trace-fossil",
    term: "Trace fossil",
    category: "Fossils & Evidence",
    difficulty: "core",
    aliases: ["ichnofossil", "ichnology", "trace evidence"],
    simpleDefinition: "A preserved record of an organism's behaviour — footprints, burrows, bite marks, or tracks — rather than the remains of the organism itself.",
    scientificExplanation: "Trace fossils (or ichnofossils) preserve evidence of activity: footprints, resting impressions, burrows, feeding traces, coprolites (fossil dung), and bite marks on bone. They are studied in the field of ichnology. Crucially, the maker of a trace fossil is usually unknown — tracks are assigned to ichnotaxa rather than to named body-fossil species. Trace fossils are often more abundant than body fossils in the same rock sequence and can provide information about behaviour and gait that bones alone cannot.",
    whyItMatters: "Trace fossils provide direct evidence of how animals moved and behaved. Dinosaur trackways reveal gait, group movement patterns, and speed estimates that body fossils simply cannot show.",
    dinodexContext: "While DinoDex focuses on body fossils, trace fossils have contributed important ecological context for several species — including evidence bearing on locomotion and, more controversially, group behaviour.",
    exampleUsage: "A well-known trackway sequence from the Paluxy River in Texas appears to show a large theropod following a sauropod, though the behavioural interpretation has been contested.",
    examples: ["Theropod and sauropod trackways in the Paluxy Riverbed, Texas", "Dinosaur nesting trace evidence", "Coprolites (fossil dung)", "Bite marks on Edmontosaurus bones"],
    exampleSpeciesIds: [],
    relatedTerms: ["Fossil record", "Taphonomy", "Bonebed"],
    keywords: ["footprints", "tracks", "ichnology", "coprolite", "behaviour", "burrow", "bite marks", "ichnofossil"],
    sourceNotes: "Standard concept. Paluxy River trackway behavioural interpretation is debated — avoid stating the stalking interpretation as established fact."
  },

  /* ── EVOLUTION ──────────────────────────────────────────── */
  {
    id: "transitional-fossil",
    term: "Transitional fossil",
    category: "Evolution",
    difficulty: "core",
    aliases: ["transitional form", "missing link"],
    simpleDefinition: "A fossil that shows features of both an ancestral group and its descendants, capturing an evolutionary step in the rock record.",
    scientificExplanation: "A transitional fossil preserves a combination of ancestral and derived characters, illustrating a stage in evolutionary transition between two groups. The informal term 'missing link' is somewhat misleading — every species is in some sense transitional, and finding one creates two new stratigraphic gaps rather than closing one. The most informative transitional fossils match predictions made from phylogenetic analysis before the fossil was found. Classic examples include Tiktaalik (fish-to-tetrapod transition), Archaeopteryx (dinosaur-to-bird), and Pakicetus (land mammal-to-whale).",
    whyItMatters: "Transitional fossils are direct physical evidence of evolutionary change. They demonstrate that organisms evolved gradually from earlier forms, often with intermediate anatomies mixing features of ancestor and descendant.",
    dinodexContext: "Several DinoDex species occupy positions close to major evolutionary transitions — paravians like Velociraptor and Microraptor sit near the dinosaur-to-bird transition and combine non-avian and proto-avian features.",
    exampleUsage: "Archaeopteryx is often described as a transitional fossil between non-avian dinosaurs and modern birds, combining feathered wings with teeth and a long bony tail.",
    examples: ["Archaeopteryx lithographica (dinosaur-bird)", "Tiktaalik roseae (fish-tetrapod)", "Pakicetus attocki (land mammal-whale)"],
    exampleSpeciesIds: ["velociraptor"],
    relatedTerms: ["Phylogeny", "Mosaic evolution", "Fossil record", "Cladistics"],
    keywords: ["missing link", "Archaeopteryx", "intermediate", "evolutionary transition", "evidence", "gradual"],
    sourceNotes: "Standard concept. Avoid implying that a 'transitional fossil' is a perfectly intermediate form — the evolutionary picture is more complex."
  },

  /* ── DEEP TIME ──────────────────────────────────────────── */
  {
    id: "triassic",
    term: "Triassic",
    category: "Deep Time",
    difficulty: "core",
    aliases: ["Triassic Period", "Triassic period"],
    simpleDefinition: "The first period of the Mesozoic Era (approximately 252–201 million years ago), when dinosaurs first appeared on a world still recovering from Earth's greatest mass extinction.",
    scientificExplanation: "The Triassic Period (252–201 Ma) followed the catastrophic end-Permian mass extinction. During the Early Triassic, life slowly recolonised devastated ecosystems dominated by opportunistic survivors. By the Middle and Late Triassic, a diverse range of archosaurs — including early crocodylomorphs, pterosaurs, and the first dinosaurs — had diversified. Early dinosaurs were not immediately dominant; they coexisted with other archosaurs and large synapsids. The end-Triassic extinction (~201 Ma) eliminated many competitors, creating the ecological space that allowed dinosaur dominance in the Jurassic.",
    whyItMatters: "The Triassic is the origin story of dinosaurs — where the group first appeared as modest members of diverse ecosystems before inheriting a reshaped world.",
    dinodexContext: "Relatively few DinoDex species are Triassic, reflecting the actual fossil record — early dinosaurs are less well represented than their Jurassic and Cretaceous successors.",
    exampleUsage: "Eoraptor lunensis, from the Late Triassic of Argentina, is one of the earliest known dinosaurs, dating to approximately 231 million years ago.",
    examples: ["Eoraptor lunensis — early dinosaur, Argentina (~231 Ma)", "Coelophysis bauri — early theropod, New Mexico", "Plateosaurus engelhardti — early sauropodomorph, Europe"],
    exampleSpeciesIds: [],
    relatedTerms: ["Mesozoic", "Jurassic", "Mass extinction"],
    keywords: ["first dinosaurs", "Pangaea", "archosaurs", "recovery", "early dinosaurs", "Permian aftermath", "end-Triassic"],
    sourceNotes: "Dates from ICS 2023 or current edition. Standard geological knowledge."
  },
  /* ── CLASSIFICATION ─────────────────────────────────────── */
  {
    id: "archosaur",
    term: "Archosaur",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Archosauria", "ruling reptile"],
    simpleDefinition: "The group of reptiles that includes dinosaurs, birds, pterosaurs, crocodilians, and all their extinct relatives — but not lizards, snakes, or turtles.",
    scientificExplanation: "Archosauria is defined as the most recent common ancestor of modern crocodilians and modern birds, and all descendants of that ancestor. It splits into two main lineages: Pseudosuchia (the crocodile line) and Avemetatarsalia (the bird line, including dinosaurs and pterosaurs). Archosaurs are diagnosed by several features including an antorbital fenestra (an opening in the skull between the eye and nostril) and a mandibular fenestra (opening in the lower jaw). The group rose to dominance in the Triassic following the Permian-Triassic extinction and has remained ecologically dominant ever since — living birds and crocodilians are the surviving representatives.",
    whyItMatters: "Understanding that dinosaurs are archosaurs places them within a broader evolutionary context that includes crocodilians and pterosaurs. Many features of dinosaurs — upright posture, potential endothermy, respiratory air sacs — have roots in the archosaur body plan.",
    dinodexContext: "All species in DinoDex are archosaurs on the dinosaur line of the family tree. Effigia okeeffeae is a rare example of a DinoDex entry from the crocodile line of Archosauria, demonstrating how similar body plans evolved independently in two separate archosaur lineages.",
    exampleUsage: "Pterosaurs were archosaurs on the bird line of the family tree, closely related to dinosaurs — but they were not dinosaurs themselves.",
    examples: ["Dinosauria (bird-line archosaurs)", "Pterosauria (bird-line archosaurs)", "Crocodilia (crocodile-line archosaurs)", "Aetosauria (extinct crocodile-line archosaurs)"],
    exampleSpeciesIds: ["effigia"],
    relatedTerms: ["Dinosauria", "Pseudosuchian", "Clade", "Theropod"],
    keywords: ["ruling reptile", "antorbital fenestra", "Triassic", "crocodile line", "bird line", "Pseudosuchia", "Avemetatarsalia"],
    sourceNotes: "Standard phylogenetic definition. Sereno (1991) and Benton & Clark (1988) are key systematic references."
  },

  {
    id: "pseudosuchian",
    term: "Pseudosuchian",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Pseudosuchia", "crocodile-line archosaur"],
    simpleDefinition: "A member of the crocodile branch of Archosauria — the lineage that includes modern crocodilians and a diverse range of extinct Triassic relatives.",
    scientificExplanation: "Pseudosuchia comprises all archosaurs more closely related to modern crocodilians than to birds. In the Triassic, pseudosuchians were far more diverse than they are today, including plant-eating aetosaurs, large bipedal rauisuchians and carnivorous loricatans, and the semi-aquatic phytosaurs (which superficially resembled gharials despite being only distantly related to crocodilians). This diversity largely collapsed at the end-Triassic extinction. Modern Crocodilia — the surviving pseudosuchians — represent just one lineage from a once-varied group. Crucially, pseudosuchians are not dinosaurs, despite occasionally evolving similar body plans through convergent evolution.",
    whyItMatters: "The Triassic is often described as the 'age of pseudosuchians' before dinosaurs rose to ecological dominance. Understanding this context shows that dinosaur success was not inevitable — it followed competitive displacement and a mass extinction that happened to favour the dinosaur lineage.",
    dinodexContext: "Effigia okeeffeae in DinoDex is a pseudosuchian: a shuvosaurid closely related to crocodilians that independently evolved the bipedal, toothless body plan later seen in ornithomimosaur dinosaurs. Its inclusion demonstrates convergent evolution across the archosaur family tree.",
    exampleUsage: "Postosuchus, a large Triassic pseudosuchian, was an apex predator that coexisted with and competed against early dinosaurs — and, for a time, may have outcompeted them.",
    examples: ["Postosuchus (rauisuchid pseudosuchian)", "Effigia okeeffeae (shuvosaurid pseudosuchian)", "Aetosaurus (aetosaur pseudosuchian)", "Modern Crocodilia"],
    exampleSpeciesIds: ["effigia"],
    relatedTerms: ["Archosaur", "Convergent evolution", "Triassic", "Dinosauria"],
    keywords: ["crocodile line", "Triassic", "rauisuchian", "aetosaur", "phytosaur", "convergence", "archosaur"],
    sourceNotes: "Standard phylogenetic grouping. Nesbitt (2011) provides the most comprehensive phylogenetic analysis of early archosaurs."
  },

  {
    id: "thyreophora",
    term: "Thyreophora",
    category: "Classification",
    difficulty: "useful",
    aliases: ["thyreophorans", "shield-bearers", "armoured ornithischians"],
    simpleDefinition: "The ornithischian dinosaur group that includes all armoured forms — both the plated stegosaurs and the heavily shielded ankylosaurs.",
    scientificExplanation: "Thyreophora (from the Greek for 'shield-bearer') is a major clade within Ornithischia, diagnosed by longitudinal rows of keeled scutes (osteoderms) along the body. The group splits into two main lineages: Stegosauria, the plated and spiked dinosaurs that dominated the Jurassic, and Ankylosauria, the heavily armoured forms that diversified through the Cretaceous. Both lineages retained the ancestral quadrupedal stance and herbivorous diet. Thyreophorans are among the most recognisable of all dinosaurs due to their distinctive body armour.",
    whyItMatters: "Thyreophoran body armour was a major evolutionary investment in passive defence. Studying these animals reveals how predation pressure can drive extreme anatomical change, and raises questions about the metabolic cost of producing and carrying extensive bony armour.",
    dinodexContext: "DinoDex includes thyreophorans from both main lineages: Huayangosaurus represents early Stegosauria, while Borealopelta and Gastonia represent Nodosauridae within Ankylosauria. These species span the full temporal and morphological range of the group.",
    exampleUsage: "Stegosaurus and Ankylosaurus are both thyreophorans, despite their very different appearances — one has back plates, the other a full body shield.",
    examples: ["Stegosaurus stenops (stegosaur)", "Ankylosaurus magniventris (ankylosaur)", "Borealopelta markmitchelli (nodosaurid)", "Scutellosaurus (early thyreophoran)"],
    exampleSpeciesIds: ["borealopelta", "gastonia", "huayangosaurus"],
    relatedTerms: ["Ornithischian", "Stegosaur", "Ankylosaur", "Osteoderm"],
    keywords: ["armour", "shield", "osteoderms", "ornithischian", "stegosauria", "ankylosauria", "Jurassic", "Cretaceous"],
    sourceNotes: "Standard clade. Diagnosis follows Sereno (1999) and subsequent revisions."
  },

  {
    id: "ankylosaur",
    term: "Ankylosaur",
    category: "Classification",
    difficulty: "core",
    aliases: ["Ankylosauria", "ankylosaurs", "armoured dinosaur"],
    simpleDefinition: "Heavily armoured ornithischian dinosaurs covered in bony plates fused into a defensive shield, with broad low bodies and — in one family — a bony tail club.",
    scientificExplanation: "Ankylosauria is a major thyreophoran clade that diversified from the Middle Jurassic through to the end of the Cretaceous. The group is characterised by extensive osteoderms fused together and to the underlying skin, forming an effectively rigid carapace over the back. It splits into two families: Nodosauridae, which lack a tail club and often bear prominent lateral spines, and Ankylosauridae, which possess a bony tail club formed from fused caudal vertebrae. Ankylosaurs were low-browsing herbivores; their skull shape and tooth morphology suggest a diet of relatively soft vegetation at ground level.",
    whyItMatters: "Ankylosaurs represent one of the most extreme examples of passive defensive armour in tetrapod history. The exceptional preservation of some specimens — most notably Borealopelta — provides direct evidence of skin texture, colour, and stomach contents that would otherwise be entirely unknown from fossils.",
    dinodexContext: "Borealopelta markmitchelli is the most extraordinary ankylosaur specimen in DinoDex: preserved in three dimensions with skin, osteoderms, and stomach contents intact. Gastonia burgei shows the prominent lateral spines characteristic of nodosaurids.",
    exampleUsage: "The discovery that Borealopelta had a countershaded reddish-brown coat — despite its armour — suggests that even heavily defended animals could benefit from camouflage against the predators of their day.",
    examples: ["Borealopelta markmitchelli (nodosaurid)", "Gastonia burgei (nodosaurid)", "Ankylosaurus magniventris (ankylosaurid)", "Edmontonia longiceps (nodosaurid)"],
    exampleSpeciesIds: ["borealopelta", "gastonia"],
    relatedTerms: ["Thyreophora", "Nodosaurid", "Osteoderm", "Ornithischian"],
    keywords: ["armour", "osteoderms", "tail club", "nodosauridae", "ankylosauridae", "Cretaceous", "herbivore", "passive defence"],
    sourceNotes: "Standard clade. Classification of specific taxa (particularly polacanthines) continues to be revised."
  },

  {
    id: "nodosaurid",
    term: "Nodosaurid",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Nodosauridae", "nodosaurids"],
    simpleDefinition: "A family of ankylosaurs that lack the bony tail club of their ankylosaurid relatives, and are often distinguished by prominent lateral spines projecting from the flanks and shoulders.",
    scientificExplanation: "Nodosauridae is one of the two main families within Ankylosauria. Unlike ankylosaurids, nodosaurids do not develop a tail club. They are characterised instead by a narrower skull (compared with the broad, rounded skull of ankylosaurids), and many species bear prominent parascapular spines (large spines projecting over the shoulders) and lateral spines along the flanks. Nodosaurids first appear in the Early Jurassic and persist to the end of the Cretaceous; they have a near-global distribution. Some species — particularly Borealopelta — are known from extraordinarily complete and well-preserved specimens.",
    whyItMatters: "The lack of a tail club distinguishes nodosaurids from their ankylosaurid relatives, raising questions about whether the tail club evolved once or was lost. Nodosaurids nonetheless had highly effective passive armour; Borealopelta demonstrates that even without an active weapon, a heavily armoured dinosaur could be a challenging target.",
    dinodexContext: "Both ankylosaur entries in DinoDex — Borealopelta and Gastonia — are nodosaurids. Borealopelta in particular is one of the best-preserved large dinosaurs ever found, with soft tissue preservation that revealed skin colour and texture.",
    exampleUsage: "Despite lacking the tail club of ankylosaurids, nodosaurids like Borealopelta were not passive prey — their shoulder spines and body armour made them formidable in their own right.",
    examples: ["Borealopelta markmitchelli (Alberta, Early Cretaceous)", "Gastonia burgei (Utah, Early Cretaceous)", "Edmontonia longiceps (Alberta, Late Cretaceous)", "Polacanthus foxii (England, Early Cretaceous)"],
    exampleSpeciesIds: ["borealopelta", "gastonia"],
    relatedTerms: ["Ankylosaur", "Thyreophora", "Osteoderm"],
    keywords: ["nodosauridae", "no tail club", "shoulder spines", "parascapular", "armour", "ankylosauria", "Cretaceous"],
    sourceNotes: "Standard family-level classification. Placement of Polacanthinae (including Gastonia) within Nodosauridae vs as a separate family is not fully resolved."
  },

  {
    id: "stegosaur",
    term: "Stegosaur",
    category: "Classification",
    difficulty: "core",
    aliases: ["Stegosauria", "stegosaurs", "plated dinosaur"],
    simpleDefinition: "Ornithischian dinosaurs characterised by rows of bony plates or spines along the back, and (in most species) a cluster of tail spikes used for active defence.",
    scientificExplanation: "Stegosauria is a thyreophoran clade that first appears in the Middle Jurassic and disappeared by the Early Cretaceous. The group is characterised by alternating or paired rows of dermal plates and spines along the dorsal midline, and a thagomizer — a cluster of paired lateral spikes at the tail tip used in defence. Stegosaur plates vary from tall triangular structures (as in Stegosaurus) to shorter paired spines (as in Kentrosaurus); their function — thermoregulation, display, or species recognition — remains actively debated. Huayangosaurus tuojiangensis from China is one of the earliest and most basal stegosaurs known, retaining features absent in later, more derived forms.",
    whyItMatters: "Stegosaurs are one of the most recognisable dinosaur groups, yet fundamental questions about their anatomy remain open — what the plates were for, and whether the hindlimbs were held more erect than the forelimbs, affecting posture and locomotion.",
    dinodexContext: "Huayangosaurus in DinoDex is an early stegosaur from the Middle Jurassic of China that preserves features linking stegosaurs to their thyreophoran relatives. Its inclusion shows the group at a less derived stage than the famous Jurassic Morrison Formation stegosaurs.",
    exampleUsage: "The famous Stegosaurus from the Morrison Formation had back plates so distinctive that they made it recognisable worldwide — yet we still do not know what those plates were primarily used for.",
    examples: ["Stegosaurus stenops (Morrison Formation, USA)", "Huayangosaurus taibaii (China, Middle Jurassic)", "Kentrosaurus aethiopicus (Tanzania, Late Jurassic)", "Dacentrurus armatus (Europe, Late Jurassic)"],
    exampleSpeciesIds: ["huayangosaurus"],
    relatedTerms: ["Thyreophora", "Ankylosaur", "Display structure", "Osteoderm"],
    keywords: ["plates", "spines", "thagomizer", "dermal", "Jurassic", "defence", "thermoregulation", "display"],
    sourceNotes: "Standard clade. Maidment et al. (2008) and Raven & Maidment (2017) provide recent phylogenetic analyses."
  },

  {
    id: "ornithopod",
    term: "Ornithopod",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Ornithopoda", "ornithopods", "bird-footed dinosaur"],
    simpleDefinition: "A large and varied group of herbivorous ornithischian dinosaurs, ranging from small, fast-running forms in the Jurassic to large duck-billed hadrosaurs in the Cretaceous.",
    scientificExplanation: "Ornithopoda is an ornithischian clade that first appears in the Early Jurassic and persists to the K-Pg boundary. The group ranges from small, bipedal forms such as Hypsilophodon (around 2 metres) to large hadrosaurs exceeding 10 metres. Ornithopods are distinguished by a predentary bone at the tip of the lower jaw, cheek teeth arranged in dental batteries in derived forms, and — in many species — a facultatively bipedal to quadrupedal locomotor mode. The group includes Iguanodontia (large forms including hadrosaurs) and smaller basal ornithopods. Ornithopods became the dominant large terrestrial herbivores of the Cretaceous in many faunas.",
    whyItMatters: "Ornithopods are important for understanding how herbivory evolved in dinosaurs: the development of dental batteries, cheek pouches, and complex chewing motions made ornithopods among the most efficient plant processors of the Mesozoic.",
    dinodexContext: "DinoDex ornithopods include Camptosaurus and Ouranosaurus (Iguanodontia), Tenontosaurus (a basal iguanodontian), and Hypsilophodon (a small basal ornithopod). These span the group's size range and temporal extent.",
    exampleUsage: "Hypsilophodon was a small, lightweight ornithopod built for speed — very different from the multi-tonne hadrosaurs that are its distant cousins within the same clade.",
    examples: ["Hypsilophodon foxii (small basal ornithopod, Wealden)", "Iguanodon bernissartensis (large iguanodontian)", "Edmontosaurus regalis (hadrosaur)", "Camptosaurus dispar (Morrison Formation)"],
    exampleSpeciesIds: ["hypsilophodon", "camptosaurus", "ouranosaurus", "tenontosaurus"],
    relatedTerms: ["Ornithischian", "Hadrosauroid", "Iguanodontian", "Dental battery"],
    keywords: ["bird-footed", "Cretaceous", "herbivore", "bipedal", "quadrupedal", "hadrosaur", "iguanodont", "chewing"],
    sourceNotes: "Standard clade. Relationships between basal ornithopods have been substantially revised in recent phylogenetic work."
  },

  {
    id: "iguanodontian",
    term: "Iguanodontian",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Iguanodontia", "iguanodontians"],
    simpleDefinition: "A major branch of the ornithopod family tree that includes Iguanodon and its relatives — effectively all the large ornithopods and the duck-billed hadrosaurs.",
    scientificExplanation: "Iguanodontia is an ornithopod clade diagnosed by several dental and forelimb features, including the loss of the first finger (thumb spike present in some members as a modified vestigial digit) and a modified wrist anatomy that allows weight-bearing on all fours. It includes Camptosaurus and close relatives at the base, larger forms such as Iguanodon and Ouranosaurus in the middle of the tree, and hadrosauroids (including hadrosaurs) at the derived end. The group spans the Jurassic-Cretaceous boundary and achieved a near-global distribution by the Late Cretaceous.",
    whyItMatters: "Iguanodontia tracks the gradual evolution of increasingly effective herbivorous dentition — from simple teeth through to the complex dental batteries of hadrosaurs. Studying the group shows how a dietary niche can drive major anatomical transformation over time.",
    dinodexContext: "Camptosaurus represents a basal iguanodontian from the Jurassic; Ouranosaurus (known for its sail or hump) is a more derived form sitting close to the origin of hadrosaurs. Tenontosaurus is a somewhat more basal iguanodontian placed differently in different analyses.",
    exampleUsage: "Iguanodon was one of the first dinosaurs scientifically described, and its thumb spike — originally reconstructed as a nasal horn — is now understood as a defensive or foraging tool.",
    examples: ["Camptosaurus dispar (basal iguanodontian, Morrison Formation)", "Iguanodon bernissartensis (derived iguanodontian, Wealden)", "Ouranosaurus nigeriensis (Africa, Early Cretaceous)", "Edmontosaurus regalis (derived hadrosaurid)"],
    exampleSpeciesIds: ["camptosaurus", "ouranosaurus"],
    relatedTerms: ["Ornithopod", "Hadrosauroid", "Dental battery"],
    keywords: ["Iguanodon", "ornithopod", "large herbivore", "thumb spike", "Cretaceous", "hadrosaur precursor"],
    sourceNotes: "Standard clade. Internal phylogeny has been substantially revised; Tenontosaurus placement varies between studies."
  },

  {
    id: "hadrosauroid",
    term: "Hadrosauroid",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Hadrosauroidea", "hadrosauroids", "duck-billed dinosaur relatives"],
    simpleDefinition: "The broader group that includes the classic duck-billed hadrosaurs and their closest relatives — a slightly wider circle than Hadrosauridae alone.",
    scientificExplanation: "Hadrosauroidea is a clade within Iguanodontia that encompasses Hadrosauridae (the true hadrosaurs) plus a number of closely related taxa that fall just outside the core family. The distinction matters because some animals — such as Ouranosaurus from Niger — share many features with hadrosaurs but do not sit inside Hadrosauridae proper in most analyses. Hadrosauroids are characterised by an expanded and complex dental battery, a broad predentary, and modifications to the forelimb consistent with facultative quadrupedality. The group achieved enormous diversity and abundance in the Late Cretaceous.",
    whyItMatters: "The hadrosauroid–hadrosaur boundary shows how classification works in practice: drawing the family line depends on which characters are weighted, and what looks like a hadrosaur may technically be something slightly more basal. This is a recurring pattern in palaeontological taxonomy.",
    dinodexContext: "Ouranosaurus nigeriensis in DinoDex is a hadrosauroid from the Early Cretaceous of Niger that sits close to but outside the hadrosaur family proper — it predates the radiation of classic hadrosaurs and shows what the group looked like before its Late Cretaceous peak.",
    exampleUsage: "Ouranosaurus is a hadrosauroid but not a true hadrosaur: close enough to share the characteristic dental battery and body plan, but with features that place it just outside the core hadrosaur family.",
    examples: ["Ouranosaurus nigeriensis (Africa, Early Cretaceous)", "Iguanacolossus fortis (Utah, Early Cretaceous)", "Edmontosaurus regalis (classic hadrosaur)", "Parasaurolophus walkeri (classic hadrosaur)"],
    exampleSpeciesIds: ["ouranosaurus"],
    relatedTerms: ["Ornithopod", "Iguanodontian", "Dental battery"],
    keywords: ["hadrosaur", "duck-billed", "dental battery", "Cretaceous", "herbivore", "ornithopod"],
    sourceNotes: "Standard grouping. The exact composition of Hadrosauroidea vs Hadrosauridae depends on the phylogenetic analysis used."
  },

  {
    id: "ceratopsid",
    term: "Ceratopsid",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Ceratopsidae", "ceratopsids", "large horned dinosaur"],
    simpleDefinition: "The family of large, fully quadrupedal horned dinosaurs — the group that includes Triceratops, Centrosaurus, and their relatives, but not the smaller, more basal ceratopsians.",
    scientificExplanation: "Ceratopsidae is a family within Ceratopsia restricted to large, quadrupedal, elaborately ornamented forms from the Late Cretaceous of North America and Asia. The family is divided into two subfamilies: Chasmosaurinae, characterised by long frills with large openings (fenestrae), and Centrosaurinae, which typically have shorter frills with more elaborate nasal ornamentation. Ceratopsids are distinguished from more basal ceratopsians (such as Psittacosaurus and Protoceratops) by their larger body size, complex frill development, and the elaboration of both nasal and brow horns. The family underwent rapid diversification in the Late Cretaceous and produced one of the most species-rich large herbivore radiations known.",
    whyItMatters: "Ceratopsids illustrate rapid evolutionary diversification: dozens of species with dramatically different frill and horn configurations evolved within a geologically brief window. Whether this variety primarily reflects species recognition, mate choice, or ecological partitioning is an active area of debate.",
    dinodexContext: "Triceratops, Centrosaurus, and Kosmoceratops in DinoDex are all ceratopsids. Comparing their frills and horns directly illustrates the diversity within the family and the rapid ornamental evolution that defines it.",
    exampleUsage: "Kosmoceratops is considered one of the most elaborately ornamented ceratopsids ever found, with fifteen distinct horn-like projections on its skull and frill.",
    examples: ["Triceratops horridus (chasmosaurine)", "Centrosaurus apertus (centrosaurine)", "Kosmoceratops richardsoni (chasmosaurine)", "Styracosaurus albertensis (centrosaurine)"],
    exampleSpeciesIds: ["triceratops", "centrosaurus", "kosmoceratops"],
    relatedTerms: ["Ceratopsian", "Frill", "Display structure", "Ornithischian"],
    keywords: ["Ceratopsidae", "chasmosaurine", "centrosaurine", "frill", "horns", "North America", "Cretaceous", "quadrupedal"],
    sourceNotes: "Standard family. Note that the broader term 'ceratopsian' in DinoDex covers the whole Ceratopsia including more basal forms. Sampson et al. and Chinnery (2004) provide key systematic references."
  },

  {
    id: "allosauroid",
    term: "Allosauroid",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Allosauroidea", "allosauroids"],
    simpleDefinition: "A clade of large carnivorous theropods that dominated as apex predators during the Jurassic and into the Cretaceous, including Allosaurus and the giant carcharodontosaurids.",
    scientificExplanation: "Allosauroidea is a theropod clade within Tetanurae that includes Allosaurus and its closer relatives, the Sinraptoridae, and the giant Carcharodontosauridae. Allosauroids are characterised by various skull and axial features and are typically large predators with three-fingered hands. They were the dominant large theropods of the Jurassic globally and persisted into the Cretaceous in South America and Africa via the carcharodontosaurid lineage. In Laurasia, allosauroids were largely replaced by tyrannosaurs during the Cretaceous; in Gondwana, carcharodontosaurids held the apex predator role until nearer the end of the period.",
    whyItMatters: "Allosauroids and tyrannosaurs represent two separate solutions to the large apex predator niche that evolved independently in different parts of the world. Comparing them illustrates how similar ecological pressures can produce convergent anatomical results in unrelated lineages.",
    dinodexContext: "DinoDex includes several allosauroids from the new entries: Carcharodontosaurus, Mapusaurus, Concavenator, and Acrocanthosaurus. These span the temporal and geographic breadth of the family.",
    exampleUsage: "While tyrannosaurs dominated the apex predator role in Late Cretaceous Laurasia, carcharodontosaurid allosauroids filled the same role in Gondwana until near the end of the Cretaceous.",
    examples: ["Allosaurus fragilis (Morrison Formation, Late Jurassic)", "Carcharodontosaurus saharicus (Africa, Cretaceous)", "Mapusaurus roseae (South America, Cretaceous)", "Concavenator corcovatus (Spain, Early Cretaceous)"],
    exampleSpeciesIds: ["carcharodontosaurus", "mapusaurus", "concavenator", "acrocanthosaurus"],
    relatedTerms: ["Theropod", "Carcharodontosaurid", "Clade"],
    keywords: ["Allosaurus", "large predator", "Jurassic", "Cretaceous", "Gondwana", "Laurasia", "apex predator", "tetanurae"],
    sourceNotes: "Standard clade. Internal relationships have been revised substantially; sinraptorids are sometimes placed outside Allosauroidea proper."
  },

  {
    id: "carcharodontosaurid",
    term: "Carcharodontosaurid",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Carcharodontosauridae", "carcharodontosaurids", "shark-toothed theropod"],
    simpleDefinition: "A family of giant allosauroid theropods named for their shark-like serrated teeth, predominantly from Gondwana, that rival and in some cases exceed tyrannosaurs in size.",
    scientificExplanation: "Carcharodontosauridae is a family within Allosauroidea comprising some of the largest terrestrial predators known, including Giganotosaurus carolinii, Carcharodontosaurus saharicus, and Mapusaurus roseae from South America and Africa. The family is diagnosed by a distinctive skull morphology, including flattened, laterally compressed teeth with coarse serrations resembling those of a great white shark — giving the group its name. Most carcharodontosaurids are from Gondwana, though Acrocanthosaurus atokensis (North America) and Concavenator corcovatus (Spain) show the group had a wider distribution. They were the apex predators of many Gondwanan ecosystems before the end of the Cretaceous.",
    whyItMatters: "Carcharodontosaurids challenge the popular notion that Tyrannosaurus rex was the undisputed largest predatory dinosaur. Giganotosaurus in particular may have equalled or exceeded T. rex in body length, making this a genuinely contested question rather than settled fact.",
    dinodexContext: "DinoDex includes Carcharodontosaurus saharicus and Mapusaurus roseae from Africa and South America respectively, as well as Acrocanthosaurus (North America) and Concavenator (Spain). Together they show the geographic range of a family most commonly associated with southern continents.",
    exampleUsage: "Carcharodontosaurus saharicus, described by Paul Sereno's team in 1996, was the first large Gondwanan theropod to receive detailed attention, revealing that Africa had its own lineage of giant predators quite separate from the tyrannosaurs of the north.",
    examples: ["Carcharodontosaurus saharicus (North Africa)", "Giganotosaurus carolinii (South America)", "Mapusaurus roseae (South America)", "Acrocanthosaurus atokensis (North America)"],
    exampleSpeciesIds: ["carcharodontosaurus", "mapusaurus", "acrocanthosaurus", "concavenator"],
    relatedTerms: ["Allosauroid", "Theropod", "Gondwana"],
    keywords: ["giant predator", "shark teeth", "Gondwana", "South America", "Africa", "Cretaceous", "apex predator", "allosauroid"],
    sourceNotes: "Standard family. Sereno et al. (1996) and Coria & Currie (2006) are key references. Body size comparisons with tyrannosaurs depend on incomplete material and should be treated cautiously."
  },

  {
    id: "abelisaurid",
    term: "Abelisaurid",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Abelisauridae", "abelisaurids"],
    simpleDefinition: "A family of Gondwanan theropods best known for their extremely reduced, vestigial forelimbs — even more reduced than those of tyrannosaurs — and heavily ornamented, rugose skulls.",
    scientificExplanation: "Abelisauridae is a family within Ceratosauria (an early-branching theropod lineage) that diversified across Gondwana through the Cretaceous. They are characterised by a very short, deep, heavily ornamented skull with rugose (rough, pitted) bone texture on the outer surface, and forelimbs so reduced as to have virtually no function. The hindlimbs and body were robust, and locomotion relied entirely on the legs and jaws. Notable members include Carnotaurus sastrei (South America), Majungasaurus crenatissimus (Madagascar), and Rajasaurus narmadensis (India). Abelisaurids occupied the apex predator niche across much of Gondwana in the Cretaceous, filling a role equivalent to tyrannosaurs in the northern hemisphere.",
    whyItMatters: "Abelisaurid forelimbs are the most extreme case of limb reduction known in large theropods — even more vestigial than those of tyrannosaurs. Understanding why this happened (and whether it happened once or multiple times) is an active question in theropod evolution.",
    dinodexContext: "Abelisaurus comahuiensis (the founding member of the family, known only from a skull) and Rajasaurus narmadensis (India) are the two abelisaurid entries in DinoDex, showing the family's Gondwanan distribution across South America and India.",
    exampleUsage: "Rajasaurus was discovered in India — then still in the process of separating from the rest of Gondwana — and its classification as an abelisaurid confirms that the family ranged across the fragmenting southern supercontinent before it fully broke apart.",
    examples: ["Abelisaurus comahuiensis (Argentina, Late Cretaceous)", "Rajasaurus narmadensis (India, Late Cretaceous)", "Carnotaurus sastrei (Argentina, Late Cretaceous)", "Majungasaurus crenatissimus (Madagascar, Late Cretaceous)"],
    exampleSpeciesIds: ["abelisaurus", "rajasaurus"],
    relatedTerms: ["Theropod", "Gondwana", "Clade", "Ceratopsian"],
    keywords: ["Gondwana", "Cretaceous", "reduced forelimbs", "rugose skull", "South America", "India", "Africa", "ceratosauria"],
    sourceNotes: "Standard family. Bonaparte & Novas (1985) described Abelisaurus; the family has been substantially revised since."
  },

  {
    id: "spinosaurid",
    term: "Spinosaurid",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Spinosauridae", "spinosaurids", "fish-eating theropod"],
    simpleDefinition: "A family of large theropods with elongated, crocodile-like skulls and conical (rather than blade-like) teeth, adapted for catching fish — the most aquatically oriented of all non-avian dinosaurs.",
    scientificExplanation: "Spinosauridae is a theropod family within Megalosauroidea characterised by an elongated, low snout bearing conical, interlocking teeth suited for gripping slippery prey such as fish. The neural spines of the back are elongated in most members, sometimes forming a tall sail (as in Spinosaurus and Ouranosaurus, though the latter is an ornithopod — dorsal sails evolved in several unrelated groups). The family includes Spinosaurus aegyptiacus, Baryonyx walkeri, Suchomimus tenerensis, Irritator challengeri, and Ichthyovenator laosensis, among others. Spinosaurids had a Gondwanan-dominated distribution but reached into Europe and Asia.",
    whyItMatters: "Spinosaurus has become the most contentious non-avian dinosaur of the past decade: evidence that it was at least semi-aquatic (short legs, dense bones, tail fin) overturned the previous reconstructions and continues to be debated. The group shows that the 'terrestrial predator' template was not universal for large theropods.",
    dinodexContext: "Suchomimus tenerensis from DinoDex is a spinosaurid from the Early Cretaceous of Niger, showing the family in a slightly earlier and arguably less aquatically specialised state than the later Spinosaurus. Spinosaurus itself is also in DinoDex, as one of the most debated species on the site.",
    exampleUsage: "The discovery of Spinosaurus's short legs and dense bone structure suggested a paddling, semi-aquatic lifestyle — a reconstruction supported by subsequent isotopic analysis but still debated on biomechanical grounds.",
    examples: ["Spinosaurus aegyptiacus (North Africa)", "Baryonyx walkeri (England, Wealden)", "Suchomimus tenerensis (Niger, Early Cretaceous)", "Irritator challengeri (Brazil)"],
    exampleSpeciesIds: ["suchomimus"],
    relatedTerms: ["Theropod", "Wealden", "Aquatic"],
    keywords: ["fish-eating", "crocodile skull", "conical teeth", "Spinosaurus", "semi-aquatic", "Cretaceous", "large predator"],
    sourceNotes: "Standard family. Spinosaurus reconstruction is actively contested; Ibrahim et al. (2014, 2020) proposed the semi-aquatic hypothesis; subsequent debate ongoing."
  },

  {
    id: "tyrannosaurid",
    term: "Tyrannosaurid",
    category: "Classification",
    difficulty: "core",
    aliases: ["Tyrannosauridae", "tyrannosaurids", "tyrannosaur"],
    simpleDefinition: "The family of large coelurosaur theropods that includes Tyrannosaurus rex and its closest relatives — characterised by enormous skulls, two-fingered hands, and binocular vision.",
    scientificExplanation: "Tyrannosauridae is a family within the broader Tyrannosauroidea, a coelurosaur lineage that includes some of the largest terrestrial predators of the Late Cretaceous. Key features include a proportionally very large skull with robust, banana-shaped teeth adapted for crushing bone, highly reduced forelimbs bearing only two functional fingers, forward-facing eyes providing binocular depth perception, and a large brain relative to body size. The family is predominantly Late Cretaceous and Laurasian (North America and Asia). Well-known members include Tyrannosaurus rex, Tarbosaurus bataar, Daspletosaurus torosus, Albertosaurus sarcophagus, and Nanuqsaurus hoglundi.",
    whyItMatters: "Tyrannosaurids are among the best-studied of all dinosaur families, and core questions about them remain open: whether T. rex had lips covering its teeth, whether it was an active predator or primarily a scavenger, and how fast it could move. That these questions remain genuinely unresolved after decades of study illustrates the limits of the fossil record.",
    dinodexContext: "Tyrannosaurus rex, Daspletosaurus, and Nanuqsaurus are the tyrannosaurids represented in DinoDex, spanning large, mid-sized, and small members of the family respectively. The contrast between them illustrates the variation within the group.",
    exampleUsage: "Daspletosaurus torosus was an earlier and more robust tyrannosaur than Tyrannosaurus rex, coexisting with Albertosaurus in the same fauna — which raises questions about whether two large tyrannosaurs truly could occupy the same ecological space.",
    examples: ["Tyrannosaurus rex (Hell Creek Formation, latest Cretaceous)", "Daspletosaurus torosus (Dinosaur Park Formation, Alberta)", "Tarbosaurus bataar (Nemegt Formation, Mongolia)", "Albertosaurus sarcophagus (Horseshoe Canyon Formation, Alberta)"],
    exampleSpeciesIds: ["tyrannosaurus", "daspletosaurus"],
    relatedTerms: ["Theropod", "Clade", "Bipedal"],
    keywords: ["T. rex", "tyrannosaur", "Cretaceous", "Laurasia", "apex predator", "two fingers", "large skull", "binocular"],
    sourceNotes: "Standard family. Holtz (2004) provides a comprehensive systematic review. Recent debate on T. rex lip coverage: Larson et al. (2023), with rebuttals ongoing."
  },

  {
    id: "avialan",
    term: "Avialan",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Avialae", "avialans", "bird-line theropod"],
    simpleDefinition: "A member of Avialae — the clade that includes modern birds and all the extinct feathered theropods more closely related to birds than to dromaeosaurids.",
    scientificExplanation: "Avialae is typically defined as the clade anchored on the most recent common ancestor of Archaeopteryx lithographica and modern birds (Neornithes), including all descendants. It sits within Paraves (alongside dromaeosaurids and troodontids) and is more inclusive than modern Aves but more restricted than Maniraptora. Early avialans such as Archaeopteryx and Anchiornis retained a long bony tail; more derived avialans (like Confuciusornis) acquired a pygostyle — a fused tail structure that supports the tail feathers in modern birds. The exact placement of some early forms (whether Archaeopteryx is truly an avialan or a more basal paravian) has been debated in recent analyses.",
    whyItMatters: "Avialae is the lineage within which all the key features of modern birds — flight feathers, pygostyle, keeled sternum — evolved. Tracking these innovations within the clade allows us to reconstruct the step-by-step origin of flight.",
    dinodexContext: "Confuciusornis sanctus in DinoDex is a stem avialan from the Jehol Biota with a pygostyle but lacking several derived features of modern birds. It bridges the gap between Archaeopteryx-grade avialans and the modern bird body plan.",
    exampleUsage: "Confuciusornis was an avialan with a toothless beak and pygostyle, yet it may not have been capable of the powered flight of modern birds — its shoulder anatomy suggests a somewhat different flight style.",
    examples: ["Archaeopteryx lithographica (earliest widely accepted avialan)", "Confuciusornis sanctus (Jehol Biota, China)", "Ichthyornis dispar (Cretaceous seabird)", "Modern Neornithes (living birds)"],
    exampleSpeciesIds: ["confuciusornis"],
    relatedTerms: ["Paravian", "Maniraptoran", "Pygostyle", "Feathers"],
    keywords: ["Avialae", "bird-line", "feathers", "flight", "Archaeopteryx", "pygostyle", "Jehol", "paravian"],
    sourceNotes: "Definition follows Turner et al. (2007) and subsequent analyses. The position of Archaeopteryx has moved in some recent analyses; see Godefroit et al. (2013) for a notable example."
  },

  {
    id: "diplodocoid",
    term: "Diplodocoid",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Diplodocoidea", "diplodocoids"],
    simpleDefinition: "A clade of sauropod dinosaurs characterised by extremely elongated necks, whip-like tails, and peg-shaped teeth suited for raking vegetation rather than chewing it.",
    scientificExplanation: "Diplodocoidea is one of the major sauropod clades within Neosauropoda, alongside Macronaria (which includes brachiosaurids and titanosaurs). It includes Diplodocidae (Diplodocus, Apatosaurus, Brontosaurus), Dicraeosauridae (Amargasaurus, Dicraeosaurus), and Rebbachisauridae. Diplodocoids are diagnosed by a distinctive skull shape (often described as 'horse-like' with peg-shaped, procumbent teeth restricted to the front of the jaws), the 'whiplash' tail formed by rapidly narrowing distal caudal vertebrae, and bifurcated neural spines in many members. They were dominant sauropods in the Jurassic but declined through the Cretaceous as titanosaurs diversified.",
    whyItMatters: "The whip-like tail of diplodocoids has attracted speculation about its use — sonic cracking, defence, or intraspecific combat — none of which can be confirmed from fossil evidence. The group also illustrates how sauropod diversity is far more complex than 'big long-necked dinosaur', with distinct clades having different ecologies and feeding strategies.",
    dinodexContext: "Amargasaurus cazaui in DinoDex is a dicraeosaurid diplodocoid from Argentina, with dramatically elongated and possibly bifurcated neural spines forming a distinctive dorsal structure whose function remains debated.",
    exampleUsage: "Diplodocus and Brachiosaurus are both enormous long-necked sauropods, but they belong to different clades — diplodocoid and macronarian respectively — with different skull shapes, feeding strategies, and body proportions.",
    examples: ["Diplodocus longus (Morrison Formation, USA)", "Apatosaurus ajax (Morrison Formation, USA)", "Amargasaurus cazaui (Argentina, Early Cretaceous)", "Nigersaurus taqueti (Niger, Early Cretaceous)"],
    exampleSpeciesIds: ["amargasaurus", "nigersaurus"],
    relatedTerms: ["Sauropod", "Dicraeosaurid", "Titanosaur"],
    keywords: ["sauropod", "peg teeth", "whip tail", "Jurassic", "Diplodocus", "Apatosaurus", "long neck", "Neosauropoda"],
    sourceNotes: "Standard clade. Whitlock (2011) provides a key phylogenetic analysis. Brontosaurus was resurrected as a valid genus by Tschopp et al. (2015)."
  },

  {
    id: "dicraeosaurid",
    term: "Dicraeosaurid",
    category: "Classification",
    difficulty: "advanced",
    aliases: ["Dicraeosauridae", "dicraeosaurids"],
    simpleDefinition: "A family of diplodocoid sauropods with shorter necks than their relatives and dramatically bifurcated (forked) neural spines along the back.",
    scientificExplanation: "Dicraeosauridae is a small but distinctive family within Diplodocoidea, comprising Dicraeosaurus hansemanni from the Late Jurassic of Tanzania, Amargasaurus cazaui from the Early Cretaceous of Argentina, and Brachytrachelopan mesai from the Late Jurassic of Argentina. The family is characterised by comparatively shorter necks than other diplodocoids and by neural spines on the dorsal and cervical vertebrae that are bifurcated — forked into two prongs — creating a distinctive double-crested profile. In Amargasaurus, these spines are particularly elongated, forming a structure that has been variously interpreted as a fleshy sail, a double row of spines, or a structure for neck stabilisation. The function remains unresolved.",
    whyItMatters: "Dicraeosaurids show that within a group of notoriously long-necked animals, some lineages actually reduced neck length — a reminder that evolution does not trend consistently in one direction. The neural spines of Amargasaurus are among the most extraordinary structures in the sauropod record.",
    dinodexContext: "Amargasaurus cazaui is the dicraeosaurid entry in DinoDex, notable for the extreme bifurcated neural spines on its cervical vertebrae that give the animal its dramatic silhouette. The function of these spines is genuinely unknown.",
    exampleUsage: "Amargasaurus is a dicraeosaurid with elongated bifurcated cervical spines that formed a structure probably unlike anything seen in living animals today — making its function especially difficult to determine.",
    examples: ["Amargasaurus cazaui (Argentina, Early Cretaceous)", "Dicraeosaurus hansemanni (Tanzania, Late Jurassic)", "Brachytrachelopan mesai (Argentina, Late Jurassic)"],
    exampleSpeciesIds: ["amargasaurus"],
    relatedTerms: ["Diplodocoid", "Sauropod", "Display structure"],
    keywords: ["bifurcated spines", "neural spines", "shorter neck", "diplodocoid", "Jurassic", "Cretaceous", "Amargasaurus"],
    sourceNotes: "Small family; membership well established. The function of elongated neural spines in Amargasaurus remains genuinely unresolved. Salgado & Bonaparte (1991) described Amargasaurus."
  },

  {
    id: "titanosaur",
    term: "Titanosaur",
    category: "Classification",
    difficulty: "useful",
    aliases: ["Titanosauria", "titanosaurs", "titanosaurian"],
    simpleDefinition: "The most diverse and long-lived sauropod group, which dominated the Cretaceous worldwide and includes some of the largest land animals ever to have lived.",
    scientificExplanation: "Titanosauria is a sauropod clade within Macronaria that diversified massively through the Cretaceous and achieved a near-global distribution. The group is characterised by a wide-gauge stance (limbs set far apart), a distinctive wide sacrum, procoelous (ball-and-socket) caudal vertebrae, and — uniquely among sauropods — the frequent presence of small bony osteoderms (armour plates) embedded in the skin. Titanosaurs range from small forms (around 6 metres) to giants exceeding 30 metres. Patagotitan mayorum, Argentinosaurus huinculensis, and Dreadnoughtus schrani are among the largest and most studied members. They replaced diplodocoids and brachiosaurids as the dominant sauropods globally through the Cretaceous.",
    whyItMatters: "Titanosaurs raise one of the most persistent questions in palaeontology: just how large could a land animal get? The biomechanical constraints on maximum body size — bone strength, metabolic rate, water requirements — are not fully understood, and the largest titanosaurs push against whatever those limits are.",
    dinodexContext: "Patagotitan mayorum in DinoDex is one of the best-documented giant titanosaurs, described from multiple individuals and currently on display at the American Museum of Natural History. Its inclusion illustrates both the extraordinary size titanosaurs reached and the genuine uncertainty in estimating mass from fossil material.",
    exampleUsage: "Patagotitan belongs to Lognkosauria, a titanosaur subgroup that produced several of the largest known sauropods — all from South America, suggesting something about Patagonian Cretaceous environments favoured extreme size.",
    examples: ["Patagotitan mayorum (Argentina, Cretaceous)", "Saltasaurus loricatus (Argentina, Late Cretaceous)", "Rapetosaurus krausei (Madagascar, Late Cretaceous)", "Nemegtosaurus mongoliensis (Mongolia, Late Cretaceous)"],
    exampleSpeciesIds: ["patagotitan", "nigersaurus"],
    relatedTerms: ["Sauropod", "Diplodocoid", "Gondwana", "Osteoderm"],
    keywords: ["largest", "Cretaceous", "Gondwana", "gigantism", "wide gauge", "osteoderms", "macronaria", "sauropod"],
    sourceNotes: "Standard clade. Mass estimates for the largest titanosaurs vary widely between studies; treat any single figure with caution. Carballido et al. (2017) on Patagotitan is the primary reference."
  },

  /* ── ANATOMY & ECOLOGY ──────────────────────────────────── */
  {
    id: "frill",
    term: "Frill",
    category: "Anatomy & Ecology",
    difficulty: "useful",
    aliases: ["neck frill", "parietal-squamosal frill", "ceratopsian frill"],
    simpleDefinition: "The bony structure extending back from the skull of ceratopsian dinosaurs, formed by elongations of the parietal and squamosal skull bones, varying from solid shields to elaborately fenestrated frames.",
    scientificExplanation: "The ceratopsian frill is formed by the backward expansion of the parietal and squamosal bones of the skull roof. In basal ceratopsians like Protoceratops it is small and solid; in derived ceratopsids it can be large and either solid (as in Styracosaurus) or perforated by one or two large openings called fenestrae (as in Triceratops and most chasmosaurines). The frill is sometimes decorated with additional bony projections (epoccipitals) along its margin. Function is contested: thermoregulation (the frill has a blood supply), display, species recognition, mate attraction, and intraspecific combat have all been proposed. In many species the frill was probably brightly coloured in life.",
    whyItMatters: "Frills are one of the clearest examples of potentially costly display structures in the fossil record. The enormous diversity of frill shapes across ceratopsid species — often within geographically close assemblages — suggests rapid evolution driven by intraspecific selection.",
    dinodexContext: "Triceratops (solid frill with two large fenestrae partially filled with bone), Centrosaurus (shorter frill with elaborate spikes), and Kosmoceratops (a chasmosaurine with fifteen distinct projections on frill and skull) in DinoDex illustrate the range of frill elaboration within a single family.",
    exampleUsage: "The frill of Kosmoceratops richardsoni carries more individually distinct ornamental projections than any other known ceratopsian, making it the most elaborately decorated member of a group already defined by elaboration.",
    examples: ["Triceratops horridus (large solid frill with two partial fenestrae)", "Protoceratops andrewsi (small simple frill)", "Kosmoceratops richardsoni (fifteen projections)", "Pentaceratops sternbergii (very large frill)"],
    exampleSpeciesIds: ["triceratops", "protoceratops", "centrosaurus", "kosmoceratops"],
    relatedTerms: ["Ceratopsian", "Ceratopsid", "Display structure"],
    keywords: ["parietal", "squamosal", "fenestrae", "display", "thermoregulation", "species recognition", "epoccipitals", "bone"],
    sourceNotes: "Standard anatomical term. Farke et al. (2009) on Triceratops and Sampson et al. (2010) on Kosmoceratops are relevant references."
  },

  {
    id: "dental-battery",
    term: "Dental battery",
    category: "Anatomy & Ecology",
    difficulty: "useful",
    aliases: ["tooth battery", "dental column"],
    simpleDefinition: "A specialised arrangement of teeth — found in hadrosaurs and ceratopsids — where hundreds of teeth are stacked in vertical columns, providing a continuously self-replacing grinding or shearing surface.",
    scientificExplanation: "A dental battery is a complex tooth arrangement found in two ornithischian groups: hadrosaurs (duck-billed dinosaurs) and ceratopsids (large horned dinosaurs). In both cases, teeth are not arranged in a single row but in vertical columns of replacement teeth, such that as teeth wear down at the surface, the ones below move up to replace them. In hadrosaurs, the batteries form a complex grinding surface with enamel ridges creating a rough surface for processing tough plant material; in ceratopsids, the batteries create a scissor-like shearing action better suited for slicing vegetation. Hadrosaur dental batteries may contain hundreds of functional and replacement teeth packed into a small volume.",
    whyItMatters: "The dental battery is one of the most sophisticated herbivore dentitions in the entire fossil record. It effectively gives the animal an unlimited supply of fresh teeth throughout its life — a very different solution to tooth wear than the simple replacement seen in most other reptiles.",
    dinodexContext: "Several DinoDex species have dental batteries — Ouranosaurus is a hadrosauroid close to the development of true hadrosaur dental batteries, and Centrosaurus is a ceratopsid with the shearing battery characteristic of that group.",
    exampleUsage: "A hadrosaur dental battery contains up to about 1,400 teeth at various stages of development — a complex and continuously self-renewing structure that has no direct equivalent in any living reptile.",
    examples: ["Edmontosaurus (hadrosaur grinding battery)", "Triceratops (ceratopsid shearing battery)", "Parasaurolophus (hadrosaur grinding battery)", "Centrosaurus (ceratopsid shearing battery)"],
    exampleSpeciesIds: ["centrosaurus", "ouranosaurus"],
    relatedTerms: ["Hadrosauroid", "Ceratopsid", "Ornithopod"],
    keywords: ["teeth", "grinding", "shearing", "replacement", "herbivore", "hadrosaur", "ceratopsid", "self-replacing"],
    sourceNotes: "Standard anatomical concept. Erickson et al. (2012) provide a detailed analysis of hadrosaur dental batteries."
  },

  {
    id: "osteoderm",
    term: "Osteoderm",
    category: "Anatomy & Ecology",
    difficulty: "useful",
    aliases: ["dermal bone", "skin bone", "scute"],
    simpleDefinition: "A bone that develops within the skin rather than as part of the underlying skeleton — found in the armour of ankylosaurs, the back scales of some sauropods, and many living reptiles.",
    scientificExplanation: "Osteoderms are bones that form directly within the dermis (skin) through intramembranous ossification, as opposed to the endochondral (cartilage-template) ossification of most skeletal bones. They are therefore structurally separate from the underlying skeleton, though they may become fused to surface bone in some taxa. In ankylosaurs, extensive osteoderms fused together and to the underlying skin to form a rigid carapace. In some titanosaur sauropods, scattered osteoderms are embedded in the skin without forming a continuous armour. In living animals, osteoderms are found in crocodilians, many lizards (including Gila monsters and monitors), and some snakes. They represent an independent defensive investment that evolved many times across tetrapods.",
    whyItMatters: "Osteoderms illustrate how bone can form in locations other than the main skeleton. Their independent evolution in multiple lineages demonstrates that keratinised skin can be upgraded to bone-reinforced armour in many different ways.",
    dinodexContext: "Borealopelta markmitchelli is the outstanding DinoDex example: not only did its osteoderms survive fossilisation in three dimensions with keratin sheaths intact, but their arrangement confirms the animal's armour pattern in detail that is normally impossible to recover.",
    exampleUsage: "The osteoderms of Borealopelta were preserved in life position with their keratin sheaths still attached — an extraordinary level of preservation that reveals the exact arrangement of armour plates as they were in life.",
    examples: ["Ankylosaur dermal carapace", "Titanosaur scattered skin ossicles (e.g. Saltasaurus)", "Crocodilian dorsal scutes", "Stegosaur plates (partly dermal)"],
    exampleSpeciesIds: ["borealopelta", "gastonia"],
    relatedTerms: ["Ankylosaur", "Thyreophora", "Nodosaurid", "Preservation"],
    keywords: ["dermal bone", "skin", "armour", "scute", "intramembranous", "crocodilian", "ankylosaur", "titanosaur"],
    sourceNotes: "Standard anatomical term. Brown et al. (2017) on Borealopelta preservation is the key reference for DinoDex context."
  },

  {
    id: "pneumatisation",
    term: "Pneumatisation",
    category: "Anatomy & Ecology",
    difficulty: "useful",
    aliases: ["pneumatization", "skeletal pneumatisation", "air-filled bones"],
    simpleDefinition: "The process by which bones become hollowed out and invaded by extensions of the respiratory air sac system — reducing skeletal mass while the air sacs simultaneously improve respiratory efficiency.",
    scientificExplanation: "Pneumatisation (or pneumaticity — the state of being pneumatised) occurs when diverticula (outgrowths) from the respiratory air sac system invade and hollow out bones, replacing marrow with air. This is linked to the avian-style flow-through respiratory system, in which air sacs surrounding the lungs allow nearly continuous gas exchange in both inspiration and expiration. In living birds, the skeleton is extensively pneumatised; in non-avian dinosaurs, pneumatisation was widespread in sauropods and theropods. Pneumatised vertebrae are characterised by internal cavities (camerae) and surface openings (foramina) that show where air sacs entered the bone. In giant sauropods, pneumatisation was so extensive it may have reduced total skeletal mass by 50% or more, which was critical for achieving such large body sizes.",
    whyItMatters: "Pneumatisation connects skeletal anatomy to respiratory physiology in a way that reveals deeply conserved features linking non-avian dinosaurs to modern birds. It also solves the apparent paradox of how sauropods could support such massive body weights — their bones were far lighter than solid bone of the same dimensions would be.",
    dinodexContext: "Several DinoDex species show evidence of pneumatisation in their vertebrae — most obviously large sauropods like Patagotitan and large theropods like Carcharodontosaurus. The term is closely related to 'pneumaticity' (the property of having pneumatised bones).",
    exampleUsage: "Patagotitan's vertebrae show extensive pneumatisation — the interior is a network of thin bony struts and air-filled cavities, making them far lighter than solid bone of equivalent dimensions.",
    examples: ["Sauropod vertebral camerae and foramina", "Theropod postcranial pneumatisation", "Avian pneumatised long bones", "Air sac diverticula in bird anatomy"],
    exampleSpeciesIds: ["patagotitan"],
    relatedTerms: ["Sauropod", "Theropod", "Titanosaur"],
    keywords: ["air sacs", "hollow bones", "respiratory", "lightweight", "vertebrae", "camerae", "foramina", "sauropod"],
    sourceNotes: "Note: 'pneumaticity' (the property) and 'pneumatisation' (the process) are sometimes used interchangeably. Both are standard anatomical concepts. O'Connor & Claessens (2005) is a key reference for theropod pneumatisation."
  },

  {
    id: "pygostyle",
    term: "Pygostyle",
    category: "Anatomy & Ecology",
    difficulty: "advanced",
    aliases: ["fused tail vertebrae", "tail fan support"],
    simpleDefinition: "A fused structure at the end of the tail in modern birds and some early avialans, formed from several caudal vertebrae fused together, which supports the tail feathers used in flight and display.",
    scientificExplanation: "The pygostyle is a derived feature within Avialae: it represents the fused terminal caudal vertebrae that, in modern birds, anchor the large retrix feathers (tail fan) used in flight control and display. Its presence marks a key transition in avialan evolution — from the long, bony, lizard-like tail of Archaeopteryx and non-avian maniraptors, to the shortened, fused tail of modern birds. Confuciusornis sanctus (Early Cretaceous, China) is one of the earliest avialans known to have a pygostyle, yet it also retained a somewhat different shoulder and thoracic anatomy from modern birds. The development of the pygostyle was probably associated with the acquisition of the tail fan and improved flight manoeuvrability.",
    whyItMatters: "The pygostyle marks a key step in the transition from non-avian dinosaur to modern bird. Its presence in Confuciusornis — but absence in Archaeopteryx — helps calibrate when different features of the modern bird body plan appeared in evolutionary sequence.",
    dinodexContext: "Confuciusornis in DinoDex is one of the earliest avialans known to possess a pygostyle. Its inclusion alongside species like Wulong — which retains the ancestral long bony tail — makes the evolutionary transition to the modern bird tail structure visible across DinoDex entries.",
    exampleUsage: "The presence of a pygostyle in Confuciusornis but not in Archaeopteryx indicates that the derived short-tailed bird body plan had already appeared by the Early Cretaceous, even though Confuciusornis may not have been capable of the same flight style as modern birds.",
    examples: ["Confuciusornis sanctus (pygostyle present, Early Cretaceous)", "Archaeopteryx lithographica (long bony tail, Late Jurassic)", "Modern Aves (all possess pygostyle)", "Sapeornis chaoyangensis (pygostyle present, Early Cretaceous)"],
    exampleSpeciesIds: ["confuciusornis"],
    relatedTerms: ["Avialan", "Feathers", "Paravian", "Maniraptoran"],
    keywords: ["tail", "fused vertebrae", "caudal", "tail fan", "rectrix", "flight", "Cretaceous", "bird evolution"],
    sourceNotes: "Standard anatomical term. Chiappe (2007) provides a comprehensive overview of early avialan tail evolution."
  },

  {
    id: "feathers",
    term: "Feathers",
    category: "Anatomy & Ecology",
    difficulty: "useful",
    aliases: ["proto-feathers", "filamentous integument", "pennaceous feathers", "dinofuzz"],
    simpleDefinition: "Filamentous to complex branched structures growing from the skin, preserved in some exceptional dinosaur fossils — ranging from simple hair-like filaments in some theropods to fully pennaceous flight feathers in avialans.",
    scientificExplanation: "Feathers in non-avian dinosaurs are known from fossil evidence that has accumulated primarily since the 1990s, mostly from the fine-grained sediments of the Jehol Biota in China. The structures range from simple single unbranched filaments ('dinofuzz', as in Sinosauropteryx), to more complex branched filaments, to fully pennaceous (vaned, with a central rachis and interlocking barbules) feathers in more derived theropods and early birds. Whether these structures are directly homologous to avian feathers or represent a range of integumentary innovations is debated; most analyses support at least a common developmental origin. Feathers are now known or inferred from multiple theropod lineages, and possible filamentous structures have also been reported in ornithischians (e.g. Psittacosaurus tail bristles, Kulindadromeus). The primary functions likely shifted: insulation in early forms, then display, then flight in avialans.",
    whyItMatters: "The discovery that feathers were widespread in non-avian dinosaurs overturned the popular image of scaly-skinned dinosaurs and confirmed the long-debated dinosaurian origin of birds. It also raises the possibility that many classic dinosaurs had at least some feathery covering — a question that direct fossil evidence can answer in only a few exceptional cases.",
    dinodexContext: "DinoDex includes several species with direct feather evidence: Yutyrannus huali (simple filaments preserved in a large tyrannosauroid), Wulong bohaiensis (pennaceous feathers), Confuciusornis sanctus (pennaceous feathers and pygostyle), and Psittacosaurus (bristle-like structures on the tail). Yi qi is particularly notable for its membranous wings supported by a wrist-rod.",
    exampleUsage: "Yutyrannus huali, a large tyrannosauroid from Early Cretaceous China, preserves direct evidence of filamentous feather-like structures — suggesting that at least some large tyrannosaurs had feathery covering, though whether this extended to adult Tyrannosaurus rex is unknown.",
    examples: ["Sinosauropteryx (simple filaments)", "Yutyrannus huali (filaments on a large tyrannosauroid)", "Microraptor gui (pennaceous feathers on all four limbs)", "Confuciusornis sanctus (pennaceous feathers, pygostyle)"],
    exampleSpeciesIds: ["yutyrannus", "confuciusornis", "psittacosaurus"],
    relatedTerms: ["Integument", "Avialan", "Preservation", "Melanosome", "Paravian"],
    keywords: ["filaments", "pennaceous", "insulation", "display", "flight", "Jehol", "dinofuzz", "proto-feathers", "integument"],
    sourceNotes: "A rapidly evolving field. Xu et al. (2014) review non-avian dinosaur feather evidence. Extent of feathering in large theropods remains uncertain."
  },

  {
    id: "melanosome",
    term: "Melanosome",
    category: "Anatomy & Ecology",
    difficulty: "advanced",
    aliases: ["melanosomes", "fossil melanosomes", "colour organelles"],
    simpleDefinition: "Microscopic organelles that produce and store melanin pigment — found in the cells of modern animals and, remarkably, preserved as recognisable structures in some exceptionally preserved fossil feathers and skin.",
    scientificExplanation: "Melanosomes are subcellular organelles (found within melanocytes) that synthesise, store, and transport melanin — the pigment responsible for black, brown, reddish, and yellow colours in animal skin and feathers. In modern birds, melanosome shape correlates with colour: elongated sausage-shaped (eumelanosomes) produce black and dark brown colours; spherical (phaeomelanosomes) produce reddish-brown and yellow tones. Structures morphologically consistent with melanosomes have been identified in several exceptionally preserved fossil feathers and skin since Vinther et al. (2008), allowing tentative colour reconstructions. Borealopelta markmitchelli is the most remarkable case: melanosomes preserved in three-dimensional skin allowed the reconstruction of a reddish-brown countershaded coat with considerable confidence. In feathered theropods, Sinosauropteryx showed alternating dark and pale bands; Microraptor showed iridescent black plumage.",
    whyItMatters: "Fossil melanosomes transformed palaeontology's ability to speak about dinosaur colour — a topic previously thought permanently beyond the reach of science. They also illustrate a broader principle: structures far smaller than the naked eye can see sometimes survive in the fossil record under extraordinary conditions.",
    dinodexContext: "Borealopelta in DinoDex is the most dramatic melanosome case: three-dimensional preservation of the skin allowed direct analysis of melanosome shape and distribution, yielding a detailed colour reconstruction of a living dinosaur. Psittacosaurus skin also preserves structures consistent with melanosomes.",
    exampleUsage: "Vinther et al. (2008) identified preserved melanosomes in a fossil feather from the Eocene, demonstrating that colour information could survive fossilisation — a finding that opened the field of fossil colour reconstruction.",
    examples: ["Borealopelta markmitchelli (reddish-brown countershading)", "Sinosauropteryx (reddish ginger and white banding)", "Microraptor gui (iridescent black plumage)", "Confuciusornis sanctus (partially reconstructed)"],
    exampleSpeciesIds: ["borealopelta", "psittacosaurus"],
    relatedTerms: ["Feathers", "Integument", "Preservation", "Lagerstätte"],
    keywords: ["colour", "pigment", "melanin", "eumelanosome", "phaeomelanosome", "fossilisation", "Borealopelta", "feather colour"],
    sourceNotes: "Vinther et al. (2008) is the founding reference. Highly active research area; specific colour reconstructions are probabilistic, not certain. Brown et al. (2017) on Borealopelta."
  },

  {
    id: "trackway",
    term: "Trackway",
    category: "Fossils & Evidence",
    difficulty: "useful",
    aliases: ["fossil trackway", "ichnite sequence", "footprint trail"],
    simpleDefinition: "A sequence of fossilised footprints made by a single animal, preserving direct evidence of that animal's movement, posture, and occasionally behaviour — independently of skeletal material.",
    scientificExplanation: "A trackway is a body-fossil-independent record: it forms in the substrate (mud, sand, soft sediment) during the life of the animal, and can therefore preserve information impossible to extract from bones alone. Trackway analysis can yield stride length (from which speed estimates can be calculated using Thulborn's method or more recent models), information about gait, evidence of limb posture (upright vs. sprawling), and in rare cases, evidence of social behaviour (parallel trackways suggesting group movement) or predator-prey interactions. The famous Paluxy River site (Glen Rose Formation, Texas) preserves trackways showing an Acrocanthosaurus-like large theropod apparently pursuing sauropods. Trace fossils like trackways are classified separately from body fossils and studied in the subdiscipline of ichnology.",
    whyItMatters: "Trackways prove that information about living dinosaurs — what they did, how they moved, potentially how they behaved — is accessible in the fossil record without any skeletal material. They also provide evidence for species at places and times where no body fossils have been found.",
    dinodexContext: "Acrocanthosaurus in DinoDex is associated with one of the most famous predator-prey trackway sites known: the Paluxy River trackways in Texas, where a large theropod's footprints follow a sauropod's trail across ancient floodplain sediment.",
    exampleUsage: "The Paluxy River trackways show a large theropod (attributed to Acrocanthosaurus) following a sauropod, with at least one set of footprints showing the sauropod's gait change — a rare potential record of a predator-prey interaction preserved in stone.",
    examples: ["Paluxy River (Glen Rose Formation, Texas) — theropod pursuing sauropod", "Mygatt-Moore Quarry trackways (Morrison Formation)", "Lark Quarry, Queensland — possible dinosaur stampede", "Wintonopus latomorum (ornithopod trackway, Australia)"],
    exampleSpeciesIds: ["acrocanthosaurus", "tenontosaurus"],
    relatedTerms: ["Trace fossil", "Fossil record", "Predation"],
    keywords: ["ichnology", "footprints", "speed", "gait", "stride length", "behaviour", "Paluxy", "predator", "trace fossil"],
    sourceNotes: "Standard trace fossil concept. Speed estimates from trackways use models based on Thulborn (1990) and later revisions; estimates should be treated as approximations."
  },

  {
    id: "predation",
    term: "Predation",
    category: "Anatomy & Ecology",
    difficulty: "useful",
    aliases: ["carnivory", "predator-prey interaction", "hunting"],
    simpleDefinition: "The ecological relationship in which one animal (the predator) kills and consumes another (the prey) — direct fossil evidence for it is rare and usually indirect.",
    scientificExplanation: "In the fossil record, direct evidence of predation is uncommon. It takes specific forms: tooth marks on bones that match a particular predator's dentition, bones preserved within a predator's gut or stomach region, shed teeth found near prey bones, or (rarely) trackways showing pursuit. Healed tooth marks (showing the prey survived an attack) are particularly informative, as they confirm an attack occurred and that the prey lived long enough for bone remodelling. The Tenontosaurus-Deinonychus association in the Cloverly Formation is a famous case: multiple deinonychus teeth and bones are found with Tenontosaurus carcasses, suggesting either cooperative attack or multiple scavengers. Whether this represents pack hunting is not agreed. Many 'predators' identified on anatomical grounds may have been facultative scavengers or opportunistic hunters rather than specialist active hunters.",
    whyItMatters: "Predation is central to Mesozoic ecology, but direct evidence is so rare that ecological inference usually relies on analogy with living animals. Separating 'predator anatomy' from 'predator behaviour' is one of the most persistent challenges in dinosaur palaeontology.",
    dinodexContext: "Acrocanthosaurus and Tenontosaurus are both DinoDex species associated with the famous Texas trackway evidence. Deinonychus is best known in the context of the Cloverly Formation predation assemblage. These are among the most evidence-rich predation cases in the dinosaur record.",
    exampleUsage: "Healed tooth marks from a tyrannosaur on hadrosaur bones confirm an attack that the hadrosaur survived — direct evidence of both predation behaviour and prey survival that skeletal anatomy alone could never provide.",
    examples: ["Velociraptor vs Protoceratops (Fighting Dinosaurs specimen)", "Deinonychus associated with Tenontosaurus carcasses", "Acrocanthosaurus trackways pursuing sauropods", "Healed tyrannosaur tooth marks on hadrosaur bones"],
    exampleSpeciesIds: ["tenontosaurus", "acrocanthosaurus"],
    relatedTerms: ["Trackway", "Trace fossil", "Fossil record"],
    keywords: ["carnivore", "hunting", "tooth marks", "gut contents", "scavenger", "behaviour", "ecology", "pack hunting"],
    sourceNotes: "Standard ecological concept. The interpretation of predator-prey associations involves significant inference; any specific behavioural claim should be treated cautiously."
  },

  /* ── EVOLUTION ──────────────────────────────────────────── */
  {
    id: "ontogeny",
    term: "Ontogeny",
    category: "Evolution",
    difficulty: "useful",
    aliases: ["ontogenetic", "individual development", "growth series"],
    simpleDefinition: "The developmental history of an individual organism from embryo to adult — important in palaeontology for distinguishing juvenile features from true species differences.",
    scientificExplanation: "Ontogeny is the study of individual developmental change through an organism's lifetime. In palaeontology, it matters enormously because juvenile dinosaurs can look dramatically different from adults of the same species: bone surfaces are rougher, skull proportions differ, and distinctive features such as horns and frills may be absent or vestigial in young animals. Confusing juveniles with distinct species has led to significant over-splitting of some dinosaur genera — most famously, Dracorex hogwartsia and Stygimoloch spinifer are now widely considered to be juvenile growth stages of Pachycephalosaurus wyomingensis. Histological (bone microstructure) analysis is the primary tool for determining ontogenetic age: growth rings and the pattern of bone deposition can indicate whether an individual was still growing at death.",
    whyItMatters: "Ontogenetic variation has inflated the apparent diversity of some dinosaur faunas significantly. Identifying growth stages requires bone histology rather than surface morphology alone, and some classic 'species' will probably be reassigned to juvenile status as more material is studied.",
    dinodexContext: "Several DinoDex species are relevant to ontogenetic debates — Daspletosaurus, for example, is a taxon that has been proposed by some researchers to represent a growth stage of another tyrannosaur rather than a distinct species. The Protoceratops assemblage includes many growth stages that make it one of the best-documented ceratopsian growth series.",
    exampleUsage: "Bone histology of Maiasaura specimens ranging from hatchling to adult has been used to demonstrate very rapid juvenile growth rates, suggesting near-endothermic metabolism in hadrosaurs.",
    examples: ["Pachycephalosaurus growth series (Dracorex/Stygimoloch debate)", "Protoceratops andrewsi (complete growth series from hatchling to adult)", "Maiasaura peeblesorum (growth rate from histology)", "Tyrannosaurus growth curves from bone rings"],
    exampleSpeciesIds: ["protoceratops", "daspletosaurus"],
    relatedTerms: ["Specimen", "Holotype", "Fossil record", "Diagnosis"],
    keywords: ["growth", "juvenile", "adult", "histology", "bone rings", "development", "species splitting", "over-counting"],
    sourceNotes: "Standard biological and palaeontological concept. Woodward et al. and Erickson et al. have published extensively on dinosaur growth histology."
  },

  /* ── DEEP TIME ──────────────────────────────────────────── */
  {
    id: "gondwana",
    term: "Gondwana",
    category: "Deep Time",
    difficulty: "useful",
    aliases: ["Gondwanaland", "southern supercontinent"],
    simpleDefinition: "The southern landmass that formed when the supercontinent Pangaea split into two, comprising what is now South America, Africa, Antarctica, Australia, India, and Madagascar.",
    scientificExplanation: "Gondwana was a supercontinent that began to separate from Laurasia (the northern half of Pangaea) during the Jurassic, with fragmentation into its constituent plates proceeding gradually through the Cretaceous. South America and Africa separated in the Early Cretaceous (around 100–95 Ma for the final deep water opening between them), while India rifted northward before eventually colliding with Asia. Madagascar separated from Africa relatively early (around 165 Ma) and from India later (around 88 Ma). The progressive fragmentation of Gondwana drove increasing isolation of its faunas, which is why abelisaurid theropods, carcharodontosaurid allosauroids, and titanosaur sauropods have broadly Gondwanan distributions — they diversified while the southern continents were still connected or in recent contact.",
    whyItMatters: "Gondwana's breakup created the biogeographic isolation that explains why the dinosaur faunas of South America and Africa look so different from those of North America and Europe. Understanding palaeogeography is essential for interpreting dinosaur distribution patterns — a species' range reflects the geography that existed when it lived, not today's map.",
    dinodexContext: "Several DinoDex species from the 26 new entries have Gondwanan distributions: Patagotitan (South America), Rajasaurus (India), Carcharodontosaurus (Africa), Mapusaurus (South America), and Abelisaurus (South America) — all reflecting the Gondwanan faunal province that these lineages diversified within.",
    exampleUsage: "The presence of abelisaurids in both South America and India, and their absence from the northern hemisphere, reflects the long connectivity of Gondwana before these landmasses separated.",
    examples: ["South America (Patagonia — titanosaurs, abelisaurids, carcharodontosaurids)", "Africa (Spinosaurus, Carcharodontosaurus)", "India (Rajasaurus — abelisaurid)", "Madagascar (Majungasaurus — abelisaurid)"],
    exampleSpeciesIds: ["patagotitan", "rajasaurus", "carcharodontosaurus", "abelisaurus"],
    relatedTerms: ["Mesozoic", "Triassic", "Clade", "Convergent evolution"],
    keywords: ["southern hemisphere", "Pangaea", "continental drift", "plate tectonics", "biogeography", "Cretaceous", "South America", "Africa", "India"],
    sourceNotes: "Standard palaeogeographic term. Timing of Gondwana fragmentation varies in detail between geological studies. McLoughlin (2001) provides a clear overview."
  },

  {
    id: "morrison-formation",
    term: "Morrison Formation",
    category: "Deep Time",
    difficulty: "useful",
    aliases: ["Morrison Fm", "Morrison beds"],
    simpleDefinition: "A vast Late Jurassic geological formation spanning the western United States, containing one of the richest and most studied dinosaur faunas ever discovered.",
    scientificExplanation: "The Morrison Formation is a sequence of sedimentary rocks (predominantly mudstones, siltstones, and sandstones) deposited in a semi-arid floodplain environment during the Kimmeridgian to Tithonian stages of the Late Jurassic (approximately 157–147 million years ago). It extends across parts of Colorado, Utah, Wyoming, Montana, New Mexico, Kansas, and South Dakota. Dinosaurs of the Morrison include some of the most famous genera ever named: Allosaurus fragilis, Stegosaurus stenops, Diplodocus longus, Apatosaurus ajax, Brachiosaurus altithorax, Camarasaurus supremus, Ceratosaurus nasicornis, and many others. The formation has been excavated since the 1870s (the 'Bone Wars' between Cope and Marsh) and continues to yield new species. Environmental reconstruction suggests a strongly seasonal climate with seasonal flooding.",
    whyItMatters: "The Morrison Formation is historically the most important dinosaur-producing formation in North America, containing the species that defined 19th-century ideas about dinosaurs. Its diversity is exceptional, though the taphonomy of individual sites varies enormously and not all taxa co-existed in the same local fauna.",
    dinodexContext: "Camptosaurus dispar in DinoDex is a Morrison Formation ornithopod. The formation provides the temporal and environmental context for understanding the Jurassic North American dinosaur fauna in contrast to the Cretaceous fauna.",
    exampleUsage: "The Morrison Formation's 1870s excavations — driven by the rivalry between Edward Drinker Cope and Othniel Charles Marsh — produced more new dinosaur genera per decade than any period before or since.",
    examples: ["Allosaurus fragilis (top predator)", "Stegosaurus stenops (thyreophoran)", "Diplodocus longus (diplodocoid sauropod)", "Camptosaurus dispar (ornithopod)"],
    exampleSpeciesIds: ["camptosaurus"],
    relatedTerms: ["Jurassic", "Lagerstätte", "Fossil record", "Taphonomy"],
    keywords: ["Jurassic", "western USA", "Allosaurus", "Stegosaurus", "Diplodocus", "Bone Wars", "floodplain", "formation"],
    sourceNotes: "Standard geological formation. Foster (2007) provides a comprehensive overview. Age dates follow ICS 2023 or current edition."
  },

  {
    id: "wealden",
    term: "Wealden",
    category: "Deep Time",
    difficulty: "useful",
    aliases: ["Wealden Supergroup", "Wealden Group", "Wealden beds"],
    simpleDefinition: "A group of Early Cretaceous geological formations in southeastern England (and equivalent beds in Belgium) that have produced some of the most historically important European dinosaur discoveries.",
    scientificExplanation: "The Wealden Supergroup is a series of continental and freshwater sedimentary formations deposited during the Berriasian to Barremian stages of the Early Cretaceous (approximately 145–125 million years ago) in the area of the Weald in Sussex, Surrey, and Kent, as well as the Isle of Wight and equivalent beds in Belgium. It consists of fluvial (river-deposited) mudstones, siltstones, and sands. Dinosaur discoveries from the Wealden include Iguanodon bernissartensis (described in 1825 by Gideon Mantell from Sussex, the second dinosaur scientifically named), Baryonyx walkeri (a spinosaurid discovered in Surrey in 1983), Hypsilophodon foxii (Isle of Wight), Neovenator salerii (Isle of Wight allosauroid), and Polacanthus foxii (nodosaurid ankylosaur). The Wealden played a foundational role in the history of palaeontology.",
    whyItMatters: "The Wealden provided some of the earliest-described dinosaurs and was central to the development of palaeontology as a science in the 19th century. Today, the Isle of Wight in particular continues to yield new species, making it one of Europe's most productive dinosaur sites.",
    dinodexContext: "Hypsilophodon foxii and Neovenator salerii in DinoDex are both Wealden taxa from the Isle of Wight. Their discovery contexts connect to the long history of British palaeontology.",
    exampleUsage: "The Bernissart Iguanodon discovery in Belgium (1878) — where over thirty complete Iguanodon skeletons were found in a coal mine — was a Wealden-equivalent deposit that transformed understanding of large ornithopods.",
    examples: ["Iguanodon bernissartensis (Sussex/Belgium)", "Baryonyx walkeri (Surrey, England)", "Hypsilophodon foxii (Isle of Wight)", "Neovenator salerii (Isle of Wight)"],
    exampleSpeciesIds: ["hypsilophodon", "neovenator"],
    relatedTerms: ["Cretaceous", "Fossil record", "Lagerstätte"],
    keywords: ["Early Cretaceous", "England", "Belgium", "Isle of Wight", "Iguanodon", "Baryonyx", "British palaeontology", "formation"],
    sourceNotes: "Standard formation name. Naish & Martill (2001) provide a comprehensive review of Wealden dinosaurs. Age dates follow ICS 2023 or current edition."
  },

  {
    id: "jehol-biota",
    term: "Jehol Biota",
    category: "Deep Time",
    difficulty: "useful",
    aliases: ["Jehol assemblage", "Jehol Group", "Yixian biota", "Liaoning biota"],
    simpleDefinition: "An extraordinarily rich Early Cretaceous fossil assemblage from northeastern China that has yielded feathered dinosaurs, early birds, early flowering plants, and some of the best-preserved Mesozoic fossils known.",
    scientificExplanation: "The Jehol Biota refers to the diverse fossil assemblage preserved in the Yixian and Jiufotang formations of western Liaoning Province, China, dating to approximately 132–120 million years ago (Aptian-Albian, Early Cretaceous). The exceptional preservation is attributed to periodic volcanic ashfalls that rapidly buried organisms in anaerobic lake sediments, combined with fine-grained sediment that captured soft tissue detail. Discoveries from the Jehol Biota include Sinosauropteryx (first non-avian dinosaur with direct feather evidence, 1996), Microraptor (four-winged dromaeosaurid), Confuciusornis (earliest beaked bird with pygostyle), Wulong bohaiensis, Yi qi (membranous-winged scansoriopterygid), and early angiosperms (flowering plants). The biota transformed understanding of feathered dinosaurs, bird origins, and Cretaceous ecology.",
    whyItMatters: "The Jehol Biota is the most important single fossil assemblage for understanding the origin of birds and the diversity of feathered non-avian dinosaurs. Without it, the evidence base for dinosaur feathers would be dramatically thinner, and many of the key transition taxa would be unknown.",
    dinodexContext: "DinoDex includes three Jehol Biota species: Wulong bohaiensis (dromaeosaurid), Confuciusornis sanctus (early avialan), and Yi qi (scansoriopterygid with membranous wings). Together they show the remarkable diversity of feathered paravians in this single Early Cretaceous ecosystem.",
    exampleUsage: "The Jehol Biota alone has contributed more to our understanding of feathered dinosaurs than all other fossil sites combined — it preserves a moment in evolutionary time when the transition between non-avian dinosaurs and modern birds was still in progress.",
    examples: ["Sinosauropteryx prima (first feathered non-avian dinosaur described)", "Microraptor gui (four-winged dromaeosaurid)", "Confuciusornis sanctus (early beaked bird)", "Yi qi (membranous-winged scansoriopterygid)"],
    exampleSpeciesIds: ["confuciusornis"],
    relatedTerms: ["Lagerstätte", "Feathers", "Avialan", "Paravian", "Cretaceous"],
    keywords: ["Liaoning", "China", "feathered dinosaurs", "exceptional preservation", "Yixian", "Jiufotang", "volcanic ash", "Early Cretaceous", "bird origins"],
    sourceNotes: "Standard assemblage name. Chang et al. (2003) provide a comprehensive review; Zhou (2006) covers the avifauna specifically. Age estimates refined to approximately 132–120 Ma in recent work."
  }

];

/* ============================================================
   GLOSSARY STATE
   ============================================================ */

const glState = { q: '', category: 'all' };
let glInitialised = false;

/* ============================================================
   GLOSSARY FUNCTIONS
   ============================================================ */

function glFilteredTerms() {
  var q = glState.q.toLowerCase();
  return window.GLOSSARY_TERMS.filter(function(t) {
    var matchCat = glState.category === 'all' || t.category === glState.category;
    if (!matchCat) return false;
    if (!q) return true;

    if (t.term.toLowerCase().includes(q)) return true;
    if (t.category.toLowerCase().includes(q)) return true;
    if (t.difficulty.toLowerCase().includes(q)) return true;
    if (t.simpleDefinition.toLowerCase().includes(q)) return true;
    if (t.scientificExplanation.toLowerCase().includes(q)) return true;
    if (t.whyItMatters.toLowerCase().includes(q)) return true;
    if (t.dinodexContext.toLowerCase().includes(q)) return true;
    if (t.exampleUsage.toLowerCase().includes(q)) return true;

    if ((t.aliases || []).some(function(a) { return a.toLowerCase().includes(q); })) return true;
    if ((t.examples || []).some(function(e) { return e.toLowerCase().includes(q); })) return true;
    if ((t.relatedTerms || []).some(function(r) { return r.toLowerCase().includes(q); })) return true;
    if ((t.keywords || []).some(function(k) { return k.toLowerCase().includes(q); })) return true;

    return false;
  });
}

function glRenderGrid() {
  var grid = document.getElementById('gl-grid');
  var countEl = document.getElementById('gl-count');
  if (!grid) return;

  var terms = glFilteredTerms();

  if (countEl) {
    countEl.textContent = terms.length === 1
      ? '1 term'
      : terms.length + ' terms';
  }

  if (terms.length === 0) {
    grid.innerHTML = '<p class="gl-empty">No terms match your search.</p>';
    return;
  }

  grid.innerHTML = terms.map(function(t) {
    var relatedHtml = t.relatedTerms && t.relatedTerms.length
      ? '<div class="gl-related"><span class="gl-related-label">Related:</span> ' +
        t.relatedTerms.map(function(r) {
          return '<span class="gl-related-pill">' + r + '</span>';
        }).join('') +
        '</div>'
      : '';

    var examplesHtml = t.examples && t.examples.length
      ? '<div class="gl-section"><span class="gl-section-label">Examples</span>' +
        '<ul class="gl-examples-list">' +
        t.examples.map(function(e) { return '<li>' + e + '</li>'; }).join('') +
        '</ul></div>'
      : '';

    var aliasHtml = t.aliases && t.aliases.length
      ? '<div class="gl-aliases">Also: ' + t.aliases.join(', ') + '</div>'
      : '';

    return '<div class="gl-card" id="gl-card-' + t.id + '">' +
      '<button class="gl-card-header" onclick="glExpandTerm(\'' + t.id + '\')" aria-expanded="false">' +
        '<div class="gl-card-top">' +
          '<span class="gl-term">' + t.term + '</span>' +
          '<span class="gl-meta">' +
            '<span class="gl-category">' + t.category + '</span>' +
            '<span class="gl-difficulty gl-diff-' + t.difficulty + '">' + t.difficulty + '</span>' +
          '</span>' +
        '</div>' +
        '<p class="gl-simple">' + t.simpleDefinition + '</p>' +
        '<span class="gl-expand-hint">Expand &darr;</span>' +
      '</button>' +
      '<div class="gl-card-body">' +
        aliasHtml +
        '<div class="gl-section"><span class="gl-section-label">Scientific Explanation</span><p>' + t.scientificExplanation + '</p></div>' +
        '<div class="gl-section"><span class="gl-section-label">Why It Matters</span><p>' + t.whyItMatters + '</p></div>' +
        '<div class="gl-section"><span class="gl-section-label">In DinoDex</span><p>' + t.dinodexContext + '</p></div>' +
        '<div class="gl-section"><span class="gl-section-label">Example Usage</span><p class="gl-example-usage">' + t.exampleUsage + '</p></div>' +
        examplesHtml +
        relatedHtml +
      '</div>' +
    '</div>';
  }).join('');

  /* Restore open state after re-render */
  document.querySelectorAll('.gl-card').forEach(function(card) {
    var btn = card.querySelector('.gl-card-header');
    if (card.classList.contains('gl-open') && btn) {
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

function glExpandTerm(id) {
  var card = document.getElementById('gl-card-' + id);
  if (!card) return;
  var btn = card.querySelector('.gl-card-header');
  var isOpen = card.classList.toggle('gl-open');
  if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  var hint = card.querySelector('.gl-expand-hint');
  if (hint) hint.textContent = isOpen ? 'Collapse ↑' : 'Expand ↓';
}

/* Stub — Phase 2 will scroll and open the target card */
function glScrollToTerm(id) {
  glExpandTerm(id);
}

function glInit() {
  if (glInitialised) return;
  glInitialised = true;

  var container = document.getElementById('glossary-view');
  if (!container) return;

  var cats = ['Classification', 'Fossils & Evidence', 'Evolution', 'Anatomy & Ecology', 'Deep Time'];

  container.innerHTML =
    '<div class="gl-header wrap">' +
      '<h1 class="gl-title">Glossary</h1>' +
      '<p class="gl-subtitle">Key terms in palaeontology, classification, and deep time.</p>' +
    '</div>' +
    '<div class="gl-controls wrap">' +
      '<div class="search">' +
        '<input id="gl-search" type="search" placeholder="Search terms…" autocomplete="off" aria-label="Search glossary terms">' +
      '</div>' +
      '<div class="filters" id="gl-filters" role="group" aria-label="Filter by category">' +
        '<button class="chip on" data-glcat="all">All</button>' +
        cats.map(function(c) {
          return '<button class="chip" data-glcat="' + c + '">' + c + '</button>';
        }).join('') +
      '</div>' +
      '<div class="count" id="gl-count"></div>' +
    '</div>' +
    '<div class="wrap">' +
      '<div id="gl-grid" class="gl-grid"></div>' +
    '</div>';

  /* Search */
  var searchEl = document.getElementById('gl-search');
  if (searchEl) {
    searchEl.addEventListener('input', function() {
      glState.q = this.value.trim();
      glRenderGrid();
    });
  }

  /* Category chips */
  var filtersEl = document.getElementById('gl-filters');
  if (filtersEl) {
    filtersEl.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-glcat]');
      if (!btn) return;
      filtersEl.querySelectorAll('[data-glcat]').forEach(function(b) { b.classList.remove('on'); });
      btn.classList.add('on');
      glState.category = btn.dataset.glcat;
      glRenderGrid();
    });
  }

  glRenderGrid();
}

/* ============================================================
   LAZY INIT — fires once on first Glossary nav click
   ============================================================ */
(function() {
  function attachGlInit() {
    var glTab = document.querySelector('.sidebar-nav-item[data-view="glossary"]');
    if (!glTab) return;
    glTab.addEventListener('click', function onFirstGlossaryOpen() {
      glInit();
      glTab.removeEventListener('click', onFirstGlossaryOpen);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachGlInit);
  } else {
    attachGlInit();
  }
})();
