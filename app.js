// ── Nutrition engine ──────────────────────────────────────────────────────────
// Data source: USDA FoodData Central SR Legacy (April 2018), stored in Supabase:
//   foods (per-100g nutrients), food_portions (cup/tbsp/slice/... -> grams),
//   ingredient_aliases (typed phrase -> food). Custom AI-looked-up ingredients
//   (custom_ingredients) are still honoured as a fallback.
//
// Flow:  await resolveIngredients(list)  ->  calcNutrition(list, servings)
//        (computeNutrition() does both.)  Resolution is async because it may hit
//        the database; the math afterwards is synchronous on cached data.

const FOODS = {};              // fdc_id -> { fdc_id, name, cal, carb, sug, fat, pro, fib }
const PORTIONS = {};           // fdc_id -> [{ unit, label, grams_per_unit, seq }]
let ALIASES = {};              // alias (lowercase) -> fdc_id
const CUSTOM = {};             // custom ingredient name / display name -> { cal, carb, sug, fat, pro, fib }
const SEARCH_CACHE = {};       // query -> rows from search_foods
const RESOLVED = {};           // ingredient key -> latest resolution
const mappingOverrides = {};   // ingredient key -> { fdc_id, manual }  (pins: user overrides + saved mappings)

const MATCH_MIN = 0.5;         // search results below this coverage are treated as "not found"
const MATCH_GOOD = 0.95;       // at or above this a search match is considered solid

function ingKey(name) { return (name || '').toLowerCase().trim(); }

// ── Loading shared data ───────────────────────────────────────────────────────
function loadAliases(rows) {
  ALIASES = {};
  (rows || []).forEach(r => { ALIASES[ingKey(r.alias)] = r.fdc_id; });
}

function mergeCustomNUT(rows) {
  (rows || []).forEach(row => {
    const data = { cal: +row.cal, carb: +row.carb, sug: +(row.sug || 0), fat: +row.fat, pro: +row.pro, fib: +row.fib };
    CUSTOM[ingKey(row.name)] = data;
    if (row.display_name) CUSTOM[ingKey(row.display_name)] = data;
  });
}

// Reset pins when a different recipe is loaded; seed from ingredients that already carry a mapping.
function resetMappings(ingredients) {
  Object.keys(mappingOverrides).forEach(k => delete mappingOverrides[k]);
  (ingredients || []).forEach(i => {
    if (i && i.name && i.fdc_id) mappingOverrides[ingKey(i.name)] = { fdc_id: +i.fdc_id, manual: i.map === 'manual' };
  });
}

// ── Name cleaning ─────────────────────────────────────────────────────────────
const FILLER_WORDS = [
  'preferably','optional','thawed','diced','sliced','chopped','minced','grated','peeled','deveined','boneless','skinless',
  'warm','hot','cold','pitted','seeded','rinsed','drained','halved','quartered','crumbled','shredded','softened','melted',
  'finely','roughly','coarsely','thinly','freshly','fresh','large','medium','small','kosher','sea','organic','packed',
  'heaping','level','extra','day old','day-old','if frozen','room temperature','to taste','divided','plus more'
];
const SYNONYMS = [
  ['green onion','spring onion'], ['scallion','spring onion'], ['cilantro','coriander'], ['bok choy','pakchoi'],
  ['aubergine','eggplant'], ['courgette','zucchini'], ['capsicum','bell pepper'], ['garbanzo','chickpea'],
  ['confectioners sugar','powdered sugar'], ['caster sugar','granulated sugar'], ['mince','ground'], ['prawn','shrimp']
];

function cleanIngredientName(raw) {
  let n = (raw || '').toLowerCase().trim();
  n = n.replace(/\([^)]*\)/g, ' ');            // drop parentheticals
  n = n.split(',')[0].trim();                  // "shrimp, thawed if frozen" -> "shrimp"
  FILLER_WORDS.forEach(f => { n = n.replace(new RegExp('\\b' + f.replace(/-/g, '\\-') + '\\b', 'g'), ' '); });
  n = n.replace(/\b(and|or|the|a|an|if|but|with|of)\b/g, ' ');
  n = n.replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  return n;
}

