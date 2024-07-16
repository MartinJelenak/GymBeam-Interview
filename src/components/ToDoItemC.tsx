import ToDoItem from "./ToDoItem";
import { useTodoList } from "../store/dataStore";
import { ToDoItemType } from "../types";
import ContainerBox from "./ContainerBox";
import CreateTask from "./CreateTask";

export default function ToDoItemC() {
  const { toDoListItem } = useTodoList();
  console.log("toDoListItem", toDoListItem);

  if (!toDoListItem || toDoListItem.todos.length === 0) {
    return <div>No items found.</div>;
  }

  return (
    <>
      {toDoListItem.todos.map((item: ToDoItemType) => (
        <div key={item.id}>
          <ToDoItem itemData={item} />
        </div>
      ))}
    </>
  );
}
