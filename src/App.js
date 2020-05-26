import React from 'react';
import './App.css';

//Created Components
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import {ResumeProvider} from './Components/ResumeContext';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <ResumeProvider>
        <div className="App">
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </ResumeProvider>
    </Router>
  );
}

export default App;
