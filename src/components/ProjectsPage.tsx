import React, { useState, useEffect, useRef } from 'react';
import Project from './Project';
import projectData from '../helpers/projectData';
import ProjectModal from './ProjectModal';
import '../styles/projects-page.css';

const Projects = () => {
    const [currentProject, setCurrentProject] = useState<number>(0);

    const mapProjects = () => projectData.map((project, index) => <Project setProject={setCurrentProject} key={project.name} name={project.name} index={index} />);

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
                <div className="stylish-container">
            <div ref={projects} className='projects'>
                    {mapProjects()}
                    <div className='center-focus' />
                </div>
            </div>
            <ProjectModal currentProject={currentProject} />
            <div className='decorative-1' />
        </div>
    );
}

export default Projects;