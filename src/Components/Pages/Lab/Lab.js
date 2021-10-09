import React from 'react'
import useStyles from './Lab.styles.js'
import Card from '../../ui/Layout/Card/Card'

const Lab = (props) => {
    const classes = useStyles()
    return (
        <div style={{ width: '100%', height: '80vh' }}>
            <div className={classes.gridContainer}>
                <Card>
                    Hi
                </Card>
                <Card>
                    Hello
                </Card>
            </div>
        </div>
    )
}

export default Lab
