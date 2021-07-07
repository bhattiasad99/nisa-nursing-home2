import React from 'react'
import FollowUpCheckUpStatus from './PatientType/FollowUpCheckUpStatus'
import NewRegistrationStatus from './PatientType/NewRegistrationStatus'
import { Grid } from '@material-ui/core'

const PatientType = (props) => {
    return (
        <div style={{ background: 'red' }}>
            patient type
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FollowUpCheckUpStatus />
                </Grid>
                <Grid item xs={12}>
                    <NewRegistrationStatus />
                </Grid>
            </Grid>
        </div>
    )
}

export default PatientType
