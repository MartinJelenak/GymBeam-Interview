"use client";
import { useModal } from "../../store/useModalStore";
import { ToDoListType } from "../../types";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function TodoList({ data }: { data: ToDoListType[] }) {
  const closeSideBar = useModal((state) => state.closeSideBar);
  const navigate = useNavigate();
  const { todoId } = useParams<{ todoId: string }>();

  function handleClick(item: ToDoListType) {
    closeSideBar();
    navigate(`/list/${item.id}`);
  }

  if (todoId) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-start">
      {data.map((item: ToDoListType) => (
        <button
          key={item.id}
          onClick={() => handleClick(item)}
          className="w-full rounded-lg mb-2 bg-gray-200 dark:bg-gray-600/50 p-1 px-4 hower:bg-gray-300 dark:hover:bg-gray-600"
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
