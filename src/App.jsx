import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  personalInfo,
  navigation,
  hero,
  skills,
  parcours,
  colorMap,
  projectsConfig,
  projects,
  contact,
  sectionsHeaders,
  loaderConfig,
  socialIcons,
  skillsCardStyles,
  skillsTitleColors,
  parcoursCardStyles,
  parcoursTitleColors,
  parcoursBadgeStyles
} from './content';

// ============================================================================
// CONSTANTES
// ============================================================================

const PROJECT_BASE_URL = process.env.REACT_APP_PROJECT_BASE_URL || '';

// ============================================================================
// COMPOSANTS UTILITAIRES
// ============================================================================

/**
 * TechIcon - Icône de technologie avec gestion d'erreur
 */
const TechIcon = ({ tech }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) return <span className="text-2xl">💻</span>;

  return (
    <img 
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
      alt={tech.name}
      className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 hover:scale-125"
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
 * SocialIcon - Icône de réseau social réutilisable
 */
const SocialIcon = ({ platform, size = "w-5 h-5" }) => (
  <svg className={`${size} ${platform === 'linkedin' ? 'text-blue-400' : 'text-gray-300'}`} fill="currentColor" viewBox={socialIcons[platform].viewBox}>
    <path d={socialIcons[platform].path}/>
  </svg>
);

SocialIcon.propTypes = {
  platform: PropTypes.string.isRequired,
  size: PropTypes.string
};

/**
 * SocialLink - Lien vers réseau social
 */
const SocialLink = ({ platform, href, size = "w-10 h-10", iconSize = "w-5 h-5" }) => {
  const bgClass = platform === 'linkedin' 
    ? 'bg-blue-600 p-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110' 
    : 'bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/50 hover:scale-110 border border-gray-700';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={bgClass}
      aria-label={platform}
    >
      <SocialIcon platform={platform} size={iconSize} />
    </a>
  );
};

SocialLink.propTypes = {
  platform: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.string,
  iconSize: PropTypes.string
};

/**
 * LOADER
 */
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)'}}>
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        {/* Animation de spinner gaming */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-400 border-solid"></div>
        {/* Initiales au centre du spinner avec emoji gaming */}
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold text-blue-400 font-mono">
          XP
        </span>
      </div>
      <div className="space-y-2 text-center">
        <p className="text-white font-semibold text-xl font-mono">{loaderConfig.name}</p>
        <p className="text-blue-300 text-sm animate-pulse font-mono">{loaderConfig.message}</p>
      </div>
    </div>
  </div>
);

