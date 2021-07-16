import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'
import SideBar from './SideBar'
import Content from './Content'


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
