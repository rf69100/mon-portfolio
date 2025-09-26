import { useState, useEffect } from 'react';
import './index.css';

// Composant principal du portfolio
const Portfolio = () => {
  // Filtre pour les projets
  const [activeFilter, setActiveFilter] = useState('all');
  // Etat pour le loader animé
  const [loading, setLoading] = useState(true);

  // Simule le chargement du site (loader)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  // Liste des projets (à compléter)
  const projects = [
    {
      id: 1,
      title: "Application Gestion de Stage",
      category: "web",
      description: "Plateforme de gestion des stages pour mon BTS SIO",
      github: "https://github.com/ton-github/gestion-stage",
      link: "https://ton-lien-stage.vercel.app"
    },
    {
      id: 2,
      title: "NBA Dashboard",
      category: "web",
      description: "Dashboard interactif en React avec statistiques de joueurs NBA et mode clair/sombre.",
      github: "https://github.com/rf69100/nba-dashboard",
      link: "https://ton-nba-dashboard.vercel.app"
    }
  ];

  // Filtrage des projets selon le filtre actif
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Affiche le loader jeu vidéo pendant le chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        {/* Loader animé style XP jeu vidéo */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-400 border-solid"></div>
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold text-blue-400 font-mono">XP</span>
          </div>
          <span className="mt-6 text-white font-semibold text-lg font-mono">Chargement...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white font-sans">
      {/* Header du site avec navigation et réseaux sociaux */}
      <header className="fixed top-0 w-full bg-gray-900 shadow-sm z-50 border-b-4 border-blue-700">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-wrap justify-between items-center">
            {/* Titre du site avec emoji */}
            <div className="text-2xl font-extrabold text-blue-400 tracking-widest font-mono flex items-center">
              <span className="mr-2">🎮</span> MonPortfolio
            </div>
            {/* Navigation principale */}
            <nav className="hidden md:flex space-x-4 md:space-x-8 mt-2 md:mt-0 font-mono">
              <a href="#accueil" className="text-gray-300 hover:text-blue-400 transition-all">Accueil</a>
              <a href="#projets" className="text-gray-300 hover:text-blue-400 transition-all">Projets</a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-all">Expérience</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-all">Contact</a>
            </nav>
            {/* Icônes réseaux sociaux */}
            <div className="flex space-x-4 ml-0 md:ml-6 mt-2 md:mt-0">
              <a href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-125">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://github.com/rf69100" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-125">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 filter invert" />
              </a>
            </div>
            {/* Bouton menu mobile (non fonctionnel ici) */}
            <button className="md:hidden ml-4">
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Section d'accueil / présentation */}
      <section id="accueil" className="pt-32 pb-20 bg-transparent fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* photo de profil */}
            <div className="mx-auto mb-6 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-400 shadow-lg bg-gray-900 flex items-center justify-center">
              <img
                src=""
                alt="Photo de profil"
                className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover"
              />
            </div>
            {/* Nom et titre */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-400 mb-2 font-mono tracking-widest">
              Ryan Fonseca
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 font-mono">
              Développeur Fullstack <span className="text-blue-400">| BTS SIO SLAM</span>
            </h2>
            {/* Description rapide */}
            <p className="text-base md:text-xl text-gray-300 mb-4 font-mono">
              Passionné par le développement web, spécialisé en React et Laravel.<br />
              <span className="text-blue-400">Fan de jeux vidéo & code créatif.</span>
            </p>
            <p className="text-base md:text-xl text-gray-300 mb-8 font-mono">
              Actuellement en quête d'une nouvelle "quête" : un stage pour ma deuxième année de BTS SIO.
            </p>
            {/* Bouton pour télécharger le CV */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
              <a
                href="/CV_Ryan_Fonseca.pdf"
                download
                className="border-2 border-blue-400 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-blue-900 transition-colors text-center font-mono font-bold shadow-lg hover:scale-105"
              >
                <span role="img" aria-label="download">⬇️</span> Télécharger CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section compétences */}
      <section id="competences" className="py-16 md:py-20 bg-transparent fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-4 font-mono">Compétences</h2>
            <p className="text-base md:text-xl text-gray-300 font-mono">Mes principaux outils et technologies</p>
          </div>
          {/* Grille des compétences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 rounded-xl p-4 md:p-6 shadow-lg flex flex-col items-center transition-all duration-300 relative hover:z-10 hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-blue-400">
              <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-4 font-mono">Frontend</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Icônes des technos frontend */}
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">HTML5</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">CSS3</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">JavaScript</span>
                </div>
              </div>
            </div>
            {/* Backend */}
            <div className="bg-gradient-to-br from-green-900 via-gray-900 to-green-800 rounded-xl p-4 md:p-6 shadow-lg flex flex-col items-center transition-all duration-300 relative hover:z-10 hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-green-400">
              <h3 className="text-lg md:text-xl font-bold text-green-400 mb-4 font-mono">Backend</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Icônes des technos backend */}
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" alt="Laravel" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">Laravel</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">PHP</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">Node.js</span>
                </div>
              </div>
            </div>
            {/* Base de données */}
            <div className="bg-gradient-to-br from-yellow-900 via-gray-900 to-yellow-800 rounded-xl p-4 md:p-6 shadow-lg flex flex-col items-center transition-all duration-300 relative hover:z-10 hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-yellow-400">
              <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-4 font-mono">Base de données</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Icônes des technos BDD */}
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" alt="MariaDB" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">MariaDB</span>
                </div>
              </div>
            </div>
            {/* Outils & Systèmes */}
            <div className="bg-gradient-to-br from-red-900 via-gray-900 to-red-800 rounded-xl p-4 md:p-6 shadow-lg flex flex-col items-center transition-all duration-300 relative hover:z-10 hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-red-400">
              <h3 className="text-lg md:text-xl font-bold text-red-400 mb-4 font-mono">Outils & Systèmes</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Icônes des outils */}
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">Git</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">Linux</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows" className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">Windows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline horizontale du parcours */}
      <section id="experience" className="py-20 bg-transparent fade-in">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-blue-400 mb-4 font-mono">Mon Parcours</h2>
            <p className="text-xl text-gray-300 font-mono">Formation et expériences</p>
          </div>
          {/* Frise chronologique horizontale */}
          <div className="overflow-x-auto">
            <div className="flex items-center justify-start gap-12 max-w-4xl mx-auto">
              {/* Bac */}
              <div className="relative flex flex-col items-center w-64 min-w-[16rem]">
                <div className="bg-green-400 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-green-900">
                  <span className="font-mono font-bold text-lg text-white">1</span>
                </div>
                <div className="bg-gray-900 rounded-xl p-6 shadow-lg text-center w-full border-2 border-green-400 font-mono">
                  <h3 className="text-lg font-semibold text-green-400">Baccalauréat Général</h3>
                  <span className="block text-sm text-gray-400 mb-2">2021 - 2024<br/>Lycée Frédéric Fays</span>
                  <p className="text-gray-300 text-sm">Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques).</p>
                </div>
                {/* Flèche vers la prochaine étape */}
                <div className="absolute top-6 right-[-40px] flex items-center">
                  <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="12" x2="56" y2="12" stroke="#10B981" strokeWidth="4"/>
                    <polygon points="56,6 64,12 56,18" fill="#10B981"/>
                  </svg>
                </div>
              </div>
              {/* BTS SIO */}
              <div className="relative flex flex-col items-center w-64 min-w-[16rem]">
                <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-blue-900">
                  <span className="font-mono font-bold text-lg text-white">2</span>
                </div>
                <div className="bg-gray-900 rounded-xl p-6 shadow-lg text-center w-full border-2 border-blue-400 font-mono">
                  <h3 className="text-lg font-semibold text-blue-400">BTS SIO Option SLAM</h3>
                  <span className="block text-sm text-gray-400 mb-2">2024 - 2026<br/>Lycée Les Chassagnes</span>
                  <p className="text-gray-300 text-sm">Développement d'applications web, gestion de bases de données, cybersécurité et réseaux.</p>
                </div>
                {/* Flèche vers la prochaine étape */}
                <div className="absolute top-6 right-[-40px] flex items-center">
                  <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="12" x2="56" y2="12" stroke="#3B82F6" strokeWidth="4"/>
                    <polygon points="56,6 64,12 56,18" fill="#3B82F6"/>
                  </svg>
                </div>
              </div>
              {/* Stage */}
              <div className="relative flex flex-col items-center w-64 min-w-[16rem]">
                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-yellow-900">
                  <span className="font-mono font-bold text-lg text-white">3</span>
                </div>
                <div className="bg-gray-900 rounded-xl p-6 shadow-lg text-center w-full border-2 border-yellow-400 font-mono">
                  <h3 className="text-lg font-semibold text-yellow-400">Stage Développeur Web</h3>
                  <span className="block text-sm text-gray-400 mb-2">2025<br/>Les Chassagnes</span>
                  <p className="text-gray-300 text-sm">Développement d'une application de gestion de stages en Laravel.</p>
                </div>
                {/* Pas de flèche sur le dernier */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section projets */}
      <section id="projets" className="py-20 bg-transparent fade-in">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-blue-400 mb-4 font-mono">Mes Projets</h2>
            <p className="text-xl text-gray-300 font-mono">Découvrez mes réalisations en développement web</p>
          </div>

          {/* Filtres des projets */}
          <div className="flex justify-center space-x-4 mb-12">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full font-mono ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Tous
            </button>
            <button 
              onClick={() => setActiveFilter('web')}
              className={`px-6 py-2 rounded-full font-mono ${
                activeFilter === 'web' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Web
            </button>
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-400 font-mono">
                <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
                  {/* Emoji gaming */}
                  <span className="text-5xl text-blue-400">🕹️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-2">
                    <span className="bg-blue-900 text-blue-300 text-sm px-3 py-1 rounded-full font-mono">React</span>
                    <span className="bg-green-900 text-green-300 text-sm px-3 py-1 rounded-full font-mono">Laravel</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section contact */}
      <section id="contact" className="py-20 bg-transparent fade-in">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-blue-400 mb-4 font-mono">Contactez-moi</h2>
            <p className="text-xl text-gray-300 font-mono">Disponible pour un stage en développement web</p>
          </div>

          {/* Formulaire de contact */}
          <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl p-8 border-2 border-blue-400 font-mono">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Nom</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Sujet</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Objet de votre message"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              {/* Bouton d'envoi du formulaire */}
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
              >
                <span role="img" aria-label="envoyer">🚀</span> Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer du site */}
      <footer className="bg-gray-900 text-white py-12 border-t-4 border-blue-700">
        <div className="container mx-auto px-6">
          <div className="text-center">
            {/* Titre et emoji */}
            <div className="text-2xl font-extrabold text-blue-400 mb-4 font-mono flex items-center justify-center">
              <span className="mr-2">🎮</span> MonPortfolio
            </div>
            <p className="text-gray-400 mb-8 font-mono">Développeur Fullstack BTS SIO SLAM</p>
            {/* Icônes réseaux sociaux */}
            <div className="flex justify-center space-x-6 mb-8">
              <div className="flex space-x-4 ml-6">
                <a href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-125">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="https://github.com/rf69100" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-125">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 filter invert" />
                </a>
              </div>
            </div>
            <p className="text-gray-400 font-mono">© 2025 MonPortfolio. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;