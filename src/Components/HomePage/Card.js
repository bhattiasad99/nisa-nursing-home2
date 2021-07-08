import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

import QueueTable from './QueueTable'

const useStyles = makeStyles(
    {
        heading: {
            fontSize: '1.2rem',
            fontWeight: '500',
            letterSpacing: '2px',

        }
    }
)

const PatientQueue = (props) => {
    const classes = useStyles()
    return (
        <div className={props.styles} >
            {console.log(props)}
            <Typography variant="h6" className={classes.heading}>
                {props.name}
            </Typography>
            <QueueTable />
        </div>
    )
}

export default PatientQueue