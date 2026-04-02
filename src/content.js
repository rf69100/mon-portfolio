// ============================================================================
// DONNÉES DE CONTENU DU PORTFOLIO
// ============================================================================

/**
 * Informations personnelles
 */
export const personalInfo = {
  name: "Ryan Fonseca",
  title: "Développeur Fullstack",
  email: "fonseca.ryan69100@gmail.com",
  phone: "07 45 35 23 07",
  phoneFormatted: "07 45 35 23 07",
  location: "Lyon 5ème, 69005",
  linkedin: "https://www.linkedin.com/in/ryan-fonseca-3a73b2302/",
  github: "https://github.com/rf69100",
  initials: "RF",
  tagline: "Étudiant BTS SIO SLAM • Recherche alternance Bachelor Developpeur Fullstack 2026"
};

/**
 * Navigation
 */
export const navigation = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#competences', label: 'Compétences' },
  { href: '#veille', label: 'Veille' },
  { href: '#formation', label: 'Formation' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#stages', label: 'Stages' },
  { href: '#projets', label: 'Projets personnels' },
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
  context: "En recherche dd'une alternance pour 2026",
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
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Angular", icon: "angular" },
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
      { name: "Postman", icon: "postman" },
      { name: "Docker", icon: "docker"},
      { name: "Jira", icon: "jira" },
    ]
  }
];

/**
 * Section Parcours
 */
