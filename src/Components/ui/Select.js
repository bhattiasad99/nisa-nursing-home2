import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NativeSelects({ options, label, getChoice }) {
    const classes = useStyles();
    const [userChoice, setUserChoice] = React.useState('')
    const handleChange = (event) => {
        setUserChoice(event.target.value)
    };
    useEffect(() => {
        getChoice(userChoice)
    }, [userChoice])
    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl} style={{ width: '10rem' }}>
                <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
                <Select
                    native
                    value={userChoice}
                    onChange={handleChange}
                    label={label}
                    inputProps={{
                        name: { label },
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {options.map(option => (
                        <option value={option.ref}>{option.name}</option>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}