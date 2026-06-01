# Portfolio — Ryan Fonseca

Portfolio personnel single-page déployé sur [ryanfonseca.fr](https://ryanfonseca.fr).

## Stack

- **React 19** (Create React App)
- **Tailwind CSS 3**
- **prop-types** — validation runtime (pas de TypeScript)
- **Jest + React Testing Library**
- Déploiement sur **Apache** (SPA fallback via `.htaccess`)

## Démarrage rapide

```bash
npm install
npm start        # dev server sur 0.0.0.0:3000
```

## Commandes

| Commande | Description |
|---|---|
| `npm start` | Serveur de développement (`0.0.0.0:3000`) |
| `npm run build` | Build de production dans `build/` |
| `npm test` | Tests en mode watch |
| `npm test -- --watchAll=false` | Tests en mode CI (une seule exécution) |
| `npm test -- App.test.js` | Lancer un fichier de test spécifique |

ESLint est intégré à `react-scripts` (config `react-app`), pas de script lint séparé.

## Architecture

### Routing

Pas de bibliothèque de routage. `src/App.jsx` choisit entre deux pages lazy-loadées selon `window.location.pathname` via le hook `useRoute` :

- `/coming-soon` → `pages/ComingSoon`
- tout autre chemin → `pages/Portfolio`

`public/.htaccess` redirige toutes les routes inconnues vers `index.html` (fallback SPA Apache).

### Contenu data-driven

Le contenu du portfolio (projets, formations, expériences, compétences, veille, hero, contact) vit dans `src/data/*.js` sous forme d'objets/tableaux exportés. **Pour modifier le contenu, éditer les fichiers de données — pas le JSX.**

`pages/Portfolio.jsx` connecte chaque export de données à sa section correspondante.

### Composants réutilisables

`components/sections/CardSection.jsx` est un composant générique utilisé pour les sections "formation", "réalisations" et "expérience" — chacun reçoit un tableau `data` différent et un objet header depuis `data/sectionsHeaders.js`.

`components/common/Card.jsx` est le renderer de carte partagé ; il adapte son rendu selon les champs optionnels présents (`date`, `school`, `type`, `techs`, `github`, `link`, `reportUrl`, `new`).

### Résolution des liens

`utils/buildProjectUrl.js` résout le champ `link` d'un item :
- Les préfixes externes/spéciaux (`http`, `mailto`, `tel`, `#`) et les chemins absolus internes (`/coming-soon`) passent tels quels.
- Tout autre chemin est préfixé avec `PROJECT_BASE_URL`.
- Un `link` à `/coming-soon` fait afficher un bouton "Bientôt" au lieu de "Voir".

### Configuration & variables d'environnement

`src/config/env.js` centralise les constantes partagées :

| Variable | Valeur par défaut | Description |
|---|---|---|
| `REACT_APP_PROJECT_BASE_URL` | `https://ryanfonseca.fr` | Base URL des sous-projets |
| `LOADER_DELAY_MS` | — | Délai du loader initial |
| `SCROLL_THRESHOLD` | — | Seuil de scroll pour les animations |

### Tailwind — ne pas interpoler les classes

`src/data/styleMaps.js` mappe des clés sémantiques (`cyan`, `blue`, `orange`, `purple`, `green`, `red`) vers des chaînes de classes Tailwind **complètes et littérales**. Tailwind purge les classes qu'il ne trouve pas en clair dans les sources — ne jamais construire les noms dynamiquement (ex: `` `bg-${color}-500` `` sera purgé).

### Animations scroll-reveal

Les sections démarrent avec `opacity-0` + une classe `animate-*`. Le hook `useScrollReveal` (utilisé par `Portfolio`) ajoute `animate-visible` via `IntersectionObserver` quand une `section[id]` entre dans le viewport, et gère le smooth-scroll vers le hash d'URL au chargement. Les keyframes et classes utilitaires d'animation sont définis dans `src/App.css` et `src/index.css`.

### Résilience & chargement

- Chaque section Portfolio est enveloppée dans `components/common/ErrorBoundary.jsx` — une section en erreur n'affecte pas le reste de la page.
- Les sections lourdes (`Projects`, `Contact`) et les deux pages utilisent `React.lazy` + `Suspense`.
- `useInitialLoad` affiche un `Loader` pendant `LOADER_DELAY_MS` avant de révéler la page.

### Assets statiques

Les PDFs (CV, rapports de stage, présentations) et images sont dans `public/` et référencés par chemin absolu depuis les fichiers de données (ex: `cta.href: '/cv_ryan_fonseca.pdf'`).

## Structure du projet

```
src/
├── App.jsx              # Entrée — routing + lazy loading
├── config/env.js        # Constantes et variables d'environnement
├── data/                # Contenu du portfolio (éditer ici pour modifier le contenu)
│   ├── styleMaps.js     # Map couleurs → classes Tailwind littérales
│   ├── sectionsHeaders.js
│   └── *.js             # Projets, formations, expériences, compétences…
├── pages/
│   ├── Portfolio.jsx    # Page principale
│   └── ComingSoon.jsx   # Page placeholder
├── components/
│   ├── common/          # Card, ErrorBoundary, Loader…
│   └── sections/        # CardSection, Hero, Skills…
├── hooks/               # useRoute, useScrollReveal, useInitialLoad…
└── utils/               # buildProjectUrl.js…
public/
├── .htaccess            # Fallback SPA Apache
└── *.pdf / images       # Assets statiques
```

## Conventions

- Composants en `.jsx`, exports nommés (sauf `Portfolio`, `ComingSoon` et `App` qui sont des exports par défaut).
- `PropTypes` déclarés sur chaque composant.
- Hooks réutilisables dans `src/hooks/`, un hook par fichier, nommés `use*`.
- Tous les textes UI sont en français.
