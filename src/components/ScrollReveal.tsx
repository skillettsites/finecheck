"use client";

import { useEffect, useRef, type ReactNode, type ElementType, type CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Stagger child index — adds CSS delay = step * index. */
  index?: number;
  /** Step between staggered children, in ms. Defaults to 70. */
  step?: number;
  /** Tag to render. Defaults to div. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Disable observer + render immediately visible (for above-the-fold use). */
  immediate?: boolean;
}

// Lightweight reveal-on-scroll wrapper. Adds .is-visible when the element
// first crosses ~12% of the viewport. Respects prefers-reduced-motion via
// CSS (see globals.css). One observer is created per element which is fine
// for the modest number of reveals on a marketing page.
export default function ScrollReveal({
  children,
  index = 0,
  step = 70,
  as: Tag = "div",
  className = "",
  style,
  immediate = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const combinedStyle: CSSProperties = {
    ...style,
    ["--aaf-i" as string]: index,
    ["--aaf-stagger-step" as string]: `${step}ms`,
  };

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`aaf-reveal ${immediate ? "is-visible" : ""} ${className}`}
      style={combinedStyle}
    >
      {children}
    </Tag>
  );
}
