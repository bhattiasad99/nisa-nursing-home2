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
        <Paper style={{ height: '100vh', background: '#FAFAFA' }}>
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
        </Paper>
    );
}

export default AppContent;
