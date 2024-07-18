import { create } from "zustand";
import { ToDoListType, ToDoItemType } from "../types";

interface TodoListProps {
  data: ToDoListType[];
  toDoItem: ToDoItemType;
  setData: (data: ToDoListType[]) => void;
  setToDoItem: (todoItem: ToDoItemType) => void;
  initializeToDoItemFromData: () => void;
  toDoListItem: ToDoListType;
  setToDoListItem: (todoListItem: ToDoListType) => void;
  ListParamsId: string;
  setListParamsId: (id: string) => void;
  editItemData: boolean;
  setEditItemData: (editItemData: boolean) => void;
}

export const useTodoList = create<TodoListProps>((set, get) => ({
  data: [],
  toDoListItem: {
    id: "0",
    name: "",
    todos: [],
  },
  ListParamsId: "1",
  setToDoListItem: (todoListItem: ToDoListType) =>
    set({ toDoListItem: todoListItem }),
  toDoItem: {
    title: "",
    completed: false,
    id: "0",
    todoListId: "0",
    deadLine: "",
    createdAt: "",
    tags: [],
  },
  setData: (data: ToDoListType[]) => {
    set({ data });
    // Volitelně, inicializujte `toDoItem` při nastavení dat
    get().initializeToDoItemFromData();
  },
  setToDoItem: (todoItem: ToDoItemType) => set({ toDoItem: todoItem }),
  initializeToDoItemFromData: () => {
    const data = get().data;
    if (data.length > 0 && data[0].todos.length > 0) {
      // Nastavit toDoItem na první položku prvního seznamu
      set({ toDoItem: data[0].todos[0] });
    }
  },
  setListParamsId: (id: string) => set({ ListParamsId: id }),
  editItemData: false,
  setEditItemData: (editItemData: boolean) => set({ editItemData }),
}));
