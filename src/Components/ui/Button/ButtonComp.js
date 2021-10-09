import React from 'react'
import { Button } from '@material-ui/core'

const ButtonComp = ({ variant, color, type, children, otherProps, disabled }) => {
    return (
        <Button
            variant={variant}
            color={color}
            type={type}
            disabled={disabled}
            {...otherProps}>{children}</Button>
    )
}

export default ButtonComp

ButtonComp.defaultProps = {
    disabled: false,
    color: 'primary',
    variant: 'outlined',
    type: 'submit',
}