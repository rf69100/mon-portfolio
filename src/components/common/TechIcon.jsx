import { memo, useState } from 'react';
import PropTypes from 'prop-types';

const TechIconBase = ({ tech }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) return <span className="text-2xl" aria-hidden="true">💻</span>;

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
      alt={tech.name}
      className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 hover:scale-125"
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
};

TechIconBase.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export const TechIcon = memo(TechIconBase);
