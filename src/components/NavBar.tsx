import React, {  useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../contexts/StateContext';

import '../styles/nav-mobile.css';
import '../styles/nav-desktop.css';

type MouseClick = React.MouseEvent<any>

const NavBar = () => {
    const { currentPage, setCurrentPage, isNavOpen, setIsNavOpen, isMobile, setIsMobile } = useContext(StateContext);
    
    const handleUpdateDisplay = (e: MouseClick) => {
        if (e.currentTarget.dataset.name === currentPage) {
            
            return e.preventDefault();
        }
        setCurrentPage(e.currentTarget.dataset.name);
        setIsNavOpen(false);
    }

    const handleToggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const handleAssignNavClass = () => {
        if (!isMobile) {
            return `desktop-nav`;
        }
        
        return `mobile-nav ${isNavOpen ? 'active' : 'inactive'}`;
    }
    
    useEffect(() => {
        const handleCheckIfMobile = () => {
            const mobileScreen = { width: 1100, height: 400};
            const isDisplayMobile = window.innerWidth < mobileScreen.width || window.innerHeight < mobileScreen.height;
            setIsMobile(isDisplayMobile);
        }
        handleCheckIfMobile();
        window.addEventListener('resize', handleCheckIfMobile);
        return () => {
          window.removeEventListener('resize', handleCheckIfMobile);
        }
    }, [setIsMobile]);

    return (
        <div className={handleAssignNavClass()}>
            <button onClick={handleToggleNav}>|||</button>
            <div className='links'>
                <Link 
                    className={currentPage === 'Home' ? 'active-link' : 'inactive-link'}
                    data-name='Home'
                    to='Home'
                    onClick={handleUpdateDisplay}
                >
                    Home
                </Link>
                <Link 
                    className={currentPage === 'About-Me' ? 'active-link' : 'inactive-link'}
                    data-name='About-Me' 
                    to='About-Me'
                    onClick={handleUpdateDisplay}
                >
                    About Me
                </Link>
                <Link 
                    className={currentPage === 'Projects' ? 'active-link' : 'inactive-link'}
                    data-name='Projects' 
                    to='Projects'
                    onClick={handleUpdateDisplay}
                >
                    Projects
                </Link>
                <Link 
                    className={currentPage === 'Contact-Me' ? 'active-link' : 'inactive-link'}
                    data-name='Contact-Me' 
                    to='Contact-Me'
                    onClick={handleUpdateDisplay}
                >
                    Contact Me
                </Link>
            </div>
            <div className='social-media' >
                <a href='https://github.com/gregoriB' id='github-image' target='_blank' rel="noopener noreferrer">Github</a>
                <a href='https://www.linkedin.com/in/brandon-gregori-59a973176/' id='linkedin-image' target='_blank' rel="noopener noreferrer">Linkedin</a>
                <a href='https://www.facebook.com/people/Brandon-Gregori/1128665234' id='facebook-image' target='_blank' rel="noopener noreferrer">Facebook</a>
            </div>
        </div>
    )
}

export default NavBar;