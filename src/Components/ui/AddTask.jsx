import Button from "../../components/ui/Button";
import { Plus } from "lucide-react";

function AddTask({ onClose }) {
  return (
    <div className="w-160 gap-5 bg-white/30 backdrop-blur-md rounded-4xl border border-white/50 p-5 flex flex-col shadow-2xl">
      <textarea
        name="addTask"
        id="addTask"
        className="h-40 w-full rounded-3xl p-5 text-2xl bg-white/80 focus:outline-none"
        placeholder="add task"
      />

      <div className="flex">
        <div>
          <select
            id="priority"
            name="priority"
            defaultValue="normal"
            className="px-4 py-2 rounded-xl bg-white/70 border border-white/60 text-zinc-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
          >
            <option value="urgent">urgent</option>
            <option value="medium">medium</option>
            <option value="normal">normal</option>
          </select>
        </div>
      </div>

      <Button
        buttonIcon={<Plus />}
        buttonText={"Add Task"}
        buttonClass={"bg-blue-500 text-white"}
        buttonOnClick={onClose}
      />
    </div>
  );
}

export default AddTask;
