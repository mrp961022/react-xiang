import React, { createContext, useReducer } from 'react';

// reducer和context实现redux类似功能
export const MyCountext = createContext();
// reducer 修改状态的方法
const reducer = (state, action) => {
    switch (action.type) {
        case 'setname':
            return {
                ...state,
                name:action.name
            } 
        case 'setage':
            return {
                ...state,
                age:action.age
            }  
        default:
            return state
    }
}
// state 状态
const data = {name:"zhangsan", age:19}

export const Reducer =  (props) => {
    let [state, dispatch] = useReducer(reducer, data)
    return (
        <MyCountext.Provider value={{state, dispatch}}>
            {props.children}
        </MyCountext.Provider>
    )
}