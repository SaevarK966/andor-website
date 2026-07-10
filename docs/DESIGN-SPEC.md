# Design Spec — AndOr Website (React build)

Hi-fi. All token values are exact, copied from `site/tokens/`. Theme: dark navy engineering-industrial look with a single blue accent; a light theme mirrors it via variable overrides.

---

## 1. Design tokens

All values are CSS custom properties on `:root`. Components reference the **semantic aliases** (bottom of each group), never raw hexes.

### Color (`tokens/colors.css`)
```
Brand         --andor-blue #4f9fd8   --andor-blue-strong #3d8cc5   --andor-blue-ink #0b1220
Navy ramp     --navy-900 #0b1220  --navy-850 #101a2e  --navy-800 #16223a  --navy-750 #1b2a47  --navy-700 #233452
Text ramp     --ink-100 #e8edf5   --ink-300 #9db0cc
Accent wash   --andor-blue-soft rgba(79,159,216,.12)  --andor-blue-border rgba(79,159,216,.30)  --andor-glow rgba(79,159,216,.25)
Status        --status-ok #5fc08a  --status-warn #e6b860  --status-error #e06a6a  --status-info = blue
```
Semantic aliases (use these): `--bg`, `--bg-alt`, `--surface-card`, `--surface-hover`, `--border`, `--text-strong`, `--text-body`, `--text-muted`, `--text-accent`, `--accent`, `--accent-hover`, `--accent-soft`.

**Light theme** overrides (set in `index.html` `<style>` on `.theme-light`): `--bg #eef3f9`, `--bg-alt #e2eaf4`, `--surface-card #fff`, `--surface-hover #f2f6fb`, `--border #d3deec`, `--text-strong #10192b`, `--text-body #1b2840`, `--text-muted #5b6b85`, `--nav-bg rgba(255,255,255,.85)`.

