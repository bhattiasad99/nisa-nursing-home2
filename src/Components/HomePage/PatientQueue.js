import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

import QueueTable from './QueueTable'

const useStyles = makeStyles()

const PatientQueue = (props) => {
    const classes = useStyles()
    return (
        <div className={props.baseStyleOfCard}>
            {console.log(props)}
            <Typography variant="h6">
                {props.name}
            </Typography>
            <QueueTable />
        </div>
    )
}

export default PatientQueue
