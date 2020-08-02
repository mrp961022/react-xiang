import React,{ createContext, useReducer } from 'react'
// 引入state状态和action方法
import stateContent from './state'
import actionFun from './action'

export const AppContext = createContext();
const reducer = (state, action) =>{
   return actionFun[action.type](state,action)
}
const data = stateContent;
export default (props) => {
    let [ state, dispatch ] = useReducer(reducer,data)
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}
