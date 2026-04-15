import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { navigation } from '../../data/navigation';
import { personalInfo } from '../../data/personal';
import { useScrolled } from '../../hooks/useScrolled';
import { SocialLink } from '../common/SocialLink';

const NavLinks = ({ onNavigate = undefined, className, itemClassName }) => (
  <nav className={className}>
    {navigation.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={onNavigate}
        className={itemClassName}
      >
        {item.label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
      </a>
    ))}
  </nav>
);

NavLinks.propTypes = {
  onNavigate: PropTypes.func,
  className: PropTypes.string.isRequired,
  itemClassName: PropTypes.string.isRequired,
};

const HeaderBase = () => {
  const scrolled = useScrolled();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((v) => !v), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b-2 border-blue-500/50'
          : 'bg-gray-900/80 backdrop-blur-sm border-b-4 border-blue-700'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="group flex items-center">
            <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-mono tracking-widest flex items-center cursor-default">
              <span
                className="mr-2 transform group-hover:rotate-12 transition-transform duration-300"
                aria-hidden="true"
              >
                🎮
              </span>
              <span className="hidden sm:inline group-hover:tracking-wider transition-all duration-300">
                MonPortfolio
              </span>
              <span className="sm:hidden">MP</span>
            </div>
          </div>

          <NavLinks
            className="hidden md:flex items-center space-x-6 lg:space-x-8 font-mono absolute left-1/2 transform -translate-x-1/2"
            itemClassName="relative text-gray-300 hover:text-blue-400 transition-all duration-300 font-semibold group py-1"
          />

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span
                className={`block w-5 h-0.5 bg-blue-400 transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-blue-400 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-blue-400 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-3">
            <SocialLink platform="linkedin" href={personalInfo.linkedin} />
            <SocialLink platform="github" href={personalInfo.github} />
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-blue-500/20 bg-gray-900/90 backdrop-blur-md rounded-lg animate-fade-in-down">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all font-mono font-semibold text-sm"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex items-center justify-center space-x-4 pt-4 mt-4 border-t border-blue-500/20">
                <SocialLink platform="linkedin" href={personalInfo.linkedin} />
                <SocialLink platform="github" href={personalInfo.github} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export const Header = memo(HeaderBase);
