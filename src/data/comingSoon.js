import { personalInfo } from './personal';

export const comingSoon = {
  header: {
    title: 'WORK IN PROGRESS',
    titleShort: 'WIP',
    backButton: 'Retour au Portfolio',
  },
  hero: {
    title: 'PROJET EN CONSTRUCTION',
    subtitle: 'Ca arrive bientot, promis !',
    gradient: 'from-purple-400 via-blue-500 to-cyan-500',
  },
  terminal: {
    filename: 'deployment.sh',
    command: 'deploying',
    progress: 99.9,
    note: '* Estimation tres optimiste (on y croit tous !)',
  },
  statusMessages: [
    'Le dev est parti chercher des croissants...',
    'En train de debugger 47 erreurs... enfin 48... 49...',
    'Ctrl+S en boucle pour etre sur',
    'Le code compile... enfin presque',
    'Claude est en maintenace... Chatgpt aussi d\'ailleurs...',
    'npm install patience --save',
    'git push --force (oups)',
    "Le cafe n'etait pas assez fort aujourd'hui (et bon)",
    'En train de negocier avec le CSS',
    'undefined is not a function',
    'Le serveur fait sa sieste',
    "It works on my machine (c'est vrai je mens pas !)",
    '404 Motivation Not Found',
  ],
  stats: [
    { label: 'Cafés pris', value: 'trop', color: 'purple' },
    { label: 'Bugs fixés', value: '42', color: 'green' },
    { label: 'Sante mentale', value: '12%', color: 'red' },
  ],
  cta: {
    primary: {
      text: 'Voir les projets deployes',
      href: '/',
    },
    secondary: {
      text: 'Voir le code sur GitHub',
      href: personalInfo.github,
    },
  },
  footer: {
    text: 'Ce projet arrive bientot... promis !',
  },
};
