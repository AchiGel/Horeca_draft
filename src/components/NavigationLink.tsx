import { Link, useLocation } from "react-router-dom";
import { LinksType } from "../utils/types";

export default function NavigationLink({
  link,
  setIsOpen,
}: {
  link: LinksType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const location = useLocation();
  return (
    <Link
      to={link.path}
      className={`hover:text-blue-600 transition-colors ${
        location.pathname === link.path
          ? "text-blue-600 dark:text-black font-semibold"
          : ""
      }`}
      onClick={() => setIsOpen(false)} // optional: auto-close on link click
    >
      {link.name}
    </Link>
  );
}
