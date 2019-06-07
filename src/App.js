import React from 'react';
// import { StateContext } from './contexts/StateContext';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

import './App.css';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='app-content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/About-Me' component={AboutMe} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Contact-Me' component={ContactMe} />
        </Switch>
      </div>
    </div>
  )
}

export default App;