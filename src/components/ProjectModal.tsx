import React, { useContext, useState, useEffect, useRef } from 'react';
import { StateContext } from '../contexts/StateContext';
import ModalImage from './ImageModal';
import projectData from '../helpers/projectData';
import '../styles/modal-project.css';
import '../styles/modal-transitions.css';

type mouseEvent = React.SyntheticEvent<HTMLDivElement | HTMLImageElement>;

interface IProps {
    currentProject: number
}

const ProjectModal: React.SFC<IProps> = ({ currentProject }) => {
    const { isModalOpen, setIsModalOpen } = useContext(StateContext);
    const [scrollState, setScrollState] = useState<string | null>('inactive');
    const [isImageVisible, setIsImageVisible] = useState<boolean>(false);

    const { name, date, image, alt, caption, site, repo, desc }  = projectData[currentProject];

    const handleImageKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            !isImageVisible && setIsImageVisible(true)
        }
    }

    const handleToggleImage = (e: mouseEvent) => {
        if (!(e.target instanceof HTMLElement) || (isImageVisible && e.target.dataset.util !== 'image-close')) {
            
            return;
        }
        setIsImageVisible(!isImageVisible);

    }

    const handleCloseModal = (e: mouseEvent) => {
        if (!(e.target instanceof HTMLElement) || e.target.dataset.util !== 'modal-close' ||  isImageVisible) {

            return;
        }
        setIsModalOpen(false);
    }

    const description = useRef<HTMLDivElement | null>(null);
    const article = useRef<HTMLElement | null>(null);
    const imageElement = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        if (isModalOpen) {
            setTimeout(() => article.current && article.current!.focus(), 1000)
        }
    }, [isModalOpen])

    useEffect(() => {
        let scrollTimeout: number;
        const currentDesc = description.current!;
        const currentArticle = article.current!;

        const handleUpdateArticle = () => {
            currentDesc.innerHTML = desc;
            currentArticle.scrollTo(0, 0);
        };
        handleUpdateArticle();

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                isImageVisible ? setIsImageVisible(false): setIsModalOpen(false);
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
        [desc, isImageVisible, setIsImageVisible, setIsModalOpen, article, description, imageElement]
    );

    return (
        <div 
            className={`modal project-modal ${isModalOpen ? 'enter' : 'exit'}`}
            data-util='modal-close'
            onClick={handleCloseModal}
        >   
            <div className='main'>
                <div className='content' >
                    <header className='header'>
                        <h1>{projectData[currentProject].name}</h1>
                        <div data-util='modal-close' className='close-button close-modal' onClick={handleCloseModal}>X</div>
                    </header>
                    <article tabIndex={1} className={`modal-article ${scrollState}`} ref={article} >
                        <div className='hide-scroll' />
                        <div className='article-content' >
                            <div className='date'>{date}</div>
                            <div className='image'>
                                <img 
                                    onFocus={() => imageElement.current!.addEventListener('keydown', handleImageKeyPress) }
                                    onBlur={() => imageElement.current!.removeEventListener('keydown', handleImageKeyPress) }
                                    onClick={handleToggleImage}
                                    ref={imageElement}
                                    src={require(`../images/${image}`)} 
                                    alt={alt}
                                    tabIndex={0}
                                />
                                <figcaption>{caption}</figcaption>
                            </div>
                            <div className='project-links'>
                                {
                                    site 
                                    && 
                                    <a href={site} target='_blank' rel="noopener noreferrer">Try it out!</a> 
                                }
                                <a href={repo} target='_blank' rel="noopener noreferrer">Source Code</a>
                            </div>
                            <div className='description' ref={description}>{desc}</div>
                        </div>
                    </article>
                </div>
            </div>
            <ModalImage
                handleToggleImage={handleToggleImage}
                isImageVisible={isImageVisible}
                image={image}
                name={name}
            />
        </div>
    )
}

export default ProjectModal;