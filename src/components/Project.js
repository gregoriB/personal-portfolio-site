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
            <h2 className='project-name'>{props.name}</h2>
            <img src={require(`../images/${props.image}`)} alt={props.name} />
            <div className='shadow'>
                <p>Click to see more</p>
            </div>
        </div>
    );
}

export default Project;