function applySynonyms(n) {
  SYNONYMS.forEach(([a, b]) => { n = n.replace(new RegExp('\\b' + a + '(s|es)?\\b', 'g'), b); });
  return n.replace(/\s+/g, ' ').trim();
}

function singular(w) { return w.replace(/ies$/, 'y').replace(/(ch|sh|x|ss|o)es$/, '$1').replace(/s$/, ''); }

// Candidate strings tried against aliases / custom ingredients, best first.
function candidateNames(name) {
  const raw = ingKey(name).replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const clean = cleanIngredientName(name);
  const syn = applySynonyms(clean);
  const out = [raw, clean, syn];
  [clean, syn].forEach(c => { if (c) { const parts = c.split(' '); parts[parts.length - 1] = singular(parts[parts.length - 1]); out.push(parts.join(' ')); } });
  return [...new Set(out.filter(Boolean))];
}

function searchQueryFor(name) {
  return applySynonyms(cleanIngredientName(name)) || ingKey(name);
}

// ── Resolution: ingredient text -> food ───────────────────────────────────────
async function searchFoodsCached(q, max = 8) {
  const k = q + '|' + max;
  if (!SEARCH_CACHE[k]) SEARCH_CACHE[k] = await db.searchFoods(q, max);
  return SEARCH_CACHE[k];
}

async function ensureFoodData(ids) {
  const needFoods = ids.filter(id => !FOODS[id]);
  const needPortions = ids.filter(id => !PORTIONS[id]);
  if (needFoods.length) (await db.getFoodsByIds(needFoods)).forEach(f => { FOODS[f.fdc_id] = f; });
  if (needPortions.length) {
    needPortions.forEach(id => { PORTIONS[id] = []; });
    (await db.getPortions(needPortions)).forEach(p => { PORTIONS[p.fdc_id].push(p); });
  }
}

async function resolveIngredients(ingredients) {
  const pending = [];
  const list = (ingredients || []).filter(i => i && i.name);

  for (const ing of list) {
    const key = ingKey(ing.name);
    const pin = mappingOverrides[key];
    if (pin) { RESOLVED[key] = { fdc_id: pin.fdc_id, source: pin.manual ? 'override' : 'saved', coverage: 1 }; continue; }

    const cands = candidateNames(ing.name);
    const aliasHit = cands.find(c => ALIASES[c]);
    if (aliasHit) { RESOLVED[key] = { fdc_id: ALIASES[aliasHit], source: 'alias', coverage: 1 }; continue; }

    const customHit = cands.find(c => CUSTOM[c]);
    if (customHit) { RESOLVED[key] = { custom: CUSTOM[customHit], customName: customHit, source: 'custom', coverage: 1 }; continue; }

    pending.push(ing);
  }

  let searchFailed = false;
  await Promise.all(pending.map(async ing => {
    const key = ingKey(ing.name);
    try {
      const rows = await searchFoodsCached(searchQueryFor(ing.name), 8);
      // top-ranked row that covers enough of the query words
      const best = rows.find(r => r.coverage >= MATCH_MIN);
      if (best) {
        FOODS[best.fdc_id] = FOODS[best.fdc_id] || { fdc_id: best.fdc_id, name: best.name, cal: best.cal, carb: best.carb, sug: best.sug, fat: best.fat, pro: best.pro, fib: best.fib };
        RESOLVED[key] = { fdc_id: best.fdc_id, source: 'search', coverage: best.coverage };
      } else {
        RESOLVED[key] = { fdc_id: null, source: null, coverage: 0 };
      }
    } catch (e) {
      searchFailed = true;
      RESOLVED[key] = { fdc_id: null, source: null, coverage: 0, error: true };
    }
  }));
  if (searchFailed && typeof showToast === 'function') showToast('Could not reach the ingredient database', 'error');

  const ids = [...new Set(list.map(i => RESOLVED[ingKey(i.name)]).filter(r => r && r.fdc_id).map(r => r.fdc_id))];
  try { if (ids.length) await ensureFoodData(ids); }
  catch (e) { if (typeof showToast === 'function') showToast('Could not load ingredient details', 'error'); }
}

