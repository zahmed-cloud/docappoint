import {
  useEffect,
  useState,
} from "react";

const ThemeToggle = () => {

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark") {

      document.documentElement.classList.add(
        "dark"
      );

      setDarkMode(true);

    }

  }, []);

  const toggleTheme = () => {

    if (darkMode) {

      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );

    } else {

      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );

    }

    setDarkMode(!darkMode);

  };

  return (

    <button
      onClick={toggleTheme}
      className="w-11 h-11 rounded-full bg-sky-100 dark:bg-slate-700 flex items-center justify-center text-xl duration-300"
    >

      {
        darkMode ? "☀️" : "🌙"
      }

    </button>

  );

};

export default ThemeToggle;