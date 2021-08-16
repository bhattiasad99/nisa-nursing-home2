import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'flex-start',
        width: '100%',
        padding: '1rem',
    },
    input: {
        width: '100%'
    }
}))

export default function MultilineTextFields({ heading, values, label }) {
    const classes = useStyles();
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={classes.container}>
            <TextField
                className={classes.input}
                id="outlined-select"
                select
                label={label}
                value={value}
                onChange={handleChange}
                variant="outlined"
            >
                {values.map((option) => {
                    return (<MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>)
                }
                )}
            </TextField>
        </div>
    );
}