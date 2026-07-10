# Launch checklist

The site is not ready to launch until every applicable item is checked with current evidence.

## 1. Foundation

- [ ] Astro + TypeScript production project initialized with a lockfile.
- [ ] Formatter, linter and type/build checks configured.
- [ ] Preview deployments and production hosting selected.
- [ ] Runtime Babel, React development CDN, `_ds_bundle.js` and tweak panel excluded from production.
- [ ] Security headers configured: CSP, HSTS, Referrer-Policy, Permissions-Policy, `X-Content-Type-Options` and `frame-ancestors`.

## 2. Pages and languages

- [ ] Every Icelandic page has a real stable URL.
- [ ] Every English page has a real `/en/` URL.
- [ ] Navigation, refresh, Back/Forward and shared deep links work.
- [ ] IS and EN content remain in sync with `docs/CONTENT.md`.
- [ ] A useful 404 page exists in both languages.

## 3. SEO and discoverability

- [ ] Unique title and meta description on every route.
- [ ] Correct canonical and IS/EN `hreflang` links.
- [ ] Open Graph and social preview images.
- [ ] Correct H1 and heading hierarchy on every page.
- [ ] Organization/LocalBusiness structured data with verified company facts.
- [ ] `robots.txt` and generated sitemap verified on the production domain.
- [ ] Redirect map prepared from every valuable old `andor.is` URL.

## 4. Content, trust and rights

- [ ] Company facts, names, titles, address, phone and email approved.
- [ ] Customer/project claims approved and evidence-backed.
- [ ] Written permissions recorded for partner logos, product material and staff portraits.
- [ ] All HMI/SCADA screenshots sanitized and approved by the relevant customer.
- [ ] No usernames, room identifiers, operational values, dates or confidential layouts remain in public imagery.
- [ ] Hard-coded system-status claim removed or connected to a real source.

## 5. Contact and privacy

- [ ] Contact endpoint selected and tested end to end.
- [ ] Required-field, email and message validation works on client and server.
- [ ] Honest loading, success and failure states.
- [ ] Spam/rate-limit controls enabled.
- [ ] IS/EN privacy policy covers purpose, retention, processors and contact rights.
- [ ] Form consent/notice links to the privacy policy.
- [ ] No analytics or non-essential cookies load before the required consent.

## 6. Accessibility

- [ ] Keyboard access and visible focus for all controls.
- [ ] Skip link and semantic `header`, `nav`, `main` and `footer` landmarks.
- [ ] Language menu follows an accessible pattern.
- [ ] Lightbox is a labelled modal with focus trap, Escape close and focus return.
- [ ] HMI events/alarms expose useful live announcements without noise.
- [ ] All normal text and controls meet WCAG AA contrast.
- [ ] All motion respects `prefers-reduced-motion`.
- [ ] Meaningful images have useful alt text; decorative images are hidden.

## 7. Responsive and visual QA

For every route, both languages and both themes:

- [ ] 360 × 800
- [ ] 390 × 844
- [ ] 768 × 1024
- [ ] 1440 × 900
- [ ] No horizontal overflow.
- [ ] No portrait or product-image clipping.
- [ ] Navigation, forms, HMI and gallery remain usable.
- [ ] Visual-regression screenshots reviewed.

## 8. Performance and reliability

- [ ] Images emitted as responsive AVIF/WebP with appropriate fallbacks.
- [ ] Below-the-fold images lazy-load; hero assets are intentionally prioritized.
- [ ] Intrinsic image dimensions prevent layout shift.
- [ ] No console errors, failed assets or broken internal/external links.
- [ ] Production build passes Lighthouse/performance review on mobile and desktop.
- [ ] Build, accessibility and end-to-end checks run in CI.

## 9. Cutover

- [ ] DNS/hosting access and rollback owner confirmed.
- [ ] Existing URL redirects tested before DNS change.
- [ ] Domain, HTTPS, canonical host and email delivery verified.
- [ ] Analytics/Search Console configured only after privacy review.
- [ ] Production smoke test completed immediately after launch.
- [ ] Rollback procedure tested and documented.
