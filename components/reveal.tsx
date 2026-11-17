"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds `.in` to every `.reveal` element as it scrolls into view, and `.seen` to
 * the approach road steps. Without JS, or with reduced motion, everything shows at once.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const road = Array.from(document.querySelectorAll<HTMLElement>(".rstep"));
    if (reduce) {
      reveal.forEach((el) => el.classList.add("in"));
      road.forEach((el) => el.classList.add("seen"));
      return;
    }
    const watch = (els: HTMLElement[], cls: string, options: IntersectionObserverInit) => {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add(cls);
            io.unobserve(en.target);
          }
        });
      }, options);
      els.forEach((el) => io.observe(el));
      return io;
    };
    const a = watch(reveal, "in", { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
    const b = watch(road, "seen", { rootMargin: "0px 0px -35% 0px" });
    return () => {
      a.disconnect();
      b.disconnect();
    };
  }, [pathname]);

  return null;
}
