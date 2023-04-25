import { useEffect, useState } from 'react';

interface HookResult {
  isMatching: boolean;
}

const CHANGE_EVENT_NAME = 'change';

const doesMatchMedia = (query: string): boolean =>
  window.matchMedia(query).matches;

export const useMediaQuery = (width: string): HookResult => {
  const [isMatching, setIsMatching] = useState(doesMatchMedia(width));

  useEffect(() => {
    const handleChange = () => setIsMatching(doesMatchMedia(width));

    const matchMedia = window.matchMedia(width);

    handleChange();

    matchMedia.addEventListener(CHANGE_EVENT_NAME, handleChange);

    return () =>
      matchMedia.removeEventListener(CHANGE_EVENT_NAME, handleChange);
  }, [width]);

  return { isMatching };
};
