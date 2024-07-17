"use client";
import { useTodoList } from "../../store/dataStore";
import { useModal } from "../../store/useModalStore";
import { ToDoListType } from "../../types";
import { useNavigate } from "react-router-dom";

export default function TodoList({ data }: { data: ToDoListType[] }) {
  const setToDoListItem = useTodoList((state) => state.setToDoListItem);
  const closeSideBar = useModal((state) => state.closeSideBar);
  const navigate = useNavigate();

  function handleClick(item: ToDoListType) {
    setToDoListItem(item);
    closeSideBar();
    navigate(`/list/${item.id}`);
  }

  return (
    <div className="flex flex-col items-start">
      {data.map((item: ToDoListType) => (
        <button
          key={item.id}
          onClick={() => handleClick(item)}
          className="w-full rounded-lg mb-2 bg-gray-200"
        >
          <div className="flex justify-between">
            <div>{item.name}</div>
            <div>{item.todos.length}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
