import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import ButtonAction from "./ButtonAction";
import { useDarkMode } from "../store/useDarkMode";

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle = ({ className }: DarkModeToggleProps) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

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
