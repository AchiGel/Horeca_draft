import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

export default function NavItem({ to, label }: { to: string; label: string }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <li
      className={clsx(
        "p-3",
        isActive
          ? "border-b border-b-black dark:border-b-white"
          : "border-collapse"
      )}
    >
      <Link to={to}>{label}</Link>
    </li>
  );
}
