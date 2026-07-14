#!/usr/bin/env node
/* ============================================================
   BUILD CONTENT INDEX
   Reads every content source on the site and flattens it into
   one flat array of searchable chunks for the future chatbot
   (content-index.json). Local-only, read-only against the
   source files; writes a single JSON output file. No network
   calls, no API keys.

   Run: node build-content-index.js
   ============================================================ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;

/* ---- load every data file into one shared sandbox context ---- */
const ctx = {};
ctx.window = ctx; // glossary.js assigns to window.GLOSSARY_TERMS
// glossary.js ends with a browser-only DOMContentLoaded init block; stub
// just enough of `document` for that tail code to no-op harmlessly.
ctx.document = {
  readyState: 'complete',
  querySelector: function () { return null; },
  addEventListener: function () {}
};
vm.createContext(ctx);

const DATA_FILES = [
  'species.js', 'glossary.js', 'research-cases.js', 'fossil-hunters.js',
  'last-day.js', 'anatomy-101.js', 'mass-extinctions.js',
  'mesozoic-ecosystems.js', 'theropods-to-birds.js', 'hpw-content.js'
];
for (const f of DATA_FILES) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
}

/* ---- HTML-stripping helper ---- */
function stripHtml(input) {
  if (!input) return '';
  return String(input)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&middot;/g, '·')
    .replace(/&rarr;/g, '→')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/\s+/g, ' ')
    .trim();
}

function joinText(parts) {
  return parts.filter(Boolean).map(p => stripHtml(p)).filter(Boolean).join(' ');
}

/* conf-strong/conf-moderate/conf-low -> strong/moderate/low */
function normConf(c) {
  if (!c) return null;
  const m = String(c).match(/(strong|moderate|low)/);
  return m ? m[1] : null;
}

const chunks = [];
function push(chunk) {
  if (!chunk.text || !chunk.text.trim()) {
    console.warn('SKIPPED (empty text):', chunk.id);
    return;
  }
  chunks.push(chunk);
}

/* ============================================================
   SPECIES.js
   ============================================================ */
for (const s of ctx.SPECIES) {
  push({
    id: `species:${s.id}:profile`,
    sourceFile: 'species.js',
    sourceType: 'species',
    title: `${s.name} — overview`,
    text: joinText([
      s.overview,
      ...(s.insights || []).map(([t, b]) => `${t}: ${b}`),
      s.behaviour, s.evolution, s.matters
    ]),
    confidence: null,
    citeId: s.id
  });

  if (s.fossilRecord) {
    const fr = s.fossilRecord;
    push({
      id: `species:${s.id}:fossil-record`,
      sourceFile: 'species.js',
      sourceType: 'species',
      title: `${s.name} — fossil record`,
      text: joinText([
        fr.knownFrom, fr.evidenceLevel ? `Evidence level: ${fr.evidenceLevel}.` : null,
        fr.locality, fr.formation,
        (fr.material || []).length ? `Material: ${fr.material.join(', ')}.` : null,
        fr.note
      ]),
      confidence: null,
      citeId: s.id
    });
  }

  (s.study || []).forEach((entry, i) => {
    const confs = (entry.interps || []).map(([, conf]) => normConf(conf));
    const uniqueConfs = [...new Set(confs.filter(Boolean))];
    const chunkConf = uniqueConfs.length === 1 ? uniqueConfs[0] : null;
    push({
      id: `species:${s.id}:study:${i}`,
      sourceFile: 'species.js',
      sourceType: 'species',
      title: `${s.name} — ${stripHtml(entry.q)}`,
      text: joinText([
        entry.q, entry.why,
        ...(entry.interps || []).map(([label, conf, text]) => `${label} (${normConf(conf) || 'unrated'} confidence): ${text}`)
      ]),
      confidence: chunkConf,
      citeId: s.id
    });
  });
}

/* ============================================================
   GLOSSARY.js
   ============================================================ */
