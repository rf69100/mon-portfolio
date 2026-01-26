import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { hero, parcours as parcoursData, contact as contactData, projects } from './content';

// ============================================================================
// CONSTANTES GLOBALES
// ============================================================================

const NAVIGATION_ITEMS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#contact', label: 'Contact' }
];

const NAVIGATION_ITEMS_MOBILE = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Skills' }
];

const FILTER_OPTIONS = ["all", "web"];

const GRADIENT_TEXT_CLASS = "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500";

const PROJECT_BASE_URL = import.meta.env.VITE_PROJECT_BASE_URL || '';

// ============================================================================
// COMPOSANTS UTILITAIRES
// ============================================================================

/**
 * TechIcon - Icône de technologie avec gestion d'erreur React-friendly
 */
const TechIcon = ({ tech }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className="text-lg md:text-xl">💻</span>;
  }

  return (
    <img 
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
      alt={tech.name}
      className="w-8 h-8 md:w-10 md:h-10 object-contain filter brightness-125"
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
};

TechIcon.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired
};

/**
 * LOADER - Composant d'animation de chargement
 * Affiche une animation pendant le chargement de l'application
 */
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Animation de spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-400 border-solid"></div>
        {/* Initiales au centre du spinner */}
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold text-blue-400 font-mono">XP</span>
      </div>
      <span className="mt-6 text-white font-semibold text-lg font-mono">Chargement...</span>
    </div>
  </div>
);

