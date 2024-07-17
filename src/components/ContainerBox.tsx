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
  const base = "p-6 border rounded-3xl shadow-lg";
  const light = "bg-gray-200 border-black/10 ";
  const dark = " dark:bg-gray-800 dark:border-white/10";

  const combinedStyles = cn(base, dark, light, className);

  return <div className={combinedStyles}>{children}</div>;
}
