# AS NEXTGEN website

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Framer Motion.
Fully static output — no database, API keys or server secrets required.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Requires Node.js 20.9 or newer.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Public site URL, e.g. `https://asnextgen.com`. Used for canonical/Open Graph URLs, `sitemap.xml` and `robots.txt`. Must be set **at build time**. |

Copy `.env.example` to `.env.local` for local use.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

> This repo keeps the app in the `asnextgen/` subfolder. On any host, set the
> **root / base directory** to `asnextgen`.

**Vercel (recommended):** import the repo, set Root Directory to `asnextgen`, add
`NEXT_PUBLIC_SITE_URL`, deploy. No other settings needed.

**Docker / any VPS or container host:**

```bash
docker build -t asnextgen --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.com .
docker run -p 3000:3000 asnextgen
```

**Node server:** `npm ci && npm run build && npm start` (listens on `$PORT`, default 3000).

## Content

Editable content lives in `src/data/` (`company.ts`, `projects.ts`, `jobs.ts`, `services.ts`).
Theme colors, fonts and animations are defined in `src/app/globals.css` (`@theme`).

## Before going live

- Have the Privacy Policy and Terms pages (`src/app/privacy`, `src/app/terms`) reviewed by a
  legal professional for your jurisdictions.
- Replace `public/og-image.png` with a branded design if desired (1200x630).
