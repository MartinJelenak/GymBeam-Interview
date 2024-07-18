import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import ButtonsFilter from "./ButtonsFilter";
import { useFilter } from "../store/fiterStore";
import { ToDoPriority, TodoStatus } from "../types";

export default function Filter() {
  const {
    filterStatus,
    filterPriority,
    filterByText,
    setFilterStatus,
    setFilterPriority,
    setFilterByText,
  } = useFilter();
  console.log(filterStatus, filterPriority, filterByText);

  const handlePriorityClick = (level: ToDoPriority) => {
    if (filterPriority === level) {
      setFilterPriority("none");
    } else {
      setFilterPriority(level);
    }
  };

  const handleStatusClick = (status: TodoStatus) => {
    if (filterStatus === status) {
      setFilterStatus("none");
    } else {
      setFilterStatus(status);
    }
  };

  return (
    <div className="flex flex-col gap-2 text-gray-500">
      <div className="flex items-center justify-between gap-1">
        <div
          className="flex items-center w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-white/10 rounded-lg text-sm focus:ring-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search todos"
              value={filterByText} // Uistite sa, že hodnota je viazaná na stav
              onChange={(e) => {
                // Aktualizujte stav bez zbytočného oneskorenia
                setFilterByText(e.target.value);
              }}
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-4 w-full">
        <div className="flex w-full  ">
          <ButtonsFilter
            onClick={() => handlePriorityClick("low" as ToDoPriority)}
            isActive={filterPriority === "low"}
            className="w-full rounded-l-lg py-2 text-xs font-semibold shadow-sm"
          >
            Low
          </ButtonsFilter>
          <ButtonsFilter
            onClick={() => handlePriorityClick("medium" as ToDoPriority)}
            isActive={filterPriority === "medium"}
            className="w-full py-2 text-xs font-semibold shadow-sm"
          >
            Medium
          </ButtonsFilter>
          <ButtonsFilter
            onClick={() => handlePriorityClick("high" as ToDoPriority)}
            isActive={filterPriority === "high"}
            className="w-full rounded-r-lg py-2 text-xs font-semibold shadow-sm"
          >
            High
          </ButtonsFilter>
        </div>
      </div>
      <div className="flex justify-between gap-4 w-full">
        <div className="flex w-full ">
          <ButtonsFilter
            onClick={() => handleStatusClick("all" as TodoStatus)}
            isActive={filterStatus === "all"}
            className="w-full rounded-l-lg py-2 text-xs font-semibold shadow-sm"
          >
            All
          </ButtonsFilter>
          <ButtonsFilter
            onClick={() => handleStatusClick("active" as TodoStatus)}
            isActive={filterStatus === "active"}
            className="w-full py-2 text-xs font-semibold shadow-sm"
          >
            Active
          </ButtonsFilter>
          <ButtonsFilter
            onClick={() => handleStatusClick("completed" as TodoStatus)}
            isActive={filterStatus === "completed"}
            className="w-full rounded-r-lg py-2 text-xs font-semibold shadow-sm"
          >
            Completed
          </ButtonsFilter>
        </div>
      </div>
    </div>
  );
}
