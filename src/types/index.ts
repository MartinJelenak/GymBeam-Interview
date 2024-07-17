export interface ToDoItemType {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  todolistId: string;
  deadLine: string;
  createdAt: string;
  tags: string[];
}

export interface ToDoListType {
  id: string;
  name: string;
  todos: ToDoItemType[];
}

export interface ToDoListContainerProps {
  todos: ToDoListType[];
}

export enum TodoFilter {
  All = "all",
  Active = "active",
  Completed = "completed",
}

export enum ToDoPriority {
  Low = "low",
  Medium = "medium",
  High = "high",
}
