import { NavLink } from "react-router-dom";
import { BellRing, MessageSquareText } from "lucide-react";

function Header() {
  return (
    <>
      <div className="w-full p-5 rounded-3xl px-10 flex flex-col justify-center items-center gap-3 md:flex md:flex-row md:justify-between bg-white/10 shadow backdrop-blur-sm border border-white/30">
        <span className="text-black text-lg font-semibold">
          Hi Jayesh Puri Goswami
        </span>
        <div className="flex justify-between md:justify-evenly items-center gap-3">
          <input
            className="bg-transparent border rounded-2xl text-black p-1"
            type="text"
            placeholder="Search"
          />
          <NavLink to="/notifications">
            <span>
              <BellRing size={20} strokeWidth={1.75} />
            </span>
          </NavLink>
          <NavLink to="/messages">
            <span>
              <MessageSquareText size={20} strokeWidth={1.75} />
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
