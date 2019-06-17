import React, { useContext } from 'react';
import { StateContext } from '../contexts/StateContext';

function Project(props) {
    const state = useContext(StateContext);

    const handleClick = () => {
        state.setCurrentProject(props.index)
        state.setIsModalOpen(true);
    }

    return (
        <div className='project' onClick={handleClick}>
            <p className='click-message'>Click to see more</p>
            <h1 className='project-name'>{props.name}</h1>
        </div>
    );
}

export default Project;