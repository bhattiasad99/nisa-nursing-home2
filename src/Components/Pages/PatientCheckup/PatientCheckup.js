import React, { useState, useEffect } from 'react'
import dummyRegistrations from '../../../globalContent/dummyRegistrations'
import { makeStyles, Typography } from '@material-ui/core'
import PatientData from './PatientData'
import SearchBox from './SearchBox'
import Services from './Services'

const useStyles = makeStyles({
    main: {
        minHeight: '65vh',
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2em',
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
    }
})

const PatientCheckup = (props) => {
    const [registered, setRegistered] = useState([])
    const [currPatient, setCurrPatient] = useState({
        biometric: '',
        city: '',
        cnic: '',
        contact: '',
        email: '',
        fullName: '',
        gender: '',
        id: '',
        timeOfReg: '',
    })

    useEffect(() => {
        setRegistered([...dummyRegistrations])
    }, [dummyRegistrations])
    const classes = useStyles()

    const retrievePatientHandler = patient => {
        setCurrPatient(patient)
    }

    return (
        <React.Fragment>
            <div className={classes.heading}>
                <Typography variant="h4">Get Appointment</Typography>
                <Typography varianet="h6" color="secondary">* Only for Triage level 1 patients</Typography>
            </div>
            <div className={classes.main}>
                <SearchBox registeredPatients={registered} onSearchPatient={retrievePatientHandler} />
                <Services />
            </div>
        </React.Fragment >
    )
}

export default PatientCheckup
