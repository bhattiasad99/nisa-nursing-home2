import { makeStyles } from '@material-ui/core'

export default makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'auto',
        gridGap: '1rem',
        width: '80vw'
    }
})