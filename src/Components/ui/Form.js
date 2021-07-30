import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    content: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'find',
        margin: '1rem',
    }
})

const Form = ({ children }) => {
    const classes = useStyles()
    return (
        <div className={classes.content}>
            {children}
        </div>
    )
}

export default Form
