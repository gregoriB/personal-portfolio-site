import React, { useContext, useRef  } from 'react';
import { StateContext } from '../contexts/StateContext';

interface IProps {
    name: string,
    index: number,
    id: string,
    setProject(val: number): void
}

const Project: React.SFC<IProps> = ({ name, index, setProject, id }) => {
    const { isMobile, isModalOpen, setIsModalOpen, setIsNavOpen } = useContext(StateContext);

    const project = useRef<HTMLDivElement | null>(null);

    const handleCheckIfFocused = () => {
        const { top, bottom, height } = project.current!.getBoundingClientRect();
        const topCheck = top + (height / 2) > 0
        const bottomCheck = bottom - (height / 2) < window.innerHeight;
        
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
        <div className='project-border' id={id} onClick={handleClick}>
            <div ref={project} className='project'  >
                <p className='click-message'>Click to see more</p>
                <h1><button className='project-name' tabIndex={isModalOpen ? -1 : 0}>{name}</button></h1>
            </div>
        </div>
    );
}

export default Project;