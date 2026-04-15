import PropTypes from 'prop-types';

export const SectionHeader = ({ title, subtitle, gradient, size = 'lg' }) => {
  const titleClass =
    size === 'sm'
      ? 'text-3xl md:text-5xl'
      : 'text-4xl md:text-5xl';

  return (
    <div className="container mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
      <h2
        className={`${titleClass} font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${gradient} mb-4 font-mono tracking-tight`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400 font-mono uppercase tracking-widest">
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  gradient: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'lg']),
};
