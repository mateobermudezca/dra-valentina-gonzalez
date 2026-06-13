"use client";

import { useState, useEffect } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function useCountUp(
  end: number | string,
  duration = 2000,
  shouldStart = false
): string {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof end === "string") return;
    if (!shouldStart) return;

    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = Math.round(easedProgress * end);
      setValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, shouldStart]);

  if (typeof end === "string") return end;

  return value.toString();
}
