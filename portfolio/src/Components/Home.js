import React, { useRef, useEffect } from 'react';
import SideNav from './SideNav';

import { TweenMax, Power3 } from 'gsap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        background: 'white',
        width: '100vw',
        height: '100vh',
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
        <div className={classes.wrapper} ref={el => intro = el}>
            <SideNav />
            {/* <Route path="/About" component={About} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Resume" component={Resume} /> */}
        </div>
    )
}

export default Home;