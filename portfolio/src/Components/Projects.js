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
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 0 20px 0',
        height: '80vh',
    },
    img: {
        width: '30%',
        padding: '0 30px 0 30px',
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
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#f7f9fa',
        padding: '20px 0 20px 0',
        height: '80vh',
    },
    hiddenImg: {
        display: 'none',
    },
    fullAbout: {
        width: '100%',
    },
    projectName: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 30px 0 30px',
        textAlign: 'left',
    },
    h2: {
        borderBottom: '2px solid black',
    },
    lastSection: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#F2F2F2',
        padding: '20px 0 20px 0',
        height: '80vh',
    },
    aTag: {
        color: '#0069e2'
    },
    example: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '80vh',
    },
    exampleDIV: {
        display: 'flex',
        flexFlow: 'column wrap',
        borderBottom: '3px solid gray',
        borderLeft: '4px solid lightgray',
        borderRight: '1px solid lightgray',
        width: '25%',
        margin: '20px',
        background: 'white',
    },
    exampleIMG: {
        width: '100%',
    },
    picDIV: {
        paddingBottom: '20px',
        position: 'relative',
    },
    h2DIV: {
        padding: '20px',
    },
    example2: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        background: '#f7f9fa',
        height: '80vh',
    },
    example3: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        background: '#F2F2F2',
        height: '80vh',
    },
    exampleMOBILE: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    exampleDIVMOBILE: {
        display: 'flex',
        flexFlow: 'column wrap',
        borderBottom: '1px solid black',
        borderLeft: '1px solid lightgray',
        borderRight: '1px solid lightgray',
        width: '80%',
        margin: '20px',
        background: 'white',
    },
    exampleABOUT: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    skillCard: {
        width: '350px',
        borderLeft: '2px solid lightgray',
        borderRight: '1px solid lightgray',
        borderBottom: '3px solid lightgray',
        margin: '20px',
        padding: '20px',

    },
    projects: {
        background: '#f7f9fa',
    },
    overlay: {
        position: 'absolute',
        background: 'rgba(49,56,67,.8)',
        width: '100%',
        opacity: '0',
        bottom: '0',
        top: '0',
        right: '0',
        left: '0',
        fontSize: '2rem',
        transition: '.5s ease-in',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'row wrap',
        '&:hover': {
            opacity: '1'
        }
    },
    projectsDIV: {
        width: '100%',
        // background: '#F2F2F2',
        fontFamily: 'Montserrat',
        margin: '40px 0',
    },
    otherProjects: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actualProject: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        borderBottom: '1px solid lightgray',
        margin: '20px',
    },

    imgs: {
        position: 'relative',
        width: '90%',
        background: '#EBEBEB',
        height: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    actualIMG: {
        width: '50%',
    },
    sleepIMG: {
        width: '35%'
    },
    buttonOverylay: {
        zIndex: '3',
        border: '2px solid #0069e2',
        borderRadius: '5px',
        position: 'absolute',
        padding: '3px 22px',
        fontSize: '1.6rem',
        color: 'white',
        top: '45%',
        left: '25%',
        textDecoration: 'none',
        transition: 'transform 1s',
        '&:hover': {
            transform: 'translate(10%, -25%)',
        }
    },
    buttonOverylay2: {
        zIndex: '3',
        border: '2px solid #0069e2',
        borderRadius: '5px',
        position: 'absolute',
        padding: '3px 22px',
        fontSize: '1.6rem',
        color: 'white',
        top: '45%',
        right: '25%',
        textDecoration: 'none',
        transition: 'transform 1s',
        '&:hover': {
            transform: 'translate(10%, -25%)',
        },

    },
    texts: {
        textAlign: 'left',
        width: '94%',
        fontSize: '1.2rem'

    },
    span: {
        color: '#0069e2',
        fontStyle: 'bold',
    },
    mobileButton: {
        textDecoration: 'none',
        fontSize: '1.2rem',
        color: '#0069e2',
        margin: '20px',
        '&:hover': {
            color: 'black'
        }
    },
    null: {
        display: 'none',
    },
    mobileTexts: {
        width: '94%',
        textAlign: 'left',
        display: 'flex',
        flexFlow: 'row wrap',
        alignContent: 'flex-start',
        justifyContent: 'space-evenly',
        fontSize: '1.2rem'

    },
    header: {
        textAlign: 'center',
        alignSelf: 'center',
    },


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
            {/* <section className={classes.sections}>
                <div className={width > 1000 ? classes.about :  width > 800 ? classes.mobileAbout : classes.fullAbout}>
                    <div className={classes.projectName}>
                        <h2 className={classes.h2}>SleepTracker</h2>
                        <p>An app to track your sleeping habits and how well you feel when you wake up, built with: React, React-Router, Axios, Auth, and Material-UI </p>
                        <a className={classes.aTag} href="https://github.com/sleeptracker/sleeptracker_fe/tree/master/sleeptracker" target="_blank">Code</a>
                    </div>
                </div>
                <div className={width > 1000 ? classes.img : width > 800 ? classes.mobileImg : classes.hiddenImg}>
                    <a href="https://festive-banach-64ae41.netlify.com/" target="_blank"><img style={{width: '100%'}} src={require('../Assets/sleeptracker.PNG')} /></a>
                </div>

            </section>
            <section className={classes.middleSection}>
                <div className={width > 1000 ? classes.img : width > 800 ? classes.mobileImg : classes.hiddenImg}>
                    <a href="brewbase.danielmartin.co" target="_blank"><img style={{width: '100%'}}src={require('../Assets/brewbase.PNG')} /></a> 
                </div>
                <div className={width > 1000 ? classes.about :  width > 800 ? classes.mobileAbout : classes.fullAbout}>
                    <div className={classes.projectName}>
                        <h2 className={classes.h2}>BrewBase</h2>
                        <p>Find local breweries or search a city, built with React, React-Router, Material-UI, and Axios</p>
                        <a className={classes.aTag}href="https://github.com/ohfr/BrewBase" target="_blank">Code</a>
                    </div>
                </div>
            </section>
            <section className={classes.lastSection}>
                <div className={width > 1000 ? classes.about :  width > 800 ? classes.mobileAbout : classes.fullAbout}>
                    <div className={classes.projectName}>
                        <h2 className={classes.h2}>Space Invaders Clone</h2>
                        <p>A fun clone of the classic arcade game Space Invaders, uses pure JavaScript on an HTML canvas using a OOP paradigm</p>
                        <a className={classes.aTag} href="https://codepen.io/ohfr/pen/mYPoEO" target="_blank">Code</a>
                    </div>
                </div>
                <img className={width > 1000 ? classes.img : width > 800 ? classes.mobileImg : classes.hiddenImg} src={require('../Assets/sleeptracker.PNG')} />
            </section> */}
            {/* <div className={classes.skills}>
            <h2>SKILLS</h2>
              <div className={classes.exampleABOUT}>
                 <div className={classes.skillCard}>
                     <h3>Languages</h3> 
                     <p>JavaScript</p>
                     <p>HTML</p>
                     <p>CSS</p>
                     <p>SQL</p>
                     <p>Java</p>
                 </div>
                 <div className={classes.skillCard}>
                     <h3>Libraries/Frameworks</h3>
                     <p>Redux</p>
                     <p>React</p>
                     <p>Node.js</p>
                     <p>LESS/SASS</p>
                     <p>Express</p>
                 </div>
                 <div className={classes.skillCard}>
                     <h3>DataBase</h3>
                     <p>SQLite3</p>
                     <p>PostgreSQL</p>
                 </div>
                 <div className={classes.skillCard}>
                     <h3>Testing</h3>
                     <p>Jest</p>
                     <p>React Testing Library</p>
                 </div>
                 <div className={classes.skillCard}>
                     <h3>Tools</h3>
                     <p>Git</p>
                     <p>Github</p>
                     <p>Netlify</p>
                     <p>Zeit</p>
                     <p>Terminal</p>
                 </div>
              </div>
              </div> */}

            {/* <div className={classes.projects}>
            <h2>PROJECTS</h2>
            <div className={width > 1000 ? classes.example : classes.exampleMOBILE}>
                <div className={width > 1000 ? classes.exampleDIV : classes.exampleDIVMOBILE}>
                    <div className={classes.picDIV}>
                        <img src={require('../Assets/brewbase.PNG')} className={classes.exampleIMG} />
                        <div className={classes.overlay}>hello</div>
                    </div>
                    <div className={classes.h2DIV}>
                    <h2>Brewbase</h2>
                    <p>Find local breweries or search a city, built with React, React-Router, Material-UI, and Axios</p>
                    </div>
                </div>
                <div className={width > 1000 ? classes.exampleDIV : classes.exampleDIVMOBILE}>
                        <div className={classes.picDIV}>
                        <img src={require('../Assets/brewbase.PNG')} className={classes.exampleIMG} />
                        </div>
                        <div className={classes.h2DIV}>
                        <h2>Brewbase</h2>
                        <p>Find local breweries or search a city, built with React, React-Router, Material-UI, and Axios</p>
                        </div>
                    </div>
                <div className={width > 1000 ? classes.exampleDIV : classes.exampleDIVMOBILE}>
                    <div className={classes.picDIV}>
                    <img src={require('../Assets/sleeptracker.PNG')} className={classes.exampleIMG} />
                    </div>
                    <div className={classes.h2DIV}>
                    <h2>SleepTracker</h2>
                    <p>Track your sleeping habits and how well you feel throughout your day.</p>
                    <p>React, React-Router, Material-UI, and Axios with Auth.</p>
                    </div>
                </div>

            </div>
            </div>
 */}        <h2 className={classes.header}>PROJECTS</h2>
            <div className={classes.projectsDIV}>
                <div className={classes.otherProjects}>
                    <div className={classes.actualProject}>
                        <div className={classes.imgs}>
                            <img className={classes.actualIMG} src={require('../Assets/brewbaseComp.png')} />
                            <div className={width > 1000 && classes.overlay}>
                                <a href="https://brewbase.danielmartin.co/" target="_blank" className={width > 1000 ? classes.buttonOverylay : classes.null}>Site</a>
                                <a href="https://github.com/ohfr/brewbase" target="_blank" className={width > 1000 ? classes.buttonOverylay2 : classes.null}>Code</a>
                            </div>
                        </div>
                        <div className={width > 1000 ? classes.texts : classes.mobileTexts}>
                            <h2 className={classes.span}>Brewbase</h2>
                            <p className={classes.pTag}>Helps users locate breweries near them, or search other cities, with the ability to favorite breweries for later.</p>
                            <p><strong>Tech: </strong>Axios, React, React-Router, Hooks, Material-UI</p>
                            <a href="https://brewbase.danielmartin.co/" target="_blank" className={width > 1000 ? classes.null : classes.mobileButton}>Site</a>
                            <a href="https://github.com/ohfr/brewbase" target="_blank" className={width > 1000 ? classes.null : classes.mobileButton}>Code</a>

                        </div>
                    </div>
                    <div className={classes.actualProject}>
                        <div className={classes.imgs}>
                            <img className={classes.sleepIMG} src={require('../Assets/macIphone.png')} />
                            <div className={width > 1000 && classes.overlay}>
                                <a href="" target="_blank" className={width > 1000 ? classes.buttonOverylay : classes.null}>Site</a>
                                <a href="https://github.com/sleeptracker/sleeptracker_fe/tree/master/sleeptracker" target="_blank" className={width > 1000 ? classes.buttonOverylay2 : classes.null}>Code</a>
                            </div>
                        </div>
                        <div className={width > 1000 ? classes.texts : classes.mobileTexts}>
                            <h2 className={classes.span}>SleepTracker</h2>
                            <p>Calculates how much sleep you need to feel your best, users are able to create an account and start tracking their sleeping habits.</p>
                            <p><strong>Example Credentials: <br />Username: </strong>example <br /> <strong>Password: </strong>password</p>
                            <p><strong>Tech: </strong>React, React-Router, Axios, Auth, Hooks, Material-UI</p>
                            <a href="" target="_blank" className={width > 1000 ? classes.null : classes.mobileButton}>Site</a>
                            <a href="https://github.com/sleeptracker/sleeptracker_fe/tree/master/sleeptracker" target="_blank" className={width > 1000 ? classes.null : classes.mobileButton}>Code</a>
                        </div>
                    </div>
                    {/* <div className={classes.actualProject}>
                        <div className={classes.imgs}>
                            <img className={classes.actualIMG} src={require('../Assets/brewbase.PNG')} />
                            <div className={classes.overlay}>
                                <a href="" target="_blank" className={classes.buttonOverylay}>Site</a>
                                <a href="https://github.com/ohfr/brewbase" target="_blank" className={classes.buttonOverylay2}>Code</a>
                            </div>
                        </div>
                        <div className={classes.texts}>
                            <h2 className={classes.span}>Brewbase</h2>
                            <p>Find local breweries or search a city, built with React, React-Router, Material-UI, and Axios</p>
                            </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Projects;