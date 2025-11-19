# Deployment Instructions

The ENS PG Term 6 Dashboard has been pushed to GitHub! Here's how to get it online.

## Repository
https://github.com/SovereignSignal/ens-pg-term6-retro

## Option 1: GitHub Pages (Recommended - Free)

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/SovereignSignal/ens-pg-term6-retro
2. Click **Settings** (top right)
3. Click **Pages** in the left sidebar
4. Under "Source", select **GitHub Actions**

### Step 2: Add GitHub Actions Workflow
1. In your repository, click **Actions** tab
2. Click **"set up a workflow yourself"**
3. Paste this workflow content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Name the file `deploy.yml`
5. Click **Commit changes**

### Step 3: Wait for Deployment
- The workflow will automatically run
- Check the **Actions** tab to see progress
- Once complete, your site will be live at:
  **https://sovereignsignal.github.io/ens-pg-term6-retro/**

---

## Option 2: Vercel (Alternative - Also Free)

1. Go to https://vercel.com
2. Click **Add New** → **Project**
3. Import `SovereignSignal/ens-pg-term6-retro`
4. Vercel will auto-detect Vite settings
5. Click **Deploy**
6. Your site will be live at: `https://ens-pg-term6-retro.vercel.app`

**Note:** You'll need to update `vite.config.ts` to change `base: '/'` for Vercel (remove the repo name from the base path).

---

## Option 3: Netlify (Alternative - Also Free)

1. Go to https://netlify.com
2. Click **Add new site** → **Import an existing project**
3. Connect to GitHub and select `SovereignSignal/ens-pg-term6-retro`
4. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
5. Click **Deploy**
6. Your site will be live at: `https://ens-pg-term6-retro.netlify.app`

**Note:** You'll need to update `vite.config.ts` to change `base: '/'` for Netlify.

---

## Custom Domain (Optional)

### For GitHub Pages:
1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `term6.enspg.xyz`)
3. Add a CNAME record in your DNS settings pointing to `sovereignsignal.github.io`

### For Vercel/Netlify:
- Follow their custom domain setup guides
- Both platforms provide free SSL certificates

---

## Updating the Site

To update the dashboard:
1. Make changes locally or through GitHub web interface
2. Commit and push to the `main` branch
3. GitHub Actions (or Vercel/Netlify) will automatically rebuild and redeploy

---

## Local Development

To run locally:
```bash
git clone https://github.com/SovereignSignal/ens-pg-term6-retro.git
cd ens-pg-term6-retro
pnpm install
pnpm dev
```

Open http://localhost:3000

---

## Troubleshooting

**Issue:** Site shows 404 errors for routes
**Solution:** GitHub Pages requires the base path to match the repo name. The `vite.config.ts` is already configured for this.

**Issue:** Assets not loading
**Solution:** Check that `base` in `vite.config.ts` matches your deployment platform:
- GitHub Pages: `base: '/ens-pg-term6-retro/'`
- Vercel/Netlify: `base: '/'`

---

## Next Steps

1. Enable GitHub Pages and add the workflow (recommended)
2. Share the live URL with the ENS community
3. Consider adding the URL to the ENS forum post about Term 6
4. Optionally set up a custom domain for easier sharing
