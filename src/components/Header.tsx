import { Link, useLocation } from "react-router-dom";
import logo from "/logo.svg";
import { MdLightMode, MdNightlight } from "react-icons/md";

export default function Header({
  modeHandler,
  dark,
}: {
  modeHandler: () => void;
  dark: boolean;
}) {
  const { pathname } = useLocation();

  return (
    <header className="flex justify-between items-center px-16 h-16 shadow shadow-black dark:shadow-white">
      <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="logo" />
          <span className="text-2xl">Horeca Georgia</span>
        </div>
      </Link>

      <nav className="flex items-center gap-8">
        <ul className="flex gap-8">
          <li
            className={
              pathname === "/"
                ? "p-3 border-b border-b-black dark:border-b-white"
                : "p-3 border-collapse"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              pathname === "/popular"
                ? "p-3 border-b border-b-black dark:border-b-white"
                : "p-3 border-collapse"
            }
          >
            <Link to="/popular">Popular</Link>
          </li>
          <li
            className={
              pathname === "/trending"
                ? "p-3 border-b border-b-black dark:border-b-white"
                : "p-3 border-collapse"
            }
          >
            <Link to="/trending">Trending</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-md border border-black dark:border-white">
            Log in
          </button>
          <button className="px-5 py-2 rounded-md border border-black bg-black text-white dark:border-white dark:bg-white dark:text-black">
            Get Started
          </button>
          <button onClick={() => modeHandler()} className="text-3xl">
            {dark ? <MdLightMode /> : <MdNightlight />}
          </button>
        </div>
      </nav>
    </header>
  );
}
