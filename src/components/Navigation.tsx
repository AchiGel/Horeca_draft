import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "რესტორნები", path: "/restaurants" },
    { name: "სასტუმროები", path: "/hotels" },
    { name: "კაფეები", path: "/cafes" },
    { name: "ქეითერინგი", path: "/catering" },
    { name: "HR", path: "/hr" },
    { name: "მიწოდება", path: "/supply" },
  ];

  return (
    <nav className="p-4">
      <button
        className="lg:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <ul
        className={`flex justify-center gap-6 text-lg font-medium text-gray-700 dark:text-white 
          ${
            isOpen
              ? "absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex-col items-center py-4"
              : "hidden"
          } 
          lg:flex lg:static lg:bg-transparent lg:shadow-none lg:py-0 lg:flex-row`}
      >
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`hover:text-blue-600 transition-colors ${
                location.pathname === link.path
                  ? "text-blue-600 dark:text-black font-semibold"
                  : ""
              }`}
              aria-current={
                location.pathname === link.path ? "page" : undefined
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
