import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
    <HelmetProvider>
      <div className="flex flex-col dark:bg-1c1c1d min-h-screen dark:text-white">
        <Helmet>
          <title>Horeca Georgia - ჰორეკა საქართველო</title>
          <meta
            name="description"
            content="Stay updated on the latest trends and news in the HORECA industry in Georgia and worldwide."
          />
          <meta
            property="og:title"
            content="Horeca Georgia - ჰორეკა საქართველო"
          />
          <meta
            property="og:description"
            content="Latest trends and news in the HORECA industry in Georgia and worldwide."
          />
        </Helmet>
        <QueryClientProvider client={queryClient}>
          <Header modeHandler={modeHandler} dark={dark} />
          <div className="flex flex-grow justify-center items-center">
            <Outlet />
            {/* <h1 className="text-2xl">კონტენტი მალე დაემატება</h1> */}
          </div>
          <Footer />
        </QueryClientProvider>
      </div>
    </HelmetProvider>
  );
}
