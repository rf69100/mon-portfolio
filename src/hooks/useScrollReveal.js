import { useEffect } from 'react';

export const useScrollReveal = ({ selector = 'section[id]', active = true } = {}) => {
  useEffect(() => {
    if (!active) return undefined;

    document.documentElement.style.scrollBehavior = 'smooth';

    const handleLoad = () => {
      if (window.location.hash && window.location.hash !== '#accueil') {
        const element = document.querySelector(window.location.hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.history.replaceState(null, null, ' ');
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll(selector).forEach((section) => observer.observe(section));
    window.addEventListener('load', handleLoad);

    return () => {
      document.documentElement.style.scrollBehavior = '';
      observer.disconnect();
      window.removeEventListener('load', handleLoad);
    };
  }, [selector, active]);
};
