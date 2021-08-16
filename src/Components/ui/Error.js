import React from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { FaRegSadCry } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingTop: '10rem'
    },
    message: {
        marginTop: "2rem",
        fontSize: '2rem'
    },
    btn: {
        margintop: '1rem',
        fontSize: '1.5rem'
    }
}))



const Error = ({ code, type, message }) => {
    const classes = useStyles()
    const history = useHistory()
    const clickBtnHandler = e => {
        e.preventDefault()
        history.push('/home')
    }
    return (
        <div className={classes.root}>
            <Typography variant="h4" color="white">
                Error {code}: {type}
            </Typography>
            <Typography variant="body">
                <FaRegSadCry size={100} />
            </Typography>
            <Typography variant="h6" className={classes.message}>
                {message}
            </Typography>
            <Button variant="outlined" color="primary" className={classes.btn} onClick={clickBtnHandler}>Home</Button>
        </div>
    )
}

export default Error

Error.defaultProps = {
    code: '000',
    type: 'No error Shown',
    message: 'No message written'
}