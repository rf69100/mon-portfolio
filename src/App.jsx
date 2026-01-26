import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { hero, parcours as parcoursData, contact as contactData, projects } from './content';

// ============================================================================
// CONSTANTES GLOBALES & STYLES
// ============================================================================

// Palette couleurs unifiée
const COLORS = {
  primary: 'from-purple-600 to-pink-600',
  primaryLight: 'from-purple-600/40 to-pink-600/40',
  primaryGlow: 'shadow-purple-500/40',
  secondary: 'from-cyan-500 to-blue-500',
  secondaryLight: 'from-cyan-500/40 to-blue-500/40',
  secondaryGlow: 'shadow-cyan-500/40',
  accent: 'from-blue-400 via-purple-400 to-pink-400'
};

// Styles réutilisables
const STYLES = {
  badge: 'inline-flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm',
  card: 'rounded-lg p-8 backdrop-blur border transition-all',
  button: 'px-8 py-3 rounded-lg text-white font-medium border transition-all hover:scale-105',
  section: 'py-20',
  heading: 'text-4xl md:text-5xl font-bold mb-4'
};

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

const PROJECT_BASE_URL = process.env.REACT_APP_PROJECT_BASE_URL || '';

// ============================================================================
// COMPOSANTS UTILITAIRES
// ============================================================================

/**
 * TechIcon - Icône de technologie avec gestion d'erreur React-friendly
 */