for (const g of ctx.GLOSSARY_TERMS) {
  push({
    id: `glossary:${g.id}`,
    sourceFile: 'glossary.js',
    sourceType: 'glossary',
    title: g.term,
    text: joinText([g.simpleDefinition, g.scientificExplanation, g.whyItMatters, g.dinodexContext]),
    confidence: null,
    citeId: g.id
  });
}

/* ============================================================
   RESEARCH-CASES.js
   ============================================================ */
for (const c of ctx.RESEARCH_CASES) {
  push({
    id: `research-case:${c.id}:overview`,
    sourceFile: 'research-cases.js',
    sourceType: 'research-case',
    title: `${c.title} — ${c.subtitle || 'overview'}`,
    text: joinText([c.hook, c.summary, c.whyItMatters]),
    confidence: null,
    citeId: c.id
  });

  if ((c.mostlyAgreed || []).length) {
    push({
      id: `research-case:${c.id}:mostly-agreed`,
      sourceFile: 'research-cases.js',
      sourceType: 'research-case',
      title: `${c.title} — what's mostly agreed`,
      text: joinText(c.mostlyAgreed),
      confidence: 'strong',
      citeId: c.id
    });
  }

  if ((c.competingInterpretations || []).length) {
    push({
      id: `research-case:${c.id}:competing-interpretations`,
      sourceFile: 'research-cases.js',
      sourceType: 'research-case',
      title: `${c.title} — competing interpretations`,
      text: joinText(c.competingInterpretations),
      confidence: 'moderate',
      citeId: c.id
    });
  }

  if ((c.unresolved || []).length) {
    push({
      id: `research-case:${c.id}:unresolved`,
      sourceFile: 'research-cases.js',
      sourceType: 'research-case',
      title: `${c.title} — unresolved`,
      text: joinText(c.unresolved),
      confidence: 'low',
      citeId: c.id
    });
  }
}

/* ============================================================
   FOSSIL-HUNTERS.js
   ============================================================ */
for (const p of ctx.PEOPLE) {
  push({
    id: `fossil-hunter:${p.id}`,
    sourceFile: 'fossil-hunters.js',
    sourceType: 'fossil-hunter',
    title: p.name,
    text: joinText([
      p.oneLineHook, p.knownFor,
      p.modal && p.modal.person, p.modal && p.modal.discovery,
      p.modal && p.modal.ideaChanged, p.modal && p.modal.messyBit,
      p.modal && p.modal.legacyInDinodex
    ]),
    confidence: null,
    citeId: p.id
  });
}

/* ============================================================
   LAST-DAY.js — one chunk per chapter
   ============================================================ */
for (const ch of ctx.LAST_DAY_CHAPTERS) {
  push({
    id: `last-day:${ch.id}`,
    sourceFile: 'last-day.js',
    sourceType: 'last-day',
    title: ch.title,
    text: joinText([
      ch.kicker, ch.time, ch.body,
      ...(ch.facts || []).map(f => `${f.k}: ${f.v}.`),
      ...(ch.chain || []).map(c => `${c.num}. ${c.label}: ${c.desc}`),
      ch.afterHTML
    ]),
    confidence: null,
    citeId: 'last-day'
  });
}

/* ============================================================
   HPW-CONTENT.js — already pre-chunked in Phase 0a
   ============================================================ */
for (const item of ctx.HPW_CONTENT) {
  push({
    id: `hpw:${item.id}`,
    sourceFile: 'hpw-content.js',
    sourceType: 'hpw',
    title: item.heading,
    text: item.text,
    confidence: item.confidence || null,
    citeId: item.view
  });
}

