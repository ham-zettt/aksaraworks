# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners of small Indonesian businesses (UMKM), students, and small teams who need one of four things done well: a website, a visual identity, help with writing, or cleaned-up spreadsheet data. They arrive from Instagram, WhatsApp, or search — usually on a phone — and are deciding whether to trust a remote studio from Pamekasan with the work.

## Product Purpose

AKSARA is a digital services studio with four divisions. The site is its shopfront: `/` introduces the studio and routes visitors to the right division, and each division page (`/dev`, `/design`, `/tulis`, `/data`) must turn a skeptical visitor into a real WhatsApp conversation. Success is a qualified inquiry, not a browse.

## Positioning

Four related services from one studio, with plain-language, fixed-scope delivery: scope, price, and schedule agreed before work starts, no hidden fees, and full handover of the result. A neighbouring freelancer could not truthfully copy that promise across all four disciplines at once.

## Operating Context

- Read in Indonesian, on mobile, in short sessions between other work.
- The studio's own site is itself the proof: speed, finish, and consistency are judged as evidence of the work.
- WhatsApp is the dominant contact channel; the contact form is secondary and currently not rendered.
- Divisions: web development, logo & branding, writing/editing, and Excel data processing.

## Routes

| Route | Division | Accent |
|---|---|---|
| `/` | AKSARA — studio overview | orange `#E85002` |
| `/dev` | AKSARA.DEV — Web Development | red `#FF3B30` |
| `/design` | AKSARA.DESIGN — Logo & Branding | green `#22C55E` |
| `/tulis` | AKSARA.TULIS — Penulisan | yellow `#FACC15` |
| `/data` | AKSARA.DATA — Pengolahan Data | blue `#3B82F6` |

## Capabilities and Constraints

- Next.js 16 App Router, TypeScript, Tailwind CSS v4, Motion, lucide-react.
- `/` uses Hero, About, Divisions, Contact. Division pages share one template (`components/branch/BranchPage.tsx`): Hero, ticker, About, Services, Process, Works, Pricing, FAQ, Contact.
- All copy lives in `lib/content.ts`; the accent token is set per route with `data-accent`.
- Decorative visuals are CSS/SVG only; project screenshots in `public/works/` are the only raster assets.
- Published packages, prices, delivery windows, revision counts, project names, and samples are illustrative placeholders. `lib/content.ts` marks them `TODO(PLACEHOLDER)`; they are not confirmed commitments.

## Brand Commitments

- Name: AKSARA. Indonesian-language voice: direct, warm, jargon-free, never salesy.
- Logo asset: `public/logo.png`, also used as the app icon.
- One accent per division; the homepage keeps the orange brand accent.

## Evidence on Hand

None verified. `lib/content.ts` marks as `TODO(PLACEHOLDER)`: all package prices, delivery estimates, project names, samples, WhatsApp number, production domain, email, and social URLs. Future work must not present any of them as fact.

## Product Principles

1. Explain before you impress — a non-technical visitor must always know what happens next and what it costs.
2. The site is the portfolio: every millisecond and every pixel is a sample of the deliverable.
3. Commitments are fixed and written down before work starts.
4. Give the client ownership — domain, source files, and the ability to reuse the result.
5. No invented proof.

## Accessibility & Inclusion

Motion respects `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`. Mobile-first reading at small sizes is the default context. All accents pass 4.5:1 against black for body-size text; solid buttons use black text on the accent fill.
