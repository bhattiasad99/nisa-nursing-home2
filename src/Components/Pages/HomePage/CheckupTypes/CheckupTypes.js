import React, { useState } from 'react'
import TinyButtons from '../../../ui/TinyButtons'
import Doughnut from '../../../ui/Doughnut'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
    {

    }
)

const CheckupTypes = ({ options, buttonsArr }) => {
    const [shift, setShift] = useState(0)
    const classes = useStyles()
    const switchShiftHandler = e => {
        e.preventDefault()
        setShift(e.target.id)
    }
    return (
        <div>
            {/* doughnut */}
            <Typography variant="h6">
                {options[shift].shift}
            </Typography>
            <Doughnut content={options[shift]} />
            <TinyButtons shiftSwitcher={switchShiftHandler} buttons={buttonsArr} />
        </div>
    )
}

export default CheckupTypes
