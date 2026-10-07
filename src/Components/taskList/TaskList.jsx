import { Plus } from "lucide-react";
import TaskCard from "../../Components/ui/TaskCard";
import TaskCardHeader from "../../Components/ui/TaskCardHeader";
import TaskItem from "../../Components/ui/TaskItem";
import AddTask from "../ui/AddTask";

function TaskList({ listType }) {
  return (
    <>
      <TaskCard>
        <div className="flex gap-2 flex-col w-full">
          <TaskCardHeader listTypeHeader={listType} />
          <button className="flex justify-center items-center w-full border border-black/20 rounded-2xl p-1.5 sm:p-2 bg-white hover:cursor-pointer font-Acme gap-2 sm:gap-3 text-sm sm:text-base hover:bg-white/80 transition-colors" >
            <Plus color="#2c2a32" size={18} />
            <span>Add task</span>
          </button>
          
          <TaskItem  />
        </div>
      </TaskCard>
    </>
  );
}

export default TaskList;

{
  /* <div className="flex gap-2 flex-col">
            <TaskCardHeader headerTitle="todo" color="" />
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
          </div> */
}

// const [listTypeName, setListTypeName] = useState(listType)

// const handleListTypeChange = ()=>{

//     if(listType === "todo"){
//         setListTypeName("Todo")
//     }else if ( listType === "ready" ) {
//         setListTypeName("Ready")
//     }else if ( listType === "doing" ) {
//         setListTypeName("Doing")
//     }else if ( listType === "done" ) {
//         setListTypeName("Done")
//     }

//     console.log("this");

// }

// useEffect(() => {
//   handleListTypeChange()
// }, [listType])
