"use client";

import { useEffect, useState } from "react";
import { Icon, IconBox } from "./icon";

export type AccordionItem = {
  id: string;
  title: string;
  /** Short line under the title (lab style only). */
  summary?: string;
  icon?: string;
  iconClassName?: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  /** `plain` is the text-only FAQ style, `rich` shows an icon and summary. */
  variant?: "plain" | "rich";
  /** Ids open on first render. Defaults to the first item. */
  defaultOpen?: string[];
};

/** Independent disclosure items. A URL hash that matches an item id opens that item. */
export function Accordion({ items, variant = "rich", defaultOpen }: AccordionProps) {
  const plain = variant === "plain";
  const [open, setOpen] = useState<Set<string>>(new Set(defaultOpen ?? [items[0]?.id]));

  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      if (items.some((item) => item.id === id)) setOpen(new Set([id]));
    };
    const frame = requestAnimationFrame(openFromHash);
    window.addEventListener("hashchange", openFromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", openFromHash);
    };
  }, [items]);

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (!next.delete(id)) next.add(id);
      return next;
    });

  return (
    <ul className="acc">
      {items.map((item) => {
        const isOpen = open.has(item.id);
        return (
          <li key={item.id} id={item.id}>
            <button
              className={`acc-btn${plain ? " plain" : ""}`}
              id={`${item.id}-button`}
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              onClick={() => toggle(item.id)}
            >
              {!plain && item.icon && <IconBox name={item.icon} className={item.iconClassName} />}
              <span>
                <h3>{item.title}</h3>
                {item.summary && <span className="sm">{item.summary}</span>}
              </span>
              <Icon name="chev" className="chev" />
            </button>
            <div
              className={`acc-panel${plain ? " plain" : ""}`}
              id={`${item.id}-panel`}
              role="region"
              aria-labelledby={`${item.id}-button`}
              hidden={!isOpen}
            >
              {item.content}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
