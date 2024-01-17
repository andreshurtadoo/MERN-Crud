import { useEffect } from "react"
import TaskCard from "../components/TaskCard"
import { useTasks } from "../context/TaskContext"

export default function TasksPage() {

    const { tasks, loadTasks } = useTasks()

    useEffect(() => {
        loadTasks()
    }, [])

    function renderMain() {
        if (tasks.length === 0) return <h2>Not Tasks Yet</h2>
        return tasks.map(task => <TaskCard {...task} key={task.id} />)
    }

    return (
        <div>
            <h1 className="text-5xl text-white font-bold text-center py-6">Tasks</h1>
            <div className="grid grid-cols-3 gap-2">
                {renderMain()}
            </div>
        </div>
    )
}
