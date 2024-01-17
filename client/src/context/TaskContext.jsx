import { createContext, useContext, useState } from "react";
import { getTasksRequest, deleteTaskRequest, createTaskRequest, getTaskRequest, editTaskRequest } from "../api/tasks.api";

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

    const loadTasks = async () => {
        try {
            const response = await getTasksRequest()
            setTasks(response.data)
        } catch (error) {
            console.error(error)
        }
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

    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id)
            console.log(response);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    const editTask = async (id, newTask) => {
        try {
            const response = await editTaskRequest(id, newTask)
            return response
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask, getTask, editTask }}>
            {children}
        </TaskContext.Provider>
    )
}