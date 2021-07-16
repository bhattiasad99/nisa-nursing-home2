import React from 'react'
import FooterBox from './FooterBox'
import { makeStyles } from '@material-ui/core'


const cards = [
    {
        name: 'Cash Flow Status',
        props: {
            type: 'tabular',
            options: [
                {
                    id: 0,
                    shift: 'Current',
                    values: {
                        income: '25210',
                        expenses: '2140',
                        profit: 25210 - 2140,
                    }

                }, {
                    id: 1,
                    shift: '24 hours',
                    values: {
                        income: 122002,
                        expenses: 12102,
                        profit: 122002 - 12102
                    }
                }]
        }
    }, {
        name: 'Checkup Types',
        props: {
            type: 'pie',
            options: [
                {
                    id: 0,
                    shift: 'Current',
                    values: {
                        consultancy: 12,
                        indoor: 2,
                        general: 5,
                        retention: 3
                    }
                },
                {
                    id: 1,
                    shift: '24 hours',
                    values: {
                        consultancy: 62,
                        indoor: 6,
                        general: 70,
                        retention: 9
                    }
                }
            ]
        }
    },
    {
        name: 'Patient Types',
        props: {
            type: 'pie',
            options: [
                {
                    id: 0,
                    shift: 'Current',
                    values: {
                        newReg: 8,
                        followUp: 12,
                        emergency: 4
                    }
                },
                {
                    id: 1,
                    shift: '24 hours',
                    values: {
                        newReg: 14,
                        followUp: 23,
                        emergency: 6
                    }
                }
            ]
        }
    },
]
const useStyles = makeStyles(
    theme => (
        {
            cardWrapper: {
                display: 'grid',
                width: '100%',
                gridTemplateColumns: `repeat(${cards.length},1fr)`
            }
        }
    )
)
const FooterLinks = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.cardWrapper}>
            {cards.map(card => {
                return (
                    <React.Fragment key={card.name}>
                        <FooterBox styles={props.cardStyles} heading={card.name} {...card.props} headingBoxStyle={props.headingBoxStyle} />
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default FooterLinks
