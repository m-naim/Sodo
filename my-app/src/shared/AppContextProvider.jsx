import React, { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducer'

const initialState = {
    lists: [
        { id: 1, title: 'roro' },
        { id: 2, title: 'koko' },
        { id: 3, title: 'lolo' }
    ],
    tasks: [{
        listId: 1,
        payload: [
            { id: 1, title: 'roro' },
            { id: 2, title: 'koko' },
        ]
    },
    {
        listId: 2,
        payload: [
            { id: 1, title: 'ro' },
            { id: 2, title: 'ko' },
        ]
    }],
    selectedList: 1
}
export const StateContext = createContext();

export const AppContextProvider = ({ children }) => (

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const useContextValue = () => useContext(StateContext);