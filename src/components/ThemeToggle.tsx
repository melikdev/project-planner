"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="">
      <div className="">
        {darkMode ? (
          <Sun onClick={() => setIsDarkMode(false)} />
        ) : (
          <Moon onClick={() => setIsDarkMode(true)} />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
