# AGENTS.md — template-kitchen-fitter

> Standalone SEOJack demo website template for a high-trust kitchen-fitter business. Part of the NEO-1 workspace (see root ../../../AGENTS.md).

## What it is
A lean, single-page Next.js 16 marketing template (App Router, React 19) showcasing a kitchen-fitter business: project portfolio, process timeline, video testimonials, and a quote calculator. It is one of the SEOJack templates — deployed to its own domain, indexable for organic discovery, and embeddable in an iframe on the seojack.net `/demo/[id]` viewer. It can also be stripped of its footer credit and used as a builder seed.

## Stack
- Next.js 16 (App Router) + React 19 + React DOM 19
- TypeScript 5.7
- `lucide-react` icons
- Styling is one scoped CSS literal (`app/styles.ts`), every selector prefixed `.kitchen-fitter-demo` — NOT Tailwind, despite Tailwind/PostCSS/autoprefixer being present in devDependencies + `tailwind.config.js`/`postcss.config.mjs`.

## Structure
- `app/layout.tsx` — SEO metadata, canonical, OG/Twitter, JSON-LD, theme color
- `app/page.tsx` — renders `<DemoBody />`
- `app/DemoBody.tsx` — `'use client'`; font link + scoped CSS inject + sections
- `app/styles.ts` — single scoped CSS literal (`.kitchen-fitter-demo` prefix)
- `app/content.ts`, `app/data.ts` — typed, realistic page content
- `app/primitives.tsx` — shared motion primitives (Reveal, Headline, Magnetic, Marquee)
- `app/SeojackCredit.tsx` — footer credit / inbound link (stripped when used as a builder seed)
- `app/sitemap.ts`, `app/robots.ts` — indexable for organic discovery
- `next.config.ts` — image remote pattern (`cdn.seojack.website`); intentionally no frame-blocking headers
- `public/images/` — static assets

## Commands
Package manager: npm (see `package-lock.json`).
- Install: `npm install`
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Start (prod): `npm run start`
- Lint: `npm run lint`
No test script is defined.

## Conventions & notes
- Registry id: `tpl_kitchen_fitter`. Showcased at https://seojack.net/templates/tpl_kitchen_fitter.
- Live/production domain: https://kitchen-fitter.templates.seojack.website.
- Do NOT set `X-Frame-Options: DENY` or `frame-ancestors 'none'` — this template is embedded in an iframe on seojack.net's `/demo/[id]` viewer (see comment in `next.config.ts`).
- All scoped CSS selectors must stay prefixed with `.kitchen-fitter-demo` to avoid leakage when embedded.
- `app/SeojackCredit.tsx` is stripped when the template is used as a builder seed.
- Remote images are restricted to `cdn.seojack.website`.
- Deploy: own GitHub repo (`seojack-templates/template-kitchen-fitter`) + own Vercel project. See `docs/templates-github-org.md` (workspace-level).
- No `.env.example` committed; `.gitignore` excludes `.env*` but allows `!.env.example`.

## Provenance
Clone of https://github.com/seojack-templates/template-kitchen-fitter.git. Default branch main.
