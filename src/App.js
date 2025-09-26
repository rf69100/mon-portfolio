import { useState, useEffect } from 'react';
import './index.css';

// Loader
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-400 border-solid"></div>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold text-blue-400 font-mono">XP</span>
      </div>
      <span className="mt-6 text-white font-semibold text-lg font-mono">Chargement...</span>
    </div>
  </div>
);

// Header
const Header = () => (
  <header className="fixed top-0 w-full bg-gray-900 shadow-sm z-50 border-b-4 border-blue-700">
    <div className="container mx-auto px-4 md:px-6 py-4 flex flex-wrap justify-between items-center">
      <div className="text-2xl font-extrabold text-blue-400 tracking-widest font-mono flex items-center">
        <span className="mr-2">🎮</span> MonPortfolio
      </div>
      <nav className="hidden md:flex space-x-8 font-mono">
        <a href="#accueil" className="text-gray-300 hover:text-blue-400 transition-all">Accueil</a>
        <a href="#projets" className="text-gray-300 hover:text-blue-400 transition-all">Projets</a>
        <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-all">Expérience</a>
        <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-all">Contact</a>
      </nav>
      <div className="flex space-x-4 ml-6">
        <a href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-125">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://github.com/rf69100" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-125">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 filter invert" />
        </a>
      </div>
    </div>
  </header>
);

// Accueil
const Accueil = () => (
  <section id="accueil" className="pt-32 pb-20 bg-transparent fade-in">
    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl mx-auto">
      <div className="mx-auto mb-6 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-400 shadow-lg bg-gray-900 flex items-center justify-center">
        <img src="" alt="Photo de profil" className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover" />
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold text-blue-400 mb-2 font-mono tracking-widest">Ryan Fonseca</h1>
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6 font-mono">
        Développeur Fullstack <span className="text-blue-400">| BTS SIO SLAM</span>
      </h2>
      <p className="text-base md:text-xl text-gray-300 mb-4 font-mono">
        Passionné par le développement web, spécialisé en React et Laravel.<br />
        <span className="text-blue-400">Fan de jeux vidéo & code créatif.</span>
      </p>
      <p className="text-base md:text-xl text-gray-300 mb-8 font-mono">
        Actuellement en quête d'une nouvelle "quête" : un stage pour ma deuxième année de BTS SIO.
      </p>
      <a href="/CV_Ryan_Fonseca.pdf" download className="border-2 border-blue-400 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors font-mono font-bold shadow-lg hover:scale-105">
        ⬇️ Télécharger CV
      </a>
    </div>
  </section>
);

