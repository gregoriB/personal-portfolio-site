import React, { useContext, useRef  } from 'react';
import { StateContext } from '../contexts/StateContext';

interface IProps {
    name: string,
    index: number
}

const Project: React.SFC<IProps> = ({ name, index }) => {
    const state = useContext(StateContext);

    const project = useRef<HTMLDivElement | null>(null);

    const handleCheckIfFocused = () => {
        const projDiv = project.current!.getBoundingClientRect();
        const topCheck = projDiv.top > 0
        const bottomCheck = projDiv.bottom < window.innerHeight;
        
        return topCheck && bottomCheck;
    }

    const handleClick = () => {
        if (!handleCheckIfFocused()) {

            return;
        }
        state.setCurrentProject(index)
        state.setIsModalOpen(true);
        state.setNavState(false);
    }

    return (
        <div ref={project} className='project' onClick={handleClick}>
            <p className='click-message'>Click to see more</p>
            <h1 className='project-name'>{name}</h1>
        </div>
    );
}

export default Project;