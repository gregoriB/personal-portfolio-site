import React, { useEffect, useContext } from 'react';
import '../styles/home.css';
import { StateContext } from '../contexts/StateContext';

export default function Home() {
    const { isFirstLoad, setIsFirstLoad } = useContext(StateContext);

    useEffect(() => {
        isFirstLoad && setTimeout(() => setIsFirstLoad(false), 100)
        
    }, [isFirstLoad, setIsFirstLoad])



    return (
        <div data-name='Home' className='home page'>
            <section className={`home-container ${isFirstLoad && 'first-load'}`}>
                <h1>Hello!  I'm Brandon.</h1>
                <p>
                    I love web development.  Solving problems, challenging myself, and being creative are things I enjoy, and web development lets me do them all at once.
                </p>
            </section>
        </div>
    );
}
