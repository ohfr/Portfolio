import React from 'react';
import './App.css';
import { Route }  from 'react-router-dom';  
import Home from './Components/Home';
import SideNav from './Components/SideNav';
import Footer from './Components/Footer';
import About from './Components/About';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, sans-serif'
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
      <Route path="/About" component={About} />
      {/* <Route path="/Home" component={Home} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
