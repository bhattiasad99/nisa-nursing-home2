import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(
    {
        root: {
            width: '100%',
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        btn: {
            width: '14rem',
            fontSize: '2rem',
            marginBottom: '1rem',
            '&:hover': {
                cursor: 'pointer'
            }
        }
    }
)


const Emergency = (props) => {
    let history = useHistory()
    const classes = useStyles()
    const btns = [
        {
            name: 'Fatal',
            color: 'black',
            font: 'white',
            clickHandler: () => {
                console.log('clicked fatal')
                history.push('/emergency/fatal')
            }
        }, {
            name: 'Immediate',
            color: 'red',
            font: 'white',
            clickHandler: () => {
                console.log('clicked immediate')
                history.push('emergency/immediate')
            }
        }, {
            name: 'Delayed',
            color: 'orange',
            font: 'black',
            clickHandler: () => {
                console.log('clicked delayed')
                history.push('emergency/delayed')
            }
        }, {
            name: 'Minor',
            color: 'green',
            font: 'white',
            clickHandler: () => {
                console.log('clicked minor')
                history.push('get-appointment')
            }
        }
    ]

    return (
        <div className={classes.root}>
            {btns.map(button => {
                return (<Button variant="contained" onClick={button.clickHandler} className={classes.btn} style={{ background: button.color, color: button.font }}>{button.name}</Button>)
            })}
        </div>
    )
}

export default Emergency
