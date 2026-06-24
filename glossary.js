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
   LAZY INIT — fires once on first Glossary tab click
   ============================================================ */
(function() {
  var glTab = document.querySelector('.view-tab[data-view="glossary"]');
  if (!glTab) return;
  glTab.addEventListener('click', function onFirstGlossaryOpen() {
    glInit();
    glTab.removeEventListener('click', onFirstGlossaryOpen);
  });
})();
