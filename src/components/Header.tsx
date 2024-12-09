import { Link } from "react-router-dom";
import logo from "/Horeca_logo.png";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import NavList from "./NavList";

export default function Header({
  modeHandler,
  dark,
}: {
  modeHandler: () => void;
  dark: boolean;
}) {
  const [burger, setBurger] = useState(false);

  return (
    <header className="flex justify-between items-center px-16 h-16 shadow shadow-black dark:shadow-white relative">
      <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <img className="max-w-12" src={logo} alt="Horeca Georgia Logo" />
          <span className="text-2xl">Horeca Georgia</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        <NavList />
        <button className="px-5 py-2 rounded-md border border-black dark:border-white">
          შესვლა/რეგისტრაცია
        </button>
      </nav>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setBurger(!burger)}
          className="text-3xl lg:hidden"
          aria-label="Toggle Menu"
        >
          <RxHamburgerMenu />
        </button>
        <button
          onClick={modeHandler}
          className="text-3xl"
          aria-label="Toggle Theme"
        >
          {dark ? <MdLightMode /> : <MdNightlight />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {burger && (
        <nav className="absolute top-16 right-0 h-screen w-1/2 bg-gray-300 flex flex-col items-center gap-8 p-6 lg:hidden">
          <NavList />
          <button className="px-5 py-2 rounded-md border border-black dark:border-white">
            შესვლა/რეგისტრაცია
          </button>
        </nav>
      )}
    </header>
  );
}