export const formationsData = [
  {
    id: 1,
    title: "Baccalauréat Général",
    category: "formation",
    description: "Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques).",
    github: "",
    link: "",
    techs: ["Maths", "NSI", "Python"],
    image: "https://www.ac-nantes.fr/sites/ac_nantes/files/2022-03/baccalaur-at-17084.jpeg",
    date: "2021 - 2024",
    school: "Lycée Frédéric Fays",
    new: false
  },
  {
    id: 2,
    title: "BTS SIO Option SLAM",
    category: "formation",
    description: "Développement d'applications web, gestion de bases de données, cybersécurité et réseaux.",
    github: "",
    link: "",
    techs: ["PHP", "JavaScript", "SQL", "C#"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    date: "2024 - 2026",
    school: "Lycée Les Chassagnes",
    new: true
  },
  {
    id: 3,
    title: "Bachelor Développeur Fullstack",
    category: "recherche",
    description: "Poursuite d'études en alternance pour approfondir les compétences DevOps, CI/CD, cloud et architecture fullstack.",
    github: "",
    link: "",
    techs: ["Fullstack", "DevOps", "CI/CD"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    date: "Rentrée 2026",
    school: "En recherche d'alternance",
    new: true
  }
];

export const stagesData = [
  {
    id: 1,
    title: "Stage Développeur Web",
    category: "stage",
    description: "Développement d'une application de gestion de stages en Laravel.",
    github: "",
    link: "",
    techs: ["Laravel", "PHP", "MySQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    date: "2025",
    school: "Les Chassagnes",
    new: false
  },
  {
    id: 2,
    title: "Stage Développeur Web",
    category: "stage",
    description: "Développement web en environnement professionnel : conception d'interfaces, intégration backend et travail en équipe.",
    github: "",
    link: "",
    techs: ["React", "API", "Scrum"],
    image: "https://th.bing.com/th/id/OIP.ZCcG5cusX5-ilvKG9o0olAHaEK?w=315&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    date: "Janvier - Février 2026",
    school: "APICIL",
    new: true
  }
];

export const realisationsData = [
  // Placeholder array for AP/TP. User said they would add them themselves, but let's provide a structure.
  {
    id: 1,
    title : "AP - M@Banque",
    category: "ap",
    description: "Atelier de professionnalisation : développement d'une application de gestion bancaire en PHP.",
    github: "",
    link: "",
    techs: ["PHP", "MySQL"],
    image: "https://th.bing.com/th/id/OIP.mAhhcad_-s47pvcBj5Oe8QHaEK?w=317&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    new: false
  },
  {
    id: 2,
    title: "AP - Gestion des adhérents",
    category: "ap",
    description: "Atelier de professionnalisation : création d'un système complet de gestion.",
    github: "",
    link: "",
    techs: ["PHP", "VBA", "SQL"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    new: false
  },
  {
    id: 3,
    title: "AP - Client lourd pour la gestion des stocks",
    category: "ap",
    description: "Travail pratique : développement d'une application de gestion de stock en C#.",
    github: "",
    link: "",
    techs: ["C#", "MySQL", ".Net Core"],
    image: "https://th.bing.com/th/id/OIP.1jXQf4IHH44r1A3HAHbueQHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    new: false
  },
  {
    id: 4,
    title: "AP - Application mobile LyonPalme",
    category: "ap",
    description: "Atelier de professionnalisation : développement d'une application mobile en React Native pour la gestion d'événements sportifs à Lyon.",
    github: "",
    link: "",
    techs: ["React Native", "JavaScript", "API"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    new: false
  }

];

/**
 * Veille technologique
 */
export const veilleData = [
  {
    id: 1,
    title: "L'évolution des frameworks web modernes",
    date: "2025 - 2026",
    description: "Comparaison des frameworks ( React, Angular, Laravel, Symfony) : nouveautés (Laravel 12, React 19), performances et essor du Full-stack JS (Next.js, Nuxt.js).",
    link: "#",
    source: "Sujet principal"
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
    link: "/f1-simulator/",
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
    link: "/coming-soon",
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
  ],
  nextStep: {
    title: "PROCHAIN DÉPART",
    subtitle: "En attente de votre signal"
  }
};

/**
 * Sections headers
 */
export const sectionsHeaders = {
  competences: {
    title: "Tableau des Compétences",
    subtitle: "Mon arsenal technologique",
    gradient: "from-purple-400 to-pink-500"
  },
  veille: {
    title: "Veille Technologique",
    subtitle: "Recherche et actualité IT",
    gradient: "from-green-400 to-emerald-500"
  },
  formation: {
    title: "Formation",
    subtitle: "Mon parcours académique",
    gradient: "from-blue-400 to-cyan-500"
  },
  realisations: {
    title: "Réalisations en formation",
    subtitle: "Travaux Pratiques et Atelier de Professionnalisation",
    gradient: "from-orange-400 to-red-500"
  },
  stages: {
    title: "Stages",
    subtitle: "Expériences professionnelles",
    gradient: "from-yellow-400 to-orange-500"
  },
  projets: {
    title: "Mes Projets Personnels",
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

/**
 * Styles des cartes pour les compétences
 */
export const skillsCardStyles = {
  purple: 'bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/60 shadow-purple-500/40',
  blue: 'bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/60 shadow-blue-500/40',
  green: 'bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/60 shadow-green-500/40',
  yellow: 'bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-2 border-yellow-500/60 shadow-yellow-500/40'
};

/**
 * Couleurs des titres pour les compétences
 */
export const skillsTitleColors = {
  purple: 'text-purple-300',
  blue: 'text-blue-300',
  green: 'text-green-300',
  yellow: 'text-yellow-300'
};

/**
 * Styles des cartes pour le parcours
 */
export const parcoursCardStyles = {
  cyan: 'bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border-cyan-400 shadow-cyan-500/50',
  blue: 'bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-400 shadow-blue-500/50',
  orange: 'bg-gradient-to-br from-orange-900/30 to-orange-800/20 border-orange-400 shadow-orange-500/50',
  purple: 'bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-400 shadow-purple-500/50',
  green: 'bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-400 shadow-green-500/50'
};

/**
 * Couleurs des titres pour le parcours
 */
export const parcoursTitleColors = {
  cyan: 'text-cyan-300',
  blue: 'text-blue-300',
  orange: 'text-orange-300',
  purple: 'text-purple-300',
  green: 'text-green-300'
};

/**
 * Styles des badges pour le parcours
 */
export const parcoursBadgeStyles = {
  cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-400',
  blue: 'bg-blue-500/20 text-blue-300 border-blue-400',
  orange: 'bg-orange-500/20 text-orange-300 border-orange-400',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-400',
  green: 'bg-green-500/20 text-green-300 border-green-400'
};

/**
 * Page Coming Soon
 */
export const comingSoon = {
  header: {
    title: "WORK IN PROGRESS",
    titleShort: "WIP",
    backButton: "Retour au Portfolio"
  },
  hero: {
    title: "PROJET EN CONSTRUCTION",
    subtitle: "Ca arrive bientot, promis !",
    gradient: "from-purple-400 via-blue-500 to-cyan-500"
  },
  terminal: {
    filename: "deployment.sh",
    command: "deploying",
    progress: 99.9,
    note: "* Estimation tres optimiste (on y croit tous !)"
  },
  statusMessages: [
    "Le dev est parti chercher des croissants...",
    "En train de debugger 47 erreurs... enfin 48... 49...",
    "Ctrl+S en boucle pour etre sur",
    "Le code compile... enfin presque",
    "Claude est en maintenace... Chatgpt aussi d'ailleurs...",
    "npm install patience --save",
    "git push --force (oups)",
    "Le cafe n'etait pas assez fort aujourd'hui (et bon)",
    "En train de negocier avec le CSS",
    "undefined is not a function",
    "Le serveur fait sa sieste",
    "It works on my machine (c'est vrai je mens pas !)",
    "404 Motivation Not Found"
  ],
  stats: [
    { label: "Cafés pris", value: "trop", color: "purple" },
    { label: "Bugs fixés", value: "42", color: "green" },
    { label: "Sante mentale", value: "12%", color: "red" }
  ],
  cta: {
    primary: {
      text: "Voir les projets deployes",
      href: "/"
    },
    secondary: {
      text: "Voir le code sur GitHub",
      href: personalInfo.github
    }
  },
  footer: {
    text: "Ce projet arrive bientot... promis !"
  }
};
