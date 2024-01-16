import { Formik, Form } from 'formik'
import { useTasks } from '../context/TaskContext';

export default function TaskForm() {

    const { createTask } = useTasks()

    return (
        <div>
            <h1>Formik</h1>
            <Formik
                initialValues={{ title: '', description: '' }}

                onSubmit={async (values, { resetForm }) => {
                    console.log(values);
                    createTask(values)
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
