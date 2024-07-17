import { useState } from "react";
import { useFormik } from "formik";
import { formatISO } from "date-fns";
import ButtonAction from "./ButtonAction";
import { createToDoValidationSchema } from "../schemas/CreateToDoValidationSchema";
// import ButtonAction from "./ButtonAction";
import ButtonsFilter from "./ButtonsFilter";

interface CreateTaskProps {
  handleCreateToDo(
    todoListId: string,
    title: string,
    deadLine: Date,
    tags: string[],
    priority: string
  ): void;
  todoListId: string;
}

export default function CreateTask({
  handleCreateToDo,
  todoListId,
}: CreateTaskProps) {
  const [activeButton, setActiveButton] = useState<
    "none" | "low" | "medium" | "high"
  >("none");

  const handleButtonClick = (level: "none" | "low" | "medium" | "high") => {
    setActiveButton(level);
  };

  const handleTagsChange = (event: any) => {
    const { value } = event.target;
    formik.setFieldValue(
      "tags",
      value.split(",").map((tag: string) => tag.trim())
    );
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      deadLine: new Date().toISOString(),
      tags: [],
      priority: activeButton,
    },
    // validationSchema: createToDoValidationSchema,
    onSubmit: (values) => {
      console.log("Odosielanie:", values.deadLine);
      handleCreateToDo(
        todoListId,
        values.title,
        new Date(values.deadLine),
        values.tags, // Assuming tags are entered comma-separated
        activeButton
      );
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
            value={formik.values.tags.join(", ")} // Zobrazenie tagov oddelených čiarkou
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
            Add Task
          </ButtonAction>
        </div>
      </form>
    </div>
  );
}
