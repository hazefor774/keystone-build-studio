import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Static-first count-up: server/no-JS render shows the FINAL value
 * (never 0) so crawlers and link previews see real numbers. On the
 * client, the first time the element enters the viewport, the number
 * animates 0 → target. Respects prefers-reduced-motion.
 */
export function CountUp({
  value,
  duration = 1.2,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || !inView || reduceMotion) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    if (target === 0) return;
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const controls = animate(0, target, {
      duration,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v: number) => {
        const n = decimals ? v.toFixed(decimals) : Math.round(v).toString();
        setDisplay(`${prefix}${n}${suffix}`);
      },
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}