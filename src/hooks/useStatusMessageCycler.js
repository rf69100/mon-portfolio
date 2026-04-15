import { useEffect, useState } from 'react';

const shuffle = (arr) => {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

export const useStatusMessageCycler = (messages, intervalMs = 4000, fadeMs = 150) => {
  const [message, setMessage] = useState(messages[0] || '');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!messages.length) return undefined;

    let cycle = shuffle(messages);
    let index = 0;
    let fadeTimeout;

    setMessage(cycle[index]);

    const interval = setInterval(() => {
      setIsTransitioning(true);
      fadeTimeout = setTimeout(() => {
        index += 1;
        if (index >= cycle.length) {
          const last = cycle[cycle.length - 1];
          do {
            cycle = shuffle(messages);
          } while (messages.length > 1 && cycle[0] === last);
          index = 0;
        }
        setMessage(cycle[index]);
        setIsTransitioning(false);
      }, fadeMs);
    }, intervalMs);

    return () => {
      clearInterval(interval);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, [messages, intervalMs, fadeMs]);

  return { message, isTransitioning };
};
