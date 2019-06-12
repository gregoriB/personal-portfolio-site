import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

import './App.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleCheckIfMobile = () => {
    const mobileScreen = { width: 1000, height: 500 }
    if (window.innerHeight < mobileScreen.height || window.innerWidth < mobileScreen.width) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    handleCheckIfMobile();
    window.addEventListener('resize', handleCheckIfMobile);
    return () => {
      window.removeEventListener('resize', handleCheckIfMobile);
    }
  });

  return (
    <div className='app'>
      { isMobile ? <MobileNav /> : <DesktopNav /> }
      <div className='app-content'>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={{ enter: 500, exit: 100}} classNames="item">
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/Home' component={Home} />
                <Route exact path='/About-Me' component={AboutMe} />
                <Route exact path='/Projects' component={Projects} />
                <Route exact path='/Contact-Me' component={ContactMe} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    </div>
  )
}

export default App;