/* ============================================================
   ANATOMY-101.js — loose ANAT_* vars, correction-vs-hedge applied
   ============================================================ */
{
  const A = ctx;
  push({
    id: 'anatomy-101:hook',
    sourceFile: 'anatomy-101.js', sourceType: 'anatomy-101',
    title: 'Anatomy 101 — hook',
    text: joinText([A.ANAT_HOOK_TEXT]), confidence: null, citeId: 'anatomy-101'
  });
  push({
    id: 'anatomy-101:skeleton-basics',
    sourceFile: 'anatomy-101.js', sourceType: 'anatomy-101',
    title: 'Skeleton basics — axial and appendicular',
    text: joinText([
      A.ANAT_SKELETON_INTRO, A.ANAT_SKELETON_POSTURE,
      ...(A.ANAT_SKELETON_LEGEND || []).map(l => `${l.label}: ${l.detail}.`)
    ]),
    confidence: null, citeId: 'anatomy-101'
  });
  push({
    id: 'anatomy-101:hip-divide',
    sourceFile: 'anatomy-101.js', sourceType: 'anatomy-101',
    title: 'The hip divide — Saurischia and Ornithischia',
    text: joinText([
      A.ANAT_HIP_INTRO,
      A.ANAT_HIP_SAURISCHIAN && `${A.ANAT_HIP_SAURISCHIAN.clade}: ${A.ANAT_HIP_SAURISCHIAN.detail}`,
      A.ANAT_HIP_ORNITHISCHIAN && `${A.ANAT_HIP_ORNITHISCHIAN.clade}: ${A.ANAT_HIP_ORNITHISCHIAN.detail}`,
      A.ANAT_HIP_BIRD_NOTE
    ]),
    confidence: null, citeId: 'anatomy-101'
  });
  if (A.ANAT_HIP_ISCHIOTRUNCUS_HYPOTHESIS) {
    push({
      id: 'anatomy-101:hip-ischiotruncus-hypothesis',
      sourceFile: 'anatomy-101.js', sourceType: 'anatomy-101',
      title: 'Why the pubis rotated backward — the ischiotruncus hypothesis',
      text: joinText([A.ANAT_HIP_ISCHIOTRUNCUS_HYPOTHESIS]),
      confidence: 'moderate', citeId: 'anatomy-101'
    });
  }
  push({
    id: 'anatomy-101:muscles-soft-tissue',
    sourceFile: 'anatomy-101.js', sourceType: 'anatomy-101',
    title: 'Muscles and soft tissue — the caudofemoralis longus',
    text: joinText([
      A.ANAT_MUSCLE_INTRO,
      A.ANAT_MUSCLE_ROMER_CORRECTION && A.ANAT_MUSCLE_ROMER_CORRECTION.body,
      A.ANAT_MUSCLE_TREX_FIGURE, A.ANAT_MUSCLE_BIRD_LINK
    ]),
    confidence: null, citeId: 'anatomy-101'
  });
  push({
    id: 'anatomy-101:skull-teeth',
    sourceFile: 'anatomy-101.js', sourceType: 'anatomy-101',
    title: 'Skull and teeth',
    text: joinText([A.ANAT_SKULL_INTRO, A.ANAT_TEETH_TREX, A.ANAT_TEETH_TRICERATOPS]),
    confidence: null, citeId: 'anatomy-101'
  });
  push({
    id: 'anatomy-101:posture-locomotion',
    sourceFile: 'anatomy-101.js', sourceType: 'anatomy-101',
    title: 'Posture and locomotion',
    text: joinText([
      A.ANAT_POSTURE_TREX, A.ANAT_POSTURE_TRICERATOPS,
      A.ANAT_POSTURE_TRICERATOPS_REVISION && A.ANAT_POSTURE_TRICERATOPS_REVISION.body
    ]),
    confidence: null, citeId: 'anatomy-101'
  });
}

