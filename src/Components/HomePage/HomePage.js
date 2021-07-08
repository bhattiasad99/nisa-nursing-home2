import React, { useState, useEffect } from 'react'
import Analytics from './Analytics'
import PatientQueue from './PatientQueue'
import { Grid, makeStyles } from '@material-ui/core'
import Card from './Card.js'

const useStyles = makeStyles(
    {
        wrapper:
        {
            minHeight: '90vh',
            width: '75vw',
        },
        card:
        {
            marginTop: '2rem',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '0px 0px 5px 0px rgb(0 0 0 / 14%)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
            padding: '10px'
        }
    }
)

const mainCards = [
    {
        id: 0,
        props: {
            name: "Patient Queue",
            headings: ['Patient Name', 'ID', 'Queue Number', 'Service', 'Doctor Name'],
        }
    },
    {
        id: 1,
        props: {
            name: 'Print Queue',
            headings: ['Patient Name', 'ID', 'Doctor Name', 'Service', 'Payment Status', 'Discount Approved'],
        }
    }
]

const HomePage = (props) => {
    // const [activePatients, setActivePatients] = useState([])
    // useEffect(() => {
    //     setActivePatients(DUMMY_PATIENTS)
    // }, [activePatients])
    // console.log(activePatients, 'dummy patient data')

    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            {mainCards.map(card => {
                return (
                    <Card styles={classes.card} key={card.id} {...card.props} />
                )
            })}
        </div>
    )
}

export default HomePage
