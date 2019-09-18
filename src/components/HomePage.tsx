import React from "react";
import "../styles/home-page.css";

const Home = () => {
    return (
        <div data-name="Home" className="home page">
            <div className="stylish-container">
                <section className="home-container">
                    <h1>Hello! I'm Brandon.</h1>
                    <p>
                        Welcome to my personal website. Here you can find out more about me and my
                        projects. Be sure to send me a message if there is anything else you want to
                        know!
                    </p>
                    <a
                        className="resume"
                        href={process.env.PUBLIC_URL + "/resume.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View my Résumé
                    </a>
                </section>
            </div>
            <div className="decorative-1" />
        </div>
    );
};

export default Home;
