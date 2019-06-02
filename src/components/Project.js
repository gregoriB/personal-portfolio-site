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
            {props.name}
            <img src={require(`../images/${props.image}`)} alt={props.name} />
        </div>
    );
}

export default Project;