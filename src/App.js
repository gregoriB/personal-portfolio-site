import React, { useContext } from 'react';
import { StateContext } from './contexts/StateContext';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

import './App.css';

function App() {
  const state = useContext(StateContext);

  return (
    <div className='app'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/aboutMe' component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contactMe' component={ContactMe} />
      </Switch>
    </div>
  )
}

export default App;