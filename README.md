# Humanize Website

Next.js 16 (App Router) + TypeScript + Tailwind v4. Deploys to Vercel.

## Stack

- Next.js 16.2 with the App Router and Turbopack
- React 19
- TypeScript
- Tailwind CSS v4 (tokens live in `app/globals.css`, exposed via `@theme inline`)
- IBM Plex Sans / Mono / Serif via `next/font/google`
- Segment analytics loaded via `next/script`

## Getting started

```sh
nvm use            # pins Node 20 via .nvmrc
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

## Scripts

- `npm run dev` — Turbopack dev server
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint

## Environment variables

See `.env.example`. Required for full functionality:

- `NEXT_PUBLIC_SEGMENT_WRITE_KEY` — Segment source key for analytics.js (has a baked-in default)
- `NEXT_PUBLIC_CALENDLY_URL` — Calendly link opened after the contact form submits
- `NEXT_PUBLIC_SITE_URL` — public origin used for canonical URLs, OG tags, sitemap.xml, robots.txt

Drop a 1200×630 `public/og-image.png` for social share previews (the root metadata
points at this path).

## Project layout

```
app/
  layout.tsx             # root layout: fonts, Segment, metadata defaults
  globals.css            # design tokens + Tailwind theme + base styles
  (site)/                # marketing route group — shared Header + Footer
    layout.tsx
    page.tsx             # homepage
    home.css             # homepage-specific CSS (ported from legacy index.html)
  (legal)/               # legal route group — narrower container + "Get started" CTA
    layout.tsx
    legal-layout.module.css
    privacy-policy/
    terms-of-service/
    study-privacy/
  (contact)/             # contact route group — Header only, full-viewport split
    layout.tsx
    contact-us/
components/
  layout/                # Header, Footer (+ CSS modules)
  legal/                 # LegalPage, LegalSummaryBox
  forms/                 # ContactForm client component
  analytics/             # Segment snippet loader
  ui/                    # Container
lib/
  fonts.ts               # next/font declarations
  analytics.ts           # window.analytics wrapper with types
public/images/           # static images served at /images/*
```

## Deploying to Vercel

Push the branch, import the project in the Vercel dashboard, and set the two
`NEXT_PUBLIC_*` environment variables. No `vercel.json` required.
