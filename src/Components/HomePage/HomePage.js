import React from 'react'
import Analytics from './Analytics'
import PatientQueue from './PatientQueue'
import PrintQueue from './PrintQueue'
import { Grid, makeStyles } from '@material-ui/core'
const useStyles = makeStyles(
    {
        card: {
            marginTop: '2rem',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '0px 0px 5px 0px rgb(0 0 0 / 14%)',
            height: '100%'
        }
    }
)

const HomePage = (props) => {
    const classes = useStyles()

    return (
        <Grid container spacing={3} style={
            {
                minHeight: '90vh'
            }
        }>
            <Grid item xs={12}>
                <PatientQueue baseStyleOfCard={classes.card} />
            </Grid>
            <Grid item xs={12}>
                <PrintQueue baseStyleOfCard={classes.card} />
            </Grid>
            <Grid xs={12} item>
                <Analytics baseStyleOfCard={classes.card} />
            </Grid>
        </Grid >
    )
}

export default HomePage
