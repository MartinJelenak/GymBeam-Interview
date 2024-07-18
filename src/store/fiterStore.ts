import { create } from "zustand";
import { TodoStatus, ToDoPriority } from "../types";

interface ModalState {
  filterStatus: TodoStatus | "none";
  filterPriority: ToDoPriority | "none";
  filterByText: string;
  setFilterPriority: (level: ToDoPriority | "none") => void;
  setFilterStatus: (status: TodoStatus | "none") => void;
  setFilterByText: (text: string) => void;
}

export const useFilter = create<ModalState>((set) => ({
  filterStatus: TodoStatus.All,
  filterPriority: ToDoPriority.None,
  filterByText: "",
  setFilterByText: (text: string) => set({ filterByText: text }),
  setFilterPriority: (level: ToDoPriority | "none") =>
    set((state) => ({
      filterPriority: state.filterPriority === level ? "none" : level,
    })),
  setFilterStatus: (status: TodoStatus | "none") =>
    set((state) => ({
      filterStatus: state.filterStatus === status ? "none" : status,
    })),
}));
