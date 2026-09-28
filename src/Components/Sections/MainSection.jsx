import React from "react";
import InputTask from "../Ui/InputTask";
import ListPreveiw from "../Ui/ListPreveiw";

function MainSection() {
  return (
    <div className="flex flex-col items-center h-screen ">
      <div className="w-full h-[30%] flex flex-col  ">
        <InputTask />
      </div>
      <div className=" w-full flex flex-col items-center gap-6 flex-1 min-h-0 overflow-y-auto  ">
        <ListPreveiw />
        <ListPreveiw />
        <ListPreveiw />
        <ListPreveiw />
        <ListPreveiw />
        <ListPreveiw />
        <ListPreveiw />
        <ListPreveiw />
        <ListPreveiw />
      </div>
    </div>
  );
}

export default MainSection;
