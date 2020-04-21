import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function IconLabelButtons(props) {
    const classes = useStyles();

    return (
        <div>

            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<AddIcon/>}
                onClick={props.onClick1}
                style={{display: 'inline-block'}}
            >

            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                onClick={props.onClick2}
                style={{display: 'inline-block'}}
            >
                =
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<DoneOutlineIcon/>}
                onClick={props.onClick3}
                style={{display: 'inline-block'}}
            >
                verify
            </Button>

        </div>
    );
}
