import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from './Pages/HomePage/HomePage'
import { Switch, Route, withRouter } from 'react-router-dom'
import Registration from './Pages/Registration/Registration'
import PatientCheckup from './Pages/PatientCheckup/PatientCheckup'


const useStyles = makeStyles((theme) => ({

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        position: 'relative',
        minHeight: '100vh',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        minWidth: '75vw',
    },
    mainCenter: {
        minHeight: '65vh'
    },
    toolbar: theme.mixins.toolbar
}));

function Content(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Switch>
                {/* Material Component */}
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                    <Route path="/appointment">
                        <PatientCheckup />
                    </Route>
                </main>
            </Switch>
        </div >
    );
}

// with router
export default withRouter(Content);

