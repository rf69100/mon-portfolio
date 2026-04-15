import { useEffect, useState } from 'react';

export const useAnimatedDots = (intervalMs = 500, maxDots = 3) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= maxDots ? '' : `${prev}.`));
    }, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs, maxDots]);

  return dots;
};
