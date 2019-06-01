import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css';

export default function navBar() {
  
    return (
        <div className='nav-bar'>
            <div className='links'>
                <Link className='link home' to='home'>Home</Link>
                <div>
                    <Link className='link about-me' to='aboutMe'>About Me</Link>
                    <Link className='link projects' to='projects'>Projects</Link>
                    <Link className='link contact-me' to='contactMe'>Contact Me</Link>
                </div>
                <a className='github' href='https://github.com/gregoriB?tab=repositories' target="_blank" rel="noopener noreferrer">My Github</a>
            </div>
        </div>
    )
  }