import PropTypes from 'prop-types';

export const VeilleItem = ({ item, isActive, onToggle }) => {
  const isClickable = Boolean(item.pdfUrl);

  const handleKeyDown = (e) => {
    if (!isClickable) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(item.id);
    }
  };

  return (
    <div
      onClick={() => isClickable && onToggle(item.id)}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-expanded={isClickable ? isActive : undefined}
      onKeyDown={handleKeyDown}
      className={`bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-2 rounded-2xl p-6 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:outline-none ${
        isClickable ? 'cursor-pointer hover:scale-[1.02]' : ''
      } ${isActive ? 'border-green-400 shadow-lg shadow-green-500/30' : 'border-green-500/50'}`}
    >
      <div className="flex-1">
        <div className="text-emerald-400 font-mono text-sm mb-2">
          {item.date} • {item.source}
        </div>
        <h3 className="text-white font-mono text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-300 font-mono text-sm md:text-base">{item.description}</p>
      </div>
      {isClickable && (
        <svg
          className={`w-6 h-6 text-green-400 shrink-0 transition-transform duration-300 ${
            isActive ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </div>
  );
};

VeilleItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pdfUrl: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
