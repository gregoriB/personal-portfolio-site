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
                <Link 
                    style={{
                        background: state.currentPage === 'Home' && 'red'
                    }}
                    name='Home' 
                    className='link home' 
                    to='Home'
                    onClick={handleSetCurrentPage}
                >
                    Home
                </Link>
                <div>
                    <Link 
                        style={{
                            background: state.currentPage === 'About-Me' && 'red'
                        }}
                        name='About-Me' 
                        className='link about-me' 
                        to='About-Me'
                        onClick={handleSetCurrentPage}
                    >
                        About Me
                    </Link>
                    <Link 
                        style={{
                            background: state.currentPage === 'Projects' && 'red'
                        }}
                        name='Projects' 
                        className='link projects' 
                        to='Projects'
                        onClick={handleSetCurrentPage}
                    >
                        Projects
                    </Link>
                    <Link 
                        style={{
                            background: state.currentPage === 'Contact-Me' && 'red'
                        }}
                        name='Contact-Me' 
                        className='link contact-me' 
                        to='Contact-Me'
                        onClick={handleSetCurrentPage}
                    >
                        Contact Me
                    </Link>
                </div>
                <a 
                    className='github' href='https://github.com/gregoriB?tab=repositories' 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    My Github
                </a>
            </div>
        </div>
    )
  }

  export default NavBar;