# remoteoffice.al — Remote Office company website

Marketing website for **Remote Office Solutions** (English default, Albanian toggle in the header).
React 19 + TypeScript + Vite, no backend, no external requests (fonts are self-hosted).
Styled 1:1 after the *RemoteOffice Brand Guidelines v1.0* (tokens in `src/index.css`).

> **This repo is only the company website on `remoteoffice.al`.**
> The portal landing + app launcher on `portal.remoteoffice.al` is a different project
> (`Xhelo-hub/portal.remoteoffice-site`) and the client portal itself (Laravel) is `Xhelo-hub/client-portal`.

| Host | What | Repo | Server directory |
|---|---|---|---|
| `remoteoffice.al`, `www` | Company website (this repo) | `remoteoffice-site` | `/var/www/remoteoffice.al` |
| `portal.remoteoffice.al` | Portal landing + app launcher, then Laravel for `/login`, `/documents`, … | `portal.remoteoffice-site`, `client-portal` | `/var/www/portal-landing`, `/var/www/portal` |

```
remoteoffice-site/
├── index.html            ← <head>: title, meta, favicon set, OG tags, font preloads
├── deploy.sh             ← build + upload dist/ to the server (see Deploy)
├── public/
│   ├── favicon.svg / favicon.ico / apple-touch-icon.png / og-image.png   ← official brand assets
│   └── assets/fonts/     ← Inter + Space Grotesk (woff2, self-hosted — no Google Fonts)
└── src/
    ├── index.css         ← brand tokens (light + dark), @font-face, base styles
    ├── App.css           ← layout and components (uses tokens only)
    ├── App.tsx           ← the page: copy for EN/SQ + sections
    ├── Brand.tsx         ← LogoMark, outline Icon set, HeroIllustration
    └── main.tsx
```

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint       # oxlint
npm run build      # tsc -b && vite build  -> dist/
npm run preview    # serve dist/ locally
```

## Deploy

```bash
npm run deploy                       # = ./deploy.sh  (build, then tar dist/ over ssh)
./deploy.sh deploy@169.58.239.187    # explicit SSH target
SKIP_BUILD=1 ./deploy.sh             # upload the existing dist/
```

The script uploads to `deploy@srv1.remoteoffice.al:/var/www/remoteoffice.al` with an atomic
directory swap. Caddy serves that directory for `remoteoffice.al` + `www` via
`/etc/caddy/sites/remoteoffice.caddy` — no server config change is needed for a normal deploy.
Requires an SSH key authorised for the `deploy` user (works from Git Bash on Windows).

## Content

- All copy lives in the `content` object in `src/App.tsx` (`en` and `sq`). Keep both in sync.
- Tone (brand guidelines): short sentences, second person, no exclamation marks, no empty superlatives.
- Taglines: EN *Every deadline, every document, under control.* — SQ *Dokumentet, afatet dhe listëpagesat — në një vend.*
- Team photos are placeholders for now (`.avatar`); use real photos of the team, never stock.

## Brand rules baked into the code

- Colours only via CSS custom properties from `src/index.css`. Gold `--color-accent` is one highlight
  per view; gold *text* on light backgrounds uses `--color-accent-text` (#8A6D1F).
- Inter for everything (weights 400/500/600 — no Bold 700); Space Grotesk only for the hero H1.
- Dates, amounts, IDs and phone numbers get the `.num` class (tabular numerals).
- Logo: `LogoMark` + lowercase `remoteoffice` in the header; the full lockup with *SOLUTIONS* only in the footer.
  Favicon and app icon are the tile alone. Never recolour the mark.
