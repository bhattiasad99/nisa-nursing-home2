import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Card from './Card.js'
import FooterLinks from './FooterLinks'

import DUMMY_PATIENTS from '../../globalContent/DummyPatients'

const useStyles = makeStyles(
    {
        wrapper:
        {
            minHeight: '90vh',
            width: '75vw',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'stretch',
            flexDirection: 'column',
        },
        card:
        {
            marginTop: '2rem',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '0px 0px 5px 0px rgb(0 0 0 / 14%)',
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            padding: '0.9rem 10px 0.2rem 10px',

        },
        headingBox: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    }
)



const HomePage = (props) => {
    const [activePatients, setActivePatients] = useState([])


    useEffect(() => {
        setActivePatients(DUMMY_PATIENTS)
    }, [setActivePatients])

    const waitingPatients = activePatients.filter(patient => !patient.checkup)
    const pendingPrescriptions = activePatients.filter(patient => patient.awaitingPrescription)

    const cardData = [
        {
            id: 0,
            props: {
                name: "Checkup Queue",
                headings:
                    [
                        {
                            name: 'Patient Name',
                            shortName: 'name'
                        }, {
                            name: 'patientID',
                            shortName: 'patientID'
                        }, {
                            name: 'Queue Number',
                            shortName: 'queue'
                        }, {
                            name: 'Service',
                            shortName: 'service'
                        }, {
                            name: 'Doctor Name',
                            shortName: 'doctor'
                        }
                    ],
                patientList: waitingPatients,
            }
        },
        {
            id: 1,
            props: {
                name: 'Prescriptions Waiting',
                headings: [{
                    name: 'Patient Name',
                    shortName: 'name'
                }, {
                    name: 'ID',
                    shortName: 'patientID'
                }, {
                    name: 'Doctor Name',
                    shortName: 'doctor'
                }, {
                    name: 'Service',
                    shortName: 'service'
                }, {
                    name: 'Payment Status',
                    shortName: 'paid'
                }, {
                    name: 'Discount Approved',
                    shortName: 'discount'
                }],
                patientList: pendingPrescriptions
            }
        }
    ]

    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            {cardData.map(card => {
                return (
                    <Card styles={classes.card} headingBoxStyle={classes.headingBox} key={card.id} {...card.props} />
                )
            })}
            <FooterLinks cardStyles={classes.card} headingBoxStyle={classes.headingBox} />
        </div>
    )
}

export default HomePage
