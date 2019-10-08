import React, { useRef, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

import { TweenMax, Power3 } from 'gsap';


const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexFlow: 'column wrap',
        
    },



})

const About = () => {
    const classes = useStyles();

    let card = useRef(null);

    useEffect(() => {
        TweenMax.from(
            card,
            1.0,
            {
                opacity: 0,
                y: 50,
                ease: Power3.easeInOut
            }
        )
    }, [])


    return (

        <div className={classes.wrapper}>
            <h2>Software Developer, Car enthusiast, keyboard addict</h2>
            <p>I'm a software developer with a passion for writing maintainable, clean, effecient code. I spend a lot of my spare time honing my skills, as well as learning new ones. I also spend my time working on cars, whether that be breaking or fixing them. </p>
        </div>
    )
}

export default About;