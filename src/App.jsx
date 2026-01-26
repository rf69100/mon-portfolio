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
  socialIcons
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
    ? 'bg-blue-600/20 hover:bg-blue-600 border-blue-500/30' 
    : 'bg-gray-700/20 hover:bg-gray-700 border-gray-600/30';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${size} rounded-lg ${bgClass} flex items-center justify-center transition-all duration-300 hover:scale-110 border`}
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
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        <div className="absolute inset-0 animate-ping">
          <div className="w-20 h-20 rounded-full bg-blue-500/30"></div>
        </div>
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 animate-pulse flex items-center justify-center shadow-2xl shadow-blue-500/50">
          <span className="text-3xl font-bold text-white">{loaderConfig.initials}</span>
        </div>
      </div>
      <div className="space-y-2 text-center">
        <p className="text-white font-semibold text-xl">{loaderConfig.name}</p>
        <p className="text-blue-300 text-sm animate-pulse">{loaderConfig.message}</p>
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-blue-500/30'
        : 'bg-slate-900/60 backdrop-blur-lg border-b border-blue-500/20'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="group flex items-center space-x-3 cursor-default">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/50 transform group-hover:rotate-12 transition-all duration-300">
              <span className="text-white font-bold text-lg">{personalInfo.initials}</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {personalInfo.name}
              </h1>
              <p className="text-xs text-blue-300">{personalInfo.title}</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
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

          {/* Bouton Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? socialIcons.hamburger.open : socialIcons.hamburger.closed} />
            </svg>
          </button>

          {/* Réseaux sociaux Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <SocialLink platform="linkedin" href={personalInfo.linkedin} />
            <SocialLink platform="github" href={personalInfo.github} />
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-blue-500/20 animate-fade-in-down">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
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
              
              <div className="flex items-center justify-center space-x-4 pt-4 mt-4 border-t border-blue-500/20">
                <SocialLink platform="linkedin" href={personalInfo.linkedin} />
                <SocialLink platform="github" href={personalInfo.github} />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

/**
 * ACCUEIL
 */
const Accueil = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>

    <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-5xl">
      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm mb-8 animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-sm text-green-400 font-medium">{hero.badge.text}</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {personalInfo.name}
        </span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 animate-fade-in-up animation-delay-200">
        {personalInfo.title.split(' ')[0]} <span className="text-blue-400">{personalInfo.title.split(' ')[1]}</span>
      </h2>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl mb-8 animate-fade-in-up animation-delay-400">
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">{hero.intro}</p>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
            <p className="text-purple-400 font-medium">{hero.formation}</p>
          </div>
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
            <p className="text-green-400 font-medium">{hero.context}</p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
          <p className="text-yellow-400 font-bold text-lg mb-1">{hero.searchStatus}</p>
          <p className="text-gray-300">{hero.searchDetails}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
        <a 
          href={hero.cta.primary.href}
          download={hero.cta.primary.download}
          className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all hover:scale-105"
        >
          {hero.cta.primary.text}
        </a>
        <a 
          href={hero.cta.secondary.href}
          className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold hover:bg-white/10 transition-all hover:scale-105"
        >
          {hero.cta.secondary.text}
        </a>
      </div>
    </div>
  </section>
);

/**
 * COMPETENCES
 */
const Competences = () => (
  <section id="competences" className="py-20 bg-gradient-to-b from-slate-900 to-blue-900/50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className={`bg-gradient-to-r ${sectionsHeaders.competences.gradient} bg-clip-text text-transparent`}>
            {sectionsHeaders.competences.title}
          </span>
        </h2>
        <p className="text-gray-400 text-lg">{sectionsHeaders.competences.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={skill.title}
            className={`group relative ${skill.bgColor} backdrop-blur-xl rounded-3xl p-8 border ${skill.borderColor} hover:border-opacity-70 transition-all duration-500 hover:scale-105 animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
            
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

/**
 * PARCOURS
 */
