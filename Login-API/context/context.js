import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
  // Initial state values
};

const reducer = (state, action) => {
  switch (action.type) {
    // Handle state changes based on action types
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
