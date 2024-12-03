import { Link, useLocation } from "react-router-dom";
import logo from "/Horeca_logo.png";
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
          <img className="max-w-12" src={logo} alt="logo" />
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
            <Link to="/">მთავარი</Link>
          </li>
          <li
            className={
              pathname === "/popular"
                ? "p-3 border-b border-b-black dark:border-b-white"
                : "p-3 border-collapse"
            }
          >
            <Link to="/popular">პოპულარული</Link>
          </li>
          <li
            className={
              pathname === "/trending"
                ? "p-3 border-b border-b-black dark:border-b-white"
                : "p-3 border-collapse"
            }
          >
            <Link to="/trending">ტრენდული</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-md border border-black dark:border-white">
            შესვლა/რეგისტრაცია
          </button>
          <button onClick={() => modeHandler()} className="text-3xl">
            {dark ? <MdLightMode /> : <MdNightlight />}
          </button>
        </div>
      </nav>
    </header>
  );
}
