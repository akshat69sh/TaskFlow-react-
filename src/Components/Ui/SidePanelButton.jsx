import React from 'react'
import {  NavLink } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

function SidePanelButton({label,href}) {
    return (
        <NavLink 
        to={href}
        className={({isActive}) =>
            `flex items-center w-full justify-between rounded-lg px-3 py-2 transition-all ${
                isActive
                ? "bg-transparent text-white hover:bg-linear-to-t hover:from-[#624cd3] shadow-2xl hover:to-[#4636b8]"
                : "text-white hover:bg-linear-to-t hover:from-blue-200 hover:to-cyan-700 hover:text-white shadow-2xl"
            }`
    }
        >
        <span>{label}</span>
        <ChevronRight size={18} />
        </NavLink>
    )
}

export default SidePanelButton
