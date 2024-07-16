import { useQuery } from "@tanstack/react-query";
import { fetchToDoLists } from "../api/api";
import Layout from "./Layout";

export default function LayoutC() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchToDoLists,
  });

  console.log(data);
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Layout data={data} />
    </>
  );
}
