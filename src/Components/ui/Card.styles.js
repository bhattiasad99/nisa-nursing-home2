import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => (
    {
        root: {
            borderRadius: '10px',
            // width: '100%',
            height: '100%'
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        btnFooter: {
            display: 'flex',
            flexDirection: 'column !important',
            alignItems: 'flex-end !important',
        },
        openBtn: {
            '&:hover': {
                cursor: 'pointer'
            }
        }
    }
)
)

export default useStyles