import React, {  useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../contexts/StateContext';

import '../styles/nav-mobile.css';
import '../styles/nav-desktop.css';

type MouseClick = React.MouseEvent<any>

const NavBar = () => {
    const { currentPage, setCurrentPage, isNavOpen, setIsNavOpen, isMobile, setIsMobile, isModalOpen } = useContext(StateContext);

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

    const navBarJSXProperties = { 
        tabIndex: isModalOpen ? -1 : 0,
        onClick: (e: MouseClick) => handleUpdateDisplay(e)
    }

    const anchorTagProperties = {
        target: '_blank',
        rel: "noopener noreferrer"
    }

    return (
        <div className={handleAssignNavClass()}>
            <button onClick={handleToggleNav}>|||</button>
            <div className='links'>
                <Link 
                    className={`logo ${currentPage === 'Home' ? 'active-link' : 'inactive-link'}`}
                    data-name='Home'
                    to='Home'
                    {...navBarJSXProperties}
                >
                    BG
                </Link>
                <Link 
                    className={currentPage === 'Home' ? 'active-link' : 'inactive-link'}
                    data-name='Home'
                    to='Home'
                    {...navBarJSXProperties}
                >
                    Home
                </Link>
                <Link 
                    className={currentPage === 'About-Me' ? 'active-link' : 'inactive-link'}
                    data-name='About-Me' 
                    to='About-Me'
                    {...navBarJSXProperties}
                >
                    About Me
                </Link>
                <Link 
                    className={currentPage === 'Projects' ? 'active-link' : 'inactive-link'}
                    data-name='Projects' 
                    to='Projects'
                    {...navBarJSXProperties}
                >
                    My Projects
                </Link>
                <Link 
                    className={currentPage === 'Contact-Me' ? 'active-link' : 'inactive-link'}
                    data-name='Contact-Me' 
                    to='Contact-Me'
                    {...navBarJSXProperties}
                >
                    Contact Info
                </Link>
            </div>
            <div className='social-media'>
                <a href='https://github.com/gregoriB' id='github-image' {...navBarJSXProperties} {...anchorTagProperties}>Github</a>
                <a href='https://www.linkedin.com/in/brandon-gregori' id='linkedin-image' {...navBarJSXProperties} {...anchorTagProperties}>Linkedin</a>
                <a href='https://www.facebook.com/people/Brandon-Gregori/1128665234' id='facebook-image' {...navBarJSXProperties} {...anchorTagProperties}>Facebook</a>
            </div>
        </div>
    )
}

export default NavBar;