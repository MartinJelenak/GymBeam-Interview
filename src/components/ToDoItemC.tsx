import ToDoItem from "./ToDoItem";
import { ToDoItemType } from "../types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateTodoCompleted, fetchToDoListById, deleteToDo } from "../api/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTodoList, setToDoItem } from "../store/dataStore";
import { useModal } from "../store/useModalStore";

export default function ToDoItemC() {
  const { todoId } = useParams<{ todoId: string }>();
  const setListParamsId = useTodoList((state) => state.setListParamsId);
  const setToDoItem = useTodoList((state) => state.setToDoItem);
  const openCreateTask = useModal((state) => state.openCreateTask);
  const queryClient = useQueryClient();
  // const todoId = "2"; // For illustration, assuming this ID is correct
  // console.log("todoId", todoId, typeof todoId);
  useEffect(() => {
    setListParamsId(todoId!);
  }, [todoId]);

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
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleCompleteToDo = (
    todoListId: string,
    todoId: string,
    completed: boolean
  ) => {
    mutationTodoComplete.mutate({ todoListId, todoId, completed });
  };

  const mutationDeleteToDo = useMutation({
    mutationFn: (data: { todoListId: string; todoId: string }) =>
      deleteToDo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDeleteToDo = (todoListId: string, todoId: string) => {
    console.log(todoListId, todoId);
    mutationDeleteToDo.mutate({ todoListId, todoId });
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

  const editButtonHanler = (item: ToDoItemType) => {
    setToDoItem(item);
    openCreateTask();
  };

  //todo filter
  console.log("todos.todos", todos.todos);
  return (
    <>
      {todos.todos.map((item: ToDoItemType) => (
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
