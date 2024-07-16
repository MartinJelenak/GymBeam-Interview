import ContainerBox from "./ContainerBox";
import CreateTask from "./CreateTask";
export default function ToDoItemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-y-0  flex flex-col lg:flex-row p-4 w-full gap-4 lg:pl-72 ">
      <ContainerBox className="w-full max-w-full mt-[58px] lg:mt-0 overflow-auto p-0 lg:ml-4">
        {children}
      </ContainerBox>
      <ContainerBox className="w-full hidden lg:block auto-cols-max">
        <CreateTask />
      </ContainerBox>
    </div>
  );
}
