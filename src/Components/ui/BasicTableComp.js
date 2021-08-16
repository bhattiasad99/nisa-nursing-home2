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
        minWidth: 650,
    },
});

export default function BasicTable({ headings, rows }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {console.log(headings, rows)}
                        {headings && headings.map((heading, i) => {
                            return (
                                <TableCell align={`${i === 0 ? '' : 'right'}`}>{heading}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row, i) => (
                        <TableRow key={row.id}>
                            {row.values.map((element, j) => (
                                <TableCell
                                    component={`${j === 0 ? 'th' : ''}`}
                                    align={`${j !== 0 ? 'right' : 'inherit'}`}
                                    scope={`${j === 0 ? 'row' : ''}`}
                                >
                                    {element}
                                </TableCell>
                            ))}
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

BasicTable.defaultProps = {
    headings: ['First', 'Second', 'Third', 'Fourth'],
    rows: [
        {
            id: 0,
            values: ['First',
                'Second',
                'Third',
                'Fourth',]
        },
        {
            id: 1,
            values: ['First',
                'Second',
                'Third',
                'Fourth',]
        }
    ]
}