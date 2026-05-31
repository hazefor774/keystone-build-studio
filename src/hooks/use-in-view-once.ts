import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal: returns `true` the first time the element
 * intersects the viewport, and stays true afterward. Honors
 * `prefers-reduced-motion` by returning `true` immediately.
 */
export function useInViewOnce<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  return { ref, visible } as const;
}