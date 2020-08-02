import React, { createContext, useReducer } from 'react'
import ActionFun from './action'
import StateObj from './state'

export const AppContext = createContext();

const reducer = (state, action) => {
    return ActionFun[action.type](state, action)
}

const data = StateObj;

export default (props) => {
    const [ state, dispatch ] = useReducer(reducer, data)
    return (
        <AppContext.Provider value={{state, dispatch}}>
            { props.children }
        </AppContext.Provider>
    )
}
