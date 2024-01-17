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
            <Formik
                initialValues={task}
                enableReinitialize={true}

                onSubmit={async (values, { resetForm }) => {
                    console.log(values);
                    if (params.id) {
                        await editTask(params.id, values)
                    } else {
                        await createTask(values)
                    }
                    navigate('/')
                    setTask({
                        title: '',
                        description: ''
                    })
                    resetForm()
                }}
            >
                {({ handleChange, handleSubmit, isSubmitting, values }) => (
                    <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10'>
                        <h1 className='text-xl font-bold uppercase text-center'>{params.id ? 'Edit Task' : 'Create Task'}</h1>

                        <label className='block'>Title</label>
                        <input
                            type="text"
                            name='title'
                            placeholder='Writhe a title'
                            onChange={handleChange}
                            value={values.title}
                            className='px-2 py-1 rounded-sm w-full'
                        />

                        <label className='block'>Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            placeholder='Write a description'
                            onChange={handleChange}
                            value={values.description}
                            className='px-2 py-1 rounded-sm w-full'
                        ></textarea>

                        <button type="submit" disabled={isSubmitting} className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md'>
                            {isSubmitting ? 'Saving...' : 'Save'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
