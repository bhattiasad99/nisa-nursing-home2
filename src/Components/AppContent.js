import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './ui/NavBar'
import SideBar from './ui/SideBar'
import Content from './Content'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Pages/Login/Login'
import { Paper } from '@material-ui/core'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    toolbar: theme.mixins.toolbar,
    footer: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        background: '#4f4f4f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddinRight: '3rem',
        opacity: 0.1,
        '&:hover': {
            opacity: 1,
        },
        color: 'white',
        fontSize: '3px',
        fontWeight: 100,
        letterSpacing: '2px',
    }
}));

function AppContent(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const changeThemeHandler = isThemeDark => {
        console.log(isThemeDark)
        setDarkMode(isThemeDark)
    }
    const theme = createTheme(
        {
            palette: {
                type: darkMode ? 'dark' : 'light'
            }
        }
    )
    const classes = useStyles();
    return (
        <Paper style={{ height: '130vh', background: '#FAFAFA', minHeight: 'fit-content', positive: 'relative' }}>
            <div className={classes.root}>
                <Route exact path="/">
                    <Redirect to="/user-auth-login" />
                </Route>
                <CssBaseline />
                <NavBar
                    drawerToggle={handleDrawerToggle}
                />
                <SideBar
                    isDarkMode={changeThemeHandler}
                    panelHeader={props.UIPanel}
                    drawerToggle={handleDrawerToggle}
                    mobileToggleState={mobileOpen}
                    controls={props.sideBarControls}
                    links={props.links}
                />
                <div className={classes.toolbar} />
                <Content />
            </div>
            <div className={classes.footer}>
                <div>
                    Powered by: Asad Zubair Bhatti
                </div>
                <div>
                    Contact: 0334-8506479
                </div>
            </div>
        </Paper>
    );
}

export default AppContent;
