import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  const [dark, setDark] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const modeHandler = () => {
    const newMode = !dark;
    setDark(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-1c1c1d dark:text-white">
      <Header modeHandler={modeHandler} dark={dark} />
      <div className="flex-grow flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
