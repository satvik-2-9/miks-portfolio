# Mihika Sharma — Editorial Portfolio (PRD)

## Original problem statement
Build a portfolio website for Mihika that highlights her work as a journalist,
communications, and financial expert. It should be very aesthetic and use
modern design languages/trends. Includes Hero, About, Experience, Featured Work
("Dispatches"), Skills/Expertise, Education, Achievements and Contact.

## Personas
- **Recruiters / hiring editors / corp comms leaders** browsing a single page
  before reaching out about full-time, freelance, or commissioned work.
- **Mihika herself** — needs the page to keep up with new bylines without
  re-deploying.

## Core requirements
1. Editorial / newsroom aesthetic (Playfair Display + IBM Plex Mono, oxblood +
   cream palette, masthead, byline tagline).
2. Sections: Hero, About, **Dispatches** (selected stories), **On Camera**
   (reels + long-form video), Expertise, Experience, Education, Achievements,
   Contact.
3. Embedded Instagram reels (iframe) and native HTML5 video for the personal
   reel; YouTube long-form for The Raisina Hills.
4. Contact form: stores submissions in Mongo + sends email via **Resend**.
5. Resume: `/api/resume` live-fetches the latest PDF from Google Drive.
6. Anonymous analytics tracking via `/api/track`.
7. Mobile-responsive, generous spacing, no AI-slop visuals.

## Architecture
- Frontend: React 19 + Tailwind, all content in `/app/frontend/src/mock/mock.js`
  (acts as a headless CMS for the MVP).
- Backend: FastAPI + Motor (async MongoDB) at `/api/*`. Resend for email.
- Components: `/app/frontend/src/components/portfolio/*.jsx`.

## Implemented (changelog)
**2026-04-19 — initial MVP**
- Editorial layout, sections, masthead, hero/about copy.
- `POST /api/contact` (Mongo + Resend), `GET /api/resume` (Drive fetch),
  `POST /api/track`.
- Embedded IG iframes + native video; YouTube long-form posters.
- Canva mosaic gallery for Namaste Democracy thumbnails.
- Backend tested 8/8 passing.

**2026-05-03 — Dispatches refresh + bespoke covers**
- Swapped Sun Pharma off lead → **Blackstone $4B (lead)**, then QXO $17B,
  Amazon×Google, Sun Pharma, UK Anthropic, US oil/Iran (6 cards total).
- Added new QXO/TopBuild $17B story.
- Added a **bespoke editorial-cover system** to `FeaturedWork.jsx`:
  each story has a topic-tuned gradient + accent color + big headline word
  (e.g. `$4B`, `$17B`, `AWS × GCP`, `$11.75B`, `FRONTIER`, `OIL · IRAN`).
  Real header images can be dropped into
  `/app/frontend/public/assets/dispatches/<posterKey>.jpg` and they will
  override the designed cover automatically.
- Added matching bespoke posters for the 3 Civic Lens reels (cl1/cl2/cl3) in
  `OnCamera.jsx` — *READ THE DRAMA*, *WEEKLY DROP*, *ON THE GROUND*.

## Known constraint (won't fix at code level)
- Reuters and Instagram **block this datacenter's egress IP at the network
  layer** (Cloudflare 401 + IG login wall). Server-side scraping of `og:image`
  is not possible from this preview environment, with or without User-Agent
  spoofing, TLS fingerprint impersonation (`curl_cffi`), or a real headless
  browser (Playwright/Chromium). The only paths to real header photos are:
    1. Mihika sends screenshots/photos to drop into
       `/public/assets/dispatches/<posterKey>.jpg`.
    2. Use a paid scraping proxy with residential IPs (Bright Data, ScraperAPI).
- Until then, the bespoke editorial covers are the design solution.

## Backlog
- **P1** Verify all `<a target="_top">` external links work without COOP iframe
  blocking inside Emergent's preview.
- **P2** Optional admin viewer for the MongoDB `messages` collection.
- **P2** Allow Mihika to drop real header photos into
  `/public/assets/dispatches/` and `/public/assets/cl-tiles/` so the bespoke
  covers are progressively replaced.

## Key files of reference
- `/app/frontend/src/mock/mock.js`
- `/app/frontend/src/components/portfolio/FeaturedWork.jsx`
- `/app/frontend/src/components/portfolio/OnCamera.jsx`
- `/app/backend/server.py`
- `/app/contracts.md`

## Test credentials
- See `/app/memory/test_credentials.md`. (No auth in this app — public
  portfolio. Resend API key lives in `/app/backend/.env`.)
