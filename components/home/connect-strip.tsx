"use client";

import { useState } from "react";
import { connects } from "@/content/home";

export function ConnectStrip() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="j-strip" aria-label="What we connect">
      <div className="wrap j-strip-in">
        <p className="j-strip-l">We connect</p>
        <div
          className={`j-marq${paused ? " is-paused" : ""}`}
          role="group"
          aria-label="Research, policy, human-centered design, entrepreneurship and foresight"
        >
          <div className="j-track">
            <div className="j-grp">
              {connects.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            <div className="j-grp" aria-hidden="true">
              {connects.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
        <button
          className="j-pause"
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </section>
  );
}
