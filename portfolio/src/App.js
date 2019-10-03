import React, { useRef, useEffect } from 'react';
import './App.css';
import { Route }  from 'react-router-dom';  
import HomeScreen from './Components/HomeScreen';
import Home from './Components/Home';
import Skills from './Components/Skills';
import { TweenMax, Power3 } from 'gsap';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  app: {
 
  },


})


function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/Home" component={Home} />
    </div>
  );
}

export default App;
