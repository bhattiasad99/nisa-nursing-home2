import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react'
import { makeStyles, Button, Typography } from "@material-ui/core"
import TextField from './ui/TextFieldComp'
import Grid from './ui/Layout/GridComp/GridComp'
import Select from './ui/Select'
import formData from '../globalContent/defaultForm'

const useStyles = makeStyles(
    {
        root: {

        },
        input: {
            width: '90%'
        },
        btn: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1rem auto',
            width: '7rem',
        },

    }
)

const Form = ({ name, formData, submit, cancel }) => {
    const [dynamicValues, setDynamicValues] = useState({})

    const getValueHandler = e => {
        let temp = { ...dynamicValues }
        temp[Object.keys(e)[0]] = Object.values(e)[0]
        setDynamicValues(temp)
    }
    const submitBtnHandler = e => {
        e.preventDefault()
        console.log(dynamicValues)
    }
    const classes = useStyles()
    useEffect(() => {
        let temp = { ...dynamicValues }
        formData.forEach(element => {
            temp = {
                ...temp,
                [element.name]: ''
            }
            setDynamicValues(temp)
        })
    }, [formData])
    return (
        <form onSubmit={submitBtnHandler} className={classes.root}>
            <Typography variant="h4">{name}</Typography>
            <Grid container>
                {formData.map(element => {
                    if (element.props.type === 'text' || element.props.type === 'email') {
                        return (
                            <Grid xs={6} key={element.name}>
                                <TextField
                                    className={classes.input}
                                    {...element.props}
                                    getValue={getValueHandler}
                                />
                            </Grid>
                        )
                    }
                    if (element.props.type === 'drop-down') {
                        return (
                            <Grid xs={6} key={element.name}>
                                <Select {...element.props} getChoice={getValueHandler} />
                            </Grid>
                        )
                    }
                })}
                <Grid item container xs={12}>
                    <Grid xs={3}>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit"
                            className={classes.btn}
                        >
                            {submit}
                        </Button>
                    </Grid>
                    <Grid xs={3}>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.btn}
                        >
                            {cancel}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

Form.propTypes = {
    cancel: PropTypes.any,
    formData: PropTypes.shape({
        forEach: PropTypes.func,
        map: PropTypes.func
    }),
    name: PropTypes.string,
    submit: PropTypes.any
}

Form.defaultProps = {
    name: 'No name Given',
    formData: formData,
    cancel: 'Cancel',
    submit: 'Submit',
}

export default Form