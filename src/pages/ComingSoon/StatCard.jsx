import PropTypes from 'prop-types';
import { comingSoonStatColors } from '../../data/styleMaps';

export const StatCard = ({ stat }) => {
  const style = comingSoonStatColors[stat.color] || comingSoonStatColors.blue;
  const valueColor = stat.color === 'red' ? style.text : 'text-white';

  return (
    <div
      className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-4 border-2 border-gray-700/50 ${style.border} transition-all duration-300 hover:scale-105`}
    >
      <div className="text-gray-400 font-mono text-xs uppercase mb-2">{stat.label}</div>
      <div className={`font-mono font-bold text-2xl ${valueColor}`}>{stat.value}</div>
    </div>
  );
};

StatCard.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['purple', 'green', 'blue', 'red']).isRequired,
  }).isRequired,
};
