import { create } from "zustand";

interface ModalState {
  isOpenSideBar: boolean;
  isOpenCreateTask: boolean;
  isOpenFilter: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
  openCreateTask: () => void;
  closeCreateTask: () => void;
  openFilter: () => void;
  closeFilter: () => void;
}

export const useModal = create<ModalState>((set) => ({
  isOpenSideBar: false,
  isOpenCreateTask: false,
  isOpenFilter: false,

  openSideBar: () => set({ isOpenSideBar: true }),
  closeSideBar: () => set({ isOpenSideBar: false }),
  openCreateTask: () => set({ isOpenCreateTask: true }),
  closeCreateTask: () => set({ isOpenCreateTask: false }),
  openFilter: () => set({ isOpenFilter: true }),
  closeFilter: () => set({ isOpenFilter: false }),
}));
