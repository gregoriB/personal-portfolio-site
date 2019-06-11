import React from 'react';
import Project from './Project';
import projectData from '../helpers/projectData';
import ModalProject from './ModalProject';
import '../styles/projects.css';

export default function Projects() {
    const mapProjects = () => {
        return projectData.map((project, index ) => {
            return (
                <>
                    <Project 
                        name={project.name}
                        image={project.image}
                        index={index}
                        key={index}
                    />
                </>
            );
        });
    }

    return (
        <div className='projects-page page'>
            <div className='projects'>
                {mapProjects()}
            </div>
            <ModalProject />
        </div>
    );
}
