import { ToDoItemType } from "../types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateTodoCompleted, fetchToDoListById, deleteToDo } from "../api/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTodoList } from "../store/dataStore";
import { useModal } from "../store/useModalStore";
import ToDoItemF from "./ToDoItemF";

export default function ToDoItemC() {
  const setListParamsId = useTodoList((state) => state.setListParamsId);
  const setToDoItem = useTodoList((state) => state.setToDoItem);
  const openCreateTask = useModal((state) => state.openCreateTask);
  const setEditItemData = useTodoList((state) => state.setEditItemData);
  const queryClient = useQueryClient();
  const { todoId } = useParams<{ todoId: string }>();

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

  const mutationTodoComplete = useMutation({
    mutationFn: (data: {
      todoListId: string;
      todoId: string;
      completed: boolean;
    }) => updateTodoCompleted(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
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
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const handleDeleteToDo = (todoListId: string, todoId: string) => {
    mutationDeleteToDo.mutate({ todoListId, todoId });
  };

  const editButtonHandler = (item: ToDoItemType) => {
    setToDoItem(item);
    openCreateTask();
    setEditItemData(true);
  };

  if (todosLoading) return <div>Loading...</div>;
  if (todosError) return <div>Error loading todos: {todosError.message}</div>;
  if (!todos) return <div>No items found.</div>;

  return (
    <>
      <ToDoItemF
        todos={todos}
        handleCompleteToDo={handleCompleteToDo}
        handleDeleteToDo={handleDeleteToDo}
        editButtonHanler={editButtonHandler}
      />
    </>
  );
}
