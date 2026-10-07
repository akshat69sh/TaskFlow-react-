import { useState } from "react";
import Button from "../../components/ui/Button";
import {  Plus, X } from "lucide-react";

function AddTask({ onClose }) {

  const [taskTitle , setTaskTitle] =useState("")
  const [taskDescription , setDescription] =useState("")

  const [isError , setIsError ] = useState(false)
  


  const handleAddTask = () => {

    if (!taskTitle) {
      setIsError(true)
      return;
    }


    localStorage.setItem("TaskArray", JSON.stringify([...JSON.parse(localStorage.getItem("TaskArray") || "[]"), { title: taskTitle, description: taskDescription }]))
    onClose()
  }

  return (
    <div className=" fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50 backdrop-blur-sm z-50 ">
      <div className=" relative w-160 gap-5 bg-white/30  rounded-4xl border-[0.5px] border-white p-5 flex flex-col shadow-2xl">

      <div className="absolute -top-3 -right-3">
        <div className="rounded-full bg-white p-2" onClick={onClose}>
          <X />
        </div>
      </div>

        <textarea
          name="addTask"
          id="addTask"
          className={`h-40 w-full rounded-2xl p-5 text-4xl bg-white/80 focus:outline-none font-delius ${isError ? "border-5 border-red-500" : ""}`}
          placeholder="Add task"
          value={taskTitle}
          onChange={(e)=> setTaskTitle(e.target.value)}
        />
        
        {isError && <span className="text-red-500 bg-white p-1 px-5" >There is no title of task kindly add it before saving the task</span>}
        
        
        <textarea 
          name="addTask"
          id="addTask"
          className="h-20 w-full rounded-2xl p-5 text-xl bg-white/80 focus:outline-none font-quantico"
          placeholder="Add description"
        />

        <div className="flex gap-5">
          <div>
            <select
              id="priority"
              name="priority"
              defaultValue="normal"
              className="px-4 py-2 rounded-2xl font-quantico bg-white/70 border border-white/60 text-zinc-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
            >
              <option value="urgent">urgent</option>
              <option value="medium">medium</option>
              <option value="normal">normal</option>
            </select>
          </div>
          <Button
            buttonIcon={<Plus />}
            buttonText={"Add Task"}
            buttonClass={
              "bg-blue-500 text-white font-medium w-full font-delius gap-1 hover:bg-blue-600 rounded-xl"
            }
            buttonOnClick={handleAddTask}
          />
        </div>
      </div>
    </div>
  );
}

export default AddTask;