/* ============================================================
   MASS-EXTINCTIONS.js — loose MASSEXT_* vars
   ============================================================ */
{
  const M = ctx;
  push({
    id: 'mass-extinctions:hook',
    sourceFile: 'mass-extinctions.js', sourceType: 'mass-extinctions',
    title: 'Mass Extinctions — hook',
    text: joinText([M.MASSEXT_HOOK_TEXT]), confidence: null, citeId: 'mass-extinctions'
  });

  const ep = M.MASSEXT_END_PERMIAN;
  if (ep) {
    push({
      id: 'mass-extinctions:end-permian',
      sourceFile: 'mass-extinctions.js', sourceType: 'mass-extinctions',
      title: 'The end-Permian extinction',
      text: joinText([`Date: ${ep.date}.`, `Loss: ${ep.lossHeadline}.`, ep.body, ep.bodyBefore]),
      confidence: null, citeId: 'mass-extinctions'
    });
    push({
      id: 'mass-extinctions:end-permian:kill-mechanism',
      sourceFile: 'mass-extinctions.js', sourceType: 'mass-extinctions',
      title: 'End-Permian extinction — the kill mechanism debate',
      text: joinText([ep.bodyMechanism, ep.confidenceNote]),
      confidence: 'moderate', citeId: 'mass-extinctions'
    });
  }

  const et = M.MASSEXT_END_TRIASSIC;
  if (et) {
    push({
      id: 'mass-extinctions:end-triassic',
      sourceFile: 'mass-extinctions.js', sourceType: 'mass-extinctions',
      title: 'The end-Triassic extinction',
      text: joinText([`Date: ${et.date}.`, `Loss: ${et.lossHeadline}.`, et.body, et.bodyRemoved, et.documentaryAside]),
      confidence: null, citeId: 'mass-extinctions'
    });
    if (et.hypothesis) {
      push({
        id: 'mass-extinctions:end-triassic:insulation-hypothesis',
        sourceFile: 'mass-extinctions.js', sourceType: 'mass-extinctions',
        title: `End-Triassic extinction — ${et.hypothesis.label}`,
        text: joinText([et.hypothesis.text]),
        confidence: 'moderate', citeId: 'mass-extinctions'
      });
    }
  }

  const kpg = M.MASSEXT_KPG_RECAP;
  if (kpg) {
    push({
      id: 'mass-extinctions:kpg-recap',
      sourceFile: 'mass-extinctions.js', sourceType: 'mass-extinctions',
      title: 'K-Pg extinction — brief recap',
      text: joinText([`Date: ${kpg.date}.`, `Loss: ${kpg.lossHeadline}.`, kpg.body]),
      confidence: null, citeId: 'mass-extinctions'
    });
  }

  if ((M.MASSEXT_SEVERITY_BARS || []).length) {
    push({
      id: 'mass-extinctions:severity-comparison',
      sourceFile: 'mass-extinctions.js', sourceType: 'mass-extinctions',
      title: 'Comparing severity across the three events',
      text: joinText([
        M.MASSEXT_SEVERITY_FRAMING,
        ...M.MASSEXT_SEVERITY_BARS.map(b => `${b.label} (${b.date}): ${b.detail}.`)
      ]),
      confidence: null, citeId: 'mass-extinctions'
    });
  }
}

