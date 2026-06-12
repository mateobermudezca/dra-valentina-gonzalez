"use client";

import { useEffect, useRef } from "react";

type Options = {
  threshold?: number;
  margin?: string;
  variant?: "up" | "left" | "right" | "fade";
  delay?: number;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  margin = "-60px",
  variant = "up",
  delay = 0,
}: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const base = variant === "up" ? "reveal" : `reveal-${variant}`;
    el.classList.add(base);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("visible"), delay);
          } else {
            el.classList.add("visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, margin, variant, delay]);

  return ref;
}
