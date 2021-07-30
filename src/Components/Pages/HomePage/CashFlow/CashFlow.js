import React, { useState, useEffect } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Rows from '../../../ui/Rows'
import TinyButtons from '../../../ui/TinyButtons'

const useStyles = makeStyles({

})

const CashFlow = ({ options, buttonsArr }) => {
    const [shift, setShift] = useState(0)
    const classes = useStyles()
    const switchShiftHandler = e => {
        e.preventDefault()
        setShift(e.target.id)
    }

    return (
        <div>
            <Typography variant="h6">
                {options[shift].shift}
            </Typography>
            <Typography variant="body">
                <Rows content={options[shift]} />
            </Typography>
            <TinyButtons shiftSwitcher={switchShiftHandler} buttons={buttonsArr} />
        </div>
    )
}

export default CashFlow
