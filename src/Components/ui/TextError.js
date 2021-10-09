import React from 'react'
import useStyles from './TextError.style'

const TextError = ({ children }) => {
    const classes = useStyles()
    return (
        <div className={classes.error}>
            {children}
        </div>
    )
}

export default TextError
