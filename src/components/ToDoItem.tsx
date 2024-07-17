"use client";
import { ToDoItemType } from "../types";
import { TrashIcon } from "@heroicons/react/24/outline";
// import updateTodoCompleted from "../api/api";
import ContainerBox from "./ContainerBox";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

interface ToDoItemProps {
  itemData: ToDoItemType;
  handleCompleteToDo: (
    todoListId: string,
    todoId: string,
    completed: boolean
  ) => void;
  handleDeleteToDo: (todoListId: string, todoId: string) => void;
  editButtonHanler: (itemData: ToDoItemType) => void;
}

export default function ToDoItem({
  itemData,
  handleCompleteToDo,
  handleDeleteToDo,
  editButtonHanler,
}: ToDoItemProps) {
  const {
    id,
    title,
    completed,
    todoListId,
    deadLine,
    createdAt,
    tags,
    priority,
  } = itemData;
  console.log(todoListId);

  return (
    <ContainerBox className="p-0 mb-4 rounded-xl">
      <div className=" bg-opacity-10 p-2 px-2 ">
        <fieldset>
          <legend className="sr-only">Notifications</legend>
          <div className="space-y-5 ">
            <div className="relative flex">
              <div className="flex flex-col w-[20px] justify-between items-center">
                <input
                  id={`todo-item-${id}`}
                  aria-describedby={`todo-item-desc-${id}`}
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded custom-checkbox "
                  checked={completed}
                  onChange={() =>
                    handleCompleteToDo(todoListId, id, !completed)
                  }
                />
                {priority === "high" ? (
                  <div>
                    <ChevronDoubleUpIcon className="h-5 w-5 text-red-400" />
                  </div>
                ) : priority === "medium" ? (
                  <div>
                    <ChevronUpIcon className="h-5 w-5 text-orange-400" />
                  </div>
                ) : (
                  <> </>
                )}
              </div>
              <div className="ml-3 text-sm leading-6 w-full">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <span>{title}</span>
                    <button
                      type="button"
                      className="inline-flex rounded-md  "
                      onClick={() => handleDeleteToDo(todoListId, id)}
                    >
                      <span className="sr-only">Close</span>
                      <TrashIcon className="h-5 w-5  hover:text-gray-800 focus:text-gray-200" />
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      {tags.map(
                        (tag, index) =>
                          index < 3 && (
                            <span
                              key={index}
                              className="text-xs text-gray-400 loadinf mr-2"
                            >
                              {tag}
                            </span>
                          )
                      )}
                    </div>
                    <button
                      type="button"
                      className="rounded-md  flex items-end"
                      onClick={() => editButtonHanler(itemData)}
                    >
                      <span className="sr-only">Close</span>
                      <TrashIcon className="h-5 w-5  hover:text-gray-800 focus:text-gray-200" />
                    </button>
                  </div>
                </div>
                <p id="comments-description" className=""></p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </ContainerBox>
  );
}
