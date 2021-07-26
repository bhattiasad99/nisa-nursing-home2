import React, { useState, useEffect } from 'react';
import { TextField, makeStyles } from '@material-ui/core/';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles({

})

export default function ComboBox(props) {
    // const classes = useStyles()
    const [values, setValues] = useState([])
    const changeValueHandler = (event, val) => {
        props.getSearchResult(val)
    }
    const [label, setLabel] = useState(null)
    useEffect(() => {
        let temp = []
        if (props.id === 'search-by-options') {
            props.options.forEach(option => temp.push(option.title))
            setLabel('Search by...')
            setValues(temp)
        } else if (props.id === 'search-suggestions') {
            setLabel(`Enter ${props.labelType}`)
            setValues(props.options)
        }
    }, [props])
    return (
        <Autocomplete
            onChange={changeValueHandler}
            id="combo-box-demo"
            options={values}
            getOptionLabel={(option) => option}
            style={{ width: '100%', marginBottom: '1rem' }}
            renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
        />
    );
}

