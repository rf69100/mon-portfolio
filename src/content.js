// ============================================================================
// DONNÉES DE CONTENU DU PORTFOLIO
// ============================================================================

/**
 * Informations personnelles
 */
export const personalInfo = {
  name: "RYAN FONSECA",
  title: "Développeur Fullstack",
  email: "fonseca.ryan69100@gmail.com",
  phone: "07 45 35 23 07",
  location: "Lyon 5ème, 69005",
  linkedin: "https://www.linkedin.com/in/ryan-fonseca-3a73b2302/",
  github: "https://github.com/rf69100"
};

/**
 * Section Hero / Accueil
 */
export const hero = {
  intro: "Développeur web passionné par la création d'applications modernes et performantes. Expérience concrète en React, Laravel et gestion de projets fullstack.",
  techs: "React • Laravel",
  formation: "BTS SIO SLAM • 2024-2026",
  context: "Stage validé chez APICIL (2026)",
  searchStatus: "RECHERCHE ACTIVE : Alternance Rentrée 2026",
  searchDetails: "Bachelor DevOps ou Fullstack"
};

/**
 * Section Parcours
 */
export const parcours = [
  {
    number: 1,
    title: "Baccalauréat Général",
    color: "cyan",
    date: "2021 - 2024",
    school: "Lycée Frédéric Fays",
    description: "Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques).",
    progress: 100
  },
  {
    number: 2,
    title: "BTS SIO Option SLAM",
    color: "blue",
    date: "2024 - 2026",
    school: "Lycée Les Chassagnes",
    description: "Développement d'applications web, gestion de bases de données, cybersécurité et réseaux.",
    progress: 75
  },
  {
    number: 3,
    title: "Stage Développeur Web",
    color: "orange",
    date: "2025",
    school: "Les Chassagnes",
    description: "Développement d'une application de gestion de stages en Laravel.",
    progress: 100
  },
  {
    number: 4,
    title: "Stage Développeur Web",
    color: "purple",
    date: "Janvier - Février 2026",
    school: "APICIL",
    description: "Développement web en environnement professionnel : conception d'interfaces, intégration backend et travail en équipe.",
    progress: 0
  },
  {
    number: 5,
    title: "Bachelor DevOps / Fullstack",
    color: "green",
    date: "Rentrée 2026",
    school: "En recherche d'alternance",
    description: "Poursuite d'études en alternance pour approfondir les compétences DevOps, CI/CD, cloud et architecture fullstack.",
    progress: 0
  }
];

/**
 * Section Contact
 */
export const contact = {
  mission: {
    title: "Alternance Développeur Web/DevOps",
    dates: "Rentrée 2026 (rythme entreprise/école)"
  },
  availability: {
    status: "DISPONIBLE IMMÉDIATEMENT",
    detail: "Pour entretiens et échanges sur votre projet d'alternance"
  },
  cta: "ÉCHANGER SUR UNE ALTERNANCE"
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