// Compétences
const Competences = () => {
  const skills = [
    {
      title: "Frontend",
      color: "blue",
      techs: ["React", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Backend",
      color: "green",
      techs: ["Laravel", "PHP", "Python", "Node.js"]
    },
    {
      title: "Base de données",
      color: "yellow",
      techs: ["MySQL", "MariaDB"]
    },
    {
      title: "Outils & Systèmes",
      color: "red",
      techs: ["Git", "Linux", "Windows"]
    }
  ];

  return (
    <section id="competences" className="py-16 md:py-20 bg-transparent fade-in">
      <div className="container mx-auto px-4 md:px-6 text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-4 font-mono">Compétences</h2>
        <p className="text-base md:text-xl text-gray-300 font-mono">Mes principaux outils et technologies</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.title} className={`bg-gradient-to-br from-${skill.color}-900 via-gray-900 to-${skill.color}-800 rounded-xl p-4 md:p-6 shadow-lg flex flex-col items-center transition-all duration-300 relative hover:z-10 hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-${skill.color}-400`}>
            <h3 className={`text-lg md:text-xl font-bold text-${skill.color}-400 mb-4 font-mono`}>{skill.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {skill.techs.map((tech) => (
                <div key={tech} className="flex flex-col items-center">
                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`} alt={tech} className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <span className="text-white text-xs md:text-sm font-mono">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Parcours
const Parcours = () => {
  const steps = [
    {
      number: 1,
      title: "Baccalauréat Général",
      color: "green",
      date: "2021 - 2024",
      school: "Lycée Frédéric Fays",
      description: "Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques)."
    },
    {
      number: 2,
      title: "BTS SIO Option SLAM",
      color: "blue",
      date: "2024 - 2026",
      school: "Lycée Les Chassagnes",
      description: "Développement d'applications web, gestion de bases de données, cybersécurité et réseaux."
    },
    {
      number: 3,
      title: "Stage Développeur Web",
      color: "yellow",
      date: "2025",
      school: "Les Chassagnes",
      description: "Développement d'une application de gestion de stages en Laravel."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-transparent fade-in">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-400 mb-4 font-mono">Mon Parcours</h2>
        <p className="text-xl text-gray-300 font-mono">Formation et expériences</p>
      </div>
      <div className="overflow-x-auto">
        <div className="flex items-center justify-start gap-12 max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col items-center w-64 min-w-[16rem]">
              <div className={`bg-${step.color}-400 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-${step.color}-900`}>
                <span className="font-mono font-bold text-lg text-white">{step.number}</span>
              </div>
              <div className={`bg-gray-900 rounded-xl p-6 shadow-lg text-center w-full border-2 border-${step.color}-400 font-mono`}>
                <h3 className={`text-lg font-semibold text-${step.color}-400`}>{step.title}</h3>
                <span className="block text-sm text-gray-400 mb-2">{step.date}<br/>{step.school}</span>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="absolute top-6 right-[-40px] flex items-center">
                  <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="12" x2="56" y2="12" stroke={`#${step.color === 'green' ? '10B981' : step.color === 'blue' ? '3B82F6' : 'FBBF24'}`} strokeWidth="4"/>
                    <polygon points="56,6 64,12 56,18" fill={`#${step.color === 'green' ? '10B981' : step.color === 'blue' ? '3B82F6' : 'FBBF24'}`} />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projets
const Projets = ({ projects, activeFilter, setActiveFilter }) => {
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);
  return (
    <section id="projets" className="py-20 bg-transparent fade-in">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-400 mb-4 font-mono">Mes Projets</h2>
        <p className="text-xl text-gray-300 font-mono">Découvrez mes réalisations en développement web</p>
      </div>
      <div className="flex justify-center space-x-4 mb-12">
        {["all", "web"].map((filter) => (
          <button key={filter} onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-mono ${activeFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            {filter === 'all' ? "Tous" : "Web"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-400 font-mono">
            {/* Image : prend 3/4 de la carte */}
            <div className="h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>

            {/* Bloc texte : prend 1/4 de la carte */}
            <div className="p-3 bg-gray-900">
              <h3 className="text-md md:text-lg font-bold text-white mb-1 truncate">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-2 truncate">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.techs.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-white">{tech}</span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs bg-gray-800 hover:bg-gray-700 text-white px-2 py-1 rounded-md transition-colors">
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md transition-colors">
                    Voir en ligne
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact
const Contact = () => (
  <section id="contact" className="py-20 bg-transparent fade-in">
    <div className="container mx-auto px-6 max-w-2xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-400 mb-4 font-mono">Contactez-moi</h2>
        <p className="text-xl text-gray-300 font-mono">Disponible pour un stage en développement web</p>
      </div>
      <form className="space-y-6 bg-gray-900 rounded-xl p-8 border-2 border-blue-400 font-mono">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Nom" className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <input type="text" placeholder="Sujet" className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <textarea rows={5} placeholder="Message..." className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold">🚀 Envoyer le message</button>
      </form>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 border-t-4 border-blue-700">
    <div className="container mx-auto px-6 text-center">
      <div className="text-2xl font-extrabold text-blue-400 mb-4 font-mono flex items-center justify-center">
        <span className="mr-2">🎮</span> MonPortfolio
      </div>
      <p className="text-gray-400 mb-8 font-mono">Développeur Fullstack BTS SIO SLAM</p>
      <div className="flex justify-center space-x-6 mb-8">
        <a href="https://www.linkedin.com/in/ryan-fonseca-3a73b2302/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-125">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://github.com/rf69100" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-125">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 filter invert" />
        </a>
      </div>
      <p className="text-gray-400 font-mono">© 2025 MonPortfolio. Tous droits réservés.</p>
    </div>
  </footer>
);


// Composant principal
const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "NBA Dashboard",
      category: "web",
      description: "Dashboard interactif en React avec statistiques de joueurs NBA et classements des équipes.",
      github: "https://github.com/rf69100/nba-dashbord",
      link: "",
      techs: ["React"],
      image: "nba-dashboard.png"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white font-sans">
      <Header />
      <Accueil />
      <Competences />
      <Parcours />
      <Projets projects={projects} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
