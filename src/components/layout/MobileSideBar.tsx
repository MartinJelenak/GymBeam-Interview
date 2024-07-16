import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ContainerBox from "../ContainerBox";
import DarkModeToggle from "../DarkModeToggle";
import { useModal } from "../../store/useModalStore";

export default function SideBar({ children }: { children: React.ReactNode }) {
  const { isOpenSideBar, closeSideBar } = useModal();
  return (
    <Dialog
      open={isOpenSideBar}
      onClose={closeSideBar}
      className="relative z-50 lg:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          <TransitionChild>
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
              <button
                type="button"
                onClick={() => closeSideBar()}
                className="-m-2.5 p-2.5"
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </button>
            </div>
          </TransitionChild>
          {/* Sidebar component, swap this element with another sidebar if you like --------------------------------------- MOBILE --------------------------------------- */}

          <ContainerBox
            className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-2
                  rounded-l-none backdrop-blur-md
                  dark:bg-neutral-950
                  dark:bg-[radial-gradient(ellipse_120%_100%_at_20%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
                  bg-white
                  bg-[radial-gradient(ellipse_120%_100%_at_20%_-20%,rgba(140,140,150,1),rgba(255,255,255,0))]"
          >
            <div className="flex h-16 shrink-0 items-center">
              <img
                src="/gymBeam.png"
                alt="logo"
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
              </ul>
            </nav>
          </ContainerBox>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
