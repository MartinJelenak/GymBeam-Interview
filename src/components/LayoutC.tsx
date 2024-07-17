import { useQuery } from "@tanstack/react-query";
import { fetchToDoLists } from "../api/api";
import Layout from "./layout/Layout";

export default function LayoutC() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ToDoLists"],
    queryFn: fetchToDoLists,
  });

  if (error) return <div>Error loading todos.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Layout data={data} />
    </>
  );
}
