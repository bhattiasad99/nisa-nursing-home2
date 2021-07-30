import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(
    {
        btn: {
            textTransform: 'capitalize',
            fontSize: ' 0.5rem',
            letterSpacing: '1px',
            background: '#ededed',
            marginRight: '0.4rem',
            marginTop: '0.5rem',
            width: '5.5rem',
            padding: '3px',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        btnList: {
            display: 'flex',
            justifyContent: 'center',
        }
    }
)

export default useStyles