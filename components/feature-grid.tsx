import { IconBox } from "./icon";

export type Feature = { icon: string; title: string; text: string };

/** Three-up grid of icon, heading and short text used across the site. */
export function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className="grid3">
      {items.map((f) => (
        <div key={f.title} className="item reveal">
          <IconBox name={f.icon} />
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </div>
  );
}
