import { useModal } from "../store/useModalStore";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import ContainerBox from "./ContainerBox";
import CreateTaskC from "./CreateTaskC";

export default function CreateTaskModal() {
  const { isOpenSideBar, isOpenCreateTask, closeCreateTask, openCreateTask } =
    useModal();

  return (
    <div className="relative">
      {!isOpenCreateTask && !isOpenSideBar && (
        <button
          type="button"
          className="lg:hidden m-16 fixed z-50 bottom-0 right-0 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={openCreateTask}
        >
          <PlusIcon aria-hidden="true" className="h-10 w-10" />
        </button>
      )}
      <Dialog
        open={isOpenCreateTask}
        onClose={closeCreateTask}
        className="fixed z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed bottom-0 w-full">
          <DialogPanel
            transition
            className="transform transition duration-300 ease-in-out data-[closed]:translate-y-full"
          >
            <div className="w-full p-4 bg-gray-200 dark:bg-gray-700 rounded-b-none rounded-t-3xl ">
              <CreateTaskC />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
