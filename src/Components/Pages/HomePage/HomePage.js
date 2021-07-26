import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Card from './Card.js'
import FooterLinks from './FooterLinks'

import DUMMY_PATIENTS from '../../../globalContent/DummyPatients'
import homePageStyles from './homePageStyles.js'

const useStyles = makeStyles(homePageStyles)

const HomePage = (props) => {
    const [activePatients, setActivePatients] = useState([])

    useEffect(() => {
        setActivePatients(DUMMY_PATIENTS)
    }, [setActivePatients])

    const waitingPatients = activePatients.filter(patient => !patient.checkup)
    const pendingPrescriptions = activePatients.filter(patient => patient.awaitingPrescription)

    const classes = useStyles()

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
