import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

export default function TaskCard({ id, title, description, done, createAt }) {

    const { deleteTask } = useTasks()
    const navigate = useNavigate()

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>
                {done === 1 ? "done ✅" : "❌"}
            </span>
            <span>{createAt}</span>
            <button onClick={() => deleteTask(id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        </div>
    )
}