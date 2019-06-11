import React, { useContext } from 'react';
import '../styles/about.css';
import { StateContext } from '../contexts/StateContext';

export default function AboutMe() {
    const state = useContext(StateContext);
    return (
        <div className={`about-me page ${state.currentPage === 'About-Me' ? 'active' : 'inactive'}`}>
            <section className='about-me-container'>
                <h2>My main skills:</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>EJS</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                </ul>
            </section>
            <section className='about-me-container'>
                <h2>Other technologies I am currently learning:</h2>
                <ul>
                    <li>React-redux</li>
                    <li>MySQL</li>
                    <li>SCSS</li>
                </ul>
            </section>
            <section className='about-me-container'>
                <h2>My plans and goals:</h2>
                <p>
                    Soon I intend to get into mobile development using React-native, but right now I'm focused on improving my web development 
                    skills and getting a web developer job.  I very much enjoy working in the front-end and would love a job working 
                    with React full-time, but I'm open to learning other Javascript libraries and frameworks, or any other technologies I need 
                    to know.
                </p>
            </section>
        </div>
    );
}