// ── Supabase Configuration ────────────────────────────────────────────────────
const SUPABASE_URL = 'https://uefsaowuuvlvobcgpnfq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZnNhb3d1dXZsdm9iY2dwbmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0NDQyOTEsImV4cCI6MjA5ODAyMDI5MX0.sNCiX6s1l4AcK_qhg4NonqGXSKFFa0aRXQ0iI5FRBmQ';

// ── Edge Function URL (proxies Anthropic API to avoid CORS) ─────────────────
const CLAUDE_PROXY_URL = `${SUPABASE_URL}/functions/v1/claude-proxy`;

// ── Anthropic API call via Supabase Edge Function ────────────────────────────
async function callClaude({ model = 'claude-sonnet-4-6', max_tokens = 2000, messages }) {
  const res = await fetch(CLAUDE_PROXY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ model, max_tokens, messages })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Claude proxy error ${res.status}: ${err}`);
  }
  return res.json();
}

// ── Supabase Client (lightweight, no SDK needed) ──────────────────────────────
const db = {
  headers: {
    'Content-Type': 'application/json',
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Prefer': 'return=representation'
  },

  async getRecipes() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/recipes?order=category,name`, { headers: this.headers });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async saveRecipe(recipe) {
    const payload = this._toRow(recipe);
    if (recipe.id) {
      // Update
      const res = await fetch(`${SUPABASE_URL}/rest/v1/recipes?id=eq.${recipe.id}`, {
        method: 'PATCH', headers: this.headers, body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    } else {
      // Insert
      const res = await fetch(`${SUPABASE_URL}/rest/v1/recipes`, {
        method: 'POST', headers: this.headers, body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(await res.text());
      const rows = await res.json();
      return rows[0];
    }
  },

  async deleteRecipe(id) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/recipes?id=eq.${id}`, {
      method: 'DELETE', headers: this.headers
    });
    if (!res.ok) throw new Error(await res.text());
  },

  async getCustomIngredients() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/custom_ingredients?order=name`, { headers: this.headers });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async saveCustomIngredient(ing) {
    // Upsert by name
    const res = await fetch(`${SUPABASE_URL}/rest/v1/custom_ingredients`, {
      method: 'POST',
      headers: { ...this.headers, 'Prefer': 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify(ing)
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async updateCustomIngredientName(id, display_name) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/custom_ingredients?id=eq.${id}`, {
      method: 'PATCH', headers: this.headers, body: JSON.stringify({ display_name })
    });
    if (!res.ok) throw new Error(await res.text());
  },

  async deleteCustomIngredient(id) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/custom_ingredients?id=eq.${id}`, {
      method: 'DELETE', headers: this.headers
    });
    if (!res.ok) throw new Error(await res.text());
  },

  // ── USDA food database (foods, food_portions, ingredient_aliases) ───────────
  // Best matches for a typed ingredient, ranked by rarity-weighted word overlap.
  async searchFoods(q, maxRows = 8) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/search_foods`, {
      method: 'POST', headers: this.headers, body: JSON.stringify({ q, max_rows: maxRows })
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async getFoodsByIds(ids) {
    const out = [];
    for (let i = 0; i < ids.length; i += 40) {
      const chunk = ids.slice(i, i + 40);
      const res = await fetch(`${SUPABASE_URL}/rest/v1/foods?fdc_id=in.(${chunk.join(',')})&select=fdc_id,name,cal,carb,sug,fat,pro,fib`, { headers: this.headers });
      if (!res.ok) throw new Error(await res.text());
      out.push(...await res.json());
    }
    return out;
  },

  async getPortions(ids) {
    const out = [];
    for (let i = 0; i < ids.length; i += 20) {
      const chunk = ids.slice(i, i + 20);
      const res = await fetch(`${SUPABASE_URL}/rest/v1/food_portions?fdc_id=in.(${chunk.join(',')})&select=fdc_id,seq,unit,label,grams_per_unit&order=fdc_id,seq&limit=1000`, { headers: this.headers });
      if (!res.ok) throw new Error(await res.text());
      out.push(...await res.json());
    }
    return out;
  },

  async getAliases() {
    const out = [];
    for (let from = 0; ; from += 1000) {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/ingredient_aliases?select=alias,fdc_id&order=alias`, {
        headers: { ...this.headers, 'Range-Unit': 'items', 'Range': `${from}-${from + 999}` }
      });
      if (!res.ok) throw new Error(await res.text());
      const rows = await res.json();
      out.push(...rows);
      if (rows.length < 1000) break;
    }
    return out;
  },

  async saveAlias(alias, fdc_id) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/ingredient_aliases?on_conflict=alias`, {
      method: 'POST',
      headers: { ...this.headers, 'Prefer': 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify({ alias, fdc_id, source: 'user' })
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  _toRow(r) {
    return {
      name: r.name,
      category: r.category,
      servings: r.servings,
      prep: r.prep,
      cook: r.cook,
      description: r.desc || r.description,
      serving_note: r.servingNote || r.serving_note,
      ingredients: r.ingredients,
      steps: r.steps,
      nutrition: r.nutrition
    };
  },

  _fromRow(r) {
    return {
      id: r.id,
      name: r.name,
      category: r.category,
      servings: r.servings,
      prep: r.prep,
      cook: r.cook,
      desc: r.description,
      servingNote: r.serving_note,
      ingredients: r.ingredients || [],
      steps: r.steps || [],
      nutrition: r.nutrition
    };
  }
};

// ── Keep Supabase active (prevents free tier pausing) ────────────────────────
// Pings the database silently on page load. Supabase pauses after 7 days of
// inactivity — any API call resets the timer. This costs nothing and is instant.
async function keepSupabaseAlive() {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/recipes?limit=1&select=id`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    // Silent success — no UI feedback needed
  } catch(e) {
    // Silent failure — don't interrupt the app
  }
}