// ── Amount + unit -> grams ────────────────────────────────────────────────────
function parseAmount(a) {
  if (typeof a === 'number') return a;
  let s = String(a || '').trim().replace(/[–—]/g, '-');
  if (!s) return 0;
  const FR = { '½': '1/2', '¼': '1/4', '¾': '3/4', '⅓': '1/3', '⅔': '2/3', '⅛': '1/8' };
  s = s.replace(/(\d)?\s*([½¼¾⅓⅔⅛])/g, (m, d, f) => (d ? d + ' ' : '') + FR[f]);
  const one = t => {
    t = t.trim();
    let m = t.match(/^(\d+)[\s-]+(\d+)\/(\d+)$/); if (m) return +m[1] + m[2] / m[3];
    m = t.match(/^(\d+)\/(\d+)$/); if (m) return m[1] / m[2];
    const n = parseFloat(t); return isNaN(n) ? 0 : n;
  };
  if (/^\d+-\d+\/\d+$/.test(s)) return one(s);                       // "1-1/2" = one and a half
  const vals = s.split(/\s*(?:-|to)\s*/).map(one).filter(v => v > 0); // "2-3" -> 2.5
  return vals.length ? vals.reduce((x, y) => x + y, 0) / vals.length : 0;
}

const UNIT_MAP = {
  g:'g', gram:'g', grams:'g', gm:'g', kg:'kg', kilogram:'kg', kilograms:'kg',
  oz:'oz', ounce:'oz', ounces:'oz', lb:'lb', lbs:'lb', pound:'lb', pounds:'lb',
  ml:'ml', milliliter:'ml', milliliters:'ml', millilitre:'ml', l:'l', liter:'l', liters:'l', litre:'l',
  cup:'cup', cups:'cup', c:'cup',
  tbsp:'tbsp', tbsps:'tbsp', tablespoon:'tbsp', tablespoons:'tbsp', tbs:'tbsp', tbl:'tbsp',
  tsp:'tsp', tsps:'tsp', teaspoon:'tsp', teaspoons:'tsp',
  'fl oz':'fl oz', floz:'fl oz', 'fluid ounce':'fl oz', 'fluid ounces':'fl oz',
  pint:'pint', pints:'pint', pt:'pint', quart:'quart', quarts:'quart', qt:'quart', gallon:'gallon', gallons:'gallon', gal:'gallon'
};
function normUnit(u) {
  let x = (u || '').toLowerCase().trim().replace(/\./g, '').replace(/\s+/g, ' ');
  return UNIT_MAP[x] || x;
}

const GENERIC_GRAMS = { pinch: 0.3, dash: 0.6, handful: 30, bunch: 80, clove: 5, sprig: 3, slice: 30, stalk: 40, head: 500, can: 400, stick: 113 };
const WHOLE_UNITS = ['', 'whole', 'each', 'ea', 'piece', 'pieces', 'item', 'items', 'unit'];
const COUNT_PREFERENCE = ['medium', 'large', 'each', 'whole', 'unit', 'item', 'piece', 'small'];

function pickPortion(portions, unit) {
  const m = (portions || []).filter(p => p.unit === unit && +p.grams_per_unit > 0);
  if (!m.length) return null;
  m.sort((a, b) => (a.label === unit ? 0 : 1) - (b.label === unit ? 0 : 1) || a.label.length - b.label.length || (a.seq || 0) - (b.seq || 0));
  return m[0];
}

// Grams in one cup / tbsp / tsp / fl oz of this food, derived from whichever USDA measure exists.
function volumeGrams(portions, unit) {
  const get = u => { const p = pickPortion(portions, u); return p ? +p.grams_per_unit : null; };
  const cup = get('cup'), tbsp = get('tbsp'), tsp = get('tsp'), floz = get('fl oz');
  const cupG = cup ?? (tbsp != null ? tbsp * 16 : tsp != null ? tsp * 48 : floz != null ? floz * 8 : null);
  if (unit === 'cup') return cupG;
  if (unit === 'tbsp') return tbsp ?? (cupG != null ? cupG / 16 : null);
  if (unit === 'tsp') return tsp ?? (tbsp != null ? tbsp / 3 : cupG != null ? cupG / 48 : null);
  if (unit === 'fl oz') return floz ?? (cupG != null ? cupG / 8 : null);
  return null;
}

function fmtG(n) { return (Math.round(n * 10) / 10).toString(); }

