"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icon";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <button
      className={`totop${show ? " show" : ""}`}
      id="toTop"
      aria-label="Back to top"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      <Icon name="arrow" />
    </button>
  );
}
