import React, { useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'; 
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom';

import { TweenMax, Power3 } from 'gsap';

const useStyles = makeStyles({
    button: {
        color: 'white',
        background: 'rgba(60, 50 , 140)',
        marginBottom: '20px',
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
        background: 'black',
        overflow: 'hidden',

    },
    middleWrapper: {
        position: 'relative',


    },
    card: {
        width: '40vw',
        color: 'white',
        background: 'rgba(20,20,20)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column wrap',

    },
    car: {
        color: 'rgb(200, 0, 0)'
    },
    soft: {
        color: 'rgb(124,252,0)'
    }
})

const HomeScreen = () => {
    const classes = useStyles();

    let card = useRef(null);


    useEffect(() => {
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

        <div className={classes.middleWrapper}>
            <Card className={classes.card} ref={el => {card = el}}>
                <h1>Hi, I'm <span className={classes.highlight}>Daniel Martin</span></h1>
                <p className={classes.para}><span className={classes.soft}>Software</span> Developer, <span className={classes.car}>Car </span>enthusiast.</p>

                <h2>Looking to make things that make a difference</h2>
                <Button component={Link} to="/About" className={classes.button}>Interested? <ArrowRightAlt /></Button>
            </Card>
        </div>
        
    )
}

export default HomeScreen;