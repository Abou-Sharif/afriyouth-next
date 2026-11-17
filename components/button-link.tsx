import Link from "next/link";
import { Icon } from "./icon";

type Variant = "solid" | "line" | "light";

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  /** Name of a trailing icon from the icon set. */
  icon?: string;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "solid",
  icon,
  className = "",
  children,
}: ButtonLinkProps) {
  return (
    <Link className={`btn btn-${variant}${className ? ` ${className}` : ""}`} href={href}>
      {children}
      {icon && <Icon name={icon} />}
    </Link>
  );
}
