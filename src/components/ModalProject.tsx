import React, { useContext, useState, useEffect, useRef } from 'react';
import { StateContext } from '../contexts/StateContext';
import projectData from '../helpers/projectData';
import '../styles/modal.css';

function ModalProject() {

    const state = useContext(StateContext);

    const [scrollState, setScrollState] = useState('inactive');
    const index =  state.currentProject;
    const project = projectData[index];

    type mouseEvent = React.SyntheticEvent<HTMLDivElement>;

    const handleCloseModal = (e: mouseEvent) => {
        if (!(e.target instanceof HTMLElement) || !e.target.id) {

            return;
        }
        state.setIsModalOpen(false);
    }

    const desc = useRef<HTMLDivElement | null>(null);
    const article = useRef<HTMLElement | null>(null);

    useEffect(() => {
        let scrollTimeout: number;
        const modalArticle = article.current!;

        const handleUpdateArticle = () => {
            desc.current!.innerHTML = project.desc;
            modalArticle && modalArticle.scrollTo(0, 0);
        };

        handleUpdateArticle();

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key !== 'Escape') {
    
                return;
            }
            state.setIsModalOpen(false);
        }

        window.addEventListener('keydown', handleKeyPress);

        const handleScrollBarVisibility = () => {
            clearTimeout(scrollTimeout);
            setScrollState('active');
            scrollTimeout = window.setTimeout(() => setScrollState('inactive'), 1000);
        }

        modalArticle && modalArticle.addEventListener('scroll', handleScrollBarVisibility);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            modalArticle && modalArticle.removeEventListener('scroll', handleScrollBarVisibility);
        }
    }, [state.currentProject,  project.desc, state]);

    return (
        <div 
            className={`project-modal ${state.isModalOpen ? 'enter' : 'exit'}`}
            id='outer-modal'
            onClick={handleCloseModal}
        >   
            <div className='modal-main'>
                <div className='modal-content' >
                    <header className='modal-header'>
                        <h1>{projectData[index].name}</h1>
                        <div id='close' className='close-modal' onClick={handleCloseModal}>X</div>
                    </header>
                    <article className={`modal-article ${scrollState}`} data-ref={article}>
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