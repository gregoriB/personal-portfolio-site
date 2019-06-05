import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../contexts/StateContext';

import '../styles/NavBar.css';

function NavBar() {
    const state = useContext(StateContext);
    const handleSetCurrentPage = e => {
        state.setCurrentPage(e.target.name)
    }
    return (
        <div className='nav-bar'>
            <div className='links'>
                <div className='home-link'>
                    <Link 
                        className={state.currentPage === 'Home' && 'active-link'}
                        name='Home' 
                        to='Home'
                        onClick={handleSetCurrentPage}
                    >
                        Home
                    </Link>
                </div>
                <div className='page-links'>
                    <Link 
                        className={state.currentPage === 'About-Me' && 'active-link'}
                        name='About-Me' 
                        to='About-Me'
                        onClick={handleSetCurrentPage}
                    >
                        About Me
                    </Link>
                    <Link 
                        className={state.currentPage === 'Projects' && 'active-link'}
                        name='Projects' 
                        to='Projects'
                        onClick={handleSetCurrentPage}
                    >
                        Projects
                    </Link>
                    <Link 
                        className={state.currentPage === 'Contact-Me' && 'active-link'}
                        name='Contact-Me' 
                        to='Contact-Me'
                        onClick={handleSetCurrentPage}
                    >
                        Contact Me
                    </Link>
                </div>
                <div>
                    <a 
                        className='github' 
                        href='https://github.com/gregoriB?tab=repositories' 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        My Github
                    </a>
                </div>
            </div>
        </div>
    )
  }

  export default NavBar;