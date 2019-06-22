import React, { useContext, useState, useEffect, useRef } from 'react';
import { StateContext } from '../contexts/StateContext';
import ModalImage from './ImageModal';
import projectData from '../helpers/projectData';
import '../styles/projectModal.css';
import '../styles/modalTransitions.css';

const ModalProject = () => {
    const { currentProject, isImageVisible, setIsImageVisible, isModalOpen, setIsModalOpen, handleToggleImage } = useContext(StateContext);

    const [scrollState, setScrollState] = useState<string | null>('inactive');
    const index = currentProject;
    const project = projectData[index];

    type mouseEvent = React.SyntheticEvent<HTMLDivElement>;

    const handleCloseModal = (e: mouseEvent) => {
        if (!(e.target instanceof HTMLElement) || !e.target.dataset.util ||  isImageVisible) {

            return;
        }
        setIsModalOpen(false);
    }

    const description = useRef<HTMLDivElement | null>(null);
    const article = useRef<HTMLElement | null>(null);

    useEffect(() => {
        let scrollTimeout: number;
        const currentDesc = description.current!;
        const currentArticle = article.current!;

        const handleUpdateArticle = () => {
            currentDesc.innerHTML = project.desc;
            currentArticle.scrollTo(0, 0);
        };
        handleUpdateArticle();

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key !== 'Escape') {
    
                return;
            }

            if (isImageVisible) {
                setIsImageVisible(false);
            } else {
                setIsModalOpen(false);
            }
        }
        window.addEventListener('keydown', handleKeyPress);

        const handleScrollBarVisibility = () => {
            clearTimeout(scrollTimeout);
            setScrollState(null);
            scrollTimeout = window.setTimeout(() => setScrollState('inactive'), 1000);
        }
        currentArticle.addEventListener('scroll', handleScrollBarVisibility);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            currentArticle.removeEventListener('scroll', handleScrollBarVisibility);
        }
    }, 
        [project.desc, isImageVisible, setIsImageVisible, setIsModalOpen, article, description]
    );

    return (
        <div 
            className={`project-modal ${isModalOpen ? 'enter' : 'exit'}`}
            data-util='close'
            onClick={handleCloseModal}
        >   
            <div className='modal-main'>
                <div className='modal-content' >
                    <header className='modal-header'>
                        <h1>{projectData[index].name}</h1>
                        <div data-util='close' className='close-button close-modal' onClick={handleCloseModal}>X</div>
                    </header>
                    <article className={`modal-article ${scrollState}`} ref={article}>
                        <div className='hide-scroll' />
                        <div className='article-content'>
                            <div className='date'>{project.date}</div>
                            <img 
                                className='modal-image'
                                src={require(`../images/${project.image}`)} 
                                alt={project.name}
                                onClick={handleToggleImage}
                            />
                            <div className='project-links'>
                                { 
                                    project.linkSite 
                                    && 
                                    <a href={project.linkSite} target='_blank' rel="noopener noreferrer">Try it out!</a> 
                                }
                                <a href={project.linkRepo} target='_blank' rel="noopener noreferrer">Source Code</a>
                            </div>
                            <ModalImage 
                                image={project.image}
                                name={project.name}
                            />
                            <div ref={description}>{project.desc}</div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default ModalProject;