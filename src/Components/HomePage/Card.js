import React, { useState, useEffect } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { MdOpenInNew } from 'react-icons/md'

import QueueTable from './QueueTable'


const useStyles = makeStyles(
    {
        heading: {
            fontSize: '1rem',
            fontWeight: '500',
            letterSpacing: '1px',
        }
    }
)

const Card = (props) => {
    const classes = useStyles()
    const [data, setData] = useState({
        name: '',
        headingsArr: [],
        patients: []
    })
    useEffect(() => {
        const temp = { ...props }
        setData({
            name: temp.name,
            headingsArr: temp.headings,
            patients: temp.patientList
        })
    }, [props, setData])

    return (
        <div className={props.styles} >
            <div className={props.headingBoxStyle}>
                <Typography variant="h6" className={classes.heading}>
                    {data.name}
                </Typography><MdOpenInNew style={{ color: 'blue' }} /></div>
            <QueueTable headings={data.headingsArr} patients={data.patients} />
        </div>
    )
}

export default Card