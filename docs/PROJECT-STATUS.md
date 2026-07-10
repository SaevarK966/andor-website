# Project status — AndOr website

Updated: 2026-07-10

## Executive status

**Prototype-complete, launch-incomplete.**

The handoff contains a strong high-fidelity redesign with six views, Icelandic and English copy, dark/light themes, a project gallery, product content and an interactive HMI demo. It is a much stronger content and design direction than the current public Wix site.

It is not a production codebase yet. There was no Git repository, package manifest, lockfile, build, test suite, CI or deployment configuration when the audit began.

## Workspace decisions

- The authoritative working folder is `C:\Users\saeva\Desktop\AndOr-Website-Handoff-ClaudeCowork`.
- The similarly named OneDrive folder is an empty unborn Git shell and is not source.
- The current handoff is preserved externally in `C:\Users\saeva\Desktop\AndOr Design System.zip`.
- Documentation now lives in `docs/`; the review build lives in `prototype/`.
- The repository root is the future production project root.

## Verified prototype behaviour

- All six views render and active local asset references load.
- Icelandic/English switching works and persists.
- Dark/light theme switching works and persists.
- The HMI start/stop interaction works.
- All views now avoid horizontal document overflow at a 390 px viewport.
- A real mobile menu now replaces the full desktop navigation below 860 px.
- Contact and HMI layouts collapse to one column on narrow screens.
- myPANEL size diagrams wrap on narrow screens.
- The dark-theme border token collision was fixed.
- The About view now has an H1.

These fixes improve the review prototype; they do not turn it into production code.

## Current launch blockers

### Production engineering

- React development builds and Babel are downloaded from UNPKG and JSX is transpiled in each visitor's browser.
- `_ds_bundle.js` contains design-system components, duplicate site code and stale legacy scripts.
- Navigation is React state plus `href="#"`; there are no real URLs, deep links, Back/Forward history or per-page HTML.
- There is one global title/description and no canonical, Open Graph, hreflang, sitemap, robots or structured business data for the redesign.
- Copy is duplicated between Markdown, JSX, the generated bundle and the standalone preview.
- No automated tests, build checks, preview deployment or security headers exist.

### Forms and privacy

- The contact form does not send anything; it only changes to a success message.
- A real endpoint, error handling, validation, spam protection and a bilingual privacy notice are required.
- A data-retention and processor decision is needed before collecting enquiries.

### Rights and sensitive imagery

- The six SCADA screenshots contain real operational screens, zone/room names, dates/times and at least one logged-in identifier.
- Obtain written customer permission and publish sanitized copies with identifying and operational details replaced.
- Confirm rights for partner logos, mySCADA product material and all staff photos.
- Keep an asset-rights register before launch.

### Accessibility and honest claims

- Primary white text on the current blue button and light-theme blue text on white do not meet WCAG AA contrast for normal text.
- The language menu, lightbox focus handling and HMI live announcements need production-grade keyboard/screen-reader work.
- Continuous animations must respect reduced motion in the production build.
- Replace the hard-coded “Öll kerfi í lagi” message unless it is connected to a real status source.

### Performance

- The standalone preview is about 15.5 MB and is a generated artifact.
- Prototype assets are about 5.5 MB; several photos and SCADA PNGs can be significantly reduced with responsive AVIF/WebP output.
- Add intrinsic sizes, lazy loading and responsive image sources.

## Public-site comparison

The current [andor.is](https://www.andor.is/) has useful technical content but is visually dated and severely broken on mobile. At 390 px it rendered a 1,032 px-wide layout. It also lacks H1 on most pages, uses `lang="en"` for Icelandic content, has no meta descriptions, contains leftover template wording and offers weak conversion paths.

Worth preserving from the existing site:

- Clear separation between control systems and the mySCADA product family.
- Siemens/mySCADA specialization and the ventilation, fire-damper, pool and KNX/DALI service categories.
- Existing technical proof in videos and real HMI material, after permissions and sanitization.
- Company identity, legal details and the line “Vinnum saman að betri lausnum!”

## Recommended production architecture

Use Astro + TypeScript, generating static HTML for each page and language. Keep React only where interaction earns its cost.

```text
src/
  components/
    layout/
    ui/
    interactive/
  content/
    is.ts
    en.ts
  layouts/
  pages/
    index.astro
    stjornkerfi.astro
    verkefni.astro
    myscada.astro
    um-andor.astro
    hafa-samband.astro
    en/
  styles/
    tokens.css
    global.css
public/
  images/
  icons/
tests/
  e2e/
docs/
prototype/
```

Useful primary documentation:

- [Why Astro](https://docs.astro.build/en/concepts/why-astro/)
- [Astro project structure](https://docs.astro.build/en/basics/project-structure/)
- [Astro i18n routing](https://docs.astro.build/en/reference/modules/astro-i18n/)

## Recommended information architecture

- Forsíða / Home
- Lausnir / Solutions
  - Stjórnkerfi og iðnaðarstýringar
  - Loftræsing, brunalokur og húskerfi
  - Sundlaugar og pottakerfi
  - KNX / DALI
- mySCADA
  - Product overview and comparison
  - myBOX, myPANEL and relevant software
- Verkefni / Projects
- Um AndOr / About
- Hafa samband / Contact
- Persónuvernd / Privacy

The first production milestone is a real routed shell plus the home page in both languages, with design tokens, responsive navigation, metadata and automated viewport checks.
