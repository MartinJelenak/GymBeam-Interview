import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createToDoList } from "../api/api";
import CreateList from "./CreateList";

export default function CreateListC() {
  const queryClient = useQueryClient();
  const mutationCreateList = useMutation({
    mutationFn: createToDoList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ToDoLists"] });
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
