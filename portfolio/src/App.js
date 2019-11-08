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
})


function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className="upperNav">
        <SideNav />
        <Route exact path="/" component={Home} />
      </div>
      {/* <Route exact path="/About" component={About} /> */}
      <Footer />
    </div>
  );
}

export default App;
