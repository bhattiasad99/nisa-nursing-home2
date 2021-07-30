import React from 'react'
import useStyles from './TinyButtons.style'

const TinyButtons = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.btnList}>
            {props.buttons.map(button => (
                <button className={classes.btn} id={button.id} onClick={props.shiftSwitcher}>{button.name}</button>
            ))}
        </div>
    )
}

TinyButtons.defaultProps = {
    shiftSwitcher: () => {
        console.log('no function given')
    },
    buttons: [{ id: 0, name: 'First' }, { id: 1, name: 'Second' }]
}

export default TinyButtons

