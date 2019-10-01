import React, { useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'; 
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import Card from '@material-ui/core/Card'

import { TweenMax, Power4, Power3 } from 'gsap';

const useStyles = makeStyles({
    button: {
        color: 'white',
        background: 'rgba(60, 50 , 140)',
        '&:hover': {
            color: 'rgba(60, 50, 140)',
            background: 'rgba(211,211,211)'
        }
    },
    highlight: {
        color: 'rgba(60, 50 , 140)'
    },
    para: {
        fontSize: '1.5rem',
    },
    wrapper: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        background: 'black'

    },
    firstWrap: {
        width: '50%',
        height: '100vh',
        background: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.8)), url(${"https://images.unsplash.com/photo-1558459654-c430be5b0a44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        

    },
    secondWrap: {
        width: '50%',
        height: '100vh',
        background: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.8)),url(${"https://images.unsplash.com/photo-1517994112540-009c47ea476b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1981&q=80"}) no-repeat center center fixed`,
        backgroundSize: 'cover',
    },
    middleWrapper: {
        position: 'relative',

    },
    main: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',


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
    car: {
        color: 'rgb(0,255,255)'
    },
    soft: {
        color: 'rgb(124,252,0)'
    }
})

const HomeScreen = () => {
    const classes = useStyles();

    let card = useRef(null);
    let background1 = useRef(null);
    let background2 = useRef(null);

    useEffect(() => {
        TweenMax.from(background1, .9, {opacity: 0, x: -200, ease: Power3.easeInOut})
        TweenMax.from(background2, .9, {opacity: 0, x: 200, ease: Power3.easeInOut, delay: .4})
        TweenMax.from(
            card,
            1.0,
            {
                opacity: 0,
                y: -200,
                ease: Power3.easeInOut,
                delay: .8
            }
        )
    }, [])
    return (
    <div className={classes.main}>
        <div className={classes.wrapper}>
            <div className={classes.firstWrap} ref={el => background1 = el}>

            </div>
        
        <div className={classes.secondWrap} ref={el => background2 = el}></div>
        </div>
        <div className={classes.middleWrapper}>
            <Card className={classes.card} ref={el => {card = el}}>
                <h1>Hi, I'm <span className={classes.highlight}>Daniel Martin</span></h1>
                <p className={classes.para}><span className={classes.soft}>Software</span> Developer, <span className={classes.car}>Car </span>enthusiast.</p>

                <h2>I want to make things that change lives</h2>
                <Button component={Link} to="/Home" className={classes.button}>Interested? <ArrowRightAlt /></Button>
            </Card>
        </div>
        </div>
    )
}

export default HomeScreen;