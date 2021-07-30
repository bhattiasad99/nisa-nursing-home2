import React from 'react'
import useStyles from './BtnList.style'
import { Button } from '@material-ui/core'

const btnProps = {
    variant: 'outlined',
    size: 'small',
}

const BtnList = ({ btnPrimary, btnSecondary, primaryAction, secondaryAction }) => {
    const classes = useStyles()

    return (
        <div className={classes.btnList}>
            <Button
                color="primary"
                className={classes.margin}
                style={{ marginRight: '1rem' }}
                onClick={primaryAction}
                {...btnProps}>
                {btnPrimary}
            </Button>
            <Button
                color="secondary"
                className={classes.margin}
                onClick={secondaryAction}
                {...btnProps}>
                {btnSecondary}
            </Button>
        </div>
    )
}

BtnList.defaultProps = {
    btnPrimary: 'Primary Action',
    btnSecondary: 'Secondary Action',
    primaryAction: () => {
        console.log('Primary button action not given')
    },
    secondaryAction: () => {
        console.log('Secondary button action not given')
    }
}

export default BtnList
