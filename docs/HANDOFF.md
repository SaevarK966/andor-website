# AndOr ehf. — Website Handoff

> Archived handoff instructions. In this workspace the referenced `site/` and standalone preview now live under `prototype/`. Use the root `README.md` and `PROJECT-STATUS.md` for current workflow and status.

Handoff package for **Claude Code / Codex**. This is the **newest** version of the AndOr marketing site — the interactive React build with bilingual copy (IS/EN), light/dark themes, an animated brand mark, and a live control-system (HMI) demo.

> Site content is **Icelandic (`is`)** with a full **English (`en`)** translation built in. Keep both.

---

## What's in this bundle

```
AndOr-Website-Handoff/
├── README.md                    ← start here — architecture + how to run
├── DESIGN-SPEC.md               ← design tokens, design-system components, per-page layout
├── CONTENT.md                   ← every string (IS + EN) + company facts
├── Forsyning-AndOr-vefur.html   ← ⚡ preview — one self-contained file, double-click to open
└── site/                        ← the source to hand off
    ├── index.html               (app shell: theme/lang bootstrap, mounts <Site/>)
    ├── chrome.jsx               (Navbar, Footer, Reveal, language + theme switchers)
    ├── home-page.jsx            (hero + animated mark, services, process, partners, CTA)
    ├── pages.jsx                (Stjórnkerfi, Verkefni, mySCADA, Um AndOr pages + HMI demo)
    ├── contact-page.jsx         (contact cards + enquiry form)
    ├── tweaks-panel.jsx         (in-page tweak controls — dev/design aid, not shipped UI)
    ├── styles.css               (design-system entry — @imports the token files)
    ├── tokens/                  (colors, typography, spacing, base — all CSS custom props)
    ├── _ds_bundle.js            (compiled AndOr Design System — provides the UI components)
    └── assets/                  (logos, product renders, partner logos, SCADA screenshots, team)
```

## How to open / preview

### ⚡ Fastest: double-click `Forsyning-AndOr-vefur.html`
One self-contained file — all pages, components, styles, and images are baked in. Works from anywhere (needs an internet connection the first time, to pull React & Babel from a CDN). Use it to *look at and click through* the design.

### 🛠 The source: `site/` — run it with a local server
This build uses **React 18 + in-browser Babel**, loading the `.jsx` files over HTTP. Because Babel fetches those files with XHR, **opening `site/index.html` directly with `file://` will not work** (and neither will opening it from inside a zip). Run a tiny static server instead:

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```
(any static server works — `npx serve`, VS Code Live Server, etc.)

---

## About these files (read before implementing)

The files in `site/` are a **design reference / working prototype** — they show the intended look, content, and behavior. They are **not** meant to be shipped verbatim: it's a single-file-per-component prototype transpiled in the browser, which is fine for review but not for production.

**The task:** recreate this in the target codebase using its own patterns.
- Rebuild each page/section as real components in the target framework (Next / Astro / Vite-React / Vue…). The `.jsx` here maps almost 1:1 to components you'll write.
- Lift the **design tokens** from `tokens/` (or `DESIGN-SPEC.md`) into the target's theme system.
- The UI primitives (`Button`, `Card`, `Tag`, `Input`, `Icon`, …) come from the **AndOr Design System** (`_ds_bundle.js`). Recreate them as real components, or map them onto the target's existing component library. Their API is documented in `DESIGN-SPEC.md`.
- If there's no codebase yet, pick a modern framework and implement there. Do **not** ship the in-browser-Babel setup to production.

## Fidelity: **High-fidelity (hi-fi)**

Final colors, typography, spacing, motion, and copy are all decided. Match them exactly — tokens in `tokens/`, copy in `CONTENT.md`.

---

## Architecture at a glance

- **App shell** (`index.html`): reads `andorLang` / `andorTheme` from `localStorage`, exposes two global helpers used everywhere — `L(is, en)` (pick language) and `TH(dark, light)` (pick theme value) — then mounts `<Site/>`, which does client-side routing with a `page` state variable. Pages: `heim`, `stjornkerfi`, `verkefni`, `myscada`, `um`, `samband`.
- **Design system** (`_ds_bundle.js`): exposes components on `window.AndOrDesignSystem_fefdfe` (`Button`, `Card`, `Tag`, `SectionHeading`, `ServiceCard`, `Chip`, `Icon`, `IconChip`, `Input`, `Stat`, `Avatar`, `Badge`). Website-specific components register on `window.AndOrWebsite`.
- **Theming**: `dark` (default) and `light`, toggled by a body class; light-mode token overrides live in `index.html`'s `<style>`. All colors are CSS custom properties, so theming is variable-swaps only.
- **i18n**: every visible string is `L("íslenska", "english")`. Language persists in `localStorage`.
- **Motion**: `Reveal` (IntersectionObserver fade-in, respects `prefers-reduced-motion`); an interactive 3D-tilt/float brand mark (`HeroMark`); and a live **HMI demo** (`HmiDemo` in `pages.jsx`) simulating a ventilation loop with start/stop, setpoint, trend and alarms.
- **Tweaks panel**: `tweaks-panel.jsx` is a review-time control panel (brand-mark motion/tilt/glow). It's a design aid — **not** part of the production UI; drop it when porting.

## Responsive behavior

- Content max-width **1100px** (`--container`), centered, 20px gutters.
- All card / product / team / process grids use `auto-fit minmax()` and reflow on their own.
- Hero, product features, contact and HMI layouts collapse to a single column on narrow viewports via `flex-wrap` / `minmax` (no manual breakpoints needed for most).

---

See **DESIGN-SPEC.md** for tokens + the design-system component API, and **CONTENT.md** for all copy (IS + EN).
