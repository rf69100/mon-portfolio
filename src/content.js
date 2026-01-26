// ============================================================================
// DONNÉES DE CONTENU DU PORTFOLIO
// ============================================================================

/**
 * Informations personnelles
 */
export const personalInfo = {
  name: "Ryan Fonseca",
  title: "Développeur Web",
  email: "fonseca.ryan69100@gmail.com",
  phone: "07 45 35 23 07",
  phoneFormatted: "07 45 35 23 07",
  location: "Lyon 5ème, 69005",
  linkedin: "https://www.linkedin.com/in/ryan-fonseca-3a73b2302/",
  github: "https://github.com/rf69100",
  initials: "RF",
  tagline: "Étudiant BTS SIO SLAM • Stage APICIL validé • Recherche alternance Bachelor DevOps/Fullstack 2026"
};

/**
 * Navigation
 */
export const navigation = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#competences', label: 'Compétences' },
  { href: '#experience', label: 'Parcours' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' }
];

/**
 * Section Hero / Accueil
 */
export const hero = {
  badge: {
    text: "Disponible pour alternance 2026",
    color: "green"
  },
  intro: "Développeur web passionné par la création d'applications modernes et performantes. Expérience concrète en React, Laravel et gestion de projets fullstack.",
  techs: "React • Laravel",
  formation: "BTS SIO SLAM • 2024-2026",
  context: "Stage en cours chez APICIL (2026)",
  searchStatus: "RECHERCHE ACTIVE : Alternance Rentrée 2026",
  searchDetails: "Bachelor Developpeur Fullstack",
  cta: {
    primary: {
      text: "Télécharger CV",
      href: "/ryan_fonseca_cv.pdf",
      download: true
    },
    secondary: {
      text: "Me contacter",
      href: "#contact"
    }
  }
};

/**
 * Compétences
 */
export const skills = [
  {
    title: "FRONTEND",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    techs: [
      { name: "React", icon: "react" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "TypeScript", icon: "typescript" },
    ]
  },
  {
    title: "BACKEND",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    techs: [
      { name: "Laravel", icon: "laravel" },
      { name: "PHP", icon: "php" },
      { name: "C#", icon: "csharp" },
      { name: "Python", icon: "python" },
      { name: "Node.js", icon: "nodejs" },
    ]
  },
  {
    title: "BASE DE DONNÉES",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    textColor: "text-green-400",
    techs: [
      { name: "MySQL", icon: "mysql" },
      { name: "MariaDB", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
    ]
  },
  {
    title: "OUTILS & SYSTEMES",
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    textColor: "text-yellow-400",
    techs: [
      { name: "Git", icon: "git" },
      { name: "Linux", icon: "linux" },
      { name: "Windows", icon: "windows" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
    ]
  }
];

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
    progress: 80
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
    progress: 60
  },
  {
    number: 5,
    title: "Bachelor Developpeur Fullstack",
    color: "green",
    date: "Rentrée 2026",
    school: "En recherche d'alternance",
    description: "Poursuite d'études en alternance pour approfondir les compétences DevOps, CI/CD, cloud et architecture fullstack.",
    progress: 0
  }
];

/**
 * Mapping des couleurs pour le parcours
 */
export const colorMap = {
  cyan: {
    gradient: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400"
  },
  blue: {
    gradient: "from-blue-500 to-indigo-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400"
  },
  orange: {
    gradient: "from-orange-500 to-red-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400"
  },
  purple: {
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400"
  },
  green: {
    gradient: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400"
  }
};

/**
 * Section Projets
 */
export const projectsConfig = {
  filters: ["all", "web"],
  filterLabels: {
    all: "Tous",
    web: "Web"
  }
};

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
    new: true
  }
];

/**
 * Section Contact
 */
export const contact = {
  title: "Me Contacter",
  subtitle: "Prêt pour une collaboration ?",
  mission: {
    title: "Alternance Développeur Fullstack",
    dates: "Rentrée 2026 (rythme entreprise/école)"
  },
  availability: {
    status: "DISPONIBLE IMMÉDIATEMENT",
    detail: "Pour entretiens et échanges sur votre projet d'alternance"
  },
  techStack: ["React", "Laravel", "PHP", "JavaScript", "MySQL"],
  cta: "ÉCHANGER SUR UNE ALTERNANCE",
  cards: [
    {
      type: "email",
      title: "EMAIL",
      value: "fonseca.ryan69100@gmail.com",
      href: "mailto:fonseca.ryan69100@gmail.com",
      color: "blue"
    },
    {
      type: "phone",
      title: "TÉLÉPHONE",
      value: "07 45 35 23 07",
      href: "tel:+33745352307",
      color: "purple"
    },
    {
      type: "location",
      title: "LOCALISATION",
      value: "Lyon 5ème, 69005",
      color: "green"
    }
  ]
};

/**
 * Sections headers
 */
export const sectionsHeaders = {
  competences: {
    title: "Compétences",
    subtitle: "Mon arsenal technologique",
    gradient: "from-purple-400 to-pink-500"
  },
  parcours: {
    title: "Mon Parcours",
    subtitle: "Formation & Expériences",
    gradient: "from-blue-400 to-cyan-500"
  },
  projets: {
    title: "Mes Projets",
    subtitle: "Réalisations & Créations",
    gradient: "from-purple-400 to-pink-500"
  },
  contact: {
    title: "Me Contacter",
    subtitle: "Prêt pour une collaboration ?",
    gradient: "from-green-400 to-blue-500"
  }
};

/**
 * Loader
 */
export const loaderConfig = {
  name: personalInfo.name,
  initials: personalInfo.initials,
  message: "Chargement du portfolio..."
};

/**
 * SVG Icons (LinkedIn & GitHub paths)
 */
export const socialIcons = {
  linkedin: {
    viewBox: "0 0 24 24",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  },
  github: {
    viewBox: "0 0 24 24",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  },
  hamburger: {
    open: "M6 18L18 6M6 6l12 12",
    closed: "M4 6h16M4 12h16M4 18h16"
  }
};