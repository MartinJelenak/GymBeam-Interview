import ToDoItem from "./ToDoItem";
import { useFilter } from "../store/fiterStore";
import { ToDoItemType, TodoStatus, ToDoPriority } from "../types";

interface ToDoItemFProps {
  todos: {
    todos: ToDoItemType[]; // Add the 'todos' property
  };
  handleCompleteToDo: (
    todoListId: string,
    todoId: string,
    completed: boolean
  ) => void;
  handleDeleteToDo: (todoListId: string, todoId: string) => void;
  editButtonHanler: (itemData: ToDoItemType) => void;
}

export default function ToDoItemC({
  todos,
  handleCompleteToDo,
  handleDeleteToDo,
  editButtonHanler,
}: ToDoItemFProps) {
  const { filterStatus, filterPriority, filterByText } = useFilter();
  const filters = { filterStatus, filterPriority, filterByText };

  // Ensure the filters and todos are well defined
  const filteredTodos = filterTodos(todos.todos, filters);

  function filterTodos(
    todos: ToDoItemType[],
    filters: {
      filterStatus: TodoStatus | "none";
      filterPriority: ToDoPriority | "none";
      filterByText: string;
    }
  ): ToDoItemType[] {
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
  }

  return (
    <>
      {filteredTodos.map((item: ToDoItemType) => (
        <div key={item.id}>
          <ToDoItem
            itemData={item}
            handleCompleteToDo={handleCompleteToDo}
            handleDeleteToDo={handleDeleteToDo}
            editButtonHanler={editButtonHanler}
          />
        </div>
      ))}
    </>
  );
}
