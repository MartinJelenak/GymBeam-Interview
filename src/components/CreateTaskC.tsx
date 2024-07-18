import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createToDo, updateToDoItem } from "../api/api";
import CreateTask from "./CreateTask";
import { useTodoList } from "../store/dataStore";
import { useModal } from "../store/useModalStore";

export default function TodoItemContainer() {
  const { ListParamsId } = useTodoList((state) => state);
  const closeCreateTask = useModal((state) => state.closeCreateTask);
  const queryClient = useQueryClient();
  console.log(ListParamsId);
  const mutationCreateToDo = useMutation({
    mutationFn: createToDo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      closeCreateTask();
    },
  });

  const handleCreateToDo = (
    todoListId: string,
    title: string,
    deadLine: Date,
    tags: string[],
    priority: string
  ) => {
    const formattedDeadline = deadLine.toISOString();
    console.log(
      "todoListId",
      todoListId,
      title,
      formattedDeadline,
      tags,
      priority
    );
    mutationCreateToDo.mutate({
      todoListId,
      title,
      deadLine: formattedDeadline,
      tags,
      priority,
    });
  };

  const mutateEditToDo = useMutation({
    mutationFn: (data: {
      todoListId: string;
      todoId: string;
      title: string;
      deadLine: string;
      tags: string[];
      priority: string;
    }) => updateToDoItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      closeCreateTask();
    },
  });

  const handleEditToDo = (
    todoListId: string,
    todoId: string,
    title: string,
    deadLine: Date,
    tags: string[],
    priority: string
  ) => {
    mutateEditToDo.mutate({
      todoListId,
      todoId,
      title,
      deadLine,
      tags,
      priority,
    });
  };

  return (
    <CreateTask
      todoListId={ListParamsId}
      handleCreateToDo={handleCreateToDo}
      handleEditToDo={handleEditToDo}
    />
  );
}
