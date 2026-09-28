import React from "react";
import SidePanelButton from "./SidePanelButton";

function InputTask() {
  return (
    <div className="text-white flex justify-center py-16 gap-5 p-5">
      
      <span className="text-2xl pt-2">TASK :</span>

      <textarea
        className="border border-gray-500 w-[50%] h-48 rounded-2xl p-4 bg-transparent outline-none resize-none "
        placeholder="Enter your task details..."
      />
      <div className="flex flex-col justify-evenly items-center p-2.5">
        <div>
          <span className="text-2xl">Label :</span>
          <select
            className="bg-transparent text-white"
            name="HighPriority"
            id="HighPriority"
          >
            <option className="text-black" value="HighPriority">
              High Priority
            </option>
            <option className="text-black" value="MediumPriority">
              Medium Priority
            </option>
            <option className="text-black" value="LowPriority">
              low Priority
            </option>
            <option className="text-black" value="OnStandby">
              On Standby
            </option>
          </select>
        </div>
        <div className="bg-transparent text-white outline-none [&::-webkit-calendar-picker-indicator]:text-white">
            <span className="text-2xl">Time :</span>
            <input type="time" />
        </div>
        <SidePanelButton label="+" />
      </div>
    </div>
  );
}

export default InputTask;
