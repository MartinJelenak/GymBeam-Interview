import { useModal } from "../store/useModalStore";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Filter from "./Filter";

export default function FilterTaskModal() {
  const { isOpenFilter, closeFilter } = useModal();

  return (
    <>
      <Dialog
        open={isOpenFilter}
        onClose={closeFilter}
        className="fixed z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed top-0 w-full">
          <DialogPanel
            transition
            className="transform transition duration-300 ease-in-out data-[closed]:-translate-y-full"
          >
            <div className="w-full p-4 bg-gray-200 dark:bg-gray-700 rounded-t-none rounded-b-3xl lg:block">
              <Filter />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
