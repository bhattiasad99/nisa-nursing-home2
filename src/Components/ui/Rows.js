import React from 'react'
import useStyles from './Rows.style'

const Rows = ({ content }) => {
    const classes = useStyles()
    return (
        <div className={classes.rows}>
            {Object.entries(content.values).map(row => {
                return (
                    <div key={classes.row} className={classes.row}>
                        <h6 className={classes.subHeading}>{row[0]}</h6><span className={classes.value}>{+row[1]}</span>
                    </div>
                )
            })}
        </div>
    )
}

Rows.defaultProps = {
    content: {
        values: {

        }
    }
}

export default Rows
