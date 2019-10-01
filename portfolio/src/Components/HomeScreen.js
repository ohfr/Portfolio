import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'; 
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import Card from '@material-ui/core/Card'

const useStyles = makeStyles({
    button: {
        color: 'white',
        background: 'rgba(0,0,0, .2)',
        '&:hover': {
            fontSize: '1rem',
            background: 'rgba(255, 255, 255, 0.1)'
        }
    },
    highlight: {
        color: 'rgba(60, 30 , 140, .6)'
    },
    para: {
        fontSize: '1.5rem',
    },
    wrapper: {
        // background: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.8)),url(${require("../Assets/keyboard.jpg")}) no-repeat center center fixed`,
        color: 'white',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        position: 'absolute'

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
        width: '35vw',
        height: '40vh',
        background: 'black',
        position: 'relative',

    },
    main: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',


    }
})

const HomeScreen = () => {
    const classes = useStyles();
    return (
    <div className={classes.main}>
        <div className={classes.wrapper}>
            <div className={classes.firstWrap}>

            </div>
        
        <div className={classes.secondWrap}></div>
        </div>
        <div className={classes.middleWrapper}>
            <Card>
                <h1>Hi, I'm <span className={classes.highlight}>Daniel Martin</span></h1>
                <p className={classes.para}>Software Developer, Car enthusiast.</p>

                <h2>Let's change the world with a keyboard</h2>
                <Button component={Link} to="/Home" className={classes.button}>Interested? <ArrowRightAlt /></Button>
            </Card>
        </div>
        </div>
    )
}

export default HomeScreen;