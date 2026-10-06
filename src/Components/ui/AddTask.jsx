import Button from "../../components/ui/Button";
import { Plus } from "lucide-react";

function AddTask({ onClose }) {
  return (
    <div className="w-160 gap-5 bg-white/30  rounded-4xl border-[0.5px] border-white p-5 flex flex-col shadow-2xl">
      <textarea
        name="addTask"
        id="addTask"
        className="h-40 w-full rounded-2xl p-5 text-4xl bg-white/80 focus:outline-none font-delius"
        placeholder="Add task"
      />
      <textarea
        name="addTask"
        id="addTask"
        className="h-20 w-full rounded-2xl p-5 text-xl bg-white/80 focus:outline-none font-quantico"
        placeholder="Add description"
      />

      <div className="flex gap-5">
        <div>
          <select
            id="priority"
            name="priority"
            defaultValue="normal"
            className="px-4 py-2 rounded-2xl font-quantico bg-white/70 border border-white/60 text-zinc-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
          >
            <option value="urgent">urgent</option>
            <option value="medium">medium</option>
            <option value="normal">normal</option>
          </select>
        </div>
        <Button
        buttonIcon={<Plus />}
        buttonText={"Add Task"}
        buttonClass={"bg-blue-500 text-white font-medium w-full font-delius gap-1 hover:bg-blue-600 rounded-xl"}
        buttonOnClick={onClose}
      />
      </div>

      
    </div>
  );
}

export default AddTask;
