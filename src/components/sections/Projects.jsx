import { memo, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { projects, projectsConfig } from '../../data/projects';
import { sectionsHeaders } from '../../data/sectionsHeaders';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';

const FilterButtons = memo(({ activeFilter, onChange }) => (
  <div className="flex justify-center space-x-4 mb-12" role="tablist" aria-label="Filtres projets">
    {projectsConfig.filters.map((filter) => (
      <button
        key={filter}
        type="button"
        role="tab"
        aria-selected={activeFilter === filter}
        onClick={() => onChange(filter)}
        className={`px-6 py-3 rounded-full font-mono font-bold uppercase transition-all ${
          activeFilter === filter
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110 shadow-lg'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:scale-105'
        }`}
      >
        {projectsConfig.filterLabels[filter]}
      </button>
    ))}
  </div>
));
FilterButtons.displayName = 'FilterButtons';
FilterButtons.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section
      id="projets"
      className="py-20 bg-transparent opacity-0 animate-slide-in-left animation-delay-400"
    >
      <SectionHeader
        title={sectionsHeaders.projets.title}
        subtitle={sectionsHeaders.projets.subtitle}
        gradient={sectionsHeaders.projets.gradient}
      />

      <FilterButtons activeFilter={activeFilter} onChange={setActiveFilter} />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <Card key={project.id} item={project} showReport={false} actionLabel="Live" />
          ))}
        </div>
      </div>
    </section>
  );
};
