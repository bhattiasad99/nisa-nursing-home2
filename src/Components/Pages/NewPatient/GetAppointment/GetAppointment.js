import React, { useState } from 'react'
import Card from '../../../ui/Card'
import useStyles from './GetAppointment.style'
import GetPatient from './GetPatient'
import PatientInfo from './PatientInfo'

import Grid from '../../../ui/GridComp/GridComp'

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
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div style={{ width: '100%', height: '100%', padding: '0.4rem' }}>
                        <Card heading="Build an Appointment" showPopUpIcon={false} >
                            <GetPatient getPatient={getPatientHandler} />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ width: '100%', height: '100%', padding: '0.4rem' }}>
                        <Card heading="Patient Details" showPopUpIcon={false} patient={patient} >
                            <PatientInfo patient={patient} />
                        </Card>
                    </div>
                </Grid>
            </Grid>
            <BackDrop label={'Register'}>
                <Registration />
            </BackDrop>
        </div>
    )
}

export default GetAppointment
