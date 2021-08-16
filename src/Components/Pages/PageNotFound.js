import React from 'react'
import { makeStyles } from '@material-ui/core'
import Error from '../ui/Error'

const useStyles = makeStyles({

})

const PageNotFound = (props) => {
    const classes = useStyles()
    return (
        <div>
            <Error code='HTTP-404' type="Page Not Found" message="This is an invalid Link" />
        </div>
    )
}

export default PageNotFound
