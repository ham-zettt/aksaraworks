# AKSARA — studio layanan digital

Marketing site for an Indonesian digital studio with four divisions: web
development, logo & branding, writing, and Excel data processing. Next.js App
Router, TypeScript, Tailwind CSS v4, Motion, lucide-react.

## Routes

| Route | Page |
|---|---|
| `/` | Studio overview: hero, about, four divisions, contact (orange) |
| `/dev` | AKSARA.DEV — websites (red) |
| `/design` | AKSARA.DESIGN — logo & branding (green) |
| `/tulis` | AKSARA.TULIS — writing & editing (yellow) |
| `/data` | AKSARA.DATA — Excel & data (blue) |

All four division routes share `components/branch/BranchPage.tsx` and only swap
content + the `data-accent` token.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run check   # contact-form logic self-check
npm run build
```

## Edit content

All Indonesian copy — hero, about, services, process, works, pricing, FAQ,
contact details, and the accent per division — lives in
[`lib/content.ts`](lib/content.ts). Look for `TODO(PLACEHOLDER)` comments and
replace:

- `site.whatsapp.display`, `site.whatsapp.number` (digits only, with country code)
- `site.url`, `site.email` (also used by metadata, sitemap, and robots)
- `socials` URLs
- `works` copy and artwork (`public/works/*.jpg`, 16:9); items without an
  `image` render a typographic tile
- `pricing.items` prices, delivery estimates, and features
- Division accents are the `[data-accent]` rules in `app/globals.css`

Contact form validation and the WhatsApp message builder live in
[`lib/contact.ts`](lib/contact.ts).

## Structure

```
app/
  page.tsx                  homepage (hero, about, divisions, contact)
  [branch]/page.tsx         /dev /design /tulis /data
  layout.tsx                fonts, metadata, skip link, MotionConfig
  globals.css               tokens, per-division accents, utilities
components/
  branch/BranchPage.tsx     shared division template
  layout/                   Navbar, Footer, FloatingWhatsApp, MotionProvider
  sections/                 Hero, About, Divisions, Services, Process, Works, Pricing, Faq, Contact
  ui/                       Button, SectionHeading, CornerBrackets, Reveal, Marquee, SocialLinks...
lib/content.ts              all copy, branches, accents + placeholders
lib/contact.ts              form validation + message builder
```

Animations use Motion with `MotionConfig reducedMotion="user"`; the service
ticker pauses on hover/focus, stops off-screen, and has a manual pause control.
