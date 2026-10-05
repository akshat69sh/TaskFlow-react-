import { Plus } from "lucide-react";
import TaskCardHeader from "./TaskCardHeader";
import TaskItem from "./TaskItem";

function TaskCard({ children }) {
  return (
    <div className="bg-white/30 rounded-4xl border-white border-[0.5px] p-3 min-w-90 max-h-[calc(100vh-140px)] scrollbar:none [&::-webkit-scrollbar]:hidden  flex flex-col gap-2 overflow-y-auto ">
      {children}
     
    </div>
  );
}

export default TaskCard;
