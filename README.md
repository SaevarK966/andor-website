# AndOr website

Vinnusvæði fyrir nýjan production-vef AndOr ehf.

**Staða:** hágæða frumgerð og efnisgrunnur eru til. Astro-production-grunnurinn er tengdur, en enn þarf að porta hönnunina úr `prototype/` yfir í raunverulegar Astro-síður áður en vefurinn er tilbúinn í loftið.

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
```

Astro keyrir sjálfgefið á `http://localhost:4321`.

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

Porta design tokens, responsive navigation og forsíðuna í Astro + TypeScript með raunverulegum íslenskum og enskum slóðum. React verður aðeins notað fyrir gagnvirku HMI-sýninguna, ljósmyndagallerí og aðra litla islands.
