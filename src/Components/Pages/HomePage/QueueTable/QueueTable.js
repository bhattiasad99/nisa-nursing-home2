import React, { useState, useEffect } from 'react'
import DUMMY_PATIENTS from '../../../../globalContent/DummyPatients'

// 2 problems: 
// // weird harkatein by the console logging shit
// // in material table content not rendering

const QueueTable = ({ headings }) => {
    const [patients, setPatients] = useState()
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        setPatients(DUMMY_PATIENTS)
        addTableData()
    }, [DUMMY_PATIENTS, patients])

    const tempPatientData = {}
    const tempTableData = [...tableData]
    console.log([tableData, patients])

    const addTableData = () => {
        if (patients) {
            patients.map(patient => {
                headings.map(heading => {
                    tempPatientData[heading.field] = patient[heading.field]
                })
                console.log(tempPatientData)
                tempTableData.push(tempPatientData)
                console.log(tempTableData)
                setTableData(tempTableData)
            })
        }
    }

    console.log(tableData)

    // if (patients) {
    //     patients.map((patient, index) => {
    //         headings.map((heading) => {
    //             tempPatientData[heading.field] = patient[heading.field]
    //         })
    //         tempTableData.push(tempPatientData)
    //     })
    // }
    return (
        <div>
            Queue Table
            {/* <TableComp headings={headings} data={tableData} /> */}
        </div>
    )
}

export default QueueTable
