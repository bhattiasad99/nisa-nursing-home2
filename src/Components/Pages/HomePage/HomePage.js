import React from 'react'
import Card from '../../ui/Card'
import useStyles from './HomePage.styles.js'
import Grid from '../../ui/Grid'
import cards from './objects/cardData'


const Testing = props => {
    // use this for non dynamic styles inside React comp
    const classes = useStyles()
    return (
        <div>
            <Grid gridTemplate={classes.gridTemplate}>
                {cards.map(card => (
                    // applied dynamic css (not jss) styles in exported document
                    <div className={card.styles} style={{ padding: '0.4rem' }}>
                        <Card heading={card.heading}>
                            {card.content}
                        </Card>
                    </div>
                ))}
            </Grid>
            
        </div>
    )
}

export default Testing