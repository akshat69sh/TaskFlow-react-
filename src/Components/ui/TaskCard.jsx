import { Plus } from "lucide-react";
import TaskCardHeader from "./TaskCardHeader";
import TaskItem from "./TaskItem";

function TaskCard({ children }) {
  return (
    <div className="bg-white/30 rounded-xl border-white border-[0.5px] p-3 min-w-90 max-h-[calc(100vh-140px)] scrollbar:none [&::-webkit-scrollbar]:hidden  flex flex-col gap-2 overflow-y-auto ">
      {children}
      <div className="flex gap-2 flex-col">
        <TaskCardHeader
         
        />
        <button className="flex justify-center w-full border border-black/20 rounded-2xl p-1 bg-white hover:cursor-pointer">
          <Plus color="#2c2a32" />
          <span>add task</span>
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
}

export default TaskCard;