/* ============================================================
   MESOZOIC-ECOSYSTEMS.js — loose ME2_* vars
   ============================================================ */
{
  const E = ctx;
  push({
    id: 'mesozoic-ecosystems:hook-timeline',
    sourceFile: 'mesozoic-ecosystems.js', sourceType: 'mesozoic-ecosystems',
    title: 'Mesozoic Ecosystems — the flower and grass timeline',
    text: joinText([
      E.ME2_HOOK_TEXT,
      ...(E.ME2_TIMELINE_POINTS || []).map(pt => `${pt.label} (${pt.maRangeLabel || pt.ma + ' Ma'}): ${pt.note}`),
      E.ME2_TIMELINE_AFTER && `${E.ME2_TIMELINE_AFTER.label}: ${E.ME2_TIMELINE_AFTER.note}`
    ]),
    confidence: null, citeId: 'mesozoic-ecosystems'
  });
  if (E.ME2_TIMELINE_REVISION_NOTE) {
    push({
      id: 'mesozoic-ecosystems:timeline-revision-note',
      sourceFile: 'mesozoic-ecosystems.js', sourceType: 'mesozoic-ecosystems',
      title: 'Mesozoic Ecosystems — the grass-timeline is still being revised',
      text: joinText([E.ME2_TIMELINE_REVISION_NOTE]),
      confidence: 'moderate', citeId: 'mesozoic-ecosystems'
    });
  }
  push({
    id: 'mesozoic-ecosystems:frame',
    sourceFile: 'mesozoic-ecosystems.js', sourceType: 'mesozoic-ecosystems',
    title: 'Mesozoic Ecosystems — frame',
    text: joinText([E.ME2_FRAME_TEXT]), confidence: null, citeId: 'mesozoic-ecosystems'
  });
  push({
    id: 'mesozoic-ecosystems:climate',
    sourceFile: 'mesozoic-ecosystems.js', sourceType: 'mesozoic-ecosystems',
    title: 'Climate across the Triassic, Jurassic and Cretaceous',
    text: joinText([
      E.ME2_CLIMATE_ICE_NOTE,
      ...(E.ME2_CLIMATE_CARDS || []).map(c => `${c.period}: CO2 ${c.co2}; sea level ${c.seaLevel}. ${c.character}`)
    ]),
    confidence: null, citeId: 'mesozoic-ecosystems'
  });
  if (E.ME2_CLIMATE_CONFIDENCE_NOTE) {
    // A named hedge field (confidenceNote, hypothesis, etc.) should only
    // trigger a confidence tag when the uncertainty is about whether the
    // claim itself holds - i.e. genuine scientific dispute or an unsettled
    // question. It should NOT trigger a tag when the hedge is only about
    // measurement precision on an otherwise-settled claim (e.g. "exact
    // figures vary between reconstruction methods," similar to a
    // radiometric date's error bars). The HPW dating tab's "±" framing is
    // the reference case for the untagged version of this;
    // ME2_CLIMATE_CONFIDENCE_NOTE is the reference case for what NOT to
    // tag - it is a precision caveat on CO2/sea-level figures, not a
    // dispute about the climate trends themselves.
    push({
      id: 'mesozoic-ecosystems:climate-confidence-note',
      sourceFile: 'mesozoic-ecosystems.js', sourceType: 'mesozoic-ecosystems',
      title: 'Climate figures — precision caveat',
      text: joinText([E.ME2_CLIMATE_CONFIDENCE_NOTE]),
      confidence: null, citeId: 'mesozoic-ecosystems'
    });
  }
  push({
    id: 'mesozoic-ecosystems:flora',
    sourceFile: 'mesozoic-ecosystems.js', sourceType: 'mesozoic-ecosystems',
    title: 'Flora — from gymnosperms to flowering plants',
    text: joinText([
      E.ME2_FLORA_INTRO, E.ME2_FLORA_REVOLUTION,
      E.ME2_FLORA_CORRECTION && E.ME2_FLORA_CORRECTION.body,
      E.ME2_FLORA_SETUP
    ]),
    confidence: null, citeId: 'mesozoic-ecosystems'
  });
  if (E.ME2_FOODWEB) {
    const fw = E.ME2_FOODWEB;
    push({
      id: 'mesozoic-ecosystems:foodweb',
      sourceFile: 'mesozoic-ecosystems.js', sourceType: 'mesozoic-ecosystems',
      title: `Food web — ${fw.formationName}`,
      text: joinText([
        fw.plantBase && `${fw.plantBase.label}: ${fw.plantBase.detail}`,
        ...(fw.nodes || []).map(n => `${n.id}: ${n.role}.`),
        fw.distinctionNote
      ]),
      confidence: null, citeId: 'mesozoic-ecosystems'
    });
    const documentedEdges = (fw.edges || []).filter(e => e.status === 'documented');
    if (documentedEdges.length) {
      push({
        id: 'mesozoic-ecosystems:foodweb-documented',
        sourceFile: 'mesozoic-ecosystems.js', sourceType: 'mesozoic-ecosystems',
        title: `Food web — ${fw.formationName} — documented predation evidence`,
        text: joinText([
          fw.documentedEvidenceNote,
          ...documentedEdges.map(e => `${e.from} → ${e.to}: ${e.evidence}`),
          fw.extraNote
        ]),
        confidence: 'strong', citeId: 'mesozoic-ecosystems'
      });
    }
    const inferredEdges = (fw.edges || []).filter(e => e.status === 'inferred');
    if (inferredEdges.length) {
      push({
        id: 'mesozoic-ecosystems:foodweb-inferred',
        sourceFile: 'mesozoic-ecosystems.js', sourceType: 'mesozoic-ecosystems',
        title: `Food web — ${fw.formationName} — inferred (undocumented) predation links`,
        text: joinText(inferredEdges.map(e => `${e.from} → ${e.to}: ${e.evidence}`)),
        confidence: 'low', citeId: 'mesozoic-ecosystems'
      });
    }
  }
}

