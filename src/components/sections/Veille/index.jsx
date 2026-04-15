import { useCallback, useMemo, useState } from 'react';
import { veilleData } from '../../../data/veille';
import { sectionsHeaders } from '../../../data/sectionsHeaders';
import { SectionHeader } from '../../common/SectionHeader';
import { VeilleItem } from './VeilleItem';
import { VeilleViewer } from './VeilleViewer';

export const Veille = () => {
  const [activeId, setActiveId] = useState(null);

  const activeVeille = useMemo(
    () => veilleData.find((v) => v.id === activeId) ?? null,
    [activeId]
  );

  const toggleVeille = useCallback((id) => {
    setActiveId((current) => (current === id ? null : id));
  }, []);

  return (
    <section
      id="veille"
      className="py-20 bg-transparent opacity-0 animate-slide-in-right animation-delay-300"
    >
      <SectionHeader
        title={sectionsHeaders.veille.title}
        subtitle={sectionsHeaders.veille.subtitle}
        gradient={sectionsHeaders.veille.gradient}
      />

      <div className="container mx-auto px-6 max-w-4xl space-y-6">
        {veilleData.map((item) => (
          <VeilleItem
            key={item.id}
            item={item}
            isActive={item.id === activeId}
            onToggle={toggleVeille}
          />
        ))}
      </div>

      {activeVeille && <VeilleViewer veille={activeVeille} />}
    </section>
  );
};
