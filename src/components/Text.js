import React, { useContext } from 'react'
import { AppContext } from '../store/reducer'

export default () => {
    let {state, dispatch} = useContext(AppContext)
    return (
        <>
        <h3>{state.name}</h3>
        <button onClick={()=>{
            dispatch({
                type:"setname",
                name:"laoliu"
            })
        }}>点击换名字</button>
        </>
    )
}
