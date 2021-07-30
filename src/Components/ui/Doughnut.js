import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles(
    {

    }
)



const DoughnutComp = ({ content }) => {
    const classes = useStyles()
    const data = {
        labels: [...Object.keys(content.values)],
        datasets: [
            {
                data: [...Object.values(content.values)],
                backgroundColor: [
                    '#D4F1F4',
                    '#75E6DA',
                    '#189AB4',
                    '#05445E',
                    '#C3E0E5',
                    '#274472',
                    '#5885AF',
                    '#41729F',
                ],
                labels: 'trying'
            }
        ]
    }
    return (
        <div>
            <div style={
                {
                    width: '100%',
                    height: '100%',
                    padding: '1rem',
                }
            }>
                <Doughnut data={data}
                    height={10}
                    width={10}
                    options={{ maintainAspectRatio: true }} />
            </div>
        </div>
    )
}

export default DoughnutComp
