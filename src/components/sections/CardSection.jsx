import PropTypes from 'prop-types';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';

export const CardSection = ({ id, headerInfo, data }) => (
  <section
    id={id}
    className="py-20 bg-transparent opacity-0 animate-slide-in-left animation-delay-400"
  >
    <SectionHeader
      title={headerInfo.title}
      subtitle={headerInfo.subtitle}
      gradient={headerInfo.gradient}
    />

    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  </section>
);

CardSection.propTypes = {
  id: PropTypes.string.isRequired,
  headerInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    gradient: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
