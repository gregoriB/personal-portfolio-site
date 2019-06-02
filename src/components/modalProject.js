import React, { useContext } from 'react';
import { StateContext } from '../contexts/StateContext';
import projectData from '../helpers/projectData';
import '../styles/modal.css';

function ModalProject() {
    const state = useContext(StateContext);
    const index = state.currentProject;
    const project = projectData[index];

    const handleCloseModal = e => {
       state.setModalState(false);
        console.log(e)
    }

    return (
        state.isModalOpen 
        && 
        <div className='modal project-modal' onClick={(e) => handleCloseModal(e)} >
            <div className='modal-content' >
                <span onClick={handleCloseModal}>x</span>
                <div className='content'>
                    <div className='flex-container'>
                        <h1>{projectData[index].name}</h1>
                        <div>{project.date}</div>
                        <img src={require(`../images/${project.image}`)} alt={project.name}/>
                        <p>{project.desc}</p>
                    </div>
                </div>
                { 
                    project.linkSite 
                    && 
                    <a href={project.linkSite} target='_blank' rel="noopener noreferrer">Check it out</a> 
                }
                <a href={project.linkRepo} target='_blank' rel="noopener noreferrer">GITHUB</a>
            </div>
        </div>
    )
}

export default ModalProject;