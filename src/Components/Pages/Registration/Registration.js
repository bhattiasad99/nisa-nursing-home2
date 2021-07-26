import React, { useState, useEffect } from 'react'
import { Grid, TextField, makeStyles, Typography, Button } from '@material-ui/core'
import DropDown from './DropDown'
import { Link, Route, withRouter } from 'react-router-dom'
import styles from './Registration.module.css'
import CardStyle from '../../ui/CardStyle'
const useStyles = makeStyles(
    theme => (
        {
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                },
            },
            textField: {
                width: '95%',
                margin: theme.spacing(1),
            },
            // heading: {
            //     fontWeight: '300',
            //     letterSpacing: '1px',
            //     padding: '1rem',
            // },
            gridContainer: {
                width: '100%',
            },
            buttons: {
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '2rem',
                marginBottom: '2rem'
            }
        }
    )
)
const FORM_INIT = {
    id: {
        ref: 'id',
        value: 0,
        required: true,
        type: 'internal',
        format: 'DDMMYYYY####',

        label: 'ID',
        placeholder: 'id',
    },
    firstName: {
        ref: 'firstName',
        value: '',
        required: true,
        type: 'text',
        format: 'text',
        label: 'First Name',
        placeholder: 'Full Name',
    },
    guardiansirName: {
        ref: 'guardiansirName',
        value: '',
        required: false,
        type: 'text',
        format: 'text',
        label: 'Guardian`s Name',
        placeholder: 'Guardian`s Name',
    },
    email: {
        ref: 'email',
        value: '',
        required: false,
        type: 'e-mail',
        format: 'something@example.com',
        label: 'Email',
        placeholder: 'something@example.com',
    },
    contact: {
        ref: 'contact',
        value: '',
        required: false,
        type: 'text',
        format: ['03xx-xxxxxxx', 'xxxxxxx'],
        label: 'Contact',
        placeholder: '03xx-xxxxxxx',
    },
    city: {
        ref: 'city',
        value: '',
        required: false,
        label: 'City',
        placeholder: 'City',
        type: 'text',
    },
    gender: {
        ref: 'gender',
        props: {
            heading: 'Select Gender',
            values: ['Male', 'Female', 'Other'],
            label: 'Gender',
        },
        required: true,
        type: 'drop-down',
    },
    timeOfReg: {
        ref: 'timeOfReg',
        value: '',
        required: true,
        type: 'internal',
        format: ['DD/MM/YYYY'],
        label: 'Time of Registration',
        placeholder: 'DD/MM/YYYY',
    },
    cnic: {
        ref: 'cnic',
        value: '',
        required: false,
        type: 'text',
        format: '#####-#######-#',
        label: 'CNIC',
        placeholder: '#####-#######-#',
    },
    biometric: {
        ref: 'biometric',
        value: '',
        required: false,
        type: 'biomatric',
        format: '',
        label: 'BIOMETRIC',
        placeholder: 'Biometric',
    },
}

const data = {
    id: 0,
    firstName: '',
    guardiansirName: '',
    email: '',
    contact: '',
    city: '',
    gender: '',
    timeOfReg: '',
    cnic: '',
    biometric: '',
}

const Registration = (props) => {
    console.log('hello', props)
    const [finalData, setFinalData] = useState(data)
    const [values, setValues] = useState({})
    // import ID from backend
    const [id, setId] = useState()
    const classes = useStyles()
    const changeValueHandler = (e) => {
        const tempValues = { ...values }
        tempValues[e.target.id].value = e.target.value
        setValues(tempValues)
    }
    const new_date = new Date()
    useEffect(() => {
        setValues(FORM_INIT)
    }, [values])
    const submitFormHandler = e => {
        e.preventDefault()
        const tempDataValues = { ...finalData }
        const tempValues = { ...values }
        tempValues.id.value++
        tempValues.timeOfReg.value = new Date()
        for (let index in tempValues) {
            tempDataValues[index] = tempValues[index].value
        }
        setFinalData(tempDataValues)
    }

    const cancelBtnHandler = e => {
        e.preventDefault()
        setFinalData(data)
        props.history.push('/home')
    }

    return (
        <form className={classes.root} onSubmit={submitFormHandler} style={{ marginLeft: '2rem', marginTop: '3rem' }}>
            <CardStyle>
                <Typography variant="h4" className={classes.heading}>New Patient</Typography>
                <Grid container className={classes.gridContainer}>
                    {Object.keys(values).map(formElement => {
                        if (values[formElement].type === 'text' || values[formElement].type === 'e-mail') {
                            return (
                                <Grid item xs={6}>
                                    <TextField id={values[formElement].ref} className={classes.textField} variant="outlined" label={values[formElement].label} value={values[formElement].value} placeholder={values[formElement].placeholder} onChange={changeValueHandler} />
                                </Grid>
                            )
                        } if (values[formElement].type === 'drop-down') {
                            return (
                                <Grid item xs={6}>
                                    <DropDown {...values[formElement].props} />
                                </Grid>)
                        }
                    })}
                    <Grid item xs={12} className={classes.buttons}>
                        <Button variant="contained" color="primary" style={{ marginRight: '1rem' }} type='submit' >
                            Register
                        </Button>
                        <Button variant="contained" color="primary" className={styles.btn} onClick={cancelBtnHandler}>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>

            </CardStyle>
        </form>
    )
}

export default withRouter(Registration)
