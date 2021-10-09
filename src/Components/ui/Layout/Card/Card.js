import React from 'react';
import useStyles from './Card.styles'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { MdOpenInNew } from 'react-icons/md'
import { Typography } from '@material-ui/core'

const CardStyle = ({ heading, children, openInNewAction, showPopUpIcon, ...otherProps }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Typography variant="h4" >{heading}</Typography>
            <CardContent>
                <Typography variant="body">
                    {children}
                </Typography>
            </CardContent>
            <CardActions className={classes.btnFooter}>
                {showPopUpIcon && <MdOpenInNew style={{ color: 'blue' }} onClick={openInNewAction} className={classes.openBtn} />}
            </CardActions>
        </Card>
    );
}

CardStyle.defaultProps = {
    children: 'No children content given',
    heading: 'No heading prop given',
    openInNewAction: () => {
        console.log('opened but no function given')
    },
    showPopUpIcon: true,
}

export default CardStyle