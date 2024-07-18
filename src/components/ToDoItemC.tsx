import ToDoItem from "./ToDoItem";
import { ToDoItemType, TodoStatus, ToDoPriority } from "../types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateTodoCompleted, fetchToDoListById, deleteToDo } from "../api/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTodoList } from "../store/dataStore";
import { useModal } from "../store/useModalStore";
import useFilteredTodos from "../hooks/useFilterData";
import { useFilter } from "../store/fiterStore";

export default function ToDoItemC() {
  const { todoId } = useParams<{ todoId: string }>();
  const setListParamsId = useTodoList((state) => state.setListParamsId);
  const setToDoItem = useTodoList((state) => state.setToDoItem);
  const openCreateTask = useModal((state) => state.openCreateTask);
  const setEditItemData = useTodoList((state) => state.setEditItemData);
  const queryClient = useQueryClient();
  const { filterStatus, filterPriority, filterByText } = useFilter();

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

  const filters = {
    filterStatus: filterStatus,
    filterPriority: filterPriority,
    filterByText: filterByText,
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
  if (!todos || !filters) {
    console.error("Todos or filters are not ready.");
    return; // Skorý návrat alebo alternatívne spracovanie
  }

  console.log("Todos provided to useFilteredTodos:", todos);
  console.log("Filters provided to useFilteredTodos:", filters);
  const filteredTodos = useFilteredTodos(todos.todos, filters);

  console.log("filteredTodos", filteredTodos);

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

  const editButtonHanler = (item: ToDoItemType) => {
    setToDoItem(item);
    openCreateTask();
    setEditItemData(true);
  };

  //todo filter
  console.log("todos.todos", todos.todos);
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
