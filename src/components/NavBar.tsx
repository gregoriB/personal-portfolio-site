import React, {  useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../contexts/StateContext';

import '../styles/nav-mobile.css';
import '../styles/nav-desktop.css';

type MouseClick = React.MouseEvent<any>;

const NavBar = () => {
    const { currentPage, setCurrentPage, isNavOpen, setIsNavOpen, isMobile, setIsMobile, isModalOpen } = useContext(StateContext);
    const [ logo, setLogo ] = useState('');

    const handleUpdateDisplay = (e: MouseClick) => {
        const { name, type } = e.currentTarget.dataset;
        if (name === currentPage) {
            
            return e.preventDefault();
        }
        if (type === 'social-media') {

            return e.currentTarget.blur();
        }

        !e.ctrlKey && setCurrentPage(e.currentTarget.dataset.name);
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
        tabIndex: isModalOpen ? -1 : undefined,
        onClick: (e: MouseClick) => handleUpdateDisplay(e)
    }

    const anchorTagProperties = {
        target: '_blank',
        rel: "noopener noreferrer",
        'data-type': 'social-media'
    }

    useEffect(()=> {
        const dynamicLogo = (text: string = ''): string => {
            const generateBannerText = () => {
                const coinToss = Math.random();
                return coinToss <= .33 ? 'brandon-gregori.com' : coinToss > .33 && coinToss < .66 ? 'Web Developer' : 'Brandon Gregori';
            }
            const maximumLoops = 1000;
            let newBannerText = generateBannerText(), counter = 0;
            while (newBannerText === text && counter < maximumLoops) {
                newBannerText = generateBannerText();
                counter++;
            }
            return newBannerText;
        }
        setLogo('Brandon Gregori');
        const randomNames = window.setInterval(() => setLogo(prevState => dynamicLogo(prevState)), 10000);

        return () => {
            clearInterval(randomNames)
        }
    }, [])

    return (
        <div className={handleAssignNavClass()}>
            <Link 
                className={`logo ${currentPage === 'Home' || currentPage === '' ? 'active-link' : 'inactive-link'}`}
                data-name='Home'
                to='/'
                {...navBarJSXProperties}
            >
                <div><span>{logo}</span></div>
            </Link>
            <button onClick={handleToggleNav}>|||</button>
            <div className='links'>
                <Link 
                    className={currentPage === 'Home' || currentPage === '' ? 'active-link' : 'inactive-link'}
                    data-name='Home'
                    to='/'
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
                <a href='https://twitter.com/BrandonGregori' id='twitter-image' {...navBarJSXProperties} {...anchorTagProperties}>Twitter</a>
            </div>
        </div>
    )
}

export default NavBar;