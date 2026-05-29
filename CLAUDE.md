# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio (single-page, French-language content) for Ryan Fonseca. Create React App + React 19 + Tailwind CSS 3. No TypeScript — runtime type checks use `prop-types`.

## Commands

- `npm start` — dev server bound to `0.0.0.0:3000` (the script forces HOST/PORT).
- `npm run build` — production build into `build/`.
- `npm test` — Jest + React Testing Library in watch mode.
- `npm test -- --watchAll=false` — run tests once (CI-style).
- `npm test -- App.test.js` — run a single test file by name pattern.

ESLint runs via `react-scripts` (`react-app` config); there is no separate lint script.

## Architecture

**Custom routing, no router library.** `src/App.jsx` chooses between two lazy-loaded pages based on `window.location.pathname` (via the `useRoute` hook): `/coming-soon` → `pages/ComingSoon`, everything else → `pages/Portfolio`. `useRoute` only listens to `popstate`, so navigation is effectively full-page. `public/.htaccess` rewrites unknown paths to `index.html` (Apache SPA fallback) — the app is deployed to an Apache host, not a static CRA server.

**Data-driven content.** Page text/content lives in `src/data/*.js` as plain exported objects/arrays; section components render from those. To change portfolio content (projects, formations, experience, skills, veille, hero, contact), edit the data files — not the JSX. `pages/Portfolio.jsx` wires each data export to a section.

**`CardSection` is generic and reused.** The "formation", "realisations", and "experience" sections are all the same `components/sections/CardSection.jsx`, each passed a different `data` array plus a header object from `data/sectionsHeaders.js`. `components/common/Card.jsx` is the shared card renderer; it adapts its layout to whichever optional fields (`date`, `school`, `type`, `techs`, `github`, `link`, `reportUrl`, `new`) an item provides.

**Link resolution.** `utils/buildProjectUrl.js` resolves an item's `link`: external/special prefixes (`http`, `mailto`, `tel`, `#`) and internal absolute paths (`/coming-soon`) pass through unchanged; any other path is prefixed with `PROJECT_BASE_URL`. This is because sub-projects (e.g. `/nba_dashboard/`) are deployed under the same domain. A `link` of `/coming-soon` makes a card render a "Bientot" button instead of "Voir".

**Config & env.** `src/config/env.js` holds shared constants. `PROJECT_BASE_URL` comes from `REACT_APP_PROJECT_BASE_URL` (default `https://ryanfonseca.fr`). Also `LOADER_DELAY_MS` and `SCROLL_THRESHOLD`.

**Tailwind color maps — do not interpolate classes.** `src/data/styleMaps.js` maps semantic color keys (`cyan`/`blue`/`orange`/`purple`/`green`/`red`) to **full literal** Tailwind class strings. Tailwind purges classes it can't find as complete strings in source, so always look up via these maps rather than constructing class names dynamically (e.g. `` `bg-${color}-500` `` will be purged and silently break styling).

**Scroll-reveal animations.** Sections start with `opacity-0` + an `animate-*` class. The `useScrollReveal` hook (used by `Portfolio`) runs an `IntersectionObserver` that adds the `animate-visible` class when a `section[id]` scrolls into view, and also handles smooth-scroll to URL hash on load. Keyframes/animation utility classes are defined in `src/App.css` and `src/index.css` (not in `tailwind.config.js`).

**Resilience & loading.** Each Portfolio section is individually wrapped in `components/common/ErrorBoundary.jsx`, so one failing section won't blank the whole page. Heavier sections (`Projects`, `Contact`) and both pages are `React.lazy` + `Suspense`. `useInitialLoad` gates the page behind a brief `Loader` (`LOADER_DELAY_MS`).

**Static assets.** PDFs (CV, internship reports, presentations) and images live in `public/` and are referenced by absolute path from data files (e.g. hero `cta.href: '/cv_ryan_fonseca.pdf'`).

## Conventions

- Components are `.jsx`, named exports (except the two page defaults `Portfolio`/`ComingSoon` and `App`), with `PropTypes` declared.
- Reusable hooks live in `src/hooks/` (one hook per file, named `use*`).
- UI copy is in French; keep new user-facing strings French to match.
