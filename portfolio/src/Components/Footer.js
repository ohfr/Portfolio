import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles({
    wrapper: {
        width: '100%',
        background: '#313843',
        color: 'white', 
        height: '10vh',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    aTag: {
        color: 'white',
        // textDecoration: 'none',
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.wrapper}>
            <p>Connect with me! - <a className={classes.aTag} href="mailto:danielmartin1205@gmail.com" target="_blank">Danielmartin1205@gmail.com</a></p>
            <p> &copy; Daniel Martin, 2019</p>

        </footer>
    )
}

export default Footer;