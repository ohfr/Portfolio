import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        background: 'white',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // padding: '20px 10px 20px 10px',
    },
    sections: {
        background: 'white',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '20px 0 20px 0',

    },
    img: {
        width: '30%',
    },
    about: {
        width: '40%',
    },
    mobileImg: {
        width: '50%',
        height: '100%',
    },
    mobileAbout: {
        width: '45%',
    },
    middleSection: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        background: '#f7f9fa',
        padding: '20px 0 20px 0',
    },
    hiddenImg: {
        display: 'none',
    },
    fullAbout: {
        width: '100%',
    }
})
const Projects = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <section className={classes.sections}>
                <div className={width > 1000 ? classes.about :  width > 800 ? classes.mobileAbout : classes.fullAbout}>
                    <h2>SleepTracker</h2>
                    <p>An app to track your sleeping habits and how well you feel when you wake up, built with: React, React-Router, Axios, Auth, and Material-UI </p>
                </div>
                <div className={width > 1000 ? classes.img : width > 800 ? classes.mobileImg : classes.hiddenImg}>
                <a href="https://festive-banach-64ae41.netlify.com/" target="_blank"><img style={{width: '100%'}} src={require('../Assets/sleeptracker.PNG')} /></a>
                </div>

            </section>
            <section className={classes.middleSection}>
                <img className={width > 1000 ? classes.img : width > 800 ? classes.mobileImg : classes.hiddenImg} src={require('../Assets/brewbase.PNG')} />  
                <div className={width > 1000 ? classes.about :  width > 800 ? classes.mobileAbout : classes.fullAbout}>
                    <h2>BrewBase</h2>
                    <p>Find local breweries or search a city, built with React, React-Router, Material-UI, and Axios</p>
                </div>
            </section>
            <section className={classes.sections}>
                <div className={width > 1000 ? classes.about :  width > 800 ? classes.mobileAbout : classes.fullAbout}>
                    <h2>SleepTracker</h2>
                    <p>An app to track your sleeping habits and how well you feel when you wake up, built with: React, React-Router, Axios, Auth, and Material-UI </p>
                </div>
                <img className={width > 1000 ? classes.img : width > 800 ? classes.mobileImg : classes.hiddenImg} src={require('../Assets/sleeptracker.PNG')} />
            </section>

        </div>
    )
}

export default Projects;