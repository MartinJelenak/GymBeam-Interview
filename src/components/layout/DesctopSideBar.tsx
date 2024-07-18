"use client";
import ContainerBox from "../ContainerBox";
import CreateListC from "../CreateListC";
import DarkModeToggle from "../DarkModeToggle";

interface SidebarItemProps {
  children: React.ReactNode;
}

export default function DesctopSideBar({ children }: SidebarItemProps) {
  return (
    <div className="hidden lg:fixed overflow-auto lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col text-gray-800 dark:text-gray-200">
      <ContainerBox
        className="flex grow flex-col gap-y-5 px-6 rounded-l-none 
       "
      >
        <div className="flex h-16 shrink-0 items-center">
          <img
            alt="logo"
            src="/gymBeam.png"
            className="w-[100px] dark:invert"
          />
        </div>
        <div className="-mx-6 mt-auto bg-gray-200 dark:bg-gray-700 ">
          <DarkModeToggle className="px-6 right-0" />
          <CreateListC />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {children}
              </ul>
            </li>
          </ul>
        </nav>
      </ContainerBox>
    </div>
  );
}
