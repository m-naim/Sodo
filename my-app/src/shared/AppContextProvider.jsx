import React, {
  createContext, useContext, useReducer, useEffect,
} from 'react';
import reducer from './reducer';
import initialState from './initialState';
import useWindowUnloadEffect from '../utils/useWindowUnloadEffect';

let currentState = JSON.parse(localStorage.getItem('session-state')) || initialState;

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, currentState);

  useEffect(() => {
    localStorage.setItem('session-state', JSON.stringify(state));
  });

  // useWindowUnloadEffect(() => {
  // }, true);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export const useContextValue = () => useContext(AppContext);
