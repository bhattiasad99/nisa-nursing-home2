import React from 'react'
import { makeStyles } from '@material-ui/core'
import CardStyles from '../../ui/CardStyle'

const useStyles = makeStyles({
    main: {
        gridRow: '1 / 3',
        gridColumn: '2 / 3',
        minHeight: '80%',
        minWidth: '106%'
    }
})

const Services = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <CardStyles>
                services
            </CardStyles>
        </div>
    )
}

export default Services