// Returns { grams, basis, estimated }
function toGrams(amountRaw, unitRaw, ingName, portions, foodName) {
  let a = parseAmount(amountRaw);
  if (!a) return { grams: 0, basis: 'no amount given', estimated: true };
  let u = normUnit(unitRaw);
  const frac = u.match(/^(\d+)\/(\d+)\s*(cups?|tbsp|tsp)$/);
  if (frac) { a *= frac[1] / frac[2]; u = normUnit(frac[3]); }
  if (!u) { const sz = (ingName || '').toLowerCase().match(/\b(small|medium|large|extra large|jumbo)\b/); if (sz) u = sz[1]; }

  if (u === 'g') return { grams: a, basis: 'weight' };
  if (u === 'kg') return { grams: a * 1000, basis: 'weight' };
  if (u === 'oz') return { grams: a * 28.3495, basis: 'weight' };
  if (u === 'lb') return { grams: a * 453.592, basis: 'weight' };

  if (['cup', 'tbsp', 'tsp', 'fl oz'].includes(u)) {
    const per = volumeGrams(portions, u);
    if (per != null) return { grams: a * per, basis: `${fmtG(per)} g per ${u} (USDA)` };
    const dflt = { cup: 240, tbsp: 15, tsp: 5, 'fl oz': 30 }[u];
    return { grams: a * dflt, basis: `no USDA weight for ${u} — assumed ${dflt} g (water-like)`, estimated: true };
  }

  if (['ml', 'l', 'pint', 'quart', 'gallon'].includes(u)) {
    const cups = { ml: a / 236.588, l: a * 1000 / 236.588, pint: a * 2, quart: a * 4, gallon: a * 16 }[u];
    const perCup = volumeGrams(portions, 'cup');
    if (perCup != null) return { grams: cups * perCup, basis: `${fmtG(perCup)} g per cup (USDA)` };
    return { grams: cups * 240, basis: 'no USDA cup weight — assumed water-like', estimated: true };
  }

  if (u === 'pinch' || u === 'dash') {
    const tspG = volumeGrams(portions, 'tsp');
    if (tspG != null) return { grams: a * tspG / (u === 'pinch' ? 16 : 8), basis: `${u} ≈ ${u === 'pinch' ? '1/16' : '1/8'} tsp` };
    return { grams: a * GENERIC_GRAMS[u], basis: `${u} — assumed ${GENERIC_GRAMS[u]} g`, estimated: true };
  }

  // Counted units: slice, clove, medium, large, each, whole, can, stick ...
  const ps = (portions || []).filter(p => +p.grams_per_unit > 0 && !['cup', 'tbsp', 'tsp', 'fl oz', 'oz', 'lb', 'ml', 'cubic inch'].includes(p.unit));
  const best = list => list.sort((x, y) => x.label.length - y.label.length || (x.seq || 0) - (y.seq || 0))[0];
  if (u && !WHOLE_UNITS.includes(u)) {
    const m = ps.filter(p => singular(p.unit) === singular(u));
    if (m.length) { const p = best(m); return { grams: a * p.grams_per_unit, basis: `${p.label}: ${fmtG(+p.grams_per_unit)} g (USDA)` }; }
    const g = GENERIC_GRAMS[singular(u)];
    if (g) return { grams: a * g, basis: `no USDA weight for "${u}" — assumed ${g} g`, estimated: true };
    return { grams: a * 25, basis: `unrecognised unit "${u}" — assumed 25 g`, estimated: true };
  }
  const pref = /^egg/i.test(foodName || '') ? ['large', 'medium', 'extra large', 'jumbo', 'small'] : COUNT_PREFERENCE;
  for (const key of pref) {
    const m = ps.filter(p => p.unit === key);
    if (m.length) { const p = best(m); return { grams: a * p.grams_per_unit, basis: `1 ${p.label} = ${fmtG(+p.grams_per_unit)} g (USDA)` }; }
  }
  if (ps.length) { const p = best(ps.slice().sort((x, y) => (x.seq || 0) - (y.seq || 0)).slice(0, 1)); return { grams: a * p.grams_per_unit, basis: `1 ${p.label} = ${fmtG(+p.grams_per_unit)} g (USDA)` }; }
  return { grams: a * 100, basis: 'no unit and no USDA portion — assumed 100 g each', estimated: true };
}

