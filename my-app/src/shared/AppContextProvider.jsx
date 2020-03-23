import React, { createContext, useContext, useReducer, useEffect, useRef } from 'react';
import { reducer } from './reducer'
import { initialState } from './initialState'


let currentState = JSON.parse(localStorage.getItem('state')) || initialState;

export const AppContext = createContext();

const useWindowUnloadEffect = (handler, callOnCleanup) => {
    const cb = useRef()

    cb.current = handler

    useEffect(() => {
        const handler = () => cb.current()

        window.addEventListener('beforeunload', handler)

        return () => {
            if (callOnCleanup) handler()

            window.removeEventListener('beforeunload', handler)
        }
    }, [cb])
}

export const AppContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, currentState);

    useEffect(() => {
        currentState = JSON.parse(localStorage.getItem('state'));
        console.log(currentState);
    });

    useWindowUnloadEffect(() => localStorage.setItem('state', JSON.stringify(state)), true)

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
};
export const useContextValue = () => useContext(AppContext);

