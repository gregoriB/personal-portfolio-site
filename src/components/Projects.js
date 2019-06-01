import React from 'react';
import Project from './Project';
// import { StateContext } from '../contexts/StateContext';
import projectData from '../helpers/projectData';

export default function Projects() {

    const projectsMapped = projectData.map((project, index ) => {
        return (
            <Project 
                name={project.name}
                image={project.image}
                index={index}
                key={index}
            />
        )
    })

    return (
        <div className='content'>
            <div className='projects-page'>
                {projectsMapped}
            </div>
        </div>
    )
}
