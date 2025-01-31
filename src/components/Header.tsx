import { Link } from "react-router-dom";
import logo from "/Horeca_logo.png";
import { MdLightMode, MdNightlight } from "react-icons/md";
import Navigation from "./Navigation";

export default function Header({
  modeHandler,
  dark,
}: {
  modeHandler: () => void;
  dark: boolean;
}) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-slate-600 flex justify-between items-center px-4 sm:px-16 h-16 shadow shadow-black dark:shadow-white z-50">
      <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <img className="max-w-12" src={logo} alt="Horeca Georgia Logo" />
          <span className="text-2xl">Horeca Georgia</span>
        </div>
      </Link>

      <div className="flex gap-4">
        <Navigation />
        <button
          onClick={modeHandler}
          className="text-3xl"
          aria-label="Toggle Theme"
        >
          {dark ? <MdLightMode /> : <MdNightlight />}
        </button>
      </div>
    </header>
  );
}
