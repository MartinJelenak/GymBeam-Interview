import React from "react";
import { cn } from "../utils/cn";

interface ContainerBoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContainerBox({
  children,
  className,
}: ContainerBoxProps) {
  const base = "p-4 ring-1 ring-opacity-5";
  const light = "bg-gray-300 ring-black ";
  const dark = "dark:bg-slate-900 dark:ring-slate-700";

  const combinedStyles = cn(base, light, dark, className);

  return <div className={combinedStyles}>{children}</div>;
}
