"use client";
import { ToDoItemType } from "../types";
import { TrashIcon } from "@heroicons/react/24/outline";
// import updateTodoCompleted from "../api/api";

export default function ToDoItem({ itemData }: { itemData: ToDoItemType }) {
  const { id, title, description, completed, todolistId } = itemData;

  return (
    <div className=" bg-opacity-10 rounded-xl p-4 mb-2 ">
      <fieldset>
        <legend className="sr-only">Notifications</legend>
        <div className="space-y-5 ">
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <style>
                {`
                            .custom-checkbox {
                                /* Přidejte styly pro šedé pozadí a okraj */
                                background-color: #132938; /* šedá barva pozadí (např. gray-100 z Tailwind) */
                                border-color: #4F4F4F; /* šedý okraj (např. gray-300 z Tailwind) */
                              }
                              
                              /* Styly pro zaškrtnutý stav */
                              .custom-checkbox:checked {
                                /* Modré pozadí a okraj pro zaškrtnutý stav */
                                background-color: #2563eb; /* modrá (blue-600) */
                                border-color: #1d4ed8; /* tmavě modrá (blue-700) */
                              }
                        `}
              </style>
              <input
                id={`todo-item-${id}`}
                aria-describedby={`todo-item-desc-${id}`}
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded custom-checkbox "
                checked={completed}
              />
            </div>
            <div className="ml-3 text-sm leading-6 w-full">
              <div>
                <div className="flex justify-between">
                  <label htmlFor="comments" className="font-medium ">
                    {title}
                  </label>
                  <button
                    type="button"
                    className="inline-flex rounded-md  "
                    // onClick={handleDelete}
                  >
                    <span className="sr-only">Close</span>
                    <TrashIcon className="h-5 w-5  hover:text-gray-800 focus:text-gray-200" />
                  </button>
                </div>
              </div>
              <p id="comments-description" className="">
                {description}
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
