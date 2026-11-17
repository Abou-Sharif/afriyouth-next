import { iconPaths } from "@/lib/icon-paths";

/** One hidden sprite per page; every icon below points into it. */
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        {Object.entries(iconPaths).map(([name, paths]) => (
          <symbol
            key={name}
            id={`i-${name}`}
            viewBox="0 0 24 24"
            dangerouslySetInnerHTML={{ __html: paths }}
          />
        ))}
      </defs>
    </svg>
  );
}

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg className={`ic${className ? ` ${className}` : ""}`} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function IconBox({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`ic-box${className ? ` ${className}` : ""}`}>
      <Icon name={name} />
    </span>
  );
}
