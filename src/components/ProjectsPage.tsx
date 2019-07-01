import React, { useEffect, useRef } from 'react';
import Project from './Project';
import projectData from '../helpers/projectData';
import ModalProject from './ProjectModal';
import '../styles/projects-page.css';

const Projects = () => {
    const mapProjects = () => projectData.map((project, index) => <Project key={project.name} name={project.name} index={index} />);

    const projects = useRef<HTMLDivElement | null>(null);    

    useEffect(() => {
        const projectsDiv = projects.current!;
        const handleProjectsMargin = () => {
            if (projectsDiv.offsetHeight < window.innerHeight) {
                projectsDiv.classList.add('full-page'); 
            } else {
                projectsDiv.classList.remove('full-page'); 
            }
        }

        handleProjectsMargin();
        window.addEventListener('resize', handleProjectsMargin)
        return () => {
            window.removeEventListener('resize', handleProjectsMargin)
        };
    }, [projects])

    return (
        <div className='projects-page page'>
            <div ref={projects} className='projects'>
                {mapProjects()}
                <div className='center-focus' />
            </div>
            <ModalProject />
        </div>
    );
}

export default Projects;