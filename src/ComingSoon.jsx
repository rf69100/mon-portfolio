import { useState, useEffect } from 'react';
import { personalInfo, socialIcons, comingSoon } from './content';

/**
 * SocialIcon - Icône de réseau social
 */
const SocialIcon = ({ platform, size = "w-5 h-5" }) => (
  <svg className={`${size} ${platform === 'linkedin' ? 'text-blue-400' : 'text-gray-300'}`} fill="currentColor" viewBox={socialIcons[platform].viewBox}>
    <path d={socialIcons[platform].path}/>
  </svg>
);

/**
 * SocialLink - Lien vers réseau social
 */
const SocialLink = ({ platform, href }) => {
  const bgClass = platform === 'linkedin'
    ? 'bg-blue-600 p-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110'
    : 'bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/50 hover:scale-110 border border-gray-700';

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={bgClass} aria-label={platform}>
      <SocialIcon platform={platform} size="w-6 h-6" />
    </a>
  );
};

/**
 * StatCard - Carte de statistique
 */
const StatCard = ({ stat }) => {
  const colorStyles = {
    purple: { border: 'hover:border-purple-500/50', text: 'text-purple-400' },
    green: { border: 'hover:border-green-500/50', text: 'text-green-400' },
    blue: { border: 'hover:border-blue-500/50', text: 'text-blue-400' },
    red: { border: 'hover:border-red-500/50', text: 'text-red-400' }
  };

  const style = colorStyles[stat.color] || colorStyles.blue;

  return (
    <div className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-4 border-2 border-gray-700/50 ${style.border} transition-all duration-300 hover:scale-105`}>
      <div className="text-gray-400 font-mono text-xs uppercase mb-2">{stat.label}</div>
      <div className={`font-mono font-bold text-2xl ${stat.color === 'red' ? style.text : 'text-white'}`}>
        {stat.value}
      </div>
    </div>
  );
};

/**
 * COMING SOON PAGE
 */
const ComingSoon = () => {
  const [message, setMessage] = useState(comingSoon.statusMessages[0]);
  const [dots, setDots] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Changer le message toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * comingSoon.statusMessages.length);
        setMessage(comingSoon.statusMessages[randomIndex]);
        setIsTransitioning(false);
      }, 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animation des points
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-md shadow-2xl border-b-2 border-blue-500/50 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <a href="/" className="group flex items-center">
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-mono tracking-widest">
                <span className="hidden sm:inline group-hover:tracking-wider transition-all duration-300">{comingSoon.header.title}</span>
                <span className="sm:hidden">{comingSoon.header.titleShort}</span>
              </div>
            </a>
            <a
              href="/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all font-mono font-bold text-sm hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              {comingSoon.header.backButton}
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-3xl mx-auto">

          {/* Titre */}
          <h1 className={`text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${comingSoon.hero.gradient} mb-4 font-mono tracking-tight`}>
            {comingSoon.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-400 mb-10 font-mono uppercase tracking-wider">
            {comingSoon.hero.subtitle}
          </h2>

          {/* Terminal Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 border-2 border-purple-500/50 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm shadow-2xl shadow-purple-500/20">

            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-gray-500 font-mono text-sm">{comingSoon.terminal.filename}</span>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-purple-300 font-mono font-bold text-sm uppercase">
                  $ {comingSoon.terminal.command}{dots}
                </span>
                <span className="text-purple-300 font-mono font-bold text-sm">
                  {comingSoon.terminal.progress}%
                </span>
              </div>
              <div className="bg-gray-800 rounded-full h-3 overflow-hidden border border-purple-500/30">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"
                  style={{ width: `${comingSoon.terminal.progress}%` }}
                ></div>
              </div>
              <p className="text-gray-600 font-mono text-xs mt-2 italic">{comingSoon.terminal.note}</p>
            </div>

            {/* Status Message */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400 font-mono text-sm">ryan@portfolio:~$</span>
                <span className="text-gray-400 font-mono text-sm">status</span>
              </div>
              <p className={`text-gray-300 font-mono text-base md:text-lg transition-all duration-150 ${isTransitioning ? 'opacity-0 -translate-y-2' : 'opacity-100'}`}>
                &gt; {message}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {comingSoon.stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={comingSoon.cta.primary.href}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all font-mono font-bold uppercase tracking-wider shadow-lg hover:shadow-purple-500/50 hover:scale-105 border-2 border-purple-400/50"
            >
              {comingSoon.cta.primary.text}
            </a>
            <a
              href={comingSoon.cta.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl transition-all font-mono font-bold uppercase tracking-wider shadow-lg hover:shadow-gray-500/50 hover:scale-105 border-2 border-gray-600"
            >
              {comingSoon.cta.secondary.text}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <SocialLink platform="linkedin" href={personalInfo.linkedin} />
            <SocialLink platform="github" href={personalInfo.github} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 border-t-2 border-blue-500/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 font-mono text-sm">
            {new Date().getFullYear()} {personalInfo.name} - {comingSoon.footer.text}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
