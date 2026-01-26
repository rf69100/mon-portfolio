import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { hero, parcours as parcoursData, contact as contactData, projects } from './content';

// ============================================================================
// CONSTANTES GLOBALES
// ============================================================================

const NAVIGATION_ITEMS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#competences', label: 'Compétences' },
  { href: '#experience', label: 'Parcours' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' }
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
    return <span className="text-2xl">💻</span>;
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
 * LOADER - Composant d'animation de chargement moderne
 */
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        {/* Cercles animés */}
        <div className="absolute inset-0 animate-ping">
          <div className="w-20 h-20 rounded-full bg-blue-500/30"></div>
        </div>
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 animate-pulse flex items-center justify-center shadow-2xl shadow-blue-500/50">
          <span className="text-3xl font-bold text-white">RF</span>
        </div>
      </div>
      <div className="space-y-2 text-center">
        <p className="text-white font-semibold text-xl">Ryan Fonseca</p>
        <p className="text-blue-300 text-sm animate-pulse">Chargement du portfolio...</p>
      </div>
    </div>
  </div>
);

/**
 * HEADER - Navigation moderne avec glassmorphism
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-blue-500/30'
        : 'bg-slate-900/60 backdrop-blur-lg border-b border-blue-500/20'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo moderne */}
          <div className="group flex items-center space-x-3 cursor-default">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/50 transform group-hover:rotate-12 transition-all duration-300">
              <span className="text-white font-bold text-lg">RF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Ryan Fonseca
              </h1>
              <p className="text-xs text-blue-300">Développeur Fullstack</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300"
                aria-label={`Naviguer vers ${item.label}`}
              >
                <span className="font-medium">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Bouton Hamburger Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Réseaux sociaux Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-blue-600/20 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-500/30"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com/rf69100"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-700/20 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600/30"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-blue-500/20 animate-fade-in-down">
            <div className="flex flex-col space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-lg transition-all text-sm font-semibold"
                  aria-label={`Naviguer vers ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Réseaux sociaux dans le menu mobile */}
              <div className="flex items-center justify-center space-x-4 pt-4 mt-4 border-t border-blue-500/20">
                <a
                  href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-blue-600/20 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/rf69100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-700/20 hover:bg-gray-700 flex items-center justify-center transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

/**
 * ACCUEIL - Hero section moderne
 */
const Accueil = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
    {/* Fond animé */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>

    <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-5xl">
      {/* Badge de statut */}
      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm mb-8 animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-sm text-green-400 font-medium">Disponible pour alternance 2026</span>
      </div>

      {/* Titre principal */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Ryan Fonseca
        </span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 animate-fade-in-up animation-delay-200">
        Développeur <span className="text-blue-400">Fullstack</span>
      </h2>

      {/* Card principale avec glassmorphism */}
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl mb-8 animate-fade-in-up animation-delay-400">
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          {hero.intro}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {hero.techs.split(' • ').map((tech, index) => (
            <span 
              key={index}
              className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-500/20 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Badges info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
            <p className="text-purple-400 font-medium">{hero.formation}</p>
          </div>
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
            <p className="text-green-400 font-medium">{hero.context}</p>
          </div>
        </div>

        {/* Status recherche */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
          <p className="text-yellow-400 font-bold text-lg mb-1">{hero.searchStatus}</p>
          <p className="text-gray-300">{hero.searchDetails}</p>
        </div>
      </div>

      {/* Boutons CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
        <a 
          href="/ryan_fonseca_cv.pdf" 
          download 
          className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all hover:scale-105"
          aria-label="Télécharger mon CV"
        >
          <span className="flex items-center space-x-2">
            <span>Télécharger CV</span>
          </span>
        </a>
        <a 
          href="#contact" 
          className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold hover:bg-white/10 transition-all hover:scale-105"
        >
          <span className="flex items-center space-x-2">
            <span>Me contacter</span>
          </span>
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
    {
      title: "FRONTEND",
      color: "from-purple-500 to-pink-500",
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
      color: "from-blue-500 to-cyan-500",
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
      color: "from-green-500 to-emerald-500",
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
      color: "from-yellow-500 to-orange-500",
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

  return (
    <section id="competences" className="py-20 bg-gradient-to-b from-slate-900 to-blue-900/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Mon arsenal technologique</p>
        </div>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className={`group relative ${skill.bgColor} backdrop-blur-xl rounded-3xl p-8 border ${skill.borderColor} hover:border-opacity-70 transition-all duration-500 hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient glow effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
              
              <h3 className={`text-xl font-bold ${skill.textColor} mb-6 text-center tracking-wider`}>
                {skill.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {skill.techs.map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-default group/tech"
                  >
                    <TechIcon tech={tech} />
                    <span className="text-sm text-gray-300 font-medium text-center group-hover/tech:text-white transition-colors">
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
 * PARCOURS - Timeline moderne
 */
const Parcours = () => {
  const steps = parcoursData;

  const colorMap = {
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

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Mon Parcours
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Formation & Expériences</p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const colors = colorMap[step.color];
              return (
                <div
                  key={step.number}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card */}
                  <div className={`relative ${colors.bg} backdrop-blur-xl rounded-2xl p-6 border ${colors.border} hover:border-opacity-70 transition-all duration-500 hover:scale-105 h-full`}>
                    {/* Badge niveau */}
                    <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold">{step.number}</span>
                    </div>

                    {/* Contenu */}
                    <div className="space-y-3">
                      <h3 className={`text-lg font-bold ${colors.text} pr-8`}>
                        {step.title}
                      </h3>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-400">{step.date}</p>
                        <p className="text-sm text-gray-400 font-medium">{step.school}</p>
                      </div>

                      <p className="text-sm text-gray-300 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress bar */}
                      <div className="pt-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-400">Progression</span>
                          <span className={`text-xs font-bold ${colors.text}`}>
                            {step.progress}%
                          </span>
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
    <section id="projets" className="py-20 bg-gradient-to-b from-blue-900/50 to-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Réalisations & Créations</p>

          {/* Filtres */}
          <div className="flex justify-center space-x-4">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-105 shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
                aria-pressed={activeFilter === filter}
              >
                {filter === 'all' ? 'Tous' : 'Web'}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => {
            const projectLink = project.link ? `${PROJECT_BASE_URL}${project.link}` : project.github;
            
            return (
              <div
                key={project.id}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full flex flex-col">
                  {/* Badge NEW */}
                  {project.new && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold shadow-lg animate-pulse">
                      ⭐ NEW
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Boutons */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2.5 rounded-xl bg-gray-700/30 hover:bg-gray-700 text-white font-medium transition-all hover:scale-105 border border-gray-600/30"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Voir le code de ${project.title}`}
                        >
                          <span className="flex items-center justify-center space-x-1">
                            <span>Code</span>
                          </span>
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={`${PROJECT_BASE_URL}${project.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Voir la démo de ${project.title}`}
                        >
                          <span className="flex items-center justify-center space-x-1">
                            <span>Demo</span>
                          </span>
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
 * CONTACT - Section moderne avec cards
 */
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Me Contacter
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-6">Prêt pour une collaboration ?</p>
          
          {/* Status badge */}
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-green-400 font-bold">{contactData.availability.status}</span>
            <span className="text-gray-400"> • {contactData.mission.dates}</span>
          </div>
        </div>

        {/* Grille de contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Email */}
          <a
            href="mailto:fonseca.ryan69100@gmail.com"
            className="group p-8 rounded-2xl bg-blue-500/10 backdrop-blur-xl border border-blue-500/30 hover:border-blue-500/50 transition-all hover:scale-105"
          >
            <h3 className="text-blue-400 font-bold text-lg mb-2">EMAIL</h3>
            <p className="text-gray-300 text-sm break-all group-hover:text-blue-400 transition-colors">
              fonseca.ryan69100@gmail.com
            </p>
          </a>

          {/* Téléphone */}
          <a
            href="tel:+33745352307"
            className="group p-8 rounded-2xl bg-purple-500/10 backdrop-blur-xl border border-purple-500/30 hover:border-purple-500/50 transition-all hover:scale-105"
          >
            <h3 className="text-purple-400 font-bold text-lg mb-2">TÉLÉPHONE</h3>
            <p className="text-gray-300 text-lg group-hover:text-purple-400 transition-colors font-medium">
              07 45 35 23 07
            </p>
          </a>

          {/* Localisation */}
          <div className="p-8 rounded-2xl bg-green-500/10 backdrop-blur-xl border border-green-500/30">
            <h3 className="text-green-400 font-bold text-lg mb-2">LOCALISATION</h3>
            <p className="text-gray-300 text-lg font-medium">
              Lyon 5ème, 69005
            </p>
          </div>
        </div>

        {/* Card mission */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/30 mb-10">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">{contactData.mission.title}</h3>
            <p className="text-gray-300">{contactData.availability.detail}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {["React", "Laravel", "PHP", "JavaScript", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA principal */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
          <a
            href="mailto:fonseca.ryan69100@gmail.com"
            className="relative block text-center py-6 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold text-xl transition-all hover:scale-105 shadow-2xl"
          >
            <span className="flex items-center justify-center space-x-3">
              <span>{contactData.cta}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * FOOTER - Moderne et minimaliste
 */
const Footer = () => (
  <footer className="bg-slate-950 border-t border-blue-500/20 py-12">
    <div className="container mx-auto px-6 text-center">
      {/* Logo */}
      <div className="flex items-center justify-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">RF</span>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold text-white">Ryan Fonseca</h3>
          <p className="text-sm text-blue-400">Développeur Fullstack</p>
        </div>
      </div>

      <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
        Étudiant BTS SIO SLAM • Stage APICIL validé • Recherche alternance Bachelor DevOps/Fullstack 2026
      </p>

      {/* Réseaux sociaux */}
      <div className="flex justify-center space-x-4 mb-8">
        <a
          href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-blue-600/20 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 border border-blue-500/30"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a
          href="https://github.com/rf69100"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-gray-700/20 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 border border-gray-600/30"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="pt-6 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © 2025 Ryan Fonseca • Tous droits réservés
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