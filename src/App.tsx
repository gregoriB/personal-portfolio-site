import React, { useContext, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { StateContext } from './contexts/StateContext';

import NavBar from './components/NavBar';
import Home from './components/HomePage';
import AboutMe from './components/AboutPage';
import Projects from './components/ProjectsPage';
import ContactMe from './components/ContactPage';

import './styles/normalize.css';
import './App.css';

const App: React.SFC<any> = ({ history }) => {
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
            <CSSTransition 
              key={location.key}
              timeout={{ enter: 1500, exit: 1200}} 
              classNames="item"
              appear={true}
            >
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