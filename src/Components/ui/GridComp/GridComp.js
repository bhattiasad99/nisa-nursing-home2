import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './GridComp.styles';

export default function CenteredGrid({ children, bgColor, xsSize, item, styles, ...props }) {
    const classes = useStyles(bgColor)();
    console.log(styles)
    return (
        <Grid
            {...props}
            className={styles}
            // xs={xsSize}
            classes={{
                root: classes.root,
                // container: classes.container,
                item: classes.item,
            }}
        >
            {children}
        </Grid>
    );
}

CenteredGrid.propTypes = {
    children: PropTypes.any,
    bgColor: PropTypes.string,
    xsSize: PropTypes.string,
};
CenteredGrid.defaultProps = {
    children: <div>Default Children</div>,
    // xsSize: 12,
    item: false,
    bgColor: null,
};