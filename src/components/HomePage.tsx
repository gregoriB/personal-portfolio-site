import React from 'react';
import '../styles/home-page.css';

const Home = () => {
    return (
        <div data-name='Home' className='home page'>
            <div className="stylish-container">
                <section className='home-container'>
                    <h1>Hello!  I'm Brandon.</h1>
                    <p>
                        I love web development.  Solving problems, challenging myself, and being creative are things I enjoy, and web development lets me do all of that at once.
                    <a className='resume' href='https://novoresume.com/a/brandon.gregori.1' target='_blank' rel="noopener noreferrer">Resume</a>
                    </p>
                </section>
            </div>
            <div className='decorative-1' />
        </div>
    );
}

export default Home;