### Typography (`tokens/typography.css`)
No web fonts. `--font-sans` = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`; `--font-mono` = `ui-monospace, "SF Mono", Consolas, monospace` (SCADA/technical labels); `--font-serif` = Georgia (logo wordmark only).
Scale: `--fs-display clamp(1.9rem,5vw,3.2rem)`, `--fs-h1 clamp(1.7rem,4vw,2.6rem)`, `--fs-h2 clamp(1.5rem,3.5vw,2.1rem)`, `--fs-h3 1.08rem`, `--fs-lead 1.08rem`, `--fs-body 1rem`, `--fs-sm .93rem`, `--fs-xs .85rem`, `--fs-kicker .82rem`.
Weights 400/500/600/700. Line-height `--lh-tight 1.15`, `--lh-snug 1.3`, `--lh-body 1.6`. Letter-spacing `--ls-tight -.01em`, `--ls-kicker .14em`, `--ls-tag .12em`.

### Spacing / radius / motion (`tokens/spacing.css`)
Spacing scale `--space-1..9` = 4, 8, 12, 16, 22, 26, 34, 42, 70px (9 = section rhythm). Layout: `--container 1100px`, `--nav-height 64px`, `--section-pad 70px`.
Radius: `--radius-sm 8px` (buttons), `--radius-md 10px` (icon chips, inputs), `--radius-lg 12px` (cards), `--radius-xl 16px` (feature/team cards), `--radius-pill 99px` (tags/chips).
Shadows: `--shadow-card 0 0 20px rgba(79,159,216,.25), 0 0 60px rgba(79,159,216,.10)`; `--shadow-soft 0 8px 24px rgba(0,0,0,.35)`.
Motion: `--ease cubic-bezier(.4,0,.2,1)`, `--dur-fast .15s`, `--dur-med .25s`, `--dur-slow .6s`, `--transition all .15s ease`.

---

## 2. Design-system components (`_ds_bundle.js` → `window.AndOrDesignSystem_fefdfe`)

Recreate these as real components in the target codebase (or map to its library). API inferred from usage:

- **`Button`** — `{ variant?: "ghost", onClick, type, children }`. Default = solid accent bg, white text, radius `--radius-sm`, hover `--accent-hover`. `ghost` = transparent, `--border`, hover → accent border/text.
- **`Card`** — `{ interactive?, href?, padding? = "26px", style?, children }`. Surface `--surface-card`, 1px `--border`, radius `--radius-lg`. Interactive/hover → accent border + `--shadow-card` glow + slight lift.
- **`Tag`** — small uppercase pill: accent text on `--accent-soft`, `--andor-blue-border`, radius pill, `--ls-tag`.
- **`SectionHeading`** — `{ kicker?, title, lead? }`. `kicker` = mono accent uppercase (`--fs-kicker`, `--ls-kicker`); `title` = h2 `--fs-h2` `--text-strong`; `lead` = `--text-muted`, max-width ~720.
- **`ServiceCard`** — icon-chip + title + body card (home services).
- **`Chip`** — pill, `--bg-alt`/`--surface-card`, mono, used for spec/skill chips.
- **`Icon`** — `{ name, size? = 24 }`. Line icons (stroke `currentColor`, ~1.8 width). Names used: `wind, flame, droplet, bulb, phone, mail, pin, check`.
- **`IconChip`** — `{ size? = 44 }` rounded square (`--radius-md`) on `--accent-soft` wrapping an Icon.
- **`Input`** — `{ label, type?, placeholder, required, as? = "input"|"textarea" }`. Field on `--bg`, focus ring `0 0 0 3px --accent-soft` + accent border.
- **`Stat`** — `{ value, label }`. Large accent number over muted label.
- **`Avatar`**, **`Badge`** — available in the bundle; not central to these pages.

Website-only components (in the `.jsx`, on `window.AndOrWebsite`): `Navbar`, `Footer`, `Reveal`, `HeroMark`, `PartnerStrip`, `CtaStrip`, `ProcessSection`, `PageHead`, and the page components + `HmiDemo`, `SystemScheme`, `MyBoxScheme`, `ScreenshotGallery`/`Lightbox`.

---

## 3. Signature patterns

- **Navbar** — sticky, `--nav-bg` + `blur(10px)`, 64px tall. Logo (mark + wordmark, wordmark swaps light/dark by theme) · nav links · language dropdown (flag + IS/EN) · round theme toggle.
- **Footer** — logo, a live "Öll kerfi í lagi / All systems operational" status dot (pulsing green), and company line (kt., address→maps, email, phone).
- **HeroMark** — the big blue "A" mark. Mouse-tracking 3D tilt (perspective 800) with an accent drop-shadow glow; alt "float" bob animation; controlled by the Tweaks panel (`motion` tilt/float/off, `tilt` 0–30°, `glow` 0–120px).
- **Process ("Hvað gerum við")** — a glowing accent gradient rule over a 4-step mono-numbered grid (01 HÖNNUN → 04 GANGSETNING).
- **SystemScheme / MyBoxScheme** — inline animated SVG diagrams (field devices → PLC → HMI; and the myBOX network topology). Keep as SVG/`data-om-raster` when porting.
- **HmiDemo** — interactive ventilation simulation: start/stop, setpoint stepper, live damper/fan/heater animation, supply-temp trend polyline, and an event/alarm log. "Interactive demo, not real data."
- **ScreenshotGallery** — grid of delivered SCADA screens; click opens a `Lightbox` (Esc / click-out to close).
- **Reveal** — scroll-triggered fade+rise (IntersectionObserver, `.65s`, `--ease`), with a 2.5s failsafe and reduced-motion opt-out.

---

## 4. Pages

- **heim** (`home-page.jsx`): hero (h1 two-line, lead, 2 buttons, HeroMark + faint control-drawing art) → "Hvað gerum við?" services + 4-step process + 2 CTAs → Verkefni teaser band → PartnerStrip → CtaStrip.
- **stjornkerfi** (`pages.jsx`): PageHead (control-drawing art) → "Okkar lausnir" (4 icon solutions) → `ScadaShowcase` (SystemScheme + how-it-works minis + **HmiDemo**) → CTA.
- **verkefni** (`pages.jsx`): PageHead → `ScreenshotGallery` (6 delivered SCADA screens, lightbox) → CTA.
- **myscada** (`pages.jsx`): PageHead (mySCADA logo art) → `ProductsSection` (myBOX feature + MyBoxScheme, myPANEL feature + size row, myPRO/myDESIGNER/myREPORTS software cards, myscada.org link) → CTA.
- **um** (`pages.jsx` `UmPage`): about intro + 3 Stats + HeroMark → team grid (Stefán, Sævar, Marý) → PartnerStrip → CTA.
- **samband** (`contact-page.jsx`): PageHead → contact cards (phone/email/address) + enquiry form (`Nafn, Netfang, Sími, Skilaboð`) with an inline "Takk fyrir!" success state.

Every page: sticky Navbar + Footer. Section vertical rhythm 70px; alt bands use `--bg-alt` with top/bottom `--border`.
