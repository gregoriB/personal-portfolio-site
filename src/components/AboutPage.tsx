import React, { useRef } from 'react';
import '../styles/about-page.css';
import MovingObjects from './MovingObjects';

const AboutMe = () => {
    const page = useRef<HTMLDivElement | null>(null);

    return (
        <div className='about-me page' ref={page}>
            <MovingObjects page={page} />
            <div className="stylish-container">
                <div className='about-me-stuff'>
                    <section className='about-me-container'>
                        <h2>I have experience with:</h2>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript/ES6+</li>
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
                        <h2>Other tech I am currently learning:</h2>
                        <ul>
                            <li>React-redux</li>
                            <li>MySQL</li>
                            <li>SCSS</li>
                        </ul>
                    </section>
                    <section className='about-me-container'>
                        <h2>Plans and goals:</h2>
                        <p>
                            My goal is to be a professional full-stack engineer with a focus on the front-end.  I love using React.js and would enjoy working with it full-time, 
                            but I'm also very open to learning new frameworks and other technologies.  Soon I intend to get more into mobile development with progressive 
                            web apps and React-native, and building serverless websites using AWS lambda functions and other cloud computing services.
                        </p>
                    </section>
                </div>
            </div>
            <div className='decorative-1' />
        </div>
    );
}

export default AboutMe;