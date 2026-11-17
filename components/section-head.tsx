export function SectionHead({
  kicker,
  title,
  sub,
}: {
  kicker?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="head">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </div>
  );
}
