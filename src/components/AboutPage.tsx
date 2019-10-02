import React, { useRef } from "react";
import "../styles/about-page.css";
import MovingObjects from "./MovingObjects";

const AboutMe = () => {
    const page = useRef<HTMLDivElement | null>(null);

    return (
        <div className="about-me page" ref={page}>
            <MovingObjects page={page} />
            <div className="stylish-container">
                <div className="about-me-stuff">
                    <section className="about-me-container">
                        <h2>Front-end and general experience:</h2>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript/ES6+</li>
                            <li>Typescript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Testing</li>
                            <li>AJAX</li>
                            <li>SCSS</li>
                            <li>Bootstrap</li>
                            <li>Git</li>
                            <li>Linux</li>
                        </ul>
                    </section>
                    <section className="about-me-container">
                        <h2>Back-end experience:</h2>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>EJS</li>
                            <li>REST APIs</li>
                            <li>JSON</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                        </ul>
                    </section>
                    <section className="about-me-container">
                        <h2>Plans and goals:</h2>
                        <p>
                            I'm a full-stack engineer with a focus on front-end development. I love using
                            React.js and would enjoy working with it full-time, but I'm also very open to
                            learning new frameworks and other technologies. Soon I intend to get more
                            into mobile development with progressive web apps and React-native, and
                            building serverless websites using AWS lambda functions and other cloud
                            computing services.
                        </p>
                    </section>
                </div>
            </div>
            <div className="decorative-1" />
        </div>
    );
};

export default AboutMe;
