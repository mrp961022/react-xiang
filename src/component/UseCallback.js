import React, { useState,useCallback } from 'react';

export default () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    let callback = useCallback(()=>{
        console.log(count);
        return count;
    },[count])
    return (
        <>
            <h3>状态count：{count}num：{num}</h3>
            <h3>{callback()}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }}>修改count</button>
            <button onClick={()=>{
                setNum(num+1)
            }}>修改num</button>
        </>
    )
}