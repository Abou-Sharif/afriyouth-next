"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icon";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export type TabItem = {
  id: string;
  /** Content of the tab button. */
  tab: React.ReactNode;
  panel: React.ReactNode;
};

type TabsProps = {
  /** Root element id; tab and panel ids derive from it. */
  id: string;
  /** Accessible name of the tab list. */
  label: string;
  items: TabItem[];
  /** Milliseconds each tab stays up before the next one opens. Omit for no autoplay. */
  autoplayMs?: number;
  /** Word for the counter under the panel: "Stage" gives "Stage 2 of 5". */
  countNoun?: string;
  style?: React.CSSProperties;
};

const TICK_MS = 100;
const SWIPE_MIN = 50;
const NO_SWIPE = '[role="tablist"],.tl,button,input,select,textarea';

/**
 * Tabs with arrow, Home and End keys, and swipe on touch screens. With `autoplayMs`
 * they also advance on their own, except while the pointer (mouse only) or keyboard
 * focus is inside, while off screen, when paused, or with reduced motion.
 */
export function Tabs({ id, label, items, autoplayMs, countNoun, style }: TabsProps) {
  const total = items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const playing = Boolean(autoplayMs) && !paused && !reduce;

  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const elapsed = useRef(0);
  const seen = useRef(false);
  const held = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const resetProgress = () => {
    elapsed.current = 0;
    rootRef.current?.style.setProperty("--p", "0");
  };

  const show = (i: number, focus = false) => {
    resetProgress();
    setIndex(i);
    if (focus) tabRefs.current[i]?.focus();
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !autoplayMs) return;
    const io = new IntersectionObserver(
      (entries) => {
        seen.current = entries[0].isIntersecting;
      },
      { threshold: 0.4 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, [autoplayMs]);

  useEffect(() => {
    if (!playing || !autoplayMs) return;
    const timer = setInterval(() => {
      if (!seen.current || held.current) return;
      elapsed.current += TICK_MS;
      rootRef.current?.style.setProperty("--p", String(Math.min(elapsed.current / autoplayMs, 1)));
      if (elapsed.current >= autoplayMs) {
        elapsed.current = 0;
        setIndex((current) => (current + 1) % total);
      }
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [playing, autoplayMs, total]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!(e.target as HTMLElement).closest('[role="tab"]')) return;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (index + 1) % total;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (index - 1 + total) % total;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = total - 1;
    if (next === null) return;
    e.preventDefault();
    show(next, true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    const blocked = (e.target as HTMLElement).closest(NO_SWIPE);
    touchStart.current = e.touches.length === 1 && !blocked ? { x: t.clientX, y: t.clientY } : null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) < SWIPE_MIN || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    show(dx < 0 ? Math.min(index + 1, total - 1) : Math.max(index - 1, 0));
  };

  return (
    <div
      ref={rootRef}
      id={id}
      data-tabs=""
      data-autoplay={autoplayMs}
      className={reduce ? "static" : undefined}
      style={style}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") held.current = true;
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") held.current = false;
      }}
      onFocus={(e) => {
        held.current = e.target.matches(":focus-visible");
      }}
      onBlur={() => {
        held.current = false;
      }}
    >
      <div className="tl" role="tablist" aria-label={label}>
        {items.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            className="tl-btn"
            role="tab"
            id={`${id}-tab-${item.id}`}
            aria-controls={`${id}-panel-${item.id}`}
            aria-selected={i === index}
            tabIndex={i === index ? 0 : -1}
            onClick={() => show(i)}
          >
            {item.tab}
          </button>
        ))}
      </div>
      {items.map((item, i) => (
        <div
          key={item.id}
          className="tl-panel"
          role="tabpanel"
          id={`${id}-panel-${item.id}`}
          aria-labelledby={`${id}-tab-${item.id}`}
          hidden={i !== index}
        >
          {item.panel}
        </div>
      ))}
      {(countNoun || autoplayMs) && (
        <div className="tl-ctl">
          {countNoun && (
            <span className="tl-count" aria-hidden="true">
              {`${countNoun} ${index + 1} of ${total}`}
            </span>
          )}
          {autoplayMs && (
            <button
              type="button"
              className="tl-pp"
              aria-pressed={paused}
              onClick={() => setPaused((p) => !p)}
            >
              <Icon name="clock" />
              <span>{paused ? "Play" : "Pause"}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
