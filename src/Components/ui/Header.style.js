import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => (
    {
        appBar:
        {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.5rem',
            zIndex: '1000'
        },
        options:
        {
            display: 'flex',
            width: '10rem',
            height: '2rem',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        notification:
        {
            top: '0',
            left: '14px',
            position: 'absolute',
            background: 'red',
            fontSize: '15px',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
        }
    }
)
)
