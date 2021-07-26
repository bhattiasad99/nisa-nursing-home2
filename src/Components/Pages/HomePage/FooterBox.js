import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import classes from './FooterBox.module.css'
import DoughnutChart from '../../DoughnutChart'
import { MdOpenInNew } from 'react-icons/md'

import footerBoxStyles from './footerBoxStyles'

const useStyles = makeStyles(footerBoxStyles)

// shifts array
const shifts = ['Current', '24 hours']
// component
const FooterBox = (props) => {
    // current shift, 24 hours
    const [shift, setShift] = useState(shifts[0])

    // bread crumbs click handler
    const btnClickHandler = e => {
        e.preventDefault();
        setShift(shifts[e.target.id])
    }

    const classes = useStyles()
    // declare empty div
    let content = <div className={classes.boxContent}>&nbsp;</div>;
    // set content dynamically
    if (props.type === 'tabular') {
        const currOption = props.options.find(option => option.shift === shift)
        content = <div className={classes.boxContent}>
            <div className={classes.row}>
                <h3 className={classes.headingSecondary}>
                    Income:
                </h3>
                <span>
                    <span className={classes.rupee}>Rs.</span> <span className={classes.amount}>{currOption.values.income}</span>
                </span>
            </div>
            <div className={classes.row}>
                <h3 className={classes.headingSecondary}>
                    Expenses:
                </h3>
                <span>
                    <span className={classes.rupee}>Rs.</span> <span className={classes.amount}>{currOption.values.expenses}</span>
                </span>
            </div>
            <div className={classes.row}>
                <h3 className={classes.headingSecondary} style={{ fontSize: '1rem' }}>Total</h3>
                <span className={classes.amount}><span className={classes.rupee}>Rs.</span><span style={{ fontSize: '2rem' }}>{currOption.values.profit}</span></span>
            </div>
        </div>
    }
    if (props.type === 'pie') {
        console.log('pie chart', props)
        content = <DoughnutChart options={props.options} currShift={shift} />
    }

    return (
        <div className={props.styles} style={{ marginRight: '1rem', marginBottom: '1rem' }}>
            {/* heading */}
            <div className={props.headingBoxStyle}>
                <h1 className={classes.heading}>{props.heading}</h1>
                <MdOpenInNew style={{ color: 'blue' }} />
            </div>
            {/* data */}
            {content}
            {/* bread crumbs */}
            <div className={classes.breadCrumbs}>
                {props.options.map(option => {
                    return (
                        <button className={classes.btn} onClick={btnClickHandler} id={option.id}>{option.shift}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default FooterBox
