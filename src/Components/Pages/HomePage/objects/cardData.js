import styles from './individualCardStyles.module.css'

import CashFlow from '../CashFlow/CashFlow'
import CheckupTypes from '../CheckupTypes/CheckupTypes'
import PatientTypes from '../PatientTypes/PatientTypes'
import QueueTable from '../QueueTable/QueueTable'

import cashFlowData from '../CashFlow/objects/cashFlowData'
import checkuptypesData from '../CheckupTypes/objects/checkupTypesData'
import patientTypesData from '../PatientTypes/objects/patientTypesData'
import queueTableData from '../QueueTable/objects/queueTableData'

const buttonsArr = [{ id: 0, name: 'Current' }, { id: 1, name: '24 Hours' }]

const cards = [
    {
        name: 'queue-table',
        heading: 'Queue Table',
        width: 12,
        content: <QueueTable {...queueTableData} />,
        styles: styles.gridQueueTable,
    },
    {
        name: 'prescriptions',
        heading: 'Prescriptions',
        width: 12,
        content: 'Prescriptions',
        styles: styles.gridPrescriptions,
    },
    {
        name: 'cash-flow',
        heading: 'Cash Flow',
        width: 4,
        content: <CashFlow {...cashFlowData} buttonsArr={buttonsArr} />,
        styles: styles.cashFlow,
    },
    {
        name: 'checkup-types',
        heading: 'Checkup Types',
        width: 4,
        content: <CheckupTypes {...checkuptypesData} buttonsArr={buttonsArr} />,
        styles: styles.checkUpTypes,
    },
    {
        name: 'patient-types',
        heading: 'Patient Types',
        width: 4,
        content: <PatientTypes {...patientTypesData} buttonsArr={buttonsArr} />,
        styles: styles.patientTypes,
    },

]
export default cards