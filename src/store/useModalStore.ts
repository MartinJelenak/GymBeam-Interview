import create from "zustand";
import { useTodoList } from "./dataStore";

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
  closeCreateTask: () => {
    set({ isOpenCreateTask: false });
    const setEditItemData = useTodoList.getState().setEditItemData;
    setEditItemData(false); // Vyvolanie zmeny v useTodoList store
  },
  openFilter: () => set({ isOpenFilter: true }),
  closeFilter: () => set({ isOpenFilter: false }),
}));
