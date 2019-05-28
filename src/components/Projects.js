import React, { useState, useContext } from 'react';
import Project from './Project';
import { StateContext } from '../contexts/StateContext';

export default function Projects() {
    const state = useContext(StateContext);
    const projects = state.projects.map((project, index ) => {
        return (
            <Project 
                name={project}
                index={index}
                key={index}
            />
        )
    })

    return (
        <div className='content'>
            <div className='projects-page'>
                {projects}
            </div>
        </div>
    )
}
