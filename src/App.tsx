import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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

const App: React.SFC<any> = () => {
  const { isModalOpen, setIsModalOpen, isMobile, currentPage, setCurrentPage } = useContext(StateContext);
  const [previousPage, setPreviousPage] = useState<string>('Home');
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  let transitions = {
    enter: isMobile ? 500 : isFirstLoad ? 1200 : 2000,
    exit: isMobile ? 500 : isFirstLoad ? 1200 : 2000
  };

  const handleError = () => {
    setCurrentPage('404');

    return <ErrorPage />
  }

  useEffect(() => {
    const location = window.location.pathname.replace(/\//gi, '');
    if (currentPage !== location) {
      setCurrentPage(location);
    }
  });

  useEffect(() => {
    setIsFirstLoad(false);
  }, [setIsFirstLoad])

  useEffect(() => {
    if (currentPage !== previousPage) {
      window.scrollTo(0, 0);
      isModalOpen && setIsModalOpen(false);
      setPreviousPage(currentPage);
    }

  }, [previousPage, currentPage, isModalOpen, setIsModalOpen, isMobile, transitions]);

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
                <Route exact path='/404' render={handleError} />
                <Redirect from='*' to='/404' />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        </Router>
    </div>
  );
}

export default App;