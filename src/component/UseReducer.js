import React, { useReducer } from 'react';

export default () => {
    const [state, dispatch] = useReducer((state, action)=>{
        switch (action.type) {
            case 'setname':
                return {
                    ...state,
                    name: action.name
                }
            case 'setage':
                return {
                    ...state,
                    age: action.age
                }
            default:
                return state
        }
    },{ name:'zhangsan', age:10 })
    return (
        <>
        <h3>姓名：{state.name}----年龄：{state.age}</h3>
        <button onClick={()=>{
            dispatch({
                type:'setname',
                name:'lisi'
            })
        }}>修改姓名</button>
        <button onClick={()=>{
            dispatch({
                type:'setage',
                age:20
            })
        }}>修改年龄</button>
        </>
    )
};