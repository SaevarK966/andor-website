# Project status — AndOr website

Updated: 2026-07-11

## Executive status

**First production milestone complete, launch-incomplete.**

The Astro 7 + TypeScript production site now has a complete bilingual home page, real localized routes, responsive navigation, persistent dark/light themes, page metadata, structured data and a generated sitemap. Type and production builds pass, and the work is tracked in GitHub through a draft pull request.

The remaining subpages are deliberately thin `noindex` route scaffolds. The site must not be launched until their content, the contact/privacy flow and the unresolved company and asset-rights facts are completed.

## Workspace decisions

- The authoritative working folder is `C:\Users\saeva\Desktop\AndOr-Website-Handoff-ClaudeCowork`.
- The similarly named OneDrive folder is not the source repository.
- Documentation lives in `docs/`; the design reference lives in `prototype/`.
- `src/` and `public/` contain only the production app and approved brand assets.
- Raw project screenshots remain local-only and are excluded from Git and the production site.

## Completed production milestone

- Astro 7 + TypeScript project with lockfile, type checks and static production build.
- Full Icelandic and English home pages at `/` and `/en/`.
- Stable bilingual routes for Control systems, Projects, mySCADA, About and Contact.
- Direct equivalent-page language links, refresh and browser-history-safe navigation.
- Responsive, JavaScript-off-safe mobile navigation with Escape and focus return.
- Persistent dark/light themes, accessible focus styles, AA-safe control contrast and reduced-motion support.
- Unique page titles and descriptions, canonicals, IS/EN/x-default alternates, Open Graph metadata and Organization JSON-LD.
- `robots.txt`, launch-gated indexing and a sitemap restricted to completed indexed pages.
- Code-native HMI demonstration on the home page; no customer screenshots, partner logos or detailed control drawings are published.
- The unverified hard-coded “Öll kerfi í lagi” claim has been removed.

## Current launch blockers

### Remaining pages and engineering

- Complete the bilingual Control systems and mySCADA pages, followed by Projects, About and Contact.
- Add bilingual privacy and 404 pages plus a redirect map from valuable legacy URLs.
- Add a real formatter/linter, automated browser checks, CI and production security headers.
- Produce and approve a dedicated 1200 × 630 social preview image.
- Keep `prototype/` isolated as a reference; it is not part of the production runtime.

### Forms and privacy

- The contact route does not yet collect or send enquiries.
- Select an endpoint and add server-side validation, honest states, spam protection and a bilingual privacy notice.
- Decide retention and processor responsibilities before collecting personal data.

### Rights and sensitive imagery

- Real SCADA screenshots contain operational or identifying details and remain excluded.
- Partner/customer logos and the detailed control drawing remain withheld until relationship, ownership and publication permission are recorded.
- mySCADA product imagery, staff photos and any future project media need an asset-rights register before launch.

### Company address conflict

- The public website and mySCADA distributor listing show **Glerárgata 32, 600 Akureyri**.
- A newer company-record source shows **Eikarlundur 11, 600 Akureyri** as legal/HQ address.
- The current production copy labels Glerárgata as the office and omits an address from JSON-LD. Confirm the office, legal address and map destination before launch.

### Accessibility and performance follow-up

- The production shell now covers keyboard navigation, visible focus, landmarks, direct language links, contrast and reduced motion.
- Any future lightbox or interactive HMI must add modal focus management and useful, quiet live announcements.
- The production home page is static and lightweight. The 15.5 MB prototype remains a review artifact; future content images still need responsive optimization, intrinsic dimensions and lazy loading.

## Public-site comparison

The current [andor.is](https://www.andor.is/) contains useful technical material but has an older presentation and weak mobile behaviour. The redesign preserves the clear separation between control systems and mySCADA while improving hierarchy, navigation, accessibility and conversion paths.

Worth carrying forward after fact and rights review:

- Siemens/mySCADA capability wording and the ventilation, fire-damper, pool and KNX/DALI service categories.
- Technical proof in videos and real HMI material after sanitization and written approval.
- Company identity, legal details and the line “Vinnum saman að betri lausnum!”

## Production architecture

Use Astro + TypeScript to generate static HTML for each page and language. Keep client-side JavaScript small and use React only if an interactive feature clearly requires it.

```text
src/
  components/
    layout/
    pages/
  i18n/
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
public/
  images/brand/
docs/
prototype/
```

## Next milestone

Finish the Control systems and mySCADA pages in both languages, including approved technical copy and product assets. Then complete Projects, About, Contact, Privacy, 404 and redirects before enabling public indexing.
