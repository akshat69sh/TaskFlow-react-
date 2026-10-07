import { EllipsisVertical, CalendarFold, ClockFading } from "lucide-react";

function TaskItem() {
  return (
    <>
      <div className="border border-black/10 rounded-2xl bg-white/85 backdrop-blur-xl flex flex-col shadow-sm">
        <div className="flex flex-row justify-between items-center p-2">
          <span className="bg-pink-100 rounded-2xl p-1 text-red-500 text-xs"></span>
          <button className="bg-white/20 rounded-2xl m-1 hover:cursor-pointer p-1">
            <EllipsisVertical size={18} color="#2c2a32" />
          </button>
        </div>
        <div className="flex flex-col min-w-0 p-2">
          <p className="text-black wrap-break-words font-delius font-extrabold text-sm sm:text-base"></p>
          <p className="text-black/60 font-quantico text-xs sm:text-sm"></p>
        </div>
        <div className="flex flex-row gap-3 justify-end p-2 text-xs">
          <span className="flex items-center gap-1">
            <CalendarFold size={16} color="#2c2a32" />
          </span>
          <span className="flex items-center gap-1">
            <ClockFading size={16} color="#2c2a32" />
          </span>
        </div>
      </div>
    </>
  );
}

export default TaskItem;