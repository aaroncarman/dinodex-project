var RESEARCH_CASES = [
  {
    id:"spinosaurus",number:"01",title:"Spinosaurus",
    subtitle:"Swimmer, wader, or shoreline hunter?",
    hook:"The dinosaur that may have learned to swim - or may just have liked the water's edge.",
    summary:"Spinosaurus is the best candidate for a water-adapted dinosaur, but how aquatic it really was remains genuinely unsettled. A 2020 study described a paddle-like tail and argued for active swimming; later work split sharply. Recent exchanges focus as much on whether our methods can even distinguish these lifestyles.",
    status:["Active debate","Method frontier"],categories:["Anatomy & biomechanics"],activeness:5,
    evidence:["anatomy","bone microstructure","biomechanics","isotopes","sedimentology"],
    question:"Was Spinosaurus aegyptiacus a pursuit-diving aquatic predator, a shoreline wader, or something between - and can current methods actually distinguish these?",
    whyItMatters:"Spinosaurus is the test case for whether any non-avian dinosaur became genuinely, skeletally adapted to life in water. The answer reshapes how we think about dinosaur ecological range and how confident we can be drawing lifestyle from fragmentary fossils of an animal whose best material was destroyed in WWII.",
    changedRecently:"The 2020 tail discovery reignited the aquatic hypothesis; 2022 saw two near-simultaneous, opposed results (dense-bone diving vs. buoyancy modelling against diving). In 2024 the Sereno/Myhrvold team attacked the method behind the dense-bone claim, and the Fabbri team maintained their conclusion. The debate has shifted partly to whether our methods are reliable enough to tell.",
    competingInterpretations:[
      "Pursuit diver (Ibrahim, Fabbri et al.): explains the paddle tail, dense bones, retracted nostrils, and isotopic fish signal. Struggles with buoyancy/stability modelling and the small relative size of the dense hindlimbs as ballast.",
      "Shoreline wader/generalist (Sereno, Myhrvold, Hone & Holtz): explains the buoyancy and stability problems. Struggles to fully account for why the tail is so paddle-shaped if not for propulsion.",
      "A growing middle view holds that 'swimmer vs. wader' is a false binary: Spinosaurus was clearly water-associated and semi-aquatic to some degree; the disagreement is about how much time it spent submerged."
    ],
    mostlyAgreed:[
      "Spinosaurus lived in and around water and ate a lot of fish.",
      "It was the most water-adapted large non-avian dinosaur known.",
      "It was not a fully marine, plesiosaur-like animal and spent meaningful time on land."
    ],
    unresolved:[
      "Whether it actively pursued prey underwater or struck from the surface/shallows.",
      "Whether pFDA-based bone-density inference is reliable for lifestyle.",
      "How to reconcile the tail morphology with the buoyancy modelling.",
      "How much the destroyed original material and composite reconstructions distort the picture."
    ],
    direction:"Away from a clean binary, and toward method caution - the field is increasingly debating the reliability of the inference techniques themselves, not just the conclusions.",
    cautiousReading:"Spinosaurus was unmistakably tied to water and ate fish, and is the strongest candidate for a semi-aquatic non-avian dinosaur. Whether it dived and chased prey beneath the surface like a giant cormorant, or waded and ambushed from the shallows like an enormous heron, remains genuinely unsettled. The honest summary is \"semi-aquatic, to a degree we cannot yet pin down.\"",
    linkedSpecies:["spinosaurus","baryonyx","giganotosaurus","deinosuchus"],
    papers:[
      {authors:"Ibrahim et al.",year:"2020",title:"Tail-propelled aquatic locomotion in a theropod dinosaur",source:"Nature",doi:"10.1038/s41586-020-2190-3",type:"Primary paper",note:"Described the paddle-like tail and argued for active swimming."},
      {authors:"Fabbri et al.",year:"2022",title:"Subaqueous foraging among carnivorous dinosaurs",source:"Nature",doi:"10.1038/s41586-022-04528-0",type:"Primary paper",note:"Used bone compactness (pFDA) to argue Spinosaurus had dense bones consistent with submerged foraging."},
      {authors:"Sereno et al.",year:"2022",title:"Spinosaurus is not an aquatic dinosaur",source:"eLife",doi:"10.7554/eLife.80092",type:"Primary paper",note:"3D CT-based flesh model; concluded the animal was too buoyant to dive, favouring a shoreline/wading interpretation."},
      {authors:"Myhrvold et al.",year:"2024",title:"Diving dinosaurs? Caveats on the use of bone compactness and pFDA for inferring lifestyle",source:"PLOS ONE",doi:"10.1371/journal.pone.0298957",type:"Primary paper",note:"Critiqued the statistical method underpinning the dense-bone diving argument."},
      {authors:"Hone & Holtz",year:"2021",title:"Evaluating the ecology of Spinosaurus: shoreline generalist or aquatic pursuit predator?",source:"Palaeontologia Electronica",doi:"10.26879/1110",type:"Review",note:"Argued the evidence best fits a shoreline-based generalist, not a deep diver."}
    ]
  },
  {
    id:"nanotyrannus",number:"02",title:"Nanotyrannus",
    subtitle:"Young Tyrannosaurus rex or separate tyrannosaur?",
    hook:"Teenage T. rex, or a different tyrant entirely? A 2025 fossil flipped the debate.",
    summary:"For decades the mainstream view treated Nanotyrannus as a juvenile T. rex. Two independent 2025 studies, built on the unusually complete Dueling Dinosaurs specimen, have shifted the weight of evidence toward Nanotyrannus being a real, separate small-bodied tyrannosaur that lived alongside T. rex.",
    status:["Taxonomy dispute","Recently shifted"],categories:["Taxonomy & growth"],activeness:4,
    evidence:["histology","anatomy","growth modelling","phylogenetics"],
    question:"Do the small Hell Creek tyrannosaur specimens labelled Nanotyrannus represent juvenile Tyrannosaurus rex, or a distinct, valid genus?",
    whyItMatters:"This is simultaneously a taxonomy question and a question about T. rex itself: if 'Nanotyrannus' specimens are actually juvenile T. rex, they are our main window into T. rex growth and behaviour. If they are a separate animal, decades of inferences about T. rex ontogeny and Hell Creek predator diversity need revisiting.",
    changedRecently:"A dramatic shift in 2024–2025. The 2020 histology had pushed the consensus toward 'juvenile T. rex.' Then in late 2025 two independent papers (Zanno & Napoli in Nature; Griffin et al. in Science) - using the complete Dueling Dinosaurs specimen - argued the animal was skeletally mature and biologically incompatible with being a young T. rex. The consilience of two independent teams is what makes this significant.",
    competingInterpretations:[
      "Juvenile T. rex (Woodward et al. 2020): explains the small size and immature features of some specimens. Critics note that some referred specimens may genuinely be immature T. rex, muddying comparisons.",
      "Valid distinct genus (Longrich & Saitta 2024; Zanno & Napoli 2025; Griffin et al. 2025): explains the somatic maturity of the Dueling Dinosaurs specimen and growth curves that don't fit a T. rex trajectory. The phylogenetic placement - inside or outside Tyrannosauridae - is still contested."
    ],
    mostlyAgreed:[
      "At least some specimens once called Nanotyrannus are now widely accepted to be distinct from T. rex.",
      "The Dueling Dinosaurs tyrannosaur reached skeletal maturity at small size.",
      "Genuine juvenile T. rex are rare and do exist."
    ],
    unresolved:[
      "The exact phylogenetic position of Nanotyrannus (inside vs. outside Tyrannosauridae).",
      "Whether all historically referred specimens belong to one taxon, two (N. lancensis + N. lethaeus), or a mix that includes real juvenile T. rex.",
      "How much published T. rex ontogeny work must now be revised."
    ],
    direction:"Toward recognition of Nanotyrannus as a valid taxon - but with the placement and the species-level sorting still actively worked out. This is a case that genuinely moved in the last 18 months.",
    cautiousReading:"For decades the mainstream view treated Nanotyrannus as a juvenile T. rex. Two independent 2025 studies have shifted the weight of evidence toward Nanotyrannus being a real, separate small-bodied tyrannosaur. This is now the better-supported position, but it is recent, not unanimous, and the animal's exact place in the tyrannosaur family tree is still being argued.",
    linkedSpecies:["tyrannosaurus","triceratops","edmontosaurus"],
    papers:[
      {authors:"Woodward et al.",year:"2020",title:"Growing up Tyrannosaurus rex: Osteohistology refutes the pygmy 'Nanotyrannus'",source:"Science Advances",doi:"10.1126/sciadv.aax6250",type:"Primary paper",note:"Histology argued the specimens were immature, consistent with juvenile T. rex."},
      {authors:"Longrich & Saitta",year:"2024",title:"Taxonomic Status of Nanotyrannus lancensis - A Distinct Taxon of Small-Bodied Tyrannosaur",source:"Fossil Studies",doi:"10.3390/fossils2010001",type:"Primary paper",note:"~150 morphological differences and growth data showing decelerating growth support Nanotyrannus as distinct."},
      {authors:"Zanno & Napoli",year:"2025",title:"Nanotyrannus and Tyrannosaurus coexisted at the close of the Cretaceous",source:"Nature",doi:"10.1038/s41586-025-09801-6",type:"Primary paper",note:"Analysed the Dueling Dinosaurs specimen; concluded Nanotyrannus is valid and sits outside Tyrannosauridae."},
      {authors:"Griffin et al.",year:"2025",title:"A diminutive tyrannosaur lived alongside Tyrannosaurus rex",source:"Science",doi:"10.1126/science.adx8706",type:"Primary paper",note:"Independent corroboration that the Dueling Dinosaurs tyrannosaur represents a distinct taxon, not a juvenile T. rex."}
    ]
  },
  {
    id:"theropod-hunting",number:"03",title:"Theropod Hunting",
    subtitle:"How did giant predators kill and feed?",
    hook:"Crushing, slashing, or fishing - giant predators each killed their own way.",
    summary:"Giant meat-eating dinosaurs didn't all kill the same way. A 2025 biomechanical study modelling 18 species showed the three lineages that independently grew huge evolved different feeding strategies: tyrannosaurs built reinforced skulls for bone-crushing, allosauroids used lighter skulls for slashing, and spinosaurids specialised in fish.",
    status:["Emerging evidence","Method frontier"],categories:["Anatomy & biomechanics"],activeness:3,
    evidence:["anatomy","biomechanics","bite marks","body-mass modelling"],
    question:"Did the giant meat-eating dinosaurs share one killing strategy, or did different lineages evolve fundamentally different ways to kill and feed?",
    whyItMatters:"Feeding mechanics reveal ecology, niche partitioning, and convergent evolution - and the topic is a showcase for what biomechanical modelling can and cannot demonstrate about extinct behaviour.",
    changedRecently:"The 2025 Rowe & Rayfield FEA study quantitatively compared many giant theropods and showed the three lineages that independently reached giant size (Tyrannosauroidea, Allosauroidea, Megalosauroidea) converged on size but not on feeding mechanics - formalising the 'crushing vs. slashing' contrast with modelled stress data rather than impression.",
    competingInterpretations:[
      "Tyrannosaurids - stiff, fused, akinetic skulls; very high bite forces (~35,000–60,000 N); bone-crushing ('osteophagy'), crocodile-like.",
      "Allosauroids/megalosauroids - lighter, lower-force skulls; slashing/slicing bites, Komodo-dragon-like; possibly 'delicate' flesh-stripping.",
      "The genuine open arguments are about pack hunting (often asserted, rarely demonstrable) and the scavenging-vs-hunting framing (a false binary - large predators almost certainly did both)."
    ],
    mostlyAgreed:[
      "Giant theropods did not all hunt alike.",
      "T. rex was a specialised high-force bone-crusher; allosauroids relied on slashing rather than crushing.",
      "Large carnivores both hunted and scavenged.",
      "Healed bite injuries confirm at least some attacks were on live prey."
    ],
    unresolved:[
      "How much coordinated pack hunting (vs. loose aggregation) occurred.",
      "How reliably FEA stress models translate to real behaviour.",
      "The precise prey-capture sequence for each lineage.",
      "How ontogeny (juveniles vs. adults) changed feeding ecology."
    ],
    direction:"Away from a single 'apex predator' template and toward lineage-specific feeding ecologies - while staying cautious about what biomechanics alone can prove about behaviour.",
    cautiousReading:"Giant meat-eating dinosaurs were not variations on one theme. Tyrannosaurs evolved reinforced skulls and enormous bite forces capable of crushing bone, while allosauroids used slashing, slicing attacks - and spinosaurids went after fish. Recent 3D modelling has put numbers behind these contrasts. But biomechanics shows what an animal could do, not always what it did: pack hunting claims remain hard to prove, and 'hunter versus scavenger' is a false choice - big predators almost certainly did both.",
    linkedSpecies:["tyrannosaurus","allosaurus","giganotosaurus","spinosaurus","deinonychus","baryonyx","utahraptor","albertosaurus","torvosaurus","yutyrannus"],
    papers:[
      {authors:"Rowe & Rayfield",year:"2025",title:"Carnivorous dinosaur lineages adopt different skull performances at gigantic size",source:"Current Biology",doi:"10.1016/j.cub.2025.06.060",type:"Primary paper",note:"3D FEA across 18 theropods; tyrannosaurids combined stiff skulls with high bite force; allosauroids used lower-force slashing bites."},
      {authors:"Rayfield et al.",year:"2001",title:"Cranial design and function in a large theropod dinosaur",source:"Nature",doi:"10.1038/35059070",type:"Primary paper",note:"Foundational FEA of the Allosaurus skull; 'weak bite, strong skull' hatchet-strike feeding."},
      {authors:"Gignac & Erickson",year:"2017",title:"The biomechanics behind extreme osteophagy in Tyrannosaurus rex",source:"Scientific Reports",doi:"10.1038/s41598-017-02161-w",type:"Primary paper",note:"Quantified T. rex bone-crushing bite forces."}
    ]
  },
  {
    id:"feathers",number:"04",title:"Feathers",
    subtitle:"How widespread were feathers and filament-like coverings?",
    hook:"Not all dinosaurs were fluffy - but far more than we used to think.",
    summary:"Feathers were never unique to birds, and far more dinosaurs bore feathers or filament-like coverings than once thought. Coelurosaurian theropods were genuinely feathered; some ornithischians and even pterosaurs show filaments. But 'all dinosaurs were fluffy' overstates it. The live scientific question is whether all these structures share one deep origin or evolved more than once.",
    status:["Emerging evidence","Active debate"],categories:["Skin, feathers & colour"],activeness:4,
    evidence:["soft tissue","melanosomes","phylogenetics","developmental biology"],
    question:"How broadly distributed were feathers and filament-like body coverings across dinosaurs, and did such structures evolve once deep in the tree or multiple times?",
    whyItMatters:"Body covering speaks to physiology (insulation implies elevated metabolism), display and signalling, the origin of flight, and how we restore dinosaurs in art and museums. It also tests how we read rare soft-tissue preservation against a mostly bone-only record.",
    changedRecently:"1990s Liaoning discoveries proved feathers existed beyond birds. Kulindadromeus (2014) extended filament-like structures to ornithischians. Pterosaur pycnofibre work (2019) pushed the possible origin even deeper - but also drew pushback about whether all 'filaments' are homologous feathers or independently evolved. A 2025 review crystallises where homology is and isn't agreed.",
    competingInterpretations:[
      "Single deep origin + widespread, with secondary loss: explains filaments appearing in theropods, ornithischians, and pterosaurs parsimoniously; predicts large/armoured taxa lost them. Struggles with the patchiness of the evidence.",
      "Multiple independent origins: explains the morphological differences between pterosaur pycnofibres and theropod feathers; avoids assuming an unpreserved ancestral feather. Struggles to explain why branched structures would arise convergently in distant groups."
    ],
    mostlyAgreed:[
      "Many coelurosaurian theropods were genuinely feathered.",
      "Feathers are not unique to birds.",
      "Large-bodied and armoured dinosaurs (big sauropods, ankylosaurs, stegosaurs) were likely mostly scaly.",
      "Scales and filaments can coexist on one animal.",
      "'All dinosaurs were fully feathered' is too simple."
    ],
    unresolved:[
      "Whether all dinosaur/pterosaur filaments are homologous (one origin) or convergent.",
      "How deep the origin truly is.",
      "The function(s) of the earliest filaments.",
      "How much of the apparent absence in many taxa is real vs. preservational."
    ],
    direction:"Toward a more complex, mosaic picture of body-covering evolution - and toward acknowledging that the single-vs-multiple-origin question is genuinely open rather than settled in either direction.",
    cautiousReading:"We now know feathers and filament-like coverings were far more widespread among dinosaurs than once thought. Coelurosaurs were genuinely feathered; some ornithischians and pterosaurs bore filaments too. But 'every dinosaur was feathered' overstates it - many large and armoured forms were scaly, and scales and filaments could occur on the same body. Whether all these structures descend from one deep ancestral feather, or arose more than once, remains one of the field's live questions.",
    linkedSpecies:["sinosauropteryx","anchiornis","microraptor","archaeopteryx","velociraptor","yiqi","pteranodon","triceratops","ornithomimus","yutyrannus","wulong","psittacosaurus"],
    papers:[
      {authors:"Godefroit et al.",year:"2014",title:"A Jurassic ornithischian dinosaur from Siberia with both feathers and scales",source:"Science",doi:"10.1126/science.1253351",type:"Primary paper",note:"Kulindadromeus: an ornithischian with monofilaments, branched filaments, and scales."},
      {authors:"Yang et al.",year:"2019",title:"Pterosaur integumentary structures with complex feather-like branching",source:"Nature Ecology & Evolution",doi:"10.1038/s41559-018-0728-7",type:"Primary paper",note:"Reported branched pycnofibres in pterosaurs, reopening the single-deep-origin question."},
      {authors:"Benton et al.",year:"2019",title:"The Early Origin of Feathers",source:"Trends in Ecology & Evolution",doi:"10.1016/j.tree.2019.04.018",type:"Review",note:"Argues feathers likely had a single early origin near the base of Avemetatarsalia, with subsequent loss in some lineages."}
    ]
  },
  {
    id:"dinosaur-colours",number:"05",title:"Dinosaur Colours",
    subtitle:"What can we actually reconstruct?",
    hook:"We really can know some dinosaur colours - within limits worth understanding.",
    summary:"For a handful of exquisitely preserved feathered dinosaurs, we can reconstruct melanin-based colours with reasonable confidence. But non-melanin colours such as bright reds, yellows, and blues rarely leave a recoverable trace, and the statistical link between melanosome shape and colour is still debated. Vivid whole-body palettes in art remain substantially interpretive.",
    status:["Method frontier","Emerging evidence"],categories:["Skin, feathers & colour"],activeness:3,
    evidence:["melanosomes","geochemistry","soft tissue"],
    question:"What aspects of dinosaur colour can be reconstructed from fossils with real confidence, and what remains speculative or method-dependent?",
    whyItMatters:"Colour informs behaviour (camouflage, display, signalling), ecology (open vs. forested habitats), and the reliability of museum and media reconstructions. It's also a flagship case for how far chemical and microstructural palaeontology can be pushed.",
    changedRecently:"The 2010 melanosome breakthroughs opened the field. Since then work has extended to iridescence (Microraptor, Caihong), countershading and camouflage inference (Sinosauropteryx, Psittacosaurus), and newer specimens. At the same time, the reliability of inferring colour from melanosome shape statistics has been increasingly scrutinised.",
    competingInterpretations:[
      "Optimistic: melanosome shape/arrangement reliably predicts melanin-based colours; full-body palettes are achievable for exceptional specimens.",
      "Cautious: melanosome-shape-to-colour mapping is noisier than presented, sampling is partial, and diagenesis can alter melanosome geometry; non-melanin colours (carotenoid reds, blues, structural non-melanin colours) are largely irrecoverable."
    ],
    mostlyAgreed:[
      "Melanin-based colours (black, grey, brown, reddish) and melanin-derived iridescence can be reconstructed in exceptionally preserved feathered specimens.",
      "Melanin preserves because it is chemically robust.",
      "Some inferred patterns (countershading, banding) are reasonably well supported."
    ],
    unresolved:[
      "How reliable melanosome-shape statistics are.",
      "How to recover non-melanin pigments and structural colours.",
      "How confidently partial sampling can be scaled to a whole animal.",
      "How much diagenesis distorts melanosome geometry."
    ],
    direction:"Toward method caution - confident about melanin-based colours in well-preserved specimens, increasingly careful about overclaiming full palettes or non-melanin hues.",
    cautiousReading:"For a handful of exquisitely preserved feathered dinosaurs, we can reconstruct melanin-based colours - blacks, greys, browns, russets, and even iridescent sheens - with reasonable confidence. But these are not full colour photographs: non-melanin colours such as bright reds, yellows, and blues rarely leave a recoverable trace, and the statistical link between melanosome shape and colour is still debated. Vivid whole-body palettes in art remain substantially interpretive.",
    linkedSpecies:["anchiornis","sinosauropteryx","microraptor","archaeopteryx","psittacosaurus"],
    papers:[
      {authors:"Li et al.",year:"2010",title:"Plumage color patterns of an extinct dinosaur",source:"Science",doi:"10.1126/science.1186290",type:"Primary paper",note:"Full-body melanosome-based reconstruction of Anchiornis (grey body, black-and-white wings, reddish crest)."},
      {authors:"Zhang et al.",year:"2010",title:"Fossilized melanosomes and the colour of Cretaceous dinosaurs and birds",source:"Nature",doi:"10.1038/nature08740",type:"Primary paper",note:"Sinosauropteryx shown to have a ginger/russet banded tail."},
      {authors:"Li et al.",year:"2012",title:"Reconstruction of Microraptor and the evolution of iridescent plumage",source:"Science",doi:"10.1126/science.1213780",type:"Primary paper",note:"Microraptor had iridescent blue-black plumage from stacked melanosomes."},
      {authors:"Roy et al.",year:"2020",title:"Recent advances in amniote palaeocolour reconstruction",source:"Biological Reviews",doi:"10.1111/brv.12552",type:"Review",note:"Comprehensive review of methods, confidence levels, and pitfalls."}
    ]
  },
  {
    id:"polar-dinosaurs",number:"06",title:"Polar Dinosaurs",
    subtitle:"How did dinosaurs live in extreme seasonal worlds?",
    hook:"They didn't migrate away from the dark - they nested in it.",
    summary:"Dinosaurs didn't just visit the poles - they lived there year-round. Fossils of newly hatched dinosaurs from northern Alaska, laid down above 80° palaeolatitude, show that many species nested and raised young in an Arctic world with months of winter darkness. This resilience supports the view that at least some dinosaurs were warm-blooded.",
    status:["Emerging evidence"],categories:["Biogeography & ecology"],activeness:3,
    evidence:["histology","fossil distribution","palaeoclimate","sedimentology"],
    question:"How did dinosaurs survive and reproduce at high latitudes with months of winter darkness - did they migrate, or live there year-round?",
    whyItMatters:"Polar dinosaurs test physiology (could they cope with cold and prolonged dark?), behaviour (migration vs. residency), and the limits of dinosaur ecological range - and the question connects directly to the warm-blooded-dinosaur debate.",
    changedRecently:"The 2021 perinatal-fossil study turned 'did big polar dinosaurs migrate?' toward 'they nested and stayed,' because hatchling-stage remains of many taxa imply reproduction in situ. A 2025 Science paper pushed polar bird nesting back ~25–30 million years, reinforcing the picture of a fully resident high-latitude ecosystem.",
    competingInterpretations:[
      "Year-round residency (Druckenmiller et al.): the abundance of hatchling-stage fossils across many taxa best fits nesting and overwintering in the Arctic; supports endothermy and possibly insulation/feathers. Main challenge: directly demonstrating winter survival behaviour.",
      "Seasonal migration (older hypotheses, still relevant for some volant birds): large-bodied taxa might have migrated south; but the perinatal evidence makes wholesale migration of the dinosaur community unlikely."
    ],
    mostlyAgreed:[
      "Dinosaurs genuinely lived at high latitudes (Alaska's Prince Creek at 80–85°N; polar Australia; Antarctica).",
      "Cretaceous polar climates were far milder than today but still had prolonged winter darkness and near-freezing-to-cool mean temperatures.",
      "Multiple dinosaur groups nested in the Arctic.",
      "This supports elevated metabolism/endothermy in at least some clades."
    ],
    unresolved:[
      "Exactly how they coped with months of darkness and winter forage scarcity.",
      "The role of feathers/insulation in specific taxa.",
      "Whether any large taxa still migrated.",
      "Precise palaeotemperatures (estimates vary from near 0°C to ~12–15°C MAT)."
    ],
    direction:"Toward year-round residency and high-latitude reproduction as the default interpretation, and toward polar ecosystems as evidence for dinosaur endothermy.",
    cautiousReading:"Dinosaurs didn't just visit the poles - they lived there. Fossils of newly hatched dinosaurs from northern Alaska show that many species nested and raised young in an Arctic world with months of winter darkness, strongly implying year-round residency. Cretaceous polar regions were warmer than today's but still cold and dark for much of the year, so this resilience supports the view that at least some dinosaurs were warm-blooded. Exactly how they endured the dark winters is still being worked out.",
    linkedSpecies:["cryolophosaurus","edmontosaurus","tyrannosaurus","nanuqsaurus"],
    papers:[
      {authors:"Druckenmiller et al.",year:"2021",title:"Nesting at extreme polar latitudes by non-avian dinosaurs",source:"Current Biology",doi:"10.1016/j.cub.2021.05.041",type:"Primary paper",note:"Perinatal/neonate fossils of ~7 dinosaur groups from Prince Creek (80–85°N) indicate year-round Arctic residency and nesting."},
      {authors:"Wilson et al.",year:"2025",title:"Arctic bird nesting traces back to the Cretaceous",source:"Science",doi:"10.1126/science.adt5189",type:"Primary paper",note:"Earliest evidence of birds nesting at polar latitudes, alongside the dinosaurs at Prince Creek (~72.8 Ma)."}
    ]
  },
  {
    id:"cretaceous-sauropods",number:"07",title:"Cretaceous Sauropods",
    subtitle:"Where did the sauropods go?",
    hook:"Sauropods never really left - you just have to look at the right continent.",
    summary:"\"Sauropods disappeared in the Cretaceous\" is a myth born of looking at the wrong continent. In the southern landmasses - South America, Africa, India - sauropods flourished as titanosaurs right to the end of the age of dinosaurs. The northern gap is regional and partly a sampling effect.",
    status:["Biogeographic puzzle","Popularly misunderstood"],categories:["Biogeography & ecology"],activeness:2,
    evidence:["fossil distribution","stratigraphy","sedimentology","phylogenetics","palaeoclimate"],
    question:"Why do sauropods seem rare or absent in some Late Cretaceous northern ecosystems, when they remained abundant elsewhere - and is 'sauropods disappeared' even true?",
    whyItMatters:"This is a model case of how regional fossil patterns get mistaken for global events, and of how continental drift, climate, and sampling combine to shape what we find. It corrects a common public misconception.",
    changedRecently:"Improved global sampling, better dating, and biogeographic modelling have reframed the old North American 'sauropod hiatus.' It's increasingly read as a sampling/facies artefact plus genuine regional ecological turnover - not a worldwide sauropod collapse. The 2022 climate-modelling work refined the question of where Alamosaurus came from.",
    competingInterpretations:[
      "Sampling/facies artefact (Mannion & Upchurch): the mid-Cretaceous northern 'gap' reflects under-preserved inland habitats, not real absence. Explains the abrupt reappearance of Alamosaurus; harder to fully prove a negative.",
      "Genuine regional turnover + re-immigration: sauropods did become genuinely scarce in parts of Laurasia (possibly competition with ornithischian herbivores, Western Interior Seaway habitat loss), with Alamosaurus arriving later via dispersal. Debate continues over whether Alamosaurus came from South America or Asia."
    ],
    mostlyAgreed:[
      "Sauropods (titanosaurs) remained diverse and abundant through the Cretaceous in Gondwana (South America, Africa, India).",
      "The North American 'absence' is regional and partly a sampling effect.",
      "Alamosaurus shows sauropods were present in latest-Cretaceous North America.",
      "'Sauropods disappeared in the Cretaceous' is wrong globally."
    ],
    unresolved:[
      "How much of the northern gap is sampling vs. genuine ecological absence.",
      "Alamosaurus's dispersal route and origin (South America vs. Asia).",
      "The relative roles of competition, climate, and seaway-driven habitat change."
    ],
    direction:"Toward regional/ecological and sampling-aware explanations, and away from any 'global sauropod decline' framing.",
    cautiousReading:"Sauropods didn't vanish in the Cretaceous - in the southern continents they flourished as titanosaurs right to the end. The impression of disappearance comes mainly from North America and Europe. How much of that northern gap reflects genuinely thin sauropod populations versus simply poorly preserved inland habitats is still debated. Technically, this is a story about titanosaurs at a regional scale, not the whole sauropodomorph lineage.",
    linkedSpecies:["argentinosaurus","diplodocus","brachiosaurus","magyarosaurus","plateosaurus","dreadnoughtus"],
    papers:[
      {authors:"Mannion & Upchurch",year:"2010",title:"A re-evaluation of the 'mid-Cretaceous sauropod hiatus'",source:"Palaeogeography, Palaeoclimatology, Palaeoecology",doi:"10.1016/j.palaeo.2010.12.003",type:"Primary paper",note:"Argues the North American/European 'hiatus' reflects sampling bias (rarity of inland sediments), not true extinction."},
      {authors:"Chiarenza et al.",year:"2022",title:"Climatic constraints on the biogeographic history of Mesozoic dinosaurs",source:"Current Biology",doi:"10.1016/j.cub.2021.11.061",type:"Primary paper",note:"Models how climate limited sauropod distributions and bears on Alamosaurus's dispersal route."}
    ]
  },
  {
    id:"pre-asteroid-decline",number:"08",title:"Pre-Asteroid Decline",
    subtitle:"Were non-avian dinosaurs declining before the asteroid?",
    hook:"Thriving, or already fading, when the asteroid hit? The data fight back.",
    summary:"Whether dinosaurs were fading before the asteroid is one of palaeontology's most contested questions, and the answer depends heavily on which data and methods you trust. What's not in doubt is that the Chicxulub impact was the decisive blow. 'They were doomed anyway' is far too simple.",
    status:["Active debate"],categories:["Extinction & macroevolution"],activeness:4,
    evidence:["fossil distribution","stratigraphy","phylogenetic datasets","sampling bias"],
    question:"Were non-avian dinosaurs already in global diversity decline before the Chicxulub impact, or were they thriving up to the boundary?",
    whyItMatters:"The answer bears on whether the extinction was a 'bad luck' sudden event striking a healthy group, or the coup de grâce to an already-faltering one - and on how much we can trust diversity counts drawn from an uneven rock record.",
    changedRecently:"A genuine back-and-forth: Sakamoto et al. (2016) and Condamine et al. (2021) reported decline; Bonsor et al. (2020) and the Chiarenza group argued the apparent decline is an artefact of sampling/rock-record bias, with formal rebuttals exchanged. A 2024 phylodynamics paper concludes the question can't yet be resolved with current models.",
    competingInterpretations:[
      "Decline: explains apparent drops in speciation in several families and possible ecological/environmental stressors (sea-level change, cooling, vegetation shifts). Struggles to separate a real biological signal from uneven sampling and dating resolution.",
      "No decline: explains the data as largely sampling-driven, noting dinosaurs were globally widespread and ecologically diverse at the boundary. Struggles to fully exclude clade- or region-specific declines."
    ],
    mostlyAgreed:[
      "The Chicxulub impact occurred and was the principal driver of the extinction.",
      "The rock record is uneven and biases raw diversity counts.",
      "Signals differ between clades and regions (the well-sampled North American record is not automatically global)."
    ],
    unresolved:[
      "Whether there was a real global diversity decline before the impact.",
      "How to disentangle biological signal from sampling/dating artefacts.",
      "Whether any decline was clade-specific (e.g., certain herbivores) rather than dinosaur-wide.",
      "The role, if any, of Deccan volcanism as a stressor."
    ],
    direction:"Toward regional and clade-level resolution and toward method caution - away from a single 'all dinosaurs were/weren't declining' verdict, and toward asking which groups, where, and how confidently we can even tell.",
    cautiousReading:"Whether dinosaurs were fading before the asteroid is one of palaeontology's most contested questions. Some analyses find declining diversification in major families during the last ~10 million years of the Cretaceous; others find no real decline once the patchiness of the rock record is accounted for. What's not in doubt is that the impact was the decisive blow. 'They were doomed anyway' is far too simple: any pre-impact decline, if real, was regional and clade-dependent, not a uniform slide to oblivion.",
    linkedSpecies:["tyrannosaurus","triceratops","edmontosaurus","ankylosaurus"],
    papers:[
      {authors:"Sakamoto et al.",year:"2016",title:"Dinosaurs in decline tens of millions of years before their final extinction",source:"PNAS",doi:"10.1073/pnas.1521478113",type:"Primary paper",note:"Found declining speciation rate in major dinosaur clades."},
      {authors:"Condamine et al.",year:"2021",title:"Dinosaur biodiversity declined well before the asteroid impact",source:"Nature Communications",doi:"10.1038/s41467-021-23754-0",type:"Primary paper",note:"Found declining diversification in six major families from ~76 Ma using 1,600+ records."},
      {authors:"Bonsor et al.",year:"2020",title:"Dinosaur diversification rates were not in decline prior to the K-Pg boundary",source:"Royal Society Open Science",doi:"10.1098/rsos.201195",type:"Primary paper",note:"Argued the apparent decline is an artefact of sampling and rock-record bias."}
    ]
  },
  {
    id:"family-tree",number:"09",title:"Dinosaur Family Tree",
    subtitle:"Why does it keep changing?",
    hook:"When the tree gets redrawn, the science is working - not failing.",
    summary:"The dinosaur family tree keeps getting redrawn because that's how phylogenetics works. The 2017 'Ornithoscelida' proposal - grouping theropods with ornithischians - startled the field. Although not widely adopted after rebuttals, it exposed how thin the support for the traditional arrangement was at the deepest branches.",
    status:["Active debate","Methods & evidence"],categories:["Taxonomy & growth"],activeness:4,
    evidence:["phylogenetic datasets","anatomy","computational methods"],
    question:"Why do the deep branches of the dinosaur family tree keep getting rearranged, and does that instability mean the science is failing?",
    whyItMatters:"The tree underlies almost everything else - how traits evolved, when groups arose, how we name them. Understanding why it shifts teaches how phylogenetics actually works and why revision is a sign of health, not failure.",
    changedRecently:"Baron et al. (2017) detonated a 130-year-old consensus by uniting theropods and ornithischians; Langer et al. (2017) rebutted it with rescoring; subsequent work (2023–2024) shows the deep tree is genuinely poorly resolved - multiple topologies are statistically close, and 'wildcard' Triassic taxa keep shifting position.",
    competingInterpretations:[
      "Traditional Saurischia + Ornithischia (Seeley 1887; Langer et al. 2017): long-standing, broadly supported; the current default. Some early taxa remain awkward to place.",
      "Ornithoscelida (Baron et al. 2017): a well-constructed large dataset that reopened the question. Not widely accepted after rebuttals and rescoring, but it demonstrated the consensus was less secure than assumed."
    ],
    mostlyAgreed:[
      "Dinosauria is a real, single clade.",
      "The three big groups (theropods, sauropodomorphs, ornithischians) exist.",
      "The relationships among those three at the very base are not securely resolved.",
      "Early/Triassic taxa (herrerasaurids, Pisanosaurus) are hard to place."
    ],
    unresolved:[
      "Whether the basal split is Saurischia/Ornithischia, Ornithoscelida, or another arrangement.",
      "The position of herrerasaurids and several Triassic taxa.",
      "How to handle character-scoring subjectivity and convergence.",
      "The geographic origin of dinosaurs."
    ],
    direction:"Toward explicit acknowledgement of uncertainty and better statistical methods for measuring it - not toward a single settled tree. New Triassic fossils are the most likely tiebreakers.",
    cautiousReading:"The dinosaur family tree keeps changing because that's how phylogenetics works: each new fossil and each reanalysis of anatomical data can tip finely balanced results. The big groups themselves are secure; it's their relationships right at the root, and the placement of a few troublesome Triassic species, that stay unresolved. Shifting trees reflect a self-correcting science, not a broken one.",
    linkedSpecies:["eoraptor","herrerasaurus","plateosaurus","archaeopteryx","triceratops","diplodocus","postosuchus","brontosaurus"],
    papers:[
      {authors:"Baron et al.",year:"2017",title:"A new hypothesis of dinosaur relationships and early dinosaur evolution",source:"Nature",doi:"10.1038/nature21700",type:"Primary paper",note:"Proposed Ornithoscelida (Theropoda + Ornithischia), challenging the 130-year Saurischia/Ornithischia split."},
      {authors:"Langer et al.",year:"2017",title:"Untangling the dinosaur family tree",source:"Nature",doi:"10.1038/nature24011",type:"Primary paper",note:"Reanalysis recovering the traditional Saurischia and a Gondwanan origin; major rebuttal."},
      {authors:"Baron",year:"2024",title:"Untangling the tree or unravelling the consensus? Recent developments in the quest to resolve the broad-scale relationships within Dinosauria",source:"Journal of Systematic Palaeontology",doi:"10.1080/14772019.2024.2345333",type:"Review",note:"Reviews where the debate stands; notes Ornithoscelida is not widely accepted but the basal tree remains genuinely uncertain."}
    ]
  },
  {
    id:"soft-tissue",number:"10",title:"Soft Tissue",
    subtitle:"What really survives in fossils?",
    hook:"Real dinosaur tissue exists - but not the kind that could rebuild one.",
    summary:"\"Soft tissue in dinosaurs\" covers very different things. Melanin pigments and fine mineral replicas of skin and tissue are genuinely preserved. Flexible vessel- and cell-like structures, and especially claimed original proteins like collagen, are far more contested. Original dinosaur DNA has never been recovered and, given how fast DNA decays, is not expected to survive - so Jurassic Park-style cloning is not realistic.",
    status:["Active debate","Method frontier"],categories:["Methods & evidence"],activeness:4,
    evidence:["soft tissue","melanosomes","geochemistry","histology"],
    question:"What kinds of 'soft tissue' actually survive in dinosaur fossils - original biomolecules, altered remnants, or mineral replicas - and how should we interpret such claims?",
    whyItMatters:"Soft-tissue claims touch on the deepest limits of preservation, the reliability of molecular palaeontology, and persistent public misconceptions (including the 'Jurassic Park' idea that dinosaur DNA could be recovered).",
    changedRecently:"After Schweitzer's 2005 claims and 2014 iron-preservation hypothesis, the conversation has split: replication efforts (2017 Brachylophosaurus collagen) versus contamination/biofilm critiques (Saitta 2019; the 2017 ostrich-control study). The frontier has moved toward more robust preservation chemistry (cross-linking) and toward stricter contamination controls.",
    competingInterpretations:[
      "Endogenous biomolecules survive (Schweitzer et al.): explains repeated detection of collagen-like signals and vessel/cell structures; proposes iron and molecular cross-linking as stabilising mechanisms. Struggles to explain how proteins persist tens of millions of years against measured decay rates.",
      "Contamination / altered remnants (Saitta et al.): explains the difficulty of ruling out microbial biofilm and modern cross-contamination; consistent with known decay kinetics. Struggles to account for some specific, repeated sequence detections claimed by the Schweitzer group."
    ],
    mostlyAgreed:[
      "Melanosomes and melanin survive in exceptional specimens.",
      "Many 'soft tissue' and 'mummy' finds are mineral replicas of original tissue, not organic remains.",
      "Original dinosaur DNA has not been recovered and is not expected to survive given DNA's measured half-life.",
      "Distinguishing endogenous molecules from contamination is a real, hard problem."
    ],
    unresolved:[
      "Whether original proteins (e.g., collagen fragments) genuinely survive on dinosaur timescales.",
      "The actual preservation mechanism if they do.",
      "How to definitively exclude microbial and laboratory contamination.",
      "What the vessel-like and cell-like structures actually are."
    ],
    direction:"Toward method caution and stricter controls - distinguishing what is securely preserved (melanin, mineral replicas) from contested claims (endogenous protein), and firmly ruling out viable ancient DNA.",
    cautiousReading:"\"Soft tissue in dinosaurs\" covers very different things, and the differences matter. Melanin pigments and the fine mineral replicas of skin and tissue are genuinely preserved. Flexible vessel- and cell-like structures, and especially claimed original proteins like collagen, are far more contested. What's clear is that original dinosaur DNA has never been recovered and, given how fast DNA decays, is not expected to survive - so Jurassic Park-style cloning is not realistic. This remains an active, careful, evidence-by-evidence field.",
    linkedSpecies:["tyrannosaurus","edmontosaurus","anchiornis","sinosauropteryx","microraptor","archaeopteryx","psittacosaurus","wulong"],
    papers:[
      {authors:"Schweitzer et al.",year:"2005",title:"Soft-tissue vessels and cellular preservation in Tyrannosaurus rex",source:"Science",doi:"10.1126/science.1108397",type:"Primary paper",note:"Reported flexible vessel-like and cellular structures in a T. rex femur."},
      {authors:"Schweitzer et al.",year:"2014",title:"A role for iron and oxygen chemistry in preserving soft tissues, cells and molecules from deep time",source:"Proceedings of the Royal Society B",doi:"10.1098/rspb.2013.2741",type:"Primary paper",note:"Proposed an iron-based preservation mechanism."},
      {authors:"Saitta et al.",year:"2019",title:"Cretaceous dinosaur bone contains recent organic material and provides an environment conducive to microbial communities",source:"eLife",doi:"10.7554/eLife.46205",type:"Primary paper",note:"Argues much 'soft tissue' reflects modern microbial biofilm/contamination."},
      {authors:"Allentoft et al.",year:"2012",title:"The half-life of DNA in bone: measuring decay kinetics in 158 dated fossils",source:"Proceedings of the Royal Society B",doi:"10.1098/rspb.2012.1745",type:"Review",note:"Established DNA's ~521-year half-life, implying it cannot survive on dinosaur timescales."}
    ]
  }
];
