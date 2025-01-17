export interface ToDoItemType {
  id: string;
  title: string;
  completed: boolean;
  todoListId: string;
  deadLine: string;
  createdAt: string;
  tags: string[];
  priority: ToDoPriority;
}

export interface ToDoListType {
  id: string;
  name: string;
  todos: ToDoItemType[];
}

export interface ToDoListContainerProps {
  todos: ToDoListType[];
}

export enum TodoStatus {
  All = "all",
  Active = "active",
  Completed = "completed",
  None = "none",
}

export enum ToDoPriority {
  Low = "low",
  Medium = "medium",
  High = "high",
  None = "none",
}
