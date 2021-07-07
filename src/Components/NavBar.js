import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FaUserCircle } from 'react-icons/fa';
import { HiBell } from 'react-icons/hi'
import styles from './NavBar.module.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        background: 'none',
        boxShadow: 'none',
        color: 'black'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    navBar: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icons: {
        width: '8.5rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        fontSize: '20px',
        color: '#2998EC'
    },
    notificationBox: {
        position: 'relative'
    },
    notification: {
        position: 'absolute',
        top: '-4px',
        left: '10px',
        background: 'red',
        width: ' 18px',
        height: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        fontSize: '14px',
        color: 'white'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

}));

function NavBar(props) {
    const classes = useStyles();
    const [notifications, setNotifications] = React.useState(3)

    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={props.drawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.navBar}>
                        <Typography variant="h5">{props.panelHeader}</Typography>
                        <div className={classes.icons}>
                            <span className={styles.uHoverEffect}>
                                <div className={classes.notificationBox}>
                                    <HiBell size="22" />
                                    {notifications > 0 && <span className={classes.notification}>{notifications}</span>}
                                </div>
                            </span>
                            <span className={styles.uHoverEffect}>
                                <FaUserCircle />
                            </span>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
        </React.Fragment>
    );
}



export default NavBar;
