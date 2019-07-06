import React, { useRef } from 'react';
import '../styles/about-page.css';
import MovingObjects from './MovingObjects';

const AboutMe = () => {
    const page = useRef<HTMLDivElement | null>(null);

    return (
        <div className='about-me page' ref={page}>
            <MovingObjects page={page} />
            <div className='about-me-stuff'>
                <section className='about-me-container'>
                    <h2>I have experience with:</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>ES6+</li>
                        <li>Typescript</li>
                        <li>React</li>
                        <li>Jest</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>AJAX</li>
                        <li>REST APIs</li>
                        <li>JSON</li>
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
        </div>
    );
}

export default AboutMe;