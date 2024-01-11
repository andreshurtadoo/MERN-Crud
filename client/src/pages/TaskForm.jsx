import { Formik, Form } from 'formik'
import { createTaskRequest } from '../api/tasks.api';

export default function TaskForm() {
    return (
        <div>
            <h1>Formik</h1>
            <Formik
                initialValues={{ title: '', description: '' }}

                onSubmit={async (values, { resetForm }) => {
                    console.log(values);
                    try {
                        const response = await createTaskRequest(values)
                        console.log(response);
                        resetForm()
                    } catch (error) {
                        console.error(error)
                    }
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
