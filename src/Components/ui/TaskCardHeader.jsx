import { Plus } from "lucide-react";

function TaskCardHeader() {
  const Headertags = [
    {
      id: 1,
      name: "Todo",
      count: 12,
      badgeBg: "bg-indigo-600",
      pillBg: "bg-indigo-100/60",
      textColor: "text-indigo-600",
      iconColor: "indigo",
      classname: "bg-indigo-200"
    },
    {
      id: 2,
      name: "Ready",
      count: 12,
      badgeBg: "bg-amber-500",
      pillBg: "bg-amber-100/60",
      textColor: "text-amber-600",
      iconColor: "orange",
      classname: "bg-amber-200"
    },
    {
      id: 3,
      name: "Doing",
      count: 8,
      badgeBg: "bg-emerald-600",
      pillBg: "bg-emerald-100/60",
      textColor: "text-emerald-600",
      iconColor: "green",
      classname: "bg-green-200"
    },
    {
      id: 4,
      name: "Done",
      count: 8,
      badgeBg: "bg-green-600",
      pillBg: "bg-green-100/60",
      textColor: "text-green-600",
      iconColor: "green",
      classname: "bg-green-300"
    },
  ];

  return (
    <>
      {Headertags.map((item) => (
        <div
          key={item.id}
          className={`flex justify-between py-2 px-1 items-center rounded-full  ${item.classname} `}
        >
          <div className="flex gap-2 item-center">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium text-white ${item.badgeBg}`}
            >
              {item.count}
            </span>
            <span className={`text-sm font-medium ${item.textColor}`}>{item.name}</span>
          </div>
          <button className="text-xl flex items-center hover:cursor-pointer p-0.5">
            <Plus size={18} color={item.iconColor} />
          </button>
        </div>
      ))}
    </>
  );
}

export default TaskCardHeader;
