import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/header1.png';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: 110,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        width: 100 ,
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
    paperContainer: {
        backgroundImage: `url(${Image})`
    },
}));