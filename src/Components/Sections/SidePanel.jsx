import React from "react";
import SidePanelButton from "../Ui/SidePanelButton";

function SidePanel() {
  const mainButton = [
    {
      id: 1,
      label: "Home",
      link: "#home",
    },
    {
      id: 2,
      label: "Task List",
      link: "#Task List",
    },
    {
      id: 3,
      label: "Calender",
      link: "#Calender",
    },
  ];
  const labelButton = [
    {
      id: 1,
      label: "High Priority",
      link: "#High Priority",
    },
    {
      id: 2,
      label: "Medium Priority",
      link: "#Medium Priority",
    },
    {
      id: 1,
      label: "Low Priority",
      link: "#Low Priority",
    },
    {
      id: 1,
      label: "On Standby",
      link: "#On Standby",
    },
  ];

  return (
    <div className="w-[15%] hidden  lg:flex flex-col h-screen text-gray-400 border-r-2 p-2.5 border-dashed ">
      <span className="p-3 py-6 text-2xl text-center text-white">TaskFlow</span>

      <div className="flex flex-col my-11 p-2 gap-3 border border-gray-50 border-dashed shadow-2xl rounded-2xl items-center">
        <span>Main</span>
        {mainButton.map((item) => (
          <SidePanelButton key={item.id} label={item.label} href={item.link} />
        ))}
      </div>
      <div className="flex flex-col my-11 p-2 gap-3 border border-gray-50 border-dashed  rounded-2xl items-center">
        <span>Label</span>
        {labelButton.map((item) => (
          <SidePanelButton key={item.key} label={item.label} href={item.link} />
        ))}
      </div>
    </div>
  );
}

export default SidePanel;
