import React from "react";

function ListPreveiw() {
  return (
    <div className="flex flex-row w-full lg:w-[50%] h-36 text-white border border-dashed rounded-2xl  px-7 py-3 justify-between">
      <div className="w-[50%]">
        <span>Task :</span>
        <p></p>
      </div>
      <div className="w-[50%] flex flex-col h-full">
        <div className="h-[50%]">
          <span>time :</span>
          <span></span>
        </div >
        <div className="h-[50%]">
          <span>Label :</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default ListPreveiw;
