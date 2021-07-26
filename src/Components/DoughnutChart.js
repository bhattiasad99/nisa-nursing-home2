import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = (props) => {
    const [shiftState, setShiftState] = useState()
    const [labels, setLabels] = useState([])
    const [values, setValues] = useState([])
    useEffect(() => {
        let keysArr = []
        let valsArr = []
        setShiftState(props.currShift)
        const tempState = props.options.find(option => (option.shift === shiftState))
        console.log(tempState)
        if (tempState !== undefined) {
            console.log(tempState.values)
            const entriesArr = Object.entries(tempState.values)
            entriesArr.forEach(entry => keysArr.push(entry[0]))
            entriesArr.forEach(entry => valsArr.push(entry[1]))
            setLabels(keysArr)
            setValues(valsArr)
        }
    }, [shiftState, props.currShift])
    const data = {
        labels: [...labels],
        datasets: [
            {
                label: shiftState,
                data: values,
                backgroundColor: [
                    'grey', 'indigo', 'purple', 'violet', 'blue', 'indigo', 'violet'
                ]
            }
        ]
    }
    console.log(data)
    const options = {
        maintainAspectRadio: false,
    }

    return (
        <div style={
            {
                width: '100%',
                height: '100%',
                padding: '1rem',
            }
        }>
            <Doughnut data={data} options={options} width={10} height={10} />
        </div>
    )
}

export default DoughnutChart
