import { createContext, useContext, useState } from "react";
import { getTasksRequest, deleteTaskRequest, createTaskRequest } from "../api/tasks.api";

export const TaskContext = createContext()

export const useTasks = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error("useTasks must be used within a TaskContextProvider")
    } else {
        return context
    }
}

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    async function loadTasks() {
        const response = await getTasksRequest()
        setTasks(response.data);
    }

    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id)
            setTasks(tasks.filter(task => task.id !== id))
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }

    const createTask = async (task) => {
        try {
            const response = await createTaskRequest(task)
            console.log(response);
            // setTasks([...tasks, response.data])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
            {children}
        </TaskContext.Provider>
    )
}