import DesctopSideBar from "./layout/DesctopSideBar";
import MobilHeader from "./layout/MobilHeader";
import MobileSideBar from "./layout/MobileSideBar";
import TodoList from "./layout/TodoList";
import { ToDoListType } from "../types";
import { Routes, Route } from "react-router-dom";
import ToDoItemC from "./ToDoItemC";
import ToDoItemLayout from "./ToDoItemLayout";

export default function Layout({ data }: { data: ToDoListType[] }) {
  return (
    <>
      <MobilHeader />
      <MobileSideBar>
        <TodoList data={data} />
      </MobileSideBar>
      <DesctopSideBar>
        <TodoList data={data} />
      </DesctopSideBar>
      <ToDoItemLayout>
        <Routes>
          <Route path="/list/:todoId" element={<ToDoItemC />} />
        </Routes>
      </ToDoItemLayout>
    </>
  );
}
