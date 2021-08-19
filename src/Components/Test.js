import React, { useState, useEffect } from 'react'
import data from '../globalContent/dummyRegistrations'
import { useFormik } from 'formik'



const Test = (props) => {
    const [init, setInit] = useState({})
    // from props

    const formik = useFormik({
        initialValues: { ...init }
    })

    // from props
    const formData = [
        {
            id: 'name',
            label: 'Name',
            props: {
                type: 'text',
                name: 'name',
                onChange: formik.handleChange,
                value: formik.values.name
            }
        },
        {
            props: {
                type: 'text',
                name: 'email',
                id: 'email',
                label: 'Email',
                onChange: formik.handleChange,
                value: formik.values.email
            }
        },
        {
            id: 'contact',
            label: 'Contact',

            props: {
                type: 'text',
                name: 'contact',
                onChange: formik.handleChange,
                value: formik.values.contact
            }
        }
    ]

    useEffect(() => {
        let temp = {}
        formData.forEach(el => {
            temp = {
                ...temp,
                [el.props.name]: ''
            }
        })
        setInit(temp)
    }, [])


    const submittedBtnHandler = e => {
        e.preventDefault()
        console.log('SUBMITTED', formik.values)
    }

    return (
        <form onSubmit={submittedBtnHandler}>
            {console.log(init)}
            {formData.map(formElement => (
                <React.Fragment key={formElement.id}>
                    <label htmlFor={formElement.id}>{formElement.label}</label>
                    <input {...formElement.props} />
                </React.Fragment>
            ))}
            <button type="submit">hello</button>
        </form>
    )
}

export default Test
