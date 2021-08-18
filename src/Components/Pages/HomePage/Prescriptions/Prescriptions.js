import React, { useState, useEffect } from 'react'
import Table from '../../../ui/MaterialTable'

const TABLE_HEADINGS = [
    { title: 'Checkup ID', field: 'checkupId' },
    { title: 'Patient ID', field: 'patientID' },
    { title: 'Queue', field: 'queue' },
    { title: 'Patient Name', field: 'name' },
    { title: 'Doctor`s Name', field: 'doctor' },
    { title: 'Payment Status', field: 'paid' },
    { title: 'Service Category', field: 'service' },
]

const QueueTable = ({ patients }) => {
    const [patientsData, setPatientsData] = useState([])

    useEffect(() => {
        const temp = [...patients]
        const queuedPatients = temp.filter(patient => (patient.awaitingPrescription))
        setPatientsData({
            headings: TABLE_HEADINGS,
            rows: queuedPatients
        })
    }, [patients])
    return (
        <div>
            <Table data={patientsData} />
        </div>
    )
}

export default QueueTable
