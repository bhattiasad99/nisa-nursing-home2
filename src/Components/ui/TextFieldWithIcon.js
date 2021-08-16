import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: 0,
    },
}));

export default function InputWithIcon({ label }) {
    const classes = useStyles();

    return (
        <TextField
            fullWidth
            className={classes.margin}
            id="input-with-icon-textfield"
            label={label}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle color="primary" />
                    </InputAdornment>
                ),
            }}
        />
    );
}

InputWithIcon.defaultProps = {
    label: 'No label entered'
}