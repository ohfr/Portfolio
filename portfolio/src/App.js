import React, { useRef, useEffect } from 'react';
import './App.css';
import { Route }  from 'react-router-dom';  
import HomeScreen from './Components/HomeScreen';
import About from './Components/About';
import Skills from './Components/Skills';
import { TweenMax, Power3 } from 'gsap';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  app: {
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
    position: 'absolute',

},

})


function App() {
  const classes = useStyles();
  let background1 = useRef(null);
  let background2 = useRef(null);
  let card = useRef(null);
  useEffect(() => {
    TweenMax.from(background1, .9, {opacity: 0, x: -200, ease: Power3.easeInOut})
    TweenMax.from(background2, .9, {opacity: 0, x: 200, ease: Power3.easeInOut, delay: .4})

  
  }, [])
  return (
    <div className={classes.app}>
      <div className={classes.firstWrap} ref={el => background1 = el}></div>
      <div className={classes.secondWrap} ref={el => background2 = el }></div>
      {/* <Route exact path="/" component={HomeScreen} />
      <Route path="/Home" component={Home} /> */}
      <div className={classes.middleWrapper}>
        <Route exact path="/" component={HomeScreen}  />
        <Route path ="/About" component={About} />
        <Route path="/Skills" component={Skills} />
      </div>
      {/* <Home /> */}
    </div>
  );
}

export default App;
