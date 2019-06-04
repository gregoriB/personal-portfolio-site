import React, { useState } from 'react'

export const StateContext = React.createContext();

export function StateProvider(props) {
  const [isModalOpen, setModalState] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  
  const windowPath = window.location.pathname.replace(/\//g, '');
  const [currentPage, setCurrentPage] = useState(windowPath || 'Home');


  return (
    <StateContext.Provider 
      value={{
        isModalOpen,
        setModalState,
        currentProject,
        setCurrentProject,
        currentPage,
        setCurrentPage
      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}