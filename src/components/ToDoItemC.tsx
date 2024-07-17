import ToDoItem from "./ToDoItem";
import { ToDoItemType } from "../types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateTodoCompleted, fetchToDoListById } from "../api/api";
import { useParams } from "react-router-dom";

export default function ToDoItemC() {
  const { todoId } = useParams<{ todoId: string }>();
  // const todoId = "2"; // For illustration, assuming this ID is correct
  console.log("todoId", todoId, typeof todoId);

  const {
    data: todos,
    error: todosError,
    isLoading: todosLoading,
  } = useQuery({
    queryKey: ["todos", todoId],
    queryFn: todoId ? () => fetchToDoListById(todoId) : undefined,
    enabled: !!todoId,
  });

  console.log("getToDoList", todos);

  const mutationTodoComplete = useMutation({
    mutationFn: (data: {
      todoListId: string;
      todoId: string;
      completed: boolean;
    }) => updateTodoCompleted(data),
    onSuccess: () => {
      console.log("Todo completion status updated successfully");
    },
  });

  const handleCompleteToDo = (
    todoListId: string,
    todoId: string,
    completed: boolean
  ) => {
    mutationTodoComplete.mutate({ todoListId, todoId, completed });
  };

  if (todosLoading) {
    return <div>Loading...</div>;
  }

  if (todosError) {
    return <div>Error loading todos: {todosError.message}</div>;
  }

  if (!todos || todos.length === 0) {
    return <div>No items found.</div>;
  }

  return (
    <>
      {todos.todos.map((item: ToDoItemType) => (
        <div key={item.id}>
          <ToDoItem
            itemData={item}
            handleCompleteToDo={() =>
              handleCompleteToDo(todoId!, item.id, !item.completed)
            }
          />
        </div>
      ))}
    </>
  );
}
