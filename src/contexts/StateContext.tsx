import React, { useState } from 'react'

interface IContextProps {
  isModalOpen: boolean,
  setIsModalOpen(val: any): any,
  isMobile: boolean,
  setDisplayMode(val: any): any,
  isNavOpen: boolean,
  setNavState(val: any): any,
  currentProject: number,
  setCurrentProject(val: any): any,
  currentPage: string,
  setCurrentPage(val: any): any,
  isFirstLoad: boolean,
  setIsFirstLoad(val: any): any,
}

export const StateContext = React.createContext({} as IContextProps);


export const StateProvider: React.SFC<any> = props => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const [isMobile, setDisplayMode] = useState<boolean>(false);
  const [isNavOpen, setNavState] = useState<boolean>(false);
  
  const windowPath : string = window.location.pathname.replace(/\//g, '');
  const [currentPage, setCurrentPage] = useState<string>(windowPath || 'Home');

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