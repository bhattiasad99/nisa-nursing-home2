import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextFields({ label, getValue }) {
    const [value, setValue] = useState()
    useEffect(() => {
        console.log(value)
        // used useeffect for within change render (instead of in onchange function)
        getValue(value)
    }, [value])
    const changeValHandler = e => {
        setValue(e.target.value)
    }
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label={label} value={value} variant="outlined" onChange={changeValHandler} />
        </form>
    );
}
