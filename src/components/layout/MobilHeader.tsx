"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ContainerBox from "../ContainerBox";
import DarkModeToggle from "../DarkModeToggle";
import { useModal } from "../../store/useModalStore";
import { FunnelIcon } from "@heroicons/react/24/outline";
import ButtonAction from "../ButtonAction";

export default function MobilHeader() {
  const { openSideBar, openFilter } = useModal();

  return (
    <ContainerBox className="fixed w-full top-0 z-40 flex items-center gap-x-6 px-4 py-4 shadow-sm sm:px-6 lg:hidden rounded-t-none">
      <button
        type="button"
        onClick={openSideBar}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6 text-gray-500" />
      </button>
      <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
        <a href="">
          <img src="/gymBeam.png" alt="" className="w-[100px] dark:invert" />
        </a>
      </div>
      <ButtonAction onClick={openFilter}>
        <FunnelIcon className="h-6 w-6 text-gray-500" />
      </ButtonAction>
      {/* <DarkModeToggle /> */}
    </ContainerBox>
  );
}
