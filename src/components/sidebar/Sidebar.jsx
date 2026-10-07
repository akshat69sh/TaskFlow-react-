import { NavLink } from "react-router-dom";
import {
  UserPen,
  Home,
  UserGroup,
  ClipboardPlus,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-64 shrink-0 rounded-3xl p-3 m-3 gap-5 bg-white/30  shadow-sm border-white border-[0.5px] hidden  md:flex flex-col justify-start items-center">
      <div className="p-3 ">
        <span className="flex items-center justify-center text-3xl font-extrabold font-stretch-50% font-mono">
          Taskflow
        </span>
      </div>
      <div className="flex flex-col w-full justify-between h-full">
        <div className="flex items-center justify-between flex-col w-full gap-3">
          <NavLink
            to="/"
            className="flex flex-row justify-center item w-full border border-white rounded-2xl p-2 hover:bg-blue-500 shadow-2xl backdrop-blur-2xl shadow-black/60 "
          >
            <div className="flex flex-row justify-center gap-5 items-center w-full shadow-l backdrop-blur-l">
              <Home size={25} strokeWidth={1.5} />
              <span className="text-xl font-Acme">Home</span>
            </div>
          </NavLink>

          <NavLink
            to="/profile"
            className="flex flex-row justify-evenly w-full border border-white rounded-2xl p-2 hover:bg-blue-500 shadow-2xl backdrop-blur-2xl shadow-black/60 "
          >
            <div className=" flex flex-row justify-center gap-5 items-center w-full shadow-l backdrop-blur-l ">
              <UserPen size={25} strokeWidth={1.5} />
              <span className="text-xl font-Acme">Profile</span>
            </div>
          </NavLink>
        </div>
        <div className="flex flex-col justify-evenly p-2.5 h-fit w-full gap-3 font-Acme  ">
          <NavLink to="/team">
            <div className="flex w-full bg-transparent gap-2 items-center    ">
              <UserGroup size={20} strokeWidth={1.5} />
              <span className="text-lg">Team</span>
            </div>
          </NavLink>
          <NavLink to="/report">
            <div className="flex w-full bg-transparent gap-2 items-center  ">
              <ClipboardPlus size={20} strokeWidth={1.5} />
              <span className="text-lg">Report</span>
            </div>
          </NavLink>
          <NavLink to="/settings">
            <div className="flex w-full bg-transparent gap-2 items-center">
              <Settings size={20} strokeWidth={1.5} />
              <span className="text-lg">Settings</span>
            </div>
          </NavLink>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;