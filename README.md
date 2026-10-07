# Accentrop — Tools for AI Governance

Static clone of the Accentrop AI-governance site (originally built on Replit).
Free tools for AI governance: report AI incidents, assess AI risk, threat modeling,
surveys, blog, and an AI ebook.

- Live domain: https://accentrop.com/
- Stack: React 18 + react-router-dom + Tailwind CSS v4 + Vite
- Build: `npm ci && npm run build` → `dist/`
- Deploy: Render static site with a `/* → /index.html` SPA rewrite (44 client-side routes)

> Note: this is a static clone. Features that called the original backend
> (`/api/transcribe`, `/api/survey`, `/api/threat-model`,
> `/api/ebook/*`) will not function without that backend.
