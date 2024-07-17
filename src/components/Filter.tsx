import { FunnelIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { TodoFilter } from "../types";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
export default function Filter() {
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
              // onChange={(e) => {
              //   setTimeout(() => {
              //     setSearchText(e.target.value);
              //   }, 700);
              // }}
              required
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-1">
        <button
          type="button"
          className={twMerge(
            "w-full rounded-l-lg bg-white/10  py-2 text-xs font-semibold shadow-sm "
          )}
        >
          All
        </button>
        <button
          type="button"
          className={twMerge(
            "w-full  bg-white/10  py-2 text-xs font-semibold shadow-sm "
          )}
        >
          Active
        </button>
        <button
          type="button"
          className={twMerge(
            "w-full rounded-r-lg bg-white/10 py-2 text-xs font-semibold shadow-sm "
          )}
        >
          Completed
        </button>
      </div>
      <div className="flex items-center justify-between gap-1">
        <button
          type="button"
          className={twMerge(
            "w-full rounded-l-lg bg-white/10  py-2 text-xs font-semibold shadow-sm "
          )}
        >
          All
        </button>
        <button
          type="button"
          className={twMerge(
            "w-full  bg-white/10  py-2 text-xs font-semibold shadow-sm "
          )}
        >
          Active
        </button>
        <button
          type="button"
          className={twMerge(
            "w-full rounded-r-lg bg-white/10 py-2 text-xs font-semibold shadow-sm "
          )}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
