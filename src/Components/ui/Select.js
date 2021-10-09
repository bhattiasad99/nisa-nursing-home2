import PropTypes from "prop-types";
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

export default function NativeSelects({ options, label, getChoice, ...otherProps }) {
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
                    {...otherProps}
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
NativeSelects.propTypes = {
    getChoice: PropTypes.func,
    label: PropTypes.any,
    options: PropTypes.shape({
        map: PropTypes.func
    })
}

NativeSelects.defaultProps = {
    getChoice: (e) => { console.log(e) },
    options: [{ name: 'no name', ref: 'id' }, { name: 'no other', ref: 'id of no' }],
    label: 'no label given'
}
