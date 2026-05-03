# Mihika Portfolio — API Contracts

## Overview
Frontend was built first with mock data. Backend now adds: contact form persistence + email,
lightweight analytics, and a resume download counter.

## Environment (backend/.env)
- `MONGO_URL`, `DB_NAME` — existing
- `RESEND_API_KEY` — Resend transactional email
- `RESEND_FROM_EMAIL` — verified sender (default `onboarding@resend.dev`, Resend's sandbox)
- `NOTIFY_TO_EMAIL` — Mihika's inbox to notify on new messages

## Endpoints (all prefixed with `/api`)

### 1. POST /api/contact
Stores a message in MongoDB and emails Mihika via Resend.
- Body: `{ name: str, email: EmailStr, subject?: str, message: str }`
- Validations: name 1–120, message 1–5000, email RFC-valid, subject ≤ 200.
- Stores doc in `messages` with id (uuid), at, ip, ua.
- Sends email asynchronously; failure of email does NOT fail the request — it's logged and the doc is flagged `email_sent: false` so we can retry.
- Response: `{ ok: true, id: str }`

### 2. POST /api/track
Anonymous lightweight analytics.
- Body: `{ event: str, section?: str, meta?: object }`
- Allowed events: `view_section`, `play_reel`, `cta_click`, `nav`, `download_cv`, `open_external`.
- Stores in `events` collection with timestamp + ip-hash (sha256, no raw IP).
- Response: `{ ok: true }`

### 3. GET /api/resume
- Increments a counter in `meta.resume_downloads`.
- Streams `/app/backend/static/mihika-resume.pdf` with `Content-Disposition: attachment; filename="Mihika-Sharma-Resume.pdf"`.
- Counts each request as 1 download.

### 4. GET /api/stats (lightweight admin)
- Returns `{ messages, downloads, events_today }` for a quick at-a-glance dashboard.
- Public for now (numbers only, no PII).

## Frontend changes
- `Contact.jsx`: replaces `mailto:`-only flow with `axios.post(`${API}/contact`)`. Keeps mail-client fallback if request fails.
- `Hero.jsx` + `Contact.jsx`: add **Download CV** button → `GET ${API}/resume`.
- `OnCamera.jsx` (and a couple of CTAs): fire-and-forget `POST /api/track` calls.
- Frontend `mock.js` stays only for static content (experience copy, dispatch cards, etc.) — **not** for messages, downloads, or analytics.

## Mocked → Real
| Feature | Before | After |
|---|---|---|
| Contact form | `mailto:` + localStorage | POST /api/contact + Resend email + Mongo |
| Analytics | none | POST /api/track |
| CV download | none | GET /api/resume + counter |
| Reels/dispatches data | mock.js | mock.js (still — content is static) |
