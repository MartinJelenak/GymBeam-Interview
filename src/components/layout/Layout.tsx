import DesctopSideBar from "./DesctopSideBar";
import MobilHeader from "./MobilHeader";
import MobileSideBar from "./MobileSideBar";
import TodoList from "./TodoList";
import { ToDoListType } from "../../types";
import { Routes, Route } from "react-router-dom";
import ToDoItemC from "../ToDoItemC";
import ToDoItemLayout from "./ToDoItemLayout";
import CreateTaskModal from "../CreateTaskModal";

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
      <CreateTaskModal />
    </>
  );
}
