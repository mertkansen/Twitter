import React, { createContext, useContext, useReducer } from 'react'

export const StateProvideContext = createContext()

export const StateProvider = ({initialState, reducer, children}) => (
    <StateProvideContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateProvideContext.Provider>
)

export const useProviderValue = () => useContext(StateProvideContext)