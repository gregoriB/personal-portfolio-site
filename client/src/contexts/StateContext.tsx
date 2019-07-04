import React, { useState } from 'react'

interface IContextProps {
  isModalOpen: boolean,
  setIsModalOpen(val: boolean): void,
  isMobile: boolean,
  setIsMobile(val: boolean): void,
  isNavOpen: boolean,
  setIsNavOpen(val: boolean): void,
  currentPage: string,
  setCurrentPage(val: string): void,
}

export const StateContext = React.createContext({} as IContextProps);

export const StateProvider: React.SFC = props => {
  const windowPath = window.location.pathname.replace(/\//g, '');

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>(windowPath || 'Home');

  return (
    <StateContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isMobile,
        setIsMobile,
        isNavOpen,
        setIsNavOpen,
        currentPage,
        setCurrentPage,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}