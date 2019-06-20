import React from 'react';
import Project from './Project';
import projectData from '../helpers/projectData';
import ModalProject from './ModalProject';
import '../styles/projects.css';

export default function Projects() {
    const mapProjects = () => {
        return projectData.map((project, index: number ) => {
            return (
                <Project 
                    key={project.name}
                    name={project.name}
                    index={index}
                />
            );
        });
    }

    return (
        <div className='projects-page page'>
            <div className='projects'>
                {mapProjects()}
                <div className='center-focus' />
            </div>
            <ModalProject />
        </div>
    );
}