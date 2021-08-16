import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './ui/NavBar'
import SideBar from './ui/SideBar'
import Content from './Content'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Pages/Login/Login'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    toolbar: theme.mixins.toolbar,
}));

function AppContent(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Route exact path="/">
                <Redirect to="/user-auth-login" />
            </Route>
            <CssBaseline />
            <NavBar
                drawerToggle={handleDrawerToggle}
            />
            <SideBar
                panelHeader={props.UIPanel}
                drawerToggle={handleDrawerToggle}
                mobileToggleState={mobileOpen}
                controls={props.sideBarControls}
                links={props.links}
            />
            <div className={classes.toolbar} />
            <Content />
        </div>
    );
}

export default AppContent;
