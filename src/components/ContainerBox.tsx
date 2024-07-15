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
  const base = "p-6 border backdrop-blur-sm rounded-3xl shadow-lg";
  const light = "bg-black/5 border-black/10 ";
  const dark = "dark:bg-white/5 dark:border-white/10";

  const combinedStyles = cn(base, dark, light, className);

  return <div className={combinedStyles}>{children}</div>;
}
