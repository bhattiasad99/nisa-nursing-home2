import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, withRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Registration from './Pages/NewPatient/Registration/Registration'
import GetAppointment from './Pages/NewPatient/GetAppointment/GetAppointment';
import NewPatient from './Pages/NewPatient/NewPatient'
import Lab from './Pages/Lab/Lab'
import PageNotFound from './Pages/PageNotFound'
import Test from './Test'

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
    toolbar: theme.mixins.toolbar,
}));

const paths = [
    {
        path: '/home'
    },
    {
        path: '/registration'
    },
    {
        path: '/get-appointment'
    },
    {
        path: '/emergency'
    },
    {
        path: '/lab'
    },
]

const throw_error = (user_path) => {
    const link = paths.find(path => path.path === user_path)
    if (!link) {
        return '/404'
    }
}

function Content(props) {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Switch>
                {/* Material Component */}
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Route path="/home" exact>
                        <HomePage />
                    </Route>
                    <Route path="/registration" exact>
                        <Registration />
                    </Route>
                    <Route path="/get-appointment" exact>
                        <GetAppointment />
                    </Route>
                    <Route path="/new-patient" exact>
                        <NewPatient />
                    </Route>
                    <Route path="/lab" exact>
                        <Lab />
                    </Route>
                    <Route path="/404" exact>
                        <PageNotFound />
                    </Route>
                    <Route path="/testing" exact>
                        <Test />
                    </Route>
                </main>
            </Switch>
        </div >
    );
}

// with router
export default withRouter(Content);

