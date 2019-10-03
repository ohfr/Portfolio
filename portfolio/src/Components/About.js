import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles({
    wrapper: {
        textAlign: 'center',
        overflow: 'hidden',

    },
    card: {
        width: '45vw',
        color: 'white',
        background: 'rgba(20,20,20)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column wrap',
    },
    middleWrapper: {
        position: 'relative',


    },


})

const About = () => {
    const classes = useStyles();
    return (

        <div className={classes.middleWrapper}>
        <Card className={classes.card}>
            <h1>Hi, I'm <span className={classes.highlight}>Daniel Martin</span></h1>
            <p className={classes.para}><span className={classes.soft}>Software</span> Developer, <span className={classes.car}>Car </span>enthusiast.</p>

            <h2>Looking to make things that make a difference</h2>
        </Card>
        </div>
    )
}

export default About;