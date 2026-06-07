# TOLYROBOT

**TOLYROBOT** — a fan page and 3D web project celebrating influencer **Toli Yakovchuk**.

The homepage features an interactive 3D robot (Spline + Next.js) with Toli's face in a mining helmet.

> ⚠️ Unofficial fan project. Not directly affiliated with Toli Yakovchuk.

## Live demo

Deploy from this repo on [Vercel](https://vercel.com) — see [Deploy](#deploy-on-vercel) below.

## Quick start

```bash
git clone https://github.com/rapkuryer-dot/tolyrobot.git
cd tolyrobot
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run verify:head` | Playwright check for Toli head texture |

## Project structure

```
src/app/
  components/   # SplineHero, SiteNavbar, SiteFooter
  libs/         # splineHeads.ts, PricingCards.ts
  docs/         # Documentation page
public/         # Toli head textures, bg.jpeg
```

## Deploy on Vercel

1. Push this repo to GitHub
2. Import Git Repository → `rapkuryer-dot/tolyrobot`
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — no env vars required

## Links

- **GitHub:** [rapkuryer-dot/tolyrobot](https://github.com/rapkuryer-dot/tolyrobot)
- **Docs:** `/docs` on the deployed site
