import React from "react";

interface ContainerBoxProps {
  children: React.ReactNode;
}

export default function ContainerBox({ children }: ContainerBoxProps) {
  return (
    <div className="bg-gray-300 ring-1 ring-opacity-5 ring-black p-4 w-auto dark:bg-slate-">
      {children}
    </div>
  );
}
