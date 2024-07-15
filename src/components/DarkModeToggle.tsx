import { useEffect, useState } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import ButtonAction from "./ButtonAction";

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle = ({ className }: DarkModeToggleProps) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ButtonAction onClick={toggleDarkMode} className={className}>
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-gray-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-500" />
      )}
    </ButtonAction>
  );
};

export default DarkModeToggle;
