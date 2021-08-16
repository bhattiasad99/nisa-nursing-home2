import React, { useState, useEffect } from 'react'
import AutoCompleteComp from '../../../ui/AutoCompleteComp'
import dummyRegistrations from '../../../../globalContent/dummyRegistrations'
import { TextField, Button } from '@material-ui/core'
import useStyles from './GetPatient.style'
import BasicTableComp from '../../../ui/BasicTableComp'

const searchTypes = [{ name: 'Name', ref: 'fullName' }, { name: 'CNIC', ref: 'cnic' }, { name: 'Contact', ref: 'contact' }]
const searchSuggestions = ['Name', 'CNIC', 'Contact']

const GetPatient = ({ getPatient }) => {

    const [registered, setRegistered] = useState()
    const [searchTypeSelected, setSearchTypeSelected] = useState()
    const [showRegistered, setShowRegistered] = useState(false)
    const [patientsArr, setPatientsArr] = useState([])
    const [showTable, setShowTable] = useState(false)

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
        setShowTable(false)
    }, [searchTypeSelected])


    const selectValueHandler = userChoice => {
        const temp = searchTypes.find(type => type.name === userChoice)
        if (temp) {
            setSearchTypeSelected(temp)
            setShowRegistered(true)
        } else {
            setSearchTypeSelected(null)
            setShowRegistered(false)
        }
    }

    const searchClickHandler = e => {
        e.preventDefault()
        console.log(e.target, 'clicked')
        if (!showTable) {
            setShowTable(true)
        }
    }
    return (
        <div className={classes.container}>
            <div style={{ marginBottom: '1rem' }}>
                <AutoCompleteComp suggestions={searchSuggestions} label="Search By..." onSelect={selectValueHandler} />
            </div>
            {console.log(searchTypeSelected)}
            {searchTypeSelected && (<React.Fragment>
                <TextField label={`Search by ${searchTypeSelected.name}`} variant="outlined" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
                    <Button variant="outlined" color="primary" onClick={searchClickHandler}>Search Patient</Button>
                </div>
            </React.Fragment>)}
            {showTable && <BasicTableComp />}
        </div>
    )
}

export default GetPatient
