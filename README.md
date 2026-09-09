# Element HVAC — Website

Production Next.js site for Element HVAC, a veteran-owned HVAC company serving Central
Pennsylvania. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and a
lazy-loaded React Three Fiber hero enhancement.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
npm run format  # Prettier
```

## Before launch — fill in real business data

Nearly all copy on this site is real (the company description, phone number, and
service region were provided). A few things still need real values before this goes
live. Every placeholder is bracketed like `[THIS]` so they're easy to find — the
build treats most of them as "not yet set" and hides the related UI (e.g. the Google
rating badge won't show until a real rating is added).

| What                         | Where                                            | Notes                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Facebook page URL            | `src/lib/site-config.ts` → `social.facebook`     | Footer icon only renders once this is filled in.                                                                                                                                                                                                                                                                                               |
| PA HVAC license number       | `src/lib/site-config.ts` → `license`             | Shown in the footer and About page.                                                                                                                                                                                                                                                                                                            |
| Google rating & review count | `src/lib/site-config.ts` → `google`              | Trust bar rating badge is hidden until both are set.                                                                                                                                                                                                                                                                                           |
| Contact email (if any)       | `src/lib/site-config.ts` → `email`               | Currently blank — the contact form is the only digital contact channel.                                                                                                                                                                                                                                                                        |
| Financing partner details    | `src/components/Financing.tsx`                   | Never publish specific rates/terms that haven't been finalized with the lender.                                                                                                                                                                                                                                                                |
| Real customer reviews        | `src/lib/reviews.ts`                             | Currently **sample/dummy reviews** for layout purposes only — replace with real, permissioned reviews before launch.                                                                                                                                                                                                                           |
| Service area towns           | `src/lib/locations.ts`                           | Ships with one placeholder entry so the location-page template works. Add one entry per town actually serviced — avoid low-quality doorway pages for towns you don't serve.                                                                                                                                                                    |
| Lead delivery (email/CRM)    | `src/app/api/contact/route.ts` → `deliverLead()` | Currently only validates and logs the lead server-side. Wire up real delivery (e.g. Resend, SendGrid, or a CRM webhook) before launch.                                                                                                                                                                                                         |
| Site URL                     | `.env.local` → `NEXT_PUBLIC_SITE_URL`            | Used for canonical URLs, sitemap, and structured data. See `.env.example`.                                                                                                                                                                                                                                                                     |
| Photography                  | `public/images/`                                 | Currently free-license Pexels stock photos (generic technicians/scenes, not your actual team) used as realistic stand-ins. See **[IMAGE_PROMPTS.md](./IMAGE_PROMPTS.md)** for prompts to generate custom branded photos to replace them, and swap the `src` in `src/lib/services.ts` / `Hero.tsx` / `Financing.tsx` once you have real photos. |

## Project structure

```
src/
  app/                  Routes (App Router) — home, services, service-areas, about, contact
  components/           UI components, organized flat with a ui/ and three/ subfolder
  lib/                  Content data (services, locations, reviews, FAQs), site config, schema helpers
```

- **Services**: `src/lib/services.ts` is the single source of truth for all 15 service
  pages (`/services/[slug]`) — each entry drives its own SEO metadata, JSON-LD, and page copy.
- **Service areas**: `src/lib/locations.ts` drives `/service-areas/[slug]` the same way.
- **3D hero**: `src/components/three/` — the fan scene only mounts on desktop viewports
  with WebGL support and respects `prefers-reduced-motion`; it's lazy-loaded via
  `next/dynamic` with `ssr: false` so it never blocks the initial page render.
- **Security headers & CSP**: `next.config.ts`.
- **Contact form**: `src/components/ContactForm.tsx` (client) posts to
  `src/app/api/contact/route.ts`, which validates with Zod, applies a basic in-memory
  rate limit, and checks a honeypot field.

## Notes

- No business statistics, testimonials, awards, or certifications were invented —
  anything not explicitly provided is a bracketed placeholder or omitted from the UI
  until supplied.
- The in-memory rate limiter in `api/contact/route.ts` is per-server-instance and
  resets on restart — fine as a first line of defense, but replace with a durable
  store (e.g. Redis/Upstash) if deploying to a multi-instance/serverless platform at
  scale.
