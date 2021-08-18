import React, { useState, useEffect } from 'react'
import data from '../globalContent/dummyRegistrations'
import Table from './ui/MaterialTable'

const Test = (props) => {
    const [patients, setPatients] = useState([])
    useEffect(() => {
        setPatients(data)
    }, [data])
    return (
        <div>
            <Table data={patients} />
        </div>
    )
}

export default Test