/**
 * HEADER - Barre de navigation principale
 * Contient les liens de navigation et les réseaux sociaux
 */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b-2 border-blue-500/50'
        : 'bg-gray-900/80 backdrop-blur-sm border-b-4 border-blue-700'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo à gauche avec animation */}
          <div className="group flex items-center">
            <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-mono tracking-widest flex items-center cursor-default">
              <span className="mr-2 transform group-hover:rotate-12 transition-transform duration-300">🎮</span>
              <span className="hidden sm:inline group-hover:tracking-wider transition-all duration-300">MonPortfolio</span>
              <span className="sm:hidden">MP</span>
            </div>
          </div>

          {/* Navigation centrée - Desktop */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 font-mono justify-center">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 font-semibold group py-1"
                aria-label={`Naviguer vers ${item.label}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Navigation mobile centrée */}
          <nav className="md:hidden flex space-x-3 font-mono justify-center">
            {NAVIGATION_ITEMS_MOBILE.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-all text-xs font-semibold hover:scale-110 transform duration-200"
                aria-label={`Naviguer vers ${item.label}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Liens réseaux sociaux à droite avec badges */}
          <div className="flex space-x-3 justify-end items-center">
            <a
              href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              aria-label="Voir mon profil LinkedIn (ouvre dans un nouvel onglet)"
            >
              <div className="bg-blue-600 p-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" role="presentation" className="w-5 h-5" loading="lazy" />
              </div>
            </a>
            <a
              href="https://github.com/rf69100"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              aria-label="Voir mon profil GitHub (ouvre dans un nouvel onglet)"
            >
              <div className="bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/50 hover:scale-110 border border-gray-700">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" role="presentation" className="w-5 h-5 filter invert" loading="lazy" />
              </div>
            </a>
          </div>
        </div>

        {/* Navigation mobile pour Contact (ligne supplémentaire sur mobile) */}
        <nav className="md:hidden flex justify-center mt-2 font-mono">
          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-400 transition-all text-xs font-semibold hover:scale-110 transform duration-200"
            aria-label="Naviguer vers Contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

/**
 * ACCUEIL - Section d'introduction
 * Présentation personnelle avec informations principales
 */
const Accueil = () => (
  <section id="accueil" className="pt-32 pb-20 bg-transparent fade-in">
    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
      {/* Titre principal avec effet dégradé */}
      <h1 className={`text-4xl md:text-6xl font-extrabold ${GRADIENT_TEXT_CLASS} mb-4 font-mono tracking-widest`}>
        RYAN FONSECA
      </h1>
      
      {/* Sous-titre */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono uppercase tracking-wider">
        Développeur Fullstack
      </h2>
      
      {/* Carte d'informations */}
      <div className="bg-gray-900/50 border-2 border-blue-500 rounded-xl p-6 mb-8 backdrop-blur-sm">
        <p className="text-lg md:text-xl text-gray-300 mb-4 font-mono leading-relaxed">
          {hero.intro}
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-4 font-mono">
          <span className="text-blue-400 font-bold">{hero.techs}</span>
        </p>

        {/* Badge de formation */}
        <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-mono font-bold text-sm mb-2">
          {hero.formation}
        </div>

        {/* Indicateur de recherche d'alternance */}
        <p className="text-lg md:text-xl text-yellow-300 font-mono font-bold mt-4">
          {hero.searchStatus}
        </p>
        <p className="text-base md:text-lg text-gray-300 font-mono mt-2">
          {hero.searchDetails}
        </p>
      </div>
      
      {/* Bouton de téléchargement CV */}
      <div className="flex justify-center mb-6">
        <a 
          href="/ryan_fonseca_cv.pdf" 
          download 
          className="w-64 text-center bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-400 text-white py-4 rounded-lg hover:scale-110 transition-all font-mono font-bold shadow-lg shadow-blue-500/50"
          aria-label="Télécharger mon CV au format PDF"
        >
          TÉLÉCHARGER CV
        </a>
      </div>

    </div>
  </section>
);

/**
 * COMPETENCES - Section des compétences techniques
 * Affiche les technologies maîtrisées par catégorie
 */
const Competences = () => {
  // Données des compétences organisées par catégorie
  const skills = [
    {
      title: "FRONTEND",
      color: "purple",
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
      techs: [
        { name: "MySQL", icon: "mysql" },
        { name: "MariaDB", icon: "mysql" },
        { name: "PostgreSQL", icon: "postgresql" },
      ]
    },
    {
      title: "OUTILS & SYSTEMES",
      color: "yellow",
      techs: [
        { name: "Git", icon: "git" },
        { name: "Linux", icon: "linux" },
        { name: "Windows", icon: "windows" },
        { name: "VS Code", icon: "vscode" },
        { name: "Figma", icon: "figma" },
      ]
    }
  ];

  // Styles des cartes par couleur
  const cardStyles = {
    purple: 'bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/60 shadow-purple-500/40',
    blue: 'bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/60 shadow-blue-500/40',
    green: 'bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/60 shadow-green-500/40',
    yellow: 'bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-2 border-yellow-500/60 shadow-yellow-500/40'
  };

  // Couleurs des titres par catégorie
  const titleColors = {
    purple: 'text-purple-300',
    blue: 'text-blue-300',
    green: 'text-green-300',
    yellow: 'text-yellow-300'
  };

  return (
    <section id="competences" className="py-16 md:py-20 bg-transparent fade-in">
      <div className="container mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4 font-mono tracking-tight">
          MES COMPÉTENCES
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-mono uppercase tracking-widest">Arsenal Technologique</p>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div 
              key={skill.title} 
              className={`${cardStyles[skill.color]} rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-300 hover:scale-105 min-h-[280px] md:min-h-[320px] flex flex-col`}
            >
              <h3 className={`text-lg md:text-xl font-bold ${titleColors[skill.color]} mb-4 md:mb-6 font-mono uppercase tracking-wide text-center`}>
                {skill.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1">
                {skill.techs.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3"
                  >
                    <TechIcon tech={tech} />
                    <span className="text-white text-sm md:text-base font-mono font-bold flex-1 truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/**
 * PARCOURS - Section du parcours académique et professionnel
 * Présente les étapes de formation et expériences
 */
const Parcours = () => {
  // Étapes du parcours importées depuis content.js
  const steps = parcoursData;

  // Styles des cartes par couleur
  const cardStyles = {
    cyan: 'bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border-cyan-400 shadow-cyan-500/50',
    blue: 'bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-400 shadow-blue-500/50',
    orange: 'bg-gradient-to-br from-orange-900/30 to-orange-800/20 border-orange-400 shadow-orange-500/50',
    purple: 'bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-400 shadow-purple-500/50',
    green: 'bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-400 shadow-green-500/50'
  };

  // Couleurs des titres
  const titleColors = {
    cyan: 'text-cyan-300',
    blue: 'text-blue-300',
    orange: 'text-orange-300',
    purple: 'text-purple-300',
    green: 'text-green-300'
  };

  // Styles des badges de niveau
  const badgeStyles = {
    cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-400',
    blue: 'bg-blue-500/20 text-blue-300 border-blue-400',
    orange: 'bg-orange-500/20 text-orange-300 border-orange-400',
    purple: 'bg-purple-500/20 text-purple-300 border-purple-400',
    green: 'bg-green-500/20 text-green-300 border-green-400'
  };

  return (
    <section id="experience" className="py-20 bg-transparent fade-in">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 font-mono tracking-tight">
          MON PARCOURS
        </h2>
        <p className="text-xl text-gray-400 font-mono uppercase tracking-widest">Formation & Expériences</p>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Grille des étapes du parcours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className={`${cardStyles[step.color]} border-2 rounded-2xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg`}>
                {/* Badge de niveau */}
                <div className={`absolute -top-7 left-6 ${badgeStyles[step.color]} border-2 rounded-full px-3 py-0 font-mono font-bold text-sm`}>
                  LVL {step.number}
                </div>
                
                <h3 className={`text-xl font-bold ${titleColors[step.color]} mb-3 font-mono uppercase tracking-wide mt-4`}>
                  {step.title}
                </h3>
                
                {/* Informations date et école */}
                <div className="mb-4 space-y-1">
                  <div className="text-gray-400 text-sm font-mono">{step.date}</div>
                  <div className="text-gray-400 text-sm font-mono">{step.school}</div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed font-mono">
                  {step.description}
                </p>
                
                {/* Barre de progression */}
                <div className="mt-4 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${
                      step.color === 'cyan' ? 'from-cyan-500 to-cyan-400' :
                      step.color === 'blue' ? 'from-blue-500 to-blue-400' :
                      step.color === 'orange' ? 'from-orange-500 to-orange-400' :
                      step.color === 'purple' ? 'from-purple-500 to-purple-400' :
                      'from-green-500 to-green-400'
                    } transition-all duration-500`}
                    style={{width: `${step.progress}%`}}
                  >
                  </div>
                </div>
                
                {/* Indicateur de progression */}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-400 font-mono">Progression</span>
                  <span className="text-xs font-bold font-mono text-white">
                    {step.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * PROJETS - Section des projets réalisés
 * Affiche les projets avec filtrage par catégorie
 */
const Projets = ({ activeFilter, setActiveFilter }) => {
  // Filtrage des projets selon la catégorie active avec mémoïsation
  const filteredProjects = useMemo(
    () => activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter),
    [activeFilter]
  );
  
  return (
    <section id="projets" className="py-20 bg-transparent fade-in">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4 font-mono tracking-tight">
          MES PROJETS
        </h2>
        <p className="text-xl text-gray-400 font-mono uppercase tracking-widest">Réalisations & Créations</p>
      </div>
      
      {/* Boutons de filtrage des projets */}
      <div className="flex justify-center space-x-4 mb-12">
        {FILTER_OPTIONS.map((filter) => (
          <button 
            key={filter} 
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 rounded-full font-mono font-bold uppercase transition-all ${
              activeFilter === filter 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110 shadow-lg' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:scale-105'
            }`}
            aria-label={`Filtrer les projets par ${filter === 'all' ? 'tous' : filter}`}
            aria-pressed={activeFilter === filter}
          >
            {filter === 'all' ? "Tous" : "Web"}
          </button>
        ))}
      </div>
      
      {/* Grille des projets filtrés */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => {
            const projectLink = project.link ? `${PROJECT_BASE_URL}${project.link}` : project.github;
            return (
              <div 
                key={project.id} 
                className="relative group"
              >
                <div className={`bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-400 rounded-2xl overflow-hidden shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col ${projectLink ? 'cursor-pointer' : ''}`}
                     onClick={() => projectLink && window.open(projectLink, '_blank', 'noopener,noreferrer')}>
                  {/* Badge NEW sur les projets récents */}
                  {project.new === true && (
                    <div className="absolute -top-3 -right-3 bg-yellow-500 text-gray-900 font-mono font-bold text-xs px-3 py-1 rounded-full border-2 border-yellow-300 shadow-lg z-10">
                      ⭐ NEW
                    </div>
                  )}
                  {/* Image du projet */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Contenu du projet */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-purple-300 mb-2 font-mono uppercase tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 font-mono flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tags des technologies utilisées */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techs.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400 font-mono font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Boutons d'action */}
                    <div className="flex gap-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-all font-mono font-bold text-sm border border-gray-600" 
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Voir le code source de ${project.title} sur GitHub (ouvre dans un nouvel onglet)`}
                        >
                          GitHub
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={`${PROJECT_BASE_URL}${project.link}`}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg transition-all font-mono font-bold text-sm" 
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Voir la démo en ligne de ${project.title} (ouvre dans un nouvel onglet)`}
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Projets.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired
};

/**
 * CONTACT - Section de contact stylisée
 * Affiche les informations de contact de manière créative et organisée
 */
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-transparent fade-in">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 font-mono tracking-tight">
            ZONE DE CONTACT
          </h2>
          <p className="text-xl text-gray-400 font-mono uppercase tracking-widest">Prêt pour la prochaine mission ?</p>
          <div className="mt-6 inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full font-mono font-bold text-sm">
            {contactData.availability.status} - {contactData.mission.dates}
          </div>
        </div>
        
        {/* Design créatif en hexagones */}
        <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/50 rounded-2xl p-8 border-2 border-blue-400 shadow-2xl shadow-blue-500/30 backdrop-blur-sm">
          
          {/* Grille hexagonale créative */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Colonne centrale - Mission */}
            <div className="space-y-6">
              {/* Mission principale */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50 rounded-2xl p-6 text-center transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-purple-300 font-mono font-bold text-lg uppercase mb-2">MISSION RECHERCHÉE</h3>
                <div className="text-white font-mono text-xl font-bold mb-2">{contactData.mission.title}</div>
                <div className="text-gray-300 font-mono text-sm">{contactData.mission.dates}</div>
              </div>

              {/* Disponibilité */}
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 rounded-2xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-green-300 font-mono font-bold uppercase">DISPONIBILITÉ</div>
                </div>
                <div className="text-white font-mono text-lg font-bold mb-2">{contactData.availability.status}</div>
                <div className="text-gray-400 font-mono text-sm mb-3">{contactData.availability.detail}</div>
                <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-full w-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Colonne gauche - Contact */}
            <div className="space-y-6">
              {/* Email - Carte principale */}
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-2 border-blue-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-300 font-mono font-bold uppercase">EMAIL</div>
                </div>
                <a 
                  href="mailto:fonseca.ryan69100@gmail.com"
                  className="text-white font-mono text-lg font-bold hover:text-blue-300 transition-colors block break-all"
                  aria-label="M'envoyer un email"
                >
                  fonseca.ryan69100@gmail.com
                </a>
              </div>

              {/* Téléphone */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-purple-300 font-mono font-bold uppercase">TÉLÉPHONE</div>
                </div>
                <a 
                  href="tel:+33745352307"
                  className="text-white font-mono text-lg font-bold hover:text-purple-300 transition-colors block"
                  aria-label="M'appeler au téléphone"
                >
                  07 45 35 23 07
                </a>
              </div>

              {/* Localisation */}
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border-2 border-green-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-green-300 font-mono font-bold uppercase">LOCALISATION</div>
                </div>
                <div className="text-white font-mono text-lg font-bold">Lyon 5ème, 69005</div>
              </div>
            </div>

            {/* Colonne droite - Compétences */}
            <div className="space-y-6">
              {/* Spécialités */}
              <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-2 border-yellow-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-yellow-300 font-mono font-bold uppercase">SPÉCIALITÉS</div>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {["React", "Laravel", "PHP", "JavaScript", "MySQL"].map((tech) => (
                      <span 
                        key={tech}
                        className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 px-3 py-2 rounded-lg text-sm font-mono font-bold hover:scale-110 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte supplémentaire créative */}
              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-600/50 rounded-2xl p-6 text-center">
                <div className="text-white font-mono font-bold mb-2">PROCHAIN DÉPART</div>
                <div className="text-gray-300 font-mono text-sm">En attente de votre signal</div>
              </div>
            </div>
          </div>

          {/* Bouton d'action principal - Design créatif */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
            <a
              href="mailto:fonseca.ryan69100@gmail.com"
              className="relative bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-5 rounded-2xl transition-all font-mono font-bold uppercase tracking-wider text-xl text-center shadow-2xl hover:shadow-3xl hover:scale-105 block border-2 border-white/20"
              aria-label="M'envoyer un email pour me contacter"
            >
              <span className="flex items-center justify-center gap-3">
                {contactData.cta}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


/**
 * FOOTER - Pied de page
 * Contient les liens sociaux et informations de copyright
 */
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 border-t-4 border-blue-700">
    <div className="container mx-auto px-6 text-center">
      {/* Logo footer */}
      <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 font-mono flex items-center justify-center">
        <span className="mr-2">🎮</span> MONPORTFOLIO
      </div>
      <p className="text-gray-400 mb-6 font-mono uppercase tracking-wider">
        Développeur Fullstack • BTS SIO SLAM • Stage validé APICIL • Recherche alternance Bachelor DevOps/Fullstack 2026
      </p>
      
      {/* Liens sociaux */}
      <div className="flex justify-center space-x-6 mb-8">
        <a 
          href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 p-3 rounded-full transition-transform hover:scale-125 hover:bg-blue-700"
          aria-label="Voir mon profil LinkedIn (ouvre dans un nouvel onglet)"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" role="presentation" className="w-6 h-6" loading="lazy" />
        </a>
        <a 
          href="https://github.com/rf69100" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-800 p-3 rounded-full transition-transform hover:scale-125 hover:bg-gray-700"
          aria-label="Voir mon profil GitHub (ouvre dans un nouvel onglet)"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" role="presentation" className="w-6 h-6 filter invert" loading="lazy" />
        </a>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-700 pt-6">
        <p className="text-gray-500 font-mono text-sm">© 2025 MonPortfolio</p>
      </div>
    </div>
  </footer>
);

/**
 * PORTFOLIO - Composant principal
 * Orchestre tous les composants et gère l'état global
 */
const Portfolio = () => {
  // États pour le chargement et le filtrage des projets
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  // Effet pour simuler le chargement et activer smooth scroll
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    
    // Activation du smooth scroll natif
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Affichage du loader pendant le chargement
  if (loading) return <Loader />;

  // Rendu principal de l'application
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white font-sans">
      <Header />
      <Accueil />
      <Competences />
      <Parcours />
      <Projets activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;