/* ============================================================
   THEROPODS-TO-BIRDS.js — loose TTB_* vars
   ============================================================ */
{
  const T = ctx;
  push({
    id: 'theropods-to-birds:hook',
    sourceFile: 'theropods-to-birds.js', sourceType: 'theropods-to-birds',
    title: 'Theropods to Birds — hook',
    text: joinText([T.TTB_HOOK]), confidence: null, citeId: 'theropods-to-birds'
  });

  (T.TTB_SKELETON && T.TTB_SKELETON.callouts || []).forEach(co => {
    push({
      id: `theropods-to-birds:skeleton-${co.id}`,
      sourceFile: 'theropods-to-birds.js', sourceType: 'theropods-to-birds',
      title: `Shared skeleton — ${co.feature}`,
      text: joinText([co.text, co.confidenceNote && `(${co.confidenceNote})`]),
      confidence: normConf(co.confidence), citeId: 'theropods-to-birds'
    });
  });

  if (T.TTB_CLADOGRAM) {
    const cl = T.TTB_CLADOGRAM;
    push({
      id: 'theropods-to-birds:cladogram-backbone',
      sourceFile: 'theropods-to-birds.js', sourceType: 'theropods-to-birds',
      title: 'Family tree — backbone lineage',
      text: joinText((cl.backbone || []).map(n => n.trait ? `${n.label}: ${n.trait}` : n.label)),
      confidence: null, citeId: 'theropods-to-birds'
    });
    (cl.tips || []).forEach(tip => {
      push({
        id: `theropods-to-birds:cladogram-tip-${tip.speciesId}`,
        sourceFile: 'theropods-to-birds.js', sourceType: 'theropods-to-birds',
        title: `Family tree — ${tip.speciesId}`,
        text: joinText([tip.note, tip.confidenceNote && `(${tip.confidenceNote})`]),
        confidence: normConf(tip.confidence), citeId: 'theropods-to-birds'
      });
    });
    if (cl.stillUnderStudy) {
      push({
        id: 'theropods-to-birds:cladogram-still-under-study',
        sourceFile: 'theropods-to-birds.js', sourceType: 'theropods-to-birds',
        title: `Family tree — ${cl.stillUnderStudy.title}`,
        text: joinText([cl.stillUnderStudy.text]),
        confidence: 'moderate', citeId: 'theropods-to-birds'
      });
    }
    if (cl.wildcard) {
      push({
        id: 'theropods-to-birds:cladogram-wildcard',
        sourceFile: 'theropods-to-birds.js', sourceType: 'theropods-to-birds',
        title: `Family tree — ${cl.wildcard.title}`,
        text: joinText([cl.wildcard.text]),
        confidence: 'low', citeId: 'theropods-to-birds'
      });
    }
  }

  (T.TTB_WHAT_WAS_IT_FOR || []).forEach(card => {
    if (card.isStudy) {
      const confs = (card.interps || []).map(i => normConf(i.conf));
      const uniqueConfs = [...new Set(confs.filter(Boolean))];
      push({
        id: `theropods-to-birds:what-was-it-for-${card.id}`,
        sourceFile: 'theropods-to-birds.js', sourceType: 'theropods-to-birds',
        title: card.lead,
        text: joinText([
          card.q, card.why,
          ...(card.interps || []).map(i => `${i.label} (${normConf(i.conf) || 'unrated'} confidence): ${i.text}`)
        ]),
        confidence: uniqueConfs.length === 1 ? uniqueConfs[0] : null,
        citeId: 'theropods-to-birds'
      });
    } else {
      push({
        id: `theropods-to-birds:what-was-it-for-${card.id}`,
        sourceFile: 'theropods-to-birds.js', sourceType: 'theropods-to-birds',
        title: card.lead,
        text: joinText([card.body]),
        confidence: null, citeId: 'theropods-to-birds'
      });
    }
  });

  (T.TTB_FEATURE_STRIP || []).forEach(f => {
    push({
      id: `theropods-to-birds:feature-strip-${f.id}`,
      sourceFile: 'theropods-to-birds.js', sourceType: 'theropods-to-birds',
      title: `Timeline — ${f.feature}`,
      text: joinText([`First evidence: ${f.evidence}.`, f.note, f.confidenceNote && `(${f.confidenceNote})`]),
      confidence: normConf(f.confidence), citeId: 'theropods-to-birds'
    });
  });
}

