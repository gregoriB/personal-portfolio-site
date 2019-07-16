import React from 'react';
import '../styles/home-page.css';

const Home = () => {
    return (
        <div data-name='Home' className='home page'>
            <div className="stylish-container">
                <section className='home-container'>
                    <h1>Hello!  I'm Brandon.</h1>
                    <p>
                        Solving problems, challenging myself, and being creative are things I enjoy quite a bit.  That's why I love web development.
                    </p>
                    <a className='resume' href='https://drive.google.com/file/d/159udbPKcY9gqWEmXgAx4OB5wPEVR6Gkz/view?usp=sharing' target='_blank' rel="noopener noreferrer">View my Résumé</a>
                </section>
            </div>
            <div className='decorative-1' />
        </div>
    );
}

export default Home;