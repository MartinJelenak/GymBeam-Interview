import { useFormik } from "formik";
import ButtonAction from "./ButtonAction";

export default function CreateList({
  handleCreateList,
}: {
  handleCreateList: (listName: string) => void;
}) {
  const formik = useFormik({
    initialValues: {
      listName: "",
    },
    onSubmit: (values) => {
      handleCreateList(values.listName);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="sticky ">
      <div className="mt-2 px-3 ">
        <input
          id="listName"
          name="listName"
          type="text"
          autoFocus={true}
          placeholder="List name"
          required
          onChange={formik.handleChange}
          value={formik.values.listName}
          className="p-4 block w-full dark:bg-white/10 border-0 py-1.5 shadow-sm ring-1 ring-inset dark:ring-zinc-700 ring-zinc-300 focus:ring-inset rounded-lg sm:text-sm sm:leading-6"
        />
        <ButtonAction type="submit" variant="primary" className="mt-3 w-full">
          Create
        </ButtonAction>
      </div>
    </form>
  );
}
