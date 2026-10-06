import { NavLink } from "react-router-dom";
import { BellRing, MessageSquareText } from "lucide-react";

function Header() {
  return (
    <>
      <div className="w-full p-4 rounded-3xl px-10 flex flex-col justify-center items-center gap-3 md:flex md:flex-row md:justify-between  bg-white/10 border border-white">
        <span className="text-black text-2xl font-medium font-Acme  ">
          Hi, Jayesh Puri Goswami
        </span>
        <div className="flex justify-between md:justify-evenly items-center gap-5">
          <input
            className="bg-white  rounded-2xl text-black font-medium px-2 py-1 font-Acme"
            type="text"
            placeholder="Search"
          />
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
    </>
  );
}

export default Header;
