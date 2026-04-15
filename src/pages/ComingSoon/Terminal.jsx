import PropTypes from 'prop-types';
import { useAnimatedDots } from '../../hooks/useAnimatedDots';
import { useStatusMessageCycler } from '../../hooks/useStatusMessageCycler';

export const Terminal = ({ terminal, statusMessages }) => {
  const dots = useAnimatedDots();
  const { message, isTransitioning } = useStatusMessageCycler(statusMessages);

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 border-2 border-purple-500/50 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-gray-500 font-mono text-sm">{terminal.filename}</span>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-purple-300 font-mono font-bold text-sm uppercase">
            $ {terminal.command}
            {dots}
          </span>
          <span className="text-purple-300 font-mono font-bold text-sm">
            {terminal.progress}%
          </span>
        </div>
        <div className="bg-gray-800 rounded-full h-3 overflow-hidden border border-purple-500/30">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"
            style={{ width: `${terminal.progress}%` }}
          />
        </div>
        <p className="text-gray-600 font-mono text-xs mt-2 italic">{terminal.note}</p>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700" aria-live="polite">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-400 font-mono text-sm">ryan@portfolio:~$</span>
          <span className="text-gray-400 font-mono text-sm">status</span>
        </div>
        <p
          className={`text-gray-300 font-mono text-base md:text-lg transition-all duration-150 ${
            isTransitioning ? 'opacity-0 -translate-y-2' : 'opacity-100'
          }`}
        >
          &gt; {message}
        </p>
      </div>
    </div>
  );
};

Terminal.propTypes = {
  terminal: PropTypes.shape({
    filename: PropTypes.string.isRequired,
    command: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired,
  }).isRequired,
  statusMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
