import React, {  useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../contexts/StateContext';

import '../styles/mobileNav.css';
import '../styles/desktopNav.css';


const NavBar = () => {
    const state = useContext(StateContext);

    const handleCheckIfMobile = () => {
        const mobileScreen = { width: 950, height: 400};
        const isDisplayMobile = window.innerWidth < mobileScreen.width || window.innerHeight < mobileScreen.height;
        state.setDisplayMode(isDisplayMobile);    
    }

    
      useEffect(() => {
        handleCheckIfMobile();
        window.addEventListener('resize', handleCheckIfMobile);
        return () => {
          window.removeEventListener('resize', handleCheckIfMobile);
        }
      });

    type MouseClick = React.MouseEvent<any>
    
    const handleUpdateDisplay = (e: MouseClick) => {
        state.setCurrentPage(e.currentTarget.dataset.name)
        state.setNavState(false);
    }

    const handleToggleNav = () => {
        state.setNavState(!state.isNavOpen);
    }

    const handleOpenLink = (url: string) => {
        window.open(url, '_blank');
    }

    const handleAssignNavClass = () => {
        if (!state.isMobile) {
            return `desktop-nav`;
        }
        
        return `mobile-nav ${state.isNavOpen ? 'active' : 'inactive'}`;
    }

    return (
        <div className={handleAssignNavClass()}>
            <button onClick={handleToggleNav}>|||</button>
            <div className='links'>
                <Link 
                    className={state.currentPage === 'Home' ? 'active-link' : 'inactive-link'}
                    data-name='Home'
                    to='Home'
                    onClick={handleUpdateDisplay}
                >
                    Home
                </Link>
                <Link 
                    className={state.currentPage === 'About-Me' ? 'active-link' : 'inactive-link'}
                    data-name='About-Me' 
                    to='About-Me'
                    onClick={handleUpdateDisplay}
                >
                    About Me
                </Link>
                <Link 
                    className={state.currentPage === 'Projects' ? 'active-link' : 'inactive-link'}
                    data-name='Projects' 
                    to='Projects'
                    onClick={handleUpdateDisplay}
                >
                    Projects
                </Link>
                <Link 
                    className={state.currentPage === 'Contact-Me' ? 'active-link' : 'inactive-link'}
                    data-name='Contact-Me' 
                    to='Contact-Me'
                    onClick={handleUpdateDisplay}
                >
                    Contact Me
                </Link>
            </div>
            <div className='social-media' >
                <div id='github-image' onClick={() => handleOpenLink('https://github.com/gregoriB?tab=repositories')}>Github</div>
                <div id='linkedin-image' onClick={() => handleOpenLink('https://www.linkedin.com/in/brandon-gregori-59a973176/')}>Linkedin</div>
                <div id='facebook-image' onClick={() => handleOpenLink('https://www.facebook.com/people/Brandon-Gregori/1128665234')}>Facebook</div>
            </div>
        </div>
    )
}

export default NavBar;