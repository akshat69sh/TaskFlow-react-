import { Plus } from "lucide-react";
import TaskCard from "../ui/TaskCard";
import TaskCardHeader from "../ui/TaskCardHeader";
import TaskItem from "../ui/TaskItem";

function TaskList({ listType }) {
    
  return (
    <>
      <TaskCard>
        <div className="flex gap-2 flex-col">
          <TaskCardHeader listTypeHeader={listType} />
          <button className="flex justify-center w-full border border-black/20 rounded-2xl p-1 bg-white hover:cursor-pointer">
            <Plus color="#2c2a32" />
            <span>add task</span>
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
