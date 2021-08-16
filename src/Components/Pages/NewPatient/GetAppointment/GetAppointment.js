import React, { useState } from 'react'
import Card from '../../../ui/Card'
import useStyles from './GetAppointment.style'
import GetPatient from './GetPatient'
import PatientInfo from './PatientInfo'

import Registration from '../../NewPatient/Registration/Registration'
import BackDrop from '../../../ui/BackDropComp'

const GetAppointment = (props) => {
    const [patient, setPatient] = useState()
    const classes = useStyles()
    const getPatientHandler = event => {
        console.log(event)
        setPatient(event)
    }
    return (
        <div style={{ paddingTop: '1rem' }} className={classes.root}>
            <div style={{ width: '100%', height: '100%' }}>
                <Card heading="Build an Appointment" showPopUpIcon={false} >
                    <GetPatient getPatient={getPatientHandler} />
                </Card>
            </div>
            <div style={{ width: '100%', height: '100%' }}>
                <Card heading="Patient Details" showPopUpIcon={false} patient={patient} >
                    <PatientInfo patient={patient} />
                </Card>
            </div>
            <BackDrop label={'Register'}>
                <Registration />
            </BackDrop>
        </div>
    )
}

export default GetAppointment
