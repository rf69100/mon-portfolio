import { useEffect, useState } from 'react';
import { SCROLL_THRESHOLD } from '../config/env';

export const useScrolled = (threshold = SCROLL_THRESHOLD) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};
