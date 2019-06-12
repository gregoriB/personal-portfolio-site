import React, { useState } from 'react'

export const StateContext = React.createContext();

export function StateProvider(props) {
  const [isModalOpen, setModalState] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const [isMobile, setDisplayMode] = useState(false);
  const [isNavOpen, setNavState] = useState(false);
  
  const windowPath = window.location.pathname.replace(/\//g, '');
  const [currentPage, setCurrentPage] = useState(windowPath || 'Home');

  return (
    <StateContext.Provider 
      value={{
        isModalOpen,
        setModalState,
        isMobile,
        setDisplayMode,
        isNavOpen,
        setNavState,
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