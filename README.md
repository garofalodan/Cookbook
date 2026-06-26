# My Recipe Book

A personal recipe management app with a public-facing cookbook website, backed by Supabase.

## Files

| File | Purpose |
|---|---|
| `index.html` | Recipe manager — create, edit, import recipes |
| `recipes.html` | Public cookbook website, organized by category |
| `app.js` | Nutrition database (430+ ingredients) and shared logic |
| `supabase.js` | Supabase database connection |
| `style.css` | Shared styles |

## Features

- ✅ Create recipes manually or import by pasting text (AI-powered)
- ✅ Automatic nutrition calculation per serving (calories, carbs, sugars, fat, protein, fiber)
- ✅ Missing ingredient lookup — AI looks up unknown ingredients and saves them to your database
- ✅ Rename custom ingredients with a display name
- ✅ Search and filter recipes by category
- ✅ Public recipe website organized by category
- ✅ All data stored in Supabase — accessible from any device

## Setup

### 1. Fork or upload this repository to GitHub

- Go to github.com and create a new repository named `recipe-book` (or any name)
- Upload all 5 files to the repository root

### 2. Enable GitHub Pages

- Go to your repository on GitHub
- Click **Settings** → **Pages**
- Under "Source", select **Deploy from a branch**
- Select **main** branch, **/ (root)** folder
- Click **Save**

Your site will be live at:
`https://yourusername.github.io/recipe-book/`

- Manager: `https://yourusername.github.io/recipe-book/index.html`
- Public site: `https://yourusername.github.io/recipe-book/recipes.html`

### 3. Supabase is already configured

The `supabase.js` file already contains your project URL and API key. No changes needed.

## Adding recipes

1. Open `index.html` (your GitHub Pages URL)
2. Click **New recipe → Create manually** or **Import from text**
3. Save — nutrition is calculated automatically
4. If any ingredient is missing, you'll be prompted to look it up
5. Visit `recipes.html` to see your public cookbook

## Custom ingredients

Any ingredients looked up during saving are stored in your Supabase `custom_ingredients` table and persist across sessions and devices. You can view, rename, or delete them via the **Ingredients** button in the manager.
