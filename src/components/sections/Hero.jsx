import { hero } from '../../data/hero';
import { personalInfo } from '../../data/personal';

export const Hero = () => (
  <section
    id="accueil"
    className="pt-32 pb-20 bg-transparent opacity-0 animate-slide-in-bottom"
  >
    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 font-mono tracking-widest">
        {personalInfo.name}
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono uppercase tracking-wider">
        {personalInfo.title}
      </h2>

      <div className="bg-gray-900/50 border-2 border-blue-500 rounded-xl p-6 mb-8 backdrop-blur-sm">
        <p className="text-lg md:text-xl text-gray-300 mb-4 font-mono leading-relaxed">
          {hero.intro}
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-4 font-mono">
          <span className="text-blue-400 font-bold">{hero.techs}</span>
        </p>

        <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-mono font-bold text-sm mb-2">
          {hero.formation}
        </div>

        <p className="text-lg md:text-xl text-yellow-300 font-mono font-bold mt-4">
          {hero.searchStatus}
        </p>
        <p className="text-base md:text-lg text-gray-300 font-mono mt-2">
          {hero.searchDetails}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <a
          href={hero.cta.primary.href}
          download={hero.cta.primary.download}
          className="w-full sm:w-64 text-center bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-400 text-white py-4 rounded-lg hover:scale-110 transition-all font-mono font-bold shadow-lg shadow-blue-500/50"
        >
          {hero.cta.primary.text}
        </a>
        <a
          href={hero.cta.secondary.href}
          className="w-full sm:w-64 text-center bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-400 text-white py-4 rounded-lg hover:scale-110 transition-all font-mono font-bold shadow-lg shadow-blue-500/50"
        >
          {hero.cta.secondary.text}
        </a>
      </div>
    </div>
  </section>
);
