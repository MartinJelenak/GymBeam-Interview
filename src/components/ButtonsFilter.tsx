import React, { useEffect } from "react";
import { cn } from "../utils/cn";

interface ButtonActionProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  isActive?: boolean;
}

const ButtonAction: React.FC<ButtonActionProps> = ({
  onClick,
  children,
  className,
  type = "button",
  isActive = false,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const baseStyles = "font-semibold shadow-lg";
  const activeStyles = isActive
    ? "bg-gray-700 text-white dark:bg-gray-300 dark:text-gray-800"
    : "bg-gray-100 text-black dark:bg-white/10 dark:text-gray-200";

  const combinedStyles = cn(baseStyles, activeStyles, className);

  return (
    <button onClick={handleClick} className={combinedStyles} type={type}>
      {children}
    </button>
  );
};

export default ButtonAction;
