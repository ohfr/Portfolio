import React, { useRef, useEffect } from 'react';
import Projects from './Projects';

import Button from '@material-ui/core/Button';

import { TweenMax, Power3 } from 'gsap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        height: '45vh',
        marginTop: '200px',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        fontSize: '1.6rem',
        // borderBottom: '1px solid lightgray'

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
    inside: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    middle: {
        // textAlign: 'left'
        width: '70%',
    },
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
                        <h2>Hi, my name is <span className={classes.span}>Daniel</span>, I'm a Software <span className={classes.span}>Engineer</span> from Vinton, Virignia and I love <span className={classes.span}>building</span> apps.</h2>
                        {/* <p>Software <span className={classes.span}>Engineer</span>, Car <span className={classes.span}>Enthusiast</span></p>
                        <p>Currently studying Computer Science/Software Development at <a className={classes.aTag} target="_blank" href="https://lambdaschool.com">Lambda School</a></p> */}
                        <a className={classes.aTag} href="https://docs.google.com/document/d/1qUfIOe7l0zUtmvlZt4e4P0Titj1E61VXMtQCq8gbNd4/edit?usp=sharing"><Button className={classes.button}>Get in Touch</Button></a>
                    </div>
                </div>
            </div>
            <Projects />
        </div>
    )
}

export default Home;