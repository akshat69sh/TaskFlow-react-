import { BellRing , MessageSquareText } from "lucide-react"

function Header() {
  return (
    <>
    <div className="w-[98%] p-5 m-3 rounded-3xl px-10 flex justify-between bg-white/10 shadow-2xl backdrop-blur-xl border border-white/30 shadow-black/60">
      <span className="text-black text-lg font-semibold">Hi Jayesh Puri Goswami</span>
      <div className="flex justify-evenly w-[20%] items-center">
        <input className="bg-transparent border rounded-2xl text-black p-1" type="text" placeholder="Search" />
        <span><BellRing size={20} strokeWidth={1.75} /></span>
        <span><MessageSquareText size={20} strokeWidth={1.75} /></span>
      </div>
    </div>
    </>
  )
}

export default Header