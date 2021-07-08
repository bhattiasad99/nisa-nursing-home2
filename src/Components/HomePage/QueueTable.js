import React from 'react';
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Mr. Ahmed Arsalan', 159, 6.0, 24, 1),
    createData('Ms. Farkhanda', 237, 9.0, 37, 2),
    createData('Mrs. Naz bibi', 262, 16.0, 24, 1),
    createData('Mrs. Beenish', 305, 3.7, 67, 2),
    createData('Ahmed iftikhar', 356, 16.0, 49, 2),
];



const PatientQueueTable = (props) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.tableWrapper} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Patient Name</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Queue Number</TableCell>
                        <TableCell align="right">Time Waiting</TableCell>
                        <TableCell align="right">Doctor's Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PatientQueueTable