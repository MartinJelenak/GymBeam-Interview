// ButtonAction.tsx
import { cn } from "../utils/cn";

interface ButtonActionProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "base";
  type?: "button" | "submit" | "reset";
}

const ButtonAction: React.FC<ButtonActionProps> = ({
  onClick,
  children,
  className,
  disabled = false,
  variant = "base",
  type = "button",
}) => {
  const baseStyles = "font-semibold rounded-lg";
  const primaryStyles =
    "bg-gray-700 dark:bg-white/10  px-4 py-2 text-sm font-semibold shadow-lg text-gray-200";
  const secondaryStyles = "bg-gray-200 text-black";

  const enabledStyles = "";
  const disabledStyles = "bg-gray-500 cursor-not-allowed opacity-50";

  const combinedStyles = cn(
    baseStyles,
    variant === "primary" && primaryStyles,
    variant === "secondary" && secondaryStyles,
    !disabled ? enabledStyles : disabledStyles,
    className
  );

  return (
    <button
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonAction;
