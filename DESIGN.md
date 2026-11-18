# Design System — AKSARA

A dark, editorial studio site for four digital services. One accent per division,
thin display type, thin rules, crop-mark corners. The work carries the page; the
interface stays quiet around it.

Tokens live in [`app/globals.css`](app/globals.css). This file explains **why**
and **when** to use them. Change both together.

---

## 1. Principles

1. **Work first.** No decorative UI between the visitor and the offer.
2. **One accent per page.** The accent is a signal — status, hover, focus, CTA.
   Never wallpaper, and never more than one hue in a single section.
3. **Frame, don't decorate.** 1px hairline + corner brackets instead of shadows
   and gradients on cards.
4. **Type does the drama.** Huge, light, tightly tracked headings; tiny mono
   labels. Little in between.
5. **Publish only what exists.** No invented testimonials, counts, awards, or
   prices (see [`PRODUCT.md`](PRODUCT.md)).

---

## 2. Color

Base palette is shared. The accent changes per route via `data-accent` on the
page wrapper.

| Token | Value | Role | Contrast on `--bg` |
|---|---|---|---|
| `--bg` | `#000000` | Page background | — |
| `--fg` | `#F9F9F9` | Primary text, solid buttons | 20.5:1 |
| `--muted` | `#A7A7A7` | Secondary text, labels, captions | 8.9:1 |
| `--surface` | `#333333` | Card tint, image wells (low opacity) | — |
| `--line` | `rgba(249,249,249,.13)` | Hairline borders, dividers | — |
| `--line-strong` | `rgba(249,249,249,.26)` | Card outlines, frame edges | — |
| `--invert-bg` / `--invert-fg` | `#F9F9F9` / `#000000` | Inverted blocks | 19.5:1 |

**Accents** — every value stays ≥ 4.5:1 on black and accepts black text on a
solid fill:

| Scope | Token | Value | Division |
|---|---|---|---|
| `[data-accent="home"]` | `--accent` | `#E85002` | AKSARA / homepage |
| `[data-accent="dev"]` | `--accent` | `#FF3B30` | Web Development |
| `[data-accent="design"]` | `--accent` | `#22C55E` | Logo & Branding |
| `[data-accent="tulis"]` | `--accent` | `#FACC15` | Penulisan |
| `[data-accent="data"]` | `--accent` | `#3B82F6` | Pengolahan Data |

`--color-accent` in the Tailwind theme resolves to `var(--accent)`, so
`text-accent`, `border-accent/45`, `bg-accent`, and `from-accent` all follow the
nearest scope. Artwork gradients derive from the same token with `color-mix()`.

**Rules**

- `#646464` (3.5:1) is for decorative marks, borders, icons only — **never**
  small text. Use `--muted` instead.
- Do not introduce a second accent inside one page or section. The division
  switcher in the nav and footer is the only place several accents meet, and
  only as 6px dots.
- Text over the glow/gradient sections must sit on a near-black area or a
  black/55 scrim.
- Solid buttons always use black text on the accent fill.

---

## 3. Typography

**Families** (via `next/font/google`):

- **Hanken Grotesk** — headings and body. UI uses weights 300–500.
- **JetBrains Mono** — labels, indices, metadata, buttons. Always UPPERCASE.

| Role | Class / recipe | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|---|
| Display | `.h1` | `clamp(3.25rem, 9vw, 7.5rem)` | 300 | 0.90 | -0.045em |
| Hero H1 | inline override | `clamp(2.9rem, 7.2vw, 6.4rem)` | 300 | 0.88 | -0.05em |
| Section | `.h2` | `clamp(2.5rem, 6vw, 5.25rem)` | 300 | 0.95 | -0.04em |
| Card title | `.h3` | `clamp(1.25rem, 1.6vw, 1.625rem)` | 500 | 1.15 | -0.025em |
| Lead | `.lead` | `clamp(1rem, 1.1vw, 1.125rem)` | 400 | 1.60 | -0.011em |
| Body | `body` | `1rem` | 400 | 1.50 | -0.011em |
| Caption | `.caption` | `0.8125rem` | 400 | 1.45 | -0.005em |
| Label | `.eyebrow` | `0.6875rem` mono | 400 | 1.2 | 0.18em |
| Micro | `.micro` | `0.625rem` mono | 400 | 1.2 | 0.14em |

