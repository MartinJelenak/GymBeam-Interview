import { create } from "zustand";

interface ModalState {
  isOpenSideBar: boolean;
  isOpenCreateTask: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
  openCreateTask: () => void;
  closeCreateTask: () => void;
}

export const useModal = create<ModalState>((set) => ({
  isOpenSideBar: false,
  isOpenCreateTask: false,

  openSideBar: () => set({ isOpenSideBar: true }),
  closeSideBar: () => set({ isOpenSideBar: false }),
  openCreateTask: () => set({ isOpenCreateTask: true }),
  closeCreateTask: () => set({ isOpenCreateTask: false }),
}));
