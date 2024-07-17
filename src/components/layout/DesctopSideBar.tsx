"use client";
import ContainerBox from "../ContainerBox";
import CreateListC from "../CreateListC";
import DarkModeToggle from "../DarkModeToggle";
// import { useModal } from "../../store/useModalStore";

interface SidebarItemProps {
  children: React.ReactNode;
}

export default function DesctopSideBar({ children }: SidebarItemProps) {
  // const { isOpenSideBar, openSideBar, closeSideBar } = useModal();
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col text-gray-800 dark:text-gray-200">
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
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {children}
              </ul>
            </li>

            <li className="-mx-6 mt-auto">
              <DarkModeToggle className="px-6" />
            </li>
            <li className="-mx-6 mt-auto">
              <CreateListC />
            </li>
          </ul>
        </nav>
      </ContainerBox>
    </div>
  );
}
