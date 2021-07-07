import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from './HomePage/HomePage'


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
            {/* Material Component */}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <HomePage />
            </main>
        </div >
    );
}


export default Content;

