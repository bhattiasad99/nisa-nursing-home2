import React from 'react'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(
    {
        card: {
            marginTop: '2rem',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '0px 0px 5px 0px rgb(0 0 0 / 14%)',
        }
    }
)
const CashFlowStatus = (props) => {
    const classes = useStyles()
    return (
        <div className={props.baseStyle}>
            cash flow status
        </div>
    )
}

export default CashFlowStatus
