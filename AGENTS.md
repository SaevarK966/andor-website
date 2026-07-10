# AndOr website — working rules

## Source of truth

Read these before changing content or architecture:

1. `docs/PROJECT-STATUS.md`
2. `docs/CONTENT.md`
3. `docs/DESIGN-SPEC.md`
4. `docs/LAUNCH-CHECKLIST.md`

`prototype/` is a visual and behavioural reference. It is not production source and must not be deployed verbatim.

## Non-negotiables

- Keep Icelandic and English content in sync. Use real locale routes; do not hide both languages behind one client-only URL.
- Preserve supplied names, titles, company facts and approved wording exactly unless the user asks to change them.
- Treat horizontal overflow, clipped product renders and poorly framed portraits as bugs. Verify at 360, 390, 768 and 1440 px.
- Do not publish the SCADA screenshots until customer permission and a redaction review are recorded. They contain operational and identifying details.
- Do not show a successful contact-form state unless a backend confirms delivery.
- Do not claim live system status unless the status is actually connected to monitoring.
- Remove the tweak panel, runtime Babel, CDN development React and generated design bundle from production.
- Keep the original prototype until visual parity is verified in a production build.

## Preferred production shape

- Astro + TypeScript for static pages and SEO.
- React islands only for genuinely interactive features such as the HMI demo and lightbox.
- Central typed IS/EN content dictionaries.
- Real routes, metadata, canonical URLs, hreflang, sitemap, robots and LocalBusiness/Organization structured data.
- A real contact endpoint with validation, spam protection, failure states and a bilingual privacy notice.

## Verification

Before launch, run the checks documented in `docs/LAUNCH-CHECKLIST.md`. Browser verification must include every route in both languages, light and dark themes, keyboard use, reduced motion and the responsive viewport matrix.
