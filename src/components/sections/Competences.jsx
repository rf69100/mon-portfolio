import { sectionsHeaders } from '../../data/sectionsHeaders';
import { SectionHeader } from '../common/SectionHeader';

const TABLEAU_URL = '/Tableau-de-synthèse-Epreuve-E5-BTS-SIO-fonseca-ryan.pdf';

export const Competences = () => (
  <section
    id="competences"
    className="py-16 md:py-20 bg-transparent opacity-0 animate-slide-in-right animation-delay-200"
  >
    <SectionHeader
      title={sectionsHeaders.competences.title}
      subtitle={sectionsHeaders.competences.subtitle}
      gradient={sectionsHeaders.competences.gradient}
      size="sm"
    />

    <div className="container mx-auto px-4 md:px-6 text-center max-w-5xl">
      <div className="bg-gray-900/50 border-2 border-blue-500/30 rounded-xl p-8 backdrop-blur-sm hover:border-blue-400 transition-colors duration-300">
        <p className="text-gray-300 font-mono mb-6 text-lg">
          Retrouvez ici mon tableau des compétences complet (format officiel BTS SIO),
          faisant le lien entre mes différentes réalisations professionnelles (TP, AP, Stages)
          et les compétences du référentiel SLAM.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={TABLEAU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-mono font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-500/30 flex items-center gap-2"
          >
            Consulter le Tableau des Compétences
          </a>
        </div>
      </div>
    </div>
  </section>
);
