import React, { useRef, useEffect } from 'react';
import SideNav from './SideNav';
import { Route } from 'react-router-dom';
import About from './About';
import Projects from './Projects';

import Button from '@material-ui/core/Button';

import { TweenMax, Power3 } from 'gsap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        height: '50vh',
        marginTop: '200px',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        textAlign: 'center',

    },
    aTag: {
        textDecoration: 'none',
    },
    button: {
        background: 'black',
        color: 'white',
        '&:hover':{
            background: 'white',
            color: 'black'
        }
    }
})



const Home = () => {
    const classes = useStyles();
    let intro = useRef(null);


    useEffect(() => {
        TweenMax.from(
            intro,
            2.0,
            {
                
                opacity: 0,
                x: 50,
                ease: Power3.easeInOut

            }
        )

    }, [])
    return (
        <div>
            <div className={classes.wrapper} ref={el => intro = el}>
                <h2>Software Developer, Car enthusiast, Keyboard addict</h2>
                <a className={classes.aTag} href="https://docs.google.com/document/d/1qUfIOe7l0zUtmvlZt4e4P0Titj1E61VXMtQCq8gbNd4/edit?usp=sharing"><Button className={classes.button}>Get in Contact</Button></a>
            </div>
            <Projects />
        </div>
    )
}

export default Home;