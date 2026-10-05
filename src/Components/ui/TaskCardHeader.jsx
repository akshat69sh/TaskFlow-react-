import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

function TaskCardHeader({ listTypeHeader }) {
  // const Headertags = [
  //   {
  //     id: 1,
  //     name: "Todo",
  //     count: 12,
  //     badgeBg: "bg-indigo-600",
  //     pillBg: "bg-indigo-100/60",
  //     textColor: "text-indigo-600",
  //     iconColor: "indigo",
  //     classname: "bg-indigo-200"
  //   },
  //   {
  //     id: 2,
  //     name: "Ready",
  //     count: 12,
  //     badgeBg: "bg-amber-500",
  //     pillBg: "bg-amber-100/60",
  //     textColor: "text-amber-600",
  //     iconColor: "orange",
  //     classname: "bg-amber-200"
  //   },
  //   {
  //     id: 3,
  //     name: "Doing",
  //     count: 8,
  //     badgeBg: "bg-emerald-600",
  //     pillBg: "bg-emerald-100/60",
  //     textColor: "text-emerald-600",
  //     iconColor: "green",
  //     classname: "bg-green-200"
  //   },
  //   {
  //     id: 4,
  //     name: "Done",
  //     count: 8,
  //     badgeBg: "bg-green-600",
  //     pillBg: "bg-green-100/60",
  //     textColor: "text-green-600",
  //     iconColor: "green",
  //     classname: "bg-green-300"
  //   },
  // ];
  console.log(listTypeHeader);

  const [headerTitle, setHeaderTitle] = useState(listTypeHeader);
  const [color, setColor] = useState("bg-indigo-200");
  const [badgeBg, setBadgeBg] = useState("bg-indigo-600");
  const [iconColor, setIconColor] = useState("indigo");

  useEffect(() => {
    if (listTypeHeader === "todo") {
      setHeaderTitle("Todo");
      setColor("bg-indigo-200");
      setBadgeBg("bg-indigo-600");
      setIconColor("indigo");
    }else if (listTypeHeader === "ready") {
      setHeaderTitle("Ready");
      setColor("bg-amber-200");
      setBadgeBg("bg-amber-500");
      setIconColor("orange");
    }else if (listTypeHeader === "doing") {
      setHeaderTitle("Doing");
      setColor("bg-emerald-200");
      setBadgeBg("bg-emerald-600");
      setIconColor("green");
    }else if (listTypeHeader === "done") {
      setHeaderTitle("Done");
      setColor("bg-green-300");
      setBadgeBg("bg-green-600");
      setIconColor("green");
    }
  }, [listTypeHeader]);

  return (
    <>
      <div
        className={`flex justify-between p-3 items-center rounded-full  ${color} `}
      >
        <div className="flex gap-2 item-center">
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium text-white ${badgeBg}`}
          >
            {1}
          </span>
          <span className={`text-sm font-medium `}>
            {headerTitle}
          </span>
        </div>
        <button className="text-xl flex items-center hover:cursor-pointer p-0.5">
          <Plus size={18} color={iconColor} />
        </button>
      </div>
    </>
  );
}

export default TaskCardHeader;
