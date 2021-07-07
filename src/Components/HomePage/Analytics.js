import React from 'react'
import CashFlowStatus from './AnalyticsSubSections/CashFlowStatus'
import CheckupType from './AnalyticsSubSections/CheckupType'
import PatientType from './AnalyticsSubSections/PatientType'
import DailyIncome from './AnalyticsSubSections/DailyIncome'

import { makeStyles, Grid } from '@material-ui/core'


const useStyles = makeStyles(
    {

    }
)

const Analytics = (props) => {
    const classes = useStyles()
    return (
        <section className={classes.analytics}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <CashFlowStatus baseStyle={props.baseStyleOfCard} />
                </Grid>
                {/* pie chart of consult, indoor and normal checkup */}
                <Grid item xs={3}>
                    <CheckupType baseStyle={props.baseStyleOfCard} />
                </Grid>
                {/* flex list of new registrations and follow ups */}
                <Grid item xs={3} baseStyle={props.baseStyleOfCard}>
                    <PatientType />
                </Grid>
                <Grid item xs={3} baseStyle={props.baseStyleOfCard}>
                    <DailyIncome />
                </Grid>
            </Grid>
        </section>
    )
}

export default Analytics
