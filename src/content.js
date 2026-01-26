// src/content.js - Données centralisées du portfolio

export const personalInfo = {
  name: "RYAN FONSECA",
  title: "Développeur Fullstack",
  email: "fonseca.ryan69100@gmail.com",
  phone: "07 45 35 23 07",
  location: "Lyon 5ème, 69005",
  linkedin: "https://www.linkedin.com/in/ryan-fonseca-3a73b2302/",
  github: "https://github.com/rf69100"
};

export const hero = {
  intro: "Développeur web passionné par la création d'applications modernes et performantes. Expérience concrète en React, Laravel et gestion de projets fullstack.",
  techs: "React • Laravel",
  formation: "BTS SIO SLAM • 2024-2026",
  context: "Stage validé chez APICIL (2026)",
  searchStatus: "RECHERCHE ACTIVE : Alternance Rentrée 2026",
  searchDetails: "Bachelor DevOps ou Fullstack"
};

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
    progress: 100 // Stage terminé
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
