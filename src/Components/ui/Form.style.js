import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
    {
        formField: {
            border: '1px solid black',
            marginLeft: '1rem',
            padding: '0.5rem',
            borderRadius: '5px',
            background: '#ddf9ff'
        },
        errors: {
            color: 'red',
        }
    }
)

export default useStyles