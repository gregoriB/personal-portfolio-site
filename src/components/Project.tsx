import React, { useContext, useRef  } from 'react';
import { StateContext } from '../contexts/StateContext';

interface IProps {
    name: string,
    index: number,
    setProject(val: number): void
}

const Project: React.SFC<IProps> = ({ name, index, setProject}) => {
    const { isMobile, setIsModalOpen, setIsNavOpen } = useContext(StateContext);

    const project = useRef<HTMLDivElement | null>(null);

    const handleCheckIfFocused = () => {
        const projDiv = project.current!.getBoundingClientRect();
        const topCheck = projDiv.top > 0
        const bottomCheck = projDiv.bottom < window.innerHeight;
        
        return topCheck && bottomCheck;
    }

    const handleClick = () => {
        if (!handleCheckIfFocused() && isMobile) {

            return;
        }
        setProject(index)
        setIsModalOpen(true);
        setIsNavOpen(false);
    }

    return (
        <div className='project-border'>
            <div ref={project} className='project' onClick={handleClick}>
                <p className='click-message'>Click to see more</p>
                <h1 className='project-name'>{name}</h1>
            </div>
        </div>
    );
}

export default Project;