import { EllipsisVertical ,CalendarFold ,ClockFading} from "lucide-react";

function TaskItem() {
  return (
    <>
      <div className="border border-black/10 rounded-2xl bg-white/85 backdrop-blur:xl flex flex-col">
        <div className="flex flex-row justify-between items-center p-2">
            <span className="bg-pink-100 rounded-2xl p-1 text-red-500">urgent</span>
            <button className="bg-white/20 rounded-2xl m-1 hover:cursor-pointer"><EllipsisVertical color="#2c2a32"  /></button>
        </div>
        <div className="flex flex-col min-w-0 p-2">
            <p className="text-black break-all ">Lorem ipsum dolor sit amet consectetur ggggggggggggggggggggggggggffffffffffffffffffffffffffffffffff .</p>
            <p className="text-black/60"> Lorem ipsum dolor sit amet consectetur s      dddddddddddddddddddddddddddggsagg .</p>
        </div>
        <div className="flex flex-row gap-3 justify-end p-2">
            <span className="flex gap-1"> <CalendarFold color="#2c2a32" /> 12h </span>
            <span className="flex gap-1"> <ClockFading color="#2c2a32" /> 3.30pm</span>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