const TechIcon = ({ tech }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className="text-2xl text-gray-500">○</span>;
  }

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
 * LOADER - Composant d'animation de chargement minimaliste
 */
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 overflow-hidden relative">
    {/* Orbs subtils */}
    <div className="absolute top-20 left-1/4 w-96 h-96 bg-slate-800 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl opacity-10" style={{animationDelay: '1s'}}></div>
    
    {/* Contenu */}
    <div className="flex flex-col items-center space-y-6 relative z-10">
      <div className="relative">
        {/* Logo principal */}
        <div className="relative w-20 h-20 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">RF</span>
        </div>
      </div>
      
      <div className="space-y-2 text-center">
        <p className="text-white font-bold text-lg">Ryan Fonseca</p>
        <p className="text-gray-500 text-sm">Chargement...</p>
        
        {/* Progress bar minimaliste */}
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-slate-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * HEADER - Navigation moderne avec glassmorphism
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-700/50'
        : 'bg-slate-950/60 backdrop-blur-lg border-b border-slate-800/30'
    }`}>
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="group flex items-center space-x-3 cursor-default">
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
              <span className="text-white font-bold text-base">RF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white">
                Ryan Fonseca
              </h1>
              <p className="text-xs text-gray-500">Fullstack Developer</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium text-sm"
                aria-label={`Naviguer vers ${item.label}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Navigation Mobile */}
          <nav className="md:hidden flex items-center space-x-4">
            {NAVIGATION_ITEMS_MOBILE.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-xs font-medium"
                aria-label={`Naviguer vers ${item.label}`}
                title={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Réseaux sociaux */}
          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-slate-700 hover:border-slate-600 flex items-center justify-center transition-all duration-300 hover:bg-slate-800"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com/rf69100"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-slate-700 hover:border-slate-600 flex items-center justify-center transition-all duration-300 hover:bg-slate-800"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact mobile */}
        <nav className="md:hidden flex justify-center mt-3 pt-3 border-t border-slate-800">
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
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
 * ACCUEIL - Hero section moderne
 */
const Accueil = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-900"></div>

    <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-5xl">
      {/* Badge de statut */}
      <div className={`${STYLES.badge} bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 mb-8 animate-fade-in shadow-lg shadow-green-500/20`}>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-sm text-green-300 font-bold">Disponible pour alternance 2026</span>
      </div>

      {/* Titre principal */}
      <h1 className={`text-6xl md:text-7xl font-bold mb-4 animate-fade-in-up leading-tight bg-gradient-to-r ${COLORS.accent} bg-clip-text text-transparent`}>
        Ryan Fonseca
      </h1>

      {/* Sous-titre */}
      <h2 className={`text-xl md:text-2xl font-semibold bg-gradient-to-r ${COLORS.secondary} bg-clip-text text-transparent mb-8 animate-fade-in-up animation-delay-200`}>
        Développeur <span className={`bg-gradient-to-r ${COLORS.primary} bg-clip-text text-transparent`}>Fullstack</span>
      </h2>

      {/* Card principale */}
      <div className={`${STYLES.card} max-w-3xl mx-auto bg-gradient-to-br from-slate-800/30 to-slate-900/50 border-purple-500/30 mb-8 animate-fade-in-up animation-delay-400 shadow-2xl shadow-purple-500/10`}>
        <p className="text-base text-gray-400 mb-6 leading-relaxed">{hero.intro}</p>

        {/* Technologies */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {hero.techs.split(' • ').map((tech, index) => (
            <span 
              key={index}
              className={`px-4 py-2 rounded-xl bg-gradient-to-r ${COLORS.primaryLight} border border-purple-400/70 text-purple-200 font-bold hover:border-purple-300 transition-all cursor-default hover:shadow-lg hover:${COLORS.primaryGlow} hover:scale-110`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Badges info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className={`p-4 rounded-xl bg-gradient-to-br ${COLORS.primaryLight} border border-purple-500/40 hover:border-purple-400 transition-all`}>
            <p className="text-purple-300 font-semibold">{hero.formation}</p>
          </div>
          <div className={`p-4 rounded-xl bg-gradient-to-br ${COLORS.secondaryLight} border border-cyan-500/40 hover:border-cyan-400 transition-all`}>
            <p className="text-cyan-300 font-semibold">{hero.context}</p>
          </div>
        </div>

        {/* Status recherche */}
        <div className={`p-5 rounded-xl bg-gradient-to-r from-yellow-600/40 via-orange-600/40 to-red-600/40 border border-yellow-500/60 hover:border-yellow-400 transition-all relative overflow-hidden group/status shadow-lg shadow-yellow-500/20`}>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-orange-500/10 to-yellow-500/0 opacity-0 group-hover/status:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <p className="text-yellow-300 font-bold text-lg mb-1">{hero.searchStatus}</p>
            <p className="text-gray-300">{hero.searchDetails}</p>
          </div>
        </div>
      </div>

      {/* Boutons CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
        <a 
          href="/ryan_fonseca_cv.pdf" 
          download 
          className={`${STYLES.button} bg-gradient-to-r ${COLORS.primary} border-purple-500/50 hover:border-purple-400 hover:shadow-lg hover:${COLORS.primaryGlow}`}
        >
          Télécharger CV
        </a>
        <a 
          href="#contact" 
          className={`${STYLES.button} bg-gradient-to-r ${COLORS.secondaryLight} border-cyan-500/60 text-cyan-200 hover:text-cyan-100 hover:border-cyan-400 hover:shadow-lg hover:${COLORS.secondaryGlow}`}
        >
          Me contacter
        </a>
      </div>
    </div>
  </section>
);

/**
 * COMPETENCES - Section moderne avec cards animées
 */
const Competences = () => {
  const skills = [
    { title: "FRONTEND", gradient: COLORS.primary, techs: [
      { name: "React", icon: "react" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "TypeScript", icon: "typescript" },
    ]},
    { title: "BACKEND", gradient: COLORS.secondary, techs: [
      { name: "Laravel", icon: "laravel" },
      { name: "PHP", icon: "php" },
      { name: "C#", icon: "csharp" },
      { name: "Python", icon: "python" },
      { name: "Node.js", icon: "nodejs" },
    ]},
    { title: "BASE DE DONNÉES", gradient: COLORS.primary, techs: [
      { name: "MySQL", icon: "mysql" },
      { name: "MariaDB", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
    ]},
    { title: "OUTILS & SYSTEMES", gradient: COLORS.secondary, techs: [
      { name: "Git", icon: "git" },
      { name: "Linux", icon: "linux" },
      { name: "Windows", icon: "windows" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
    ]}
  ];

  return (
    <section id="competences" className={`${STYLES.section} bg-slate-900`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`${STYLES.heading} bg-gradient-to-r ${COLORS.secondary} bg-clip-text text-transparent`}>
            Compétences
          </h2>
          <p className="text-gray-300 text-base">Mes domaines d'expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className={`${STYLES.card} bg-slate-800/50 border-slate-700 hover:border-slate-600 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-lg font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent mb-6 tracking-wide`}>
                {skill.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {skill.techs.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center space-y-2 p-4 rounded bg-slate-900/50 hover:bg-slate-800/50 transition-all">
                    <TechIcon tech={tech} />
                    <span className="text-xs text-gray-400 font-medium text-center">{tech.name}</span>
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
 * PARCOURS - Timeline moderne
 */
const Parcours = () => {
  const steps = parcoursData;
  const colorMap = {
    cyan: { gradient: `from-cyan-500 to-blue-500`, bg: `${COLORS.secondaryLight}` },
    blue: { gradient: `from-blue-500 to-indigo-500`, bg: `${COLORS.secondary}` },
    orange: { gradient: `from-orange-500 to-red-500`, bg: `${COLORS.primary}` },
    purple: { gradient: `from-purple-500 to-pink-500`, bg: `${COLORS.primary}` },
    green: { gradient: `from-green-500 to-emerald-500`, bg: `${COLORS.secondary}` }
  };

  return (
    <section id="experience" className={`${STYLES.section} bg-slate-900`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`${STYLES.heading} bg-gradient-to-r ${COLORS.secondary} bg-clip-text text-transparent`}>
            Mon Parcours
          </h2>
          <p className="text-gray-300 text-lg">Formation & Expériences</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const colors = colorMap[step.color];
              return (
                <div key={step.number} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`${STYLES.card} bg-slate-800/50 border-slate-700 hover:border-opacity-70 hover:scale-105 h-full`}>
                    <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold">{step.number}</span>
                    </div>

                    <div className="space-y-3">
                      <h3 className={`text-lg font-bold text-cyan-400 pr-8`}>{step.title}</h3>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-400">{step.date}</p>
                        <p className="text-sm text-gray-400 font-medium">{step.school}</p>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>

                      <div className="pt-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-400">Progression</span>
                          <span className="text-xs font-bold text-cyan-400">{step.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-1000 ease-out`}
                            style={{ width: `${step.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * PROJETS - Grille de projets moderne
 */
const Projets = ({ activeFilter, setActiveFilter }) => {
  const filteredProjects = useMemo(
    () => activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projets" className={`${STYLES.section} bg-slate-950`}>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className={`${STYLES.heading} bg-gradient-to-r ${COLORS.primary} bg-clip-text text-transparent`}>
            Projets
          </h2>
          <p className="text-gray-300 text-base">Réalisations sélectionnées</p>

          <div className="flex justify-center space-x-4 mt-6">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-purple-500/50'
                    : 'bg-slate-800 text-gray-400 border border-slate-700 hover:text-white hover:border-slate-600'
                }`}
                aria-pressed={activeFilter === filter}
              >
                {filter === 'all' ? 'Tous les projets' : 'Projets Web'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => {
            const projectLink = project.link ? `${PROJECT_BASE_URL}${project.link}` : project.github;
            
            return (
              <div
                key={project.id}
                className="group relative animate-fade-in-up card-3d glow-on-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${STYLES.card} bg-slate-800/50 border-slate-700 hover:border-purple-500/50 h-full flex flex-col shadow-lg shadow-slate-900/50 hover:shadow-purple-500/30`}>
                  
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded bg-slate-900/50 border border-slate-700 text-gray-400 text-xs font-medium hover:border-slate-600 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 rounded text-sm font-medium bg-slate-900/50 border border-slate-600 text-gray-300 hover:text-white hover:border-slate-500 hover:shadow-lg hover:shadow-slate-500/30 transition-all"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Voir le code de ${project.title}`}
                        >
                          Code
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={`${PROJECT_BASE_URL}${project.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 text-center px-4 py-2 rounded text-sm font-medium bg-gradient-to-r ${COLORS.primary} border border-purple-500/50 text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all`}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Voir la démo de ${project.title}`}
                        >
                          Demo
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
 * CONTACT - Section simple et efficace
 */
const Contact = () => {
  const contactItems = [
    { label: 'Email', value: 'fonseca.ryan69100@gmail.com', href: 'mailto:fonseca.ryan69100@gmail.com', gradient: COLORS.primary, glow: COLORS.primaryGlow },
    { label: 'Téléphone', value: '07 45 35 23 07', href: 'tel:+33745352307', gradient: COLORS.secondary, glow: COLORS.secondaryGlow },
  ];

  return (
    <section id="contact" className={`${STYLES.section} bg-slate-900 relative`}>
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`${STYLES.heading} text-white`}>Me Contacter</h2>
          <p className="text-gray-300 text-lg mb-4">Prêt pour une collaboration ?</p>
          
          <div className="inline-flex items-center space-x-2 px-6 py-2 rounded bg-slate-800 border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="text-gray-400 text-sm">Disponible pour des projets</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${STYLES.card} bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/40 hover:border-purple-400/80 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30`}
            >
              <h3 className="text-white font-bold text-lg mb-2">{item.label}</h3>
              <p className="text-gray-300 text-sm break-all hover:text-purple-300 transition-colors">
                {item.value}
              </p>
            </a>
          ))}

          <div className={`${STYLES.card} bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-pink-500/40 shadow-lg shadow-pink-500/10`}>
            <h3 className="text-white font-bold text-lg mb-2">Localisation</h3>
            <p className="text-gray-300 text-lg">Lyon 5ème, 69005</p>
          </div>
        </div>

        <div className="text-center">
          <a href="mailto:fonseca.ryan69100@gmail.com" className={`${STYLES.button} bg-gradient-to-r ${COLORS.primary} border-purple-500/50 hover:shadow-lg hover:${COLORS.primaryGlow}`}>
            Envoyer un email
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * FOOTER - Simple et sobre
 */
const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-700 py-12">
    <div className="container mx-auto px-6 text-center">
      {/* Logo */}
      <div className="flex items-center justify-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center">
          <span className="text-white font-bold">RF</span>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-bold text-white">Ryan Fonseca</h3>
          <p className="text-xs text-gray-500">Developer</p>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-6 max-w-2xl mx-auto">
        BTS SIO SLAM • Stage APICIL • Recherche alternance Bachelor DevOps/Fullstack 2026
      </p>

      {/* Réseaux sociaux */}
      <div className="flex justify-center space-x-4 mb-8">
        <a
          href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded bg-slate-800 border border-slate-700 hover:border-slate-600 flex items-center justify-center transition-all"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a
          href="https://github.com/rf69100"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded bg-slate-800 border border-slate-700 hover:border-slate-600 flex items-center justify-center transition-all"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="pt-6 border-t border-slate-800">
        <p className="text-gray-500 text-xs">
          © 2025 Ryan Fonseca
        </p>
      </div>
    </div>
  </footer>
);

/**
 * PORTFOLIO - Composant principal
 */
const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
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