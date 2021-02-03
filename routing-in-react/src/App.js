import React from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Welcome from './Components/welcome/Welcome';
import Clock from './Components/clock/Clock';
import Contact from './Components/contact/Contact';
import Navigation from './Components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path="/" 
      render={(props) => <Welcome {...props} name="Hamiduh" />
      }
     />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      
    </div>
  );
}

export default App;
