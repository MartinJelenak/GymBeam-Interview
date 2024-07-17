import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createToDo } from "../api/api";
import CreateTask from "./CreateTask";
import { useTodoList } from "../store/dataStore";

export default function TodoItemContainer() {
  const { ListParamsId } = useTodoList((state) => state);
  const queryClient = useQueryClient();
  console.log(ListParamsId);
  const mutationCreateToDo = useMutation({
    mutationFn: createToDo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ToDoLists"] });
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

  return (
    <CreateTask todoListId={ListParamsId} handleCreateToDo={handleCreateToDo} />
  );
}
