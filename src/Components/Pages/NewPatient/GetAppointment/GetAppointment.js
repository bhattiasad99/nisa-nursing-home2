import React, { useState, useEffect } from 'react'
import Card from '../../../ui/Layout/Card/Card'
import useStyles from './GetAppointment.style'
import GetPatient from './GetPatient'
import PatientInfo from './PatientInfo'

import Grid from '../../../ui/Layout/GridComp/GridComp'
import Table from '../../../ui/Table/MaterialTable'
import { Typography, Button } from '@material-ui/core'

import Registration from '../../NewPatient/Registration/Registration'
import BackDrop from '../../../ui/BackDrop/BackDropComp'
import SetAppointment from '../SetAppointment/SetAppointment'

const headings = [
    { title: 'ID', field: 'id' },
    { title: 'Name', field: 'fullName' },
    { title: 'Contact', field: 'contact' },
]

const GetAppointment = (props) => {
    // states
    const [retrievedPatients, setRetrievedPatients] = useState({
        headings: [],
        rows: []
    })
    const [selectedPatient, setSelectedPatient] = useState({})

    // handlers
    const getPatientsHandler = event => {
        const buildObj = {
            headings: headings,
            rows: event
        }
        setRetrievedPatients(buildObj)
    }

    const selectPatientHandler = e => {
        setSelectedPatient(e)
    }
    const classes = useStyles()
    return (
        <div style={{ paddingTop: '1rem' }} className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div style={{ width: '100%', height: '100%', padding: '0.4rem' }}>
                        <Card heading="Search Patient" showPopUpIcon={false} >
                            <GetPatient getPatients={getPatientsHandler} />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ width: '100%', height: '100%', padding: '0.4rem' }}>
                        <Card heading="Patient Details" showPopUpIcon={false}>
                            <PatientInfo patient={selectedPatient} />
                            {(selectedPatient.fullName) && (
                                <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
                                    <BackDrop label={'Set Appointment'}>
                                        <SetAppointment />
                                    </BackDrop>
                                </div>)}
                        </Card>
                    </div>
                </Grid>
                {(retrievedPatients.rows.length > 0) && (<Grid item xs={12}>
                    <Card heading="Patients List" >
                        <Table data={retrievedPatients} getResult={selectPatientHandler} />
                    </Card>
                </Grid>)}
                {(retrievedPatients.rows.length === 0) && (
                    <Typography variant="h4" color="secondary"><div style={{ margin: '1.2rem' }}>No Records Found!</div></Typography>
                )}
            </Grid>
            <BackDrop label={'Register'}>
                <Registration />
            </BackDrop>
        </div>
    )
}

export default GetAppointment
