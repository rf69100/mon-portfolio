import {
  skills,
  skillsCardStyles,
  skillsTitleColors,
  SKILL_COLOR_BY_TITLE,
} from '../../data/skills';
import { sectionsHeaders } from '../../data/sectionsHeaders';
import { SectionHeader } from '../common/SectionHeader';
import { TechIcon } from '../common/TechIcon';

export const Skills = () => (
  <section
    id="skills"
    className="py-16 md:py-20 bg-transparent opacity-0 animate-slide-in-left animation-delay-200"
  >
    <SectionHeader
      title={sectionsHeaders.skills.title}
      subtitle={sectionsHeaders.skills.subtitle}
      gradient={sectionsHeaders.skills.gradient}
      size="sm"
    />

    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => {
          const colorKey = SKILL_COLOR_BY_TITLE[skill.title] ?? 'yellow';
          return (
            <div
              key={skill.title}
              className={`${skillsCardStyles[colorKey]} rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-300 hover:scale-105 min-h-[280px] md:min-h-[320px] flex flex-col`}
            >
              <h3
                className={`text-lg md:text-xl font-bold ${skillsTitleColors[colorKey]} mb-4 md:mb-6 font-mono uppercase tracking-wide text-center`}
              >
                {skill.title}
              </h3>

              <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1">
                {skill.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3"
                  >
                    <TechIcon tech={tech} />
                    <span className="text-white text-sm md:text-base font-mono font-bold flex-1 truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
