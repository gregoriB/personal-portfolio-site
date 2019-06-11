import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

import './App.css';

// const duration = 300;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
// }

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered:  { opacity: 1 },
//   exiting:  { opacity: 0 },
//   exited:  { opacity: 0 },
// };

const App = () => {
  // const [inProp, setInProp] = useState(false);
  return (
    <div className='app'>
      <NavBar />
      <div className='app-content'>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={1000} classNames="item">
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