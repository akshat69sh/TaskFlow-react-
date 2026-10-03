import { Plus } from "lucide-react"

function TaskCardHeader({count ,name , className , }) {
    return (
        <>
            <div className={`flex justify-between py-2 px-1 items-center rounded-full  ${className} ` }>
                <div className="flex gap-1 items-center">
                    <span className={`rounded-full px-1 text-white bg-violet-400 `}>{count}</span>
                <span>{name}</span>
                </div>
                <button className=" text-4xl flex items-center hover:cursor-pointer px-1.5" ><Plus color="#a78bfa" /></button>
            </div>
        </>
    )
}

export default TaskCardHeader
