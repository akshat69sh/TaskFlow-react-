import { Plus } from "lucide-react";
import TaskCard from "../../Components/ui/TaskCard";
import TaskCardHeader from "../../Components/ui/TaskCardHeader";
import TaskItem from "../../Components/ui/TaskItem";
import AddTask from "../ui/AddTask";
import Button from "../../components/ui/Button";
import { useState } from "react";

function TaskList({ listType, data ,buttonOnClick}) {
  // console.log(data);
const [isWindowOpen, setIsWindowOpen] = useState(false);
  return (
    <>
      <TaskCard>
        <div className="flex gap-2 flex-col w-full">
          <TaskCardHeader listTypeHeader={listType} />
          <Button
              buttonIcon={<Plus />}
              buttonText={"Add Task"}
              buttonClass={"flex justify-center items-center w-full border border-black/20 rounded-2xl p-1.5 sm:p-2 bg-white hover:cursor-pointer font-Acme gap-2 sm:gap-3 text-sm sm:text-base "}
              buttonOnClick={() => setIsWindowOpen(true)}
            />

          {data?.length === 0 ? (
            <div className="flex justify-center items-center ">
              <span className="text-red-50 text-2xl"> No task in this list </span>
            </div>
          ) : (
            data?.map((task) => {
              return <TaskItem task={task} />;
            })
          )}
        </div>
        {isWindowOpen && <AddTask onClose={() => setIsWindowOpen(false)} />}
      </TaskCard>
    </>
  );
}

export default TaskList;
// className="flex justify-center items-center w-full border border-black/20 rounded-2xl p-1.5 sm:p-2 bg-white hover:cursor-pointer font-Acme gap-2 sm:gap-3 text-sm sm:text-base hover:bg-white/80 transition-colors"
