import React, { useContext } from 'react'
import { AppContext } from '../store/store'

export default () => {
    let { state, dispatch } = useContext(AppContext)
    return (
        <>
        <h1>名字：{state.name}----年龄：{state.age}---分数：{state.num}</h1>
        <button onClick={()=>{
            dispatch({
                type:"changename",
                name:"li"
            })
        }}>修改名称</button>
        <button onClick={()=>{
            dispatch({
                type:"changeage",
                age:22
            })
        }}>修改年龄</button>
        <button onClick={()=>{
            dispatch({type:"changenum"})
        }}>篡改分数</button>
        </>
    )
}
