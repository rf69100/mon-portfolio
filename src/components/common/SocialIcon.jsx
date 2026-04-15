import PropTypes from 'prop-types';
import { socialIcons } from '../../data/socialIcons';

export const SocialIcon = ({ platform, size = 'w-5 h-5' }) => {
  const icon = socialIcons[platform];
  if (!icon) return null;
  const colorClass = platform === 'linkedin' ? 'text-blue-400' : 'text-gray-300';

  return (
    <svg
      className={`${size} ${colorClass}`}
      fill="currentColor"
      viewBox={icon.viewBox}
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  );
};

SocialIcon.propTypes = {
  platform: PropTypes.oneOf(['linkedin', 'github']).isRequired,
  size: PropTypes.string,
};
