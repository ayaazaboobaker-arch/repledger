# Rep Ledger

A personal fitness tracker: plan your training week, run sessions with scroll-wheel set logging, log food from a built-in list (with South African staples), track steps and weekly weigh-ins, and see progress week by week.

Built with React 19, TypeScript, Vite, Zustand (saved to the browser's localStorage) and Recharts.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build                 # static site in dist/ — deploy to Vercel, Netlify, GitHub Pages, etc.
SINGLE=1 npm run build        # one self-contained dist/index.html you can open or share
```

Uses a hash router (`/#/train`), so it works on any static host with no server config.

## What's where

| Page | What it does |
|---|---|
| **Today** (`src/pages/Today.tsx`) | Today's session with per-exercise progress (sparkline, weight/reps/volume charts, week-by-week sets × reps), calorie ring, one-tap meals, steps, weigh-in, weekly summary |
| **Train** (`src/pages/Train.tsx`) | Pick a session, then log each set with Sets / Reps / Weight scroll wheels, rest timer, next-weight suggestion, and a PR summary at the end |
| **Food** (`src/pages/Food.tsx`, `src/components/FoodPicker.tsx`) | Meal-by-meal diary; search ~80 foods, portion chips + slider, recent foods, saved meals, custom foods from labels (kJ converted) |
| **Progress** (`src/pages/Progress.tsx`) | Strength per exercise, body weight vs goal, steps, calories and sessions per week |
| **Plan** (`src/pages/Plan.tsx`) | Edit the weekly plan |
| **Me** (`src/pages/Profile.tsx`) | Profile questionnaire → calorie target with step-by-step explanation, macros, step goal, timeline, recommended training split |

Logic lives in `src/lib/`: `calc.ts` (Mifflin–St Jeor BMR → maintenance → goal target, macros), `plans.ts` (split templates by days/experience/equipment), `foods.ts` (food list, per 100 g), `stats.ts` (progress maths), `demo.ts` (six weeks of demo data, generated relative to today), `store.ts` (state + persistence).

## Demo data

The app opens with demo data. "Start with my own data" (banner or **Me** page) clears it and opens the profile questionnaire; "Load demo data" on the **Me** page brings it back.

Food values are typical figures for everyday tracking — packaged products vary, so the label wins. Calorie targets are estimates, not medical advice.
