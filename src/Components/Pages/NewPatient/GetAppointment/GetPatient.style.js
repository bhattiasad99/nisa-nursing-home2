import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    BtnContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1rem'
    },
    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'stretch',
        justifyContent: 'space-between',
    }
})

export default useStyles