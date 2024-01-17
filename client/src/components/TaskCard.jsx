import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

export default function TaskCard({ id, title, description, done, createAt }) {

    const { deleteTask, toggleTaskDone } = useTasks()
    const navigate = useNavigate()

    const handleDone = async (id) => {
        await toggleTaskDone(id)
    }

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>
                {done === true ? "✅" : "❌"}
            </span>
            <span>{createAt}</span>
            <button onClick={() => deleteTask(id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
            <button onClick={() => handleDone(id)}>Toogle Task</button>
        </div>
    )
}