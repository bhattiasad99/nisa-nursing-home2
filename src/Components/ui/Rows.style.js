import { makeStyles } from "@material-ui/core";
export default makeStyles({
    rows: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'
    },
    subHeading: {
        fontSize: '0.7rem'
    },
    value: {
        fontSize: '0.8rem'
    }
})