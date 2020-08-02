import React, { useMemo } from 'react'
export default ({c, a}) => {
    let res = useMemo(()=>{
        return {c, a}
    },[c])
    return (
        <h2>子组件 count{res.c}---num{res.a}</h2>
    )
}