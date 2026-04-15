import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { buildProjectUrl, isInternalRoute } from '../../utils/buildProjectUrl';

const NewBadge = () => (
  <div className="absolute -top-3 -right-3 bg-yellow-500 text-gray-900 font-mono font-bold text-xs px-3 py-1 rounded-full border-2 border-yellow-300 shadow-lg z-10">
    ⭐ NEW
  </div>
);

const DateBadge = ({ date }) => (
  <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-gray-300 font-mono text-xs px-3 py-1 rounded-full border border-gray-600 shadow z-10">
    {date}
  </div>
);
DateBadge.propTypes = { date: PropTypes.string.isRequired };

const CardBase = ({ item, showReport = true, actionLabel = 'Voir' }) => {
  const itemLink = buildProjectUrl(item.link);
  const isClickable = Boolean(itemLink);
  const comingSoon = isInternalRoute(item.link);

  const handleClick = useCallback(() => {
    if (!itemLink) return;
    const win = window.open(itemLink, '_blank', 'noopener,noreferrer');
    if (win) win.opener = null;
  }, [itemLink]);

  const handleKey = useCallback(
    (e) => {
      if (!isClickable) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    },
    [isClickable, handleClick]
  );

  return (
    <div className="relative group">
      <div
        className={`bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-400 rounded-2xl overflow-hidden shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col ${
          isClickable ? 'cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none' : ''
        }`}
        onClick={isClickable ? handleClick : undefined}
        onKeyDown={handleKey}
        role={isClickable ? 'link' : undefined}
        tabIndex={isClickable ? 0 : undefined}
        aria-label={isClickable ? `Ouvrir ${item.title}` : undefined}
      >
        {item.new && <NewBadge />}
        {item.date && <DateBadge date={item.date} />}

        <div className="h-48 overflow-hidden bg-gray-800">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl" aria-hidden="true">
              👨‍💻
            </div>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          {item.type && (
            <span className="self-start mb-2 text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400 font-mono font-bold uppercase tracking-wider">
              {item.type}
            </span>
          )}
          {item.school && (
            <p className="text-blue-400 text-sm font-mono mb-1">{item.school}</p>
          )}
          <h3 className="text-xl font-bold text-purple-300 mb-2 font-mono uppercase tracking-wide">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 font-mono flex-1">{item.description}</p>

          {item.techs && item.techs.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.techs.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400 font-mono font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-auto">
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-all font-mono font-bold text-sm border border-gray-600"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
            {itemLink && (
              <a
                href={itemLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg transition-all font-mono font-bold text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                {comingSoon ? 'Bientot' : actionLabel}
              </a>
            )}
            {showReport && item.reportUrl && (
              <a
                href={item.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg transition-all font-mono font-bold text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                Rapport de stage
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

CardBase.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    school: PropTypes.string,
    type: PropTypes.string,
    techs: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    link: PropTypes.string,
    reportUrl: PropTypes.string,
    new: PropTypes.bool,
  }).isRequired,
  showReport: PropTypes.bool,
  actionLabel: PropTypes.string,
};

export const Card = memo(CardBase);
