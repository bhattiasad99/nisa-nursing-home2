import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { MdOpenInNew } from 'react-icons/md'
import styles from './PatientData.module.css'
const useStyles = makeStyles({
    container: {
        marginTop: '1rem',
    },
    subHeading: {
        fontSize: '1rem',
    },
    entry: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-around',
    },
    headingContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    }
})

const PatientData = (props) => {
    const classes = useStyles()
    console.log(props)
    return (
        <div style={{ marginBottom: '1.7rem' }}>
            <div className={classes.headingContainer}>
                <Typography variant="h6">Patient:</Typography>
                <MdOpenInNew style={{ color: 'blue' }} className={styles.hoverEffect} />
            </div>
            <Typography variant="body">
                <div className={classes.container}>
                    <div className={classes.entry}>
                        <Typography variant="h6" className={classes.subHeading}>Name: </Typography>
                        <Typography variant="body2">{props.patientDetails.fullName}</Typography>
                    </div>
                    <div className={classes.entry}>
                        <Typography variant="h6" className={classes.subHeading}>ID: </Typography>
                        <Typography variant="body2">{props.patientDetails.id}</Typography>
                    </div>
                </div>
            </Typography>
        </div>
    )
}

export default PatientData
