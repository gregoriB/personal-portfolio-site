import React, { useContext, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { StateContext } from './contexts/StateContext';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

import './styles/normalize.css';
import './App.css';

const App = ({ history }) => {
  const { isModalOpen, setIsModalOpen } = useContext(StateContext);
  
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      isModalOpen && setIsModalOpen(false);
    });

    return unlisten;
  }, [history, isModalOpen, setIsModalOpen]);

  return (
    <div className='app'>
      <NavBar />
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
  );
}

export default withRouter(App);