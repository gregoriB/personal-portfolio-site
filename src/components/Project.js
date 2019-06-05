import React, { useContext } from 'react';
import { StateContext } from '../contexts/StateContext';

function Project(props) {
    const state = useContext(StateContext);

    const handleClick = () => {
        state.setModalState(!state.isModalOpen);
        state.setCurrentProject(props.index)
    }

    return (
        <div className='project' onClick={handleClick}>
            <p className='project-name'>{props.name}</p>
            <img src={require(`../images/${props.image}`)} alt={props.name} />
            <div className='shadow'>
                <p>Click to see more</p>
            </div>
        </div>
    );
}

export default Project;