/**
 * HEADER
 */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="flex items-center justify-between">
          {/* Logo à gauche avec animation */}
          <div className="group flex items-center">
            <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-mono tracking-widest flex items-center cursor-default">
              <span className="mr-2 transform group-hover:rotate-12 transition-transform duration-300">🎮</span>
              <span className="hidden sm:inline group-hover:tracking-wider transition-all duration-300">MonPortfolio</span>
              <span className="sm:hidden">MP</span>
            </div>
          </div>

          {/* Navigation Desktop centrée */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-mono absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 font-semibold group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Bouton Hamburger Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300"
            aria-label="Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`block w-5 h-0.5 bg-blue-400 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-blue-400 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-blue-400 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>

          {/* Liens réseaux sociaux Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <SocialLink platform="linkedin" href={personalInfo.linkedin} />
            <SocialLink platform="github" href={personalInfo.github} />
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-blue-500/20 bg-gray-900/90 backdrop-blur-md rounded-lg animate-fade-in-down">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all font-mono font-semibold text-sm"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex items-center justify-center space-x-4 pt-4 mt-4 border-t border-blue-500/20">
                <SocialLink platform="linkedin" href={personalInfo.linkedin} size="w-10 h-10" iconSize="w-5 h-5" />
                <SocialLink platform="github" href={personalInfo.github} size="w-10 h-10" iconSize="w-5 h-5" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

/**
 * ACCUEIL
 */
const Accueil = () => (
  <section id="accueil" className="pt-32 pb-20 bg-transparent opacity-0 animate-slide-in-bottom">
    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
      {/* Titre principal avec effet dégradé */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 font-mono tracking-widest">
        {personalInfo.name}
      </h1>
      
      {/* Sous-titre */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono uppercase tracking-wider">
        {personalInfo.title}
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
        <a href={hero.cta.primary.href} download={hero.cta.primary.download} className="w-64 text-center bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-400 text-white py-4 rounded-lg hover:scale-110 transition-all font-mono font-bold shadow-lg shadow-blue-500/50">
          {hero.cta.primary.text}
        </a>
      </div>

    </div>
  </section>
);

/**
 * COMPETENCES
 */
const Competences = () => {
  return (
    <section id="competences" className="py-16 md:py-20 bg-transparent opacity-0 animate-slide-in-left animation-delay-200">
      <div className="container mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4 font-mono tracking-tight">
          {sectionsHeaders.competences.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-mono uppercase tracking-widest">{sectionsHeaders.competences.subtitle}</p>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const colorKey = skill.title === "FRONTEND" ? "purple" : skill.title === "BACKEND" ? "blue" : skill.title === "BASE DE DONNÉES" ? "green" : "yellow";
            return (
              <div 
                key={skill.title} 
                className={`${skillsCardStyles[colorKey]} rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-300 hover:scale-105 min-h-[280px] md:min-h-[320px] flex flex-col`}
              >
                <h3 className={`text-lg md:text-xl font-bold ${skillsTitleColors[colorKey]} mb-4 md:mb-6 font-mono uppercase tracking-wide text-center`}>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * PARCOURS
 */
const Parcours = () => {
  return (
    <section id="experience" className="py-20 bg-transparent opacity-0 animate-slide-in-right animation-delay-300">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 font-mono tracking-tight">
          {sectionsHeaders.parcours.title}
        </h2>
        <p className="text-xl text-gray-400 font-mono uppercase tracking-widest">{sectionsHeaders.parcours.subtitle}</p>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Grille des étapes du parcours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {parcours.map((step, index) => {
            const colorKey = step.color || 'blue'; // Default to blue if no color specified
            return (
              <div key={step.number} className="relative group">
                <div className={`${parcoursCardStyles[colorKey]} border-2 rounded-2xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg`}>
                  {/* Badge de niveau */}
                  <div className={`absolute -top-7 left-6 ${parcoursBadgeStyles[colorKey]} border-2 rounded-full px-3 py-0 font-mono font-bold text-sm`}>
                    LVL {step.number}
                  </div>
                  
                  <h3 className={`text-xl font-bold ${parcoursTitleColors[colorKey]} mb-3 font-mono uppercase tracking-wide mt-4`}>
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
                      className={`h-full bg-gradient-to-r ${colorKey === 'cyan' ? 'from-cyan-500 to-cyan-400' :
                        colorKey === 'blue' ? 'from-blue-500 to-blue-400' :
                        colorKey === 'orange' ? 'from-orange-500 to-orange-400' :
                        colorKey === 'purple' ? 'from-purple-500 to-purple-400' :
                        'from-green-500 to-green-400'} transition-all duration-500`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * PROJETS
 */
const Projets = ({ activeFilter, setActiveFilter }) => {
  const filteredProjects = useMemo(
    () => activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projets" className="py-20 bg-transparent opacity-0 animate-slide-in-left animation-delay-400">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4 font-mono tracking-tight">
          {sectionsHeaders.projets.title}
        </h2>
        <p className="text-xl text-gray-400 font-mono uppercase tracking-widest">{sectionsHeaders.projets.subtitle}</p>
      </div>
      
      {/* Boutons de filtrage des projets */}
      <div className="flex justify-center space-x-4 mb-12">
        {projectsConfig.filters.map((filter) => (
          <button 
            key={filter} 
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 rounded-full font-mono font-bold uppercase transition-all ${
              activeFilter === filter 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110 shadow-lg' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:scale-105'
            }`}
          >
            {projectsConfig.filterLabels[filter]}
          </button>
        ))}
      </div>
      
      {/* Grille des projets filtrés */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => {
            const projectLink = project.link ? `${PROJECT_BASE_URL}${project.link}` : null;
            return (
              <div 
                key={project.id} 
                className="relative group"
              >
                <div className={`bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-400 rounded-2xl overflow-hidden shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col ${projectLink ? 'cursor-pointer' : ''}`}
                     onClick={() => projectLink && window.open(projectLink, '_blank')}>
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
 * CONTACT
 */
const Contact = () => (
  <section id="contact" className="py-20 bg-transparent opacity-0 animate-slide-in-bottom animation-delay-500">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 font-mono tracking-tight">
          {contact.title}
        </h2>
        <p className="text-xl text-gray-400 font-mono uppercase tracking-widest">{contact.subtitle}</p>
        <div className="mt-6 inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full font-mono font-bold text-sm">
          {contact.mission.dates}
        </div>
      </div>
      
      {/* Design créatif en hexagones */}
      <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/50 rounded-2xl p-8 border-2 border-blue-400 shadow-2xl shadow-blue-500/30 backdrop-blur-sm">
        
        {/* Grille hexagonale créative */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Colonne centrale - Mission */}
          <div className="space-y-6">
            {/* Mission principale */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <h3 className="text-purple-300 font-mono font-bold text-lg uppercase mb-2">MISSION RECHERCHÉE</h3>
              <div className="text-white font-mono text-xl font-bold mb-2">{contact.mission.title}</div>
              <div className="text-gray-300 font-mono text-sm">{contact.mission.dates}</div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-300 font-mono font-bold uppercase">DISPONIBILITÉ</div>
              </div>
              <div className="text-white font-mono text-lg font-bold mb-2">{contact.availability.status}</div>
              <div className="text-gray-400 font-mono text-sm mb-3">{contact.availability.detail}</div>
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
                href={contact.cards[0].href}
                className="text-white font-mono text-lg font-bold hover:text-blue-300 transition-colors block break-all"
              >
                {contact.cards[0].value}
              </a>
            </div>

            {/* Téléphone */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-purple-300 font-mono font-bold uppercase">TÉLÉPHONE</div>
              </div>
              <a 
                href={contact.cards[1].href}
                className="text-white font-mono text-lg font-bold hover:text-purple-300 transition-colors block"
              >
                {contact.cards[1].value}
              </a>
            </div>

            {/* Localisation */}
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border-2 border-green-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-300 font-mono font-bold uppercase">LOCALISATION</div>
              </div>
              <div className="text-white font-mono text-lg font-bold">{contact.cards[2].value}</div>
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
                  {contact.techStack.map((tech, index) => (
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
              <div className="text-white font-mono font-bold mb-2">{contact.nextStep.title}</div>
              <div className="text-gray-300 font-mono text-sm">{contact.nextStep.subtitle}</div>
            </div>
          </div>
        </div>

        {/* Bouton d'action principal - Design créatif */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="relative bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-5 rounded-2xl transition-all font-mono font-bold uppercase tracking-wider text-xl text-center shadow-2xl hover:shadow-3xl hover:scale-105 block border-2 border-white/20"
          >
            <span className="flex items-center justify-center gap-3">
              {contact.cta}
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

/**
 * FOOTER
 */
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 border-t-4 border-blue-700">
    <div className="container mx-auto px-6 text-center">
      {/* Logo footer */}
      <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 font-mono flex items-center justify-center">
        {personalInfo.name}
      </div>
      <p className="text-gray-400 mb-6 font-mono uppercase tracking-wider">
        {personalInfo.tagline}
      </p>
      
      {/* Liens sociaux */}
      <div className="flex justify-center space-x-6 mb-8">
        <SocialLink platform="linkedin" href={personalInfo.linkedin} size="w-12 h-12" iconSize="w-6 h-6" />
        <SocialLink platform="github" href={personalInfo.github} size="w-12 h-12" iconSize="w-6 h-6" />
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-700 pt-6">
        <p className="text-gray-500 font-mono text-sm">© 2025 {personalInfo.name}</p>
      </div>
    </div>
  </footer>
);

/**
 * PORTFOLIO
 */
const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Gérer l'URL au rafraîchissement - revenir à l'accueil
    const handleLoad = () => {
      if (window.location.hash && window.location.hash !== '#accueil') {
        // Si on a un hash dans l'URL, on scroll vers cette section
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Sinon, on clear l'URL et on reste en haut
        window.history.replaceState(null, null, ' ');
      }
    };

    // Observer pour les animations de glissement
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    // Observer toutes les sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Gérer le load de la page
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
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