import { Formik, Form } from 'formik'
import { useTasks } from '../context/TaskContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function TaskForm() {

    const { createTask, getTask, editTask } = useTasks()

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const task = await getTask(params.id)
                setTask({
                    title: task.title,
                    description: task.description
                })
                console.log(task);
            }
        }
        loadTask()
    }, [])

    return (
        <div>
            <h1>{params.id ? 'Edit Task' : 'Create Task'}</h1>
            <Formik
                initialValues={task}
                enableReinitialize={true}

                onSubmit={async (values, { resetForm }) => {
                    console.log(values);
                    if (params.id) {
                        await editTask(params.id, values)
                        navigate('/')
                    } else {
                        await createTask(values)
                    }
                    setTask({
                        title: '',
                        description: ''
                    })
                    resetForm()
                }}
            >
                {({ handleChange, handleSubmit, isSubmitting, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input
                            type="text"
                            name='title'
                            placeholder='Writhe a title'
                            onChange={handleChange}
                            value={values.title}
                        />

                        <label>Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            placeholder='Write a description'
                            onChange={handleChange}
                            value={values.description}
                        ></textarea>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Saving...' : 'Save'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
