import React from 'react'
import { Formik, Form, Field } from 'formik';

const Ondragndrop: React.FC = () => {
    const initialValues = {
        firstname: ''
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    // console.log({ values, actions })
                    console.log({values})
                    actions.setSubmitting(false)
                }}
            >
                <Form>
                    <label htmlFor='firstname'>First Name</label>
                    <Field id="firstname" name="firstname" placeholder="First Name" />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Ondragndrop
