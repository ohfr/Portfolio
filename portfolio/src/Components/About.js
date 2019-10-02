import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        textAlign: 'center',

    }
})

const About = () => {
    const classes = useStyles();
    return (

        <div className={classes.wrapper}>
            <h2>About me</h2>
            <p>I'm a full-stack software engineer with a passion for clean, maintainable code. </p>
        </div>
    )
}

export default About;