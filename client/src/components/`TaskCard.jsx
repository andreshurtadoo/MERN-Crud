import { deleteTaskRequest } from "../api/tasks.api"

export default function TaskCard({ id, title, description, done, createAt }) {

    const handleDelete = async (id) => {
        try {
            const response = await deleteTaskRequest(id)
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>
                {done === 1 ? "done ✅" : "❌"}
            </span>
            <span>{createAt}</span>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}