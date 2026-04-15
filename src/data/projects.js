export const projectsConfig = {
  filters: ['all', 'web'],
  filterLabels: {
    all: 'Tous',
    web: 'Web',
  },
};

export const projects = [
  {
    id: 1,
    title: 'NBA Dashboard',
    category: 'web',
    description:
      'Dashboard interactif en React avec statistiques de joueurs NBA et classements des équipes.',
    github: 'https://github.com/rf69100/nba-dashbord',
    link: '/nba_dashboard/',
    techs: ['React', 'API', 'Stats'],
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    new: false,
  },
  {
    id: 2,
    title: 'Spotify Album finder',
    category: 'web',
    description:
      "Application web pour explorer la discographie complète des artistes via l'API Spotify avec interface moderne et responsive.",
    github: 'https://github.com/rf69100/album_finder_spotify',
    link: '/spotify-finder/',
    techs: ['React', 'Spotify API', 'Bootstrap', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    new: false,
  },
  {
    id: 3,
    title: 'F1 Strategy Simulator 2026',
    category: 'web',
    description:
      'Simulation complète de stratégie F1 avec données 2026, calculs physiques avancés et interface de course réaliste.',
    github: 'https://github.com/rf69100/f1-strategy-simulator',
    link: '/f1-simulator/',
    techs: ['React', 'TypeScript', 'Zustand', 'F1 Data', 'Physics Engine'],
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    new: false,
  },
  {
    id: 4,
    title: 'Café Pâtisserie',
    category: 'web',
    description:
      'Site vitrine moderne pour une pâtisserie/café, réalisé avec React, Vite, Wouter, Tailwind et backend Express/Drizzle.',
    github: 'https://github.com/rf69100/CafePatisserieSite',
    link: '/cafe-patisserie/',
    techs: ['React', 'Vite', 'Wouter', 'Tailwind', 'Express', 'Drizzle'],
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
    new: false,
  },
  {
    id: 5,
    title: 'FitZoneShop',
    category: 'web',
    description:
      "Plateforme e-commerce complète pour produits de fitness avec administration avancée, gestion des commandes et authentification 2FA.",
    github: 'https://github.com/rf69100/FitZoneShopFinal',
    link: '/coming-soon',
    techs: [
      'Laravel 12',
      'React 19',
      'TypeScript',
      'Inertia.js',
      'Tailwind CSS 4',
      'MariaDB',
      'Pest PHP',
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    new: true,
  },
];
