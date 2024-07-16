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
}

export const useTodoList = create<TodoListProps>((set, get) => ({
  data: [],
  toDoListItem: {
    id: "0",
    name: "",
    todos: [],
  },
  setToDoListItem: (todoListItem: ToDoListType) =>
    set({ toDoListItem: todoListItem }),
  toDoItem: {
    title: "",
    description: "",
    completed: false,
    id: "0",
    todolistId: "0",
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
}));
