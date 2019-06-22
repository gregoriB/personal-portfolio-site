import React, { useState } from 'react'

export const StateContext = React.createContext<any>(null);

export const StateProvider: React.SFC<any> = props => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const [isMobile, setDisplayMode] = useState<boolean>(false);
  const [isNavOpen, setNavState] = useState<boolean>(false);
  
  const windowPath : string = window.location.pathname.replace(/\//g, '');
  const [currentPage, setCurrentPage] = useState<string>(windowPath || 'Home');

  const [isImageVisible, setIsImageVisible] = useState<boolean>(false);

  type mouseEvent = React.SyntheticEvent<HTMLDivElement>;

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