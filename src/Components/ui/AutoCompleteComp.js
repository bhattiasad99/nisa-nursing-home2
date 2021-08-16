/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { useAutocomplete } from '@material-ui/lab';

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

const AutoCompleteComp = ({ suggestions, onSelect, label, ...otherProps }) => {
    const classes = useStyles();

    return (
        <Autocomplete
            onChange={(_, val) => {
                onSelect(val)
            }}
            id="country-select-demo"
            style={{ width: 300 }}
            options={suggestions}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            getOptionLabel={(option) => option}
            renderOption={(option) => (
                <React.Fragment>
                    {option}
                </React.Fragment>
            )}
            renderInput={(params) => (
                <TextField

                    {...params}
                    label={label}
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                        // value: value,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}

                />
            )}
        />
    );
}

AutoCompleteComp.defaultProps = {
    onSelect: () => { console.log('no prop given') },
    label: 'Search'
}

export default AutoCompleteComp