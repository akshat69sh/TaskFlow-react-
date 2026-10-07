import { useState } from "react";
import TaskList from "../Components/taskList/TaskList";
import PageHeading from "../Components/ui/PageHeading";
import AddTask from "../Components/ui/AddTask";

function Home() {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  return (
    <div className="w-full h-full relative flex flex-col">
      <PageHeading
        pageName="Home"
        isButtonVisible={true}
        buttonOnClick={() => setIsWindowOpen(true)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mt-5 w-full items-start p-5">
        <TaskList listType="todo" />
        <TaskList listType="ready" />
        <TaskList listType="doing" />
        <TaskList listType="done" />
      </div>
      {isWindowOpen && <AddTask onClose={() => setIsWindowOpen(false)} />}
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
