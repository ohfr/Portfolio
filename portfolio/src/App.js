import React from 'react';
import './App.css';
import { Route }  from 'react-router-dom';  
import HomeScreen from './Components/HomeScreen';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomeScreen} />
      <Route path="/Home" component={Home} />
    </div>
  );
}

export default App;
