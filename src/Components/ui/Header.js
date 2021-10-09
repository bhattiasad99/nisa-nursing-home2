import React, { useState } from 'react'
import classes from './Header.module.css'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from './Header.style'

import { FaUserCircle } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

import AppBarSpaceUnder from './ui/AppBarSpaceUnder'


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
                        <Typography variant="h5" className={styles.iconStyle} style={{ position: 'relative' }
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
