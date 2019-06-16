import React, { useContext, useState, useEffect, useRef } from 'react';
import { StateContext } from '../contexts/StateContext';
import projectData from '../helpers/projectData';
import '../styles/modal.css';

function ModalProject() {

    const state = useContext(StateContext);

    const [scrollState, setScrollState] = useState('inactive');
    const index = state.currentProject;
    const project = projectData[index];

    const handleCloseModal = e => {
        if (!e.target.id) {
            
            return
        }
        state.setIsModalOpen(false);
    }

    // const handleKeyPress = e => {
    //     if (e.key !== 'Escape') {

    //         return;
    //     }
    //     state.setIsModalOpen(false);
    // }

    const desc = useRef(null);
    const article = useRef(null);

    // const handleUpdateArticle = () => {
    //     desc.current.innerHTML = project.desc;
    //     article.current.scrollTo(0, 0);
    // }



    // const handleScrollBarVisibility = () => {
    //     console.log('enter')
    //     clearTimeout(scrollTimeout);
    //     setScrollState('active');
    //     scrollTimeout = setTimeout(() => setScrollState('inactive'), 1000);
    // }

    useEffect(() => {
        let scrollTimeout = 0;
        
        const modalArticle = article.current;
        const handleKeyPress = e => {
            if (e.key !== 'Escape') {
    
                return;
            }
            state.setIsModalOpen(false);
        }
        const handleUpdateArticle = () => {
            desc.current.innerHTML = project.desc;
            article.current.scrollTo(0, 0);
        };

        handleUpdateArticle();

        const handleScrollBarVisibility = () => {
            // console.log('enter')
            clearTimeout(scrollTimeout);
            setScrollState('active');
            scrollTimeout = setTimeout(() => setScrollState('inactive'), 1000);
        }
        window.addEventListener('keydown', handleKeyPress);
        modalArticle.addEventListener('scroll', handleScrollBarVisibility);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            modalArticle.removeEventListener('scroll', handleScrollBarVisibility);
        }
    }, [state.currentProject,  project.desc, state]);

    return (
        <div 
            className={`project-modal ${state.isModalOpen ? 'enter' : 'exit'}`}
            id='outer-modal'
            onClick={e => handleCloseModal(e)}
        >   
            <div className='modal-main'>
                <div className='modal-content' >
                    <header className='modal-header'>
                        <h1>{projectData[index].name}</h1>
                        <span id='close' className='close-modal' onClick={handleCloseModal}>X</span>
                    </header>
                    <article className={`modal-article ${scrollState}`} ref={article}>
                        <div className='hide-scroll' />
                        <div className='article-content'>
                            <div className='date'>{project.date}</div>
                            <img src={require(`../images/${project.image}`)} alt={project.name}/>
                            <div ref={desc}>{project.desc}</div>
                        </div>
                    </article>
                    <div className='project-links'>
                        { 
                            project.linkSite 
                            && 
                            <a href={project.linkSite} target='_blank' rel="noopener noreferrer">CHECK IT OUT!</a> 
                        }
                        <a href={project.linkRepo} target='_blank' rel="noopener noreferrer">GITHUB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProject;