import { useEffect, useState } from "react";
import TaskList from "../Components/taskList/TaskList";
import PageHeading from "../Components/ui/PageHeading";
import AddTask from "../Components/ui/AddTask";

function Home() {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const getTaskTodoArray = () => {
    const taskArray = JSON.parse(localStorage.getItem("TaskArray"));
    return taskArray?.filter((task) => task?.status === "todo");
  };

  const getTaskReadyArray = () => {
    const taskArray = JSON.parse(localStorage.getItem("TaskArray"));
    return taskArray?.filter((task) => task?.status === "ready");
  };
    const getTaskDoingArray = () => {
    const taskArray = JSON.parse(localStorage.getItem("TaskArray"));
    return taskArray?.filter((task) => task?.status === "doing");
  };
    const getTaskDoneArray = () => {
    const taskArray = JSON.parse(localStorage.getItem("TaskArray"));
    return taskArray?.filter((task) => task?.status === "done");
  };

  return (
    <div className="w-full h-full relative flex flex-col">
      <PageHeading
        pageName="Home"
        isButtonVisible={true}
        buttonOnClick={() => setIsWindowOpen(true)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mt-5 w-full items-start p-5">
        <TaskList listType="todo" data={getTaskTodoArray()} />
        <TaskList listType="ready" data={getTaskReadyArray()} />
        <TaskList listType="doing" data={getTaskDoingArray()} />
        <TaskList listType="done" data={getTaskDoneArray()} />
      </div>
      {isWindowOpen && <AddTask onClose={() => setIsWindowOpen(false)} />}
    </div>
  );
}

export default Home;

