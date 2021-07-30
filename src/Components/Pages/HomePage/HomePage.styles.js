import { makeStyles } from '@material-ui/core'
// used without usestyle hook to dynamically export in non-react
const useStyles = makeStyles(
    {
        root: {
            padding: '1rem'
        },
        gridTemplate: {
            gridTemplateRows: 'auto',
            gridTemplateColumns: 'repeat(3,1fr)',
            maxWidth: '75vw',
        },
    }
)
export default useStyles