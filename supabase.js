// ── Supabase Configuration ────────────────────────────────────────────────────
const SUPABASE_URL = 'https://uefsaowuuvlvobcgpnfq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZnNhb3d1dXZsdm9iY2dwbmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0NDQyOTEsImV4cCI6MjA5ODAyMDI5MX0.sNCiX6s1l4AcK_qhg4NonqGXSKFFa0aRXQ0iI5FRBmQ';

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
