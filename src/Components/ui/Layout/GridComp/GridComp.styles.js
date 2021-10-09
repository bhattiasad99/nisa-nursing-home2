import { makeStyles } from '@material-ui/core/styles';
export const useStyles = bgColor => {
    return makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: bgColor,
        },
        container: {
            direction: 'row',
            justify: 'flex-start',
            alignItems: 'baseline',
        },
        item: {
            display: 'flex',
            alignItems: 'center',
        },
        control: {
            padding: theme.spacing(2),
        },
    }));
};