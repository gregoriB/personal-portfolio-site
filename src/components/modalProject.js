import React, { useContext, useEffect, createRef } from 'react';
import { StateContext } from '../contexts/StateContext';
import projectData from '../helpers/projectData';
import '../styles/modal.css';

function ModalProject() {

    const state = useContext(StateContext);
    const index = state.currentProject;
    const project = projectData[index];

    const handleCloseModal = e => {
       state.setModalState(false);
    }

    const desc = createRef();
    const handleUpdateHTML = () => {
        if (state.isModalOpen) desc.current.innerHTML = project.desc;
    }

    useEffect(() => handleUpdateHTML());

    return (
        state.isModalOpen 
        && 
        <div className='project-modal'
         onClick={(e) => handleCloseModal(e)} 
        >
            <div className='modal-content' >
                <header className='modal-header'>
                    <h1>{projectData[index].name}</h1>
                    <span className='close-modal'onClick={handleCloseModal}>X</span>
                </header>
                <article className='modal-article'>
                    <div className='date'>{project.date}</div>
                    <div className='article-content'>
                        <img src={require(`../images/${project.image}`)} alt={project.name}/>
                        <div ref={desc}></div>
                    </div>
                </article>
                <div className='project-links'>
                    { 
                        project.linkSite 
                        && 
                        <a href={project.linkSite} target='_blank' rel="noopener noreferrer">Check it out</a> 
                    }
                    <a href={project.linkRepo} target='_blank' rel="noopener noreferrer">GITHUB</a>
                </div>
            </div>
        </div>
    )
}

export default ModalProject;