**Rules**

- Display sizes always use `clamp()`; no fixed pixel headings.
- Weight 300 for display, 400 body, 500 for card titles and wordmark.
- One display size per view. Don't stack `.h1` + `.h2` at equal visual weight.
- Mono is a label voice, not a body voice. Max two short lines.

---

## 4. Layout & spacing

| Item | Value |
|---|---|
| Container | max `1440px`; padding `20px` → `40px` (md) → `56px` (lg) |
| Section rhythm | `72px` mobile, `112px` desktop (`.section`) |
| Card gaps | `12px` mobile, `16px` desktop |
| Card padding | `20px` → `24px` → `32px` |
| Radii | buttons `6px`, tiles `8px`, cards `12px`, frames `16px`, pills `9999px` |
| Borders | `1px solid var(--line)`; strong variant for interactive frames |
| Scroll offset | `96px` (`scroll-margin-top`) to clear the fixed header |

Breakpoints: `<640` single column, `640–1023` two columns, `≥1024` three
columns / split layouts, `≥1440` container caps and gutters grow only.
No horizontal scrolling at any width; wide artwork is clipped by
`overflow-hidden`.

---

## 5. Surfaces & effects

| Class | Use | Notes |
|---|---|---|
| `.panel` | Service and division cards | `#333` @ 22% fill, hairline border, hover to 34% |
| `.cta-glow` | Contact block | Two radial accent glows over `#050505` |
| `.hero-mesh` | Hero right panel | Radial mesh + one blurred conic ribbon |
| `.brand-gradient` | Featured price bar | Light → accent → dark → black |
| `.menu-glow` | Menu overlay wash | Single accent radial |
| `.service-glow` | Card hover wash | Single accent radial, faded in via opacity |
| `.row-glow` | Process row hover | Accent linear wash from the left |
| `.btn-frame` | Outline CTAs | Mono uppercase, 44px min height |
| `.btn-solid` | Primary CTAs | Accent fill, black text |

`CornerBrackets` draws 14px crop marks at `inset-2`/`inset-3`. Use on frames,
cards, and media blocks — not on every nested element, and never over text.

**Performance budget**

- Max **2** `backdrop-filter` surfaces per viewport (header pill, menu).
- Max **1** large blurred layer per view (`hero-mesh::before`). Static.
- Animate only `transform`, `opacity`, `clip-path`. No animated `width`, `top`,
  `filter`, or `box-shadow`. No `will-change` at rest.

---

## 6. Components

**Header** — fixed floating pill, `bg-black/55` + blur. Left: dots + `MENU`.
Center: logo tile, wordmark, divider, division role. Right: social icons and a
solid `Mulai Proyek` pill. Brand links to the current page's `#top`.

**Menu overlay** — full-screen `<dialog aria-modal>`, black + accent radial.
Numbered anchor links in display type, a `Divisi AKSARA` switcher (home + four
divisions, each with its own accent dot), WhatsApp, and social links. Clip-path
entrance, focus trapped, `Escape` closes, body scroll locked.

**Hero** — centred display headline, lead, two CTAs, claim row, and a facts row
(location, response time, availability). Right-half mesh is decorative and
hidden below `lg`.

**Section heading** — `SectionHeading` renders `NN / EYEBROW`, optional
`(count)`, an `.h2`, a short muted lead, and an optional CTA link. Numbering:
`01` about, `02` services, `03` process, `04` works, `05` pricing, `06` FAQ,
`07` contact.

**Division cards** (homepage) — four large panels linking to `/dev`, `/design`,
`/tulis`, `/data`. Each card carries its own `data-accent`, so the icon, dot,
and hover wash take that division's color while the page stays orange.

