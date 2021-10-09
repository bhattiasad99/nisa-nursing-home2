import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import CardStyle from '../../ui/Layout/Card/Card'
import TextFieldWithIcon from '../../ui/TextFieldWithIcon'
import PasswordInput from '../../ui/PasswordInput'
import BtnList from '../../ui/BtnList/BtnList'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    heading: {
        margin: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '-webkit-xxx-large',
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    content: {
        minWidth: '23rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '17rem',
        marginBottom: '1rem'
    },
    forgotPassword: {
        marginTop: '1rem',
        fontSize: 'small',
        color: 'purple',
        padding: '0.3rem 1rem',
        borderRadius: '5px',
        '&:hover': {
            cursor: 'pointer'
        }
    }
})


const Login = (props) => {
    const history = useHistory()
    const classes = useStyles()
    const primaryBtnHandler = e => {
        e.preventDefault()
        history.push('/home')
    }

    return (
        <div className={classes.root}>
            <div>
                <Typography variant="h4" className={classes.heading}>
                    Nisa Nursing Home
                </Typography>
                <CardStyle showPopUpIcon={false} heading='Log-In'>
                    <div className={classes.content}>
                        <div className={classes.input}>
                            <TextFieldWithIcon label="User Name" />
                        </div>
                        <div className={classes.input}>
                            <PasswordInput />
                        </div>
                        <BtnList btnPrimary="Login" btnSecondary="Register" primaryAction={primaryBtnHandler} />
                        <button className={classes.forgotPassword}>
                            Forgot your password
                        </button>
                    </div>
                </CardStyle>
            </div>
        </div>
    )
}

export default Login
