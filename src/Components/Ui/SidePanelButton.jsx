import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function SidePanelButton({ label, to }) {
  return (
    <NavLink
      className="flex items-center w-full justify-between rounded-lg px-3 py-2 transition-all bg-transparent text-white hover:bg-linear-to-t hover:from-[#624cd3] shadow-2xl hover:to-[#4636b8]"
      to={to}
    >
      <span>{label}</span>
      <ChevronRight size={18} />
    </NavLink>
  );
}

export default SidePanelButton;
