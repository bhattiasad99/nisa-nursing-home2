import React, { useState, useEffect } from 'react'
import Card from '../../../ui/Card'
import form_data from './form_data'
import useStyles from './Registration.style'
import TextField from '@material-ui/core/TextField';
import Form from '../../../ui/Form'
import DropDown from '../../../ui/DropDown'
import BtnList from '../../../ui/BtnList'
import { useHistory } from 'react-router-dom'


const Testing = (props) => {
    const [formData, setformData] = useState(
        {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            city: '',
            gender: '',
            timeOfReg: '',
            cnic: '',
            biometric: '',
        }
    )
    useEffect(() => {

    }, [])
    let history = useHistory()
    const changeValueHandler = (e, obj) => {
        let temp = { ...formData }
        temp[obj.ref] = e.target.value
        setformData(temp)
    }
    const buttons = [
        {
            id: 'primary',
            name: 'Register',
            action: () => { console.log('Register', formData) }
        },
        {
            id: 'secondary',
            name: 'Cancel',
            action: () => {
                history.push('/home')
            }
        }]

    const classes = useStyles()
    return (
        <div style={{ marginTop: '1rem' }}>
            <Card heading="Register New Patient">
                <Form>
                    {Object.values(form_data).map(form_element => {
                        if (form_element.show) {
                            if (form_element.type === 'drop-down') {
                                return (
                                    <DropDown {...form_element.props} />
                                )
                            } else {
                                return (
                                    <TextField
                                        onChange={(event) => changeValueHandler(event, form_element)}
                                        id="outlined-basic"
                                        className={classes.inputField}
                                        label={form_element.label}
                                        variant="outlined"
                                        required={form_element.required}
                                    />
                                )
                            }
                        }
                    })}
                </Form>
                <BtnList
                    btnPrimary={buttons.find(button => button.id === 'primary').name}
                    btnSecondary={buttons.find(button => button.id === 'secondary').name}
                    primaryAction={buttons.find(button => button.id === 'primary').action}
                    secondaryAction={buttons.find(button => button.id === 'secondary').action}
                />
            </Card>
        </div>
    )
}

export default Testing
