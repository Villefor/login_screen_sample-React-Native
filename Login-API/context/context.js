import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
  token: null,
  // Other initial state values
};

const actionTypes = {
  SET_TOKEN: 'SET_TOKEN',
  // Add other action types as needed
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    // Add other cases for additional actions
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
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext, actionTypes };
