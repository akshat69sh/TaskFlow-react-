import { NavLink } from "react-router-dom";
import { BellRing, MessageSquareText } from "lucide-react";

function Header() {
  return (
    <>
      <div className="w-full p-4 rounded-3xl px-4 sm:px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-3 bg-white/10 border border-white">
        <span className="text-black text-xl sm:text-2xl font-medium font-Acme text-center md:text-left">
          Hi, Jayesh Puri Goswami
        </span>
        <div className="flex w-full md:w-auto justify-between md:justify-evenly items-center gap-3 sm:gap-5">
          <input
            className="bg-white rounded-2xl text-black font-medium px-3 py-1 font-Acme w-full md:w-auto outline-none"
            type="text"
            placeholder="Search"
          />
          <div className="flex items-center gap-3 shrink-0">
            <NavLink to="/notifications">
              <span>
                <BellRing size={25} strokeWidth={1.75} color="white" />
              </span>
            </NavLink>
            <NavLink to="/messages">
              <span>
                <MessageSquareText size={25} strokeWidth={1.75} color="white" />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;