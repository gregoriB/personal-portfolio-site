import React, { useState } from 'react'

type mouseEvent = React.SyntheticEvent<HTMLDivElement>;

interface IContextProps {
  isModalOpen: boolean,	
  setIsModalOpen(val: boolean): void,	
  isMobile: boolean,	
  setDisplayMode(val: boolean): void,	
  isNavOpen: boolean,	
  setNavState(val: boolean): void,	
  currentProject: number,	
  setCurrentProject(val: number): void,	
  currentPage: string,	
  setCurrentPage(val: string): void,	
  isFirstLoad: boolean,	
  setIsFirstLoad(val: boolean): void,
  isImageVisible: boolean
  setIsImageVisible(val: boolean): void,
  handleToggleImage(e: mouseEvent): void;
}

export const StateContext = React.createContext({} as IContextProps);

export const StateProvider: React.SFC = props => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const [isMobile, setDisplayMode] = useState<boolean>(false);
  const [isNavOpen, setNavState] = useState<boolean>(false);
  
  const windowPath : string = window.location.pathname.replace(/\//g, '');
  const [currentPage, setCurrentPage] = useState<string>(windowPath || 'Home');

  const [isImageVisible, setIsImageVisible] = useState<boolean>(false);

  const handleToggleImage = (e: mouseEvent) => {
      if (!(e.target instanceof HTMLElement) || (isImageVisible && e.target.dataset.util !== 'close')) {
          
          return;
      }
      setIsImageVisible(!isImageVisible);
  }

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
        setIsFirstLoad,
        isImageVisible,
        setIsImageVisible,
        handleToggleImage
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}