**Service card** — equal cards. Accent icon in a hairline square, mono index at
the top-right; title and description at the bottom. Hover fades in the accent
wash, warms the frame, and lifts the card 3px.

**Work card** — 16:9 media block. With an image: object-cover with a slow zoom.
Without one: a typographic specimen tile (category + large name) on the accent
wash — used by divisions that have no screenshots yet.

**Pricing** — three tiers; the featured tier gets an accent frame and the
`.brand-gradient` bar. CTA preselects the package in the (unrendered) form and
links to `#kontak`.

**Contact** — glow panel with the accent heading, availability, WhatsApp number,
chat CTA, and social chips.

**Footer** — hairline bracket frame: wordmark + role, menu line, back-to-top,
division links (each with its accent dot), copyright, and location.

---

## 7. Motion

Standard curve: `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease`). Durations `0.4–0.9s`.
Motion is used for hierarchy, not decoration.

| Moment | Recipe |
|---|---|
| Hero eyebrow | fade + `y: 10 → 0`, 0.6s |
| Heading lines | mask `y: 110% → 0`, 0.8s @ 0.45s / 0.52s |
| Copy / CTAs / claims | fade + `y: 12–16 → 0`, 0.6s @ 0.6s |
| Section reveal | `Reveal`: `y: 26 → 0`, 0.7s, `once`, `margin: -10%` |
| Stagger | 0.08s between cards |
| Hover | CSS only: border → accent, arrow +3px, no layout shift |
| Marquee | CSS `46s linear infinite`, pauses offscreen and via Pause/Play |

Reduced motion: `MotionConfig reducedMotion="user"`, `usePrefersReducedMotion`
guards entrances, and CSS disables marquee/ping/scroll smoothing.

---

## 8. Imagery

- Logo: `public/logo.png` (transparent-free square asset). Used in the header,
  menu, and as the app icon.
- Project screenshots: `public/works/*.jpg`, 16:9, lazy-loaded below the fold.
- No raster icons, no emoji as icons, no client-side image filters or canvas.
- Divisions without screenshots use typographic specimen tiles instead of
  reusing another division's images.

---

## 9. Accessibility

- Text contrast: body ≥ 4.5:1 (`--muted` is 8.9:1 on black). Accents are chosen
  so small accent text also clears 4.5:1 on black.
- Focus: 2px `--accent` outline, 3px offset.
- Targets: 44px minimum.
- Semantics: `header`/`nav`/`main`/`footer`, one `h1` per page, numbered section
  `h2`s, card `h3`s. Skip link is the first tab stop and targets `#main`.
- Icon-only controls carry `aria-label`; the menu trigger exposes
  `aria-expanded`/`aria-controls`; current division links use `aria-current`.
- Marquees pause. Reduced motion respected. FAQ uses `aria-expanded` +
  `aria-controls`.

---

## 10. Do / Don't

**Do**

- Let black dominate; add the page accent only where attention is required.
- Use one big idea per section: one headline, one support paragraph.
- Keep card chrome to a hairline + crop marks.
- Write plainly, first person, no hype (see `PRODUCT.md`).

**Don't**

- Don't put body copy on the gradient or the glow.
- Don't add a second accent to one page, colored shadows, glows on text, or
  glass everywhere.
- Don't animate blur, box-shadow, width, or height.
- Don't invent testimonials, client logos, benchmark numbers, awards, or prices.
- Don't add a light theme; this is a single dark identity.

---

## 11. Sources of truth

| What | Where |
|---|---|
| Tokens, utilities, effects | `app/globals.css` |
| Copy, branches, accents, contact details | `lib/content.ts` |
| Product intent and constraints | `PRODUCT.md` |
| Division page template | `components/branch/BranchPage.tsx` |
| Motion primitives | `components/layout/MotionProvider.tsx`, `components/ui/Reveal.tsx` |
| Shared UI | `components/ui/` |
| Sections | `components/sections/` |
