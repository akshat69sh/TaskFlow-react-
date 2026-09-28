import React from "react";
import ListPreveiw from "../Ui/ListPreveiw";

function TaskList() {
  return (
    <div className="w-full h-full">
      <div className="w-fit h-fit">
        <div className="text-white">
          <h1 className="text-2xl font-bold">Task List</h1>
          <p className="text-gray-400">Your tasks will appear here.</p>
        </div>
      </div>
      <div className="text-white flex items-center justify-center my-5  ">
        <ListPreveiw/>
      </div>
    </div>
  );
}

export default TaskList;
