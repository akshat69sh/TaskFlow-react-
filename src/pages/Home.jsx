// import { Plus } from "lucide-react";
import TaskList from "../components/taskList/TaskList";
import PageHeading from "../components/ui/PageHeading";
// import TaskCard from "../Components/ui/TaskCard";
// import TaskCardHeader from "../components/ui/TaskCardHeader";
// import TaskItem from "../components/ui/TaskItem";

function Home() {
  return (
    <div className="w-full h-full">
      <PageHeading pageName="Home" isButtonVisible={true} />

      <div className="flex gap-5 mt-5 justify-around w-full  items-center  ">
        

        <TaskList listType="todo"  />
        <TaskList listType="ready"  />
        <TaskList listType="doing"  />
        <TaskList listType="done"  />
        
      </div>
    </div>
  );
}

export default Home;


{/* <TaskCard>
          <div className="flex gap-2 flex-col">
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
          </div>
        </TaskCard> */}