// ── Nutrition calculation (synchronous, uses data cached by resolveIngredients) ──
function calcNutrition(ingredients, servings) {
  let totCal = 0, totCarb = 0, totSug = 0, totFat = 0, totPro = 0, totFib = 0;
  const unmatched = [];
  const lines = [];
  let review = 0;

  for (const ing of ingredients) {
    const res = RESOLVED[ingKey(ing.name)];
    let per = null, foodName = '', portions = [], missing = [];
    if (res && res.fdc_id && FOODS[res.fdc_id]) {
      const f = FOODS[res.fdc_id];
      per = { cal: +f.cal, carb: +f.carb, sug: f.sug == null ? 0 : +f.sug, fat: +f.fat, pro: +f.pro, fib: f.fib == null ? 0 : +f.fib };
      if (f.sug == null) missing.push('sugars');
      if (f.fib == null) missing.push('fiber');
      foodName = f.name; portions = PORTIONS[res.fdc_id] || [];
    } else if (res && res.custom) {
      per = res.custom; foodName = (res.customName || ing.name) + ' (looked up by AI)';
    }
    if (!per) { unmatched.push(ing.name); lines.push({ name: ing.name, amount: ing.amount, unit: ing.unit, key: ingKey(ing.name), matched: false }); continue; }

    const g = toGrams(ing.amount, ing.unit, ing.name, portions, foodName);
    const f = g.grams / 100;
    const line = {
      name: ing.name, amount: ing.amount, unit: ing.unit, key: ingKey(ing.name), matched: true,
      fdc_id: res.fdc_id || null, foodName, source: res.source, coverage: res.coverage,
      grams: g.grams, basis: g.basis, estimated: !!g.estimated, missing, per100: per,
      cal: per.cal * f, carb: per.carb * f, sug: per.sug * f, fat: per.fat * f, pro: per.pro * f, fib: per.fib * f
    };
    line.needsReview = line.estimated || (res.source === 'search' && res.coverage < MATCH_GOOD);
    if (line.needsReview) review++;
    lines.push(line);
    totCal += line.cal; totCarb += line.carb; totSug += line.sug; totFat += line.fat; totPro += line.pro; totFib += line.fib;
  }

  const s = Math.max(1, parseInt(servings) || 1);
  return {
    calories: Math.round(totCal / s), carbs: Math.round(totCarb / s), sugars: Math.round(totSug / s),
    fat: Math.round(totFat / s), protein: Math.round(totPro / s), fiber: Math.round(totFib / s),
    matched: ingredients.length - unmatched.length, total: ingredients.length, unmatched, review, lines
  };
}

async function computeNutrition(ingredients, servings) {
  await resolveIngredients(ingredients);
  return calcNutrition(ingredients, servings);
}

// What gets stored with the recipe: totals only (no per-line detail).
function stripNutrition(nut) {
  if (!nut) return nut;
  const { lines, review, ...rest } = nut;
  return rest;
}

// Attach the mapping used for each ingredient so a saved recipe reopens with the same matches.
function attachMappings(ingredients) {
  return (ingredients || []).map(i => {
    const key = ingKey(i.name);
    const pin = mappingOverrides[key];
    const res = RESOLVED[key];
    if (pin) return { ...i, fdc_id: pin.fdc_id, map: pin.manual ? 'manual' : 'auto' };
    if (res && res.fdc_id) return { ...i, fdc_id: res.fdc_id, map: 'auto' };
    if (res && res.custom) return { name: i.name, amount: i.amount, unit: i.unit };
    return i;
  });
}

// Save a user override as an alias so future recipes use it automatically.
async function rememberAlias(ingName, fdc_id) {
  const alias = cleanIngredientName(ingName) || ingKey(ingName);
  if (!alias) return;
  ALIASES[alias] = fdc_id;
  await db.saveAlias(alias, fdc_id);
}

