import React, { useContext } from 'react';
import { MyCountext } from './Reducer'

export default () => {
    let {state, dispatch} = useContext(MyCountext)
    return (
        <>
        <h3>名字：{state.name}----年龄：{state.age}</h3>
        <button onClick={()=>{
            dispatch({
                type:'setname',
                name:'Text1'
            })
        }} >setName</button>
        <button onClick={()=>{
            dispatch({
                type:'setage',
                age:22
            })
        }}>setAge</button>
        </>
    )
}