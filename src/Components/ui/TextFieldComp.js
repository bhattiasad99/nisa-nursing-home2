import PropTypes from "prop-types";
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

export default function BasicTextFields({ label, id, getValue, ...otherProps }) {
    const [value, setValue] = useState()
    const [extract, setExtract] = useState({})
    useEffect(() => {
        // used useeffect for within change render (instead of in onchange function)
        getValue(extract)

    }, [value])
    const changeValHandler = e => {
        setValue(e.target.value)

        let temp = {}
        temp = {
            [e.target.id]: e.target.value
        }
        setExtract(temp)
    }
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField {...otherProps} id={id} label={label} value={value} variant="outlined" onChange={changeValHandler} />
        </form>
    );
}

BasicTextFields.propTypes = {
    getValue: PropTypes.func,
    label: PropTypes.any
}

BasicTextFields.defaultProps = {
    getValue: (e) => { console.log(e) },
    label: 'no label given'
}