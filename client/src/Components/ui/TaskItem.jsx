import { useState } from "react";
import {
  EllipsisVertical,
  CalendarFold,
  ClockFading,
  Trash,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

function TaskItem({ task, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setShowSubmenu(false);
  };

  return (
    <div className="relative border border-black/10 rounded-2xl bg-white/85 backdrop-blur-xl flex flex-col shadow-sm">
      <div className="flex flex-row justify-between items-center p-2">
        <span className="bg-pink-100 rounded-2xl px-2 py-0.5 text-red-500 text-xs">
          {task?.priority || "medium"}
        </span>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setShowSubmenu(false);
            }}
            className="bg-white/40 hover:bg-white/70 rounded-full p-1 transition-colors cursor-pointer"
          >
            <EllipsisVertical size={18} color="#2c2a32" />
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full mt-1 w-32 bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-lg border border-black/5 z-50">
              {!showSubmenu ? (
                <div className="flex flex-col gap-0.5 text-xs text-[#2c2a32]">
                  <button
                    type="button"
                    onClick={() => {
                      onDelete?.(task.id);
                      handleClose();
                    }}
                    className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <span>Delete</span>
                    <Trash size={14} color="#2c2a32" strokeWidth={1.5} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowSubmenu(true)}
                    className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg hover:bg-black/5 transition-colors"
                  >
                    <span>Add To</span>
                    <ChevronRight size={14} color="#2c2a32" strokeWidth={1.5} />
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col min-w-0 px-2 py-1">
        <p className="text-black wrap-break-words font-delius font-extrabold text-sm sm:text-base">
          {task?.title}
        </p>
        <p className="text-black/60 font-quantico text-xs sm:text-sm">
          {task?.description}
        </p>
      </div>

      <div className="flex flex-row gap-3 justify-end p-2 text-xs">
        <span className="flex items-center gap-1">
          {task?.dateStamp}
          <CalendarFold size={16} color="#2c2a32" />
        </span>
        <span className="flex items-center gap-1">
          {task?.timeStamp}
          <ClockFading size={16} color="#2c2a32" />
        </span>
      </div>
    </div>
  );
}

export default TaskItem;
