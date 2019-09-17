import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'; 
// import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles({
    button: {
        color: 'white',
        background: 'rgba(0,0,0, .2)',
        '&:hover': {
            // fontSize: '1rem',
            background: 'rgba(255, 255, 255, 0.1)'
        }
    },
    highlight: {
        color: 'rgba(60, 30 , 140, .6)'
    },
    para: {
        fontSize: '1.5rem',
    }
})

const HomeScreen = () => {
    const classes = useStyles();
    return (
        <div>
        <div className="HomeWrapper">
            <h1>Hi, I'm <span className={classes.highlight}>Daniel Martin</span></h1>
            <p className={classes.para}>Software Developer, Car enthusiast.</p>

            <h2>Let's change the world with a keyboard</h2>
            <Button component={Link} to="/Home" className={classes.button}>Interested? <ArrowRightAlt /></Button>
        </div>
        {/* <div>
            more content here
            </div> */}
        </div>
    )
}

export default HomeScreen;