const Parcours = () => (
  <section id="experience" className="py-20 bg-slate-900">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className={`bg-gradient-to-r ${sectionsHeaders.parcours.gradient} bg-clip-text text-transparent`}>
            {sectionsHeaders.parcours.title}
          </span>
        </h2>
        <p className="text-gray-400 text-lg">{sectionsHeaders.parcours.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parcours.map((step, index) => {
            const colors = colorMap[step.color];
            return (
              <div
                key={step.number}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative ${colors.bg} backdrop-blur-xl rounded-2xl p-6 border ${colors.border} hover:border-opacity-70 transition-all duration-500 hover:scale-105 h-full`}>
                  <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold">{step.number}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className={`text-lg font-bold ${colors.text} pr-8`}>{step.title}</h3>

                    <div className="space-y-1">
                      <p className="text-sm text-gray-400">{step.date}</p>
                      <p className="text-sm text-gray-400 font-medium">{step.school}</p>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>

                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Progression</span>
                        <span className={`text-xs font-bold ${colors.text}`}>{step.progress}%</span>
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

/**
 * PROJETS
 */
const Projets = ({ activeFilter, setActiveFilter }) => {
  const filteredProjects = useMemo(
    () => activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projets" className="py-20 bg-gradient-to-b from-blue-900/50 to-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${sectionsHeaders.projets.gradient} bg-clip-text text-transparent`}>
              {sectionsHeaders.projets.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">{sectionsHeaders.projets.subtitle}</p>

          <div className="flex justify-center space-x-4">
            {projectsConfig.filters.map((filter) => (
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
                {projectsConfig.filterLabels[filter]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full flex flex-col">
                {project.new && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold shadow-lg animate-pulse">
                    ⭐ NEW
                  </div>
                )}

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

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

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

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2.5 rounded-xl bg-gray-700/30 hover:bg-gray-700 text-white font-medium transition-all hover:scale-105 border border-gray-600/30"
                      >
                        Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={`${PROJECT_BASE_URL}${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
  <section id="contact" className="py-20 bg-slate-900">
    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className={`bg-gradient-to-r ${sectionsHeaders.contact.gradient} bg-clip-text text-transparent`}>
            {contact.title}
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-6">{contact.subtitle}</p>
        
        <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-green-400 font-bold">{contact.availability.status}</span>
          <span className="text-gray-400"> • {contact.mission.dates}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {contact.cards.map((card) => {
          const colorClasses = {
            blue: 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50 text-blue-400',
            purple: 'bg-purple-500/10 border-purple-500/30 hover:border-purple-500/50 text-purple-400',
            green: 'bg-green-500/10 border-green-500/30 text-green-400'
          };

          const Element = card.href ? 'a' : 'div';
          
          return (
            <Element
              key={card.type}
              {...(card.href && { href: card.href })}
              className={`group p-8 rounded-2xl backdrop-blur-xl border transition-all hover:scale-105 ${colorClasses[card.color]}`}
            >
              <h3 className={`${colorClasses[card.color].split(' ').pop()} font-bold text-lg mb-2`}>
                {card.title}
              </h3>
              <p className={`text-gray-300 ${card.type === 'email' ? 'text-sm break-all' : 'text-lg font-medium'} group-hover:${colorClasses[card.color].split(' ').pop()} transition-colors`}>
                {card.value}
              </p>
            </Element>
          );
        })}
      </div>

      <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/30 mb-10">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">{contact.mission.title}</h3>
          <p className="text-gray-300">{contact.availability.detail}</p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {contact.techStack.map((tech) => (
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

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="relative block text-center py-6 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold text-xl transition-all hover:scale-105 shadow-2xl"
        >
          {contact.cta}
        </a>
      </div>
    </div>
  </section>
);

/**
 * FOOTER
 */
const Footer = () => (
  <footer className="bg-slate-950 border-t border-blue-500/20 py-12">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">{personalInfo.initials}</span>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
          <p className="text-sm text-blue-400">{personalInfo.title}</p>
        </div>
      </div>

      <p className="text-gray-400 mb-6 max-w-2xl mx-auto">{personalInfo.tagline}</p>

      <div className="flex justify-center space-x-4 mb-8">
        <SocialLink platform="linkedin" href={personalInfo.linkedin} size="w-12 h-12" iconSize="w-6 h-6" />
        <SocialLink platform="github" href={personalInfo.github} size="w-12 h-12" iconSize="w-6 h-6" />
      </div>

      <div className="pt-6 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © 2025 {personalInfo.name} • Tous droits réservés
        </p>
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