import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Horeca Georgia - ჰორეკა საქართველო</title>
        <meta
          name="description"
          content="Media about HORECA in Georgia and global markets"
        />
        <meta
          name="keywords"
          content="horeca, restaurants, hotels, cafes, რესტორანი, კაფე, სასტუმრო"
        />
        <meta
          property="og:title"
          content="Horeca Georgia - ჰორეკა საქართველო"
        />
        <meta
          property="og:description"
          content="Media about HORECA in Georgia and global markets"
        />
        <meta property="og:image" content="/Horeca_logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Horeca Georgia Logo" />
        <meta property="og:url" content="https://yourwebsite.com" />

        <meta
          name="twitter:title"
          content="Horeca Georgia - ჰორეკა საქართველო"
        />
        <meta
          name="twitter:description"
          content="Media about HORECA in Georgia and global markets"
        />
        <meta name="twitter:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/Horeca_logo.png" />
        <meta name="twitter:image:alt" content="Horeca Georgia Logo" />
      </Helmet>
      <Header modeHandler={modeHandler} dark={dark} />
      <div className="flex-grow flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
