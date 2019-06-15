import React, { useState } from 'react'

export const StateContext = React.createContext();

export function StateProvider(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const [isMobile, setDisplayMode] = useState(false);
  const [isNavOpen, setNavState] = useState(false);
  
  const windowPath = window.location.pathname.replace(/\//g, '');
  const [currentPage, setCurrentPage] = useState(windowPath || 'Home');

  return (
    <StateContext.Provider 
      value={{
        isModalOpen,
        setIsModalOpen,
        isMobile,
        setDisplayMode,
        isNavOpen,
        setNavState,
        currentProject,
        setCurrentProject,
        currentPage,
        setCurrentPage,
        isFirstLoad,
        setIsFirstLoad
      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}