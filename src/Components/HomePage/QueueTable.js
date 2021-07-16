import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
    table: {
        minWidth: 400,
    },
    tableWrapper: {
        maxHeight: '21vh',
        border: 'none',
        boxShadow: 'none',
    }
})


const PatientQueueTable = (props) => {
    const [patientRows, setPatientRows] = useState([])
    const [headings, setHeadings] = useState([])

    useEffect(() => {
        setPatientRows([...props.patients])
        setHeadings([...props.headings])
    }, [props])

    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.tableWrapper} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headings.map((heading, i) => {
                            if (i == 0) {
                                return (<TableCell align="right">{heading.name}</TableCell>)
                            } return (<TableCell align="right">{heading.name}</TableCell>)
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {patientRows.map(patient => {
                        return (
                            <TableRow key={patient.checkupId}>
                                {headings.map(heading => {
                                    let temp = patient[heading.shortName]
                                    if (typeof temp == 'boolean' || typeof temp == 'object') {
                                        switch (temp) {
                                            case null:
                                                temp = 'null'
                                                break;
                                            case true:
                                                temp = 'true'
                                                break;
                                            case false:
                                                temp = 'false'
                                                break;
                                        }
                                    }
                                    return (
                                        <TableCell align="right">{temp}</TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PatientQueueTable