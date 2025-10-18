# Crashspot-frontend

Frontend for the Crashspot web app (Vite + React + TypeScript). Preconfigured for GitHub Pages.

## Quick Start (100% on GitHub)

1. Create a repo named **Crashspot-frontend** on your GitHub.
2. Click **Add file → Upload files** and drag in the *contents* of this folder.
3. Go to **Settings → Pages**, set **Source** to **GitHub Actions**, and keep defaults.
4. GitHub will build and deploy to: `https://<your-username>.github.io/Crashspot-frontend/`

## Scripts (if you ever run locally)
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build

## Notes
- `vite.config.ts` sets `base: "/Crashspot-frontend/"` so assets work on GitHub Pages.
- React 18 is used for maximum compatibility with ecosystem tools.