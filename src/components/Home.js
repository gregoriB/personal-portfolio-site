import React, { useContext } from 'react';
import '../styles/home.css';
import { StateContext } from '../contexts/StateContext';

export default function Home() {
    const state = useContext(StateContext);
    return (
        <div className={`home page ${state.currentPage === 'Home' ? 'active' : 'inactive'}`}>
            <section className='home-container'>
                <h1>Hello!  I'm Brandon.</h1>
                <p>
                    I love web development.  Solving problems, challenging myself, and being creative are things I enjoy, and web development lets me do them all at once.
                </p>
            </section>
        </div>
    );
}
