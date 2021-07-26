import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
    {
        card: {
            marginTop: '2rem',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '0px 0px 5px 0px rgb(0 0 0 / 14%)',
            padding: '0.9rem 10px 0.2rem 10px',
            width: '90%',
        }
    }
)

const CardStyle = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default CardStyle
