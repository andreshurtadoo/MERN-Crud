import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

export default function TaskCard({ id, title, description, done, createAt }) {

    const { deleteTask, toggleTaskDone } = useTasks()
    const navigate = useNavigate()

    const handleDone = async (id) => {
        await toggleTaskDone(id)
    }

    return (
        <div className="bg-zinc-700 text-white rounded-md p-4">
            <header className="flex justify-between">
                <h2 className="text-sm font-bold">{title}</h2>
                <span>
                    {done === true ? "✅" : "❌"}
                </span>
            </header>
            <p className="text-xs">{description}</p>
            <span>{createAt}</span>
            <div className="flex gap-x-2">
                <button className="bg-slate-300 px-2 py-1 text-black" onClick={() => deleteTask(id)}>Delete</button>
                <button className="bg-slate-300 px-2 py-1 text-black" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
                <button className="bg-slate-300 px-2 py-1 text-black" onClick={() => handleDone(id)}>Toogle Task</button>
            </div>
        </div>
    )
}