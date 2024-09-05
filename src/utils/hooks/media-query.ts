import { useCallback, useSyncExternalStore } from "react";

const getServerSnapshot = () => true;

export const useMatchMedia = (query: string): boolean => {
  const subscribe = useCallback(
    (listener: (matches: boolean) => void) => {
      const mediaQuery = window.matchMedia(query);

      listener(mediaQuery.matches);

      const handler = (event: MediaQueryListEvent) => listener(event.matches);

      mediaQuery.addEventListener("change", handler);

      return () => mediaQuery.removeEventListener("change", handler);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
