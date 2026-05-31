import type { ReactNode, HTMLAttributes } from "react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section";
  children: ReactNode;
};

/**
 * Wraps children in a scroll-triggered reveal. Hidden + translated until
 * the element scrolls into view (once), then animates in. Honors
 * prefers-reduced-motion via the useInViewOnce hook.
 */
export function Reveal({ as = "div", className = "", children, ...rest }: RevealProps) {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={`reveal-on-view ${visible ? "is-visible" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}