import React from 'react'
import { Select, MenuItem, makeStyles, InputLabel, FormControl } from '@material-ui/core'

const useStyles = makeStyles(theme => (
    {
        formControl: {
            margin: theme.spacing(1),
            minWidth: '10rem'
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: '7px',
        }
    }
))

const DropDown = ({ heading, values, label }) => {
    const classes = useStyles()
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    console.log('props', heading, values, label)
    return (
        <div className={classes.container}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">{heading}</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>Select Gender</em>
                    </MenuItem>
                    {values.map(value => {
                        console.log(value)
                        return (
                            <MenuItem value={value}>{value}</MenuItem>
                        )
                    })}

                </Select>
            </FormControl>
        </div>
    )
}

export default DropDown
