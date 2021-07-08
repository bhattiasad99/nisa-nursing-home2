import React from 'react'
import FollowUpCheckUpStatus from './PatientType/FollowUpCheckUpStatus'
import NewRegistrationStatus from './PatientType/NewRegistrationStatus'
import { Grid } from '@material-ui/core'

const PatientType = (props) => {
    return (

        <Grid container spacing={3}>
            <Grid item xs={12}>
                <FollowUpCheckUpStatus baseStyle={props.baseStyle} />
            </Grid>
            <Grid item xs={12}>
                <NewRegistrationStatus baseStyle={props.baseStyle} />
            </Grid>
        </Grid>
    )
}

export default PatientType
