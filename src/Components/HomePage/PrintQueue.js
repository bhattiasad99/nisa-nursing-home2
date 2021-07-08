import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import QueueTable from './QueueTable'

const useStyles = makeStyles(
    {

    }
)

const PrintQueue = (props) => {
    const classes = useStyles()
    return (
        <div className={props.baseStyleOfCard}>
            <Typography variant="h6" className={classes.marginLeft}>
                Print Queue
            </Typography>
            <QueueTable />
        </div>
    )
}

export default PrintQueue
