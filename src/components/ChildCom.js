import React from 'react'

export const ChildCom = (props) => {
    return (
        <div>
            <button onClick={()=>{
                props.dispatch({
                    type: "setage",
                    age: Math.ceil(100*Math.random())
                })
            }}>{props.str1.dispatch}</button>
            <button onClick={()=>{
                props.useAaa(Math.ceil(100*Math.random()))
            }}>{props.str1.useAaa}</button>
        </div>
    )
}
