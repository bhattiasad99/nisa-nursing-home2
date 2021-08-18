import React from 'react'
import Card from '../../ui/Card'
import useStyles from './HomePage.styles.js'
import Grid from '../../ui/GridComp/GridComp'

import APPOINTMENTS from '../../../globalContent/DummyPatients'

import styles from './objects/individualCardStyles.module.css'

import CashFlow from './CashFlow/CashFlow'
import CheckupTypes from './CheckupTypes/CheckupTypes'
import PatientTypes from './PatientTypes/PatientTypes'
import QueueTable from './QueueTable/QueueTable'
import Prescriptions from './Prescriptions/Prescriptions'

import cashFlowData from './CashFlow/objects/cashFlowData'
import checkuptypesData from './CheckupTypes/objects/checkupTypesData'
import patientTypesData from './PatientTypes/objects/patientTypesData'

const HomePage = props => {
    const classes = useStyles()
    const buttonsArr = [{ id: 0, name: 'Current' }, { id: 1, name: '24 Hours' }]
    return (
        <div>
            <Grid container style={{ padding: '1rem' }}>
                <Grid item xs={12}>
                    <div className={styles.bigCard}>
                        <Card heading='Queue Table'>
                            <QueueTable patients={APPOINTMENTS} />
                        </Card>
                    </div>
                </Grid>

                <Grid item xs={12} styles={styles.gridPrescriptions}>
                    <div className={styles.bigCard}>
                        <Card heading='Prescriptions'>
                            <Prescriptions patients={APPOINTMENTS} />
                        </Card>
                    </div>
                </Grid>

                <Grid container xs className={styles.smallCardsContainer} >
                    <Grid item md={4} xs={12} >
                        <div className={styles.smallCard} >
                            <Card heading='Cash Flow'>
                                <CashFlow {...cashFlowData} buttonsArr={buttonsArr} />
                            </Card>
                        </div>
                    </Grid>

                    <Grid item md={4} xs={6}>
                        <div className={styles.smallCard} >
                            <Card heading='Checkup Types'>
                                <CheckupTypes {...checkuptypesData} buttonsArr={buttonsArr} />
                            </Card>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <div className={styles.smallCard}>
                            <Card heading='Patient Types'>
                                <PatientTypes {...patientTypesData} buttonsArr={buttonsArr} />
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default HomePage