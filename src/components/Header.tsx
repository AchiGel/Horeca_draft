import { Link, useLocation } from "react-router-dom";
import logo from "../../public/logo.svg";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="flex justify-between items-center px-16 h-16 shadow shadow-black">
      <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="logo" />
          <span className="text-2xl">Ddsgnr</span>
        </div>
      </Link>

      <nav className="flex items-center gap-8">
        <ul className="flex gap-8">
          <li
            className={
              pathname === "/"
                ? "p-3 border-b border-b-black"
                : "p-3 border-collapse"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              pathname === "/popular"
                ? "p-3 border-b border-b-black"
                : "p-3 border-collapse"
            }
          >
            <Link to="/popular">Popular</Link>
          </li>
          <li
            className={
              pathname === "/trending"
                ? "p-3 border-b border-b-black"
                : "p-3 border-collapse"
            }
          >
            <Link to="/trending">Trending</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-md border border-black">
            Log in
          </button>
          <button className="px-5 py-2 rounded-md border border-black bg-black text-white">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
