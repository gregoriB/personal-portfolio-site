import React, {  useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../contexts/StateContext';

import '../styles/mobileNav.css';


const MobileNav = () => {
    const [isNavOpen, setNavState] = useState(false);

    const state = useContext(StateContext);
    const handleSetCurrentPage = e => {
        state.setCurrentPage(e.target.name)
    }

    const handleToggleNav = () => {
        setNavState(!isNavOpen);
    }

    const handleOpenLink = url => {
        window.open(url, '_blank');
    }

    return (
        <div className={`mobile-nav ${isNavOpen ? 'active' : null}`}>
            <button onClick={handleToggleNav}>|||</button>
            <div className='mobile-links'>
                <Link 
                    className={state.currentPage === 'Home' ? 'active-link' : null}
                    name='Home' 
                    to='Home'
                    onClick={handleSetCurrentPage}
                >
                    Home
                </Link>
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
                <div id='github-image' onClick={() => handleOpenLink('https://github.com/gregoriB?tab=repositories')} />
                <div id='linkedin-image' onCick={() => handleOpenLink('https://www.linkedin.com/in/brandon-gregori-59a973176/')} />
                <div id='facebook-image' onClick={() => handleOpenLink('https://www.facebook.com/people/Brandon-Gregori/1128665234')} />
            </div>
        </div>
    )
}

export default MobileNav;