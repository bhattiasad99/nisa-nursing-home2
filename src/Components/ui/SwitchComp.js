import PropTypes from "prop-types";
import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches({ result }) {
    const [state, setState] = React.useState({
        checkedA: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        result(event.target.checked)
    };

    return (
        <div>
            <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </div>
    );
}

Switches.propTypes = {
    result: PropTypes.any
}

Switches.defaultProps = {
    result: () => {
        console.log('result not assigned')
    }
}