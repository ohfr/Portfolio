import React, { useRef, useEffect } from 'react';
import './App.css';
import { Route }  from 'react-router-dom';  
import HomeScreen from './Components/HomeScreen';
import Home from './Components/Home';
import Skills from './Components/Skills';
import SideNav from './Components/SideNav';
import { TweenMax, Power3 } from 'gsap';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  app: {
    
  },
  upperNav: {
    background: '#F2F2F2',
    display: 'flex',
    flexFlow: 'column wrap', 
  }


})


function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.upperNav}>
      <SideNav />
      <Route exact path="/" component={Home} />
      {/* <Route path="/Home" component={Home} /> */}
      </div>
    </div>
  );
}

export default App;
