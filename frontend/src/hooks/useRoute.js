import { useEffect, useRef, useState } from "react";

const readRoute = () => window.location.hash.replace("#/", "") || "home";

export function useRoute() {
  const [route, setRoute] = useState(readRoute);
  const [isNavigating, setIsNavigating] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    const update = () => {
      const nextRoute = readRoute();
      if (nextRoute === route) return;

      window.clearTimeout(timerRef.current);
      setIsNavigating(true);
      timerRef.current = window.setTimeout(() => {
        setRoute(nextRoute);
        setIsNavigating(false);
      }, 420);
    };

    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.clearTimeout(timerRef.current);
    };
  }, [route]);

  return { route, isNavigating };
}
