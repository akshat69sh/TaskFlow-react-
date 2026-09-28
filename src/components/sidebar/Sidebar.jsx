// import { useState } from "react";
import { Icon } from "lucide-react";
import { NavLink } from "react-router-dom";

// const menuItems = [
//   {
//     id: "initialize",
//     label: "Initialize project",
//     icon: Flag,
//   },
//   {
//     id: "plan",
//     label: "Plan",
//     icon: Layers,
//   },
//   {
//     id: "execute",
//     label: "Execute sprint",
//     icon: ChartNoAxesGantt,
//   },
//   {
//     id: "close",
//     label: "Close and improve",
//     icon: ChartNoAxesGantt,
//   },
//   {
//     id: "operations",
//     label: "Operations manage",
//     icon: SlidersHorizontal,
//   },
// ];

// const bottomMenuItems = [
//   {
//     label: "AI Assistant",
//     icon: Sparkles,
//   },
//   {
//     label: "Team",
//     icon: Users,
//   },
//   {
//     label: "Report",
//     icon: ChartNoAxesColumnIncreasing,
//   },
//   {
//     label: "Settings",
//     icon: Settings,
//   },
// ];

function Sidebar() {
  //   const [activeMenu, setActiveMenu] = useState("initialize");

  return (
    <aside className="h-screen w-[280px] shrink-0 bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <NavLink to="/">
          <button
            type="button"
            className={`flex h-[52px] w-full items-center justify-between rounded-2xl border px-4 transition-all border-blue-500 bg-transparent text-blue-600`}
          >
            <div className="flex items-center gap-3">
              <Icon size={19} strokeWidth={1.7} />

              <span className={`text-[15px] font-medium `}>Home</span>
            </div>
          </button>
        </NavLink>

        <NavLink to="/profile">
          <button
            type="button"
            className={`flex h-[52px] w-full items-center justify-between rounded-2xl border px-4 transition-all border-blue-500 bg-transparent text-blue-600`}
          >
            <div className="flex items-center gap-3">
              <Icon size={19} strokeWidth={1.7} />

              <span className={`text-[15px] font-medium `}>Profile</span>
            </div>
          </button>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
