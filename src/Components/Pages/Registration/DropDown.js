import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        maxWidth: '40%',
        minWidth: '40%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const DropDown = (props) => {
    const [value, setValue] = React.useState('');
    const classes = useStyles()
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{props.label}</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={value}
                onChange={handleChange}
                label={props.label}
            >
                <MenuItem value="">
                    <em>{props.heading}</em>
                </MenuItem>
                {props.values.map(item => {
                    return (
                        <MenuItem value={item}>{item}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default DropDown
