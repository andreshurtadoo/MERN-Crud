import { useEffect, useState } from "react"
import { getTasksRequest } from "../api/tasks.api"
import TaskCard from "../components/`TaskCard"

export default function TasksPage() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const response = await getTasksRequest()
            setTasks(response.data);
        }
        loadTasks()
    }, [])

    function renderMain() {
        if (tasks.length === 0) return <h2>Not Tasks Yet</h2>
        return tasks.map(task => <TaskCard {...task} key={task.id} />)
    }

    return (
        <div>
            <h1>Tasks</h1>
            {renderMain()}
        </div>
    )
}
