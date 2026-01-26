// ============================================================================
// DONNÉES DE CONTENU DU PORTFOLIO
// ============================================================================

/**
 * Section Hero / Accueil
 */
export const hero = {
  intro: "Étudiant en BTS SIO SLAM, je développe des applications web complètes avec une approche axée sur l'innovation et la qualité du code.",
  techs: "React • Laravel • TypeScript • MySQL",
  formation: "BTS SIO SLAM - Campus Numérique in the Alps",
  searchStatus: "🎯 EN RECHERCHE D'ALTERNANCE",
  searchDetails: "Bachelor DevOps / Fullstack (Rentrée 2026)"
};

/**
 * Section Parcours
 */
export const parcours = [
  {
    number: 1,
    title: "BAC PRO SN",
    date: "2018 - 2021",
    school: "Lycée Carriat - Bourg-en-Bresse",
    description: "Baccalauréat Professionnel Systèmes Numériques option RISC (Réseaux Informatiques et Systèmes Communicants). Formation aux bases de l'informatique et des réseaux.",
    color: "cyan",
    progress: 100
  },
  {
    number: 2,
    title: "MC CDI",
    date: "2021 - 2022",
    school: "GRETA - Villeurbanne",
    description: "Mention Complémentaire Cyberdéfense et Infrastructures. Spécialisation en sécurité informatique, protection des systèmes et gestion des infrastructures réseau.",
    color: "blue",
    progress: 100
  },
  {
    number: 3,
    title: "BTS SIO",
    date: "2024 - 2026",
    school: "Campus Numérique in the Alps",
    description: "BTS Services Informatiques aux Organisations option SLAM. Formation au développement d'applications, gestion de bases de données et méthodologies agiles. Stage validé chez APICIL.",
    color: "purple",
    progress: 50
  },
  {
    number: 4,
    title: "BACHELOR",
    date: "2026 - 2027",
    school: "En recherche",
    description: "Objectif : Bachelor DevOps ou Fullstack pour approfondir mes compétences en développement et intégration continue. Recherche active d'alternance pour septembre 2026.",
    color: "green",
    progress: 0
  }
];

/**
 * Section Contact
 */
export const contact = {
  availability: {
    status: "DISPONIBLE",
    detail: "Septembre 2026"
  },
  mission: {
    title: "Bachelor DevOps / Fullstack",
    dates: "Sept. 2026 - Juin 2027"
  },
  cta: "🚀 LANCER LA MISSION"
};

/**
 * Section Projets
 */
export const projects = [
  {
    id: 1,
    title: "NBA Dashboard",
    category: "web",
    description: "Dashboard interactif en React avec statistiques de joueurs NBA et classements des équipes.",
    github: "https://github.com/rf69100/nba-dashbord",
    link: "/nba_dashboard/",
    techs: ["React", "API", "Stats"],
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    new: false
  },
  {
    id: 2,
    title: "Spotify Album finder",
    category: "web",
    description: "Application web pour explorer la discographie complète des artistes via l'API Spotify avec interface moderne et responsive.",
    github: "https://github.com/rf69100/album_finder_spotify",
    link: "/spotify-finder/",
    techs: ["React", "Spotify API", "Bootstrap", "CSS3"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    features: [
      "Recherche d'artistes en temps réel",
      "Affichage de la discographie complète",
      "Design responsive optimisé mobile",
      "Intégration directe avec Spotify",
      "Interface utilisateur moderne"
    ],
    new: false
  },
  {
    id: 3,
    title: "F1 Strategy Simulator 2026",
    category: "web",
    description: "Simulation complète de stratégie F1 avec données 2026, calculs physiques avancés et interface de course réaliste.",
    github: "https://github.com/rf69100/f1-strategy-simulator",
    link: "/f1-strategy-simulator/",
    techs: ["React", "TypeScript", "Zustand", "F1 Data", "Physics Engine"],
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    features: [
      "Données F1 2026 réalistes (20 pilotes, 10 équipes)",
      "Physique de course avancée avec calculs réalistes",
      "Système de stratégie optimisée avec IA",
      "Télémétrie en temps réel avec alertes intelligentes",
      "Gestion Safety Car et conditions météo dynamiques",
      "Interface immersive style F1 officiel",
      "18 circuits avec caractéristiques uniques",
      "Système de pneus et carburant réaliste"
    ],
    new: false
  },
  {
    id: 4,
    title: "Café Pâtisserie",
    category: "web",
    description: "Site vitrine moderne pour une pâtisserie/café, réalisé avec React, Vite, Wouter, Tailwind et backend Express/Drizzle.",
    github: "https://github.com/rf69100/CafePatisserieSite",
    link: "/cafe-patisserie/",
    techs: ["React", "Vite", "Wouter", "Tailwind", "Express", "Drizzle"],
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
    features: [
      "Routing SPA optimisé sous-dossier Apache",
      "Pages légales et privacy intégrées",
      "Design responsive et moderne",
      "Catalogue produits dynamique",
      "Déploiement automatisé sur VPS OVH",
      "Backend Express + MariaDB (Drizzle ORM)"
    ],
    new: false
  },
  {
    id: 5,
    title: "FitZoneShop",
    category: "web",
    description: "Plateforme e-commerce complète pour produits de fitness avec administration avancée, gestion des commandes et authentification 2FA.",
    github: "https://github.com/rf69100/FitZoneShopFinal",
    link: "/FitZoneShop/",
    techs: ["Laravel 12", "React 19", "TypeScript", "Inertia.js", "Tailwind CSS 4", "MariaDB", "Pest PHP"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    features: [
      "E-commerce complet avec panier et wishlist",
      "Authentification sécurisée avec 2FA (Laravel Fortify)",
      "Dashboard administrateur avec statistiques en temps réel",
      "Gestion complète produits, commandes et clients",
      "Merge automatique panier invité vers utilisateur connecté",
      "Interface moderne avec Radix UI et Lucide icons",
      "42 tests automatisés avec Pest PHP (73% couverture)",
      "Architecture monolithique moderne avec Inertia.js",
      "Système de rôles (Customer/Admin) et protection des routes",
      "Design responsive avec dark mode ready"
    ],
    new: true
  }
];