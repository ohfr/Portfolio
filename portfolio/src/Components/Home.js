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
        // textAlign: 'center',

    },
    aTag: {
        textDecoration: 'none',
        color: '#0069e2'
    },
    button: {
        background: 'black',
        color: 'white',
        '&:hover':{
            background: 'white',
            color: 'black'
        }
    },
    // inside: {
    //     width: '57%',
    //     display: 'flex',
    //     flexFlow: 'column wrap',
    //     alignItems: 'flex-start',

    // },
    // middle: {
    //     width: '80%',
    //     display: 'flex',
    //     flexFlow: 'column wrap',
    //     alignItems: 'flex-start',
    //     justifyContent: 'space-around',
        
    // },
    span: {
        color: '#0069e2'
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
                <div className={classes.inside}>
                    <div className={classes.middle}>
                    <h2>Using <span className={classes.span}>code</span> to build amazing <span className={classes.span}>apps</span>, all while having <span className={classes.span}>fun</span>!</h2>
                    <p>Currently studing Computer Science/Software Development at <a className={classes.aTag} target="_blank" href="https://lambdaschool.com">Lambda School</a></p>
                    <a className={classes.aTag} href="https://docs.google.com/document/d/1qUfIOe7l0zUtmvlZt4e4P0Titj1E61VXMtQCq8gbNd4/edit?usp=sharing"><Button className={classes.button}>Get in Contact</Button></a>
                    </div>
                </div>
            </div>
            <Projects />
        </div>
    )
}

export default Home;