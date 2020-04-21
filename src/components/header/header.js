import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import {useStyles } from './style';






function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};


export default function Header(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.paperContainer}>
                <Toolbar className={classes.toolbar}>


                </Toolbar>
            </AppBar>
        </div>
    );
}