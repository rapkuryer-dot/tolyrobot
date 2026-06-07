# TOLYROBOT

**TOLYROBOT** — фан-страница и 3D-веб-проект в честь инфлюенсера **Толи Яковенко**.

На главной — интерактивный 3D-робот (Spline + Next.js) с лицом Толи в шахтёрской каске. Проект поддерживается комьюнити и будущим токеном **$TOLY**.

> ⚠️ Неофициальный фан-проект. Не связан напрямую с Толей Яковенко.

## Ссылки

- **GitHub:** [rapkuryer/tolyrobot](https://github.com/rapkuryer/tolyrobot)
- **Документация:** `/docs` на сайте
- **Деплой:** [Vercel](https://vercel.com) — импорт репозитория, Next.js auto-detect

## Стек

- Next.js 14 + TypeScript
- Tailwind CSS
- Spline 3D (`@splinetool/react-spline`)
- Vercel для хостинга

## Быстрый старт

```bash
git clone https://github.com/rapkuryer/tolyrobot.git
cd tolyrobot
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000)

## Сборка

```bash
npm run build
npm start
```

## Деплой на Vercel

1. Зайди на [vercel.com/new](https://vercel.com/new)
2. Import Git Repository → `rapkuryer/tolyrobot`
3. Framework: **Next.js** (авто)
4. Deploy

Переменные окружения не требуются.

## $TOLY Token

Комьюнити-токен для финансирования проекта: разработка, хостинг, 3D-улучшения и погашение долгов при постройке TOLYROBOT. Подробности — на странице `/docs`.

## Структура

```
src/app/
  components/   # SplineHero, SiteNavbar, SiteFooter
  libs/         # splineHeads.ts, PricingCards.ts
  docs/         # Документация
public/         # Текстуры головы Толи, bg.jpeg
```

## License

MIT
