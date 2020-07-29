import React, { useState, useLayoutEffect, useEffect } from 'react';


export default ()=>{
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("useEffect")
        return ()=>{
            console.log("useEffect-return")
        }
    })
    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        return ()=>{
            console.log("useLayoutEffect-return")
        }
    })
    return (
        <>
        <h1>useLayoutEffect</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>修改count</button>
        </>
    )
};