import Link from "next/link";
import { Icon } from "./icon";

export function ArrowLink({
  href,
  className = "link",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link className={className} href={href}>
      {children}
      <Icon name="arrow" />
    </Link>
  );
}
