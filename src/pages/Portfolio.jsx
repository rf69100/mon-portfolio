import { Suspense, lazy } from 'react';
import { experienceData } from '../data/experience';
import { formationsData } from '../data/formations';
import { realisationsData } from '../data/realisations';
import { sectionsHeaders } from '../data/sectionsHeaders';
import { useInitialLoad } from '../hooks/useInitialLoad';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { Loader } from '../components/common/Loader';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Skills } from '../components/sections/Skills';
import { Competences } from '../components/sections/Competences';
import { Veille } from '../components/sections/Veille';
import { CardSection } from '../components/sections/CardSection';

const Projects = lazy(() =>
  import('../components/sections/Projects').then((m) => ({ default: m.Projects }))
);
const Contact = lazy(() =>
  import('../components/sections/Contact').then((m) => ({ default: m.Contact }))
);

const SectionFallback = () => (
  <div className="py-20 text-center text-gray-400 font-mono" role="status" aria-live="polite">
    Chargement…
  </div>
);

const Portfolio = () => {
  const loading = useInitialLoad();
  useScrollReveal({ active: !loading });

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <Skills />
      </ErrorBoundary>

      <ErrorBoundary>
        <Competences />
      </ErrorBoundary>

      <ErrorBoundary>
        <Veille />
      </ErrorBoundary>

      <ErrorBoundary>
        <CardSection
          id="formation"
          headerInfo={sectionsHeaders.formation}
          data={formationsData}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <CardSection
          id="realisations"
          headerInfo={sectionsHeaders.realisations}
          data={realisationsData}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <CardSection
          id="experience"
          headerInfo={sectionsHeaders.experience}
          data={experienceData}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default Portfolio;
