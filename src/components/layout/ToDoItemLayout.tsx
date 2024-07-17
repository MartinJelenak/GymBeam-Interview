import ContainerBox from "../ContainerBox";
import CreateTaskC from "../CreateTaskC";
import Filter from "../Filter";
export default function ToDoItemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex flex-col lg:flex-row p-4 w-full gap-4 lg:pl-72 text-black dark:text-white">
      <div className="w-full max-w-full lg:mt-0 p-0 mt-[58px] lg:ml-4">
        {children}
      </div>
      <div className="relative w-full flex flex-col gap-4">
        <ContainerBox className="sticky right-0 w-full hidden lg:block auto-cols-max">
          <Filter />
        </ContainerBox>
        <ContainerBox className="sticky right-0 w-full hidden lg:block auto-cols-max">
          <CreateTaskC />
        </ContainerBox>
      </div>
    </div>
  );
}
