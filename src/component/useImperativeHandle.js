import React, {useState, useImperativeHandle, forwardRef, useRef } from 'react';

const Impretive = forwardRef((props, refA)=>{
    const inputRef = useRef();
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    useImperativeHandle(refA, ()=>({
        name:"zhangsan",
        focus: () => {
            inputRef.current.focus();
        },
        num,
        count
    }),[num,count])
    return (
        <>
        <h3>count: {count}</h3>
        <h3>num: {num}</h3>
        <button onClick={()=>{
            setCount(count+1)
        }}>count+1</button>
        <button onClick={()=>{
            setNum(num+1)
        }}>num+1</button>
        <input ref={inputRef} type="text"></input>
        </>
    )
})

export default ()=>{
    const el = useRef();
    return (
        <>
        <Impretive ref={el}/>
        <button onClick={()=>{
            console.log(el)
        }}>获取子组件的自定义方法或者属性</button>
        <button onClick={()=>{
            el.current.focus();
        }}>获取焦点</button>
        </>
    )
}