/* ============================================================
   VALIDATION
   ============================================================ */
const validCiteIds = {
  species: new Set(ctx.SPECIES.map(s => s.id)),
  glossary: new Set(ctx.GLOSSARY_TERMS.map(g => g.id)),
  'research-case': new Set(ctx.RESEARCH_CASES.map(c => c.id)),
  'fossil-hunter': new Set(ctx.PEOPLE.map(p => p.id)),
  view: new Set([
    'home', 'dinodex', 'dinosaurs-through-time', 'anatomy-101', 'deep-time', 'moving-earth',
    'mesozoic-ecosystems', 'last-day', 'mass-extinctions', 'theropods-to-birds',
    'hpw-record', 'hpw-field-to-lab', 'hpw-dating', 'hpw-classification',
    'hpw-reading-bones', 'hpw-becoming-knowledge',
    'fossil-hunters', 'fossils-science', 'research-desk', 'glossary', 'responsible-ai'
  ])
};

const brokenCiteIds = [];
for (const c of chunks) {
  const ok =
    (c.sourceType === 'species' && validCiteIds.species.has(c.citeId)) ||
    (c.sourceType === 'glossary' && validCiteIds.glossary.has(c.citeId)) ||
    (c.sourceType === 'research-case' && validCiteIds['research-case'].has(c.citeId)) ||
    (c.sourceType === 'fossil-hunter' && validCiteIds['fossil-hunter'].has(c.citeId)) ||
    validCiteIds.view.has(c.citeId);
  if (!ok) brokenCiteIds.push(`${c.id} -> citeId "${c.citeId}"`);
}

const emptyText = chunks.filter(c => !c.text || !c.text.trim());

const bySourceType = {};
const byConfidence = { strong: 0, moderate: 0, low: 0, none: 0 };
for (const c of chunks) {
  bySourceType[c.sourceType] = (bySourceType[c.sourceType] || 0) + 1;
  byConfidence[c.confidence || 'none']++;
}

const taggedChunks = chunks
  .filter(c => c.confidence === 'moderate' || c.confidence === 'low')
  .map(c => ({ id: c.id, confidence: c.confidence, title: c.title }));

fs.writeFileSync(path.join(ROOT, 'content-index.json'), JSON.stringify(chunks, null, 2));

console.log('=== BUILD REPORT ===');
console.log('Total chunks:', chunks.length);
console.log('By sourceType:', bySourceType);
console.log('By confidence:', byConfidence);
console.log('Broken citeIds:', brokenCiteIds.length ? brokenCiteIds : 'none');
console.log('Empty-text chunks (should be none, already skipped at push-time):', emptyText.length);
console.log('Moderate/low tagged chunks:', taggedChunks.length);
console.log(JSON.stringify(taggedChunks, null, 2));
