import React, { useState, useEffect } from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core'
import CardStyles from '../../ui/CardStyle'
import AutoCompleteComponent from './AutoCompleteComponent'
import PatientData from './PatientData'
const useStyles = makeStyles({
    main: {
        gridRow: '1/3',
        gridColumn: '1/2',
        minHeight: '80%',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    btnStyles: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: '1rem',
    },
    searchOptions: {
        // no style given
    },
    heading: {
        marginBottom: '1rem',
    }
})

const searchByOptions = [
    { title: 'Name', name: 'fullName' },
    { title: 'Contact', name: 'contact' },
    { title: 'CNIC', name: 'cnic' },
]

const SearchBox = (props) => {
    const [patientData, setPatientData] = useState([])
    const [searchOptions, setSearchOptions] = useState([])
    const [userSearchChoice, setUserSearchChoice] = useState(null)
    const [patientVal, setPatientVal] = useState()
    const [isPatientRetrieved, setIsPatientRetrieved] = useState(false)
    const [patient, setPatient] = useState({
        biometric: '',
        city: '',
        cnic: '',
        contact: '',
        email: '',
        fullName: '',
        gender: '',
        id: '',
        timeOfReg: '',
    })

    const userChoiceForSearchBy = searchByOptions.find(option => option.title === userSearchChoice)

    useEffect(() => {
        setIsPatientRetrieved(false)
        setPatientData(props.registeredPatients)
        const tempOptions = []
        if (userSearchChoice !== null) {
            patientData.forEach(patient => {
                if (patient[userChoiceForSearchBy.name] !== '') {
                    tempOptions.push(patient[userChoiceForSearchBy.name])
                }
            })
        }
        setSearchOptions(tempOptions)
        props.onSearchPatient(patient)
        console.log('PATIENT', patient)
        if (patient.fullName !== '') {
            setIsPatientRetrieved(true)
        }
    }, [props.registeredPatients, userSearchChoice, patient])

    const classes = useStyles()
    const getSearchType = e => {
        setUserSearchChoice(e)
    }
    const getSearch = e => {
        setPatientVal(e)
    }

    const findFunction = (pat) => {
        console.log(userChoiceForSearchBy)
        console.log(patient)
        const retrievePatient = patientData.find(patient => patient[userChoiceForSearchBy.name] === pat)
        return retrievePatient
    }

    const clickSearchHandler = e => {
        e.preventDefault();
        const patientCurr = findFunction(patientVal)
        setPatient(patientCurr)
    }

    const clickRegHandler = e => {
        e.preventDefault()
    }

    return (
        <div className={classes.main}>
            <CardStyles>
                <div className={classes.content}>
                    <Typography variant="h6" className={classes.heading}>Search</Typography>
                    <div className={classes.searchOptions}>
                        <AutoCompleteComponent options={searchByOptions} getSearchResult={getSearchType} id="search-by-options" />
                        {userSearchChoice && <AutoCompleteComponent options={searchOptions} labelType={userSearchChoice} getSearchResult={getSearch} id="search-suggestions" />}
                    </div>
                    <div className={classes.btnStyles}>
                        <Button variant="contained" color="primary" onClick={clickSearchHandler}>Search</Button>
                        <Button variant="contained" color="primary" onClick={clickRegHandler}>Register</Button>
                    </div>
                </div>
                {isPatientRetrieved && <PatientData patientDetails={patient} />}
            </CardStyles>
        </div >
    )
}

export default SearchBox
