// import { Plus } from "lucide-react";
import { useState } from "react";
import TaskList from "../Components/taskList/TaskList";
import PageHeading from "../Components/ui/PageHeading";
import AddTask from "../Components/ui/AddTask";
// import TaskCard from "../Components/ui/TaskCard";
// import TaskCardHeader from "../components/ui/TaskCardHeader";
// import TaskItem from "../components/ui/TaskItem";

function Home() {

  const [isWindowOpen, setIsWindowOpen] = useState(false)

  return (
    <div className="w-full h-full relative">
      <PageHeading
        pageName="Home"
        isButtonVisible={true}
        buttonOnClick={() => setIsWindowOpen(true)}
      />

      <div className="flex gap-5 mt-5 justify-around w-full  items-center  ">
        <TaskList listType="todo" />
        <TaskList listType="ready" />
        <TaskList listType="doing" />
        <TaskList listType="done" />
      </div>
      {isWindowOpen && <AddTask onClose={()=> setIsWindowOpen(false)} />}
    </div>
  );
}

export default Home;

{
  /* <TaskCard>
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
        </TaskCard> */
}
