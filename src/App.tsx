import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { StateContext } from './contexts/StateContext';

import NavBar from './components/NavBar';
import Home from './components/HomePage';
import AboutMe from './components/AboutPage';
import Projects from './components/ProjectsPage';
import ContactMe from './components/ContactPage';
import ErrorPage from './components/ErrorPage';

import './styles/normalize.css';
import './App.css';

const App: React.SFC<any> = ({ history }) => {
  const { isMobile, currentPage, setCurrentPage } = useContext(StateContext);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  let transitions = {
    enter: isMobile ? 500 : isFirstLoad ? 1200 : 2000,
    exit: isMobile ? 500 : isFirstLoad ? 1200 : 2000
  };

  useEffect(() => {
    const location = window.location.pathname.replace(/\//, '');
    if (location !== currentPage) {
      setCurrentPage(location);
    }
  }, [window.location.pathname, currentPage, history, setCurrentPage])

  useEffect(() => {
    setIsFirstLoad(false);
  }, [setIsFirstLoad])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    window.setInterval(() => console.log(currentPage), 1000);
  })

  return (
    <div className='app'>
      <Router>
        <NavBar/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition 
              key={location.key}
              timeout={transitions} 
              classNames="item"
              appear={true}
            >
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/Home' component={Home} />
                <Route exact path='/About-Me' component={AboutMe} />
                <Route exact path='/Projects' component={Projects} />
                <Route exact path='/Contact-Me' component={ContactMe} />
                <Route exact path='/404' component={ErrorPage} />
                <Redirect from='*' to='/404' />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        </Router>
    </div>
  );
}

export default withRouter(App);