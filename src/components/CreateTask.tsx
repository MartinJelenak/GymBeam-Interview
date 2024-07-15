import ButtonAction from "./ButtonAction";

export default function CreateTask() {
  return (
    <form
      className="sm:col-span-3 dark:text-gray-400 text-gray-800"
      action="submit"
    >
      <label htmlFor="task" className="block text-sm font-medium leading-6 ">
        Task
      </label>
      <div className="mt-2">
        <input
          id="task"
          name="task"
          type="text"
          className="p-4 block w-full  dark:bg-neutral-800 border-0 py-1.5 shadow-sm ring-1 ring-inset dark:ring-zinc-700 ring-zinc-300 focus:ring-inset rounded-full sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex justify-end">
        <ButtonAction variant="primary" className="mt-4" type="submit">
          Add Task
        </ButtonAction>
      </div>
    </form>
  );
}
