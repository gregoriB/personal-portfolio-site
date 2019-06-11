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
            <div className='main'>
                <div className='home-link'>
                    <Link 
                        className={state.currentPage === 'Home' ? 'active-link' : null}
                        name='Home' 
                        to='Home'
                        onClick={handleSetCurrentPage}
                    >
                        Home
                    </Link>
                </div>
                <div className='page-links'>
                    <Link 
                        className={state.currentPage === 'About-Me' ? 'active-link' : null}
                        name='About-Me' 
                        to='About-Me'
                        onClick={handleSetCurrentPage}
                    >
                        About Me
                    </Link>
                    <Link 
                        className={state.currentPage === 'Projects' ? 'active-link' : null}
                        name='Projects' 
                        to='Projects'
                        onClick={handleSetCurrentPage}
                    >
                        Projects
                    </Link>
                    <Link 
                        className={state.currentPage === 'Contact-Me' ? 'active-link' : null}
                        name='Contact-Me' 
                        to='Contact-Me'
                        onClick={handleSetCurrentPage}
                    >
                        Contact Me
                    </Link>
                </div>
                <div className='social-media' >
                    <div className='social-media-links'>
                        <a 
                            className='media-link'
                            href='https://github.com/gregoriB?tab=repositories' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            id='github-link'
                        >
                            Github
                        </a>
                        <span className='media-image' id='github-image' />
                    </div>
                    <div className='social-media-links'>
                        <a
                            className='media-link'
                            href='https://www.linkedin.com/in/brandon-gregori-59a973176/'
                            target='blank'
                            rel='noopener noreferrer'
                            id='linkedin-link'
                        >
                            Linkedin
                        </a>
                        <span className='media-image' id='linkedin-image' />
                    </div>
                    <div className='social-media-links'>
                        <a
                            className='media-link'
                            href='https://www.facebook.com/people/Brandon-Gregori/1128665234'
                            target='blank'
                            rel='noopener noreferrer'
                            id='facebook-link'
                        >
                            Facebook
                        </a>
                        <span className='media-image' id='facebook-image' />
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default NavBar;