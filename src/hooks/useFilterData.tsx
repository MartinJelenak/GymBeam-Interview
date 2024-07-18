import { useMemo } from "react";
import { ToDoItemType, TodoStatus, ToDoPriority } from "../types";

interface FilterSettings {
  filterStatus: TodoStatus | "none";
  filterPriority: ToDoPriority | "none";
  filterByText: string;
}

function useFilteredTodos(
  todos: ToDoItemType[],
  filters: FilterSettings
): ToDoItemType[] {
  return useMemo(() => {
    return todos.filter((todo) => {
      const matchesStatus =
        filters.filterStatus === "none" ||
        filters.filterStatus === TodoStatus.All ||
        (filters.filterStatus === TodoStatus.Completed && todo.completed) ||
        (filters.filterStatus === TodoStatus.Active && !todo.completed);

      const matchesPriority =
        filters.filterPriority === "none" ||
        todo.priority === filters.filterPriority;

      const matchesText =
        filters.filterByText.trim() === "" ||
        todo.title.toLowerCase().includes(filters.filterByText.toLowerCase());

      return matchesStatus && matchesPriority && matchesText;
    });
  }, [
    todos,
    filters.filterStatus,
    filters.filterPriority,
    filters.filterByText,
  ]);
}

export default useFilteredTodos;
