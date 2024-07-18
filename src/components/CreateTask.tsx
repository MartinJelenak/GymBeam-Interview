import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { formatISO } from "date-fns";
import ButtonAction from "./ButtonAction";
import { createToDoValidationSchema } from "../schemas/CreateToDoValidationSchema";
import ButtonsFilter from "./ButtonsFilter";
import { useTodoList } from "../store/dataStore";

interface CreateTaskProps {
  handleCreateToDo(
    todoListId: string,
    title: string,
    deadLine: Date,
    tags: string[],
    priority: string
  ): void;
  todoListId: string;
  handleEditToDo: (
    todoListId: string,
    todoId: string,
    title: string,
    deadLine: Date,
    tags: string[],
    priority: string
  ) => void;
}

export default function CreateTask({
  handleCreateToDo,
  todoListId,
  handleEditToDo,
}: CreateTaskProps) {
  const editItemData = useTodoList((state) => state.editItemData);
  const toDoItem = useTodoList((state) => state.toDoItem);

  console.log("premenne", editItemData, toDoItem);

  const [activeButton, setActiveButton] = useState<
    "none" | "low" | "medium" | "high"
  >("none");

  const handleButtonClick = (level: "none" | "low" | "medium" | "high") => {
    setActiveButton(level);
    formik.setFieldValue("priority", level);
  };

  useEffect(() => {
    if (editItemData) {
      setActiveButton(toDoItem.priority);
      formik.setFieldValue("priority", toDoItem.priority);
    }
  }, [editItemData, toDoItem.priority]);

  const handleTagsChange = (event: any) => {
    const { value } = event.target;
    formik.setFieldValue(
      "tags",
      value.split(",").map((tag: string) => tag.trim())
    );
  };

  const formik = useFormik({
    initialValues: {
      title: editItemData ? toDoItem.title : "",
      deadLine: editItemData
        ? formatISO(new Date(toDoItem.deadLine))
        : new Date().toISOString(),
      tags: editItemData ? toDoItem.tags : [],
      priority: editItemData ? toDoItem.priority : "none",
    },
    validationSchema: createToDoValidationSchema,
    onSubmit: (values) => {
      if (editItemData) {
        handleEditToDo(
          todoListId,
          toDoItem.id,
          values.title,
          new Date(values.deadLine),
          values.tags,
          values.priority
        );
      } else {
        handleCreateToDo(
          todoListId,
          values.title,
          new Date(values.deadLine),
          values.tags,
          values.priority
        );
      }
    },
  });

  return (
    <div className="sm:col-span-3 dark:text-gray-400 text-gray-800">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title" className="block text-sm font-medium leading-6">
          Task
        </label>
        <div className="mt-2">
          <input
            id="title"
            name="title"
            type="text"
            autoFocus={true}
            required
            onChange={formik.handleChange}
            value={formik.values.title}
            className="p-4 block w-full dark:bg-white/10 border-0 py-1.5 shadow-sm  dark:ring-zinc-700 ring-zinc-300 focus:ring-inset rounded-lg sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mt-2">
          <input
            id="deadLine"
            name="deadLine"
            type="datetime-local"
            onChange={(e) => formik.setFieldValue("deadLine", e.target.value)}
            value={formik.values.deadLine.substring(0, 16)}
            className="p-4 block w-full dark:bg-white/10 border-0 py-1.5 shadow-sm  dark:ring-zinc-700 ring-zinc-300 focus:ring-inset rounded-lg sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mt-2">
          <input
            id="tags"
            name="tags"
            type="text"
            placeholder="Enter tags separated by commas"
            onChange={handleTagsChange}
            value={formik.values.tags.join(", ")}
            className="p-4 block w-full dark:bg-white/10 border-0 py-1.5 shadow-sm  dark:ring-zinc-700 ring-zinc-300 focus:ring-inset rounded-lg sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex justify-between gap-4 w-full mt-4">
          <div className="flex w-full mt-4 ">
            <ButtonsFilter
              onClick={() => handleButtonClick("low")}
              isActive={activeButton === "low"}
              className="w-full rounded-l-lg py-2 text-xs font-semibold shadow-sm"
            >
              Low
            </ButtonsFilter>
            <ButtonsFilter
              onClick={() => handleButtonClick("medium")}
              isActive={activeButton === "medium"}
              className="w-full py-2 text-xs font-semibold shadow-sm"
            >
              Medium
            </ButtonsFilter>
            <ButtonsFilter
              onClick={() => handleButtonClick("high")}
              isActive={activeButton === "high"}
              className="w-full rounded-r-lg py-2 text-xs font-semibold shadow-sm"
            >
              High
            </ButtonsFilter>
          </div>
          <ButtonAction className="mt-4 w-full" type="submit" variant="primary">
            {editItemData ? "Update Task" : "Add Task"}
          </ButtonAction>
        </div>
      </form>
    </div>
  );
}
