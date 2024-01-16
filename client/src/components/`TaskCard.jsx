import { useTasks } from "../context/TaskContext";

export default function TaskCard({ id, title, description, done, createAt }) {

    const { deleteTask } = useTasks()


    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>
                {done === 1 ? "done ✅" : "❌"}
            </span>
            <span>{createAt}</span>
            <button onClick={() => deleteTask(id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}