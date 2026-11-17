"use client";

import { useState } from "react";
import { Icon } from "./icon";
import { ProgramCard } from "./program-card";
import { programFilters } from "@/content/programs-page";
import type { Program } from "@/content/programs";

/** Program cards with a filter by audience. Cards are hidden, never removed. */
export function ProgramsBrowser({ programs }: { programs: Program[] }) {
  const [filter, setFilter] = useState<string>("all");
  const matches = (p: Program) => filter === "all" || p.categories.includes(filter);
  const shown = programs.filter(matches).length;

  return (
    <>
      <div className="tabs" role="group" aria-label="Filter programs">
        {programFilters.map((f) => (
          <button
            key={f.id}
            className="tab"
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="pcards" id="programs-list">
        {programs.map((p) => (
          <ProgramCard key={p.id} program={p} hidden={!matches(p)} />
        ))}
      </div>
      <div className="empty" hidden={shown > 0}>
        <Icon name="search" />
        <b>No programs match this filter</b>
        Try another one, or choose all programs.
      </div>
    </>
  );
}
