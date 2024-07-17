import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createToDoList } from "../api/api";
import CreateTask from "./CreateTask";
import { useTodoList } from "../store/dataStore";
import CreateList from "./CreateList";

export default function CreateListC() {
  const queryClient = useQueryClient();
  const mutationCreateList = useMutation({
    mutationFn: createToDoList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleCreateList = (listName: string) => {
    mutationCreateList.mutate({ name: listName });
  };
  return (
    <>
      <CreateList handleCreateList={handleCreateList} />
    </>
  );
}
