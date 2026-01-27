import { useState, useEffect } from 'react';
import { personalInfo, socialIcons } from './content';

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

/**
 * Messages drôles qui changent aléatoirement
 */
const funnyMessages = [
  "Le dev est parti chercher des croissants...",
  "En train de debugger 47 erreurs... enfin 48... 49...",
  "Ctrl+S en boucle pour être sûr",
  "Le code compile... enfin presque",
  "Stack Overflow est en maintenance (panique)",
  "npm install patience --save",
  "Le stagiaire est sur le coup !",
  "Chargement des pixels... 1 sur 8 millions",
  "En attente de motivation.exe",
  "git push --force (oups)",
  "Le café n'était pas assez fort aujourd'hui",
  "En train de négocier avec le CSS",
  "undefined is not a function (classique)",
  "Le serveur fait sa sieste",
  "En mode avion... mais sans avion"
];

/**
 * COMING SOON PAGE
 */
const ComingSoon = () => {
  const [message, setMessage] = useState(funnyMessages[0]);
  const [dots, setDots] = useState('');
  const [glitchText, setGlitchText] = useState(false);

  // Changer le message drôle toutes les 4 secondes
  useEffect(() => {
    const messageInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * funnyMessages.length);
      setGlitchText(true);
      setTimeout(() => {
        setMessage(funnyMessages[randomIndex]);
        setGlitchText(false);
      }, 150);
    }, 4000);

    return () => clearInterval(messageInterval);
  }, []);

  // Animation des points de suspension
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Header simplifié */}
      <header className="bg-gray-900/95 backdrop-blur-md shadow-2xl border-b-2 border-orange-500/50 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <a href="/" className="group flex items-center">
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 font-mono tracking-widest flex items-center">
                <span className="mr-2 transform group-hover:rotate-12 transition-transform duration-300">🚧</span>
                <span className="hidden sm:inline group-hover:tracking-wider transition-all duration-300">Zone de Travaux</span>
                <span className="sm:hidden">WIP</span>
              </div>
            </a>

            <a
              href="/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all font-mono font-bold text-sm hover:scale-105"
            >
              Retour au Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-3xl mx-auto">

          {/* Icône animée */}
          <div className="mb-8 relative">
            <div className="text-9xl animate-bounce">
              🏗️
            </div>
            <div className="absolute -top-4 -right-4 text-4xl animate-spin" style={{ animationDuration: '3s' }}>
              ⚙️
            </div>
            <div className="absolute -bottom-2 -left-4 text-3xl animate-pulse">
              💻
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 mb-6 font-mono tracking-tight">
            PAS ENCORE DÉPLOYÉ
          </h1>

          {/* Sous-titre avec effet glitch */}
          <h2 className={`text-xl md:text-2xl font-bold text-yellow-300 mb-8 font-mono uppercase tracking-wider transition-all duration-150 ${glitchText ? 'opacity-0 translate-x-2' : 'opacity-100'}`}>
            Mais ça risque de pas tarder !
          </h2>

          {/* Carte avec message drôle */}
          <div className="bg-gradient-to-br from-gray-900/80 to-orange-900/30 border-2 border-orange-500/50 rounded-2xl p-8 mb-8 backdrop-blur-sm shadow-2xl shadow-orange-500/20">

            {/* Barre de progression fake */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-300 font-mono font-bold text-sm uppercase">Déploiement en cours{dots}</span>
                <span className="text-orange-300 font-mono font-bold text-sm">99.9%</span>
              </div>
              <div className="bg-gray-800 rounded-full h-4 overflow-hidden border border-orange-500/30">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full transition-all duration-1000 animate-pulse"
                  style={{ width: '99.9%', backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }}
                ></div>
              </div>
              <p className="text-gray-500 font-mono text-xs mt-2 italic">* Estimation très optimiste</p>
            </div>

            {/* Message drôle qui change */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-green-400 font-mono text-sm">{'>'} status:</span>
              </div>
              <p className={`text-gray-300 font-mono text-lg transition-all duration-150 ${glitchText ? 'opacity-0 -translate-y-2' : 'opacity-100'}`}>
                {message}
              </p>
            </div>
          </div>

          {/* Infos de debug humoristiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl mb-2">☕</div>
              <div className="text-gray-400 font-mono text-xs uppercase">Cafés bus</div>
              <div className="text-white font-mono font-bold text-xl">∞</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl mb-2">🐛</div>
              <div className="text-gray-400 font-mono text-xs uppercase">Bugs fixés</div>
              <div className="text-white font-mono font-bold text-xl">42</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl mb-2">🔄</div>
              <div className="text-gray-400 font-mono text-xs uppercase">npm install</div>
              <div className="text-white font-mono font-bold text-xl">127</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl mb-2">😅</div>
              <div className="text-gray-400 font-mono text-xs uppercase">Santé mentale</div>
              <div className="text-red-400 font-mono font-bold text-xl">12%</div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="/"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all font-mono font-bold uppercase tracking-wider shadow-lg hover:shadow-blue-500/50 hover:scale-105 border-2 border-blue-400/50"
            >
              Voir les projets déployés
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl transition-all font-mono font-bold uppercase tracking-wider shadow-lg hover:shadow-gray-500/50 hover:scale-105 border-2 border-gray-600"
            >
              Voir le code sur GitHub
            </a>
          </div>

          {/* Message de fin */}
          <p className="text-gray-500 font-mono text-sm">
            En attendant, tu peux toujours checker mes autres projets ou me stalker sur les réseaux
          </p>

          {/* Liens sociaux */}
          <div className="flex justify-center space-x-4 mt-6">
            <SocialLink platform="linkedin" href={personalInfo.linkedin} size="w-12 h-12" iconSize="w-6 h-6" />
            <SocialLink platform="github" href={personalInfo.github} size="w-12 h-12" iconSize="w-6 h-6" />
          </div>
        </div>
      </main>

      {/* Footer simplifié */}
      <footer className="bg-gray-900 text-white py-6 border-t-2 border-orange-500/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 font-mono text-sm">
            © 2025 {personalInfo.name} • Ce projet arrive bientôt... promis !
          </p>
        </div>
      </footer>

      {/* CSS pour l'animation shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
