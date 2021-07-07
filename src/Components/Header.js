import React, { useState } from 'react'
import classes from './Header.module.css'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

import { FaUserCircle } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

import AppBarSpaceUnder from './ui/AppBarSpaceUnder'

const useStyles = makeStyles(theme => (
    {
        appBar:
        {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.5rem',
            zIndex: '1000'
        },
        options:
        {
            display: 'flex',
            width: '10rem',
            height: '2rem',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        notification:
        {
            top: '0',
            left: '14px',
            position: 'absolute',
            background: 'red',
            fontSize: '15px',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
        }
    }
)
)

const Header = (props) => {
    const styles = useStyles()
    const [notifications, setNotifications] = useState(3)


    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar className={styles.appBar}>
                    <Typography variant="h4" >Nisa Nursing Home</Typography>
                    <div className={styles.options}>
                        <Typography variant="h5" className={styles.iconStyle} >
                            <span className={classes.iconSpan}>
                                <FaUserCircle />
                            </span>
                        </Typography>
                        <Typography variant="h5" className={styles.iconStyle} style={
                            {
                                position: 'relative'
                            }
                        }>
                            <span className={classes.iconSpan}>
                                <MdNotifications size='27px' />
                                {notifications > 0 && <span className={styles.notification}>{notifications}</span>}
                            </span>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <AppBarSpaceUnder />
        </React.Fragment>
    )
}

export default Header
