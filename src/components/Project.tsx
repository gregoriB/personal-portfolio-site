import React, { useContext  } from 'react';
import { StateContext } from '../contexts/StateContext';

interface IProps {
    name: string,
    index: number
}

const Project: React.SFC<IProps> = ({ name, index }) => {
    const state = useContext(StateContext);

    const handleClick = () => {
        state.setCurrentProject(index)
        state.setIsModalOpen(true);
        state.setNavState(false);
    }

    return (
        <div className='project' onClick={handleClick}>
            <p className='click-message'>Click to see more</p>
            <h1 className='project-name'>{name}</h1>
        </div>
    );
}

export default Project;