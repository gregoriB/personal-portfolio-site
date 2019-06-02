import React, { useState } from 'react'

export const StateContext = React.createContext();

export function StateProvider(props) {
  const [isModalOpen, setModalState] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentPage, setCurrentPage] = useState('Home');
  const projects = ["project 1", "Project 2", "Project 3", "project 4", "Project 5", "Project 6"]


  return (
    <StateContext.Provider 
      value={{
        isModalOpen,
        setModalState,
        currentProject,
        setCurrentProject,
        currentPage,
        setCurrentPage,
        projects
      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}