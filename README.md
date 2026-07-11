# AndOr website

Vinnusvæði fyrir nýjan production-vef AndOr ehf.

**Staða:** fyrsti production-áfanginn er tilbúinn. Forsíðan er komin í Astro á íslensku og ensku með raunverulegum slóðum, responsive valmynd, ljósu/dökku þema, metadata og sitemap. Undirsíðurnar eru enn efnisgrunnar og haldast `noindex` þar til þær eru fullunnar.

## Uppsetning

```text
.
├── AGENTS.md
├── package.json              # Astro production app
├── astro.config.mjs
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── docs/
│   ├── CONTENT.md
│   ├── DESIGN-SPEC.md
│   ├── HANDOFF.md
│   ├── LAUNCH-CHECKLIST.md
│   └── PROJECT-STATUS.md
└── prototype/
    ├── Forsyning-AndOr-vefur.html
    └── site/
```

- `src/` og `public/` eru production-kóðinn sem verður settur í loftið.
- `docs/` geymir samþykkt efni, hönnunarkerfi, stöðu og útgáfugátlista.
- `prototype/site/` er gagnvirka React/Babel-frumgerðin sem er notuð til að sannreyna útlit og hegðun.
- `prototype/Forsyning-AndOr-vefur.html` er stór, sjálfstæð handoff-forskoðun. Hún er mynduð skrá og getur orðið á eftir `prototype/site/`.
- Frumgerðin verður áfram varðveitt þar til sjónræn samsvörun við production-buildið hefur verið staðfest.

## Keyra production-grunninn

```powershell
npm install
npm run dev
npm run check
npm run build
```

Astro keyrir sjálfgefið á `http://localhost:4321`. Allar síður haldast `noindex` nema `PUBLIC_SITE_LIVE=true` sé sérstaklega sett við launch.

## Forskoða frumgerðina

Frá rót verkefnisins:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Opna síðan `http://127.0.0.1:4173/prototype/site/`.

Ekki opna `prototype/site/index.html` beint með `file://`; JSX-skrárnar eru sóttar yfir HTTP.

## Byrja hér

1. Lesa [docs/PROJECT-STATUS.md](docs/PROJECT-STATUS.md).
2. Nota [docs/CONTENT.md](docs/CONTENT.md) sem efnisheimild og halda íslensku og ensku samhliða.
3. Nota [docs/DESIGN-SPEC.md](docs/DESIGN-SPEC.md) fyrir hönnunartóka og komponenta.
4. Fylgja [docs/LAUNCH-CHECKLIST.md](docs/LAUNCH-CHECKLIST.md) áður en vefurinn fer í loftið.

## Næsta tæknilega skref

Fullvinna `Stjórnkerfi` og `mySCADA`, síðan `Verkefni`, `Um AndOr` og `Hafa samband`. Eftir það þarf persónuverndarsíðu, 404-síðu og redirect-kort fyrir gömlu slóðirnar. React verður aðeins notað ef gagnvirka HMI-sýningin þarfnast þess; venjulegt efni og leiðarkerfi haldast í Astro.
