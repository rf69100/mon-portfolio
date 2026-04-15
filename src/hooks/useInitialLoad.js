import { useEffect, useState } from 'react';
import { LOADER_DELAY_MS } from '../config/env';

export const useInitialLoad = (delay = LOADER_DELAY_MS) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return loading;
};