// ── Toast notifications ───────────────────────────────────────────────────────
function showToast(msg, type = '') {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type}`;
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Shared ingredient & step builders ────────────────────────────────────────
function buildIngredientRow(name = '', amount = '', unit = '', onRemove) {
  const div = document.createElement('div');
  div.className = 'ing-row';
  div.innerHTML = `
    <input type="text" placeholder="e.g. rolled oats" value="${name}">
    <input type="text" placeholder="0" value="${amount}" style="text-align:right">
    <input type="text" placeholder="g" value="${unit}">
    <button class="remove-btn" title="Remove"><i class="ti ti-x"></i></button>`;
  div.querySelector('.remove-btn').onclick = () => { div.remove(); if (onRemove) onRemove(); };
  return div;
}

function buildStepRow(text = '', onRemove) {
  const div = document.createElement('div');
  div.className = 'step-row';
  div.innerHTML = `
    <div class="step-num">?</div>
    <textarea class="field-input" placeholder="Describe this step..." style="min-height:64px">${text}</textarea>
    <button class="remove-btn" style="margin-top:8px" title="Remove"><i class="ti ti-x"></i></button>`;
  div.querySelector('.remove-btn').onclick = () => { div.remove(); renumberSteps(); if (onRemove) onRemove(); };
  return div;
}

function renumberSteps() {
  document.querySelectorAll('.step-num').forEach((el, i) => el.textContent = i + 1);
}

function gatherIngredients(listEl) {
  return [...listEl.querySelectorAll('.ing-row')].map(row => {
    const inputs = row.querySelectorAll('input');
    return { name: inputs[0].value.trim(), amount: inputs[1].value.trim(), unit: inputs[2].value.trim() };
  }).filter(i => i.name);
}

function gatherSteps(listEl) {
  return [...listEl.querySelectorAll('textarea')].map(t => t.value.trim()).filter(Boolean);
}

// ── Nutrition display ─────────────────────────────────────────────────────────
function renderNutritionGrid(nut, gridEl, bannerEl, ingListEl) {
  gridEl.style.display = 'grid';
  gridEl.innerHTML = `
    <div style="grid-column:1/-1;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--teal-dk);margin-bottom:4px">Per serving</div>
    <div class="nut-box"><div class="nut-val">${nut.calories}<span class="nut-unit">kcal</span></div><div class="nut-lbl">Calories</div></div>
    <div class="nut-box">
      <div class="nut-val">${nut.carbs}<span class="nut-unit">g</span></div>
      <div class="nut-lbl">Carbs</div>
      <div class="nut-sub">of which sugars: ${nut.sugars}g</div>
    </div>
    <div class="nut-box"><div class="nut-val">${nut.fat}<span class="nut-unit">g</span></div><div class="nut-lbl">Fat</div></div>
    <div class="nut-box"><div class="nut-val">${nut.protein}<span class="nut-unit">g</span></div><div class="nut-lbl">Protein</div></div>
    <div class="nut-box"><div class="nut-val">${nut.fiber}<span class="nut-unit">g</span></div><div class="nut-lbl">Fiber</div></div>
  `;

  if (bannerEl) {
    if (nut.unmatched && nut.unmatched.length > 0) {
      const pills = nut.unmatched.map(u => `<span class="unmatched-pill">${u}</span>`).join('');
      bannerEl.className = 'banner warn';
      bannerEl.style.display = 'flex';
      bannerEl.innerHTML = `<i class="ti ti-alert-circle"></i><div><strong>${nut.unmatched.length} ingredient${nut.unmatched.length > 1 ? 's' : ''} not in database</strong> — nutrition may be incomplete. These will be looked up when you save:<div class="unmatched-pills" style="margin-top:6px">${pills}</div></div>`;
      if (ingListEl) highlightUnmatched(nut.unmatched, ingListEl);
    } else {
      bannerEl.className = 'banner success';
      bannerEl.style.display = 'flex';
      bannerEl.innerHTML = nut.review
        ? `<i class="ti ti-check"></i> All ${nut.total} ingredients matched — ${nut.review} worth a quick check in the mapping table below.`
        : `<i class="ti ti-check"></i> All ${nut.total} ingredients matched — nutrition complete.`;
      if (ingListEl) clearHighlights(ingListEl);
    }
  }
}

function highlightUnmatched(names, listEl) {
  listEl.querySelectorAll('.ing-row').forEach(row => {
    const v = row.querySelectorAll('input')[0].value.toLowerCase().trim();
    row.classList.toggle('unmatched', names.some(u => u.toLowerCase() === v));
  });
}

function clearHighlights(listEl) {
  listEl.querySelectorAll('.ing-row').forEach(r => r.classList.remove('unmatched'));
}
