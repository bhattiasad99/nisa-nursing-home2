import React, { useState, useEffect } from 'react'
import dummyRegistrations from '../../../../globalContent/dummyRegistrations'
import useStyles from './GetPatient.style'
import Select from '../../../ui/Select'
import TextField from '../../../ui/TextFieldComp'
import { Button } from '@material-ui/core'


const searchTypes = [{ name: 'Name', ref: 'fullName' }, { name: 'CNIC', ref: 'cnic' }, { name: 'Contact', ref: 'contact' }]

const GetPatient = ({ getPatients }) => {
    const [patients, setPatients] = useState([])
    const [userChoice, setUserChoice] = useState('')
    const [search, setSearch] = useState()
    const [results, setResults] = useState([])

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('https://nisa-nursing-home-three-default-rtdb.firebaseio.com/patients.json')
            const responseData = await response.json()
            const loadedPatients = []
            for (const key in responseData) {
                loadedPatients.push(
                    {
                        id: key,
                        name: responseData[key].name,
                    }
                )
            }
            // setPatients(loadedPatients)
        }
        // console.log(patients)
        setPatients(dummyRegistrations)
        getPatients(results)
    }, [
        dummyRegistrations,
        patients,
        results
    ])

    const choiceHandler = choice => {
        setUserChoice(choice)
    }
    const clickSearchHandler = e => {
        const searchIsEmpty = Object.values(search).length === 0
        if (!searchIsEmpty) {
            const searchVal = Object.values(search).join()
            const userEntered = searchVal.toLowerCase()
            e.preventDefault()
            const temp = [...patients.rows]
            const search_results = temp.filter(patient => {
                const result = patient[userChoice].toLowerCase()
                return result.includes(userEntered)
            })
            setResults(search_results)
        } else return
    }
    const getValueHandler = val => {
        setSearch(val)
    }
    const classes = useStyles()
    let userType = searchTypes.find(type => type.ref === userChoice)
    return (
        <div className={classes.container}>
            <Select options={searchTypes} label={'Search By...'} getChoice={choiceHandler} />
            {userChoice.length > 0 ? (
                <React.Fragment>
                    <TextField id={userType.ref} label={`Enter ${userType.name}`} getValue={getValueHandler} />
                    <div className={classes.BtnContainer}>
                        <Button variant="outlined" color="primary" onClick={clickSearchHandler}>Search</Button>
                    </div>
                </React.Fragment>
            ) : null}

        </div>
    )
}

export default GetPatient
