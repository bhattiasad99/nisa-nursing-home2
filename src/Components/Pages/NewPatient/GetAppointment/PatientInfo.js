import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import refs from './refs'

const useStyles = makeStyles({
    root: {

    },
    row: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})



const PatientInfo = ({ patient }) => {
    const classes = useStyles()
    console.log(patient)
    return (
        <div className={classes.root}>
            {patient && refs.map(reference => (
                <div className={classes.row}>
                    <span className={classes.headings}>
                        <Typography variant="h6">
                            {reference.label}
                        </Typography>
                    </span>
                    <span className={classes.values}>
                        {patient[reference.ref]}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default PatientInfo
