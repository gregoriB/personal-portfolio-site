import React, { useState } from 'react'

export const StateContext = React.createContext();

export function StateProvider(props) {
  
  const [currentPage, setCurrentPage] = useState(null);
  const projects = ["project 1", "Project 2", "Project 3", "project 4", "Project 5", "Project 6"]


  return (
    <StateContext.Provider 
      value={{
        currentPage,
        setCurrentPage,
        projects
      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}