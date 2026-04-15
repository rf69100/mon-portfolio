import PropTypes from 'prop-types';
import { SocialIcon } from './SocialIcon';

const BG_BY_PLATFORM = {
  linkedin:
    'bg-blue-600 p-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110',
  github:
    'bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/50 hover:scale-110 border border-gray-700',
};

export const SocialLink = ({ platform, href, iconSize = 'w-5 h-5' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={BG_BY_PLATFORM[platform]}
    aria-label={`Ouvrir ${platform} dans un nouvel onglet`}
  >
    <SocialIcon platform={platform} size={iconSize} />
  </a>
);

SocialLink.propTypes = {
  platform: PropTypes.oneOf(['linkedin', 'github']).isRequired,
  href: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
};
