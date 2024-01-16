export default function TaskCard({ title, description, done, createAt }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>
                {done === 1 ? "done ✅" : "❌"}
            </span>
            <span>{createAt}</span>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}