import React, { useState, useEffect } from 'react'
import AutoCompleteComp from '../../ui/AutoCompleteComp'
import dummyRegistrations from '../../../globalContent/dummyRegistrations'
import { Button } from '@material-ui/core'
import useStyles from './GetPatient.style'

const searchTypes = [{ name: 'Name', ref: 'fullName' }, { name: 'CNIC', ref: 'cnic' }, { name: 'Contact', ref: 'contact' }]
const searchSuggestions = ['Name', 'CNIC', 'Contact']

const GetPatient = ({ getPatient }) => {

    const [registered, setRegistered] = useState()
    const [searchTypeSelected, setSearchTypeSelected] = useState()
    const [showRegistered, setShowRegistered] = useState(false)
    const [patientsArr, setPatientsArr] = useState([])
    const [showBtn, setShowBtn] = useState(false)
    const [patient, setPatient] = useState()

    const classes = useStyles()
    useEffect(() => {
        setRegistered(dummyRegistrations)
        const temp = []
        if (searchTypeSelected) {
            if (registered) {
                registered.forEach(patient => {
                    if (patient[searchTypeSelected.ref] !== '') {
                        temp.push(patient[searchTypeSelected.ref])
                        setPatientsArr(temp)
                    }
                })
            }
        }
    }, [searchTypeSelected])


    const selectValueHandler = userChoice => {
        const temp = searchTypes.find(type => type.name === userChoice)
        if (temp) {
            setSearchTypeSelected(temp)
            setShowRegistered(true)
        } else {
            setSearchTypeSelected('none')
            setShowRegistered(false)
        }
    }

    const selectPatientHandler = userChoice => {
        setShowBtn(false)
        const retrievePatient = registered.find(patient => (patient[searchTypeSelected.ref] === userChoice))
        if (retrievePatient) {
            setShowBtn(true)
            setPatient(retrievePatient)
        }
    }

    const btnClickHandler = e => {
        e.preventDefault()
        getPatient(patient)
    }

    return (
        <div>
            <div style={{ marginBottom: '1rem' }}>
                <AutoCompleteComp suggestions={searchSuggestions} label="Search By..." onSelect={selectValueHandler} />
            </div>

            <div>
                {showRegistered && <AutoCompleteComp suggestions={patientsArr} onSelect={selectPatientHandler} label={`Search by ${searchTypeSelected.name}`} />}
            </div>
            {showBtn && <div className={classes.BtnContainer}><Button variant="outlined" color="primary" onClick={btnClickHandler} >Find Patient Record</Button></div>}
        </div>
    )
}

export default GetPatient
