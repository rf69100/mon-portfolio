import { comingSoon } from '../../data/comingSoon';
import { personalInfo } from '../../data/personal';
import { SocialLink } from '../../components/common/SocialLink';
import { StatCard } from './StatCard';
import { Terminal } from './Terminal';

const ComingSoon = () => (
  <div className="min-h-screen bg-slate-900 text-white flex flex-col">
    <header className="bg-gray-900/95 backdrop-blur-md shadow-2xl border-b-2 border-blue-500/50 py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="group flex items-center">
            <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-mono tracking-widest">
              <span className="hidden sm:inline group-hover:tracking-wider transition-all duration-300">
                {comingSoon.header.title}
              </span>
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

    <main className="flex-1 flex items-center justify-center p-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1
          className={`text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${comingSoon.hero.gradient} mb-4 font-mono tracking-tight`}
        >
          {comingSoon.hero.title}
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-400 mb-10 font-mono uppercase tracking-wider">
          {comingSoon.hero.subtitle}
        </h2>

        <Terminal terminal={comingSoon.terminal} statusMessages={comingSoon.statusMessages} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
          {comingSoon.stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

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

        <div className="flex justify-center space-x-4">
          <SocialLink platform="linkedin" href={personalInfo.linkedin} iconSize="w-6 h-6" />
          <SocialLink platform="github" href={personalInfo.github} iconSize="w-6 h-6" />
        </div>
      </div>
    </main>

    <footer className="bg-gray-900 text-white py-6 border-t-2 border-blue-500/30">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 font-mono text-sm">
          {new Date().getFullYear()} {personalInfo.name} - {comingSoon.footer.text}
        </p>
      </div>
    </footer>
  </div>
);

export default ComingSoon;
