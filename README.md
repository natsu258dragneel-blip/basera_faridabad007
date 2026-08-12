# Basera Stays — PG Accommodation Website

A premium, fully responsive React + Tailwind CSS website for a PG (paying
guest) accommodation business in Faridabad. Frontend-only — every enquiry is
sent straight to WhatsApp, no backend or database required.

## Quick start

```bash
npm install
npm run dev        # local development, http://localhost:5173
npm run build       # production build → /dist
npm run preview     # preview the production build locally
```

`/dist` after `npm run build` is a static site — upload it as-is to Netlify,
Vercel, GitHub Pages, or any static host.

## What's inside

- **React 19 + Vite** — no Next.js, no backend, no database, no auth.
- **Tailwind CSS 3** with a custom design system (see `tailwind.config.js`):
  deep-emerald / warm-cream / brass palette, `Fraunces` (display serif) +
  `Plus Jakarta Sans` (body) typography, class-based dark mode.
- **WhatsApp-only enquiries** — every "Enquire" button, the enquiry form, and
  the floating chat button build a pre-filled message and open
  `wa.me/919599714297`. See `src/utils/whatsapp.js`.
- **Light/dark theme toggle** — persisted to `localStorage`, respects the
  visitor's system preference on first visit. See `src/hooks/useTheme.jsx`.
- **Client-side room search/filter** — the search bar filters the listings
  already loaded in the browser; there's no API call.

## Editing content

Everything you're likely to want to change lives in `src/data/`:

| File               | Controls                                    |
| ------------------ | -------------------------------------------- |
| `rooms.js`          | Every PG listing — name, price, images, amenities, description |
| `amenities.js`      | The "What's Included" icon grid (icon names come from [lucide-react](https://lucide.dev/icons/)) |
| `locations.js`      | The location cards + search filter dropdown |
| `testimonials.js`   | Resident reviews and star ratings |
| `faq.js`             | FAQ accordion questions and answers |

The WhatsApp number lives in **one place**:
`src/utils/whatsapp.js` → `WHATSAPP_NUMBER`. Change it there and every button
site-wide updates.

## Replacing images

Images live in `public/images/`, organized by section:

```
public/images/
  hero/        full-width hero background
  rooms/       room listing photos (referenced in data/rooms.js)
  gallery/     the gallery grid
  locations/   location cards
  about/       the About section photo
```

Several images are already real property photos (pulled from your uploaded
project assets). Listings without a real photo yet use a generated,
on-brand placeholder SVG that clearly reads "Photo coming soon" — safe to
ship, easy to swap.

**To replace a placeholder:** just drop a real photo into the same folder
using the **same filename** referenced in the matching `src/data/*.js` file
(e.g. replace `public/images/rooms/room-sector2.svg` with a `.jpg`/`.png` of
your choosing, then update the path in `rooms.js` — one line).

**To regenerate placeholders** (e.g. after adding a new location), edit
`scripts/generate-placeholders.mjs` and run:

```bash
node scripts/generate-placeholders.mjs
```

## Project structure

```
src/
├── components/     One component per UI section (Navbar, Hero, RoomCard, …)
├── data/           Editable content — rooms, amenities, locations, testimonials, FAQ
├── hooks/          useTheme (dark mode), useScrollReveal (fade-up on scroll)
├── pages/          Home.jsx composes every section
├── utils/          whatsapp.js — the WhatsApp deep-link/message builder
├── App.jsx
├── main.jsx
└── index.css       Tailwind layers + design tokens (buttons, cards, inputs)
```

## Notes

- No analytics, ads, tracking, or third-party scripts beyond Google Fonts.
- No data is ever sent to a server — the enquiry form only ever opens
  WhatsApp with a pre-filled message; nothing is stored or transmitted
  elsewhere.
- Built and QA'd across mobile (390px), tablet (820px), and desktop
  (1440px) viewports, in both light and dark mode.
